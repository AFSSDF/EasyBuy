<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<link rel="stylesheet" href="../css/display.css">
<style type="text/css">
.list-group-item>.glyphicon-trash {
	float: right;
}

.list-group-item:hover {
	cursor: default !important;
}

.list-group-item>.glyphicon:hover {
	cursor: pointer !important;
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
				<div class="mem_tit">
					<span class="fr"
						style="font-size: 12px; font-family: '宋体'; margin-top: 5px;"><a
						href="Member_Product_Category_Edit.jsp?id=-1"
						class="btn btn-primary">添加分类</a></span>分类列表

				</div>
				<p></p>
				<!-- <table border="0"
					class="table table-bordered table-hover table-striped"
					style="width: 930px; text-align: center; margin-bottom: 30px;"
					cellspacing="0" cellpadding="0">
					<tbody id="table">
					</tbody>
				</table> -->

				<div id="section">
					<div class="form-group"
						style="margin-bottom: 5%; margin-left: 10%;">
						<input type="input" class="form-control" id="input-select-node"
							placeholder="在这里进行搜索">
						<ul class="select-content">
						</ul>
					</div>
					<script type="text/javascript">
						$('.select-content').css('width',
								$('#input-select-node').css('width'))
						$('#input-select-node').on('blur', function() {

							$('.select-content').hide();
						})
						$('#input-select-node').on('dblclick', function() {
							$('.select-content').show()
						})
					</script>
					<div id="treeview-selectable"></div>
				</div>
			</div>
		</div>
		<%@ include file="footerManager.jsp"%>
	</div>
	<script src="../bootstrap-3.3.7-dist/js/bootstrap-treeview.js"></script>
	<script src="../js/display_product_category.js"></script>
</body>
</html>
