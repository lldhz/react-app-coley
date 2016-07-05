/**
 * Created by Shirley on 16/6/15.
 */
'use strict'

import React,{PropTypes,Component} from 'react';

import CN_CITIES from './city.min.js';
import IconTextRoundButton from '../../components/icon-text-round';
var PatientApi = require( "../../api/mine/PatientInfo-api");

var util = require('../../api/util');
require('../../api/date');
require('../../components/index');
var CustomStore = require('../../store/CustomStore');
var localStore = require('../../store/local-store');
//var buttonStyle=[
//    "weui_btn weui_btn_mini weui_btn_plain_default myCustomBtn","weui_btn weui_btn_mini weui_btn_plain_primary myCustomBtn"
//];
var buttonStyle=[
    "customBtnRound","customBtnRound-active"
];
var buttonStyle2=[
    "customBtnRound2","customBtnRound2-active"
];
var PatientInfo = React.createClass({

    getInitialState:function()
    {
        var _data = CustomStore.getStore("Patient");

        return {data:_data,openid:localStore.getItem("openid")};
    },

    componentWillMount:function()
    {
        CustomStore.addListener("Patient",this.onDataChange);
        PatientApi.getPatient({openid:localStore.getItem("openid")});
    },

    componentDidMount:function(){
    },

    componentDidUnMount:function()
    {
        CustomStore.removerListener("Patient",this.onDataChange);
    },

    onDataChange:function()
    {
        console.log(CustomStore.getStore("Patient"));
        this.setState({data:CustomStore.getStore("Patient")});
    },

    onSexButtonChecked:function(event)
    {
        if(event.target.id == "sex-man")
        {
            CustomStore.setItem("Patient","sex","1");
        }
        else
        {
            CustomStore.setItem("Patient","sex","2");
        }
    },

    onSmokingHistoryClick:function()
    {
        if(this.state.data.smokingHistory == "无")
        {
            CustomStore.setItem("Patient","smokingHistory","");
        }
        else
        {
            CustomStore.setItem("Patient","smokingHistory","无");
        }
    },

    onDataInputChange:function(event)
    {
            var inputDate = new Date(event.target.value).Format("yyyyMMdd");
            //console.log(inputDate);
            CustomStore.setItem("Patient","birthday",inputDate);
    },
    onDataInputMedicalHistory:function(event)
    {
        CustomStore.setItem("Patient","medicalHistory",event.target.value);
    },
    onDataInputOtherTherapy:function(event)
    {
        CustomStore.setItem("Patient","otherTherapy",event.target.value);
    },
    onDataInputAllergies:function(event)
    {
        CustomStore.setItem("Patient","allergies",event.target.value);
    },

    onSubmit:function()
    {
        //window.location.href='/#/mechanismInfo';
        //Alert("info");

        var requestBody =
        {
            openid:localStore.getItem('openid'),
            sex:CustomStore.getItem("Patient","sex"),
            smokingHistory:CustomStore.getItem("Patient","smokingHistory"),
            birthday:CustomStore.getItem("Patient","birthday") ==''?new Date().Format('yyyyMMdd'):CustomStore.getItem("Patient","birthday"),
            medicalHistory:CustomStore.getItem("Patient","medicalHistory"),
            otherTherapy:CustomStore.getItem("Patient","otherTherapy"),
            allergies:CustomStore.getItem("Patient","allergies")
        };
        PatientApi.postPatient({content:requestBody},()=>{
            window.location.href = "/#/patientInfoView";
        });
    },
    onSmokedClick:function(event)
    {
        CustomStore.setItem("Patient","smokingHistory",event.target.value);
    },

    renderSmokingHistory:function()
    {
        if(this.state.data.smokingHistory == "无")
            return null;
        else
            return(
                <div class="patient_row">
                    <label className={this.state.data.smokingHistory=="5年以下"?buttonStyle2[1]:buttonStyle2[0]} onClick={this.onSmokedClick} value="5年以下">5年以下</label>
                    <label className={this.state.data.smokingHistory=="5至10年"?buttonStyle2[1]:buttonStyle2[0]} onClick={this.onSmokedClick} value="5至10年">5至10年</label>
                    <label className={this.state.data.smokingHistory=="10年以上"?buttonStyle2[1]:buttonStyle2[0]} onClick={this.onSmokedClick} value="10年以上">10年以上</label>
                </div>
            );
    },
     /*
    render:
    */    
    render:function(){
        var somkinghistory = this.renderSmokingHistory();
        var birthday = this.state.data.birthday.toDate().Format("yyyy-MM-dd");
        return (
            <div>
                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <label className="weui_label">性别</label>
                    </div>
                    <div className="weui_cell_bd  weui_cell_primary">
                        <div id="sex-man" className={this.state.data.sex=="1"?buttonStyle[1]:buttonStyle[0]}
                             onClick={this.onSexButtonChecked}>男</div>
                        <div id="sex-woman" className={this.state.data.sex=="2"?buttonStyle[1]:buttonStyle[0]}
                             onClick={this.onSexButtonChecked}>女</div>
                    </div>
                </div>
                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <label className="weui_label">生日</label>
                    </div>
                    <div className="weui_cell_bd  weui_cell_primary">
                        <input className="weui_input" id="patient_birthday" type="date" value={birthday} onChange={this.onDataInputChange}/>
                    </div>
                </div>

                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <span className="weui_label">吸烟史</span>
                    </div>
                    <div className="weui_cell_bd  weui_cell_primary">
                        <div className="patient_row">
                            <div className={this.state.data.smokingHistory=="无"?buttonStyle[1]:buttonStyle[0]} onClick={this.onSmokingHistoryClick}>无</div>
                            <div className={this.state.data.smokingHistory=="无"?buttonStyle[0]:buttonStyle[1]} onClick={this.onSmokingHistoryClick}>有</div>
                        </div>
                        {somkinghistory}
                    </div>
                </div>

                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <label className="weui_label">重要伴随病史</label>
                    </div>
                    <div className="weui_cell_bd  weui_cell_primary">
                        <input id="patient_medicalHistory" className="weui_input" type="text" placeholder="比如糖尿病,高血压等" value={this.state.data.medicalHistory} onChange={this.onDataInputMedicalHistory}/>
                    </div>
                </div>


                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <label className="weui_label">其他治疗药物</label>
                    </div>
                    <div className="weui_cell_bd  weui_cell_primary">
                        <input id="patient_otherTherapy" className="weui_input" type="text" placeholder="除了肺癌药物,您服用了其他什么药物" value={this.state.data.otherTherapy} onChange={this.onDataInputOtherTherapy}/>
                    </div>
                </div>

                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <label className="weui_label">过敏药物</label>
                    </div>
                    <div className="weui_cell_bd  weui_cell_primary">
                        <input id="patient_allergies" className="weui_input" type="text" placeholder="是否有过敏的药物" value={this.state.data.allergies} onChange={this.onDataInputAllergies}/>
                    </div>
                </div>

                <div className="weui_cell">
                    <a href="javascript:void(0);" className="weui_btn custom_button" value="完成" onClick={this.onSubmit}>完成</a>
                </div>
            </div>
        )
    }
});

module.exports = PatientInfo;