/**
 * Created by Shirley on 16/6/8.
 */
'use strict'

var React = require('react');

var IconTextRectangleButton = React.createClass({

    handleClick:function(ev)
    {
        this.props.onClick(ev.target.name);
        window.location.href = this.props.data.link;
    },
    /*
     render:
     */
    render: function() {
        return (
            <div className= "itrb-herder">
                <div name={this.props.data.name}
                     className={this.props.actived == this.props.data.name ?"itrb-cell itrb-color" : "itrb-cell"}
                     onClick={this.handleClick}>
                    <span><i className={this.props.actived == this.props.data.name ? this.props.data.actived:this.props.data.noactived}/></span><br/>
                    <span className="font-size">{this.props.data.text}</span>
                </div>
            </div>)
    }
});

module.exports = IconTextRectangleButton;