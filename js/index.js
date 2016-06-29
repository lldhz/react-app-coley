'use strict'

window.$ = require('./http');


var util = require('./api/util');

import React from 'react';

function Myroad(callback) {
    require.ensure([], function(){
        callback(require('./pages/myroad/MyRoad'),"奇迹之路");
    })
}

function Mechanism(callback) {
    require.ensure([], function(){
        callback(require('./pages/mechanism/Mechanism'),"查一查");
    })
}

function Service(callback) {
    require.ensure([], function(){
        callback(require('./pages/service/Service'),"自助服务");
    })
}

function Mine(callback) {
    require.ensure([], function(){
        callback(require('./pages/mine/Mine'),"我的");
    })
}
function PatientInfo(callback) {
    require.ensure([], function () {
        callback(require('./pages/mine/PatientInfo'), "患者信息");
    })
}

function MechanismInfo(callback) {
    require.ensure([], function(){
        callback(require('./pages/mine/MechanismInfo'),"病情信息");
    })
}
function TreatmentInfo(callback) {
    util.fetchWeixinConfig(()=>{
        require.ensure([], function(){
            callback(require('./pages/myroad/TreatmentInfo'),"诊疗记录");
        })
    })
}
function NotFound(callback) {
    require.ensure([], function(){
        callback(require('./NotFound'),"找不到该页");
    })
}


// custom router

import MinRouter from './min-router';

MinRouter.setRoutes({
    "mine": Mine,
    "service": Service,
    "mechanism": Mechanism,
    "myroad": Myroad,
    "patientinfo":PatientInfo,
    "mechanismInfo":MechanismInfo,
    "treatmentInfo":TreatmentInfo,
    "":PatientInfo,

    "404": NotFound,
    ":a": NotFound,
    ":a/:b": NotFound,
    ":a/:b/:c": NotFound,
    ":a/:b/:c/:d": NotFound
});

MinRouter.start();



