package team.fas.ym.test;

import org.springframework.beans.BeansException;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

public class CtxUtilTest {
	private static ClassPathXmlApplicationContext context;
	private static String springXmlpath = "classpath*:spring-ym-auto.xml";
	static {
		context = new ClassPathXmlApplicationContext(springXmlpath.split("[,\\s]+"));
	}
	public static <T extends Object> T getBean(Class<T> clazz) {
		try {
			return context.getBean(clazz);
		} catch (BeansException e) {
			e.printStackTrace();
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	public static <T extends Object> T getBean(String beanName) {
		try {
			return (T) context.getBean(beanName);
		} catch (BeansException e) {
			e.printStackTrace();
			return null;
		}
	}

}
