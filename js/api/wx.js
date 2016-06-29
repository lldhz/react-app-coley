!function (a, b) {
    "function" == typeof define && (define.amd || define.cmd) ? define(function () {
        return b(a)
    }) : b(a, !0)
}(window || this, function (a, b) {
    function c(b, c, d) {
        a.WeixinJSBridge ? WeixinJSBridge.invoke(b, e(c), function (a) {
            g(b, a, d)
        }) : j(b, d)
    }

    function d(b, c, d) {
        a.WeixinJSBridge ? WeixinJSBridge.on(b, function (a) {
            d && d.trigger && d.trigger(a), g(b, a, c)
        }) : d ? j(b, d) : j(b, c)
    }

    function e(a) {
        return a = a || {}, a.appId = z.appId, a.verifyAppId = z.appId, a.verifySignType = "sha1", a.verifyTimestamp = z.timestamp + "", a.verifyNonceStr = z.nonceStr, a.verifySignature = z.signature, a
    }

    function f(a) {
        return {
            timeStamp: a.timestamp + "",
            nonceStr: a.nonceStr,
            "package": a.package,
            paySign: a.paySign,
            signType: a.signType || "SHA1"
        }
    }

    function g(a, b, c) {
        var d, e, f;
        switch (delete b.err_code, delete b.err_desc, delete b.err_detail, d = b.errMsg, d || (d = b.err_msg, delete b.err_msg, d = h(a, d, c), b.errMsg = d), c = c || {}, c._complete && (c._complete(b), delete c._complete), d = b.errMsg || "", z.debug && !c.isInnerInvoke && alert(JSON.stringify(b)), e = d.indexOf(":"), f = d.substring(e + 1)) {
            case"ok":
                c.success && c.success(b);
                break;
            case"cancel":
                c.cancel && c.cancel(b);
                break;
            default:
                c.fail && c.fail(b)
        }
        c.complete && c.complete(b)
    }

    function h(a, b) {
        var d, e, f, g;
        if (b) {
            switch (d = b.indexOf(":"), a) {
                case o.config:
                    e = "config";
                    break;
                case o.openProductSpecificView:
                    e = "openProductSpecificView";
                    break;
                default:
                    e = b.substring(0, d), e = e.replace(/_/g, " "), e = e.replace(/\b\w+\b/g, function (a) {
                        return a.substring(0, 1).toUpperCase() + a.substring(1)
                    }), e = e.substring(0, 1).toLowerCase() + e.substring(1), e = e.replace(/ /g, ""), -1 != e.indexOf("Wcpay") && (e = e.replace("Wcpay", "WCPay")), f = p[e], f && (e = f)
            }
            g = b.substring(d + 1), "confirm" == g && (g = "ok"), "failed" == g && (g = "fail"), -1 != g.indexOf("failed_") && (g = g.substring(7)), -1 != g.indexOf("fail_") && (g = g.substring(5)), g = g.replace(/_/g, " "), g = g.toLowerCase(), ("access denied" == g || "no permission to execute" == g) && (g = "permission denied"), "config" == e && "function not exist" == g && (g = "ok"), b = e + ":" + g
        }
        return b
    }

    function i(a) {
        var b, c, d, e;
        if (a) {
            for (b = 0, c = a.length; c > b; ++b)d = a[b], e = o[d], e && (a[b] = e);
            return a
        }
    }

    function j(a, b) {
        if (!(!z.debug || b && b.isInnerInvoke)) {
            var c = p[a];
            c && (a = c), b && b._complete && delete b._complete, console.log('"' + a + '",', b || "")
        }
    }

    function k() {
        if (!("6.0.2" > w || y.systemType < 0)) {
            var b = new Image;
            y.appId = z.appId, y.initTime = x.initEndTime - x.initStartTime, y.preVerifyTime = x.preVerifyEndTime - x.preVerifyStartTime, C.getNetworkType({
                isInnerInvoke: !0,
                success: function (a) {
                    y.networkType = a.networkType;
                    var c = "https://open.weixin.qq.com/sdk/report?v=" + y.version + "&o=" + y.isPreVerifyOk + "&s=" + y.systemType + "&c=" + y.clientVersion + "&a=" + y.appId + "&n=" + y.networkType + "&i=" + y.initTime + "&p=" + y.preVerifyTime + "&u=" + y.url;
                    b.src = c
                }
            })
        }
    }

    function l() {
        return (new Date).getTime()
    }

    function m(b) {
        t && (a.WeixinJSBridge ? b() : q.addEventListener && q.addEventListener("WeixinJSBridgeReady", b, !1))
    }

    function n() {
        C.invoke || (C.invoke = function (b, c, d) {
            a.WeixinJSBridge && WeixinJSBridge.invoke(b, e(c), d)
        }, C.on = function (b, c) {
            a.WeixinJSBridge && WeixinJSBridge.on(b, c)
        })
    }

    var o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
    if (!a.jWeixin)return o = {
        config: "preVerifyJSAPI",
        onMenuShareTimeline: "menu:share:timeline",
        onMenuShareAppMessage: "menu:share:appmessage",
        onMenuShareQQ: "menu:share:qq",
        onMenuShareWeibo: "menu:share:weiboApp",
        onMenuShareQZone: "menu:share:QZone",
        previewImage: "imagePreview",
        getLocation: "geoLocation",
        openProductSpecificView: "openProductViewWithPid",
        addCard: "batchAddCard",
        openCard: "batchViewCard",
        chooseWXPay: "getBrandWCPayRequest"
    }, p = function () {
        var b, a = {};
        for (b in o)a[o[b]] = b;
        return a
    }(), q = a.document, r = q.title, s = navigator.userAgent.toLowerCase(), t = -1 != s.indexOf("micromessenger"), u = -1 != s.indexOf("android"), v = -1 != s.indexOf("iphone") || -1 != s.indexOf("ipad"), w = function () {
        var a = s.match(/micromessenger\/(\d+\.\d+\.\d+)/) || s.match(/micromessenger\/(\d+\.\d+)/);
        return a ? a[1] : ""
    }(), x = {initStartTime: l(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0}, y = {
        version: 1,
        appId: "",
        initTime: 0,
        preVerifyTime: 0,
        networkType: "",
        isPreVerifyOk: 1,
        systemType: v ? 1 : u ? 2 : -1,
        clientVersion: w,
        url: encodeURIComponent(location.href)
    }, z = {}, A = {_completes: []}, B = {state: 0, res: {}}, m(function () {
        x.initEndTime = l()
    }), C = {
        config: function (a) {
            z = a, j("config", a);
            var b = z.check === !1 ? !1 : !0;
            m(function () {
                var a, d, e;
                if (b)c(o.config, {verifyJsApiList: i(z.jsApiList)}, function () {
                    A._complete = function (a) {
                        x.preVerifyEndTime = l(), B.state = 1, B.res = a
                    }, A.success = function () {
                        y.isPreVerifyOk = 0
                    }, A.fail = function (a) {
                        A._fail ? A._fail(a) : B.state = -1
                    };
                    var a = A._completes;
                    return a.push(function () {
                        z.debug || k()
                    }), A.complete = function () {
                        for (var c = 0, d = a.length; d > c; ++c)a[c]();
                        A._completes = []
                    }, A
                }()), x.preVerifyStartTime = l(); else {
                    for (B.state = 1, a = A._completes, d = 0, e = a.length; e > d; ++d)a[d]();
                    A._completes = []
                }
            }), z.beta && n()
        }, ready: function (a) {
            0 != B.state ? a() : (A._completes.push(a), !t && z.debug && a())
        }, error: function (a) {
            "6.0.2" > w || (-1 == B.state ? a(B.res) : A._fail = a)
        }, checkJsApi: function (a) {
            var b = function (a) {
                var c, d, b = a.checkResult;
                for (c in b)d = p[c], d && (b[d] = b[c], delete b[c]);
                return a
            };
            c("checkJsApi", {jsApiList: i(a.jsApiList)}, function () {
                return a._complete = function (a) {
                    if (u) {
                        var c = a.checkResult;
                        c && (a.checkResult = JSON.parse(c))
                    }
                    a = b(a)
                }, a
            }())
        }, onMenuShareTimeline: function (a) {
            d(o.onMenuShareTimeline, {
                complete: function () {
                    c("shareTimeline", {
                        title: a.title || r,
                        desc: a.title || r,
                        img_url: a.imgUrl || "",
                        link: a.link || location.href
                    }, a)
                }
            }, a)
        }, onMenuShareAppMessage: function (a) {
            d(o.onMenuShareAppMessage, {
                complete: function () {
                    c("sendAppMessage", {
                        title: a.title || r,
                        desc: a.desc || "",
                        link: a.link || location.href,
                        img_url: a.imgUrl || "",
                        type: a.type || "link",
                        data_url: a.dataUrl || ""
                    }, a)
                }
            }, a)
        }, onMenuShareQQ: function (a) {
            d(o.onMenuShareQQ, {
                complete: function () {
                    c("shareQQ", {
                        title: a.title || r,
                        desc: a.desc || "",
                        img_url: a.imgUrl || "",
                        link: a.link || location.href
                    }, a)
                }
            }, a)
        }, onMenuShareWeibo: function (a) {
            d(o.onMenuShareWeibo, {
                complete: function () {
                    c("shareWeiboApp", {
                        title: a.title || r,
                        desc: a.desc || "",
                        img_url: a.imgUrl || "",
                        link: a.link || location.href
                    }, a)
                }
            }, a)
        }, onMenuShareQZone: function (a) {
            d(o.onMenuShareQZone, {
                complete: function () {
                    c("shareQZone", {
                        title: a.title || r,
                        desc: a.desc || "",
                        img_url: a.imgUrl || "",
                        link: a.link || location.href
                    }, a)
                }
            }, a)
        }, startRecord: function (a) {
            c("startRecord", {}, a)
        }, stopRecord: function (a) {
            c("stopRecord", {}, a)
        }, onVoiceRecordEnd: function (a) {
            d("onVoiceRecordEnd", a)
        }, playVoice: function (a) {
            c("playVoice", {localId: a.localId}, a)
        }, pauseVoice: function (a) {
            c("pauseVoice", {localId: a.localId}, a)
        }, stopVoice: function (a) {
            c("stopVoice", {localId: a.localId}, a)
        }, onVoicePlayEnd: function (a) {
            d("onVoicePlayEnd", a)
        }, uploadVoice: function (a) {
            c("uploadVoice", {localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
        }, downloadVoice: function (a) {
            c("downloadVoice", {serverId: a.serverId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
        }, translateVoice: function (a) {
            c("translateVoice", {localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
        }, chooseImage: function (a) {
            c("chooseImage", {
                scene: "1|2",
                count: a.count || 9,
                sizeType: a.sizeType || ["original", "compressed"],
                sourceType: a.sourceType || ["album", "camera"]
            }, function () {
                return a._complete = function (a) {
                    if (u) {
                        var b = a.localIds;
                        b && (a.localIds = JSON.parse(b))
                    }
                }, a
            }())
        }, previewImage: function (a) {
            c(o.previewImage, {current: a.current, urls: a.urls}, a)
        }, uploadImage: function (a) {
            c("uploadImage", {localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
        }, downloadImage: function (a) {
            c("downloadImage", {serverId: a.serverId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
        }, getNetworkType: function (a) {
            var b = function (a) {
                var c, d, e, b = a.errMsg;
                if (a.errMsg = "getNetworkType:ok", c = a.subtype, delete a.subtype, c)a.networkType = c; else switch (d = b.indexOf(":"), e = b.substring(d + 1)) {
                    case"wifi":
                    case"edge":
                    case"wwan":
                        a.networkType = e;
                        break;
                    default:
                        a.errMsg = "getNetworkType:fail"
                }
                return a
            };
            c("getNetworkType", {}, function () {
                return a._complete = function (a) {
                    a = b(a)
                }, a
            }())
        }, openLocation: function (a) {
            c("openLocation", {
                latitude: a.latitude,
                longitude: a.longitude,
                name: a.name || "",
                address: a.address || "",
                scale: a.scale || 28,
                infoUrl: a.infoUrl || ""
            }, a)
        }, getLocation: function (a) {
            a = a || {}, c(o.getLocation, {type: a.type || "wgs84"}, function () {
                return a._complete = function (a) {
                    delete a.type
                }, a
            }())
        }, hideOptionMenu: function (a) {
            c("hideOptionMenu", {}, a)
        }, showOptionMenu: function (a) {
            c("showOptionMenu", {}, a)
        }, closeWindow: function (a) {
            a = a || {}, c("closeWindow", {immediate_close: a.immediateClose || 0}, a)
        }, hideMenuItems: function (a) {
            c("hideMenuItems", {menuList: a.menuList}, a)
        }, showMenuItems: function (a) {
            c("showMenuItems", {menuList: a.menuList}, a)
        }, hideAllNonBaseMenuItem: function (a) {
            c("hideAllNonBaseMenuItem", {}, a)
        }, showAllNonBaseMenuItem: function (a) {
            c("showAllNonBaseMenuItem", {}, a)
        }, scanQRCode: function (a) {
            a = a || {}, c("scanQRCode", {
                needResult: a.needResult || 0,
                scanType: a.scanType || ["qrCode", "barCode"]
            }, function () {
                return a._complete = function (a) {
                    var b, c;
                    v && (b = a.resultStr, b && (c = JSON.parse(b), a.resultStr = c && c.scan_code && c.scan_code.scan_result))
                }, a
            }())
        }, openProductSpecificView: function (a) {
            c(o.openProductSpecificView, {pid: a.productId, view_type: a.viewType || 0, ext_info: a.extInfo}, a)
        }, addCard: function (a) {
            var e, f, g, h, b = a.cardList, d = [];
            for (e = 0, f = b.length; f > e; ++e)g = b[e], h = {card_id: g.cardId, card_ext: g.cardExt}, d.push(h);
            c(o.addCard, {card_list: d}, function () {
                return a._complete = function (a) {
                    var c, d, e, b = a.card_list;
                    if (b) {
                        for (b = JSON.parse(b), c = 0, d = b.length; d > c; ++c)e = b[c], e.cardId = e.card_id, e.cardExt = e.card_ext, e.isSuccess = e.is_succ ? !0 : !1, delete e.card_id, delete e.card_ext, delete e.is_succ;
                        a.cardList = b, delete a.card_list
                    }
                }, a
            }())
        }, chooseCard: function (a) {
            c("chooseCard", {
                app_id: z.appId,
                location_id: a.shopId || "",
                sign_type: a.signType || "SHA1",
                card_id: a.cardId || "",
                card_type: a.cardType || "",
                card_sign: a.cardSign,
                time_stamp: a.timestamp + "",
                nonce_str: a.nonceStr
            }, function () {
                return a._complete = function (a) {
                    a.cardList = a.choose_card_info, delete a.choose_card_info
                }, a
            }())
        }, openCard: function (a) {
            var e, f, g, h, b = a.cardList, d = [];
            for (e = 0, f = b.length; f > e; ++e)g = b[e], h = {card_id: g.cardId, code: g.code}, d.push(h);
            c(o.openCard, {card_list: d}, a)
        }, chooseWXPay: function (a) {
            c(o.chooseWXPay, f(a), a)
        }
    }, b && (a.wx = a.jWeixin = C), C
});

// 初始化
//var wx = require('wx'); // 在线
var wx = module.exports; // 离线
//var util = require('./util');
////
////var wx_config = {
////        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
////        appId: 'wxe1ddd7a7d6ab1bf7', // 必填，公众号的唯一标识
////        timestamp: new Date().getTime(), // 必填，生成签名的时间戳
////        nonceStr: '', // 必填，生成签名的随机串
////        signature: '',// 必填，签名，见附录1
////        jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
////    };
//var WeiXinConfigStore = require('../store/WeiXinConfigStore');
//var http = require('../http');
//wx.config(WeiXinConfigStore.getStore());
////WeiXinConfigStore.addListener(wx.config);
//wx.ready(function () {
//    if (process.env.NODE_ENV == 'production') {
//        // 隐藏微信右上角按钮
//        //wx.hideOptionMenu();
//    }
//    //// 记录当前会员位置
//    //var UserApi = require('../service/user-api');
//    //var StoreApi = require('../service/store-api');
//    //var convertBaiduPoint = require('../service/utils/convertBaiduPoint');
//    //if (UserApi.isLogin()) {
//    //    // 马上定位，貌似整个app会假死，延时20秒再定位
//    //    setTimeout(function(){
//    //        wx.getLocation({
//    //            type: 'wgs84', // 默认为wgs8 4的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
//    //            success: function (res) {
//    //                //var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
//    //                //var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
//    //                //var speed = res.speed; // 速度，以米/每秒计
//    //                //var accuracy = res.accuracy; // 位置精度
//    //
//    //                //_alert(JSON.stringify(res))
//    //                // 将微信获取到的GPS坐标转成百度坐标
//    //                convertBaiduPoint({lat: res.latitude, lng: res.longitude}, e => {
//    //                    //_alert(JSON.stringify(e))
//    //                    UserApi.addLocation({latitude: e.lat, longitude: e.lng});
//    //                    StoreApi.setItem('lat', e.lat);
//    //                    StoreApi.setItem('lng', e.lng);
//    //                });
//    //
//    //                //UserApi.addLocation({latitude: res.latitude, longitude: res.longitude});
//    //                //StoreApi.setItem('lat', res.latitude);
//    //                //StoreApi.setItem('lng', res.longitude);
//    //            }
//    //        });
//    //    }, 5000)
//    //}
//
//});
//wx.error(function(res){
//    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
//    //console.log(res);
//    //util.fetchWeixinConfig();
//});
//module.exports = wx;
