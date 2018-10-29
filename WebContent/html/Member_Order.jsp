<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<link rel="stylesheet" href="../css/display.css">
<style type="text/css">
.panel-primary {
	width: 930px;
	margin-bottom: 30px;
}

.panel-title>table {
	text-align: center;
	width: 100%
}

.panel-body>table {
	text-align: center;
}

tbody tr {
	height: 60px;
}

.img-samll {
	height: 50px;
}
</style>
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
				<div class="mem_tit">订单列表</div>
				<p></p>
				<div></div>
				<div id="panel-group"></div>
				<ul class="pagination mem_footer">
				</ul>
			</div>
		</div>
		<%@ include file="footerManager.jsp"%>
	</div>
	<script src="../js/display.js"></script>
	<script src="../js/display_order.js"></script>
</body>
</html>
