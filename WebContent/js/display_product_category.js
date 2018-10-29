flushList();
function ProductCategory(text, nodes, data) {
	this.text = text;
	this.nodes = nodes;
	this.tags = [ '' ];
	this.href = data + '';
}
$('#input-select-node').on(
		'input',
		function() {
			$.ajaxSettings.async = false
			$.getJSON('/EasyBuy/ProductCategoryController.do',
					'act=cbProductCategory&cb=?&name=' + $(this).val(),
					function(data) {
						var $selectContent = $('.select-content').empty()
						$.each(data, function(index, item) {
							$selectContent.append('<li>' + item.name + '</li>')
						})
						if ($selectContent.html() != null
								|| $selectContent.html() != '') {
							$selectContent.show()
						} else {
							$selectContent.hide()
						}
						$('.select-content>li').on('mouseover', function() {
							$('#input-select-node').focus();
							$('#input-select-node').val($(this).text())
							$('#input-select-node').trigger("keyup")
						})
					})
		})
function flushList() {
	// 设置为同步请求
	$.ajaxSettings.async = false;
	$
			.getJSON(
					'/EasyBuy/ProductCategoryController.do',
					'act=getProductCategorysList',
					function(data) {
						var $treeview = $('#treeview-selectable').empty();
						var arr = new Array();
						$
								.each(
										data,
										function(index, item) {
											var arr1 = new Array();
											$
													.each(
															item.productCategory,
															function(index2,
																	item2) {
																var arr2 = new Array();
																$
																		.each(
																				item2.productCategory,
																				function(
																						index3,
																						item3) {
																					var productCategory2 = new ProductCategory(
																							item3.name,
																							'',
																							item3.id);
																					arr2
																							.push(productCategory2);
																				});
																var productCategory1 = new ProductCategory(
																		item2.name,
																		arr2,
																		item2.id);
																arr1
																		.push(productCategory1);
															});
											var productCategory = new ProductCategory(
													item.name, arr1, item.id);
											arr.push(productCategory);
										});
						var initSelectableTree = function() {
							return $('#treeview-selectable').treeview({
								levels : 1,
								data : arr,
								showTags : true,
								enableLinks : true
							});
						};
						var $selectableTree = initSelectableTree();
						var findSelectableNodes = function() {
							$treeview.treeview('collapseAll', {
								silent : true
							});
							return $selectableTree.treeview('search', [
									$('#input-select-node').val(), {
										ignoreCase : false,
										exactMatch : false
									} ]);
						};
						var selectableNodes = findSelectableNodes();
						$('#input-select-node').on('keyup', function(e) {
							selectableNodes = findSelectableNodes();
						});
						$('.glyphicon-trash').on('click', function() {
							deleteOnce($(this).prev().attr('data'))
						})
					})
			.error(
					function() {
						$('#modalCon').modal('hide');
						openModalAlert('请检查网络环境！',
								'<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
					});
}
function deleteOnce(id) {
	openModalCon(
			'确定要删除该分类吗？',
			function() {
				// 设置为同步请求
				$.ajaxSettings.async = false;
				$
						.getJSON(
								'/EasyBuy/ProductCategoryController.do',
								'act=deleteProductCategory&id=' + id,
								function(data) {
									$('#modalCon').modal('hide');
									if (data.result == 1) {
										openModalAlert(
												'<span style="color: blue;" class="glyphicon glyphicon-ok"></span>删除成功！',
												'<button class="btn btn-primary col-xs-12" data-dismiss="modal">确认</button>')
									} else if (data.result == -2) {
										openModalAlert(
												'<span style="color: blue;" class="glyphicon glyphicon-remove"></span>该分类下还有子级分类！',
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