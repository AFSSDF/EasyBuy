package team.fas.ym.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.mybatis.spring.annotation.MapperScan;

import team.fas.ym.entity.User;

@MapperScan
public interface UserDao {
	List<User> getUsersList();

	User getUserByName(@Param("userName") String userName);

	int getUsersCount();

	int checkUser(@Param("loginName") String loginName, @Param("password") String password, @Param("type") int type);

	String getUserNameByLoginName(@Param("loginName") String loginName);

	Integer deleteUserById(@Param("id") int id);

	int checkloginName(@Param("loginName") String loginName);

	int insertUser(User user);

	int updateUser(User user);

	User getUserById(@Param("id") String id);

	String getPasswordByid(@Param("id") int id);

	User getUserByLoginName(@Param("loginName") String loginName);

	List getUsersListToPage(@Param("arg1") int arg1, @Param("arg2") int arg2);
}
