/**
 * Created by Shirley on 16/7/6.
 */
'use strict';

var React = require('react');
var TreatmentInfoBar = require('./TreatmentInfos');
var TreatmentTargetBar = require('./TreatmentTargetBar');

var MyroadView = React.createClass({
     /*
    Mixins:
    */
     /*
    getInitialState:
    */
    getInitialState: function()
    {
        var _targetData = [];
        var _color = ["rgba(61,208,221,0.38)", "rgba(61,208,221,0.38)", "rgba(75,192,255,0.38)", "rgba(255,92,55,0.38)"];
        var _title = ["CEA", "CA153", "CY211", "NSE"];
        var _icon = ['iconfont icon-jianchabaogao2',
            'iconfont icon-jianchabaogao2',
            'iconfont icon-jianchabaogao2',
            'iconfont icon-jianchabaogao2'];

        for (var i = 0; i < 4; i++) {
            var _data =
            {
                title: _title[i],
                icon: _icon[i],
                data: {
                    type: 'line',
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                            {
                                label: _title[i],
                                fill: true,
                                lineTension: 0.1,
                                backgroundColor: _color[i],
                                borderColor: _color[i],
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'bevel',
                                pointBorderColor: "rgba(75,192,192,1)",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 1,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: [65 - i * 5, 59 - i * 17, 80 - i * 10, 81 - i * 23, 56 + i * 3, 55 - i * 8, 40 + i],
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                stacked: true
                            }]
                        }
                    },
                }
            };
            _targetData.push(_data);
        }
        return ({targetData: _targetData});
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
        return null;
    },
     /*
    componentWillUnmount:
    */
    componentWillUnMount: function()
    {
        return null;
    },
     /*
    render:
    */
    render: function() {

        console.log(this.state.targetData);
        return (
             <div>
                 <TreatmentTargetBar data={this.state.targetData}/>
             </div>
        )
    }
});

module.exports = MyroadView;