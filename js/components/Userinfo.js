'use strict';

var React = require('react');
var Userinfo = React.createClass({
    /*
     Mixins:
     */
    /*
     getInitialState:
     */
    getInitialState: function()
    {
        return {
            nickname:this.props.data.nickname,
            headimgurl:this.props.data.headimgurl,
            country:this.props.data.country ===null?'':this.props.data.country,
            city:this.props.data.city===null?'':this.props.data.city
        };
    },
    /*
     render:
     */
    render: function() {
    	return (
            <ul className='mine-basic mine-user-info-back custom-text-align-center'>
                <li className='mine-userinfo-row'>
                    <div><img className='mine-user-info-back' src={this.state.headimgurl}/></div>
                </li>
                <li className='mine-userinfo-row biggest'>
                    <span>{this.state.nickname}</span>
                </li>
                <li className='mine-userinfo-row standard'>
                    <span><i className="iconfont icon-dizhi"/>{" " + this.state.country + " " + this.state.city}</span>
                </li>
            </ul>
        )
    }
});

module.exports = Userinfo;