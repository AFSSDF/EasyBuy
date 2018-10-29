package team.fas.ym.action;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;

import team.fas.ym.entity.ProductCategory;
import team.fas.ym.service.ProductCategoryService;
import team.fas.ym.util.CtxUtil;

@WebServlet("/ProductCategoryController.do")
public class ProductCategoryController extends BaseController {

	private static final long serialVersionUID = 1L;
	private ProductCategoryService productCategoryService;

	@Override
	public void init() throws ServletException {
		super.init();
		productCategoryService = CtxUtil.getBean("productCategoryService");
	}

	// 获得商品分类列表
	public String getProductCategorysList(HttpServletRequest request, HttpServletResponse response) {
		return "json:" + JSON.toJSONString(productCategoryService.getProductCategorysList());
	}

	// 返回商品分类列表分页的JSON
	public String getProductCategorysListToPage(HttpServletRequest request, HttpServletResponse response) {
		String pageCur = request.getParameter("pageCur");
		return "json:" + JSON.toJSONString(productCategoryService.getProductCategorysListToPage(pageCur, 8));
	}

	// 通过分类Id获得商品分类
	public String getProductCategoryById(HttpServletRequest request, HttpServletResponse response) {
		String id = request.getParameter("id");
		return "json:" + JSON.toJSONString(productCategoryService.getProductCategoryById(id));
	}

	// 通过分类Id删除商品分类
	public String deleteProductCategory(HttpServletRequest request, HttpServletResponse response) {
		int id = Integer.parseInt(request.getParameter("id"));
		return "json:{\"result\":\"" + productCategoryService.deleteProductCategory(id) + "\"}";
	}
	
	public String cbProductCategory(HttpServletRequest request, HttpServletResponse response) {
		String cb = request.getParameter("cb");
		String name = request.getParameter("name");
		return "json:" + cb + "(" + JSON.toJSONString(productCategoryService.cbProductCategory(name)) + ")";
	}

	// 插入商品分类
	public String insertProductCategory(HttpServletRequest request, HttpServletResponse response) {
		ProductCategory productCategory = new ProductCategory();
		productCategory.setId(0);
		try {
			productCategory.setName(request.getParameter("name"));
			int type = Integer.parseInt(request.getParameter("type"));
			productCategory.setType(type);
			switch (type) {
			case 1:
				productCategory.setParentId(0);
				break;
			case 2:
				productCategory.setParentId(Integer.parseInt(request.getParameter("categoryLevel1Id")));
				break;
			case 3:
				productCategory.setParentId(Integer.parseInt(request.getParameter("categoryLevel2Id")));
				break;
			}
		} catch (Exception e) {
			return " json:{\"result\":\"" + 0 + "\"}";
		}

		return "json:{\"result\":\"" + productCategoryService.insertProductCategory(productCategory) + "\"}";
	}

}
