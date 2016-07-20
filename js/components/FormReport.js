/**
 * Created by Shirley on 16/7/12.
 */
'use strict';

var React = require('react');

var FormReport = React.createClass({
     /*
    render:
    */
    render: function() {
        return (
            <li className="ui-border-t">
                <div>
                    <h2><i className={this.props.icon}/>{this.props.title}</h2>
                </div>
                <div>
                </div>
            </li>)
    }
});

module.exports = FormReport;