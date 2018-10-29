package team.fas.ym.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import team.fas.ym.dao.NewsDao;
import team.fas.ym.entity.News;
import team.fas.ym.util.PageBean;

@Service
public class NewsService {
	@Resource
	private NewsDao newsDao;
	
	public int getNewsCount() {
		return newsDao.getNewsCount();
	}

	public List getNewsList() {
		return newsDao.getNewsList();
	}

	public int deleteNewsById(int id) {
		return newsDao.deleteNewsById(id);
	}

	public int insertNews(News news) {
		return newsDao.insertNews(news);
	}

	public int updateNews(News news) {
		return newsDao.updateNews(news);
	}

	public News getNewsById(int id) {
		return newsDao.getNewsById(id);
	}

	public PageBean getNewsListToPage(String pageCur, int pageSize) {
		int dataTotal = newsDao.getNewsCount();
		int pageCurInt = 1;
		try {
			pageCurInt = Integer.parseInt(pageCur);
		} catch (Exception e) {
			pageCurInt = 1;
		}
		PageBean pageBean = new PageBean(dataTotal, pageCurInt, pageSize);
		int arg1 = (pageBean.getPageCur() - 1) * pageBean.getPageSize();
		pageBean.setList(newsDao.getNewsListToPage(arg1, pageBean.getPageSize()));
		return pageBean;
	}
}
