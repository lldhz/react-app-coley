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
                    title:'我的消息',
                    link:'#',
                    icon:'iconfont icon-message'
                },
                    {
                    title:'患者信息',
                    link:'#/patientInfoView',
                    icon:'iconfont icon-nan'
                },
                    {
                        title:'病理信息',
                        link:'#/mechanismInfoView',
                        icon:'iconfont icon-zhenliaojilu'
                    }
                ]
        }
    },
    renderFunctionList:function(){
        var List=this.state.functions.map((func,i)=>{
            return (
                <li>
                    <a className="weui_cell" href={func.link} key={i}>
                        <div className="weui_cell_bd weui_cell_primary">
                            <i className={func.icon}></i><span>{"   "+func.title}</span>
                        </div>
                        <div className='weui_cell_ft'>
                        </div>
                    </a>
                </li>
            );
        });
        return (
            <ul className="weui_cells weui_cells_access">
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