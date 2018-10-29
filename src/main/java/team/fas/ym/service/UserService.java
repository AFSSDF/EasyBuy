package team.fas.ym.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import team.fas.ym.dao.UserDao;
import team.fas.ym.entity.User;
import team.fas.ym.service.UserService;
import team.fas.ym.util.MD5Util;
import team.fas.ym.util.PageBean;

@Service
public class UserService {

	@Resource
	private UserDao userDao;

	public List<User> getUsersList() {
		return userDao.getUsersList();
	}

	// 无用
	public User getUserByName(String userName) {
		return userDao.getUserByName(userName);
	}

	public int getUsersCount() {
		return userDao.getUsersCount();
	}

	public int checkAdmin(String loginName, String password) {
		return userDao.checkUser(loginName, MD5Util.md5(password), 1);
	}

	public String getUserNameByLoginName(String loginName) {
		return userDao.getUserNameByLoginName(loginName);
	}

	public Integer deleteUserById(int id) {
		return userDao.deleteUserById(id);
	}

	public boolean checkloginName(String loginName) {
		if (userDao.checkloginName(loginName) == 0) {
			return true;
		} else {
			return false;
		}
	}

	public int insertUser(User user) {
		user.setPassword(MD5Util.md5(user.getPassword()));
		return userDao.insertUser(user);
	}

	public int updateUser(User user) {
		if (user.getPassword() != null && user.getPassword() != "") {
			if (user.getPassword().equals(userDao.getPasswordByid(user.getId()))) {
				user.setPassword(null);
			} else {
				user.setPassword(MD5Util.md5(user.getPassword()));
			}
		}
		return userDao.updateUser(user);
	}

	public User getUserById(String id) {
		return userDao.getUserById(id);
	}

	public User getUserByLoginName(String loginName) {
		return userDao.getUserByLoginName(loginName);
	}

	public PageBean getUsersListToPage(String pageCur, int pageSize) {
		int dataTotal = userDao.getUsersCount();
		int pageCurInt = 1;
		try {
			pageCurInt = Integer.parseInt(pageCur);
		} catch (Exception e) {
			pageCurInt = 1;
		}
		PageBean pageBean = new PageBean(dataTotal, pageCurInt, pageSize);
		int arg1 = (pageBean.getPageCur() - 1) * pageBean.getPageSize();
		pageBean.setList(userDao.getUsersListToPage(arg1, pageBean.getPageSize()));
		return pageBean;
	}
}
