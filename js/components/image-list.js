/**
 * Created by Shirley on 16/6/21.
 */
'use strict'

import React,{PropTypes,Component} from 'react'
import wx from '../api/wx'
import util from '../api/util'
require('./index')
var ImageList = React.createClass({
     /*
    Mixins:
    */
     /*
    getInitialState:
    //*/
    getInitialState: function()
    {
        return {images:this.props.images};
    },

    //componentDidMount:function()
    //{
    //    //util.fetchWeixinConfig();
    //},

    onSelectImage:function()
    {
        //console.log("test open file")
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: (res) => {
                this.setState({images:res.localIds});
            }
        });
    },
    clean:function()
    {
        this.setState({images:[]});
    },
    onClickImage:function(i)
    {
        if(this.props.canRemove)
            this.onRemoveImage(i);
        if(this.props.canPreview)
            this.onPreviewImage(i);
    },
    onRemoveImage:function(i)
    {
            confirm('确认','您确定要移除该照片吗？', () => {
                //var _images = this.props.localImages;
                this.state.images.splice(i, 1);
                this.setState({images:this.state.images});
            });
    },

    onPreviewImage:function(i)
    {
            wx.previewImage({
                current:this.state.images[i],
                urls:this.state.images
            });
    },
    renderAddButton:function()
    {
        if(this.props.canAdd && this.state.images.length <9) {
            return (
                <li>
                    <div className="upload-file">
                        <span className="add-image" onClick={this.onSelectImage}>
                            <i className="iconfont camera">&#xe60a;</i></span>
                    </div>
                </li>
            );
        }
        else
        {
            return null;
        }
    },

    renderImages:function()
    {
        return this.state.images.map((image,i)=>{
            //if(image!='')
                return(
                    <li key={i}><img src={image} onClick={this.onClickImage.bind(null,i)}/></li>
                );
        })
    },
     /*
    render:
    */
    render: function() {
        var previewImages =this.renderImages();
        var addButton = this.renderAddButton();
        return (
                <div className="upload-box">
                    <ul className="image-list">
                        {previewImages}
                        {addButton}
                    </ul>
                </div>
        )
    }
});

module.exports = ImageList;