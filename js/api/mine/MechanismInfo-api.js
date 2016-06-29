/**
 * Created by Shirley on 16/6/23.
 */
var http = require('../../http');
var CustomStore = require('../../store/CustomStore');

exports.postMechanism= function(requestBody,callback) {
    http.post("http://service2.haalthy.com/open/user/update/mechanism",requestBody,data=>{
        if(data.code != 0)
        {
            CustomStore.setStore("Mechanism",data.content);
        }
        callback && callback(data);
    });
};