<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Insert title here</title>
<link type="text/css" rel="stylesheet" href="/EasyBuy/css/style.css" />
<link rel="stylesheet" type="text/css"
	href="/EasyBuy/bootstrap-3.3.7-dist/css/bootstrap.css">
<script src="/EasyBuy/bootstrap-3.3.7-dist/jquery.min.js"></script>
</head>
<body>
	<div class="soubg">
		<div class="sou">
			<span class="fr" style="height: 35px;"> <span class="fl">
					你好，请&nbsp;<a href="javascript:void(0)">登录</a>&nbsp; &nbsp;
			</span>
		</div>
	</div>
	<script type="text/javascript">
		$(function() {
			$.getJSON('/EasyBuy/UserController.do',
					'act=checkLoginSessionInPC', function(data) {
						if (data.result != null && data.result != "") {
							window.location.replace(data.result);
						}
					});
			var message = "${message}";
			if (message != null && message != "" && message != "null") {
				alert(message);
			}
		});
	</script>
</body>
</html>