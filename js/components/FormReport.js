/**
 * Created by Shirley on 16/7/12.
 */
'use strict'

var React = require('react');

var FormReport = React.createClass({
    onChange:function(){

    },
     /*
    render:
    */
    render: function() {
        return (
            <li className="ui-border-t">
                <h4>{this.props.title}</h4>
            </li>)
    }
});

module.exports = FormReport;