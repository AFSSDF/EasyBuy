<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="../css/display.css">
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
						href="Member_User_Edit.jsp?id=-1" class="btn btn-primary">添加用户</a></span>用户列表
				</div>
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
	<script src="../js/display_user.js"></script>
</body>
</html>
