/**
 * Created by Shirley on 16/7/6.
 */
'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var ChartReport = require('../../components/ChartReport');
var FormReport = require('../../components/FormReport');
var dataStore = require('../../store/DataStore');

var TreatmentTargetBar = React.createClass({
     /*
    Mixins:
    */
     /*
    getInitialState:
    */
    getInitialState: function()
    {
        return ({expanded:0,data:this.props.data[0]})
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
        this.setState({expanded:i,data:this.props.data[i]});
    },

    renderNavItem:function(item,i,icon,width){
        if(this.state.expanded === i)
        {
            return (<div className='weui_navbar_item mine-tab-item-on'
                         style={{width:width,float:'left',display:'inline-block'}} key={i}>
                <span><i className={icon}/>{item}</span>
            </div>);
        }else{
                    return (<div className='weui_navbar_item mine-tab-item'
                                 style={{width:width,float:'left',display:'inline-block'}}
                                 onClick={this.onClick.bind(null,i)}  key={i}>
                        <span><i className={icon}/>{item}</span>
                    </div>);
                }
    },
     /*
    render:
    */
    render: function() {
        var navWidth = (100/this.props.title.length).toFixed(0);
        var navList = this.props.title.map((item,i)=>{
            return this.renderNavItem(item,i,this.props.icon[i],navWidth+"%");
        });
        dataStore.setStore(this.state.data.data);
        return (<div className='weui_tab'>
            <div classNmae='weui_navbar' style={{width:'100%'}}>
                {navList}
            </div>
            <div className='weui_tab_bd'  style={{width:'100%'}}>
                <ChartReport />
            </div>
        </div>)
    }
});

module.exports = TreatmentTargetBar;