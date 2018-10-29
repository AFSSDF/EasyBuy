package team.fas.ym.action;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;

import team.fas.ym.entity.News;
import team.fas.ym.service.NewsService;
import team.fas.ym.util.CtxUtil;

@WebServlet("/NewsController.do")
public class NewsController extends BaseController {

	private static final long serialVersionUID = 1L;

	private NewsService newsService;

	@Override
	public void init() throws ServletException {
		newsService = CtxUtil.getBean("newsService");
		super.init();
	}

	public String getNewsList(HttpServletRequest request, HttpServletResponse response) {
		return "json:" + JSON.toJSONString(newsService.getNewsList());
	}

	// 返回咨询列表分页的JSON
	public String getNewsListToPage(HttpServletRequest request, HttpServletResponse response) {
		String pageCur = request.getParameter("pageCur");
		return "json:" + JSON.toJSONString(newsService.getNewsListToPage(pageCur, 8));
	}

	public String deleteNewsById(HttpServletRequest request, HttpServletResponse response) {
		int id = Integer.parseInt(request.getParameter("id"));
		return "json:{\"result\":\"" + newsService.deleteNewsById(id) + "\"}";
	}

	public String insertNews(HttpServletRequest request, HttpServletResponse response) {
		News news = new News();
		news.setId(0);
		news.setTitle(request.getParameter("title"));
		news.setCreateTime(request.getParameter("createTime"));
		news.setContent(request.getParameter("content"));
		return "json:{\"result\":\"" + newsService.insertNews(news) + "\"}";
	}

	public String updateNews(HttpServletRequest request, HttpServletResponse response) {
		News news = new News();
		news.setId(Integer.parseInt(request.getParameter("id")));
		news.setTitle(request.getParameter("title"));
		news.setCreateTime(request.getParameter("createTime"));
		news.setContent(request.getParameter("content"));
		return "json:{\"result\":\"" + newsService.updateNews(news) + "\"}";
	}

	public String getNewsById(HttpServletRequest request, HttpServletResponse response) {
		int id;
		try {
			id = Integer.parseInt(request.getParameter("id"));
		} catch (Exception e) {
			id = 0;
		}
		return "json:" + JSON.toJSONString(newsService.getNewsById(id));
	}
}
