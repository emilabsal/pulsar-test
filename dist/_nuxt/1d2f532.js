(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4,5,6],{294:function(t,e,n){"use strict";var r=n(9),l=n(5),o=n(4),c=n(109),d=n(16),f=n(12),C=n(201),x=n(40),h=n(78),m=n(200),v=n(3),w=n(79).f,_=n(31).f,y=n(15).f,V=n(297),L=n(295).trim,N="Number",k=l.Number,I=k.prototype,H=l.TypeError,E=o("".slice),S=o("".charCodeAt),F=function(t){var e=m(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,l,o,c,d,code,f=m(t,"number");if(h(f))throw H("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=L(f),43===(e=S(f,0))||45===e){if(88===(n=S(f,2))||120===n)return NaN}else if(48===e){switch(S(f,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+f}for(c=(o=E(f,2)).length,d=0;d<c;d++)if((code=S(o,d))<48||code>l)return NaN;return parseInt(o,r)}return+f};if(c(N,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var T,M=function(t){var e=arguments.length<1?0:k(F(t)),n=this;return x(I,n)&&v((function(){V(n)}))?C(Object(e),n,M):e},A=r?w(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;A.length>j;j++)f(k,T=A[j])&&!f(M,T)&&y(M,T,_(k,T));M.prototype=I,I.constructor=M,d(l,N,M,{constructor:!0})}},295:function(t,e,n){var r=n(4),l=n(23),o=n(13),c=n(296),d=r("".replace),f="["+c+"]",C=RegExp("^"+f+f+"*"),x=RegExp(f+f+"*$"),h=function(t){return function(e){var n=o(l(e));return 1&t&&(n=d(n,C,"")),2&t&&(n=d(n,x,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},296:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},297:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},298:function(t,e,n){var r=n(2),l=n(299),o=n(132);r({target:"Array",proto:!0},{fill:l}),o("fill")},299:function(t,e,n){"use strict";var r=n(24),l=n(80),o=n(32);t.exports=function(t){for(var e=r(this),n=o(e),c=arguments.length,d=l(c>1?arguments[1]:void 0,n),f=c>2?arguments[2]:void 0,C=void 0===f?n:l(f,n);C>d;)e[d++]=t;return e}},300:function(t,e,n){"use strict";n.r(e);n(41),n(298),n(294);var r={props:{name:String,width:[String,Number],height:[String,Number],fill:String}},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return"info"===t.name?e("svg",{attrs:{width:t.width||50,height:t.height||50,viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.5 2.33984H35C42.4558 2.33984 48.5 8.384 48.5 15.8398V47.8131H15C7.54416 47.8131 1.5 41.769 1.5 34.3131V2.33984Z",stroke:t.fill||"#E02025","stroke-width":"3"}}),t._v(" "),e("g",{attrs:{"clip-path":"url(#clip0_14_822)"}},[e("path",{attrs:{d:"M30.4017 34.9586L30.0384 36.3983C28.9485 36.8153 28.078 37.1327 27.4297 37.351C26.7807 37.5699 26.0267 37.6788 25.1675 37.6788C23.8481 37.6788 22.8219 37.3654 22.09 36.7431C21.358 36.1182 20.992 35.3264 20.992 34.3658C20.992 33.994 21.0185 33.6115 21.0738 33.2218C21.1295 32.8317 21.218 32.3923 21.3392 31.9012L22.7012 27.2276C22.8224 26.7801 22.9254 26.356 23.0079 25.9551C23.0915 25.5566 23.1318 25.1899 23.1318 24.8599C23.1318 24.263 23.0044 23.8455 22.7506 23.6108C22.4968 23.3768 22.0126 23.2579 21.2937 23.2579C20.9416 23.2579 20.5798 23.3126 20.2109 23.4183C19.8404 23.5245 19.5237 23.6271 19.2578 23.7224L19.622 22.2816C20.5143 21.9294 21.3671 21.6278 22.1829 21.3775C22.9988 21.1265 23.7696 21.0009 24.4987 21.0009C25.809 21.0009 26.8201 21.3079 27.5301 21.9219C28.2401 22.5364 28.595 23.3329 28.595 24.3145C28.595 24.5176 28.5717 24.8754 28.5216 25.3869C28.4727 25.8995 28.3816 26.3691 28.2488 26.7963L26.8926 31.4512C26.7814 31.825 26.6815 32.2525 26.5945 32.7334C26.5048 33.2112 26.4619 33.5763 26.4619 33.8212C26.4619 34.4392 26.6041 34.8612 26.8891 35.0856C27.1762 35.3099 27.6706 35.4215 28.373 35.4215C28.7027 35.4215 29.0779 35.3648 29.4947 35.2534C29.9105 35.142 30.2136 35.0442 30.4017 34.9586ZM30.7456 15.4162C30.7456 16.2272 30.4303 16.9199 29.7967 17.4894C29.1648 18.0609 28.4033 18.3469 27.5124 18.3469C26.6188 18.3469 25.8554 18.0609 25.2162 17.4894C24.5782 16.9197 24.2585 16.2272 24.2585 15.4162C24.2585 14.6068 24.5782 13.913 25.2162 13.3363C25.8542 12.7605 26.619 12.4727 27.5124 12.4727C28.403 12.4727 29.1648 12.7611 29.7967 13.3363C30.4308 13.913 30.7456 14.607 30.7456 15.4162Z",fill:t.fill||"#E02025"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_14_822"}},[e("rect",{attrs:{width:"26",height:"25.2061",fill:"white",transform:"translate(12 12.4727)"}})])])]):"money"===t.name?e("svg",{attrs:{width:t.width||70,height:t.height||71,viewBox:"0 0 70 71",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M2 2.91602H55C62.1797 2.91602 68 8.73631 68 15.916V68.916H15C7.8203 68.916 2 63.0957 2 55.916V2.91602Z",stroke:t.fill||"#0F4471","stroke-width":"4"}}),t._v(" "),e("path",{attrs:{d:"M26.704 25.4733C26.7535 25.6314 26.7381 25.8028 26.6613 25.9497C26.5845 26.0965 26.4525 26.2069 26.2943 26.2564L25.1016 26.6298L27.5005 34.2947V23.9136L26.3305 24.2798L26.704 25.4733Z",fill:t.fill||"#0F4471"}}),t._v(" "),e("path",{attrs:{d:"M39.7023 52.166H32.5C32.3342 52.166 32.1753 52.1002 32.0581 51.983C31.9408 51.8657 31.875 51.7068 31.875 51.541V50.291H30.625C30.4592 50.291 30.3003 50.2252 30.1831 50.108C30.0658 49.9907 30 49.8318 30 49.666V22.166C30 22.0003 30.0658 21.8413 30.1831 21.7241C30.3003 21.6069 30.4592 21.541 30.625 21.541H31.875V20.291C31.875 20.1253 31.9408 19.9663 32.0581 19.8491C32.1753 19.7319 32.3342 19.666 32.5 19.666H40C40.1658 19.666 40.3247 19.7319 40.4419 19.8491C40.5592 19.9663 40.625 20.1253 40.625 20.291V21.541H41.875C42.0408 21.541 42.1997 21.6069 42.3169 21.7241C42.4342 21.8413 42.5 22.0003 42.5 22.166V42.9739L42.8195 43.416H43.75V18.416H28.75V53.416H41.0542C40.55 53.0613 40.0953 52.6409 39.7023 52.166Z",fill:t.fill||"#0F4471"}}),t._v(" "),e("path",{attrs:{d:"M27.502 42.6656V38.4795L23.7235 26.4067C23.699 26.3284 23.6901 26.246 23.6974 26.1642C23.7048 26.0825 23.7281 26.003 23.7662 25.9302C23.8042 25.8575 23.8562 25.793 23.9192 25.7403C23.9821 25.6877 24.0549 25.648 24.1332 25.6235L25.3259 25.2501L24.9524 24.0567C24.9029 23.8985 24.9183 23.7271 24.9951 23.5803C25.072 23.4334 25.204 23.3231 25.3622 23.2736L27.502 22.6036V21.2939L21.4102 23.2008L27.502 42.6656Z",fill:t.fill||"#0F4471"}}),t._v(" "),e("path",{attrs:{d:"M39.3633 38.6329L41.25 41.2441V22.791H40C39.8342 22.791 39.6753 22.7252 39.5581 22.608C39.4408 22.4907 39.375 22.3318 39.375 22.166V20.916H33.125V22.166C33.125 22.3318 33.0592 22.4907 32.9419 22.608C32.8247 22.7252 32.6658 22.791 32.5 22.791H31.25V49.041H32.5C32.6658 49.041 32.8247 49.1069 32.9419 49.2241C33.0592 49.3413 33.125 49.5003 33.125 49.666V50.916H38.878C38.4091 50.002 38.1525 48.994 38.1272 47.9671L34.1904 42.1405C33.8738 41.6708 33.6905 41.124 33.6599 40.5584C33.6293 39.9928 33.7526 39.4294 34.0166 38.9283C33.4126 38.481 32.9569 37.8626 32.7085 37.1533C32.4602 36.4439 32.4306 35.6763 32.6238 34.95C32.8169 34.2236 33.2237 33.572 33.7915 33.0797C34.3594 32.5873 35.062 32.2769 35.8084 32.1886C36.5548 32.1004 37.3105 32.2383 37.9775 32.5847C38.6445 32.931 39.1921 33.4697 39.5493 34.131C39.9065 34.7923 40.0568 35.5456 39.9808 36.2933C39.9047 37.041 39.6058 37.7486 39.1228 38.3245C39.2093 38.4222 39.2896 38.5252 39.3633 38.6329Z",fill:t.fill||"#0F4471"}}),t._v(" "),e("path",{attrs:{d:"M44.9982 31.541V44.041C44.9982 44.2068 44.9323 44.3657 44.8151 44.483C44.6979 44.6002 44.539 44.666 44.3732 44.666H42.4982C42.3993 44.666 42.3018 44.6425 42.2137 44.5975C42.1257 44.5525 42.0496 44.4873 41.9916 44.4071L38.3428 39.3574C38.339 39.3521 38.335 39.3467 38.3315 39.3413C38.1955 39.1331 38.0194 38.9541 37.8135 38.8146C37.6076 38.6751 37.3761 38.5779 37.1323 38.5288C36.8885 38.4796 36.6374 38.4794 36.3935 38.5283C36.1497 38.5771 35.918 38.674 35.7119 38.8132C35.5059 38.9525 35.3296 39.1313 35.1933 39.3393C35.057 39.5474 34.9635 39.7804 34.9181 40.025C34.8728 40.2695 34.8766 40.5206 34.9292 40.7636C34.9818 41.0067 35.0823 41.2368 35.2247 41.4407L39.279 47.4411C39.3717 47.5783 39.4062 47.7467 39.3748 47.9094C39.4075 49.3798 40.014 50.7791 41.0649 51.8081C42.1157 52.8371 43.5274 53.4142 44.9982 53.416H48.7482V39.041C48.7479 38.7333 48.6722 38.4303 48.5277 38.1587L44.9982 31.541Z",fill:t.fill||"#0F4471"}}),t._v(" "),e("path",{attrs:{d:"M33.75 35.9159C33.75 36.3174 33.8467 36.713 34.032 37.0691C34.2174 37.4252 34.4858 37.7315 34.8146 37.9618C34.884 37.9059 34.9552 37.852 35.0302 37.8016C35.4811 37.4974 36.0036 37.3161 36.546 37.2757C37.0884 37.2352 37.6319 37.337 38.123 37.5709C38.391 37.2678 38.5814 36.9041 38.6779 36.5111C38.7744 36.1181 38.774 35.7075 38.6768 35.3147C38.5797 34.9219 38.3886 34.5585 38.12 34.2558C37.8514 33.9531 37.5134 33.7201 37.1349 33.5769C36.7564 33.4337 36.3488 33.3844 35.9471 33.4335C35.5455 33.4825 35.1617 33.6283 34.8288 33.8583C34.4958 34.0884 34.2237 34.3958 34.0358 34.7542C33.8479 35.1126 33.7499 35.5113 33.75 35.9159Z",fill:t.fill||"#0F4471"}})]):t._e()}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,n){"use strict";n.r(e);n(294);var r={props:{text:String,icon:String,iconWidth:[String,Number],iconHeight:[String,Number],iconFill:String}},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-[16px] py-[36px] px-[31px] bg-blue-background xs:items-center flex gap-[33px] xs:flex-row flex-col items-start"},[e("ui-icon",{staticClass:"shrink-0",attrs:{name:t.icon,width:t.iconWidth,height:t.iconHeight,fill:t.iconFill}}),t._v(" "),e("p",{staticClass:"text-[24px] font-bold leading-[140%] text-blue"},[t._v(t._s(t.text))])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiIcon:n(300).default})},302:function(t,e,n){"use strict";n.r(e);var r={props:{disabled:{type:Boolean,default:!1},type:String,label:String,placeholder:String}},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("label",{staticClass:"block"},[e("span",{staticClass:"text-blue-dark text-[16px] font-medium leading-[19px] mb-[14px] block"},[t._v(t._s(t.label))]),t._v(" "),e("input",{staticClass:"font-main text-[14px] leading-[28px] text-blue placeholder:text-blue-light outline-none w-full border border-solid border-gray-border rounded-[5px] p-[20px] focus:border-blue-light",attrs:{disabled:t.disabled,type:t.type||"text",placeholder:t.placeholder},on:{input:function(e){return t.$emit("input-event",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},303:function(t,e,n){"use strict";var r=n(2),l=n(295).trim;r({target:"String",proto:!0,forced:n(304)("trim")},{trim:function(){return l(this)}})},304:function(t,e,n){var r=n(81).PROPER,l=n(3),o=n(296);t.exports=function(t){return l((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||r&&o[t].name!==t}))}},305:function(t,e,n){"use strict";var r=n(2),l=n(82).find,o=n(132),c="find",d=!0;c in[]&&Array(1).find((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),o(c)},307:function(t,e,n){"use strict";n.r(e);var r=n(10),l=(n(303),n(305),n(17),n(47),{data:function(){return{disabled:!1,code1:"",code2:"",nominal:"",curr1:"",curr1Value:"",curr2:"",curr2Value:"",quantity:0,total:"..."}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.valute){e.next=5;break}return t.disabled=!0,e.next=4,t.$store.dispatch("getValute").then((function(){t.disabled=!1})).catch((function(t){console.log(t)}));case 4:t.mountains=e.sent;case 5:case"end":return e.stop()}}),e)})))()},computed:{valute:function(){return this.$store.getters.valute}},methods:{onCurrOne:function(t){var e=this;this.curr1=t.trim(),this.code1=this.valute.find((function(t){return t.CharCode.toLowerCase()===e.curr1.toLowerCase()})),this.code1&&(this.curr1Value=this.code1.Value,this.nominal=this.code1.Nominal),this.countTotal()},onCurrTwo:function(t){var e=this;this.curr2=t.trim(),this.code2=this.valute.find((function(t){return t.CharCode.toLowerCase()===e.curr2.toLowerCase()})),this.code2&&(this.curr2Value=this.code2.Value),this.countTotal()},onQuantity:function(t){this.quantity=t,this.countTotal()},countTotal:function(){this.code1&&this.code2&&0!==this.quantity&&this.quantity?this.total=this.quantity*this.curr1Value/this.curr2Value/this.nominal:this.total="..."}}}),o=n(30),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("form",[e("ui-input",{staticClass:"mb-[31px]",attrs:{disabled:t.disabled,label:"Валюта 1",placeholder:"Введите код"},on:{"input-event":t.onCurrOne}}),t._v(" "),e("ui-input",{staticClass:"mb-[31px]",attrs:{disabled:t.disabled,label:"Валюта 2",placeholder:"Введите код"},on:{"input-event":t.onCurrTwo}}),t._v(" "),e("ui-input",{staticClass:"mb-[31px]",attrs:{disabled:t.disabled,label:"Количество",placeholder:"Введите число",type:"number"},on:{"input-event":t.onQuantity}}),t._v(" "),e("the-info",{attrs:{text:"Итого: ".concat(t.total),icon:"info"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiInput:n(302).default,TheInfo:n(301).default})},308:function(t,e,n){var map={"./window1.png":309,"./window2.png":310,"./window3.png":311,"./window4.png":312};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=308},309:function(t,e,n){t.exports=n.p+"img/window1.3f0fb32.png"},310:function(t,e,n){t.exports=n.p+"img/window2.2f22b47.png"},311:function(t,e,n){t.exports=n.p+"img/window3.f33b37d.png"},312:function(t,e,n){t.exports=n.p+"img/window4.b26f931.png"},314:function(t,e,n){"use strict";n.r(e);var r={name:"IndexPage",data:function(){return{list:["incididunt ut labore et dolore magna aliqua","incididunt ut labore et","incididunt ut labore et dolore","labore et dolore","incididunt ut","incididunt ut labore et dolore","incididunt ut labore"],images:["1.png","2.png","3.png","4.png"]}}},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"container mx-auto mt-[30px]"},[e("h1",{staticClass:"text-blue mb-[40px] text-[34px] font-medium leading-[40px]"},[t._v("\n    Валютный калькулятор\n  ")]),t._v(" "),e("div",{staticClass:"flex items-start gap-[36px] sm:flex-row flex-col"},[e("the-form",{staticClass:"sm:basis-1/2 basis-full w-full"}),t._v(" "),e("div",{staticClass:"basis-1/2 row-span-2 px-[30px] py-[39px] bg-blue-background border border-solid border-blue-background rounded-[16px]"},[e("h2",{staticClass:"text-blue text-[18px] leading-[24px] font-medium uppercase mb-[51px]"},[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n        eiusmod tempor:\n      ")]),t._v(" "),e("div",{staticClass:"flex gap-[30px] items-start sm:flex-row flex-col"},[e("ul",{staticClass:"pl-[20px]"},t._l(t.list,(function(n,r){return e("li",{key:r,staticClass:"text-gray-list text-[18px] leading-[20px] mb-[30px] list-item"},[t._v("\n            "+t._s(n)+"\n          ")])})),0),t._v(" "),e("div",{staticClass:"sm:grid md:grid-cols-2 sm:grid-cols-1 gap-x-[15px] gap-y-[9px] max-w-[307px] sm:w-full w-auto flex"},t._l(t.images,(function(img,t){return e("img",{key:t,staticClass:"rounded-bl-[30px] rounded-tr-[30px] md:rounded-none sm:w-full xs:w-[25%] w-[20%]",attrs:{src:n(308)("./window".concat(img)),alt:"img"}})})),0)])])],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex px-[51px] py-[65px] bg-blue-background mt-[40px] rounded-[16px] justify-between items-center gap-[50px] mb-[136px] md:flex-row flex-col"},[e("div",{staticClass:"max-w-[750px]"},[e("p",{staticClass:"text-blue xs:text-[36px] text-[30px] leading-[46px] mb-[20px] font-medium sm:text-left text-center"},[t._v("\n        Нужна помощь?\n        "),e("span",{staticClass:"block"},[t._v("Мы поможем! Просто свяжитесь с нами.")])]),t._v(" "),e("p",{staticClass:"text-gray-list text-[16px] leading-[24px] sm:text-left text-center"},[t._v("\n        Наши специалисты с радостью ответят на все ваши вопросы и дадут\n        профессиональную консультацию по товарам.\n      ")])]),t._v(" "),e("div",{staticClass:"flex flex-col items-center justify-center"},[e("a",{staticClass:"text-blue font-medium xs:text-[50px] leading-[46px] whitespace-nowrap text-[24px]",attrs:{href:"tel:88008889028"}},[t._v("8 (800) 888-90-28")]),t._v(" "),e("span",{staticClass:"text-gray-list text-[24px] leading-[28px] mt-[20px]"},[t._v("или")]),t._v(" "),e("a",{staticClass:"text-blue xs:text-[34px] leading-[40px] mt-[10px] text-[20px]",attrs:{href:"mailto:info@example.ru"}},[t._v("info@example.ru")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TheForm:n(307).default})}}]);