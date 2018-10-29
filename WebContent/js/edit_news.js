var id = -1;
//获得Id
id = GetRequest('id');
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
//根据Id加载表单内容
if (id == -1) {
    $('#editForm').attr('action', '/EasyBuy/NewsController.do?act=insertNews');
    $('#title').html('新建咨询');
    $('input[name="createTime"]').val(getNowFormatDate());
} else {
    $('#editForm').attr('action', '/EasyBuy/NewsController.do?act=updateNews&id=' + id);
    openModalPro('加载中...');
    $('#title').html('编辑咨询');
    $.getJSON('/EasyBuy/NewsController.do'
        , 'act=getNewsById&id=' + id
        , function (data) {
            if (data == null) {
                $('#modalPro').modal('hide');
                openModalAlert('该咨询不存在!',
                    '<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
                $("#edit-submit").attr({"disabled": "disabled"});
            } else {
                $('input[name="title"]').val(data.title);
                $('input[name="createTime"]').val(data.createTime);
                $('textarea[name="content"]').val(data.content);
                $('#modalPro').modal('hide');
                $("#edit-reset").attr({"disabled": "disabled"});
            }
        }).error(function () {
        $('#modalPro').modal('hide');
        openModalAlert('请检查网络配置!',
            '<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
        $("#edit-submit").attr({"disabled": "disabled"});
    });
}

//表单验证
$('#editForm').bootstrapValidator({
    message: "This value is not valid",
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        title: {
            validators: {
                notEmpty: {
                    message: '标题不能为空'
                }
            }
        }, createTime: {
            validators: {
                notEmpty: {
                    message: '日期不能为空'
                },
                regexp: {
                    regexp: /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
                    message: '日期格式不正确'
                }
            }
        },
        content: {
            validators: {
                notEmpty: {
                    message: '内容不能为空'
                }
            }
        }
    }
});