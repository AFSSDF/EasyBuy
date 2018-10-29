package team.fas.ym.action;

import java.io.File;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.alibaba.fastjson.JSON;

import team.fas.ym.entity.Product;
import team.fas.ym.service.ProductService;
import team.fas.ym.util.CtxUtil;

@WebServlet("/ProductController.do")
public class ProductController extends BaseController {

	private static final long serialVersionUID = 1L;

	private ProductService productService;

	@Override
	public void init() throws ServletException {
		productService = CtxUtil.getBean("productService");
		super.init();
	}

	// 返回商品列表的JSON
	public String getProductsList(HttpServletRequest request, HttpServletResponse response) {
		return "json:" + JSON.toJSONString(productService.getProductsList());
	}

	// 返回商品列表分页的JSON
	public String getProductsListToPage(HttpServletRequest request, HttpServletResponse response) {
		String pageCur = request.getParameter("pageCur");
		return "json:" + JSON.toJSONString(productService.getProductsListToPage(pageCur, 8));
	}

	// 删除商品
	// 返回受影响的行数
	public String deleteProduct(HttpServletRequest request, HttpServletResponse response) {
		int id = Integer.parseInt(request.getParameter("id"));
		System.out.println("delete id:" + id);
		return "json:{\"result\":\"" + productService.deleteProductById(id) + "\"}";
	}

	// 新增商品
	public String insertProduct(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Product product = new Product();
		product.setId(0);
		product.setIsDelete(0);
		String uploadFilePath = request.getSession().getServletContext().getRealPath("statics/images/");
		String fileName = null;
		ServletFileUpload upload = new ServletFileUpload(new DiskFileItemFactory());
		List<FileItem> items = upload.parseRequest(request);
		for (FileItem item : items) {
			if (item.isFormField()) {
				switch (item.getFieldName()) {
				case "name":
					product.setName(item.getString("UTF-8"));
					break;
				case "description":
					product.setDescription(item.getString("UTF-8"));
					break;
				case "price":
					product.setPrice(Double.parseDouble(item.getString("UTF-8")));
					break;
				case "stock":
					product.setStock(Integer.parseInt(item.getString("UTF-8")));
					break;
				case "categoryLevel1Id":
					product.setCategoryLevel1Id(Integer.parseInt(item.getString("UTF-8")));
					break;
				case "categoryLevel2Id":
					product.setCategoryLevel2Id(Integer.parseInt(item.getString("UTF-8")));
					break;
				case "categoryLevel3Id":
					product.setCategoryLevel3Id(Integer.parseInt(item.getString("UTF-8")));
					break;
				default:
					break;
				}
			} else {
				fileName = item.getName();
				System.out.println("fileName:" + fileName);
				File file = new File(uploadFilePath, fileName);
				if (!file.exists()) {
					file.createNewFile();
				}
				item.write(file);
			}
		}
		product.setFileName("\\EasyBuy\\statics\\images\\" + fileName);
		return "json:{\"result\":\"" + productService.insertProduct(product) + "\"}";
	}

	// 通过商品id获得商品
	public String getProductById(HttpServletRequest request, HttpServletResponse response) {
		String id = request.getParameter("id");
		return "json:" + JSON.toJSONString(productService.getProductById(id));
	}

	// 更新商品
	public String updateProduct(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Product product = new Product();
		product.setIsDelete(0);
		String uploadFilePath = request.getSession().getServletContext().getRealPath("statics/images/");
		String fileName = null;
		ServletFileUpload upload = new ServletFileUpload(new DiskFileItemFactory());
		List<FileItem> items = upload.parseRequest(request);
		for (FileItem item : items) {
			if (item.isFormField()) {
				switch (item.getFieldName()) {
				case "id":
					product.setId(Integer.parseInt(item.getString("UTF-8")));
					break;
				case "name":
					product.setName(item.getString("UTF-8"));
					break;
				case "description":
					product.setDescription(item.getString("UTF-8"));
					break;
				case "price":
					product.setPrice(Double.parseDouble(item.getString("UTF-8")));
					break;
				case "stock":
					product.setStock(Integer.parseInt(item.getString("UTF-8")));
					break;
				case "categoryLevel1Id":
					product.setCategoryLevel1Id(Integer.parseInt(item.getString("UTF-8")));
					break;
				case "categoryLevel2Id":
					product.setCategoryLevel2Id(Integer.parseInt(item.getString("UTF-8")));
					break;
				case "categoryLevel3Id":
					product.setCategoryLevel3Id(Integer.parseInt(item.getString("UTF-8")));
					break;
				default:
					break;
				}
			} else {
				fileName = item.getName();
				System.out.println("fileName:" + fileName);
				File file = new File(uploadFilePath, fileName);
				if (!file.exists()) {
					file.createNewFile();
				}
				item.write(file);
			}
		}
		if (fileName != null) {
			product.setFileName("\\EasyBuy\\statics\\images\\" + fileName);
		}
		return "json:{\"result\":\"" + productService.updateProduct(product) + "\"}";
	}
}
