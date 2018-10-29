package team.fas.ym.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import team.fas.ym.dao.OrderDetailDao;

@Service
public class OrderDetailService {

	@Resource
	private OrderDetailDao orderDetailDao;

	public List getUserProducts(String id) {
		return orderDetailDao.getUserProducts(id);
	}

}
