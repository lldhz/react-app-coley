/**
 * Created by Shirley on 16/6/15.
 */
'use strict'

var React = require('react');
import Content from '../../components/content'
import FooterNav from '../../components/footer-nav'
var localStore = require('../../store/local-store');
var UserInfo= require('../../components/Userinfo');
var Mine = React.createClass({
    getInitialState:function()
    {
        return {
            nickname: localStore.getItem('nickname'),
            headimgurl: localStore.getItem('headimgurl'),
            city: localStore.getItem('city'),
            country: localStore.getItem('country'),
            openid: localStore.getItem('openid'),
            functions:
                [{
                    title:'患者信息',
                    link:'#/patientInfo',
                    icon:'iconfont icon-nan'
                },
                    {
                        title:'病理信息',
                        link:'#/mechanismInfo',
                        icon:'iconfont icon-zhenliaojilu'
                    }
                ]
        }
    },
    onClickItem:function(i){
        console.log(i);
        var func = this.state.functions[i];
        console.log(func);
        window.location.href = func.link;
    },
    renderFunctionList:function(){
        var List=this.state.functions.map((func,i)=>{
            return (
                <li key={i} onClick={this.onClickItem.bind(null,i)}>
                    <i className={func.icon}></i><span>{func.title}</span><i className='iconfont icon-right'>&#xe613;</i>
                </li>
            );
        });
        return (
            <ul className='mine-functions mine-font-middle'>
                {List}
            </ul>
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
            <div>
                <Content>
                    <UserInfo data={data}/>
                    {Functions}
                </Content>
                <FooterNav actived="mine"/>
            </div>)
    }
});

module.exports = Mine;