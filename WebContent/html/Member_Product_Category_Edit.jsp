<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<link rel="stylesheet" href="../css/edit.css">
<style type="text/css">
.form-group{
	margin: 2% 6% !important;
}
</style>
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
						<label>分类级别：</label> <select class="form-control" name="type">
							<option value="1">一级分类</option>
							<option value="2">二级分类</option>
							<option value="3">三级分类</option>
						</select>
					</div>
					<div class="form-group" style="display: none;">
						<label>一级分类：</label> <select class="form-control"
							name="categoryLevel1Id">
						</select>
					</div>
					<div class="form-group" style="display: none;">
						<label>二级分类：</label> <select class="form-control"
							name="categoryLevel2Id">
						</select>
					</div>
					<div class="form-group">
						<label>分类名称：</label> <input type="text" name="name"
							class="form-control">
					</div>
					<div class="form-group  text-center">
						<input type="button" id="edit-submit"
							style="width: 40%; margin-right: 20px;" class="btn btn-primary"
							value="提交"> <input type="button" id="edit-flush"
							style="width: 40%; margin-left: 20px;" class="btn btn-primary"
							value="刷新">
					</div>
				</form>
			</div>
		</div>
		<%@ include file="footerManager.jsp"%>
	</div>
	<script src="../js/edit_product_category.js"></script>
	<script src="../js/edit.js"></script>
</body>
</html>
