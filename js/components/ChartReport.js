/**
 * Created by Shirley on 16/7/12.
 */
'use strict';

var React = require('react');
var Chart = require('chart.js');
var ReactDom = require('react-dom');

var ChartReport = React.createClass({
     /*
    Mixins:
    */
     /*
    getInitialState:
    */
    getInitialState: function()
    {
        return {Chart:{}};
    },
     /*
    componentDidMount:
    */
    componentDidMount: function()
    {
        var el=ReactDom.findDOMNode(this.refs.canvas);

        var ctx= el.getContext('2d');

        this.setState({Chart:new Chart(ctx, this.props.data)});
    },
    /*
     componentWillUnmount:
     */
    componentDidUnMount: function()
    {
        this.state.Chart.destroy();
    },
     /*
    render:
    */
    render: function() {
        return (
            <li className="ui-border-t">
                <div>
                    <canvas ref="canvas" width={screen.width*0.8} height="250"/>
                </div>
                <div className="mine-active-border">
                    <h2><i className={this.props.icon}/>{this.props.title}</h2>
                </div>
            </li>)
    }
});

module.exports = ChartReport;