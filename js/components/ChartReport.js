/**
 * Created by Shirley on 16/7/12.
 */
'use strict'

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
                <h4>{this.props.title}</h4>
                <canvas ref="canvas" width={screen.width*0.8} height="250"/>
            </li>)
    }
});

module.exports = ChartReport;