<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Insert title here</title>

<link type="text/css" rel="stylesheet" href="../css/style.css" />
<link rel="stylesheet" type="text/css"
	href="../bootstrap-3.3.7-dist/css/bootstrap.css">
<link rel="stylesheet"
	href="../bootstrap-3.3.7-dist/css/bootstrapValidator.css">
<link rel="stylesheet"
	href="../bootstrap-3.3.7-dist/Font-Awesome/css/font-awesome.min.css" />
<link rel="stylesheet" href="../bootstrap-3.3.7-dist/css/build.css" />
<link rel="stylesheet" href="../bootstrap-3.3.7-dist/css/default.css">
<link rel="stylesheet" href="../css/modal.css">
<script src="../bootstrap-3.3.7-dist/jquery.min.js"></script>
<script src="../library/jquery.form.js"></script>
<script src="../library/qrcode.js"></script>
<script src="../bootstrap-3.3.7-dist/js/bootstrap.js"></script>
<script src="../bootstrap-3.3.7-dist/js/bootstrapValidator.js"></script>
<script src="../resources/modalAlert.js"></script>
<script src="../resources/modalCon.js"></script>
<script src="../resources/modalPro.js"></script>
<script src="../js/modal.js"></script>
<script src="../js/basicEvent.js"></script>
<style>
.panel-default {
	margin: 10px 0 !important;
}

.panel-default>.panel-heading {
	background-color: #fff !important;
	border-bottom: 1px #e2e2e2 solid !important;
}

.panel-body {
	border: none !important;
}

a>.glyphicon {
	margin-right: 10px;
	color: #2fa0ec;
}

.panel-body>a {
	margin-left: 30%;
	color: #333;
}

#qr_down {
	position: absolute;
	background: url("../image/orcode-frame.png") no-repeat;
	height: 174px;
	width: 218px;
	float: left;
	z-index: 100;
	display: none;
}

.app-img {
	position: absolute;
	width: 97px;
	left: 61px;
	top: 32px;
}
</style>
</head>
<body>
	<div class="soubg">
		<div class="sou">
			<span class="fr" style="width: auto;"> <span class="fl"
				id="headerName"> 你好，请&nbsp;<a href="#">登录</a>&nbsp; &nbsp;
			</span> <span class="fr" style="width: 208px;" id="emmamage">|&nbsp;
					<a id="phone" href="javascript:void(0)"><span
						class="glyphicon glyphicon-phone"> </span>手机版</a>
					<div id="qr_down">
						<div class="app-img" id="qrcode"></div>
					</div>
			</span>
			</span>
		</div>
	</div>
	<script type="text/javascript">
		var qrcode = new QRCode(document.getElementById("qrcode"),{
			width : 97,
			height : 97
		})
		qrcode.makeCode("http://"+location.host+"/EasyBuy/resources/EBManage.apk");
		$('#phone').on('click', function() {
			window.location.href = "../resources/EBManage.apk";
		});
		$('#emmamage').on("mouseover mouseout", function(event) {
			if (event.type == "mouseover") {
				$('#qr_down').css('left', $(this).offset().left)
				$(this).find('div').show();
			} else if (event.type == "mouseout") {
				$(this).find('div').hide();
			}
		})
		$
				.getJSON(
						'/EasyBuy/UserController.do',
						'act=checkSessionInPC',
						function(data) {
							if (data.result != null && data.result != "") {
								alert("会话失效！");
								window.location.replace(data.result);
							} else {
								$('#headerName')
										.html(
												'您好！'
														+ '${admin.loginName}'
														+ '<a href="javascript:void(0);" id="logOff">注销</a>');
								$('#logOff')
										.on(
												'click',
												function() {
													//清空cookic
													window.location
															.replace("/EasyBuy/UserController.do?act=UserLogOffInPC");
												});
							}
						});
	</script>
</body>
</html>