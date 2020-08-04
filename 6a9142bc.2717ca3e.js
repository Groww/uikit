(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(2),b=(a(0),a(155));const r={id:"radiobutton",title:"RadioButton",sidebar_label:"RadioButton"},c={id:"radiobutton",isDocsHomePage:!1,title:"RadioButton",description:"Radio buttons helps to implement selection between multiple options, on the low level it uses TouchableOpacity of React-Native",source:"@site/docs/radiobutton.md",permalink:"/viserion/docs/radiobutton",editUrl:"https://github.com/Groww/viserion/edit/alpha/docs/documentation/docs/radiobutton.md",sidebar_label:"RadioButton",sidebar:"someSidebar",previous:{title:"NumPad",permalink:"/viserion/docs/numpad"},next:{title:"Table",permalink:"/viserion/docs/table"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"value",id:"value",children:[]},{value:"selected",id:"selected",children:[]},{value:"onPress",id:"onpress",children:[]},{value:"size",id:"size",children:[]},{value:"disabled",id:"disabled",children:[]},{value:"disabledStyle",id:"disabledstyle",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"labelStyle",id:"labelstyle",children:[]}]}],l={rightToc:i};function o({components:e,...t}){return Object(b.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Radio buttons helps to implement selection between multiple options, on the low level it uses ",Object(b.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," of React-Native"),Object(b.b)("div",{className:"image-horizontal-preview"},Object(b.b)("figure",null,Object(b.b)("img",{src:"/viserion/img/radio_1.png",alt:"checkbox",width:"250"})),Object(b.b)("figure",null,Object(b.b)("img",{src:"/viserion/img/radio_2.png",alt:"checkbox",width:"250"}))),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { RadioButton } from 'viserion';\n\n<RadioButton\n  value=\"selected\"\n  onPress={() => void}\n  selected={true}\n/>;\n")),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"value"},"value"),Object(b.b)("p",null,"The value of radio button"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"None ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"selected"},"selected"),Object(b.b)("p",null,"Flag which helps to mark radio button selected or not"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"onpress"},"onPress"),Object(b.b)("p",null,"Callback function which sets the selected value in the parent state"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"None",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"size"},"size"),Object(b.b)("p",null,"you can control the size of the checkbox and the icon inside by using this props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"enum('sm', 'md', 'lg') ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'sm' ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"disabled"},"disabled"),Object(b.b)("p",null,"Flag to decide whether to disable the press on radio button or not"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"disabledstyle"},"disabledStyle"),Object(b.b)("p",null,"Coming soon!!"),Object(b.b)("h3",{id:"containerstyle"},"containerStyle"),Object(b.b)("p",null,"A react native View style object which gives flexibility to alter the styles of radio-button container"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ViewStyle ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"labelstyle"},"labelStyle"),Object(b.b)("p",null,"A react native Text style object which gives flexibility to alter the styles of label of the radio-button"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"TextStyle ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))))}o.isMDXComponent=!0},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),O=d(a),p=n,m=O["".concat(c,".").concat(p)]||O[p]||j[p]||r;return a?b.a.createElement(m,i(i({ref:t},o),{},{components:a})):b.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<r;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);