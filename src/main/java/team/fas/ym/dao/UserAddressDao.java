package team.fas.ym.dao;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;

import team.fas.ym.entity.UserAddress;

@MapperScan
public interface UserAddressDao {

	List getAllUserAddress();

	int insertUserAddress(UserAddress userAddress);

}
