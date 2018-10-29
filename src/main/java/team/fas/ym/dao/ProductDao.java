package team.fas.ym.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.mybatis.spring.annotation.MapperScan;

import team.fas.ym.entity.Product;

@MapperScan
public interface ProductDao {
	int getProductCount();

	List getProductsList();

	int deleteProductById(@Param("id") int id);

	int insertProduct(Product product);

	Product getProductById(@Param("id") String id);

	int updateProduct(Product product);

	List getProductsListToPage(@Param("arg1")int arg1,@Param("arg2") int arg2);
}
