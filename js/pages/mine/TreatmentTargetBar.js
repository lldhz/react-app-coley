/**
 * Created by Shirley on 16/7/6.
 */
'use strict'

var React = require('react');
var ReactD3 = require('react-d3-components');
var d3 = require('d3');
var LineChart = ReactD3.LineChart;

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
        var _data = [
            {
                data: {
                    label: 'CEA',
                    values: [
                        {x: new Date(2015, 2, 5), y: 1},
                        {x: new Date(2015, 2, 6), y: 2},
                        {x: new Date(2015, 2, 7), y: 0},
                        {x: new Date(2015, 2, 8), y: 3},
                        {x: new Date(2015, 2, 9), y: 2},
                        {x: new Date(2015, 2, 10), y: 3},
                        {x: new Date(2015, 2, 11), y: 4},
                        {x: new Date(2015, 2, 12), y: 4},
                        {x: new Date(2015, 2, 13), y: 1},
                        {x: new Date(2015, 2, 14), y: 5},
                        {x: new Date(2015, 2, 15), y: 0},
                        {x: new Date(2015, 2, 16), y: 1},
                        {x: new Date(2015, 2, 16), y: 1},
                        {x: new Date(2015, 2, 18), y: 4},
                        {x: new Date(2015, 2, 19), y: 4},
                        {x: new Date(2015, 2, 20), y: 5},
                        {x: new Date(2015, 2, 21), y: 5},
                        {x: new Date(2015, 2, 22), y: 5},
                        {x: new Date(2015, 2, 23), y: 1},
                        {x: new Date(2015, 2, 24), y: 0},
                        {x: new Date(2015, 2, 25), y: 1},
                        {x: new Date(2015, 2, 26), y: 1}
                    ]
                },
                xMinDate:new Date(2015, 2, 5),
                xMaxDate:new Date(2015, 2,26)
            },
            {
                data: {
                    label: 'CY211',
                    values: [
                        {x: new Date(2015, 2, 5), y: 1},
                        {x: new Date(2015, 2, 6), y: 2},
                        {x: new Date(2015, 2, 7), y: 0},
                        {x: new Date(2015, 2, 8), y: 3},
                        {x: new Date(2015, 2, 9), y: 2},
                        {x: new Date(2015, 2, 10), y: 3},
                        {x: new Date(2015, 2, 11), y: 4},
                        {x: new Date(2015, 2, 12), y: 4},
                        {x: new Date(2015, 2, 13), y: 1},
                        {x: new Date(2015, 2, 14), y: 5},
                        {x: new Date(2015, 2, 15), y: 0},
                        {x: new Date(2015, 2, 16), y: 1},
                        {x: new Date(2015, 2, 16), y: 1},
                        {x: new Date(2015, 2, 18), y: 4},
                        {x: new Date(2015, 2, 19), y: 4},
                        {x: new Date(2015, 2, 20), y: 5},
                        {x: new Date(2015, 2, 21), y: 5},
                        {x: new Date(2015, 2, 22), y: 5},
                        {x: new Date(2015, 2, 23), y: 1},
                        {x: new Date(2015, 2, 24), y: 0},
                        {x: new Date(2015, 2, 25), y: 1},
                        {x: new Date(2015, 2, 26), y: 1}
                    ]
                },
                xMinDate:new Date(2015, 2, 5),
                xMaxDate:new Date(2015, 2,26)
            },
            {
                data: {
                    label: 'CA153',
                    values: [
                        {x: new Date(2015, 2, 5), y: 1},
                        {x: new Date(2015, 2, 6), y: 2},
                        {x: new Date(2015, 2, 7), y: 0},
                        {x: new Date(2015, 2, 8), y: 3},
                        {x: new Date(2015, 2, 9), y: 2},
                        {x: new Date(2015, 2, 10), y: 3},
                        {x: new Date(2015, 2, 11), y: 4},
                        {x: new Date(2015, 2, 12), y: 4},
                        {x: new Date(2015, 2, 13), y: 1},
                        {x: new Date(2015, 2, 14), y: 5},
                        {x: new Date(2015, 2, 15), y: 0},
                        {x: new Date(2015, 2, 16), y: 1},
                        {x: new Date(2015, 2, 16), y: 1},
                        {x: new Date(2015, 2, 18), y: 4},
                        {x: new Date(2015, 2, 19), y: 4},
                        {x: new Date(2015, 2, 20), y: 5},
                        {x: new Date(2015, 2, 21), y: 5},
                        {x: new Date(2015, 2, 22), y: 5},
                        {x: new Date(2015, 2, 23), y: 1},
                        {x: new Date(2015, 2, 24), y: 0},
                        {x: new Date(2015, 2, 25), y: 1},
                        {x: new Date(2015, 2, 26), y: 1}
                    ]
                },
                xMinDate:new Date(2015, 2, 5),
                xMaxDate:new Date(2015, 2,26)
            }
        ];
        var expandedItem=0;
        return ({
            data: _data,expanded:expandedItem
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

    },
     /*
    componentWillUnmount:
    */
    componentWillUnMount: function()
    {
        return null;
    },
    onClick:function(i)
    {
        this.setState({expanded:i});

    },
    renderItem:function(item,i){
        if(this.state.expanded === i)
        {
            var xScale = d3.scaleTime().domain([item.xMinDate, item.xMaxDate]).range([0, screen.width * 0.8]);
            return (
                <li className="ui-border-t" key={i}>
                    <h4>{item.data.label}</h4>
                    <LineChart
                        data={item.data}
                        width={screen.width*0.8}
                        height={220}
                        margin={{top: 20, bottom: 50, left: screen.width*0.1, right: screen.width*0.1}}
                        xScale={xScale}
                        xAxis={{tickValues: xScale.ticks(d3.timeDay, (item.xMaxDate-item.xMinDate)/5), tickFormat: d3.timeParse("%m-%d")}}
                        tooltipHtml={this.tooltipLine}
                        />
                </li>
            );
        }
        else
        {
            return (
                <li className="ui-border-t" key={i} onClick={this.onClick.bind(null,i)}>
                    <h4>{item.data.label}</h4>
                </li>
            );
        }
    },
    renderItemList:function(){
        return this.state.data.map((item,i)=>{
            return this.renderItem(item,i);
        })
    },
    tooltipLine:function(label, data) {
        return label + "  : " + data.y;
    },
     /*
    render:
    */
    render: function() {
        var itemlist = this.renderItemList();
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
