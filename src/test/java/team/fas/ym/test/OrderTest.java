package team.fas.ym.test;

import team.fas.ym.service.OrderService;

public class OrderTest {

	public static void main(String[] args) {
		OrderService orderService = CtxUtilTest.getBean("orderService");
		System.out.println(orderService.getOrderCount());

	}

}
