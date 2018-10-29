//重置按钮
$('#edit-reset').on('click', function () {
    openModalCon('确认清除表单?', function () {
        $('#editForm')[0].reset();
        $('#modalCon').modal('hide');
        $("#editForm").data("bootstrapValidator").resetForm();
    });
});

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
                    if (id == -1) {
                        $('#editForm')[0].reset();
                        $("#editForm").data("bootstrapValidator").resetForm();
                    }
                } else {
                    openModalAlert('提交失败!',
                        '<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
                }
            }
        });
    }
});