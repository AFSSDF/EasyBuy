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
				<div class="mem_tit" id="title"></div>
				<p></p>
				<form id="editForm" action="#" method="post" role="form">
					<div class="form-group">
						<label>标题：</label> <input type="text" name="title"
							class="form-control" placeholder="在这里输入标题">
					</div>
					<div class="form-group">
						<label>日期：</label> <input type="text" name="createTime"
							class="form-control">
					</div>
					<div class="form-group" style="width: 88%;">
						<label>内容：</label>
						<textarea name="content" rows="10" class="form-control"></textarea>
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
	<script src="../js/edit_news.js"></script>
	<script src="../js/edit.js"></script>
</body>
</html>
