/**
 * Created by Shirley on 16/6/15.
 */
'use strict'

var React = require('react');
import Content from '../../components/content'
import FooterNav from '../../components/footer-nav'

var Mine = React.createClass({
    getInitialState:function()
    {},
     /*
    render:
    */    
    render:function(){
        return (
            <div>
                <Content>
                </Content>
                <FooterNav actived="mine"/>
            </div>)
    }
});

module.exports = Mine;