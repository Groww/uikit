(window.webpackJsonp=window.webpackJsonp||[]).push([[10,60],{195:function(e,t,a){"use strict";a.r(t);a(30),a(20),a(21),a(55),a(247);var n=a(0),i=a.n(n),r=a(198),l=a(199),c=a(67),o=a(203),s=a(2),u=a(9),m=(a(251),a(201)),d=a(217),b=a(225),f=a(226),v=a(227),h=a(224),p=a(200),k=a(206),E=a(142),g=a.n(E);var O=function e(t,a){return"link"===t.type?(n=t.href,i=a,(r=function(e){return e.endsWith("/")?e:e+"/"})(n)===r(i)):"category"===t.type&&t.items.some((function(t){return e(t,a)}));var n,i,r};function j(e){var t,a,r,l=e.item,c=e.onItemClick,o=e.collapsible,d=e.activePath,b=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),f=l.items,v=l.label,h=O(l,d),p=(a=h,r=Object(n.useRef)(a),Object(n.useEffect)((function(){r.current=a}),[a]),r.current),k=Object(n.useState)((function(){return!!o&&(!h&&l.collapsed)})),E=k[0],j=k[1];Object(n.useEffect)((function(){h&&!p&&E&&j(!1)}),[h,p,E]);var C=Object(n.useCallback)((function(e){e.preventDefault(),j((function(e){return!e}))}),[j]);return 0===f.length?null:i.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":E}),key:v},i.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&h},t[g.a.menuLinkText]=!o,t)),onClick:o?C:void 0,href:o?"#!":void 0},b),v),i.a.createElement("ul",{className:"menu__list"},f.map((function(e){return i.a.createElement(_,{tabIndex:E?"-1":"0",key:e.label,item:e,onItemClick:c,collapsible:o,activePath:d})}))))}function C(e){var t=e.item,a=e.onItemClick,n=e.activePath,r=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=t.href,c=t.label,o=O(t,n);return i.a.createElement("li",{className:"menu__list-item",key:c},i.a.createElement(p.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:l},Object(k.a)(l)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},r),c))}function _(e){switch(e.item.type){case"category":return i.a.createElement(j,e);case"link":default:return i.a.createElement(C,e)}}var w=function(e){var t,a,r=Object(n.useState)(!1),c=r[0],o=r[1],u=Object(l.a)(),k=u.siteConfig,E=(k=void 0===k?{}:k).themeConfig.navbar,O=(E=void 0===E?{}:E).title,j=E.hideOnScroll,C=void 0!==j&&j,w=u.isClient,y=Object(v.a)(),N=y.logoLink,M=y.logoLinkProps,P=y.logoImageUrl,I=y.logoAlt,x=Object(d.a)().isAnnouncementBarClosed,S=Object(h.a)().scrollY,W=e.docsSidebars,A=e.path,L=e.sidebar,F=e.sidebarCollapsible;Object(b.a)(c);var B=Object(f.a)();if(Object(n.useEffect)((function(){B===f.b.desktop&&o(!1)}),[B]),!L)return null;var J=W[L];if(!J)throw new Error('Cannot find the sidebar "'+L+'" in the sidebar config!');return i.a.createElement("div",{className:Object(m.a)(g.a.sidebar,(t={},t[g.a.sidebarWithHideableNavbar]=C,t))},C&&i.a.createElement(p.a,Object(s.a)({tabIndex:"-1",className:g.a.sidebarLogo,to:N},M),null!=P&&i.a.createElement("img",{key:w,src:P,alt:I}),null!=O&&i.a.createElement("strong",null,O)),i.a.createElement("div",{className:Object(m.a)("menu","menu--responsive",g.a.menu,(a={"menu--show":c},a[g.a.menuWithAnnouncementBar]=!x&&0===S,a))},i.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){o(!c)}},c?i.a.createElement("span",{className:Object(m.a)(g.a.sidebarMenuIcon,g.a.sidebarMenuCloseIcon)},"\xd7"):i.a.createElement("svg",{"aria-label":"Menu",className:g.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},i.a.createElement("title",null,"Menu"),i.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),i.a.createElement("ul",{className:"menu__list"},J.map((function(e){return i.a.createElement(_,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),o(!1)},collapsible:F,activePath:A})})))))},y=a(207),N=a(214),M=a(223),P=a(147),I=a.n(P);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,s=t.routes.find((function(e){return Object(M.a)(n.pathname,e)}))||{},u=a.permalinkToSidebar,m=a.docsSidebars,d=a.version,b=u[s.path],f=Object(l.a)(),v=f.siteConfig,h=(v=void 0===v?{}:v).themeConfig,p=void 0===h?{}:h,k=f.isClient,E=p.sidebarCollapsible,g=void 0===E||E;return 0===Object.keys(s).length?i.a.createElement(N.default,e):i.a.createElement(o.a,{version:d,key:k},i.a.createElement("div",{className:I.a.docPage},b&&i.a.createElement("div",{className:I.a.docSidebarContainer,role:"complementary"},i.a.createElement(w,{docsSidebars:m,path:s.path,sidebar:b,sidebarCollapsible:g})),i.a.createElement("main",{className:I.a.docMainContainer},i.a.createElement(r.a,{components:y.a},Object(c.a)(t.routes)))))}},214:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(203);t.default=function(){return i.a.createElement(r.a,{title:"Page Not Found"},i.a.createElement("div",{className:"container margin-vert--xl"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--6 col--offset-3"},i.a.createElement("h1",{className:"hero__title"},"Page Not Found"),i.a.createElement("p",null,"We could not find what you were looking for."),i.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},247:function(e,t,a){"use strict";var n=a(12),i=a(248)(5),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n(n.P+n.F*r,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(80)("find")},248:function(e,t,a){var n=a(29),i=a(58),r=a(28),l=a(25),c=a(249);e.exports=function(e,t){var a=1==e,o=2==e,s=3==e,u=4==e,m=6==e,d=5==e||m,b=t||c;return function(t,c,f){for(var v,h,p=r(t),k=i(p),E=n(c,f,3),g=l(k.length),O=0,j=a?b(t,g):o?b(t,0):void 0;g>O;O++)if((d||O in k)&&(h=E(v=k[O],O,p),e))if(a)j[O]=h;else if(h)switch(e){case 3:return!0;case 5:return v;case 6:return O;case 2:j.push(v)}else if(u)return!1;return m?-1:s||u?u:j}}},249:function(e,t,a){var n=a(250);e.exports=function(e,t){return new(n(e))(t)}},250:function(e,t,a){var n=a(13),i=a(221),r=a(3)("species");e.exports=function(e){var t;return i(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!i(t.prototype)||(t=void 0),n(t)&&null===(t=t[r])&&(t=void 0)),void 0===t?Array:t}},251:function(e,t,a){"use strict";var n=a(12),i=a(25),r=a(209),l="".endsWith;n(n.P+n.F*a(210)("endsWith"),"String",{endsWith:function(e){var t=r(this,e,"endsWith"),a=arguments.length>1?arguments[1]:void 0,n=i(t.length),c=void 0===a?n:Math.min(i(a),n),o=String(e);return l?l.call(t,o,c):t.slice(c-o.length,c)===o}})}}]);