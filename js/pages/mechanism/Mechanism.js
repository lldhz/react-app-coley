'use strict';

var React = require('react');
var Content=require('../../components/content');
var FooterNav =  require( '../../components/footer-nav');
var localStore = require('../../store/local-store');
var SearchBar = require('./MechanismSearch');
var Mechanism = React.createClass({
    /*
     Mixins:
     */
    /*
     getInitialState:
     */
    getInitialState: function()
    {
        return {keyword: ""};
    },
	componentWillMount:function(){
	},
	componentDidMount:function(){
	},
 	componentWillUnMount:function(){
 	},
 	componentDidUnMount:function(){
 	},
    onClickSearchBar: function (keyword) {

        //this.setState({keyword:keyword});
        var keylist = keyword.split(' ').join('+');
        console.log(keylist);
    },
    /*
     render:
     */
    render: function() {
    	return (
            <div className='weui_tab'>
                <Content>
                    <SearchBar onClick={this.onClickSearchBar}/>

                    <div>
                    </div>
                </Content>
                <FooterNav actived="mechanism"/>
            </div>
        )
    }
});

module.exports = Mechanism;