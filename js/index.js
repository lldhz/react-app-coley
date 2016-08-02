'use strict';

window.$ = require('./http');


var util = require('./api/util');

import React from 'react';

function Myroad(callback) {
    util.fetchWeixinUserInfo(
        window.location.search,()=>{
            require.ensure([], function(){
                callback(require('./pages/myroad/MyRoad'), "指南");
            });
        });
}
function GuideLine(callback) {
    util.fetchWeixinUserInfo(
        window.location.search, ()=> {
            require.ensure([], function () {
                callback(require('./pages/guideline/GuideLine'), "指南");
            });
        });
}

function Mechanism(callback) {
    require.ensure([], function(){
        callback(require('./pages/mechanism/Mechanism'), "大家说");
    })
}


function TalkRound(callback) {
    require.ensure([], function () {
        callback(require('./pages/talk-round/TalkRound'), "大家说");
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
        callback(require('./pages/mine/PatientInfo'), "患者信息");});
}
function PatientInfoView(callback) {
    require.ensure([], function () {
        callback(require('./pages/mine/PatientInfoView'), "患者信息");});
}

function MechanismInfo(callback) {
    require.ensure([], function(){
        callback(require('./pages/mine/MechanismInfo'),"病理信息");
    })
}
function MechanismInfoView(callback) {
    require.ensure([], function(){
        callback(require('./pages/mine/MechanismInfoView'),"病理信息");
    })
}
function TreatmentInfo(callback) {
    util.fetchWeixinConfig(()=>{
        require.ensure([], function(){
            callback(require('./pages/myroad/TreatmentInfo'),"治疗经历");
        })
    })
}
function MyroadView(callback) {
    //util.fetchWeixinConfig(()=>{
        require.ensure([], function(){
            callback(require('./pages/mine/MyroadView'), "指标分析");
        });
    //})
}
function MyPhone(callback) {
    //util.fetchWeixinConfig(()=>{
    require.ensure([], function () {
        callback(require('./pages/mine/MyPhone'), "我的手机");
    });
    //})
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
    "patientInfo":PatientInfo,
    "mechanismInfo":MechanismInfo,
    "mechanismInfoView":MechanismInfoView,
    "treatmentInfo":TreatmentInfo,
    "patientInfoView":PatientInfoView,
    "myroadView":MyroadView,
    "guideLine": GuideLine,
    "talkRound": TalkRound,
    "myPhone/:p": MyPhone,
    "": GuideLine,

    "404": NotFound,
    ":a": NotFound,
    ":a/:b": NotFound,
    ":a/:b/:c": NotFound,
    ":a/:b/:c/:d": NotFound
});

MinRouter.start();



