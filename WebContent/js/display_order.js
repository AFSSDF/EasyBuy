flushList(1);
function flushList(pageCur) {
	// 设置为同步请求
	$.ajaxSettings.async = false;
	$
			.getJSON(
					'/EasyBuy/OrderController.do',
					'act=getOrdersListToPage&pageCur=' + pageCur,
					function(data) {
						var $panelGroup = $('#panel-group').empty();
						var $mem_footer = $('.mem_footer').empty();
						$
								.each(
										data.list,
										function(index, item) {
											$panelGroup
													.append('<div class="panel panel-primary">'
															+ '<div class="panel-heading">'
															+ '<div class="panel-title">'
															+ '<table>'
															+ '<tr>'
															+ '<td class="text-center">用户名:<span>'
															+ item.loginName
															+ '</span>'
															+ '</td>'
															+ '<td class="text-center">订单号:<span>'
															+ item.serialNumber
															+ '</span></td>'
															+ '<td class="text-center">地址:<span>'
															+ item.userAddress
															+ '</span></td>'
															+ '<td class="text-center">￥<span>'
															+ item.cost
															+ '</span></td>'
															+ '</tr>'
															+ '</table>'
															+ '</div>'
															+ '</div>'
															+ '<div class="panel-body">'
															+ '<table class="table table-bordered table-hover table-striped" id="table'
															+ item.id
															+ '">'
															+ '<tr>'
															+ '<td width="25%">商品名称</td>'
															+ '<td width="25%">商品图片</td>'
															+ '<td width="25%">数量</td>'
															+ '<td width="25%">价格</td>'
															+ '</tr>'
															+ '</table>'
															+ '</div>'
															+ '</div>');
											var $table = $('#table' + item.id)
													.html(
															'<tr>'
																	+ '<td width="25%">商品名称</td>'
																	+ '<td width="25%">商品图片</td>'
																	+ '<td width="25%">数量</td>'
																	+ '<td width="25%">价格</td>'
																	+ '</tr>');
											// 设置为同步请求
											$.ajaxSettings.async = false;
											$
													.getJSON(
															'/EasyBuy/OrderDetailController.do',
															'act=getUserProducts&id='
																	+ item.id,
															function(data2) {
																$
																		.each(
																				data2,
																				function(
																						index2,
																						item2) {
																					$table
																							.append('<tr>'
																									+ '<td>'
																									+ item2.products[0].name
																									+ '</td>'
																									+ '<td><img class="img-samll" src="'
																									+ item2.products[0].fileName
																									+ '"/></td></td>'
																									+ '<td>'
																									+ item2.quantity
																									+ '</td>'
																									+ '<td>'
																									+ item2.cost
																									+ '</td>'
																									+ '</tr>');
																				});
															});

										});
						$('.img-samll').on(
								'click',
								function() {
									openModalImg($(this).attr('src'), $(this)
											.parent().prev().text());
								});
						paging($mem_footer, data.pageCur, data.pageTotal);
					})
			.error(
					function() {
						openModalAlert('请检查登陆状态或网络环境！',
								'<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
					});
}
function openModalImg(imgSrc, imgName) {
	$('#imgSrc').attr('src', imgSrc);
	$('#imgName').html(imgName);
	$('#modalImg').modal('show');
}
