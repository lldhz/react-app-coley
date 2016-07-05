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
        return (
             <div>
                 <TreatmentTargetBar />
             </div>
        )
    }
});

module.exports = MyroadView;