var id = -1;
//获得Id
id = GetRequest('id');
//根据Id加载表单内容
if (id == -1) {
    $('#editForm').attr('action', '/EasyBuy/UserController.do?act=insertUser');
    $('#title').html('新建用户');
} else {
    $('#editForm').attr('action', '/EasyBuy/UserController.do?act=updateUser&id=' + id);
    openModalPro('加载中...');
    $('#title').html('编辑用户');
    $.getJSON('/EasyBuy/UserController.do'
        , 'act=getUserById&id=' + id
        , function (data) {
            $("#edit-reset").attr({"disabled": "disabled"});
            if (data == null) {
                $('#modalPro').modal('hide');
                openModalAlert('该用户不存在!',
                    '<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
                $("#edit-submit").attr({"disabled": "disabled"});
            } else {
                $('input[name="userName"]').val(data.userName);
                $('input[name="loginName"]').val(data.loginName);
                $('input[name="loginName"]').attr("disabled", "disabled");
                $('input[name="password"]').val(data.password);
                $('input[name="rpassword"]').val(data.password);
                $('input[name="rpassword"]').attr("disabled", "disabled");
                $('select[name="sex"]').val(data.sex);
                $('input[name="identityCode"]').val(data.identityCode);
                $('input[name="email"]').val(data.email);
                $('input[name="mobile"]').val(data.mobile);
                $('select[name="type"]').val(data.type);
                $('#modalPro').modal('hide');
                $('input[name="password"]').on('click', function () {
                    openModalCon('确认要修改密码吗？', function () {
                        $('input[name="rpassword"]').removeAttr("disabled");
                        $('input[name="password"]').val('');
                        $('input[name="rpassword"]').val('');
                        $('#modalCon').modal('hide');
                        $('input[name="password"]').unbind('click');
                    });
                });
            }
        }).error(function () {
        $('#modalPro').modal('hide');
        openModalAlert('请检查网络配置!',
            '<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
        $("#edit-submit").attr({"disabled": "disabled"});
    });
}

//登陆表单验证
$('#editForm').bootstrapValidator({
    message: "This value is not valid",
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        userName: {
            validators: {
                notEmpty: {
                    message: '姓名不能为空'
                }
            }
        }, loginName: {
            threshold: 1,
            validators: {
                notEmpty: {
                    message: '用户名不能为空'
                },
                remote: {   //ajax验证。server result:{"valid",true or false}
                    url: '/EasyBuy/UserController.do',
                    message: '用户已存在',
                    delay: 3000,
                    type: 'POST',
                    dataType: 'text',
                    data: {
                        "loginName": $('#vloginName').val(),
                        "act": "checkloginName"
                    }
                }
            }
        },
        password: {
            validators: {
                notEmpty: {
                    message: '密码不能为空'
                }
            }
        }, rpassword: {
            validators: {
                notEmpty: {
                    message: '确认密码不能为空'
                },
                identical: {
                    field: 'password',
                    message: '两次输入密码不一致'
                }
            }
        }, identityCode: {
            validators: {
                regexp: {
                    regexp: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
                    message: '身份证格式不正确'
                }
            }
        }, email: {
            validators: {
                regexp: {
                    regexp: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
                    message: '邮箱格式不正确'
                }
            }
        }, mobile: {
            validators: {
                regexp: {
                    regexp: /^\d{11}$/,
                    message: '手机号码不正确'
                }
            }
        }
    }
});