<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<link rel="stylesheet" href="../bootstrap-3.3.7-dist/css/fileinput.css">
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
				<form id="editForm" action="#" method="post"
					enctype="multipart/form-data" role="form">
					<div class="form-group" style="display: none;">
						<input type="text" name="id" class="form-control">
					</div>
					<div class="form-group">
						<label>一级分类：</label> <select class="form-control"
							name="categoryLevel1Id">
						</select>
					</div>
					<div class="form-group">
						<label>二级分类：</label> <select class="form-control"
							name="categoryLevel2Id">
						</select>
					</div>
					<div class="form-group">
						<label>三级分类：</label> <select class="form-control"
							name="categoryLevel3Id">
						</select>
					</div>
					<div class="form-group">
						<label>商品名称：</label> <input type="text" name="name"
							class="form-control">
					</div>
					<div class="form-group">
						<label>单价：</label> <input type="text" name="price"
							class="form-control">
					</div>
					<div class="form-group">
						<label>库存：</label> <input type="text" name="stock"
							class="form-control">
					</div>
					<div class="form-group">
						<label>商品图片：</label> <input type="file" id="uploadfile"
							class="file form-control" name="fileName">
					</div>
					<div class="form-group">
						<label>描述：</label>
						<textarea class="form-control" rows="10" name="description"
							placeholder="在这里输入描述"></textarea>
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
	<script src="../bootstrap-3.3.7-dist/js/fileinput.js"></script>
	<script src="../bootstrap-3.3.7-dist/locales/zh.js"></script>
	<script src="../js/edit_product.js"></script>
	<script src="../js/edit.js"></script>
</body>
</html>
