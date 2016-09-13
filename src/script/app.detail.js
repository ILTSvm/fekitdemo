var $ = require('./libs/jquery.js');

var common = require('./utils/common.util.js');

var tplHeader = require('./tpls/header.string');

var tplfooter = require('./tpls/footer.string');

var tpldetailbody = require('./tpls/detail.body.string');

$(function () {
    common.renderHtml(tplHeader+tpldetailbody+tplfooter);
})

