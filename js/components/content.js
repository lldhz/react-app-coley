/**
 * Created by Shirley on 16/6/6.
 */
'use strict'

//var React = require('react');
import React,{PropTypes,Component} from 'react'

export default class Content extends Component
{
     /*
    Mixins:
    */
     /*

     /*
    render:
    */
    render() {
        return (
            <div className="content-box" {...this.props}>
                {this.props.children}
            </div>
        )
    }
};

module.exports = Content;