<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<style type="text/css">
#container {
	width: 100%;
	height: 600px;
	margin-bottom: 20px;
}

.help-block {
	position: absolute !important;
}

.amap-marker .marker-route {
	position: absolute;
	width: 40px;
	height: 44px;
	color: #e90000;
	background: url('../image/poi-1.png') no-repeat;
	cursor: pointer;
}

.amap-marker .marker-marker-bus-from {
	background-position: -334px -180px;
}

.modal-body>span {
	margin: 10% 0;
}

.closePanel {
	color: #fff !important;
	opacity: 10 !important;
}

.panel-title>span {
	margin-left: 1.5%;
}

#editForm {
	margin-left: 10px;
}

.form-group {
	width: auto;
	display: inline-block;
	margin-right: 50px;
}
.table td{
	text-align: center;
}
</style>
</head>
<body>
	<div class="modal fade" id="modalAddressSetting" tabindex="-1"
		role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog" style="width: 20%">
			<div class="modal-content">
				<div class="modal-header" style="padding: 10px;">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title text-center">地图设置</h4>
				</div>
				<div class="modal-body" style="padding: 0 10%;">
					<span class="checkbox checkbox-primary"> <input
						class="styled" type="checkbox" name="toolBar" id="mapToolBar">
						<label for="mapToolBar">工具条</label>
					</span> <span class="checkbox checkbox-primary"> <input
						class="styled" type="checkbox" name="scale" id="mapScale">
						<label for="mapScale">比例尺</label>
					</span> <span class="checkbox checkbox-primary"> <input
						class="styled" type="checkbox" name="overView" id="mapOverView">
						<label for="mapOverView">鹰眼</label>
					</span>
				</div>
				<div class="model-footer btn-group" style="width: 100%">
					<button class="btn btn-primary col-xs-6"
						onClick="changeMapControl()">确认</button>
					<button class="btn btn-danger col-xs-6" style="margin: 0;"
						data-dismiss="modal" aria-hidden="true">取消</button>
				</div>
			</div>
		</div>
	</div>
	<%@ include file="headerManager.jsp"%>
	<%@ include file="topManager.jsp"%>
	<div class="i_bg bg_color">
		<div class="m_content">
			<%@ include file="leftManager.jsp"%>
			<div class="m_right" style="padding: 10px;">
				<p></p>
				<div class="mem_tit">
					<span class="fr"
						style="font-size: 15px; font-family: '宋体'; margin-top: 5px;">
						<a href="javascript:addAddress()"><span
							class="glyphicon glyphicon-plus" style="margin-right: 3px;"></span>添加地址</a>&nbsp;<a
						href="javascript:addressSetting()"><span
							class="glyphicon glyphicon-cog" style="margin-right: 3px;"></span>设置</a>
					</span>用户地址
				</div>
				<form id="editForm"
					action="/EasyBuy/UserAddressController.do?act=insertUserAddress"
					method="post" role="form" style="display:none;">
					<div class="form-group" style="width: 20%;">
						<label>用户列表：</label> <select class="form-control" name="userId">
						</select>
					</div>
					<div class="form-group" style="width: 50%;">
						<label>地址：</label> <input type="text" name="address"
							class="form-control">
					</div>
					<div class="form-group">
						<input type="button" id="edit-submit" class="btn btn-primary"
							value="提交">
					</div>
				</form>
				<p></p>
				<div id="container"></div>
				<div id="group"></div>
			</div>
		</div>
		<%@ include file="footerManager.jsp"%>
	</div>
	<script type="text/javascript" src="../library/jquery.cookie.js"></script>
	<script type="text/javascript"
		src="https://webapi.amap.com/maps?v=1.4.8&key=21818453f43770b7c36fbe6a8055855e"></script>
	<script src="../js/display_user_address.js"></script>
	<script src="../js/edit.js"></script>
</body>
</html>
