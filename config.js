/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

var host = "api.it120.cc"
var url_main = "https://api.it120.cc/tz"

var config = {

    // 下面的地址配合云端 Server 工作
    host,

    // 登录地址，用于建立会话
    banderListUrl: `${url_main}/banner/list`,

    categoryAllUrl: `${url_main}/shop/goods/category/all`,

    goodsListUrl: `${url_main}/shop/goods/list`,

    discountsCouponsUrl: `${url_main}/discounts/coupons`,

    discountsFetchUrl: `${url_main}/discounts/fetch`,

    noticeListUrl: `${url_main}/notice/list`

};

module.exports = config
