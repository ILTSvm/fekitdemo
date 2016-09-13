var $ = require('./libs/jquery.js');

var common = require('./utils/common.util.js');

var tplHeader = require('./tpls/header.string');

var tplfooter = require('./tpls/footer.string');

var tplindexbody = require('./tpls/index.body.string');

var list = require('./modules/index.js');

$(function () {
    common.renderHtml(tplHeader+tplindexbody+tplfooter);
    list();
})
