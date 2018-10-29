package team.fas.ym.test;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;

import team.fas.ym.entity.User;
import team.fas.ym.entity.UserAddress;
import team.fas.ym.service.UserAddressService;

public class UserAddressTest {
	public static void main(String[] args) {
		UserAddressService userAddressService = CtxUtilTest.getBean("userAddressService");
//		UserAddress userAddress=new UserAddress();
//		User user=new User();
//		user.setId(41);
//		userAddress.setUser(user);
//		userAddress.setAddress("山西省-运城市-永济市");
//		System.out.println(userAddressService.insertUserAddress(userAddress));
		System.out.println(userAddressService.getAllUserAddress().size());
		System.out.println(JSON.toJSONString(userAddressService.getAllUserAddress(), SerializerFeature.WriteNullStringAsEmpty));
	}
}
