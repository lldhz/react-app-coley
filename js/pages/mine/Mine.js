/**
 * Created by Shirley on 16/6/15.
 */
'use strict'

import React,{PropTypes,Component} from 'react'
import Content from '../../components/content'
import FooterNav from '../../components/footer-nav'

export default class Mine extends Component {

     /*
    render:
    */    
    render(
    ){
        return (
            <div>
                <Content>
                </Content>
                <FooterNav actived="mine"/>
            </div>)
    }
};

module.exports = Mine;