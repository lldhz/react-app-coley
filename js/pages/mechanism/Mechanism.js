'use strict'

var React = require('react');
var Mechanism = React.createClass({
    /*
     Mixins:
     */
    /*
     getInitialState:
     */
    getInitialState: function()
    {
        return {};
    },
	componentWillMount:function(){
	},
	componentDidMount:function(){
	},
 	componentWillUnMount:function(){
 	},
 	componentDidUnMount:function(){
 	},
    /*
     render:
     */
    render: function() {
    	return (
            <div>
                <Content>
                </Content>
                <FooterNav actived="mechanism"/>
            </div>
        )
    }
});

module.exports = Mechanism;