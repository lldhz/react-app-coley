'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var MechanismSearch = React.createClass({
    /*
     Mixins:
     */
    /*
     getInitialState:
     */
    getInitialState: function()
    {
        return {inputValue: "", changed: false};
    },
    onChange: function (event) {
        var keyword = event.target.value;
        var re = new RegExp(/select|update|delete|exec|count|UNION|’|"|=|;|>|<|%/i);
        if (re.test(keyword)) {
            //console.log(keyword);
            keyword = "";
            //console.log(keyword);
        }
        this.setState({inputValue: keyword, changed: true});
    },
    onCancel: function () {
        this.setState({inputValue: "", changed: false});
    },
    onFocus: function () {
        this.setState({inputValue: "", changed: true});
    },
    onBlur: function (event) {
        var keyword = event.target.value;
        var re = new RegExp(/select|update|delete|exec|count|UNION|’|"|=|;|>|<|%/i);
        if (re.test(keyword)) {
            //console.log(keyword);
            keyword = "!error_Input";
            //console.log(keyword);
        }
        this.props.onClick(keyword);
    },
    handleKeyDown: function (event) {
        if (event.keyCode === 13) {
            var el = ReactDom.findDOMNode(this.refs.searchInput);
            var keyword = el.value;
            var re = new RegExp(/select|update|delete|exec|count|UNION|’|"|=|;|>|<|%/i);
            if (re.test(keyword)) {
                //console.log(keyword);
                keyword = "!error_Input";
                //console.log(keyword);
            }
            this.props.onClick(keyword);
        }
    },
    renderLabel: function () {
        return (
            <label htmlFor="search_input" className="weui_search_text">
                <i className="weui_icon_search"></i>
                <span>搜索</span>
            </label>
        )
    },
    /*
     render:
     */
    render: function() {
        var searchLabel = this.state.changed === true ? null : this.renderLabel();
        return (
            <div className="bd">
                <div className="weui_search_bar">
                    <div className="weui_search_outer">
                        <div className="weui_search_inner">
                            <i className="weui_icon_search"></i>
                            <input type="search" ref="searchInput" className="weui_search_input" id="search_input"
                                   placeholder="搜索" onFocus={this.onFocus} onChange={this.onChange} onBlur={this.onBlur}
                                   value={this.state.inputValue}
                                   onKeyDown={this.handleKeyDown}/>
                            <a href="javascript:void(0);" className="weui_icon_clear" onClick={this.onCancel}></a>
                        </div>
                        {searchLabel}
                    </div>
                </div>
            </div>)
    }
});

module.exports = MechanismSearch;