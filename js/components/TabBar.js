'use strict'

import React from 'react';

let TabBar = React.createClass({
    render() {
    	let {index} = this.props;
    	let active = ["", "", "", "", ""]
    	active[index] = "weui_bar_item_on";
        return (
        	<div className="weui_tabbar tar-bar">
                <a href="/#/" className={`weui_tabbar_item ${active[1]}`}>
                    <div className="weui_tabbar_icon">
                        <i className="iconfont icon-yhxxh"/>
                    </div>
                    <p className="weui_tabbar_label">奇迹之路</p>
                </a>
                <a href="/#/people" className={`weui_tabbar_item ${active[2]}`}>
                    <div className="weui_tabbar_icon">
                        <i className="iconfont icon-cych"/>
                    </div>
                    <p className="weui_tabbar_label">查一查</p>
                </a>
                <a href="/#/new" className={`weui_tabbar_item ${active[3]}`}>
                    <div className="weui_tabbar_icon">
                        <i className="iconfont icon-dsfkfh"/>
                    </div>
                    <p className="weui_tabbar_label">自助服务</p>
                </a>
                <a href="/#/mine" className={`weui_tabbar_item ${active[4]}`}>
                    <div className="weui_tabbar_icon">
                        <i className="iconfont icon-wdh"/>
                    </div>
                    <p className="weui_tabbar_label">我的</p>
                </a>
            </div>
        ) 
    }
})

module.exports = TabBar;