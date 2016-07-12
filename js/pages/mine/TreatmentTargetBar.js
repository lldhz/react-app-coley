/**
 * Created by Shirley on 16/7/6.
 */
'use strict'

var React = require('react');
var ReactDom = require('react-dom');
//var ReactD3 = require('react-d3-components');
//var d3 = require('d3');
//var LineChart = require('react-chartjs').Line;
var Chart = require('chart.js');
//var LineChart = ReactD3.LineChart;

var TreatmentTargetBar = React.createClass({
     /*
    Mixins:
    */
     /*
    getInitialState:
    */
    getInitialState: function()
    {
        //var _data = this.props.target.data;
        var expandedItem=0;
        return ({
           expanded:expandedItem,LineChart:{}
        })
    },
     /*
    getDefaultProps:
    */
    getDefaultProps: function()
    {
        return null;
    },
     /*
    componentWillMount:
    */
    componentWillMount: function()
    {
        return null;
    },
     /*
    componentDidMount:
    */
    componentDidMount: function()
    {
        this.setState({LineChart:this.renderLineChart(this.state.expanded)});
    },
    renderLineChart:function(i)
    {
        this.props.data.map((item,i)=>{
            var el=ReactDom.findDOMNode(this.refs["canvas"+i]);
            console.log(el);
            var ctx= el.getContext('2d');
            console.log(ctx);
            //var _data = item.data;
            //console.log(_data);
            return new Chart(ctx, item.data);
        });
    },
     /*
    componentWillUnmount:
    */
    componentWillUnMount: function()
    {
        //this.state.LineChart.destroy();
        return null;
    },
    onClick:function(i)
    {
        //this.state.LineChart.destroy();
        this.setState({expanded:i});
        //<LineChart
        //    data={item.data}
        //    width={screen.width*0.8}
        //    height={220}
        //    margin={{top: 20, bottom: 50, left: screen.width*0.1, right: screen.width*0.1}}
        //    xScale={xScale}
        //    xAxis={{tickValues: xScale.ticks(d3.timeDay, (item.xMaxDate-item.xMinDate)/5), tickFormat: d3.timeParse("%m-%d")}}
        //    tooltipHtml={this.tooltipLine}
        //    />

    },
    renderItem:function(item,i){

            //var xScale = d3.scaleTime().domain([item.xMinDate, item.xMaxDate]).range([0, screen.width * 0.8]);
            return (
                <li className="ui-border-t" key={i} onClick={this.onClick.bind(null,i)}>
                    <h4>{item.title}</h4>
                    <canvas ref={"canvas"+i} width={screen.width*0.8} height="250" style={this.state.expanded === i?{display:"block"}:{display:"none"}}/>
                </li>
            );

    },
    renderItemList:function(){
        return this.props.map((item,i)=>{
            return this.renderItem(item,i);
        })
    },
     /*
    render:
    */
    render: function() {
        var itemlist = this.props.data.map((item,i)=>{
            return this.renderItem(item,i);
        });
        return (
            <div>
                <section className="ui-panel ui-panel-pure ui-border-t">
                    <ul class="ui-list ui-list-pure ui-border-tb">
                        {itemlist}
                    </ul>
                </section>
            </div>)
    }
});

module.exports = TreatmentTargetBar;