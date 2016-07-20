/**
 * Created by Shirley on 16/7/19.
 */
'use strict';

var React = require('react');
var ReactDom = require('react-dom');
require('../../api/date');

var MyPhone = React.createClass({
    /*
     Mixins:
     */
    /*
     getInitialState:
     */
    getInitialState: function () {
        var _phone = this.props.query[0];
        var _step = 0;
        if (_phone !== '1') {
            _step = 1;
        }
        else {
            _phone = undefined;
        }
        return {
            step: _step,
            phone: _phone,
            newPhone: '',
            currentValue: '',
            authCode: '',
            hadAuthCode: false,
            inputAuthCode: ''
        };
    },
    /*
     getDefaultProps:
     */
    getDefaultProps: function () {
        return null;
    },
    /*
     componentWillMount:
     */
    componentWillMount: function () {
        return null;
    },
    /*
     componentDidMount:
     */
    componentDidMount: function () {
        return null;
    },
    /*
     componentWillUnmount:
     */
    componentWillUnMount: function () {
        return null;
    },
    onDataInputChange: function (event) {
        this.setState({phone: event.target.value});
    },
    renderPhoneView: function () {
        var phoneSecret = this.state.phone === null || this.state.phone === undefined || this.state.phone === '1' ? '' : this.state.phone.toSecret(3, 6, '*');
        return (
            <div className='weui_cells'>
                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <label className="weui_label">已绑定</label>
                    </div>
                    <div className="weui_cell_bd  weui_cell_primary">
                        <input className="weui_input" type="text" value={phoneSecret} readOnly/>
                    </div>
                </div>
                <div className="weui_cell">
                    <button className='ui-btn-lg ui-btn-primary' onClick={this.onChangeBindButton}>更改绑定</button>
                </div>
            </div>
        )
    },

    onPhoneAuthCode: function (event) {
        this.setState({inputAuthCode: event.target.value});
    },

    renderPhoneChange: function () {
        var phoneSecret = this.state.phone === null || this.state.phone === undefined || this.state.phone === '1' ? '' : this.state.phone.toSecret(3, 6, '*');
        return (<div className='weui_cells'>
            <div className="weui_cell">
                <input className="weui_input" type="text" placeholder="请输入当前绑定的手机号码完成验证" readOnly/>
            </div>
            <div className="weui_cell">
                <input className="weui_input" type="text" placeholder={phoneSecret} onChange={this.onInputNewPhone}
                       value={this.state.newPhone}/>
            </div>
            <div className="weui_cell">
                <button className='ui-btn-lg ui-btn-primary' onClick={this.onAuthPhone}>验证手机</button>
            </div>
        </div>)
    },

    onInputNewPhone: function (event) {
        this.setState({newPhone: event.target.value})
    },

    getAuthCode: function () {
        this.setState({hadAuthCode: true});
    },

    renderAuthCode: function () {
        if (this.state.hadAuthCode) {
            return (<a className="weui_btn weui_btn_disabled weui_btn_default">获取验证码</a>)
        }
        else {
            return (<a className="weui_btn weui_btn_default" onClick={this.getAuthCode}>获取验证码</a>)
        }
    },
    renderNewPhone: function () {
        var phoneSecret = this.state.phone === null || this.state.phone === undefined || this.state.phone === '1' ? '' : this.state.phone.toSecret(3, 6, '*');
        var authCodeLabel = this.renderAuthCode();
        return (<div className='weui_cells'>
            <div className="weui_cell">
                <div className="weui_cell_hd weui_cell_primary">
                    <input className="weui_input" type="text" placeholder='请输入您的手机号码' value={this.state.newPhone}
                           onChange={this.onInputNewPhone}/>
                </div>
                <div className="weui_cell_bd">
                    {authCodeLabel}
                </div>
            </div>
            <div className="weui_cell">
                <input className="weui_input" type="text" placeholder='请输入您收到的验证码' onChange={this.onPhoneAuthCode}
                       value={this.state.inputAuthCode}/>
            </div>
            <div className="weui_cell">
                <button className='ui-btn-lg ui-btn-primary' onClick={this.onBindButton}>绑定</button>
            </div>
        </div>)
    },

    renderPhoneSuccess: function () {
        return (
            <div>
                <div className='mine-userinfo-row' style={{paddingTop:'40px'}}>
                    <i className='icon iconfont icon-bangdingchenggong' style={{color:'#3dd0dd',fontSize:'100px'}}/>
                </div>
                <div className='mine-userinfo-row '>
                    <label style={{fontSize:'20px'}}>绑定成功</label>
                </div>
            </div>)
    },

    onBindButton: function () {
        if (this.state.authCode !== this.state.inputAuthCode) {
            Alert("信息", "验证码错误,请重新输入!");
        }
        else {
            this.setState({step: 3});
        }
    },
    onChangeBindButton: function () {
        this.setState({step: 2});
    },

    renderStep: function () {
        var html = '';
        switch (this.state.step) {
            case 0:
                html = this.renderNewPhone();
                break;
            case 1:
                html = this.renderPhoneView();
                break;
            case 2:
                html = this.renderPhoneChange();
                break;
            case 3:
                html = this.renderPhoneSuccess();
                break;
            default:
                html = undefined;
                break;
        }
        return html;
    },

    onAuthPhone: function () {
        if (this.state.phone !== this.state.newPhone) {
            Alert("信息", "手机号码输入错误,请重新输入您绑定的手机号码!");
            this.setState({newPhone: ''});
        }
        else {
            this.setState({step: 0, newPhone: ''});
        }
    },
    /*
     render:
     */
    render: function () {
        var phoneHtml = this.renderStep();
        return (<div>
            {phoneHtml}
        </div>)
    }
});

module.exports = MyPhone;