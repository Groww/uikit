(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(2),b=(a(0),a(155));const r={id:"table",title:"Table",sidebar_label:"Table"},c={id:"table",isDocsHomePage:!1,title:"Table",description:"Table is used to display the data in tabular format with optional toggle feature in the right hand side to toggle between the values if you want to show more than two columns,so that you don't need to make it horizontal scrollable due to lack of space",source:"@site/docs/table.md",permalink:"/viserion/docs/table",editUrl:"https://github.com/Groww/viserion/edit/alpha/docs/documentation/docs/table.md",sidebar_label:"Table",sidebar:"someSidebar",previous:{title:"RadioButton",permalink:"/viserion/docs/radiobutton"},next:{title:"EmptyView",permalink:"/viserion/docs/emptyview"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"data",id:"data",children:[]},{value:"leftKey",id:"leftkey",children:[]},{value:"customLeftItemComponents",id:"customleftitemcomponents",children:[]},{value:"title",id:"title",children:[]},{value:"option",id:"option",children:[]},{value:"customRightItemComponents",id:"customrightitemcomponents",children:[]},{value:"optionLabel",id:"optionlabel",children:[]},{value:"flatlistkey",id:"flatlistkey",children:[]},{value:"leftItemContainerStyle",id:"leftitemcontainerstyle",children:[]},{value:"leftKeyOnPress",id:"leftkeyonpress",children:[]},{value:"rightItemContainerStyle",id:"rightitemcontainerstyle",children:[]},{value:"rightKeyOnPress",id:"rightkeyonpress",children:[]}]}],o={rightToc:i};function l({components:e,...t}){return Object(b.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Table is used to display the data in tabular format with optional toggle feature in the right hand side to toggle between the values if you want to show more than two columns,so that you don't need to make it horizontal scrollable due to lack of space"),Object(b.b)("div",{className:"image-horizontal-preview"},Object(b.b)("figure",null,Object(b.b)("img",{src:"/viserion/img/table.png",alt:"checkbox",width:"300"}))),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"\nimport { Table } from 'viserion';\n\n// key should be exactly the same as option keys\n// so that it can be correctly mapped\nconst customRightItemComponents = { marketPrice: <View />};\nreturn (\n  <View style={{ flex: 1, marginHorizontal: 20 }}>\n    <Text style={[Fonts.style.h4, { color: Colors.BLACK }]}>\n      Table Example\n    </Text>\n    <Table\n      data={[array of objects]}\n      title=\"Name\"\n      option={['marketPrice', 'holding', 'industryName']}\n      optionLabel={['Market Price', 'Holding', 'Sector']}\n      leftKey=\"companyName\"\n      flatlistKey=\"isin\"\n      customRightItemComponents={customRightItemComponents}\n    />\n  </View>\n);\n};\n\n")),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"data"},"data"),Object(b.b)("p",null,"An array of objects which contents all the info that needed to be displayed"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"objects[] ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"leftkey"},"leftKey"),Object(b.b)("p",null,"The key from data object(single item from the data array) which you want to display in the left side of the table."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"customleftitemcomponents"},"customLeftItemComponents"),Object(b.b)("p",null,"You can override the left item's ui by passing a custom component in an object whose ",Object(b.b)("inlineCode",{parentName:"p"},"key")," must be equal to the ",Object(b.b)("inlineCode",{parentName:"p"},"leftKey"),", so that it can get correctly mapped in the ui"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"title"},"title"),Object(b.b)("p",null,"Title of the table which appears on the top left of the table"),Object(b.b)("h3",{id:"option"},"option"),Object(b.b)("p",null,"Option is a single string or array of string,that string should exactly be same as ",Object(b.b)("inlineCode",{parentName:"p"},"key")," of that data object,which you want to display in the table,so be careful and cross check the ",Object(b.b)("inlineCode",{parentName:"p"},"dto")," before you pass the option."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string or string[] ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"customrightitemcomponents"},"customRightItemComponents"),Object(b.b)("p",null,"You can override the right item's ui by passing a custom component in an object whose ",Object(b.b)("inlineCode",{parentName:"p"},"key")," must be one of the option key which has been passed in ",Object(b.b)("inlineCode",{parentName:"p"},"option"),", so that it can get correctly mapped in the ui, for better clarity you can checkout the example above. or ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Groww/super/blob/master/src/examples/TableExample.tsx"}),"go through this example")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"optionlabel"},"optionLabel"),Object(b.b)("p",null,"Option label is the label for ",Object(b.b)("inlineCode",{parentName:"p"},"option key")," you provided in ",Object(b.b)("inlineCode",{parentName:"p"},"option")," props to show the label in the ui,if you will not provide it,it will show option as a label in the top right side of the table. if your ",Object(b.b)("inlineCode",{parentName:"p"},"option")," props is array of strings then make sure you should pass the ",Object(b.b)("inlineCode",{parentName:"p"},"optionLabel")," array in same order as ",Object(b.b)("inlineCode",{parentName:"p"},"option")," props."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string or string[] ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"flatlistkey"},"flatlistkey"),Object(b.b)("p",null,"This is the key from your data object to set the ",Object(b.b)("inlineCode",{parentName:"p"},"key")," parameter in Table component,since we are looping in the array to get a single data object"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"leftitemcontainerstyle"},"leftItemContainerStyle"),Object(b.b)("p",null,"To give the custom style to the container of the left item in the table"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ViewStyle ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"leftkeyonpress"},"leftKeyOnPress"),Object(b.b)("p",null,"Callback function to be called once user clicks on left item in the table"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"rightitemcontainerstyle"},"rightItemContainerStyle"),Object(b.b)("p",null,"To give the custom style to the container of the left item in the table"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ViewStyle ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"rightkeyonpress"},"rightKeyOnPress"),Object(b.b)("p",null,"Callback function to be called once user clicks on left item in the table"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))))}l.isMDXComponent=!0},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),p=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=p(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),O=p(a),m=n,d=O["".concat(c,".").concat(m)]||O[m]||j[m]||r;return a?b.a.createElement(d,i(i({ref:t},l),{},{components:a})):b.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<r;l++)c[l]=a[l];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);