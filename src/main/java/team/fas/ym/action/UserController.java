package team.fas.ym.action;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.alibaba.fastjson.JSON;

import team.fas.ym.entity.User;
import team.fas.ym.service.UserService;
import team.fas.ym.session.MySessionContext;
import team.fas.ym.util.CtxUtil;

@WebServlet("/UserController.do")
public class UserController extends BaseController {

	private static final long serialVersionUID = 1L;

	private UserService userService;
	private MySessionContext myc;

	@Override
	public void init() throws ServletException {
		userService = CtxUtil.getBean("userService");
		myc = MySessionContext.getInstance();
		super.init();
	}

	// 返回用户列表的JSON
	public String getUsersList(HttpServletRequest request, HttpServletResponse response) {
		return "json:" + JSON.toJSONString(userService.getUsersList());
	}

	// 返回用户列表分页的JSON
	public String getUsersListToPage(HttpServletRequest request, HttpServletResponse response) {
		String pageCur = request.getParameter("pageCur");
		return "json:" + JSON.toJSONString(userService.getUsersListToPage(pageCur, 10));
	}

	// 返回用户数量
	public String getUsersCount(HttpServletRequest request, HttpServletResponse response) {
		return "json:{\"count\":\"" + userService.getUsersCount() + "\"}";
	}

	// 通过用户名返回用户Id
	public String getUsersIdByLoginName(HttpServletRequest request, HttpServletResponse response) {
		String loginName=request.getParameter("loginName");
		return "json:{\"result\":\"" + userService.getUserByLoginName(loginName).getId() + "\"}";
	}

	// 验证管理员用户登陆
	// 成功后保存在Session中并返回查询结果、用户名称、SessionId
	// 失败后返回查询结果
	public String checkAdmin(HttpServletRequest request, HttpServletResponse response) {
		String loginName = request.getParameter("loginName");
		String password = request.getParameter("password");
		String userName = null;
		int result = userService.checkAdmin(loginName, password);
		if (result == 1) {
			userName = userService.getUserNameByLoginName(loginName);
			HttpSession session = request.getSession();
			session.setAttribute("login", userName);
			session.setMaxInactiveInterval(60 * 60 * 24 * 7);
			myc.addSession(session);
			System.out.println("checkAdmin sessionId:" + session.getId());
			return "json:{\"result\":\"" + result + "\",\"userName\":\"" + userName + "\",\"sessionId\":\""
					+ session.getId() + "\"}";
		}
		return "json:{\"result\":\"" + result + "\"}";
	}

	// 验证会话
	// 通过sessionId验证会话
	public String checkSession(HttpServletRequest request, HttpServletResponse response) {
		String sessionId = request.getParameter("sessionId");
		HttpSession session = myc.getSession(sessionId);
		String userName = null;
		try {
			userName = (String) session.getAttribute("login");
		} catch (Exception e) {
			System.out.println(sessionId);
		}
		if (userName != null) {
			userName = "\"" + userName + "\"";
		}
		return "json:{\"userName\":" + userName + "}";
	}
	
	public String scanQRcode(HttpServletRequest request, HttpServletResponse response) {
		
		return null;
	}
	
	// 用户注销操作
	public String logOffSession(HttpServletRequest request, HttpServletResponse response) {
		String sessionId = request.getParameter("sessionId");
		HttpSession session = myc.getSession(sessionId);
		myc.delSession(session);
		return "json:{\"result\":\"" + 1 + "\"}";
	}

	// 删除用户
	// 返回受影响的行数
	public String deleteUser(HttpServletRequest request, HttpServletResponse response) {
		int id = Integer.parseInt(request.getParameter("id"));
		return "json:{\"result\":\"" + userService.deleteUserById(id) + "\"}";
	}

	// 验证用户名是否存在
	// 返回true 用户名不存在
	// 返回false 用户名存在
	public String checkloginName(HttpServletRequest request, HttpServletResponse response) {
		String loginName = request.getParameter("loginName");
		return "json:{\"valid\":" + userService.checkloginName(loginName) + "}";
	}

	// 新增用户
	public String insertUser(HttpServletRequest request, HttpServletResponse response) {
		User user = new User();
		user.setId(0);
		user.setUserName(request.getParameter("userName"));
		user.setLoginName(request.getParameter("loginName"));
		user.setPassword(request.getParameter("password"));
		user.setSex(Integer.parseInt(request.getParameter("sex")));
		user.setIdentityCode(request.getParameter("identityCode"));
		user.setEmail(request.getParameter("email"));
		user.setMobile(request.getParameter("mobile"));
		user.setType(Integer.parseInt(request.getParameter("type")));
		return "json:{\"result\":\"" + userService.insertUser(user) + "\"}";
	}

	// 更新用户
	public String updateUser(HttpServletRequest request, HttpServletResponse response) {
		User user = new User();
		user.setId(Integer.parseInt(request.getParameter("id")));
		user.setUserName(request.getParameter("userName"));
		user.setLoginName(request.getParameter("loginName"));
		user.setPassword(request.getParameter("password"));
		user.setSex(Integer.parseInt(request.getParameter("sex")));
		user.setIdentityCode(request.getParameter("identityCode"));
		user.setEmail(request.getParameter("email"));
		user.setMobile(request.getParameter("mobile"));
		user.setType(Integer.parseInt(request.getParameter("type")));
		return "json:{\"result\":\"" + userService.updateUser(user) + "\"}";
	}

	// 通过Id获得User
	// 返回User的JSON
	public String getUserById(HttpServletRequest request, HttpServletResponse response) {
		String id = request.getParameter("id");
		return "json:" + JSON.toJSONString(userService.getUserById(id));
	}

	// =======PC=======端=======专=======用=======友=======情=======分=======割=======线================================

	// PC端验证登陆页面会话
	public String checkLoginSessionInPC(HttpServletRequest request, HttpServletResponse response) {
		User admin = (User) request.getSession().getAttribute("admin");
		if (admin == null) {
			Cookie[] cookies = request.getCookies();
			for (Cookie cookie : cookies) {
				if ("admin".equals(cookie.getName())) {
					admin = userService.getUserByLoginName(cookie.getValue());
					HttpSession session = request.getSession();
					session.setAttribute("admin", admin);
					return "json:{\"result\":\"html/Member.jsp\"}";
				}
			}
			return "json:{\"result\":\"\"}";
		} else {
			return "json:{\"result\":\"html/Member.jsp\"}";
		}
	}

	// PC端验证登陆
	public String checkAdminInPC(HttpServletRequest request, HttpServletResponse response) {
		String loginName = request.getParameter("loginName");
		String password = request.getParameter("password");
		int result = userService.checkAdmin(loginName, password);
		if (result == 1) {
			HttpSession session = request.getSession();
			User admin = userService.getUserByLoginName(loginName);
			session.setAttribute("admin", admin);
			session.setMaxInactiveInterval(60 * 60 * 24 * 7);
			Cookie cookie = new Cookie("admin", loginName);
			cookie.setMaxAge(60 * 60 * 24 * 7);
			response.addCookie(cookie);
			request.setAttribute("message", null);
			return "redirect:/EasyBuy/html/Member.jsp";
		}
		request.setAttribute("message", "用户名或密码错误");
		return "/html/Login.jsp";
	}

	// 注销操作
	public String UserLogOffInPC(HttpServletRequest request, HttpServletResponse response) {
		request.getSession().invalidate();
		Cookie[] cookies = request.getCookies();
		for (Cookie cookie : cookies) {
			if ("admin".equals(cookie.getName())) {
				cookie.setMaxAge(0);
				response.addCookie(cookie);
			}
		}
		return "redirect:/EasyBuy/html/Login.jsp";
	}

	// PC端验证会话
	public String checkSessionInPC(HttpServletRequest request, HttpServletResponse response) {
		User admin = (User) request.getSession().getAttribute("admin");
		if (admin == null) {
			Cookie[] cookies = request.getCookies();
			for (Cookie cookie : cookies) {
				if ("admin".equals(cookie.getName())) {
					admin = userService.getUserByLoginName(cookie.getValue());
					HttpSession session = request.getSession();
					session.setAttribute("admin", admin);
					return "json:{\"result\":\"\"}";
				}
			}
			return "json:{\"result\":\"Login.jsp\"}";
		} else {
			return "json:{\"result\":\"\"}";
		}
	}
}
