package team.fas.ym.test;

import javax.annotation.Resource;

import org.junit.Test;
import org.springframework.stereotype.Component;

import com.sun.org.apache.bcel.internal.generic.NEW;

import team.fas.ym.service.ProductService;
import team.fas.ym.service.UserService;

public class ProductTest {
	public static void main(String[] args) {
		ProductService productService = CtxUtilTest.getBean("productService");
		System.out.println(productService.getProductCount());
	}
}
