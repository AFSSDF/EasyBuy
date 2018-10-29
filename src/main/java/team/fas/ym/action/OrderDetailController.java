package team.fas.ym.action;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.alibaba.fastjson.JSON;

import team.fas.ym.service.OrderDetailService;
import team.fas.ym.util.CtxUtil;

@WebServlet("/OrderDetailController.do")
public class OrderDetailController extends BaseController {

	private static final long serialVersionUID = 1L;
	private OrderDetailService orderDetailService = null;

	@Override
	public void init() throws ServletException {
		super.init();
		orderDetailService = CtxUtil.getBean("orderDetailService");
	}

	public String getUserProducts(HttpServletRequest request, HttpServletResponse response) {
		String id = request.getParameter("id");
		return "json:" + JSON.toJSONString(orderDetailService.getUserProducts(id));
	}
	

}
