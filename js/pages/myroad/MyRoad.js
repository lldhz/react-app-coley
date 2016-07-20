/**
 * Created by Shirley on 16/6/15.
 */
'use strict';
var React = require('react');
var Content = require('../../components/content');
var FooterNav = require('../../components/footer-nav');


export default class MyRoad extends Component {
     /*
    render:
    */    
    render(
    ){
        return (
            <div className='weui_tab'>
                <Content>
                </Content>
                <FooterNav actived="myroad"/>
            </div>)
    }
};

module.exports = MyRoad;