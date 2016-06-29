var React = require('react');

module.exports = ({title, content, yes, no}) => {
    return (
        <div className="weui_dialog_confirm" id="dialog1">
            <div className="weui_mask" />
            <div className="weui_dialog">
                <div className="weui_dialog_hd"><strong className="weui_dialog_title">{title}</strong></div>
                <div className="weui_dialog_bd">{content}</div>
                <div className="weui_dialog_ft">
                    <a href="javascript:;" className="weui_btn_dialog default" onClick={no}>取消</a>
                    <a href="javascript:;" className="weui_btn_dialog primary" onClick={yes}>确定</a>
                </div>
            </div>
        </div>
    )
}