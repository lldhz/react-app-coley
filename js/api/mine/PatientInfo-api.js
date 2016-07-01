/**
 * Created by Shirley on 16/6/20.
 */
var http = require('../../http');
var CustomStore = require('../../store/CustomStore');

exports.postPatient= function(requestBody,callback) {
    http.post("http://service2.haalthy.com/open/user/update/patient",requestBody,data=>{
        if(data.code != 0)
        {
            CustomStore.setStore("Patient",data.content);
        }
        callback && callback(data);
    });
};

exports.getPatient=function(param,callback)
{
    http.getJSON("http://service2.haalthy.com/open/user/patient",param,data=>{
        if(data.code != 0)
        {
            CustomStore.setStore("Patient",data.content);
        }
        callback && callback(data);
    });
};
