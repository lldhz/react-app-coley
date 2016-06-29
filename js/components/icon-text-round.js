/**
 * Created by Shirley on 16/6/8.
 */
'use strict'

var React = require('react');

var IconTextRoundButton = React.createClass({
    getInitialState:function()
    {
        return {checked:this.props.checked};
    },

    handleClick:function(index)
    {
       var isChecked = !this.state.checked;
       this.setState({checked:isChecked});
       this.props.onClick(this.props.name);
    },
     /*
    render:
    */
    render: function() {
        return (
            <div className= "grid">
                <div className={this.state.checked ? this.props.grid + " grid-border" : this.props.grid}
                     onClick={this.handleClick}>
                    <span><i className={this.props.icon}/></span>
                    <span className="font-size">{this.props.text}</span>
                </div>
            </div>)
    }
});

module.exports = IconTextRoundButton;