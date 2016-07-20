/**
 * Created by Shirley on 16/7/13.
 */
'use strict';

var React = require('react');
var Content = require('../../components/content');
var FooterNav = require('../../components/footer-nav');

var TalkRound = React.createClass({
    /*
     Mixins:
     */
    /*
     getInitialState:
     */
    getInitialState: function () {
        return null;
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
    /*
     render:
     */
    render: function () {
        return (
            <div className='weui_tab'>
                <Content>
                </Content>
                <FooterNav actived="talkround"/>
            </div>)
    }
});

module.exports = TalkRound;