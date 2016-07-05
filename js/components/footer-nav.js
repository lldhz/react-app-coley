/**
 * Created by Shirley on 16/6/8.
 */
'use strict'

var React = require('react');
var IconTextButtonRectangle = require('./icon-text-rectangle');

const navbuttonData =
{
    data:[
        {
            data:{
                name: "myroad",
                text: "奇迹之旅",
                link: "#/myroad",
                actived: "iconfont icon-yhxxh icon-size",
                noactived:"iconfont icon-yhxx2 icon-size"
            }
        },
        {
            data:{
                name: "mechanism",
                text: "查一查",
                link: "#/mechanism",
                actived: "iconfont icon-cych icon-size",
                noactived:"iconfont icon-cyc icon-size"
            }
        },
        {
            data:{
                name: "service",
                text: "自助服务",
                link: "#/service",
                actived: "iconfont icon-dsfkfh icon-size",
                noactived:"iconfont icon-dsfkf icon-size"
            }
        },
        {
            data:{
                name: "mine",
                text: "我的",
                link: "#/mine",
                actived: "iconfont icon-wdh icon-size",
                noactived:"iconfont icon-wd icon-size"}
        }]
};

var FooterNav = React.createClass({
    /*
     Mixins:
     */
    /*
     getInitialState:
     */
    getInitialState: function()
    {
        return {actived:this.props.actived};
    },
    onClick:function(name)
    {
        //console.log("name:"+name.target.name);
        this.setState({actived:name});
    },
    renderNavButton(button,index)
    {
        return( <IconTextButtonRectangle actived={this.state.actived} data={button.data} onClick={this.onClick} key={index} />)
    },
    /*
     render:
     */
    render: function() {
        var navbuttons = navbuttonData.data.map(this.renderNavButton);
        return (
            <div className="itrb-footbar">
                    {navbuttons}
            </div>
        )
    }
});

module.exports = FooterNav;