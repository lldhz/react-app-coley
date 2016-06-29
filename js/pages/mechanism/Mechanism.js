/**
 * Created by Shirley on 16/6/15.
 */
'use strict'

import React,{PropTypes,Component} from 'react'
import Content from '../../components/content'
import FooterNav from '../../components/footer-nav'

var Mechanism = React.createClass({

     /*
    render:
    */    
    render: function(){
        return (
            <div>
                <Content>
                </Content>
                <FooterNav actived="mechanism"/>
            </div>)
    }
});

module.exports = Mechanism;