package team.fas.ym.test;

import com.alibaba.fastjson.JSON;

import team.fas.ym.service.ProductCategoryService;
import team.fas.ym.util.CtxUtil;

public class ProductCategoryTest {
	public static void main(String[] args) {
		ProductCategoryService productCategoryService = CtxUtilTest.getBean("productCategoryService");
		System.out.println(JSON.toJSONString(productCategoryService.cbProductCategory("品")));
	}
}
