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
                actived: "iconfont icon-yhxxh",
                noactived:"iconfont icon-yhxx2"
            }
        },
        {
            data:{
                name: "mechanism",
                text: "查一查",
                link: "#/mechanism",
                actived: "iconfont icon-cych",
                noactived:"iconfont icon-cyc"
            }
        },
        {
            data:{
                name: "service",
                text: "自助服务",
                link: "#/service",
                actived: "iconfont icon-dsfkfh",
                noactived:"iconfont icon-dsfkf"
            }
        },
        {
            data:{
                name: "mine",
                text: "我的",
                link: "#/mine",
                actived: "iconfont icon-wdh",
                noactived:"iconfont icon-wd"}
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