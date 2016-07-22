/**
 * Created by Shirley on 16/7/22.
 */
'use strict';

var React = require('react');
var Content = require('../../components/content');
var FooterNav = require('../../components/footer-nav');

var GuideLine = React.createClass({
     /*
    Mixins:
    */
     /*
    getInitialState:
    */
    getInitialState: function()
    {
        return {step:0,
        img:["http://img.haalthy.com/weixin/guideline/1.png",
            "http://img.haalthy.com/weixin/guideline/2.png",
            "http://img.haalthy.com/weixin/guideline/3.png",
            "http://img.haalthy.com/weixin/guideline/4.png",
            "http://img.haalthy.com/weixin/guideline/5.png",
            "http://img.haalthy.com/weixin/guideline/6.png"]};

    },
     /*
    getDefaultProps:
    */
    getDefaultProps: function()
    {
        return null;
    },
     /*
    componentWillMount:
    */
    componentWillMount: function()
    {
        return null;
    },
     /*
    componentDidMount:
    */
    componentDidMount: function()
    {
        return null;
    },
     /*
    componentWillUnmount:
    */
    componentWillUnMount: function()
    {
        return null;
    },
    onClick:function(){
        if(this.state.step<5)
        {
            //console.log(this.state.step);
            var _step = this.state.step+1;
            this.setState({step:_step});

        }
    },

    renderImg:function()
    {

        //
        return (<div onClick={this.onClick}>
            <img src={this.state.img[this.state.step]} style={{width:window.screen.width}} />
        </div>);
    },
     /*
    render:
    */
    render: function() {
        var imgHtml = this.renderImg();
        return (
            <div className='weui_tab'>
                <Content>
                    {imgHtml}
                </Content>
                <FooterNav actived="guideline"/>
            </div>)
    }
});

module.exports = GuideLine;