var id = -1;
//获得Id
id = GetRequest('id');
//初始化分类框
var productCategoryList;
var flush;
$(function () {
    //登陆表单验证
    $('#editForm').bootstrapValidator({
        message: "This value is not valid",
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: '分类名称不能为空'
                    }
                }
            }
        }
    });


    flush=function (){
        $('select[name="type"]').val("1");
        $('select[name="categoryLevel1Id"]').parent().slideUp();
        $('select[name="categoryLevel2Id"]').parent().slideUp();
        $('input[name="name"]').val("");
        $("#editForm").data("bootstrapValidator").resetForm();
        //设置为同步请求
        $.ajaxSettings.async = false;
        $.getJSON('/EasyBuy/ProductCategoryController.do', 'act=getProductCategorysList'
            , function (data) {
                productCategoryList = data;
                loadLevel1();
            }).error(function () {
            openModalAlert('请检查网络环境！',
                '<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
            $("#edit-submit").attr({"disabled": "disabled"});
        });
    }
    flush();
});

function loadLevel1() {
    var $categoryLevel1Id = $('select[name="categoryLevel1Id"]').empty();
    $.each(productCategoryList, function (index, item) {
        $categoryLevel1Id.append($('<option data="' + index + '" value="' + item.id + '">' + item.name + '</option>'))
    });
    loadLevel2(0);
}

function loadLevel2(data1) {
    var $categoryLevel2Id = $('select[name="categoryLevel2Id"]').empty();
    $.each(productCategoryList[data1].productCategory, function (index, item) {
        $categoryLevel2Id.append($('<option data="' + index + '" value="' + item.id + '">' + item.name + '</option>'))
    });
}

//分类框点击事件
$('select[name="type"]').on('change', function () {
    var val = $(this).val();
    switch (val) {
        case '1':
            $('select[name="categoryLevel1Id"]').parent().slideUp();
            $('select[name="categoryLevel2Id"]').parent().slideUp();
            break;
        case '2':
            $('select[name="categoryLevel1Id"]').parent().slideDown();
            $('select[name="categoryLevel2Id"]').parent().slideUp();
            break;
        case '3':
            $('select[name="categoryLevel1Id"]').parent().slideDown();
            $('select[name="categoryLevel2Id"]').parent().slideDown();
            break;
    }
});
$('select[name="categoryLevel1Id"]').on('change', function () {
    loadLevel2($(this).find('option:selected').attr('data'));
});

//刷新键
$('#edit-flush').on('click', function () {
    flush();
});

window.onload = function () {
//根据Id加载表单内容
    if (id == -1) {
        $('#editForm').attr('action', '/EasyBuy/ProductCategoryController.do?act=insertProductCategory');
        $('#title').html('新建分类');
    } else {
        openModalAlert('Error!',
            '<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
        $("#edit-submit").attr({"disabled": "disabled"});
    }
}

//提交按钮
$('#edit-submit').on('click', function () {
    $('#editForm').data('bootstrapValidator').validate();//提交验证
    if ($("#editForm").data('bootstrapValidator').isValid()) {//获取验证结果，如果成功，执行下面代码
        $('#editForm').ajaxSubmit({
            async: false,
            success: function (data) {
                data = JSON.parse(data);
                if (data.result == "1") {
                    openModalAlert('提交成功!',
                        '<button class="btn btn-primary col-xs-12" data-dismiss="modal">确认</button>');
                    flush();
                } else {
                    openModalAlert('提交失败!',
                        '<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
                }
            }
        });
    }
});