/**
 * Created by Shirley on 16/7/18.
 */


var http = require('../../http');
var ConfigStore = require("../../store/ConfigStore");
exports.getConfigFile = function (requestBody, callback) {
    http.loadJSONFile("/data/mine.json", data=> {
        ConfigStore.setStore(data);
        callback && callback(data);
    });
};
