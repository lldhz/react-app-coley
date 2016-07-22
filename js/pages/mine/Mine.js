/**
 * Created by Shirley on 16/6/15.
 */
'use strict';
var React = require('react');
var Content = require('../../components/content');
var FooterNav = require('../../components/footer-nav');

var localStore = require('../../store/local-store');
var configStore = require("../../store/ConfigStore");
var UserInfo= require('../../components/Userinfo');

var http = require('../../http');
var configApi = require("../../api/mine/Mine-api");
require('../../api/date');

var Mine = React.createClass({
    getInitialState:function()
    {
        return {
            nickname: localStore.getItem('nickname'),
            headimgurl: localStore.getItem('headimgurl'),
            city: localStore.getItem('city'),
            country: localStore.getItem('country'),
            openid: localStore.getItem('openid'),
            phone: localStore.getItem('phone'),
        }
    },
    componentWillMount: function () {
        configStore.addListener(this.onConfigChange);
    },
    componentDidMount: function () {
        configApi.getConfigFile();
    },
    componentDidUnMount: function () {
        configStore.removeListener(this.onConfigChange);
    },

    onConfigChange: function () {
        var _functions = configStore.getData("functions");
        this.setState({functions: _functions});
    },
    renderFunctionList:function(){
        var List = this.state.functions === undefined ? null : this.state.functions.map((func, i)=> {
            var subTitle = undefined;
            var subLink = '';
            if (func.title === '我的手机') {
                subTitle = this.state.phone === null || this.state.phone === undefined ? '未绑定' : this.state.phone.toSecret(3, 6, '*');
                subLink = this.state.phone === null || this.state.phone === undefined ? func.link + '/1' : func.link + '/' + this.state.phone;
            }
            return (
                <div key={i}>
                    <a className="weui_cell" href={subLink === '' ? func.link :subLink}>
                        <div className="weui_cell_bd weui_cell_primary bigger">
                            <i className={func.icon}></i><span
                            className="function-text-color">{"   " + func.title}</span>
                        </div>
                        <div className='weui_cell_ft standard'>
                            {subTitle}
                        </div>
                    </a>
                </div>
            );
        });
        return (
            <div className="weui_cells weui_cells_access">
                {List}
            </div>
        );
    },
     /*
    render:
    */    
    render:function(){
        var data={
            nickname:this.state.nickname,
            headimgurl:this.state.headimgurl,
            city:this.state.city,
            country:this.state.country,
            openid:this.state.openid
        };
        var Functions=this.renderFunctionList();
        return (
            <div className='weui_tab'>
                <Content>
                    <UserInfo data={data}/>
                    {Functions}
                </Content>
                <FooterNav actived="mine"/>
            </div>)
    }
});

module.exports = Mine;