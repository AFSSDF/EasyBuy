package team.fas.ym.test;

import com.alibaba.fastjson.JSON;

import team.fas.ym.service.OrderDetailService;

public class OrderDetailTest {
	public static void main(String[] args) {
		OrderDetailService orderDetailService = CtxUtilTest.getBean("orderDetailService");
		System.out.println(JSON.toJSONString(orderDetailService.getUserProducts("23")));
	}
}
