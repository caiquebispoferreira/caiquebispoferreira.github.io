(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d8caaab"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("fe6c"),s=i("58df");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(s["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"3c93":function(t,e,i){},"40dc":function(t,e,i){"use strict";i("a9e3"),i("b680"),i("c7cd");var n=i("5530"),s=(i("8b0d"),i("71d9"));function o(t,e){var i=e.value,n=e.options||{passive:!0},s=e.arg?document.querySelector(e.arg):window;s&&(s.addEventListener("scroll",i,n),t._onScroll={callback:i,options:n,target:s})}function a(t){if(t._onScroll){var e=t._onScroll,i=e.callback,n=e.options,s=e.target;s.removeEventListener("scroll",i,n),delete t._onScroll}}var r={inserted:o,unbind:a},c=r,l=i("3a66"),h=i("d9bd"),u=i("a026"),d=u["a"].extend({name:"scrollable",directives:{Scroll:r},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(h["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),p=i("d10f"),v=i("f2e7"),f=i("80d2"),m=i("58df"),g=Object(m["a"])(s["a"],d,p["a"],v["a"],Object(l["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=g.extend({name:"v-app-bar",directives:{Scroll:c},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return d.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(n["a"])({},s["a"].options.computed.classes.call(this),{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return s["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,i=t,n=i-e,o=n/this.computedScrollThreshold,a=this.currentScroll*o;return Math.max(e,i-a)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=s["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:s["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return s["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(n["a"])({},s["a"].options.computed.styles.call(this),{fontSize:Object(f["g"])(this.computedFontSize,"rem"),marginTop:Object(f["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(f["g"])(this.computedTransform),")"),left:Object(f["g"])(this.computedLeft),right:Object(f["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=s["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=s["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},7958:function(t,e,i){},"8b0d":function(t,e,i){},a75b:function(t,e,i){"use strict";i("daaf");var n=i("d10f");e["a"]=n["a"].extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,n=t.right,s=t.footer,o=t.insetFooter,a=t.bottom,r=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(s+o+a,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var e={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,e,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}})},c3f0:function(t,e,i){"use strict";i("4160"),i("159b");var n=i("80d2"),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,o=.5,a=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<o*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<o*Math.abs(t.offsetY)&&(t.up&&s<n-a&&t.up(t),t.down&&s>n+a&&t.down(t))};function o(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function r(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return o(t,e)},touchend:function(t){return a(t,e)},touchmove:function(t){return r(t,e)}}}function l(t,e,i){var s=e.value,o=s.parent?t.parentElement:t,a=s.options||{passive:!0};if(o){var r=c(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[i.context._uid]=r,Object(n["w"])(r).forEach((function(t){o.addEventListener(t,r[t],a)}))}}function h(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var o=s._touchHandlers[i.context._uid];Object(n["w"])(o).forEach((function(t){s.removeEventListener(t,o[t])})),delete s._touchHandlers[i.context._uid]}}var u={inserted:l,unbind:h};e["a"]=u},ca71:function(t,e,i){},d10f:function(t,e,i){"use strict";var n=i("a026");e["a"]=n["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},d178:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",[i("v-snackbar",{attrs:{timeout:4e3,top:!0,color:"success"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[i("span",[t._v("Awesome! You added a new project")]),i("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),i("v-app-bar",{attrs:{app:"",flat:""}},[i("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"text grey--text"},[i("Logo",{attrs:{branchName:this.currentUser.branch.name,environment:this.currentUser.module.description}})],1),i("v-spacer"),i("v-btn",{attrs:{small:"",text:""},on:{click:t.toggleTheme}},[i("v-icon",{attrs:{centered:""}},[t._v("lightbulb")])],1),i("NotificationBar"),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{text:"",small:"",color:"grey"}},n),[i("v-icon",{attrs:{centered:""}},[t._v("settings")])],1)]}}])},[i("v-list",t._l(t.links,(function(e){return i("v-list-item",{key:e.text,attrs:{router:"",to:""+e.router}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"font-weight-light"},[t._v(t._s(e.text))])],1)],1)})),1)],1),i("v-btn",{attrs:{text:"",small:"",color:"grey"}},[i("v-icon",[t._v("exit_to_app")])],1)],1),i("v-navigation-drawer",{attrs:{app:"",floating:"",permanent:t.drawer,"mini-variant":t.mini,color:this.$vuetify.theme.dark?"":"primary",dark:!this.$vuetify.theme.dark},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",{staticClass:"px-2"},[i("v-list-item-avatar",[i("v-icon",[t._v("mdi-account-outline")])],1),i("v-list-item-content",{staticClass:"font-weight-light text-truncate"},[t._v(" "+t._s(this.currentUser.username)+" ")]),i("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[i("v-icon",[t._v("mdi-chevron-left")])],1)],1),i("v-divider"),t._l(t.sessions,(function(e){return i("v-list",{key:e.sessionName},[i("v-subheader",{directives:[{name:"show",rawName:"v-show",value:!t.mini,expression:"!mini"}],staticClass:"font-weight-light text-truncate"},[t._v(t._s(e.sessionName))]),i("v-list",{attrs:{nav:""}},t._l(e.menus,(function(e){return i("v-list-group",{key:e.description,attrs:{color:"white","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-icon",[i("v-icon",{staticClass:"text-truncate",domProps:{textContent:t._s(e.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"font-weight-light text-truncate",domProps:{textContent:t._s(e.description)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"m.active"}},t._l(e.submenus,(function(e){return i("v-list-item",{key:e.description,attrs:{link:"",router:"",to:"/workspaces/"+e.weblink}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"font-weight-light text-truncate",domProps:{textContent:t._s(e.description)}})],1)],1)})),1)})),1),i("v-divider")],1)}))],2)],1)},s=[],o=i("2241"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.notifications?i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-badge",{attrs:{content:t.notifications.length,value:t.notifications.length,color:"green",overlap:""}},[i("v-btn",t._g({attrs:{text:"",small:"",color:"grey"}},n),[i("v-icon",[t._v("mdi-bell")])],1)],1)]}}],null,!1,1387637988)},[i("v-list",{attrs:{dense:""}},[i("v-list-item",{attrs:{"one-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-left"},[i("span",{class:(this.$vuetify.theme.dark?"white--text":"black--text")+" font-weight-light",staticStyle:{"font-size":"14px"}},[t._v("Notifications")])])],1)],1),t._l(t.notifications,(function(e){return i("v-list-item",{key:e.title,attrs:{color:"grey",router:"",to:""+e.router,"two-line":""}},[i("v-list-item-avatar",[i("v-avatar",{attrs:{color:"red"}},[i("span",{staticClass:"white--text headline"},[t._v("CJ")])])],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),i("v-list-item-subtitle",{staticClass:"font-weight-light",domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)})),i("v-list-item",{attrs:{router:"",to:"/notifications","one-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-center"},[i("span",{class:(this.$vuetify.theme.dark?"white--text":"black--text")+" font-weight-light",staticStyle:{"font-size":"14px"}},[t._v("See all")])])],1)],1)],2)],1):t._e()},r=[],c={name:"NotificationBar",data:function(){return{notifications:[{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:"Brunch this weekend?",subtitle:"<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",router:"/test"},{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:'Summer BBQ <span class="grey--text text--lighten-1">4</span>',subtitle:"<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",router:"/test"},{avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:"Oui oui",subtitle:"<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",router:"/test"},{avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",title:"Birthday gift",subtitle:"<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",router:"/test"},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:"Recipe to try",subtitle:"<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",router:"/test"}]}},methods:{}},l=c,h=i("2877"),u=i("6544"),d=i.n(u),p=i("8212"),v=(i("a9e3"),i("15fd")),f=i("5530"),m=(i("ff44"),i("132d")),g=i("a9ad"),b=i("7560"),y=i("f2e7"),S=i("f40d"),w=i("fe6c"),O=i("58df"),x=i("80d2"),k=Object(O["a"])(g["a"],Object(w["b"])(["left","bottom"]),b["a"],y["a"],S["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return Object(f["a"])({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(x["g"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),i=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),n=this.$createElement("span",i,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[n]):n},genBadgeContent:function(){if(!this.dot){var t=Object(x["p"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(m["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],i=[Object(x["p"])(this)],n=this.$attrs,s=(n["aria-atomic"],n["aria-label"],n["aria-live"],n.role,n.title,Object(v["a"])(n,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?i.unshift(e):i.push(e),t("span",{staticClass:"v-badge",attrs:s,class:this.classes},i)}}),_=i("8336"),T=i("8860"),A=i("da13"),C=i("8270"),$=i("5d23"),B=i("e449"),j=Object(h["a"])(l,a,r,!1,null,null,null),M=j.exports;d()(j,{VAvatar:p["a"],VBadge:k,VBtn:_["a"],VIcon:m["a"],VList:T["a"],VListItem:A["a"],VListItemAvatar:C["a"],VListItemContent:$["a"],VListItemSubtitle:$["b"],VListItemTitle:$["c"],VMenu:B["a"]});var L=i("867f"),E={components:{Logo:o["a"],NotificationBar:M},mixins:[L["a"]],data:function(){return{drawer:!1,links:[{icon:"account_circle",text:"Profile",router:"/profile"},{icon:"business",text:"Company",router:"/company"}],mini:!0,snackbar:!1,moduleId:1,sessions:[]}},computed:{buttonText:function(){return this.$vuetify.theme.dark?"Go Light":"Go Dark"}},created:function(){var t=this;this.$store.dispatch("workspace/loadSideBarMenu",{languageId:this.currentUser.language.id,moduleId:this.currentUser.module.id}).then((function(e){t.sessions=e.data.sessions}),(function(t){console.log(t)}))},methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},V=E,N=i("40dc"),H=(i("498a"),i("9d26")),I=i("a026"),P=I["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var i=e.slots,n=e.listeners,s=e.props,o=e.data,a=Object.assign(o,{staticClass:"v-app-bar__nav-icon ".concat(o.staticClass||"").trim(),props:Object(f["a"])({},s,{icon:!0}),on:n}),r=i().default;return t(_["a"],a,r||[t(H["a"],"$menu")])}}),R=i("ce7e"),X=i("56b0"),Y=i("34c3"),U=(i("99af"),i("c7cd"),i("7958"),i("adda")),z=i("3a66"),W=i("b848"),D=i("e707"),F=i("d10f"),q=i("a293"),G=i("dc22"),J=i("c3f0"),Z=Object(O["a"])(Object(z["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),g["a"],W["a"],D["a"],F["a"],b["a"]),Q=Z.extend({name:"v-navigation-drawer",provide:function(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:q["a"],Resize:G["a"],Touch:J["a"]},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},mobileBreakPoint:{type:[Number,String],default:1264},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(f["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&this.$vuetify.breakpoint.width<parseInt(this.mobileBreakPoint,10)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX",e={height:Object(x["g"])(this.height),top:this.isBottom?"auto":Object(x["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(x["g"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(x["g"])(this.computedTransform,"%"),")"),width:Object(x["g"])(this.computedWidth)};return e}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(U["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:function(){return t.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(x["p"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(x["p"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),K=(i("ca71"),i("d9bd")),tt=Object(O["a"])(g["a"],y["a"],Object(w["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(K["d"])("auto-height",this)},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper",attrs:{role:"alert"}}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}}),et=i("2fa4"),it=i("e0c7"),nt=i("2a7f"),st=Object(h["a"])(V,n,s,!1,null,null,null);e["a"]=st.exports;d()(st,{VAppBar:N["a"],VAppBarNavIcon:P,VBtn:_["a"],VDivider:R["a"],VIcon:m["a"],VList:T["a"],VListGroup:X["a"],VListItem:A["a"],VListItemAvatar:C["a"],VListItemContent:$["a"],VListItemIcon:Y["a"],VListItemTitle:$["c"],VMenu:B["a"],VNavigationDrawer:Q,VSnackbar:tt,VSpacer:et["a"],VSubheader:it["a"],VToolbarTitle:nt["b"]})},daaf:function(t,e,i){},e707:function(t,e,i){"use strict";i("caad"),i("a9e3"),i("2532");var n=i("5530"),s=(i("3c93"),i("a9ad")),o=i("7560"),a=i("f2e7"),r=i("58df"),c=Object(r["a"])(s["a"],o["a"],a["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),l=c,h=i("80d2"),u=i("a026");e["a"]=u["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(h["r"])(t.$el)))})),this.overlay&&(this.overlay.value=!0),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(h["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[h["v"].up,h["v"].pageup],i=[h["v"].down,h["v"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,s=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(s,n))||this.shouldScroll(n,i)}for(var o=0;o<e.length;o++){var a=e[o];if(a===document)return!0;if(a===document.documentElement)return!0;if(a===this.$refs.content)return!0;if(this.hasScrollbar(a))return this.shouldScroll(a,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(h["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},ff44:function(t,e,i){}}]);
//# sourceMappingURL=chunk-3d8caaab.a578973a.js.map