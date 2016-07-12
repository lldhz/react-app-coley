/**
 * Created by Shirley on 16/7/6.
 */
'use strict'

var React = require('react');
var TreatmentInfoBar = require('./TreatmentInfoBar');
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
        return null;
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
        var targetData=[
            {
            title:"CEA",
            data:{
                type: 'line',
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                        {
                            label: "My First dataset",
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: "rgba(61,208,221,0.38)",
                            borderColor: "rgba(61,208,221,0.38)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 1,
                            pointRadius: 1,
                            pointHitRadius: 5,
                            data: [65, 59, 80, 81, 56, 55, 40],
                        }
                    ]
                },
                options: Chart.defaults.line
            }},
            {
            title:"CY211",
            data:{
                type: 'line',
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                        {
                            label: "My First dataset",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [65, 59, 80, 81, 56, 55, 40],
                        }
                    ]
                },
                options: Chart.defaults.line
            }},
            {title:"CA153",
            data: {
                type: 'line',
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                        {
                            label: "My First dataset",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [65, 59, 80, 81, 56, 55, 40],
                        }
                    ]
                },
                options: Chart.defaults.line
            }}
        ];
        return (
             <div>
                 <TreatmentTargetBar data={targetData}/>
             </div>
        )
    }
});

module.exports = MyroadView;