'use strict'

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
            <div className='mine-userinfo'>
                <div className='mine-userinfo-row'>
                    <img className='mine-headimg' src={this.state.headimgurl}/>
                </div>
                <div className='mine-userinfo-row mine-font-bigger'>
                    <span>{this.state.nickname}</span>
                </div>
                <div className='mine-userinfo-row mine-font-middle'>
                    <span><i className="iconfont">&#xe614;</i>{" "+this.state.country+" "+this.state.city}</span>
                </div>
            </div>
        )
    }
});

module.exports = Userinfo;