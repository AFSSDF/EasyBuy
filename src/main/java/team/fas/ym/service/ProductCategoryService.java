package team.fas.ym.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import team.fas.ym.dao.ProductCategoryDao;
import team.fas.ym.entity.ProductCategory;
import team.fas.ym.util.PageBean;

@Service
public class ProductCategoryService {

	@Resource
	private ProductCategoryDao productCategoryDao;

	public int getproductCategoryCount() {
		return productCategoryDao.getproductCategoryCount();
	}

	public List getProductCategorysList() {
		List<ProductCategory> pcList1 = productCategoryDao.getProductCategorysListByType(1);
		for (ProductCategory productCategory : pcList1) {
			List<ProductCategory> pcList2 = productCategoryDao
					.getProductCategorysListByParentId(productCategory.getId());
			productCategory.setProductCategory(pcList2);
			for (ProductCategory productCategory2 : pcList2) {
				List<ProductCategory> pcList3 = productCategoryDao
						.getProductCategorysListByParentId(productCategory2.getId());
				productCategory2.setProductCategory(pcList3);
			}
		}
		return pcList1;
	}

	public int insertProductCategory(ProductCategory productCategory) {
		// TODO Auto-generated method stub
		return productCategoryDao.insertProductCategory(productCategory);
	}

	public PageBean getProductCategorysListToPage(String pageCur, int pageSize) {
		int dataTotal = productCategoryDao.getproductCategoryCount();
		int pageCurInt = 1;
		try {
			pageCurInt = Integer.parseInt(pageCur);
		} catch (Exception e) {
			pageCurInt = 1;
		}
		PageBean pageBean = new PageBean(dataTotal, pageCurInt, pageSize);
		int arg1 = (pageBean.getPageCur() - 1) * pageBean.getPageSize();
		pageBean.setList(productCategoryDao.getProductCategorysListToPage(arg1, pageBean.getPageSize()));
		return pageBean;
	}

	public ProductCategory getProductCategoryById(String id) {
		return productCategoryDao.getProductCategoryById(id);
	}

	public int deleteProductCategory(int id) {
		if (productCategoryDao.getChildCount(id) > 0) {
			return -2;
		} else {
			return productCategoryDao.deleteProductCategory(id);
		}
	}

	public List cbProductCategory(String name) {
		return productCategoryDao.cbProductCategory(name);
	}

}
