package team.fas.ym.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.mybatis.spring.annotation.MapperScan;

import team.fas.ym.entity.ProductCategory;

@MapperScan
public interface ProductCategoryDao {

	int getproductCategoryCount();

	List getProductCategorysListByType(@Param("type") int type);

	List getProductCategorysListByParentId(@Param("parentId") int parentId);

	int insertProductCategory(ProductCategory productCategory);

	List getProductCategorysListToPage(@Param("arg1") int arg1, @Param("arg2") int arg2);

	ProductCategory getProductCategoryById(@Param("id") String id);

	int getChildCount(@Param("parentId") int id);

	int deleteProductCategory(@Param("id") int id);

	List cbProductCategory(@Param("name") String name);
}
