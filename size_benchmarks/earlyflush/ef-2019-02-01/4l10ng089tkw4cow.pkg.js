__d("PopoverMenuShowOnHover",["DOM","Event"],(function(a,b,c,d,e,f){__p&&__p();var g=250;function a(a){"use strict";this._handleOnSetMenu=function(){this._attachMouseListeners(this._popoverMenu.getPopover().getLayer().getRoot())}.bind(this),this._popoverMenu=a,this._listeners=[]}a.prototype.enable=function(){"use strict";this._attachMouseListeners(this._popoverMenu.getTriggerElem()),this._setMenuSubscription=this._popoverMenu.subscribe("setMenu",this._handleOnSetMenu)};a.prototype.disable=function(){"use strict";this._lastHoverEventTime=null;while(this._listeners.length)this._listeners.pop().remove();this._setMenuSubscription&&(this._setMenuSubscription.unsubscribe(),this._setMenuSubscription=null)};a.prototype._attachMouseListeners=function(a){"use strict";this._listeners.push(b("Event").listen(a,"mouseleave",function(a){var c=this._popoverMenu.getMenu();if(!c||b("DOM").contains(c.getRoot(),a.relatedTarget)||b("DOM").contains(this._popoverMenu.getTriggerElem(),a.relatedTarget))return;this._popoverMenu.getPopover().hideLayer(a)}.bind(this)),b("Event").listen(a,"mouseenter",function(a){this._lastHoverEventTime=Date.now(),this._popoverMenu.getPopover().showLayer()}.bind(this)),b("Event").listen(a,"click",function(a){Date.now()<this._lastHoverEventTime+g&&a.stop()}.bind(this)))};e.exports=a}),null);
__d("XAsyncRequest",["AsyncRequest"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=new(b("AsyncRequest"))(a)}a.prototype.setURI=function(a){"use strict";this.$1.setURI(a);return this};a.prototype.setOption=function(a,b){"use strict";this.$1.setOption(a,b);return this};a.prototype.setMethod=function(a){"use strict";this.$1.setMethod(a);return this};a.prototype.setData=function(a){"use strict";this.$1.setData(a);return this};a.prototype.setHandler=function(a){"use strict";this.$1.setHandler(a);return this};a.prototype.setPayloadHandler=function(a){"use strict";this.setHandler(function(b){return a(b.payload)});return this};a.prototype.setErrorHandler=function(a){"use strict";this.$1.setErrorHandler(a);return this};a.prototype.send=function(){"use strict";this.$1.send();return this};a.prototype.abort=function(){"use strict";this.$1.abort()};a.prototype.setReadOnly=function(a){"use strict";this.$1.setReadOnly(a);return this};a.prototype.setAllowCrossOrigin=function(a){"use strict";this.$1.setAllowCrossOrigin(a);return this};a.prototype.setAllowCrossPageTransition=function(a){"use strict";this.$1.setAllowCrossPageTransition(a);return this};e.exports=a}),null);
__d("QPEventHandling",[],(function(a,b,c,d,e,f){"use strict";a={registerClickListener:function(a,b,c){a.addEventListener("click",c)}};e.exports=a}),null);
__d("MenuItemInterface",["React","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.getRoot=function(){"use strict";this._root||(this._root=this.render());return this._root};function a(){"use strict";g.apply(this,arguments)}Object.assign(a.prototype,{_root:null,render:b("emptyFunction"),getAccessKey:b("emptyFunction"),getLabel:b("emptyFunction"),hasAction:b("emptyFunction").thatReturnsFalse,focus:b("emptyFunction").thatReturnsFalse,blur:b("emptyFunction").thatReturnsFalse,onShow:b("emptyFunction").thatReturnsFalse,handleClick:b("emptyFunction").thatReturnsFalse,shouldCloseOnClick:b("emptyFunction").thatReturnsTrue,destroy:b("emptyFunction")});e.exports=a}),null);
__d("MenuItemBase",["cx","DOM","HTML","MenuItemInterface"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("MenuItemInterface"));h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this),this._ARIARole="menuitem",this._data=babelHelpers["extends"]({},a)}a.prototype.render=function(){"use strict";var a="-cx-PUBLIC-abstractMenuItem__root";this._data.className&&(a+=" "+this._data.className);a={className:a,role:"presentation"};Object.assign(a,this.__getAttributesFromData());delete a["data-testid"];return b("DOM").create("li",a,this._renderItemContent())};a.prototype._renderItemContent=function(){"use strict";return b("HTML")(this._data.markup).getNodes()};a.prototype.__getAttributesFromData=function(){"use strict";var a={};for(var b in this._data)(b.indexOf("data-")===0||b.indexOf("aria-")===0)&&(a[b]=this._data[b]);return a};e.exports=a}),null);
__d("MenuItem",["cx","CSS","DOM","MenuItemBase","React","ReactDOM","emptyFunction","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=["href","rel","ajaxify","target","accesskey"];function j(a,c){var d={};i.forEach(function(a){c[a]&&(d[a]=c[a])});b("DOM").setAttributes(a,d)}function k(a){i.forEach(function(b){a.removeAttribute(b)})}c=babelHelpers.inherits(a,b("MenuItemBase"));h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this,a),this._disabled=!!this._data.disabled,this._onclickHandler=this._data.onclick||this._data.onClick}a.prototype.getValue=function(){"use strict";return this._data.value};a.prototype.getLabel=function(){"use strict";return this._data.label};a.prototype.getLink=function(){"use strict";return this._data.href};a.prototype.getAccessKey=function(){"use strict";var a=this.getLabel();return a&&a.charAt(0)};a.prototype.focus=function(a){"use strict";if(this.isDisabled()||!this._root.offsetParent||!this.hasAction()||this.isHoverDisabled())return!1;b("CSS").addClass(this._root,"-cx-PUBLIC-abstractMenuItem__highlighted");b("CSS").addClass(this._root,"selected");a||this._anchor.focus()};a.prototype.blur=function(){"use strict";b("CSS").removeClass(this._root,"-cx-PUBLIC-abstractMenuItem__highlighted"),b("CSS").removeClass(this._root,"selected")};a.prototype.handleClick=function(a){"use strict";if(this.isDisabled())return!1;return typeof this._onclickHandler==="function"?this._onclickHandler(a):!0};a.prototype.setOnClickHandler=function(a){"use strict";this._onclickHandler=a};a.prototype._renderItemContent=function(){"use strict";__p&&__p();this._anchor=b("DOM").create(this._data.renderas==="label"?"label":"a",{className:"-cx-PUBLIC-abstractMenuItem__anchor"+(this._data.icon?" -cx-PUBLIC-abstractMenuItem__hasicon":"")});if(this._data.children){var a=null;this._data.icon&&(a=b("React").cloneElement(this._data.icon,{className:b("joinClasses")(this._data.icon.props.className,"mrs")}));b("ReactDOM").render(b("React").createElement("span",null,a,b("React").createElement("span",{className:"-cx-PUBLIC-abstractMenuItem__label"},this._data.children)),this._anchor);this._data.label=this._anchor.innerText||this._anchor.textContent}else{a=b("DOM").create("span",null,b("DOM").create("span",{className:"-cx-PUBLIC-abstractMenuItem__label"},this._data.markup||this._data.label));this._data.icon&&b("DOM").prependContent(a,this._data.icon);b("DOM").setContent(this._anchor,a)}this._data.href||(this._data.href="#");this.isDisabled()||j(this._anchor,this._data);b("DOM").setAttributes(this._anchor,this.__getAttributesFromData());this._anchor.setAttribute("role",this._ARIARole);a=this._data.title;a&&this._anchor.setAttribute("title",a);return this._anchor};a.prototype.isDisabled=function(){"use strict";return this._disabled};a.prototype.isHoverDisabled=function(){"use strict";return this._data.hoverdisabled};a.prototype.enable=function(){"use strict";this._root&&(j(this._anchor,this._data),b("CSS").removeClass(this._root,"-cx-PUBLIC-abstractMenuItem__disabled")),this._disabled=!1};a.prototype.disable=function(){"use strict";this._root&&(k(this._anchor),b("CSS").addClass(this._root,"-cx-PUBLIC-abstractMenuItem__disabled")),this._disabled=!0};a.prototype.render=function(){"use strict";var a=h.render.call(this);this._disabled&&b("CSS").addClass(a,"-cx-PUBLIC-abstractMenuItem__disabled");return a};a.prototype.destroy=function(){"use strict";this._anchor&&b("ReactDOM").unmountComponentAtNode(this._anchor)};Object.assign(a.prototype,{hasAction:b("emptyFunction").thatReturnsTrue});e.exports=a}),null);
__d("MenuSeparator",["cx","CSS","DOM","MenuItemInterface"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("MenuItemInterface"));h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this,a),this._data=a,this.showFn=this._data.should_show_fn}a.prototype.updateShownState=function(a){"use strict";this.showFn&&(this._isHidden=!this.showFn(a),this._root&&b("CSS").conditionShow(this._root,!this._isHidden))};a.prototype.isShown=function(a){"use strict";a=this.showFn?this.showFn(a):!0;return a};a.prototype.render=function(){"use strict";var a="-cx-PUBLIC-abstractMenu__separator";this._data.className&&(a+=" "+this._data.className);var c=this._data.label||"";a=b("DOM").create("li",{className:a,role:"separator"},c);this._isHidden&&b("CSS").hide(a);return a};e.exports=a}),null);
__d("MenuStaticItem",["cx","DOM","MenuItemBase","React","ReactDOM","emptyFunction"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("MenuItemBase"));h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this),this._data=a}a.prototype._renderItemContent=function(){"use strict";var a=b("DOM").create("span",{className:"-cx-PUBLIC-abstractMenuItem__anchor -cx-PUBLIC-abstractMenuItem__staticanchor"});this._data.children?b("ReactDOM").render(b("React").createElement("span",{className:"-cx-PUBLIC-abstractMenuItem__label"},this._data.children),a):b("DOM").setContent(a,b("DOM").create("span",{className:"-cx-PUBLIC-abstractMenuItem__label"},this._data.markup));return a};Object.assign(a.prototype,{handleClick:b("emptyFunction")});e.exports=a}),null);
__d("XUIMenuTheme",["cx"],(function(a,b,c,d,e,f,g){e.exports={className:"-cx-PRIVATE-xuiMenu__root"}}),null);
__d("XUIMenuWithSquareCorner",["cx","CSS"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a){"use strict";this.$1=a}a.prototype.enable=function(){"use strict";b("CSS").addClass(this.$1.getRoot(),"-cx-PRIVATE-xuiMenu__withsquarecorner")};a.prototype.disable=function(){"use strict";b("CSS").removeClass(this.$1.getRoot(),"-cx-PRIVATE-xuiMenu__withsquarecorner")};e.exports=a}),null);
__d("LayerFadeOnHide",["invariant","CSSFade","Layer","SubscriptionsHandler","UserAgent_DEPRECATED","clearTimeout","emptyFunction","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){"use strict";this._layer=a,this._subscriptionsHandler=new(b("SubscriptionsHandler"))()}h.prototype.enable=function(){"use strict";if(b("UserAgent_DEPRECATED").ie()<9)return;this._subscription=this._layer.subscribe("starthide",this._handleStartHide.bind(this))};h.prototype.disable=function(){"use strict";this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._subscriptionsHandler.release()};h.prototype._getDuration=function(){"use strict";return 150};h.prototype._handleStartHide=function(){"use strict";__p&&__p();var a=!0,c=b("Layer").subscribe("show",function(){c.unsubscribe(),a=!1}),d=b("setTimeoutAcrossTransitions")(function(){c.unsubscribe();c=null;var b=function(){this._layer.finishHide()}.bind(this);a?this._animate(b):b()}.bind(this),0);this._subscriptionsHandler.addSubscriptions({remove:function(){b("clearTimeout")(d)}});return!1};h.prototype._animate=function(a){"use strict";var c=this._layer.getRoot();c!=null||g(0,70);b("CSSFade").hide(c,{callback:function(){a()},duration:this._getDuration()})};h.forDuration=function(a){var c;c=babelHelpers.inherits(d,h);c&&c.prototype;function d(){c.apply(this,arguments)}d.prototype._getDuration=b("emptyFunction").thatReturns(a);return d};Object.assign(h.prototype,{_subscription:null});e.exports=h}),null);
__d("WebGraphQL",["ActorURI","AsyncRequest","Deferred","FBLogger","WebGraphQLConfig","XGraphQLBatchAPIController","getAsyncParams","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){__p&&__p();var c=a.getURIBuilder().getURI(),d={exec:function(a,b){return d.execAll([a],b)[0]},execAll:function(a,d){__p&&__p();var e={},f={};a=a.map(function(a,c){c="o"+c;e[c]={doc_id:a.__getDocID(),query_params:a.__getVariables()};a=new(b("Deferred"))();f[c]=a;return a.getPromise()});var g=babelHelpers["extends"]({},b("getAsyncParams")("POST"));d&&d.actorID!=null&&(g[b("ActorURI").PARAMETER_ACTOR]=d.actorID);var h=d&&d.batchName?{batch_name:d.batchName}:{};h=new(b("AsyncRequest"))().setURI(c).setOption("suppressEvaluation",!0).setMethod("POST").setRequestHeader("Content-Type","application/x-www-form-urlencoded").setData(babelHelpers["extends"]({},h,g,{queries:JSON.stringify(e)})).setHandler(function(a){__p&&__p();a=a.getPayload();try{var c=a.response.split("\r\n");c.pop();c=c.map(function(a){return JSON.parse(a)});c.forEach(function(a){return Object.keys(a).forEach(function(b){var c=f[b];if(c){b=a[b];b.errors?c.reject(b):b.data?c.resolve(b.data):c.reject({data:{},errors:[{message:"Unexpected response received from server.",severity:"CRITICAL",response:b}]})}})})}catch(d){c=a.response;b("FBLogger")("webgraphql").catching(d).mustfix("Bad response: ","%s%s",c.substr(0,250),c.length>250?"[truncated]":"")}Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"No response received from server.",severity:"CRITICAL"}]})})}).setTimeoutHandler(b("WebGraphQLConfig").timeout,function(){Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"Request timed out.",severity:"CRITICAL"}]})})}).setErrorHandler(function(a){var b=a.getErrorDescription();Object.keys(f).forEach(function(c){f[c].isSettled()||f[c].reject({data:{},errors:[{message:b,severity:"CRITICAL",error:a.getError()}]})})});d&&d.msgrRegion&&h.setRequestHeader("X-MSGR-Region",d.msgrRegion);b("gkx")("mcIpIwyIEUO:always_allow_cross_page_webgrapqhl")?h.setAllowCrossPageTransition(!0):d&&d.allowCrossPageTransition!=null&&h.setAllowCrossPageTransition(d.allowCrossPageTransition);h.send();return a},__forController:g};return d}e.exports=g(b("XGraphQLBatchAPIController"))}),null);
__d("StoryArchiveAutoSavingMode",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENABLED:"ENABLED",DISABLED:"DISABLED"})}),null);
__d("cancelAnimationFrame",["Env","TimerStorage","TimeSlice","cancelAnimationFramePolyfill","requestAnimationFrameAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=b("TimerStorage").ANIMATION_FRAME;function a(a){if(a!=null)if(b("Env").gk_raf_flush)b("requestAnimationFrameAcrossTransitions").cancelVirtualRAF(a);else{b("TimerStorage").unset(g,a);var c=g+String(a);b("TimeSlice").cancelWithToken(c)}b("cancelAnimationFramePolyfill")(a)}e.exports=a}),null);
__d("replaceNativeTimer",["scheduler","cancelAnimationFrame","clearInterval","clearTimeout","requestAnimationFrame","setInterval","setTimeout"],(function(a,b,c,d,e,f){!b("scheduler"),a.__fbNativeSetTimeout=a.setTimeout,a.__fbNativeClearTimeout=a.clearTimeout,a.__fbNativeSetInterval=a.setInterval,a.__fbNativeClearInterval=a.clearInterval,a.__fbNativeRequestAnimationFrame=a.requestAnimationFrame,a.__fbNativeCancelAnimationFrame=a.cancelAnimationFrame,b("setTimeout").nativeBackup=a.setTimeout,b("clearTimeout").nativeBackup=a.clearTimeout,b("setInterval").nativeBackup=a.setInterval,b("clearInterval").nativeBackup=a.clearInterval,b("requestAnimationFrame").nativeBackup=a.requestAnimationFrame,b("cancelAnimationFrame").nativeBackup=a.cancelAnimationFrame,a.setTimeout=b("setTimeout"),a.clearTimeout=b("clearTimeout"),a.setInterval=b("setInterval"),a.clearInterval=b("clearInterval"),a.requestAnimationFrame=b("requestAnimationFrame"),a.cancelAnimationFrame=b("cancelAnimationFrame")}),null);
__d("QPRenderer",["csx","CSS","FBLogger","Parent","QPEventHandling","XAsyncRequest","XQuickPromotionSimpleLoggingController","ge"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,c,d){a=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setString("qp_event",c).setStringToStringMap("qp_instance_log_data",d).getURI();new(b("XAsyncRequest"))(a).send()}function a(a,c,d){a=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",c).setStringToStringMap("qp_instance_log_data",d).getURI();new(b("XAsyncRequest"))(a).send()}function c(a,c,d,e,f,g){e=b("ge")(e);e!==null?i(a,d,e,g,function(){f&&b("CSS").hide(c)}):b("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,d)}function d(a,c,d,e,f){i(a,c,d,f,function(){if(e){var a=b("Parent").bySelector(d,".-cx-PUBLIC-feedObject__root");a instanceof HTMLElement&&b("CSS").hide(a)}})}function e(a,c,d){c.show();h(a,"view",{});c.subscribe("cancel",function(){h(a,"dialog_cancel",{})});for(var e=0;e<d.length;e++){var f=d[e],g=b("ge")(f.element_id);g!==null?(i(a,f.action,g,f.extra_log_data,f.should_close?function(){c.hide()}:function(){}),f.action=="primary"&&g.focus()):b("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,f.action)}}function i(a,c,d,e,f){b("QPEventHandling").registerClickListener(d,c,function(){var d=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",c).setStringToStringMap("qp_instance_log_data",e).getURI();new(b("XAsyncRequest"))(d).send();f()})}f.setAction=c;f.setComponentActionForFeedUnitQP=d;f.setDialogActionsAndShow=e;f.logAction=a;f.logEvent=h}),null);