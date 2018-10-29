flushList(1);
function flushList(pageCur) {
	// 设置为同步请求
	$.ajaxSettings.async = false;
	$
			.getJSON(
					'/EasyBuy/UserController.do',
					'act=getUsersListToPage&pageCur=' + pageCur,
					function(data) {
						var $table = $('#table').empty();
						var $mem_footer = $('.mem_footer').empty();
						$table.append('<tr><td width="25%">用户名称</td>'
								+ '<td width="25%">真实姓名</td>'
								+ '<td width="16%">性别</td>'
								+ '<td width="16%">类型</td>'
								+ '<td width="16%" colspan="2">操作</td>'
								+ '</tr>');
						$
								.each(
										data.list,
										function(index, item) {
											var sex;
											var type;
											if (item.sex == 1) {
												sex = "男";
											} else {
												sex = "女";
											}
											if (item.type == 1) {
												type = "管理员";
											} else {
												type = "普通用户";
											}
											$table
													.append('<tr data="'
															+ item.id
															+ '"><td>'
															+ item.loginName
															+ '</td>'
															+ '<td>'
															+ item.userName
															+ '</td><td>'
															+ sex
															+ '</td><td>'
															+ type
															+ '</td>'
															+ '<td><a href="Member_User_Edit.jsp?id='
															+ item.id
															+ '">编辑</a></td>'
															+ '<td><a class="delete" href="javascript:void(0);">删除</a></td>'
															+ '</tr>');
										});
						paging($mem_footer, data.pageCur, data.pageTotal);
						$('.delete').on('click', function() {
							deleteOnce($(this).parent().parent().attr('data'));
						})
					})
			.error(
					function() {
						$('#modalCon').modal('hide');
						openModalAlert('请检查网络环境！',
								'<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
					});

	function deleteOnce(id) {
		openModalCon(
				'确定要删除该用户吗？',
				function() {
					// 设置为同步请求
					$.ajaxSettings.async = false;
					$
							.getJSON(
									'/EasyBuy/UserController.do',
									'act=deleteUser&id=' + id,
									function(data) {
										$('#modalCon').modal('hide');
										if (data.result == 1) {
											openModalAlert(
													'<span style="color: blue;" class="glyphicon glyphicon-ok"></span>删除成功！',
													'<button class="btn btn-primary col-xs-12" data-dismiss="modal">确认</button>')
										} else {
											openModalAlert(
													'<span style="color: red;" class="glyphicon glyphicon-remove"></span>删除失败！',
													'<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>')
										}
									})
							.error(
									function() {
										$('#modalCon').modal('hide');
										openModalAlert('请检查网络环境！',
												'<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
									});
					// 刷新List
					flushList();
				});
	}
}