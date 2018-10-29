flushList(1);
function flushList(pageCur) {
	// 设置为同步请求
	$.ajaxSettings.async = false;
	$
			.getJSON(
					'/EasyBuy/ProductController.do',
					'act=getProductsListToPage&pageCur=' + pageCur,
					function(data) {
						var $table = $('#table').empty();
						var $mem_footer = $('.mem_footer').empty();
						$table.append('<tr><td width="25%">商品名称</td>'
								+ '<td width="25%">商品图片</td>'
								+ '<td width="16%">库存</td>'
								+ '<td width="16%">价格</td>'
								+ '<td width="16%" colspan="2">操作</td>'
								+ '</tr>');
						$
								.each(
										data.list,
										function(index, item) {
											$table
													.append('<tr data="'
															+ item.id
															+ '"><td>'
															+ item.name
															+ '</td>'
															+ '<td><img class="img-samll" src="'
															+ item.fileName
															+ '"/></td><td>'
															+ item.stock
															+ '</td><td>'
															+ item.price
															+ '</td>'
															+ '<td><a href="Member_Product_Edit.jsp?id='
															+ item.id
															+ '">编辑</a></td>'
															+ '<td><a class="delete" href="javascript:void(0);">删除</a></td>'
															+ '</tr>');
										});
						$('.img-samll').on(
								'click',
								function() {
									openModalImg($(this).attr('src'), $(this)
											.parent().prev().text());
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
	function openModalImg(imgSrc, imgName) {
		$('#imgSrc').attr('src', imgSrc);
		$('#imgName').html(imgName);
		$('#modalImg').modal('show');
	}

	function deleteOnce(id) {
		openModalCon(
				'确定要删除该商品吗？',
				function() {
					// 设置为同步请求
					$.ajaxSettings.async = false;
					$
							.getJSON(
									'/EasyBuy/ProductController.do',
									'act=deleteProduct&id=' + id,
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
										openModalAlert('请检查登陆状态或网络环境！',
												'<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
									});
					// 刷新List
					flushList();
				});
	}
}