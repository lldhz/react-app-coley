/**
 * 这里封装了http请求
 * 所有的请求都应该调用
 * 该模块的的方法进行访问
 */

/**
 * 封装了一个
 * 精简的ajax请求
 * 不考虑PC兼容性
 * @param url
 * @param config
 */
function request(url, config) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var status = (xhr.status === 1223) ? 204 : xhr.status
        if (status < 100 || status > 599) {
            config.error(new TypeError('Network request failed'))
            return
        }
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        if (config.dataType == 'json') {
            body = JSON.parse(body);
        }
        config.success({body: body, status: status, statusText: xhr.statusText})
    }

    if (config.method == 'GET') {
        var args = [];
        for (let q in config.data) {
            args.push(`${q}=${config.data[q]}`);
        }
        let q = ''
        if (args.length > 0) {
            q = '?'
        }
        url = `${url}${q}${args.join('&')}`;
    }

    xhr.open(config.method, url, true);

    let data;
    if (config.method == 'POST') {
        data = JSON.stringify(config.data);
        xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8')
    }

    xhr.send(data);
}

var apiUrl = '';

if (process.env.NODE_ENV != 'production') {
    //apiUrl = 'http://192.168.1.218:10000';
}


/**
 * 执行 ajax 请求
 * data 可以不传
 * @param url
 * @param data
 * @param callback
 * @param httpMethod
 */
function ajax(url, data, callback, httpMethod) {
    if (typeof data === 'function') {
        callback = data;
    }

    url = apiUrl + url;

    if ('POST' == httpMethod) {

        request(url, {
            method: 'POST',
            dataType: 'json',
            data: data,
            success(res) {
                var data = res.body;
                httpInterceptor(data);
                callback && callback(data);
            }
        })
    } else {

        request(url, {
            method: 'GET',
            dataType: 'json',
            data: data,
            success(res) {
                //console.log(res);
                var data = res.body;
                //console.log(data);
                httpInterceptor(data);
                callback && callback(data);
            }
        })
    }

}

/**
 * 执行 ajax 请求
 * data 可以不传
 * @param url
 * @param data
 * @param callback
 * @param httpMethod
 */
function sync_ajax(url, data, callback, httpMethod) {
    if (typeof data === 'function') {
        callback = data;
    }

    url = apiUrl + url;

    if ('POST' == httpMethod) {

        request(url, {
            method: 'POST',
            dataType: 'json',
            async:false,
            data: data,
            success(res) {
                var data = res.body;
                httpInterceptor(data);
                callback && callback(data);
            }
        })
    } else {

        request(url, {
            method: 'GET',
            dataType: 'json',
            async:false,
            data: data,
            success(res) {
                //console.log(res);
                var data = res.body;
                //console.log(data);
                httpInterceptor(data);
                callback && callback(data);
            }
        })
    }

}
/**
 * 调用方式：
 *  http.get('/cxf/pro', {id: 1}, function(data){...})
 *  http.get('/cxf/logout', function(data){...})
 * url 会自动带上用户信息
 * @param url
 * @param data
 * @param callback
 */
exports.get = function(url, data, callback) {
    data = data || {};
    //if (!data.vipId) {
    //    data.vipId = getUser().userId;
    //}
    //data.token = getUser().token;
    ajax(url, data, callback, 'GET', true);
};

/**
 * 调用方式：
 *  http.getJSON('/cxf/pro', {id: 1}, function(data){...})
 *  http.getJSON('/cxf/logout', function(data){...})
 * @param url
 * @param data
 * @param callback
 */
exports.getJSON = function(url, data, callback) {
    ajax(url, data, callback, 'GET');
};

/**
 * 调用方式：
 *  http.getJSON('/cxf/pro', {id: 1}, function(data){...})
 *  http.getJSON('/cxf/logout', function(data){...})
 * @param url
 * @param data
 * @param callback
 */
exports.sync_get = function(url, data, callback) {
    sync_ajax(url, data, callback, 'GET');
};

/**
 * 调用方式：
 *  http.post('/cxf/login', {username: 'john', password: 'dev'}, function(data){...})
 * @param url
 * @param data
 * @param callback
 */
exports.sync_post = function(url, data, callback) {
    sync_ajax(url, data, callback, 'POST');
};
/**
 * http代理
 * @param url
 * @param data
 * @param callback
 */
exports.proxy = function(url, data, callback) {
    request(url, {
        method: 'GET',
        data: data,
        dataType: 'json',
        success(res) {
            callback(res.body);
        }
    })
};

/**
 * 调用方式：
 *  http.post('/cxf/login', {username: 'john', password: 'dev'}, function(data){...})
 * @param url
 * @param data
 * @param callback
 */
exports.post = function(url, data, callback) {
    ajax(url, data, callback, 'POST');
};

/**
 * 普通的post请求，不会带上tokenId 跟 vipId
 * @param url
 * @param data
 * @param callback
 */
exports.ajaxPost = function(url, data, callback) {
    //url = appendToken(url);
    ajax(url, data, callback, 'POST');
};

//function appendToken(url) {
//    return url;
//}

/**
 * http 拦截器（统一处理错误信息）
 * @param data
 */
function httpInterceptor(data) {
    if (data.result == '0') {
        // TODO 超时，重新登录
    }
}