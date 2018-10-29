package team.fas.ym.session;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

/*
 * 自定义session监听器
 */
public class SessionListener implements HttpSessionListener {
	private MySessionContext myc = MySessionContext.getInstance();
	@Override
	public void sessionCreated(HttpSessionEvent httpSessionEvent) {
		HttpSession session = httpSessionEvent.getSession();
		myc.addSession(session);
	}
	@Override
	public void sessionDestroyed(HttpSessionEvent httpSessionEvent) {
		HttpSession session = httpSessionEvent.getSession();
		myc.delSession(session);
	}
}
