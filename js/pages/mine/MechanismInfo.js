/**
 * Created by Shirley on 16/6/20.
 */
'use strict'

import React,{PropTypes,Component} from 'react'
var MechanismApi = require( "../../api/mine/MechanismInfo-api");
require('../../api/date');
require('../../components/index');
var util = require('../../api/util');

var CustomStore = require('../../store/CustomStore');
var localStore = require('../../store/local-store');

var pathologicalButtons=["小细胞肺癌","肺鳞癌","肺腺癌","腺鳞癌","其他类型肺癌"];
var stagingButtons=["I","II","III","IV"];
var lesionButton=["脑部转移","肝肾转移","淋巴转移","胸膜转移","骨转移"];
var mutationButton=["KRAS","EGFR","ALK","CMET"];
var detectionButton=["组织标本(活检)","血液标本"];
var buttonStyle=[
    "customBtnRound","customBtnRound-active"
];
var buttonStyle2=[
    "customBtnRound2","customBtnRound2-active"
];
var MechanismInfo = React.createClass({
     /*
    Mixins:
    */
     /*
    getInitialState:
    */
    getInitialState: function()
    {
        var _data = CustomStore.getStore("Mechanism");
        return {data:_data,openid:localStore.getItem("openid")};
    },

     /*
    componentWillMount:
    */
    componentWillMount: function()
    {
        CustomStore.addListener("Mechanism",this.onStoreChange);
        //UserStore.addListener(this.onOpenidChange)
        //return null;
    },
    componentDidMount:function()
    {
        MechanismApi.getMechanism({openid:localStore.getItem('openid')});
    },
     /*
    componentDidUnMount:
    */
    componentDidUnMount: function()
    {
        CustomStore.removeListener("Mechanism",this.onStoreChange);
        //UserStore.removeListener(this.onOpenidChange);
        //return null;
    },

    onStoreChange:function()
    {
        //console.log(MechanismStore.getStore());
        this.setState({data:CustomStore.getStore("Mechanism")});
    },

    onPathologicalButtonClick:function(event)
    {
        CustomStore.setItem("Mechanism","pathologicalPattern",event.target.value);
    },

    renderPathologicalButton:function()
    {
        var html = pathologicalButtons.map((pathological,index)=>{
            //var strIndex = this.state.data.pathologicalPattern== pathological;
            //console.log(strIndex);
            return (
                <label className={this.state.data.pathologicalPattern== pathological?buttonStyle[1]:buttonStyle[0]}
                     key={index} value={pathological} onClick={this.onPathologicalButtonClick}>{pathological}</label>
            );
        });
        return (
            <div className="patient_row">
                {html}
            </div>
        );
    },

    onStagingButtonClick:function(event)
    {
        CustomStore.setItem("Mechanism","diseaseStaging",event.target.value);
    },

    renderStagingSubButton:function()
    {
        if(this.state.data.diseaseStaging != "IV" && this.state.data.diseaseStaging != "")
        {
            var staging = this.state.data.diseaseStaging.replace(/A/g,"").replace(/B/g,"");
            return(
                <div className="patient_row customDisplay">
                    <label className={this.state.data.diseaseStaging.indexOf("A")>-1?buttonStyle2[1]:buttonStyle2[0]}
                           value={staging+"A"} onClick={this.onStagingButtonClick}>{staging+"A"}</label>

                    <label className={this.state.data.diseaseStaging.indexOf("B")>-1?buttonStyle2[1]:buttonStyle2[0]}
                           value={staging+"B"} onClick={this.onStagingButtonClick}>{staging+"B"}</label>
                </div>
            );
        }
        else
            return null;
    },
    renderStagingButton:function()
    {
        var html= stagingButtons.map((staging,index)=>{
            return (
                <label className={(this.state.data.diseaseStaging==staging)||
                    (this.state.data.diseaseStaging==staging+"A")||
                    (this.state.data.diseaseStaging==staging+"B")?buttonStyle[1]:buttonStyle[0]}
                       key={index} value={staging} onClick={this.onStagingButtonClick}>{staging}</label>
            );
        });
        return (
                <div className="patient_row">
                    {html}
                </div>
        );
    },

    onLesionButtonClick:function(event)
    {
        var strValue = this.state.data.metastaticLesion;
        var targetValue = event.target.value.concat(',');
        var strIndex = strValue.indexOf(targetValue);
        if(strIndex == -1)
        {
            strValue = targetValue.concat(strValue);
        }
        else
        {
            strValue = strValue.replace(targetValue,"");
        }
        CustomStore.setItem("Mechanism","metastaticLesion",strValue);
    },

    renderLesionButton:function()
    {
        var html= lesionButton.map((lesion,index)=>{
            var strIndex = this.state.data.metastaticLesion.indexOf(lesion);
            return (
                <label className={strIndex>-1?buttonStyle[1]:buttonStyle[0]} key={index}
                       value={lesion} onClick={this.onLesionButtonClick}>{lesion}</label>
            );
        });
        return (
            <div className="patient_row">
                {html}
            </div>
        );
    },

    onMutationButtonClick:function(event)
    {
        var strValue = this.state.data.genicMutation;
        var targetValue = event.target.value.concat(',');
        var strIndex = strValue.indexOf(targetValue);
        if(strIndex == -1)
        {
            strValue = targetValue.concat(strValue);
        }
        else
        {
            strValue = strValue.replace(targetValue,"");
        }
        CustomStore.setItem("Mechanism","genicMutation",strValue);
    },
    renderMutationButton:function()
    {
        var html= mutationButton.map((mutation,index)=>{
            var strIndex = this.state.data.genicMutation.indexOf(mutation);
            return (
                <label className={strIndex>-1?buttonStyle[1]:buttonStyle[0]} key={index} value={mutation}
                    onClick={this.onMutationButtonClick}>{mutation}</label>
            );
        });
        return (
            <div className="patient_row">
                {html}
            </div>
        );
    },

    onDetectionButtonClick: function (event) {
        CustomStore.setItem("Mechanism","detection",event.target.value);
    },
    renderDetectionButton:function()
    {
        var html = detectionButton.map((detection,index)=>{
            var strIndex =this.state.data.detection.indexOf(detection);
            return (
                <label className={strIndex>-1 ? buttonStyle[1]:buttonStyle[0]} key={index} value={detection}
                    onClick={this.onDetectionButtonClick}>{detection}</label>
            );
        });
        return (
            <div className="patient_row">
                {html}
            </div>
        );
    },

    onDataInputChange:function(event)
    {
        if("diagnosisDate" == event.target.id)
        {
            CustomStore.setItem("Mechanism","diagnosisDate",new Date(event.target.value).Format("yyyyMMdd"));
        }
        if("otherLesion" == event.target.id)
        {
            //MechanismStore.putValue("metastaticLesion",new Date(event.target.value).Format("yyyyMMdd"));

            CustomStore.setItem("Mechanism","otherLesion",event.target.value);
        }
        if("otherMutation" == event.target.id)
        {
            CustomStore.setItem("Mechanism","otherMutation",event.target.value);
        }
    },

    onSubmit:function()
    {

        //window.location.href= '/#/treatmentInfo';
        var requestBody={
            openid:localStore.getItem('openid'),
            diagnosisDate:CustomStore.getItem("Mechanism","diagnosisDate")==''
                ?new Date().Format('yyyyMMdd'):CustomStore.getItem("Mechanism","diagnosisDate"),
            pathologicalPattern:CustomStore.getItem("Mechanism","pathologicalPattern"),
            diseaseStaging:CustomStore.getItem("Mechanism","diseaseStaging"),
            metastaticLesion:CustomStore.getItem("Mechanism","metastaticLesion"),
            otherLesion:CustomStore.getItem("Mechanism","otherLesion"),
            genicMutation:CustomStore.getItem("Mechanism","genicMutation"),
            otherMutation:CustomStore.getItem("Mechanism","otherMutation"),
            detection:CustomStore.getItem("Mechanism","detection")
        };
        MechanismApi.postMechanism({content:requestBody},()=>{
            window.location.href = "/#/treatmentInfo";
        });
    },

     /*
    render:
    */
    render: function() {
        var pathologicalChecked = this.renderPathologicalButton();
        var stagingChecked = this.renderStagingButton();
        var stagingSubChecked = this.renderStagingSubButton();
        var mutationChecked = this.renderMutationButton();
        var lesionChecked = this.renderLesionButton();
        var detectionChecked = this.renderDetectionButton();
        var diagnosis = this.state.data.diagnosisDate.toDate().Format("yyyy-MM-dd");
        return (
            <div>
            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <label className="weui_label">确诊时间</label>
                </div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input className="weui_input" id="diagnosisDate" type="date" value={diagnosis} onChange={this.onDataInputChange}/>
                </div>
            </div>

            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <span className="weui_label">病理类型</span>
                </div>
                <div className="weui_cell_bd weui_cell_primary">
                    {pathologicalChecked}
                </div>
            </div>
                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <span className="weui_label">疾病分期</span>
                    </div>
                    <div className="weui_cell_bd weui_cell_primary">
                        {stagingChecked}
                        {stagingSubChecked}
                    </div>
                </div>

                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <span className="weui_label">转移病灶</span>
                    </div>
                    <div className="weui_cell_bd weui_cell_primary">
                        {lesionChecked}
                        <div className="patient_row">
                            <input className="weui_input" id="otherLesion" type="text" value={this.state.data.otherLesion}
                                   placeholder="其他部位转移"
                                   onChange={this.onDataInputChange}/>
                        </div>
                    </div>
                </div>


                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <span className="weui_label">基因突变</span>
                    </div>
                    <div className="weui_cell_bd weui_cell_primary">
                        {mutationChecked}
                        <div className="patient_row">
                            <input className="weui_input" id="otherMutation" type="text" value={this.state.data.otherMutation}
                                   placeholder="其他基因突变"
                                   onChange={this.onDataInputChange}/>
                        </div>
                    </div>
                </div>


                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <span className="weui_label">检测方法</span>
                    </div>
                    <div className="weui_cell_bd weui_cell_primary">
                        {detectionChecked}
                    </div>
                </div>

            <div className="weui_cell">
                <a href="javascript:void(0);" className="weui_btn custom_button" value="下一页" onClick={this.onSubmit}>下一页</a>
            </div>
        </div>
        )
    }
});

module.exports = MechanismInfo;