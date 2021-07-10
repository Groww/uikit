(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{173:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),b=(a(0),a(198)),c={id:"input",title:"Input",sidebar_label:"Input"},i={id:"input",isDocsHomePage:!1,title:"Input",description:"Input helps you to take inputs from a user,by using TextInput api from react native,with slight modification in the ui from groww design guidelines,but you can control how you want to make it look,by passing some additional props to it.",source:"@site/docs/input.md",permalink:"/frontatish/docs/input",editUrl:"https://github.com/Groww/frontatish/edit/alpha/docs/documentation/docs/input.md",sidebar_label:"Input",sidebar:"someSidebar",previous:{title:"Dropdown",permalink:"/frontatish/docs/dropdown"},next:{title:"Searchbar",permalink:"/frontatish/docs/searchbar"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"label",id:"label",children:[]},{value:"error",id:"error",children:[]},{value:"disabled",id:"disabled",children:[]},{value:"labelStyle",id:"labelstyle",children:[]},{value:"inputTextStyle",id:"inputtextstyle",children:[]},{value:"disabledTextStyle",id:"disabledtextstyle",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"bottomBorderStyle",id:"bottomborderstyle",children:[]}]}],o={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Input helps you to take inputs from a user,by using ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:""}),"TextInput")," api from react native,with slight modification in the ui from groww design guidelines,but you can control how you want to make it look,by passing some additional props to it."),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"Input component supports all the props supported by TextInput along with it takes some additional props"))),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import { Input } from \'frontatish\';\n\n<Input\n  label="Name (As on PAN Card)"\n  placeholder="CMBPR3476M"\n  error="Your name is lame. Get a better one."\n/>;\n')),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"label"},"label"),Object(b.b)("p",null,"The tilte of your input field,which will be a string."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"None ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"error"},"error"),Object(b.b)("p",null,"The error message you want to show,once error gets occured"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"None ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"disabled"},"disabled"),Object(b.b)("p",null,"boolean value to be passed,if you want to disable the input."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"None ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"labelstyle"},"labelStyle"),Object(b.b)("p",null,"TextStyle object to style your input label"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"TextStyle ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"None ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"inputtextstyle"},"inputTextStyle"),Object(b.b)("p",null,"TextStyle object to style the text of input value same as ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#labelstyle"}),"labelStyle")),Object(b.b)("h3",{id:"disabledtextstyle"},"disabledTextStyle"),Object(b.b)("p",null,"TextStyle object to style the text of input value,when its in disabled state same as ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#labelstyle"}),"labelStyle")),Object(b.b)("h3",{id:"containerstyle"},"containerStyle"),Object(b.b)("p",null,"ViewStyle object to style the parent container,which contains the whole TextInput and error messages."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ViewStyle ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"None ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"bottomborderstyle"},"bottomBorderStyle"),Object(b.b)("p",null,"ViewStyle object to style the underline of your TextInput,same as ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#containerstyle"}),"containerStyle")))}p.isMDXComponent=!0},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=p(a),j=n,s=d["".concat(c,".").concat(j)]||d[j]||O[j]||b;return a?r.a.createElement(s,i(i({ref:t},o),{},{components:a})):r.a.createElement(s,i({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);