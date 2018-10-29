package team.fas.ym.service;


import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import team.fas.ym.dao.ProductDao;
import team.fas.ym.entity.Product;
import team.fas.ym.util.PageBean;

@Service
public class ProductService {
	@Resource
	private ProductDao productDao;
	
	public int getProductCount() {
		return productDao.getProductCount();
	}

	public List getProductsList() {
		return productDao.getProductsList();
	}

	public int deleteProductById(int id) {
		return productDao.deleteProductById(id);
	}

	public int insertProduct(Product product) {
		return productDao.insertProduct(product);
	}

	public Product getProductById(String id) {
		return productDao.getProductById(id);
	}

	public int updateProduct(Product product) {
		return productDao.updateProduct(product);
	}

	public PageBean getProductsListToPage(String pageCur, int pageSize) {
		int dataTotal = productDao.getProductCount();
		int pageCurInt = 1;
		try {
			pageCurInt = Integer.parseInt(pageCur);
		} catch (Exception e) {
			pageCurInt = 1;
		}
		PageBean pageBean = new PageBean(dataTotal, pageCurInt, pageSize);
		int arg1 = (pageBean.getPageCur() - 1) * pageBean.getPageSize();
		pageBean.setList(productDao.getProductsListToPage(arg1, pageBean.getPageSize()));
		return pageBean;
	}
	
	
}
