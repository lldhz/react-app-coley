/**
 * Created by Shirley on 16/6/21.
 */
'use strict'
import React,{PropTypes,Component} from 'react';
import ImageList from '../../components/image-list';
import wx from '../../api/wx';

var CustomStore = require('../../store/CustomStore');
var localStore = require('../../store/local-store');

var TreatmentApi = require( "../../api/myroad/TreatmentInfo-api");

require('../../api/date');
require('../../components/index');

var buttonStyle=[
    "customBtnRound","customBtnRound-active"
];
var buttonStyle2=[
    "customBtnRound2","customBtnRound2-active"
];
var TreatmentInfo = React.createClass({
     /*
    Mixins:
    */
     /*
    getInitialState:
    */
    getInitialState: function()
    {
        return {data:CustomStore.getStore('Treatment'),localImages:[],serverImages:[],openid:localStore.getItem("openid")};
    },
     /*
    getDefaultProps:
    */
    getDefaultProps: function()
    {
        return null;
    },
     /*
    componentWillMount:
    */
    componentWillMount: function()
    {
        return null;
    },
     /*
    componentDidMount:
    */
    componentDidMount: function()
    {
        CustomStore.addListener("Treatment",this.onStoreChange);
        //UserStore.addListener(this.onOpenidChange)
    },
     /*
    componentWillUnmount:
    */
    componentWillUnMount: function()
    {
        CustomStore.removerListener("Treatment",this.onStoreChange);
        //UserStore.removeListener(this.onOpenidChange);
    },

    onDataInputChange:function(event)
    {
        if(event.target.id == "schemeComment")
        {
            CustomStore.setItem("Treatment","schemeComment",event.target.value);
        }
        if(event.target.id == "otherScheme")
        {
            CustomStore.setItem("Treatment","otherScheme",event.target.value);
        }
        if(event.target.id == "startDate")
        {
            var inputDate = new Date(event.target.value).Format("yyyyMMdd");
            CustomStore.setItem("Treatment","startDate",inputDate);
        }
        if(event.target.id == "endDate")
        {
            var inputDate = new Date(event.target.value).Format("yyyyMMdd");
            CustomStore.setItem("Treatment","endDate",inputDate);
        }
    },
    onStoreChange:function()
    {
        this.setState({data:CustomStore.getStore("Treatment")});
    },
    onClickEffectButton:function(event)
    {
        CustomStore.setItem('Treatment',"effect",event.target.value);
    },
    renderEffectButton:function()
    {
        var values = ["有效","稳定","进展"];
        return (
            values.map((value,index)=>{
              return (
                  <label className={this.state.data.effect==value?buttonStyle[1]:buttonStyle[0]}
                         value={value}
                         key={index}
                         onClick={this.onClickEffectButton}>{value}</label>
              );
            })
        );
    },

    onClickSchemeButton:function(event)
    {
        var strValue = this.state.data.scheme;
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
        CustomStore.setItem('Treatment',"scheme",strValue);
    },

    renderSchemeButton:function()
    {
        var values = ["手术","化疗","放疗","靶向药","其他"];
        return (
            values.map((value,index)=>{
                return (
                    <label className={this.state.data.scheme.indexOf(value)>-1?buttonStyle[1]:buttonStyle[0]}
                           value={value}
                           key={index}
                           onClick={this.onClickSchemeButton}>{value}</label>
                );
            })
        );
    },
    setImages: function(localImages) {
        this.setState({localImages:localImages});
        //var localIds = localImages;
        //console.log(localIds);
        //var serverImages = [];
        //function uploadImgs(localIds)
        //{
        //    var localId = localImages.pop();
        //    console.log(localId);
        //    wx.uploadImage({
        //        localId: localId,
        //        isShowProgressTips: 1,
        //        success: function (res) {
        //            //var serverImages = CustomStore.getItem('Treatment',"images");
        //            serverImages.push(res.serverId); // 返回图片的服务器端ID
        //            //CustomStore.setItem('Treatment',"images",serverImages);
        //            console.log(serverImages);
        //            //其他对serverId做处理的代码
        //            if(localImages.length > 0){
        //                uploadImgs(localImages);
        //            }
        //            else
        //            {
        //                CustomStore.setItem('Treatment',"images",serverImages.join(';'));
        //            }
        //        }
        //    });
        //};
        //uploadImgs(localIds);
        //CustomStore.setItem('Treatment',"images",Images.join(','));
    },
    setServerImage:function(localImages)
    {
        var images = [], i = 0, length = localImages.length;
        function upload() {
            wx.uploadImage({
                localId: localImages[i],
                isShowProgressTips: 1,
                success: (res) => {
                    i++;
                    images.push(res.serverId);
                    if (i < length) {
                        upload();
                    } else {
                        CustomStore.setItem("Treatment", "images", images.join(';'));
                        }
                    }
                });
        }
        upload();
    },

    onSubmit :function()
    {
            var imagelist = this.refs.imagelist;
            var images = [], i = 0, length = imagelist.state.images.length;
            function upload() {
                wx.uploadImage({
                    localId: imagelist.state.images[i],
                    isShowProgressTips: 1,
                    success: (res) => {
                        i++;
                        images.push(res.serverId);
                        if (i < length) {
                            upload();
                        } else {
                            var requestBody={
                                openid:localStore.getItem('openid'),
                                uuid:CustomStore.getItem("Treatment","uuid"),
                                startDate:CustomStore.getItem("Treatment","startDate")==''
                                    ?new Date().Format("yyyyMMdd"):CustomStore.getItem("Treatment","startDate"),
                                endDate:CustomStore.getItem("Treatment","endDate")==''
                                    ?new Date().Format("yyyyMMdd"):CustomStore.getItem("Treatment","endDate"),
                                scheme:CustomStore.getItem("Treatment","scheme"),
                                schemeComment:CustomStore.getItem("Treatment","schemeComment"),
                                otherScheme:CustomStore.getItem("Treatment","otherScheme"),
                                effect:CustomStore.getItem("Treatment","effect"),
                                images:images.join(';')
                            };
                            console.log(requestBody);
                            TreatmentApi.postTreatment({content:requestBody});
                            Alert("完成","您已经完成资料填写!");
                        }
                    }
                });
            }
            upload();
    },

    onClear :function()
    {
        confirm('确认','您确定清除所有数据吗？', () => {
            CustomStore.clear("Treatment");
            this.setState({data:undefined,localImages:[],serverImages:[]});
        });
    },
    onNew :function()
    {
        confirm('确认','您已经完成资料填写？', () =>{
            this.onSubmit();
            CustomStore.clear("Treatment");
            this.setState({data:undefined,localImages:[],serverImages:[]});
        });

    },
     /*
    render:
    */
    render: function() {
        var schemeButton = this.renderSchemeButton();
        var effectButton = this.renderEffectButton();
        var startDate = this.state.data.startDate.toDate().Format("yyyy-MM-dd");
        var endDate = this.state.data.endDate.toDate().Format("yyyy-MM-dd");
        var booleanFalse = false;
        var booleanTrue=true;
        var images=[];
        return (
            <div>
                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <label className="weui_label">开始时间</label>
                    </div>
                    <div className="weui_cell_bd  weui_cell_primary">
                        <input className="weui_input" id="startDate" type="date" value={startDate} onChange={this.onDataInputChange}/>
                    </div>
                </div>
                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <label className="weui_label">结束时间</label>
                    </div>
                    <div className="weui_cell_bd  weui_cell_primary">
                        <input className="weui_input" id="endDate" type="date" value={endDate} onChange={this.onDataInputChange}/>
                    </div>
                </div>
                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <label className="weui_label">治疗方案</label>
                    </div>
                    <div className="weui_cell_bd  weui_cell_primary">
                        <div classNmae="patient_row">
                            {schemeButton}
                        </div>
                    </div>
                </div>

                <div className="weui_cell">
                    <div className="patient_row">
                        <textarea className="weui_textarea patient_row" placeholder="请告诉我们您使用的药物以及剂量"
                                  id="schemeComment"
                                  rows="3" value={this.state.data.schemeComment}
                                  onChange={this.onDataInputChange}></textarea>
                    </div>
                </div>
                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <label className="weui_label">治疗效果</label>
                    </div>
                    <div className="weui_cell_bd  weui_cell_primary">
                        {effectButton}
                    </div>
                </div>
                <div className="weui_cell">
                    <div className="weui_cell_hd">
                        <label className="weui_label">报告上传</label>
                    </div>
                    <div className="weui_cell_bd weui_cell_primary">
                        <ImageList ref="imagelist"
                                images={images}
                                canRemove={booleanTrue}
                                canPreview={booleanFalse}
                                canAdd={booleanTrue}
                                    />
                    </div>
                </div>
                <div className="weui_cell">
                    <a href="javascript:void(0);" className="weui_btn custom_button" value="完成" onClick={this.onSubmit}>完成</a>
                </div>
                <div className="weui_cell">
                    <a href="javascript:void(0);" className="weui_btn custom_button_left" value="清空" onClick={this.onClear}>清空</a>
                    <a href="javascript:void(0);" className="weui_btn custom_button_right" value="新增" onClick={this.onNew}>新增</a>
                </div>
                </div>)
    }
});

module.exports = TreatmentInfo;