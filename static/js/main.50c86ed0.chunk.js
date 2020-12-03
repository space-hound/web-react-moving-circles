(this["webpackJsonpweb-react-moving-circles"]=this["webpackJsonpweb-react-moving-circles"]||[]).push([[0],[,function(e,n,t){e.exports={Controls:"Controls_Controls__2pRFN",SpacedAfter:"Controls_SpacedAfter__3DB3T"}},,,,,,,function(e,n,t){e.exports={Board:"Board_Board__2AXbc",InnerBoard:"Board_InnerBoard__2ait6"}},,,,function(e,n,t){e.exports={Circle:"Circle_Circle__1mNn_"}},function(e,n,t){e.exports={Slider:"Slider_Slider__GKt4b"}},function(e,n,t){e.exports={Numeric:"Numeric_Numeric__tbwPy"}},function(e,n,t){e.exports={Checkbox:"Checkbox_Checkbox__1BNj8"}},,,,,function(e,n,t){},,,,function(e,n,t){"use strict";t.r(n);var a=t(0),i=(t(20),t(3)),r=t.n(i),c=t(9),s=t.n(c),o=t(6),l=t(10),d=t(11),u=t(2),h=t(17),b=t(16),f=t(8),v=t.n(f),C=15,p=35,j=5,S=15,g=t(5),m=function(e,n){return Math.floor(Math.random()*(n-e+1))+e},y=function(){return m(1,100)<=50?1:-1},x=function(){var e="0123456789ABCDEF";return Object(g.a)(new Array(6)).map((function(){return e[m(0,e.length-1)]})).join("")},B={createCircle:function(e,n){var t=x(),a=m(C,p),i=a,r=Math.floor(i/2),c=m(j,S);return{color:t,ogSize:a,size:i,dSize:r,ogSpeed:c,speed:c,xP:m(0+i,e-i),yP:m(0+i,n-i),xD:y(),yD:y()}},createCircles:function(e){var n=this,t=e.circlesCount,a=e.xBound,i=e.yBound;return Object(g.a)(new Array(t)).map((function(){return n.createCircle(a,i)}))},move:function(e,n,t){e.xP+=e.xD*e.speed,e.yP+=e.yD*e.speed,e.xP<=0+e.dSize&&(e.xP=0+e.dSize,e.xD*=-1),e.xP>=n-e.dSize&&(e.xP=n-e.dSize,e.xD*=-1),e.yP<=0+e.dSize&&(e.yP=0+e.dSize,e.yD*=-1),e.yP>=t-e.dSize&&(e.yP=t-e.dSize,e.yD*=-1)},moveCircles:function(e){var n=this,t=e.circles,a=e.xBound,i=e.yBound;t.forEach((function(e){n.move(e,a,i)}))},toggleBlock:function(e){e.isBlocked=!e.isBlocked},toggleBlockCircles:function(e){var n=this;e.circles.forEach((function(e){n.toggleBlock(e)}))},modDir:function(e){1===y()?e.xD*=-1:e.yD*=-1},modColor:function(e){e.color=x()},modSpeed:function(e,n){e.speed=e.ogSpeed+e.ogSpeed*(n/100)},modSize:function(e,n){var t=e.ogSize+e.ogSize*(n/100);e.size=t,e.dSize=Math.floor(t/2)},modCircles:function(e,n,t){var a=this;t.circles.forEach((function(t){a[e](t,n)}))}},O=t(12),k=t.n(O),z=function(e){var n={top:e.xP,left:e.yP,width:e.size,height:e.size,backgroundColor:"#".concat(e.color),transform:"translate(-".concat(e.dSize,"px, -").concat(e.dSize,"px)")};return Object(a.jsx)("div",{className:k.a.Circle,style:n})},P=t(4),w=t(1),N=t.n(w),M=t(13),_=t.n(M),I=function(e){return Object(a.jsxs)("div",{className:"".concat(_.a.Slider," ").concat(e.className),children:[e.label||Object(a.jsx)("label",{children:e.label}),Object(a.jsx)("input",{type:"range",min:e.min,max:e.max,value:e.value,onInput:function(n){e.onInput&&e.onInput({event:n,value:n.target.value})}})]})},A=t(14),D=t.n(A),R=function(e){return Object(a.jsxs)("div",{className:"".concat(D.a.Numeric," ").concat(e.className),children:[e.label||Object(a.jsx)("label",{children:e.label}),Object(a.jsx)("input",{value:e.value,onChange:function(n){e.onChange&&e.onChange({event:n,value:n.target.value})}})]})},E=t(15),$=t.n(E),F=function(e){return Object(a.jsxs)("div",{className:"".concat($.a.Checkbox," ").concat(e.className),children:[e.label&&Object(a.jsx)("label",{children:e.label}),Object(a.jsx)("input",{type:"checkbox",checked:e.checked,onChange:function(n){e.onChange&&e.onChange(n)}})]})},J=function(e){return Object(a.jsxs)("div",{className:e.className,children:[e.isPlaying&&Object(a.jsx)("button",{id:"pause",children:"Pause"}),!e.isPlaying&&Object(a.jsx)("button",{id:"play",children:"Play"})]})},G=function(e){return Object(a.jsxs)("form",{className:N.a.Controls,onSubmit:function(n){n.preventDefault(),e.onAction&&e.onAction({event:n,type:n.nativeEvent.submitter.id})},children:[Object(a.jsx)(R,{label:"Circles:",value:e.circlesCount,onChange:e.onCirclesCountChange,className:N.a.SpacedAfter}),Object(a.jsx)("button",{id:"render",className:N.a.SpacedAfter,children:"Render"}),e.isRendered&&Object(a.jsx)("button",{id:"clear",className:N.a.SpacedAfter,children:"Clear"}),e.isRendered&&Object(a.jsx)(J,{isPlaying:e.isPlaying,className:N.a.SpacedAfter}),e.isRendered&&e.isPlaying&&Object(a.jsx)("button",{id:"recolor",className:N.a.SpacedAfter,children:"Recolor"}),e.isRendered&&e.isPlaying&&Object(a.jsx)("button",{id:"redirect",className:N.a.SpacedAfter,children:"Redirect"}),e.isRendered&&e.isPlaying&&Object(a.jsx)(I,{label:"Speed:",min:"-100",max:"100",value:e.speedModifier,onInput:e.onCircleSpeedChange,className:N.a.SpacedAfter}),e.isRendered&&e.isPlaying&&Object(a.jsx)(I,{label:"Size:",min:"-90",max:"90",value:e.sizeModifier,onInput:e.onCircleSizeChange,className:N.a.SpacedAfter}),e.isRendered&&e.isPlaying&&Object(a.jsx)(F,Object(P.a)({className:"spaced",label:"Brownian:",checked:e.isBrownian,onChange:e.onBrownianChange},"className",N.a.SpacedAfter))]})},K=function(e){Object(h.a)(t,e);var n=Object(b.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).state={isRendered:!1,isPlaying:!1,isBrownian:!1,speedModifier:0,sizeModifier:0,circlesCount:75,circles:[],xBound:0,yBound:0},a.interval=null,a.brownianInterval=null,a.$board=r.a.createRef(),a.handleAction=a.handleAction.bind(Object(u.a)(a)),a.handleModSize=a.handleModSize.bind(Object(u.a)(a)),a.handleModSpeed=a.handleModSpeed.bind(Object(u.a)(a)),a.handleBrownianChange=a.handleBrownianChange.bind(Object(u.a)(a)),a.handleBoardSizeChange=a.handleBoardSizeChange.bind(Object(u.a)(a)),a.handleCircleCountChange=a.handleCircleCountChange.bind(Object(u.a)(a)),a.boundsobserver=new ResizeObserver(a.handleBoardSizeChange),a}return Object(d.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:v.a.Board,children:[Object(a.jsx)(G,Object(o.a)(Object(o.a)({},this.state),{},{onAction:this.handleAction,onCircleSizeChange:this.handleModSize,onCircleSpeedChange:this.handleModSpeed,onBrownianChange:this.handleBrownianChange,onCirclesCountChange:this.handleCircleCountChange})),Object(a.jsx)("div",{className:v.a.InnerBoard,ref:this.$board,children:this.state.circles.map((function(e,n){return Object(a.jsx)(z,Object(o.a)({},e),n)}))})]})}},{key:"componentDidMount",value:function(){this.setBounds(),this.boundsobserver.observe(this.$board.current)}},{key:"setBounds",value:function(){var e=window.getComputedStyle(this.$board.current);this.setState({xBound:parseInt(e.height),yBound:parseInt(e.width)})}},{key:"setInterval",value:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=this;this.interval=setInterval((function(){e.state.isPlaying&&(B.moveCircles(e.state),e.setState({circles:e.state.circles}))}),16.666666666666668),this.brownianInterval=setInterval((function(){e.state.isPlaying&&e.state.isBrownian&&e.handleModDir()}),250)}))},{key:"handleBoardSizeChange",value:function(){this.setBounds()}},{key:"handleAction",value:function(e){e.event;switch(e.type){case"render":this.handleRender();break;case"play":this.handlePlay();break;case"pause":this.handlePause();break;case"clear":this.handleClear();break;case"recolor":this.handleModColor();break;case"redirect":this.handleModDir();break;case"brownian":this.handleBrownian()}}},{key:"handlePlay",value:function(){this.setState({isPlaying:!0})}},{key:"handlePause",value:function(){this.setState({isPlaying:!1})}},{key:"handleClear",value:function(){clearInterval(this.interval),clearInterval(this.brownianInterval),this.setState({isRendered:!1,isPlaying:!1,isBrownian:!1,speedModifier:0,sizeModifier:0,circles:[]})}},{key:"handleRender",value:function(){this.handleClear(),this.setState({isPlaying:!0,isRendered:!0,circles:B.createCircles(this.state)},this.setInterval.bind(this))}},{key:"handleBrownianChange",value:function(e){this.setState({isBrownian:!this.state.isBrownian})}},{key:"handleModDir",value:function(e){B.modCircles("modDir",void 0,this.state),this.setState({circles:this.state.circles})}},{key:"handleModSize",value:function(e){e.event;var n=e.value;B.modCircles("modSize",parseInt(n),this.state),this.setState({sizeModifier:n,circles:this.state.circles})}},{key:"handleModSpeed",value:function(e){e.event;var n=e.value;B.modCircles("modSpeed",parseInt(n),this.state),this.setState({speedModifier:n,circles:this.state.circles})}},{key:"handleModColor",value:function(){B.modCircles("modColor",void 0,this.state),this.setState({circles:this.state.circles})}},{key:"handleCircleCountChange",value:function(e){e.event;var n=e.value;this.setState({circlesCount:parseInt(n)||""})}}]),t}(i.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(K,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.50c86ed0.chunk.js.map