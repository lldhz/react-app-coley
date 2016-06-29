/**
 * Created by Shirley on 16/6/27.
 */
/**
 * 本地存储实现
 * 使用localStorage来存储信息
 * 统一调用该APi来存储
 * 方便以后切换存储方案
 * @param key
 * @param value
 */

var localStorage = window ? window.localStorage : {setItem(){}, getItem(){}, clear(){}};

exports.setItem = function(key, value) {
    console.log(key, value);
    return localStorage.setItem(key, value);
};

exports.getItem = function(key) {
    return localStorage.getItem(key);
};

exports.removeItem = function(key) {
    return localStorage.removeItem(key);
};

exports.clear = function() {
    localStorage.clear();
};