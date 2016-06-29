'use strict'

import React from 'react';
import TabBar from './components/TabBar';

let New = React.createClass({
	getInitialState() {
		return {showSheet: false}
	},
	toggleSheet() {
		this.setState({showSheet: !this.state.showSheet})
	},
	selectMenu(text) {
		this.toggleSheet();
		console.log(text)
	},
    render() {
    	// 
        return (
        	<div className="container">
                <div className="weui_tab">
                    <div className="weui_tab_bd">
                    	<a href="javascript:;" onClick={this.toggleSheet} className="weui_btn weui_btn_default">ActionSheet</a>
                        <div>
						    <div className="weui_mask_transition weui_fade_toggle" onClick={this.toggleSheet} style={{display: this.state.showSheet ? 'block' : 'none'}}></div>
						    <div className="weui_actionsheet weui_actionsheet_toggle" style={{display: this.state.showSheet ? 'block' : 'none'}}>
						        <div className="weui_actionsheet_menu">
						            <div className="weui_actionsheet_cell"><a href="/#/">跳到首页</a></div>
						            <div className="weui_actionsheet_cell"><a href="/#/mine">跳到我的</a></div>
						            <div className="weui_actionsheet_cell" onClick={this.selectMenu.bind(null, '33')}>示例菜单</div>
						            <div className="weui_actionsheet_cell" onClick={this.selectMenu.bind(null, '44')}>示例菜单</div>
						        </div>
						        <div className="weui_actionsheet_action">
						            <div className="weui_actionsheet_cell" id="actionsheet_cancel">取消</div>
						        </div>
						    </div>
						</div>
                    </div>
                    <TabBar index="3"/>
                </div>
            </div>
        ) 
    }
})

module.exports = New;