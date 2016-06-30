/**
 * Created by Shirley on 16/6/23.
 */
var http = require('../../http');
var CustomStore = require('../../store/CustomStore');

exports.postTreatment= function(requestBody,callback) {
    http.sync_post("http://service2.haalthy.com/open/user/update/treatment",requestBody,data=>{
        if(data.code != 0)
        {
            CustomStore.setStore("Treatment",data.content);
        }
        else
        {
            console.log(data);
        }
    });

    callback;
};


exports.postReport= function(requestBody,callback) {
    http.sync_post("http://service2.haalthy.com/open/user/update/report",requestBody,data=>{
        if(data.code != 0)
        {
            //CustomStore.setStore("Treatment",data.content);
        }
        else
        {
            //console.log(data);
        }
    });

    callback;
};



exports.postMood= function(requestBody,callback) {
    http.sync_post("http://service2.haalthy.com/open/user/update/mood",requestBody,data=>{
        if(data.code != 0)
        {
            //CustomStore.setStore("Treatment",data.content);
        }
        else
        {
            //console.log(data);
        }
    });

    callback;
};