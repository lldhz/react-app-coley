'use strict'

import ReactDom from 'react-dom';


//var wx = require('./api/wx');

var http = require('./http');
var util = require('./api/util')

// 简单版本的router，使用Hash实现，不需要依赖第三方js
// 支持AMD、CMD


/**
 * 检查页面是否需要登录
 */
var requireLogin = function() {
    // TODO 检查登录逻辑，如果需要则调整到登录页面，否则不做处理
}

function checkLogin(url) {
	// 需要登录页面的路由规则
    //Alert("search",window.location.search);
    if (/post|mine/.test(url)) {
        requireLogin();
    }
}

function Router(view) {
    var query = Array.prototype.slice.call(arguments, 1);
    var Loading = require('./components/Loading');
    //
    //util.fetchWeixinConfig();
    ReactDom.render(<Loading/>, document.getElementById('container'));
    view((Page,title) => {
        document.getElementsByName('viewport')[0].content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
        document.title = title;
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = 'images/favicon.ico';
        iframe.onload = () => {setTimeout(() => {iframe.remove()},0);};
        document.body.appendChild(iframe);
        ReactDom.render(<Page query={query}/>, document.getElementById('container'));
        window.scrollTo(0,0);
    });
}

let routes = {};

function setRoutes(p_routes) {
	for (var view in p_routes) {
		p_routes[view] = Router.bind(null, p_routes[view])
	}
	routes = p_routes;
}

function jump() {
    var hash = location.hash.replace('#/', '');
    checkLogin(hash);
    for (var route in routes) {
        var regExp = new RegExp('^' + route.replace(/\//g, '\\/').replace(/:\S.?/g, '\\S.*?') + '$');
        var match = regExp.test(hash);
        if (match) {
            var args = route.split('/');
            var paths = hash.split('/');
            var query = [];
            for (var i = 0; i < args.length; i++) {
                if (/^:/.test(args[i])) {
                    query.push(paths[i]);
                }
            }
            routes[route](query[0], query[1], query[2], query[3], query[4]);
            return;
        }
    }
}

function start() {
    window.onhashchange = () => jump();
    jump();
}
//var wx=require('./api/wx')
exports.setRoutes = setRoutes;
exports.start = start;