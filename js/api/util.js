/**
 * Created by Shirley on 16/6/23.
 */
var http = require('../http');
import wx from './wx'

var CustomStore = require('../store/CustomStore');
var localStore = require('../store/local-store');

require('../components/index');
var JSApiList =['onMenuShareQQ',
    'onMenuShareWeibo',
    'onMenuShareQZone',
    'chooseImage',
    'previewImage',
    'uploadImage',
    'openLocation',
    'getLocation',
    'scanQRCode',
    'chooseWXPay'];
exports.fetchWeixinConfig = function(callback) {
    var _config =new Object();
    http.getJSON("http://service2.haalthy.com/open/weixin/config",
        {url:window.location.protocol + '//' + window.location.host + '/' + window.location.search}
        //{url:window.location.protocol + '//' + window.location.host + '/'}
        ,data => {
        if(data.result == 1)
        {
            //Alert(window.location.protocol);
            //Alert(window.location.host);
            //Alert(window.location.search);
            _config = {
                debug:false,
                appId: data.content.appId,
                timestamp: Number(data.content.timestamp),
                nonceStr: data.content.nonceStr,
                signature: data.content.signature,
                jsApiList: JSApiList
            };
            wx.config(_config);
            callback && callback(_config);
        }
    });
    return _config
};

exports.fetchWeixinUserInfo = function(params,callback){
        //Alert('错误',params);
    if(!localStore.getItem('fetched')) {
        http.getJSON("http://service2.haalthy.com/open/user/basic" + params, data => {
            if (data.code == 10) {
                localStore.setItem('openid', data.content.openid);
                localStore.setItem('country', data.content.country);
                localStore.setItem('nickname', data.content.nickname);
                localStore.setItem('city', data.content.city);
                localStore.setItem('sex', data.content.sex);
                localStore.setItem('headimgurl', data.content.headimgurl);
                localStore.setItem('fetched', true);
                callback && callback();
            }
        });
    }
    else
        callback && callback();
};

exports.getRequest = function (data) {
    //var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (data.indexOf("?") != -1) {
        var str = data.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    //Alert("params,theRequest");
    return theRequest;
};