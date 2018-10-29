<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<style type="text/css">
.sign-btn>.btn {
	width: 45% !important;
}
</style>
</head>
<body>
	<%@ include file="headerLogin.jsp"%>
	<div class="log_bg">
		<div class="top">
			<div class="logo">
				<a href="javascript:void(0)"><img src="/EasyBuy/statics/images/logo.png" /></a>
			</div>
		</div>
		<div class="login">
			<div class="log_img">
				<img src="/EasyBuy/statics/images/l_img.png" width="611" height="425" />
			</div>
			<div class="log_c" style="height: auto; padding: 3% 5%; margin: 0;">
				<h2 class="text-center" style="margin: 0;">管理员登陆</h2>
				<form action="/EasyBuy/UserController.do?act=checkAdminInPC"
					method="post">
					<div class="form-group">
						<label>用户名:</label> <input type="text" name="loginName"
							class="form-control" placeholder="在这里输入用户名">
					</div>
					<div class="form-group">
						<label>密码:</label> <input type="password" name="password"
							class="form-control" placeholder="在这里输入密码">
					</div>
					<div class="form-group  text-center sign-btn">
						<input type="submit" id="land-submit" class="btn btn-primary"
							value="登录"> <input type="reset" class="btn btn-danger"
							value="重置">
					</div>
				</form>
			</div>
		</div>
	</div>
	<%@ include file="footer.jsp"%>
</body>
</html>
