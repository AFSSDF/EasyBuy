package team.fas.ym.test;

import org.junit.Test;

import com.alibaba.fastjson.JSON;

import team.fas.ym.entity.User;
import team.fas.ym.service.UserService;
import team.fas.ym.test.CtxUtilTest;

public class UserMapperTest {

	public static void main(String[] args) {
		UserService userService = CtxUtilTest.getBean("userService");
		User user=new User();
		user.setId(23);
		user.setUserName("小用户");
		System.out.println("json:{\"result\":"+userService.updateUser(user)+"}");
//		System.out.println("11");
//		UserService userService = CtxUtilTest.getBean("userService");
//		System.out.println("userService Count:" + userService.getUsersCount());
	}

	@Test
	public void testService() {
		UserService userService = CtxUtilTest.getBean("userService");
		System.out.println("userService Count:" + userService.checkloginName("admin"));
	}
	
	@Test
	public void testGetIdByLoginName() {
		UserService userService = CtxUtilTest.getBean("userService");
		System.out.println("userService Id:" + userService.getUserByLoginName("root").getId());
	}
	
	@Test
	public void testInsert() {
		UserService userService = CtxUtilTest.getBean("userService");
		User user=new User();
		user.setId(0);
		user.setUserName("超级用户");
		user.setLoginName("root");
		user.setPassword("123123");
		user.setSex(0);
		user.setType(1);
		System.out.println("json:{\"result\":"+userService.insertUser(user)+"}");
	}
	
	@Test
	public void testUpdate() {
		UserService userService = CtxUtilTest.getBean("userService");
		User user=new User();
		user.setId(23);
		user.setUserName("用户");
		System.out.println("json:{\"result\":"+userService.updateUser(user)+"}");
	}
	
	@Test
	public void testById() {
		UserService userService = CtxUtilTest.getBean("userService");
		System.out.println("json:" + JSON.toJSONString(userService.getUserById("1")));
	}
	
}
