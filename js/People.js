'use strict'

import React from 'react';
import TabBar from './components/TabBar';

let People = React.createClass({
    render() {
        return (
        	<div className="container">
                <div className="weui_tab">
                    <div className="weui_tab_bd">
                        <div className="weui_msg">
						    <div className="weui_icon_area"><i className="weui_icon_success weui_icon_msg"></i></div>
						    <div className="weui_text_area">
						        <h2 className="weui_msg_title">操作成功</h2>
						        <p className="weui_msg_desc">内容详情，可根据实际需要安排</p>
						    </div>
						    <div className="weui_opr_area">
						        <p className="weui_btn_area">
						            <a href="javascript:;" className="weui_btn weui_btn_primary">确定</a>
						            <a href="javascript:;" className="weui_btn weui_btn_default">取消</a>
						        </p>
						    </div>
						    <div className="weui_extra_area">
						        <a href="">查看详情</a>
						    </div>
						</div>
                    </div>
                    <TabBar index="2"/>
                </div>
            </div>
        ) 
    }
})

module.exports = People;