package team.fas.ym.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.mybatis.spring.annotation.MapperScan;

import team.fas.ym.entity.News;

@MapperScan
public interface NewsDao {

	int getNewsCount();

	List getNewsList();

	int deleteNewsById(@Param("id") int id);

	int insertNews(News news);

	int updateNews(News news);

	News getNewsById(@Param("id") int id);

	List getNewsListToPage(@Param("arg1") int arg1, @Param("arg2") int arg2);

}
