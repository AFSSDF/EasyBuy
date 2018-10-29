<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<link rel="stylesheet" href="../css/edit.css">
</head>
<body>
	<%@ include file="headerManager.jsp"%>
	<%@ include file="topManager.jsp"%>
	<div class="i_bg bg_color">
		<div class="m_content">
			<%@ include file="leftManager.jsp"%>
			<div class="m_right">
				<p></p>
				<div class="mem_tit" id="title">编辑用户</div>
				<p></p>
				<form id="editForm" action="#" method="post" role="form">
					<div class="form-group">
						<label>姓名：</label> <input type="text" name="userName"
							class="form-control" placeholder="在这里输入姓名">
					</div>
					<div class="form-group">
						<label>用户名：</label> <input type="text" id="vloginName"
							name="loginName" class="form-control" placeholder="在这里输入用户名">
					</div>
					<div class="form-group">
						<label>密码：</label> <input type="password" name="password"
							class="form-control" placeholder="在这里输入密码">
					</div>
					<div class="form-group">
						<label>确认密码：</label> <input type="password" name="rpassword"
							class="form-control" placeholder="在这里确认密码">
					</div>
					<div class="form-group">
						<label>性别：</label> <select class="form-control" name="sex">
							<option value="1">男</option>
							<option value="0">女</option>
						</select>
					</div>
					<div class="form-group">
						<label>用户类型：</label> <select class="form-control" name="type">
							<option value="0">普通用户</option>
							<option value="1">管理员</option>
						</select>
					</div>
					<div class="form-group">
						<label>身份证号：</label> <input type="text" name="identityCode"
							class="form-control" placeholder="在这里输入身份证号">
					</div>
					<div class="form-group">
						<label>邮件：</label> <input type="text" name="email"
							class="form-control" placeholder="在这里输入邮件">
					</div>
					<div class="form-group">
						<label>手机号码：</label> <input type="text" name="mobile"
							class="form-control" placeholder="在这里输入电话">
					</div>

					<div class="form-group  text-center sub-group">
						<input type="button" id="edit-submit"
							style="width: 40%; margin-right: 20px;" class="btn btn-primary"
							value="提交"> <input type="button" id="edit-reset"
							style="width: 40%; margin-left: 20px;" class="btn btn-danger"
							value="重置">
					</div>
				</form>
			</div>
		</div>
		<%@ include file="footerManager.jsp"%>
	</div>
	<script src="../js/edit_user.js"></script>
	<script src="../js/edit.js"></script>
</body>
</html>
