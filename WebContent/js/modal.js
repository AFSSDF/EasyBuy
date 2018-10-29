//判断提示模态框是否为开启状态
function isModalProIn() {
    if ($('#modalPro').hasClass('in')) {
        return true;
    }
    return false;
}

//判断提醒模态框是否为开启状态
function isModalAlertIn() {
    if ($('#modalAlert').hasClass('in')) {
        return true;
    }
    return false;
}

//判断确认模态框是否为开启状态
function isModalConIn() {
    if ($('#modalCon').hasClass('in')) {
        return true;
    }
    return false;
}

//创建并打开确认框
function openModalCon(title, fn) {
    $('#modalCon-title').html(title);
    $('#modalCon-yes').on('click', fn);
    $('#modalCon-no').on('click',function () {
        $('#modalCon-yes').unbind('click');
        $('#modalCon').modal('hide');
    });
    $('#modalCon').modal('show');
}

//创建并打开提醒框
function openModalAlert(title, ok) {
    $('#modalAlert-title').html(title);
    var b='default';
    if (ok != b) {
        $('#modalAlert-ok').html(ok);
    } else {
        $('#modalAlert-ok').html('<button class="btn btn-default col-xs-12" data-dismiss="modal">确认</button>');
    }
    $('#modalAlert').modal('show');
}

//创建并打开提示框
function openModalPro(title) {
    $('#modalPro-title').html(title);
    $('#modalPro').modal('show');
}