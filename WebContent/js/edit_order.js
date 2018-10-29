var id = -1;
//获得Id
id = GetRequest('id');
//设置section上外边距
$('.section').css("margin-top", $navbar.css('height'));
$('.section').css("margin-bottom", $('.navbar-fixed-bottom').css('height'));
//根据Id加载表单内容
if (id == -1) {
    openModalAlert('请检查网络配置!',
        '<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
} else {
    // var $list=$('#list').empty();
    // var fileName = '\\EasyBuy\\statics\\images\\baby_6.jpg';
    // var name = "风里";
    // var quantity = "20";
    // var cost = "2000";
    // for (var i=0;i<100;i++){
    //     $list.append('<li class="list-group-item"><span class="badge">' +
    //         '<span><span>X&nbsp;</span>'+quantity+'</span>' +
    //         '</span><img class="img-thumbnail" style="float: left;" src="http://' + ip + fileName + '">' +
    //         '<blockquote>' + name + '<small class="cost h4">' + cost + '</small></blockquote></li>');
    // }

    //设值徽章行高实现垂直居中
    $('.badge').css('line-height', $('blockquote').css('height'));
    //设置图片高度
    $('.img-thumbnail').css('height', $('blockquote').css('height'));

    openModalPro('加载中...');
    $.getJSON('http://' + ip + '/EasyBuy/OrderDetailController.do'
        , 'act=getUserProducts&id=' + id
        , function (data) {
            var $list = $('#list').empty();
            if (data == null) {
                $('#modalPro').modal('hide');
                openModalAlert('没有该订单的数据!',
                    '<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
                $("#edit-submit").attr({"disabled": "disabled"});
            } else {
                $.each(data, function (index, item) {
                    $list.append('<li class="list-group-item"><span class="badge">' +
                        '<span><span>X&nbsp;</span>' + item.quantity + '</span>' +
                        '</span><img class="img-thumbnail" style="float: left;height: 55px;" src="http://' + ip + item.products[0].fileName + '">' +
                        '<blockquote>' + item.products[0].name + '<small class="cost h4">' + item.cost + '</small></blockquote></li>');
                });
                $.getJSON('http://' + ip + '/EasyBuy/OrderController.do'
                    , 'act=getOrderById&id=' + id, function (data) {
                        $('#loginName').text(data.loginName);
                        $('#cost').text(data.cost);
                        $('#userAddress').text(data.userAddress);
                        $('#serialNumber').text(data.serialNumber);
                    }
                );
            }
            $('#modalPro').modal('hide');
            //图片点击查看大图
            $('.img-thumbnail').on('click', function () {
                openModalImg($(this).attr('src'), $(this).next().clone().children().remove().end().text());
            });
        }).error(function () {
        $('#modalPro').modal('hide');
        openModalAlert('请检查网络配置!',
            '<button class="btn btn-danger col-xs-12" data-dismiss="modal">确认</button>');
    });
}

function openModalImg(imgSrc, imgName) {
    $('#imgSrc').attr('src', imgSrc);
    $('#imgName').html(imgName);
    $('#modalImg').modal('show');
}

