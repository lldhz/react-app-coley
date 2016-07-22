/**
 * Created by Shirley on 16/7/12.
 */
'use strict';

var React = require('react');
var Chart = require('chart.js');
var ReactDom = require('react-dom');
var dataStore = require('../store/DataStore');

var ChartReport = React.createClass({
     /*
    Mixins:
    */
     /*
    getInitialState:
    */
    getInitialState: function()
    {
        return {Chart:{},ctx:{}};
    },
    componentWillMount:function(){
        dataStore.addListener(this.onUpdateChart);
    },
     /*
    componentDidMount:
    */
    componentDidMount: function()
    {
        var el=ReactDom.findDOMNode(this.refs.canvas);

        this.state.ctx= el.getContext('2d');

        this.setState({Chart:new Chart(this.state.ctx, dataStore.getStore())});
    },
    /*
     componentWillUnmount:
     */
    componentDidUnMount: function()
    {
        dataStore.removeListener(this.onUpdateChart);
        this.state.Chart.destroy();
    },

    onUpdateChart:function(){
        this.state.Chart.destroy();

        this.state.Chart = new Chart(this.state.ctx, dataStore.getStore());

    },

    render: function() {
        return (
                <div>
                    <canvas ref="canvas" width={screen.width*0.8} height="250"/>
                </div>)
    }
});

module.exports = ChartReport;