var adminPanel = ' <div class="panel-group" id="adminPanel">' +
    '   <h1 class="text-center" style="margin-bottom: 10%">欢迎回来，<strong id="titleUserName"></strong></h1>' +
    '   <div class="panel panel-primary">' +
    '       <div class="panel-heading">' +
    '           <h1 class="panel-title">' +
    '               使用指导' +
    '           </h1>' +
    '       </div>' +
    '       <div class="panel-body">' +
    '           <p><span class="glyphicon glyphicon-th-list"></span>通用功能：无</p>' +
    '           <p><span class="glyphicon glyphicon-list-alt"></span>产品功能：无</p>' +
    '       </div>' +
    '   </div>' +
    '   <div class="panel panel-primary">' +
    '       <div class="panel-heading">' +
    '           <h1 class="panel-title">' +
    '               使用指导' +
    '           </h1>' +
    '       </div>' +
    '       <div class="panel-body">' +
    '           <p><span class="glyphicon glyphicon-th-list"></span>通用功能：无</p>' +
    '           <p><span class="glyphicon glyphicon-list-alt"></span>产品功能：无</p>' +
    '       </div>' +
    '   </div>' +
    '   <div class="panel panel-primary">' +
    '       <div class="panel-heading">' +
    '            <h1 class="panel-title">' +
    '                友情链接' +
    '            </h1>' +
    '        </div>' +
    '        <div class="panel-body">' +
    '            <p><span class="glyphicon glyphicon-th-list"></span>通用功能：无</p>' +
    '            <p><span class="glyphicon glyphicon-list-alt"></span>产品功能：无</p>' +
    '        </div>' +
    '    </div>' +
    '</div>';

function fitAdminPanel(userName) {
    $('.section').html(adminPanel);
    $('#titleUserName').html(userName);
}

