package team.fas.ym.test;

import team.fas.ym.service.NewsService;

public class NewsTest {

	public static void main(String[] args) {
		NewsService newsService=CtxUtilTest.getBean("newsService");
//		System.out.println(newsService.getNewsCount());
		System.out.println(newsService.getNewsById(702));
	}

}
