
var Loading = require('./Loading');
var Alert = require('./Alert');
var Confirm = require('./Confirm');

var ReactDom = require('react-dom');

var getUIContainer = () => {
    var container = document.getElementById('weui');
    if (container == null) {
        container = document.createElement('div');
        container.id = 'weui';
        document.body.appendChild(container);
    }
    return container;
}

var load = Component => {
    if (Component == null) {
        ReactDom.render(<div/>, getUIContainer());
    } else {
        ReactDom.render(Component, getUIContainer());
    }
}

window._alert = window.alert;
window._confirm = window.confirm;
/**
 * 全局Loading
 * @param hide
 */
window.loading = text => {
    load(text === false ? null : <Loading text={text}/>)
}

/**
 * 覆盖全局 alert 弹窗
 * @param title
 * @param content
 * @param click
 */
window.Alert = window.alert = function(title, content, click) {
    var fn = click;
    if (click) {
        fn = function() {
            load(null);
            click()
        }
    } else {
        fn = function() {
            load(null);
        }
    }
    load(<Alert title={title} content={content} ok={fn}/>)
}

/**
 * 覆盖全局 confirm 弹窗
 * @param title
 * @param content
 * @param yes
 * @param no
 */
window.confirm = (title, content, yes, no) => {
    var _yes = function() {load(null);yes && yes()};
    var _no = function() {load(null);no && no()};
    load(<Confirm title={title} content={content} yes={_yes} no={_no}/>)
}