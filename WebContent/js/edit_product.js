var id = -1;
// 获得Id
id = GetRequest('id');
// 加载上传框
$('#uploadfile').fileinput({
	language : 'zh',
	allowedFileExtensions : [ 'jpg', 'png', 'jpeg' ],
	showUpload : false,
	showBrowse : true,
	showCancel : false,
	maxFileSize : 300,
	showPreview:true,
	/*dropZoneEnabled : false,
	fileActionSettings : {
		showRemove : true,
		showUpload : true,
		showZoom : false,
		showDrag : false
	}*/
});
// 初始化分类框
var productCategoryList;
$(function() {
	// 登陆表单验证
	$('#editForm').bootstrapValidator({
		message : "This value is not valid",
		feedbackIcons : {
			valid : 'glyphicon glyphicon-ok',
			invalid : 'glyphicon glyphicon-remove',
			validating : 'glyphicon glyphicon-refresh'
		},
		fields : {
			name : {
				validators : {
					notEmpty : {
						message : '商品名称不能为空'
					}
				}
			},
			price : {
				validators : {
					notEmpty : {
						message : '价格不能为空'
					},
					regexp : {
						regexp : /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/,
						message : '价格格式不正确'
					}
				}
			},
			stock : {
				validators : {
					notEmpty : {
						message : '库存不能为空'
					},
					regexp : {
						regexp : /^(0|[1-9][0-9]*)$/,
						message : '库存格式不正确'
					}
				}
			}
		}
	});
	// 设置为同步请求
	$.ajaxSettings.async = false;
	$
			.getJSON('/EasyBuy/ProductCategoryController.do',
					'act=getProductCategorysList', function(data) {
						productCategoryList = data;
						loadLevel1();
					})
			.error(
					function() {
						openModalAlert('请检查网络环境！',
								'<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
						$("#edit-submit").attr({
							"disabled" : "disabled"
						});
					});
});

function loadLevel1() {
	var $categoryLevel1Id = $('select[name="categoryLevel1Id"]').empty();
	$.each(productCategoryList, function(index, item) {
		$categoryLevel1Id.append($('<option data="' + index + '" value="'
				+ item.id + '">' + item.name + '</option>'))
	});
	loadLevel2(0);
}

function loadLevel2(data1) {
	var $categoryLevel2Id = $('select[name="categoryLevel2Id"]').empty();
	$.each(productCategoryList[data1].productCategory, function(index, item) {
		$categoryLevel2Id.append($('<option data="' + index + '" value="'
				+ item.id + '">' + item.name + '</option>'))
	});
	loadLevel3(data1, 0);
}

function loadLevel3(data1, data2) {
	var $categoryLevel3Id = $('select[name="categoryLevel3Id"]').empty();
	$.each(productCategoryList[data1].productCategory[data2].productCategory,
			function(index, item) {
				$categoryLevel3Id.append($('<option value="' + item.id + '">'
						+ item.name + '</option>'))
			});
}

// 分类框点击事件
$('select[name="categoryLevel1Id"]').on('change', function() {
	loadLevel2($(this).find('option:selected').attr('data'));
});
$('select[name="categoryLevel2Id"]').on(
		'change',
		function() {
			loadLevel3($('select[name="categoryLevel1Id"]').find(
					'option:selected').attr('data'), $(this).find(
					'option:selected').attr('data'));
		});

window.onload = function() {
	// 根据Id加载表单内容
	if (id == -1) {
		$('#editForm').attr('action',
				'/EasyBuy/ProductController.do?act=insertProduct');
		$('#title').html('新建商品');
		$("#edit-reset").attr({
			"disabled" : "disabled"
		});
	} else {
		$('#editForm').attr('action',
				'/EasyBuy/ProductController.do?act=updateProduct&id=' + id);
		openModalPro('加载中...');
		$('#title').html('编辑商品');
		// 设置为同步请求
		$.ajaxSettings.async = false;
		$
				.getJSON(
						'/EasyBuy/ProductController.do',
						'act=getProductById&id=' + id,
						function(data) {
							if (data == null) {
								$('#modalPro').modal('hide');
								openModalAlert('该商品不存在!',
										'<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
								$("#edit-submit").attr({
									"disabled" : "disabled"
								});
							} else {
								$('select[name="categoryLevel1Id"]').val(
										data.categoryLevel1Id);
								loadLevel2($('select[name="categoryLevel1Id"]')
										.find('option:selected').attr('data'));
								$('select[name="categoryLevel2Id"]').val(
										data.categoryLevel2Id);
								loadLevel3($('select[name="categoryLevel1Id"]')
										.find('option:selected').attr('data'),
										$('select[name="categoryLevel2Id"]')
												.find('option:selected').attr(
														'data'));
								$('input[name="name"]').val(data.name);
								$('input[name="id"]').val(data.id);
								$('input[name="price"]').val(data.price);
								$('input[name="stock"]').val(data.stock);
								$('textarea[name="description"]').val(
										data.description);
								$('#modalPro').modal('hide');
								$("#edit-reset").attr({
									"disabled" : "disabled"
								});
								$('#uploadfile').fileinput('destroy');
								var ll = data.fileName.split('\\');
								$('#uploadfile').fileinput({
									language : 'zh',
									allowedFileExtensions : [ 'jpg', 'png' ],
									showUpload : false,
									maxFileSize : 300,
									dropZoneEnabled : false,
									fileActionSettings : {
										showRemove : true,
										showUpload : true,
										showZoom : false,
										showDrag : true
									},
									// 初始化预览图片的配置
									initialPreviewAsData : true,
									initialPreviewFileType : 'image',
									initialPreview : data.fileName, // 要显示的图片的路径
									initialPreviewConfig : [ {
										caption : ll[ll.length - 1]
									} ]
								});
							}
						})
				.error(
						function() {
							$('#modalPro').modal('hide');
							openModalAlert('请检查网络配置!',
									'<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
							$("#edit-submit").attr({
								"disabled" : "disabled"
							});
						});
	}
}