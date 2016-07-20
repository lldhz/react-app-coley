/**
 * Created by Shirley on 16/6/8.
 */
'use strict';

var React = require('react');

var IconTextRectangleButton = React.createClass({

    handleClick: function ()
    {
        //if(ev.target.name !== this.props.actived)
        //{

        this.props.onClick(this.props.data.name, this.props.data.link);
        //window.location.href = this.props.data.link;
        //}
    },
    /*
     render:
     */
    render: function() {
        return (
            <div name={this.props.data.name}
                 className={this.props.actived === this.props.data.name ?"weui_tabbar_item itrb-herder itrb-color" : "weui_tabbar_item itrb-herder"}
                 onClick={this.handleClick}>
                <div className="weui_tabbar_icon">
                    <i className={this.props.actived == this.props.data.name ? this.props.data.actived:this.props.data.noactived}/>
                </div>
                <span className="weui_tabbar_label">{this.props.data.text}</span>
            </div>)
    }
});

module.exports = IconTextRectangleButton;