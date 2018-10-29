//解析Url中的数据
function GetRequest(param) {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = "";
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            if (strs[i].split("=")[0] == param) {
                theRequest = strs[i].split("=")[1]
            }
        }
    }
    return theRequest;
}

//加载模态框
$('body').append($(modalAlert));
$('body').append($(modalCon));
$('body').append($(modalPro));




