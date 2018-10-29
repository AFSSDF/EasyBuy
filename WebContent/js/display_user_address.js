var map = new AMap.Map('container')
map.setZoomAndCenter(5, [ 108.949514, 34.331622 ])
var scale, toolBar, overView

AMap.plugin([ 'AMap.Scale', 'AMap.ToolBar', 'AMap.OverView', 'AMap.Geocoder' ],
		function() {// 异步同时加载多个插件
			scale = new AMap.Scale()
			map.addControl(scale)
			toolBar = new AMap.ToolBar()
			map.addControl(toolBar)
			overView = new AMap.OverView()
			map.addControl(overView)
			scale.hide()
			toolBar.hide()
			overView.hide()
		})
map
		.on(
				'complete',
				function() {
					// 设置为同步请求
					// $.ajaxSettings.async = false
					$
							.getJSON(
									'/EasyBuy/UserAddressController.do',
									'act=getAllUserAddress',
									function(data) {
										$
												.each(
														data,
														function(index, item) {
															var data = "key=21818453f43770b7c36fbe6a8055855e&s=rsv3&address="
																	+ item.address
															// $.ajaxSettings.async
															// = false
															$
																	.getJSON(
																			'http://restapi.amap.com/v3/geocode/geo',
																			data,
																			function(
																					data) {
																				if (data.status == 1) {
																					// 创建一个
																					// Marker
																					// 实例：
																					var wz = data.geocodes[0].location
																							.split(',')
																					var marker = new AMap.Marker(
																							{
																								position : new AMap.LngLat(
																										wz[0],
																										wz[1]),
																								title : item.user.loginName
																										+ ':'
																										+ item.address,
																								extData : item.id,
																								clickable : true
																							})
																					marker
																							.on(
																									'click',
																									function() {
																										openMarker(
																												this,
																												item)
																									})
																					// 将创建的点标记添加到已有的地图实例：
																					map
																							.add(marker)
																				}
																			})
														})
									})
				})

$.getJSON('/EasyBuy/UserController.do', 'act=getUsersList', function(data) {
	var $userId = $('select[name="userId"]').empty()
	$.each(data, function(index, item) {
		$userId.append('<option value="' + item.id + '">' + item.loginName
				+ '</option>')
	})
})
map.on('click', function(ev) {
	var lnglat = ev.lnglat;
	var geocoder = new AMap.Geocoder()
	$("#editForm").data("bootstrapValidator").resetForm();
	geocoder.getAddress(lnglat, function(status, result) {
		if (status === 'complete' && result.info === 'OK') {
			$('input[name="address"]').val(result.regeocode.formattedAddress)
		}
	})
	if (map.getZoom() < 10)
		map.setZoomAndCenter(10, lnglat)
});
function addAddress() {
	if ($('#editForm').css('display') == "none")
		$('#editForm').slideDown()
	else
		$('#editForm').slideUp()
}
function openMarker(marker, item) {
	map.setZoomAndCenter(15, marker.getPosition())
	var $group = $("#group")
	var isDefault
	if (item.isDefault == 1) {
		isDefault = "是"
	} else {
		isDefault = "否"
	}
	$("#editForm").data("bootstrapValidator").resetForm();
	$('input[name="address"]').val(item.address)
	$group.append('<div class="panel panel-primary">'
			+ '<div class="panel-heading">' + '<div class="panel-title">'
			+ '<span>'
			+ item.user.loginName
			+ '用户的地址</span>'
			+ '<button type="button" onclick="removePanel(this)" '
			+ 'class="close closePanel">&times;</button>'
			+ '</div>'
			+ '</div>'
			+ '<div class="panel-body">'
			+ '<table class="table table-bordered table-hover table-striped">'
			+ '<tr><td width="16%">用户名称</td><td width="25%">用户地址</td>'
			+ '<td width="16%">创建时间</td><td width="16%">是否为默认</td>'
			+ '<td width="16%">备注</td><td width="11%">操作</td></tr><tr><td>'
			+ item.user.loginName
			+ '</td>'
			+ '<td>'
			+ item.address
			+ '</td>'
			+ '<td>'
			+ item.createTime
			+ '</td>'
			+ '<td>'
			+ isDefault
			+ '</td>'
			+ '<td>'
			+ item.remark
			+ '</td>'
			+ '<td><a href="Member_User_Edit.jsp?id='
			+ item.user.id
			+ '">编辑用户</a></td>' + '</tr></table></div></div>')

}

function removePanel(del) {
	$(del).parent().parent().parent().remove()
}

function addressSetting() {
	$('#modalAddressSetting').modal('show')
}

window.onload = function() {
	if ($.cookie('toolBar') == 1)
		checkedControl('toolBar', toolBar)
	if ($.cookie('scale') == 1)
		checkedControl('scale', scale)
	if ($.cookie('overView') == 1)
		checkedControl('overView', overView)
}
function checkedControl(key, control) {
	$('input[name=' + key + ']').attr('checked', 'checked')
	control.show()
}
function showControl(key, control) {
	control.show()
	$.cookie(key, 1, {
		expires : 7
	})
}
function hideControl(key, control) {
	control.hide()
	$.cookie(key, null)
}
function changeMapControl() {
	if ($('#mapToolBar').prop('checked'))
		showControl('toolBar', toolBar)
	else
		hideControl('toolBar', toolBar)

	if ($('#mapScale').prop('checked'))
		showControl('scale', scale)
	else
		hideControl('scale', scale)

	if ($('#mapOverView').prop('checked'))
		showControl('overView', overView)
	else
		hideControl('overView', overView)

	$('#modalAddressSetting').modal('hide')
}

// 提交按钮
$('#edit-submit')
		.on(
				'click',
				function() {
					$('#editForm').data('bootstrapValidator').validate();// 提交验证
					if ($("#editForm").data('bootstrapValidator').isValid()) {// 获取验证结果，如果成功，执行下面代码
						$('#editForm')
								.ajaxSubmit(
										{
											async : false,
											success : function(data) {
												data = JSON.parse(data);
												if (data.result == "1") {
													openModalAlert('提交成功!',
															'<button class="btn btn-primary col-xs-12" data-dismiss="modal">确认</button>');
													if (id == -1) {
														$('#editForm')[0]
																.reset();
														$("#editForm")
																.data(
																		"bootstrapValidator")
																.resetForm();
													}
												} else {
													openModalAlert('提交失败!',
															'<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
												}
											}
										});
					}
				});

// 表单验证
$('#editForm').bootstrapValidator({
	message : "This value is not valid",
	feedbackIcons : {
		valid : 'glyphicon glyphicon-ok',
		invalid : 'glyphicon glyphicon-remove',
		validating : 'glyphicon glyphicon-refresh'
	},
	fields : {
		address : {
			validators : {
				notEmpty : {
					message : '地址不能为空'
				}
			}
		}
	}
});
