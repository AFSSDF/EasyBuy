package team.fas.ym.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import team.fas.ym.dao.OrderDao;
import team.fas.ym.entity.Order;
import team.fas.ym.util.PageBean;

@Service
public class OrderService {
	@Resource
	private OrderDao orderDao;
	
	public int getOrderCount() {
		return orderDao.getOrderCount();
	}

	public List getOrdersList() {
		return orderDao.getOrdersList();
	}

	public Order getOrderById(String id) {
		return orderDao.getOrderById(id);
	}

	public PageBean getOrdersListToPage(String pageCur, int pageSize) {
		int dataTotal = orderDao.getOrderCount();
		int pageCurInt = 1;
		try {
			pageCurInt = Integer.parseInt(pageCur);
		} catch (Exception e) {
			pageCurInt = 1;
		}
		PageBean pageBean = new PageBean(dataTotal, pageCurInt, pageSize);
		int arg1 = (pageBean.getPageCur() - 1) * pageBean.getPageSize();
		pageBean.setList(orderDao.getOrdersListToPage(arg1, pageBean.getPageSize()));
		return pageBean;
	}
}
