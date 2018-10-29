package team.fas.ym.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.mybatis.spring.annotation.MapperScan;

import team.fas.ym.entity.Order;

@MapperScan
public interface OrderDao {
	int getOrderCount();

	List getOrdersList();

	Order getOrderById(@Param("id") String id);

	List getOrdersListToPage(@Param("arg1")int arg1,@Param("arg2") int arg2);
}
