var signForm = '<form role="form" id="signForm" action="#" method="post">' +
    '<p class="text-center"><strong class="text-muted h1">用户登录</strong></p>' +
    '<div class="form-group"><label>用户名:</label>' +
    '<input type="text" name="loginName" class="form-control" placeholder="在这里输入用户名">' +
    '</div>' +
    '<div class="form-group"><label>密码:</label>' +
    '<input type="password" name="password" class="form-control" placeholder="在这里输入密码"></div>' +
    '<div class="form-group"><label>IP:</label>' +
    '<input type="text" name="ip" class="form-control" placeholder="在这里输入IP"></div>' +
    '</div>' +
    '<div class="form-group  text-center sign-btn">' +
    '<input type="button" id="land-submit" class="btn btn-primary btn-block" value="登录">' +
    '<input type="button" class="btn btn-primary btn-block" value="重置">' +
    '<input type="button" class="btn btn-danger btn-block" value="退出">' +
    '</div>' +
    '</form>';


function fitSignForm() {
    $('.section').html(signForm);
    //登陆表单验证
    $('#signForm').bootstrapValidator({
        message: "This value is not valid",
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            loginName: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    }
                }
            },
            ip: {
                validators: {
                    notEmpty: {
                        message: 'ip地址不能为空'
                    },
                    regexp: {
                        regexp: /^192\.168(\.([2][0-4]\d|[2][5][0-5]|[01]?\d?\d)){2}$/,
                        message: 'ip地址格式不正确'
                    }
                }
            }
        }
    });
    //绑定退出事件
    $('input[value="退出"]').on('click', function () {
        openModalCon('你确定要退出吗？', exitApp);
    });
    //绑定重置按钮
    $('input[value="重置"]').on('click',function () {
        $('#signForm')[0].reset();                     //重置
        $("#signForm").data("bootstrapValidator").resetForm();
    });
    //绑定登陆按钮
    $("#land-submit").click(function () {
        $('#signForm').data('bootstrapValidator').validate();//提交验证
        if ($("#signForm").data('bootstrapValidator').isValid()) {//获取验证结果，如果成功，执行下面代码
            ip = $('input[name="ip"]').val();
            $("#signForm").attr('action', 'http://' + ip + '/EasyBuy/UserController.do?act=checkAdmin');
            openModalPro('<span class="glyphicon glyphicon-transfer"style="color: #337ab7;animation: face-out  1s linear infinite alternate"></span>与服务器连接中...');
            $("#signForm").ajaxSubmit({
                timeout: 5000,
                dataType: 'JSON',
                success: function (data) {
                    $('#modalPro').modal('hide');
                    if (data.result == 1) {
                        openModalAlert('<span class="glyphicon glyphicon-ok-circle" style="color: green"></span>登陆成功...', 'default');
                        fitAdminPanel(data.userName);
                        this.sessionId=data.sessionId;
                        window.android.landSuccess(data.sessionId, ip);
                        isLand = true;
                    } else {
                        openModalAlert('<span class="glyphicon glyphicon-remove-circle" style="color: red"></span>登陆失败...', 'default');
                    }
                }, error: function () {
                    $('#modalPro').modal('hide');
                    openModalAlert('<span style="color: red;" class="glyphicon glyphicon-remove-circle"></span>与服务器连接失败', '<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
                }
            });
        }
    });
}

