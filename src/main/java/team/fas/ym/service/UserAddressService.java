package team.fas.ym.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import team.fas.ym.dao.UserAddressDao;
import team.fas.ym.entity.UserAddress;

@Service
public class UserAddressService {

	@Resource
	private UserAddressDao userAddressDao;

	public List getAllUserAddress() {
		return userAddressDao.getAllUserAddress();
	}

	public int insertUserAddress(UserAddress userAddress) {
		return userAddressDao.insertUserAddress(userAddress);
	}

}
