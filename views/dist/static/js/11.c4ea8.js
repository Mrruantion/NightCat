webpackJsonp([11,13],{31:function(e,t,a){e.exports=a.p+"static/img/bg.c198192.jpg"},104:function(e,t,a){var c=a(117);"string"==typeof c&&(c=[[e.id,c,""]]);a(10)(c,{});c.locals&&(e.exports=c.locals)},117:function(e,t,a){t=e.exports=a(11)(),t.push([e.id,".active_account-view{width:100vw;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-image:url("+a(31)+");background-repeat:no-repeat;background-size:cover;background-position:50%}.active_account-view h3{margin-bottom:20px}.active_account-view .iconfont{font-size:30px;margin-right:10px;vertical-align:middle}.active_account-view .msg-modal{background-color:rgba(33,33,33,.86);color:#fffffb;padding:20px 50px;opacity:.9;border-radius:4px;text-align:center;box-shadow:0 0 10px hsla(0,0%,100%,.86)}.active_account-view .msg-modal.success{background-color:#2ecc71}.active_account-view .msg-modal.error{background-color:#d71345}.active_account-view .msg-modal .link-btn{color:#fffffb;font-size:12px;display:block}.active_account-view .msg-modal small{font-size:12px}",""])},176:function(e,t,a){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(6),n=c(o),s=a(2),i=c(s),r=a(3),l=c(r),u=a(8),d=c(u),f=a(7),m=c(f),p=a(1),v=c(p),g=a(23),b=c(g),h=a(39);a(104);var x=function(e){function t(e){(0,i.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={success:!0,message:""},a.timer=null,a}return(0,m.default)(t,e),(0,l.default)(t,[{key:"componentWillMount",value:function(){var e=this;axios.get("/activeAccount"+this.props.location.search).then(function(t){e.setState({success:t.data.success,message:t.data.message})}).catch(function(e){return console.log(e.response.data.message)})}},{key:"componentDidMount",value:function(){var e=this;this.timer=setTimeout(function(){e.context.router.replace("/")},1e4)}},{key:"componentWillUnmount",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"render",value:function(){var e=(0,b.default)("iconfont","icon-"+(this.state.success?"success":"error")),t=(0,b.default)("msg-modal",""+(this.state.success?"success":"error"));return v.default.createElement("div",{ref:"view",className:"active_account-view"},v.default.createElement("div",{className:t},v.default.createElement("h3",null,v.default.createElement("i",{className:e}),this.state.message),v.default.createElement(h.Link,{to:"/",className:"link-btn"},"10秒后自动跳转到首页")))}}]),t}(p.Component);t.default=x,x.propTypes={location:p.PropTypes.any},x.contextTypes={router:v.default.PropTypes.any.isRequired}}});