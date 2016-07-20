/**
 * Created by Shirley on 16/6/15.
 */
'use strict';
var React = require('react');
var Content = require('../../components/content');
var FooterNav = require('../../components/footer-nav');


var Service = React.createClass({

     /*
    render:
      */
    render: function () {
        return (
            <div className='weui_tab'>
                <Content>
                </Content>
                <FooterNav actived="service"/>
            </div>)
    }
});

module.exports = Service;