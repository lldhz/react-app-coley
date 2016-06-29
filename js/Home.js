'use strict'

import React from 'react';
import TabBar from './components/TabBar';

import ProductStore from './store/ProductStore'

let getData = function() {
    return ProductStore.getProducts();
}

let Home = React.createClass({
    getInitialState() {
        return {products: getData(), ajaxData: ''};
    },
    componentDidMount() {
        ProductStore.addListener(this.update);
    },
    update() {
        this.setState({products: getData()});
    },
    renderRow(row, i) {
        return <li key={i}>{row}</li>
    },
    addProduct() {
        let val = this.refs.pro.value;
        this.refs.pro.value = ''
        ProductStore.addProduct(val);
    },
    _changeHandler(e) {
        this.setState({input: e.value})
    },
    loadAjax() {
        $.getJSON('/ws/graph/query?page=1&rows=4&query={images(page:1,rows:4){image,type}}', data => {
            this.setState({ajaxData: JSON.stringify(data)})
        })
    },
    render() {
        let items = this.state.products.map(this.renderRow);
        console.log('render');
        return (
            <div className="container">
                <div className="weui_tab" style={{background: '#FFF'}}>
                    <div className="weui_tab_bd">
                        <div className="hd">
                            <h1 className="page_title" style={{margin: '0 15%', textAlign: 'center'}}>首页</h1>
                        </div>
                        <div style={{padding: '20px 0'}}>
                            <a href="javascript:;" onClick={this.addProduct} className="weui_btn weui_btn_plain_primary">Add Product</a>
                        </div>
                        <div className="weui_cells weui_cells_form">
                            <div className="weui_cell">
                                <div className="weui_cell_hd"><label className="weui_label">Name</label></div>
                                <div className="weui_cell_bd weui_cell_primary">
                                    <input className="weui_input" type="text" ref="pro" placeholder="Product name"/>
                                </div>
                            </div>

                            <ul style={{padding: '50px', borderTop: '1px solid red'}}>
                                {items}
                            </ul>
                        </div>

                        <div className="weui_cells weui_cells_form">

                            <a href="javascript:;" onClick={this.loadAjax} className="weui_btn weui_btn_plain_primary">Load Ajax</a>

                            <div className="weui_cell">
                                <div className="weui_cell_bd weui_cell_primary">
                                    <textarea className="weui_textarea" placeholder="请输入评论" rows="3" value={this.state.ajaxData}></textarea>
                                    <div className="weui_textarea_counter"><span>0</span>/200</div>
                                </div>
                            </div>
                        </div>

                        <p>
                            更多组件: <a href="https://github.com/weui/weui/" target="_blank">https://github.com/weui/weui/</a>
                        </p>
                    </div>
                    <TabBar index="1"/>
                </div>
            </div>
        )
    }
})

module.exports = Home;
