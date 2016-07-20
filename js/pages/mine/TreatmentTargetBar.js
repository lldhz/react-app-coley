/**
 * Created by Shirley on 16/7/6.
 */
'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var ChartReport = require('../../components/ChartReport');
var FormReport = require('../../components/FormReport');

var TreatmentTargetBar = React.createClass({
     /*
    Mixins:
    */
     /*
    getInitialState:
    */
    getInitialState: function()
    {
        return ({expanded:0})
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

    onClick:function(i)
    {
        this.setState({expanded:i});
    },
    renderItem:function(item,i){
        if(this.state.expanded === i){
            return (
                <div key={i}>
                    <ChartReport icon={item.icon} title={item.title} data={item.data}/>
                </div>)
        }
        else {
            return (
                <div key={i} onClick={this.onClick.bind(null,i)}>
                    <FormReport icon={item.icon} title={item.title}/>
                </div>)
        }

    },

     /*
    render:
    */
    render: function() {
        var itemList = this.props.data.map((item,i)=>{
            return this.renderItem(item,i);
        });

        return (
            <div>
                <section className="ui-panel ui-panel-pure ui-border-t">
                    <ul class="ui-list ui-list-pure ui-border-tb">
                        {itemList}
                    </ul>
                </section>
            </div>)
    }
});

module.exports = TreatmentTargetBar;