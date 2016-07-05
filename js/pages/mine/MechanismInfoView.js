'use strict'

var React = require('react');
var MechanismApi = require( "../../api/mine/MechanismInfo-api");
require('../../api/date');
var CustomStore = require('../../store/CustomStore');
var localStore = require('../../store/local-store');
var MechanismInfoView = React.createClass({
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
	componentWillMount:function(){
        CustomStore.addListener("Mechanism",this.onStoreChange);
	},
	componentDidMount:function(){
        MechanismApi.getMechanism({openid:localStore.getItem('openid')});
	},
 	componentWillUnMount:function(){
 	},
 	componentDidUnMount:function(){
        CustomStore.removeListener("Mechanism",this.onStoreChange);
 	},
    onStoreChange:function()
    {
        //console.log(MechanismStore.getStore());
        this.setState({data:CustomStore.getStore("Mechanism")});
    },
    onSubmit:function(){
        window.location.href='#/mechanismInfo';
    },

    /*
     render:
     */
    render: function() {
        var diagnosis = this.state.data.diagnosisDate.toDate().Format("yyyy-MM-dd");
    	return (<div>
            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <label className="weui_label">确诊时间</label>
                </div>
                <div className="weui_cell_bd weui_cell_primary mine-text-align">
                    <span>{diagnosis}</span>
                </div>
            </div>

            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <span className="weui_label">病理类型</span>
                </div>
                <div className="weui_cell_bd weui_cell_primary  mine-text-align">
                    <span>{this.state.data.pathologicalPattern}</span>
                </div>
            </div>
            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <span className="weui_label">疾病分期</span>
                </div>
                <div className="weui_cell_bd weui_cell_primary  mine-text-align">
                    <span>{this.state.data.diseaseStaging}</span>
                </div>
            </div>

            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <span className="weui_label">转移病灶</span>
                </div>
                <div className="weui_cell_bd weui_cell_primary  mine-text-align">
                    <span>{this.state.data.metastaticLesion+this.state.data.otherLesion}</span>
                </div>
            </div>


            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <span className="weui_label">基因突变</span>
                </div>
                <div className="weui_cell_bd weui_cell_primary  mine-text-align">
                    <span>{this.state.data.genicMutation+this.state.data.otherMutation}</span>
                </div>
            </div>


            <div className="weui_cell">
                <div className="weui_cell_hd">
                    <span className="weui_label">检测方法</span>
                </div>
                <div className="weui_cell_bd weui_cell_primary  mine-text-align">
                    <span>{this.state.data.detection}</span>
                </div>
            </div>

            <div className="weui_cell">
                <a href="javascript:void(0);" className="weui_btn custom_button" value="修改" onClick={this.onSubmit}>修改</a>
            </div>
        </div>)
    }
});

module.exports = MechanismInfoView;