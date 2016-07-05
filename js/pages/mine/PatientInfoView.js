'use strict'

var React = require('react');
var CustomStore = require('../../store/CustomStore');
var localStore = require('../../store/local-store');
var PatientApi = require( "../../api/mine/PatientInfo-api");
require('../../api/date');
var PatientInfoView = React.createClass({
    /*
     Mixins:
     */
    /*
     getInitialState:
     */
    getInitialState: function()
    {
        var _data = CustomStore.getStore("Patient");

        return {data:_data,openid:localStore.getItem("openid")};
    },
	componentWillMount:function(){
        CustomStore.addListener("Patient",this.onDataChange);
        PatientApi.getPatient({openid:localStore.getItem("openid")});
	},
	componentDidMount:function(){
	},
 	componentWillUnMount:function(){
 	},
 	componentDidUnMount:function(){
        CustomStore.removerListener("Patient",this.onDataChange);
 	},
    onDataChange:function(){
        this.setState({data:CustomStore.getStore("Patient")});
    },
    onSubmit:function()
    {
        window.location.href="#/patientInfo";
    },
    /*
     render:
     */
    render: function() {
        var birthday = this.state.data.birthday.toDate().Format("yyyy-MM-dd");
    	return (<div>
            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <label className="weui_label">性别</label>
                </div>
                <div className="weui_cell_bd  weui_cell_primary mine-text-align">
                    <span>{this.state.data.sex=="1"?'男':'女'}</span>
                </div>
            </div>
            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <label className="weui_label">生日</label>
                </div>
                <div className="weui_cell_bd  weui_cell_primary mine-text-align">
                    <span>{birthday}</span>
                </div>
            </div>

            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <span className="weui_label">吸烟史</span>
                </div>
                <div className="weui_cell_bd  weui_cell_primary mine-text-align">
                    <span>{this.state.data.smokingHistory}</span>
                </div>
            </div>

            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <label className="weui_label">重要伴随病史</label>
                </div>
                <div className="weui_cell_bd  weui_cell_primary mine-text-align">
                    <span>{this.state.data.medicalHistory}</span>
                </div>
            </div>


            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <label className="weui_label">其他治疗药物</label>
                </div>
                <div className="weui_cell_bd  weui_cell_primary mine-text-align">
                    <span>{this.state.data.otherTherapy}</span>
                </div>
            </div>

            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <label className="weui_label">过敏药物</label>
                </div>
                <div className="weui_cell_bd  weui_cell_primary mine-text-align">
                    <span>{this.state.data.allergies}</span>
                </div>
            </div>

            <div className="weui_cell">
                <a href="javascript:void(0);" className="weui_btn custom_button" value="修改" onClick={this.onSubmit}>修改</a>
            </div>
        </div>)
    }
});

module.exports = PatientInfoView;