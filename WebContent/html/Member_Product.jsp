<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="../css/display.css">
<style type="text/css">
tbody tr {
	height: 60px;
}

.img-samll {
	height: 50px;
}
</style>
<title></title>
</head>
<body>
	<%@ include file="headerManager.jsp"%>
	<%@ include file="topManager.jsp"%>
	<div class="modal fade" id="modalImg" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog" style="width: 65%">
			<div class="modal-content">
				<div class="modal-header" style="padding: 10px;">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title text-center" id="imgName"></h4>
				</div>
				<div class="modal-body text-center" style="padding: 10px;">
					<img id="imgSrc" height="auto" width="100%" src="">
				</div>
			</div>
		</div>
	</div>
	<div class="i_bg bg_color">
		<div class="m_content">
			<%@ include file="leftManager.jsp"%>
			<div class="m_right">
				<p></p>
				<div class="mem_tit">商品列表</div>
				<p></p>
				<table border="0"
					class="table table-bordered table-hover table-striped"
					style="width: 930px; text-align: center; margin-bottom: 30px;"
					cellspacing="0" cellpadding="0">
					<tbody id="table">
					</tbody>
				</table>
				<ul class="pagination mem_footer">
				</ul>
			</div>
		</div>
		<%@ include file="footerManager.jsp"%>
	</div>
	<script src="../js/display.js"></script>
	<script src="../js/display_product.js"></script>
</body>
</html>
