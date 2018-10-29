package team.fas.ym.action;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;

import team.fas.ym.entity.User;
import team.fas.ym.entity.UserAddress;
import team.fas.ym.service.UserAddressService;
import team.fas.ym.util.CtxUtil;

@WebServlet("/UserAddressController.do")
public class UserAddressController extends BaseController {

	private static final long serialVersionUID = 1L;

	private UserAddressService userAddressService = null;

	@Override
	public void init() throws ServletException {
		super.init();
		userAddressService = CtxUtil.getBean("userAddressService");
	}

	public String getAllUserAddress(HttpServletRequest request, HttpServletResponse response) {
		return "json:"
				+ JSON.toJSONString(userAddressService.getAllUserAddress(), SerializerFeature.WriteNullStringAsEmpty);
	}

	public String insertUserAddress(HttpServletRequest request, HttpServletResponse response) {
		UserAddress userAddress=new UserAddress();
		User user=new User();
		user.setId(Integer.parseInt(request.getParameter("userId")));
		userAddress.setUser(user);
		userAddress.setAddress(request.getParameter("address"));
		return "json:{\"result\":\"" + userAddressService.insertUserAddress(userAddress) + "\"}";
	}
}
