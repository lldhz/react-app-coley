'use strict'

import React from 'react';
import TabBar from './components/TabBar';

let Home = React.createClass({
    render() {
        return (
        	<div className="container">
                <div className="weui_tab">
                    <div className="weui_tab_bd">
                        <div className="weui_panel weui_panel_access">
                            <div className="weui_panel_hd">图文组合列表</div>
                            <div className="weui_panel_bd">
                                <a href="javascript:void(0);" className="weui_media_box weui_media_appmsg">
                                    <div className="weui_media_hd">
                                        <img className="weui_media_appmsg_thumb" src="" alt=""/>
                                    </div>
                                    <div className="weui_media_bd">
                                        <h4 className="weui_media_title">标题一</h4>
                                        <p className="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                                    </div>
                                </a>
                                <a href="javascript:void(0);" className="weui_media_box weui_media_appmsg">
                                    <div className="weui_media_hd">
                                        <img className="weui_media_appmsg_thumb" src="" alt=""/>
                                    </div>
                                    <div className="weui_media_bd">
                                        <h4 className="weui_media_title">标题二</h4>
                                        <p className="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                                    </div>
                                </a>
                            </div>
                            <a className="weui_panel_ft" href="javascript:void(0);">查看更多</a>
                        </div>
                    </div>
                    <TabBar index="4"/>
                </div>
            </div>
        )
    }
})

module.exports = Home;
