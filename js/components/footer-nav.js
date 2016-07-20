/**
 * Created by Shirley on 16/6/8.
 */
'use strict';

var React = require('react');
var IconTextButtonRectangle = require('./icon-text-rectangle');

var http = require('../http');

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
    componentWillMount: function ()
    {
        http.loadJSONFile("/data/navbar.json", data=> {
            this.setState({menu: data.MENU});
        });
    },
    onClick: function (name, url)
    {
        this.setState({actived: name});
        window.location.href = url;

    },
    /*
     render:
     */
    render: function() {
        //console.log(this.state.menu);
        var navbuttons = this.state.menu === undefined ? null : this.state.menu.map((item, index)=> {
            return (
                <IconTextButtonRectangle actived={this.state.actived} data={item} onClick={this.onClick} key={index}/>)
        });
        return (
            <div className="weui_tabbar">
                    {navbuttons}
            </div>
        )
    }
});

module.exports = FooterNav;
