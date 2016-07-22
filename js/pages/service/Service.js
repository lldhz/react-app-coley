/**
 * Created by Shirley on 16/6/15.
 */
'use strict';
var React = require('react');
var Content = require('../../components/content');
var FooterNav = require('../../components/footer-nav');
var http=require('../../http');


var Service = React.createClass({
    getInitialState:function(){
        return {listData:[]}
    },

    componentWillMount: function ()
    {
        http.loadJSONFile("/data/service.json", data=> {
            this.setState({listData:data.listData});
        });
    },

    onClick:function(i)
    {
        console.log(i);
        window.location.href = this.state.listData[i].link;
    },

    renderItem: function (item,i) {
        var iconHtml = item.service.map((icon,i)=>{
            return (<i className={icon} style={{fontSize:"20px",color:"#3dd0dd",paddingLeft:"5px",paddingRight:"5px"}} key={i}/>);
            });
        return (
          <div className='weui_cell' onClick={this.onClick.bind(null,i)}  key={i}>
              <div className='service-img'>
                  <img src={item.logo+"@100w_100h"}/>
              </div>
              <div className='service-content'>
                  <div>
                      <span>{item.name}</span>
                  </div>
                  <div>
                      {iconHtml}
                  </div>
              </div>
          </div>
      );
    },
     /*
    render:
      */
    render: function () {
        var serviceList =this.state.listData===undefined || this.state.listData===null? null
                : this.state.listData.map((item,i)=>{return this.renderItem(item,i);});
        return (
            <div className='weui_tab'>
                <Content>
                    <div className='weui_cells'>
                        {serviceList}
                    </div>
                </Content>
                <FooterNav actived="service"/>
            </div>)
    }
});

module.exports = Service;