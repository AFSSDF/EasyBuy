package team.fas.ym.action;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;

import team.fas.ym.service.OrderService;
import team.fas.ym.util.CtxUtil;

@WebServlet("/OrderController.do")
public class OrderController extends BaseController {

	private static final long serialVersionUID = 1L;

	private OrderService orderService;

	@Override
	public void init() throws ServletException {
		super.init();
		orderService = CtxUtil.getBean("orderService");
	}

	public String getOrdersList(HttpServletRequest request, HttpServletResponse response) {
		return "json:" + JSON.toJSONString(orderService.getOrdersList());
	}

	// 返回订单列表分页的JSON
	public String getOrdersListToPage(HttpServletRequest request, HttpServletResponse response) {
		String pageCur = request.getParameter("pageCur");
		return "json:" + JSON.toJSONString(orderService.getOrdersListToPage(pageCur, 3));
	}

	public String getOrderById(HttpServletRequest request, HttpServletResponse response) {
		String id = request.getParameter("id");
		return "json:" + JSON.toJSONString(orderService.getOrderById(id));
	}
}
