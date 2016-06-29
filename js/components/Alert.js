var React = require('react');

module.exports = ({title, content, ok}) => {
    return (
        <div className="weui_dialog_alert" id="dialog2" style={{zIndex: 9999}}>
            <div className="weui_mask" />
            <div className="weui_dialog">
                <div className="weui_dialog_hd"><strong className="weui_dialog_title">{title}</strong></div>
                <div className="weui_dialog_bd">{content}</div>
                <div className="weui_dialog_ft">
                    <a href="javascript:;" className="weui_btn_dialog primary" onClick={ok}>确定</a>
                </div>
            </div>
        </div>
    )
}