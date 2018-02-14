if (self.CavalryLogger) { CavalryLogger.start_js(["TbLDR"]); }

__d("ReactComposerSproutType",[],(function a(b,c,d,e,f,g){f.exports={ACTIVITY:"ACTIVITY",ALBUM:" ALBUM",LOCATION:"LOCATION",MEDIA:"MEDIA",PEOPLE:"PEOPLE",NOTE:"NOTE",LIVE_VIDEO:"LIVE_VIDEO",MARKDOWN:"MARKDOWN",FORMATTED_TEXT:"FORMATTED_TEXT",SPONSOR:"SPONSOR",ELLIPSIS:"ELLIPSIS"};}),null);
__d("WorkFeedComposerLoggerEvent",[],(function a(b,c,d,e,f,g){f.exports={SHOW_COMPOSER:"SHOW_COMPOSER",OPEN_GROUP_SEARCH:"OPEN_GROUP_SEARCH",TYPING_GROUP_QUERY:"TYPING_GROUP_QUERY",SELECT_GROUP:"SELECT_GROUP",CREATE_POST:"CREATE_POST"};}),null);
__d('WorkFeedComposerTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:WorkFeedComposerLoggerConfig',this.$WorkFeedComposerTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:WorkFeedComposerLoggerConfig',this.$WorkFeedComposerTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$WorkFeedComposerTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$WorkFeedComposerTypedLogger1=babelHelpers['extends']({},this.$WorkFeedComposerTypedLogger1,j);return this;};h.prototype.setEvent=function(j){this.$WorkFeedComposerTypedLogger1.event=j;return this;};h.prototype.setVC=function(j){this.$WorkFeedComposerTypedLogger1.vc=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$WorkFeedComposerTypedLogger1=babelHelpers['extends']({},this.$WorkFeedComposerTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={event:true,vc:true};f.exports=h;}),null);
__d('ReactComposerSproutUIConfig',['React'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes;f.exports=h.shape({label:h.string.isRequired,icon:h.object.isRequired,className:h.string,loggingName:h.string.isRequired});}),null);
__d('ReactComposerSproutItem.react',['cx','ReactComposerSproutUIConfig','Image.react','Link.react','React','TooltipData','XUISpinner.react','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.render=function(){var m=this.props.loading?c('React').createElement(c('XUISpinner.react'),{className:"_20j1",background:'dark',size:'small'}):null;return (c('React').createElement(c('Link.react'),null,c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')("_m_1"+(this.props.loading?' '+"_20jn":'')+(this.props.highlighted?' '+"_3x6w":''),this.props.uiConfig.className),role:'tab','aria-selected':this.props.highlighted,'data-tooltip-delay':'500',onClick:this.props.onClick,'data-testid':this.props.uiConfig.webDriverTestID},c('TooltipData').propsFor(this.props.uiConfig.label)),c('React').createElement(c('Image.react'),{className:"_4a0a",src:this.props.uiConfig.icon}),c('React').createElement('div',{className:"_2aha"},this.props.uiConfig.label),m)));};function l(){i.apply(this,arguments);}l.propTypes={uiConfig:c('ReactComposerSproutUIConfig').isRequired,loading:k.bool,highlighted:k.bool,onClick:k.func};l.defaultProps={highlighted:false};f.exports=l;}),null);
__d('ReactComposerEllipsisSproutContainer.react',['cx','fbt','ReactComposerLoggingActions','ReactComposerLoggingName','ReactComposerSproutItem.react','ReactComposerSproutsDefaultUIConfig','ReactComposerSproutType','Link.react','React','ReactComposerContextMixin'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('ReactComposerContextMixin').contextTypes;j=babelHelpers.inherits(m,c('React').PureComponent);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.$ReactComposerEllipsisSproutContainer1=function(event){c('ReactComposerLoggingActions').composerEntry(this.context.composerID,c('ReactComposerLoggingName').ELLIPSIS_SPROUT);}.bind(this),o;}m.prototype.render=function(){return c('React').createElement(c('ReactComposerSproutItem.react'),{uiConfig:c('ReactComposerSproutsDefaultUIConfig')[c('ReactComposerSproutType').ELLIPSIS],onClick:this.$ReactComposerEllipsisSproutContainer1});};m.contextTypes=l;f.exports=m;}),null);
__d('ReactComposerLazySproutContainer.react',['ReactComposerSproutItem.react','ReactComposerSproutUIConfig','React'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').PureComponent);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.state={loading:false},this.$ReactComposerLazySproutContainer1=function(){this.setState({loading:true});}.bind(this),m;}k.prototype.render=function(){return c('React').createElement(c('ReactComposerSproutItem.react'),{uiConfig:this.props.uiConfig,onClick:this.$ReactComposerLazySproutContainer1,loading:this.state.loading});};k.propTypes={uiConfig:c('ReactComposerSproutUIConfig').isRequired};f.exports=k;}),null);
__d('ReactComposerSproutsListRenderer.react',['cx','invariant','ReactComposerConfig','ReactComposerEllipsisSproutContainer.react','ReactComposerSproutsDisplayState','ReactComposerSproutType','Grid.react','React','joinClasses','ReactComposerContextMixin'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes,m=c('Grid.react').GridItem,n=c('ReactComposerContextMixin').contextTypes;j=babelHelpers.inherits(o,c('React').PureComponent);k=j&&j.prototype;o.prototype.render=function(){var p=this.props.sproutsDisplayState===c('ReactComposerSproutsDisplayState').EXPANDED?this.$ReactComposerSproutsListRenderer1():this.$ReactComposerSproutsListRenderer2(),q=c('React').createElement('div',{className:"_16vf"});return (c('React').createElement('div',{className:"_16ve"},q,p));};o.prototype.$ReactComposerSproutsListRenderer2=function(){var p=[],q=this.props.config.sproutsConfig,r=function u(v,w){return (c('React').createElement('div',{className:"_5xmp",key:w},v));};if(q)for(var s in q){if(!this.$ReactComposerSproutsListRenderer3(q[s])||!this.$ReactComposerSproutsListRenderer4(q[s]))continue;this.props.sprouts[s]||i(0);var t=r(this.props.sprouts[s],s);p.push(t);if(p.length>=3)break;}p.length<=3||i(0);return (c('React').createElement('div',{className:"_16vg"+(p.length===3?' '+"_1oxv":'')},p,r(c('React').createElement(c('ReactComposerEllipsisSproutContainer.react'),null),c('ReactComposerSproutType').ELLIPSIS)));};o.prototype.$ReactComposerSproutsListRenderer1=function(){var p=[],q=this.props.config.sproutsConfig;if(q)for(var r in q){if(!this.$ReactComposerSproutsListRenderer3(q[r]))continue;this.props.sprouts[r]||i(0);p.push(c('React').createElement(m,{key:r},this.props.sprouts[r]));}return (c('React').createElement('div',{className:"_16vl"},c('React').createElement(c('Grid.react'),{cols:2,fixed:true,spacing:c('joinClasses')('pas',"_1fng")},p)));};o.prototype.$ReactComposerSproutsListRenderer3=function(p){return !!p&&p.enabled;};o.prototype.$ReactComposerSproutsListRenderer4=function(p){return this.$ReactComposerSproutsListRenderer3(p)&&!!p&&p.inline;};function o(){j.apply(this,arguments);}o.contextTypes=n;o.propTypes={config:c('ReactComposerConfig').isRequired,sproutsDisplayState:l.string.isRequired,sprouts:l.object.isRequired};f.exports=o;}),null);
__d('ReactComposerSproutsList.react',['ReactComposerActions','ReactComposerConfig','ReactComposerLazySproutContainer.react','ReactComposerSproutItem.react','ReactComposerSproutsDefaultUIConfig','ReactComposerSproutsListRenderer.react','React','ReactComposerContextMixin'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes,k=c('ReactComposerContextMixin').contextTypes;h=babelHelpers.inherits(l,c('React').PureComponent);i=h&&h.prototype;l.prototype.render=function(){var m=c('React').createElement(c('ReactComposerSproutsListRenderer.react'),babelHelpers['extends']({},this.props,{sprouts:this.$ReactComposerSproutsList1()}));return m;};l.prototype.$ReactComposerSproutsList1=function(){var m=this.props.config.sproutsConfig,n={};if(m)for(var o in m){if(!m[o].enabled)continue;var p=c('ReactComposerSproutsDefaultUIConfig')[o],q=!this.props.fakeSprouts?this.props.sproutModules[o]||c('ReactComposerLazySproutContainer.react'):c('ReactComposerSproutItem.react');n[o]=c('React').createElement(q,{uiConfig:p,config:this.props.config});}return n;};l.prototype.$ReactComposerSproutsList2=function(m){c('ReactComposerActions').expandSprouts(this.context.composerID);};function l(){h.apply(this,arguments);}l.contextTypes=k;l.propTypes={config:c('ReactComposerConfig').isRequired,sproutsDisplayState:j.string.isRequired,sproutModules:j.object.isRequired,fakeSprouts:j.bool};f.exports=l;}),null);
__d('ReactComposerSproutsListContainer.react',['invariant','ReactComposerConfig','ReactComposerContextMixin','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerSproutsDisplayState','ReactComposerSproutsList.react','ReactComposerStore','JSResourceReference','ReactComponentWithPureRenderMixin','React'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('React').PropTypes,j=c('React').createClass({displayName:'ReactComposerSproutsListContainer',mixins:[c('ReactComposerContextMixin'),c('ReactComponentWithPureRenderMixin'),c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerStore'))],propTypes:{config:c('ReactComposerConfig').isRequired,fakeSprouts:i.bool},getDefaultState:function k(){return {additionalSproutModules:{},bootloading:false};},statics:{calculateState:function k(l,m){return {sproutsDisplayState:c('ReactComposerStore').getSproutsDisplayState(l)};}},componentDidMount:function k(){if(this.state.sproutsDisplayState===c('ReactComposerSproutsDisplayState').EXPANDED)this._bootload();},componentDidUpdate:function k(){if(this.state.sproutsDisplayState===c('ReactComposerSproutsDisplayState').EXPANDED)this._bootload();},render:function k(){var l=Object.assign(this.context.jsModules.sprouts,this.state.additionalSproutModules);return (c('React').createElement(c('ReactComposerSproutsList.react'),{config:this.props.config,sproutsDisplayState:this.state.sproutsDisplayState,sproutModules:l,fakeSprouts:this.props.fakeSprouts}));},_bootload:function k(){if(this.state.bootloading)return;var l=this.props.config.sproutsConfig,m=[],n=[];for(var o in l){if(!l[o].enabled||!l[o].lazyLoad)continue;this.context.jsResources.sprouts[o]||h(0);m.push(this.context.jsResources.sprouts[o]);n.push(o);}c('JSResourceReference').loadAll(m,function(){var p={};for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];for(var t=0;t<n.length;t++)p[n[t]]=r[t];this.isMounted()&&this.setState({additionalSproutModules:p});}.bind(this));this.setState({bootloading:true});}});f.exports=j;}),null);
__d('ReactComposerWithSprouts.react',['cx','ReactComposer.react','ReactComposerActions','ReactComposerAttachmentActions','ReactComposerContextMixin','ReactComposerEvents','ReactComposerLoggingName','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerSproutsDisplayState','ReactComposerStore','Arbiter','ReactComponentWithPureRenderMixin','React','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h){var i=c('React').PropTypes,j=c('React').createClass({displayName:'ReactComposerWithSprouts',mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin'),c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerStore'))],propTypes:{defaultAttachmentOnExpand:i.string.isRequired,innerProps:i.shape(c('ReactComposer.react').propTypes).isRequired,expandOnInit:i.bool},getDefaultProps:function k(){return {expandOnInit:false};},statics:{beforeCalculateInitialState:function k(l,m){if(m.expandOnInit){c('ReactComposerActions').expandSprouts(l);c('ReactComposerAttachmentActions').initializeAttachment(l,m.defaultAttachmentOnExpand,true,c('ReactComposerLoggingName').OTHERS);}},calculateState:function k(l,m){return {displayState:c('ReactComposerStore').getSproutsDisplayState(l)};}},_subscriptions:c('SubscriptionsHandler'),componentWillMount:function k(){this._subscriptions=new (c('SubscriptionsHandler'))();this._subscriptions.addSubscriptions(c('Arbiter').subscribeOnce('ReactFeedComposerXBootloader/selectcomposer/'+this.context.composerID,function(){return this._expandComposer(c('ReactComposerLoggingName').PROMPT);}.bind(this)));},render:function k(){return (c('React').createElement('div',{className:"_1cx1"+(this.state.displayState===c('ReactComposerSproutsDisplayState').EXPANDED?' '+"_4qr4":'')+(this.state.displayState===c('ReactComposerSproutsDisplayState').INLINE?' '+"_4a8c":'')+(this.context.gks&&this.context.gks.hideInlineSprouts?' '+"_5jj2":'')+(this.context.gks&&this.context.gks.hidePostBar?' '+"_2qct":'')+(this.context.gks&&this.context.gks.albumTab?' '+"_4aay":'')+(this.context.gks&&this.context.gks.albumTab?' '+"_4ab3":'')+(this.context.gks&&!this.context.gks.addAnyPostToAlbum?' '+"_2qma":''),onClick:function(l){return (this._expandComposer(c('ReactComposerLoggingName').INLINE_COMPOSER));}.bind(this),role:'presentation'},c('React').createElement(c('ReactComposer.react'),this.props.innerProps,this.props.children)));},_expandComposer:function k(l){if(this.state.displayState===c('ReactComposerSproutsDisplayState').INLINE){c('ReactComposerActions').expandSprouts(this.context.composerID);c('ReactComposerAttachmentActions').initializeAttachment(this.context.composerID,this.props.defaultAttachmentOnExpand,true,l);setTimeout(function(){return c('Arbiter').inform(c('ReactComposerEvents').ACTIVATE_ATTACHMENT+this.context.composerID);}.bind(this),0);}}});f.exports=j;}),null);
__d('ReactComposerWorkBodyPlaceholder.react',['fbt','ReactComposerAttachmentType','ReactComposerContextMixin','ReactComposerFooter.react','ReactComposerFooterActions.react','ReactComposerProfilePhotoBlock.react','ReactComposerStatusLazyAttachmentTextareaContainer.react','LeftRight.react','ReactComponentWithPureRenderMixin','React','XUIButton.react'],(function a(b,c,d,e,f,g,h){var i=c('React').PropTypes,j=c('React').createClass({displayName:'ReactComposerWorkBodyPlaceholder',mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin')],propTypes:{config:i.object.isRequired,onInteract:i.func.isRequired},render:function k(){var l=this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],m=h._("Post to a group..."),n=c('React').createElement(c('ReactComposerStatusLazyAttachmentTextareaContainer.react'),{expanded:true,hasProfilePic:l.showProfilePic,onFocus:function r(){},placeholder:m,ref:'placeholder'}),o=l.showProfilePic?c('React').createElement(c('ReactComposerProfilePhotoBlock.react'),{profilePicSrc:l.profilePicSrc,profileURI:l.profileURI,profilePhotoBadge:l.customProfilePhoto,currentProfileBadgeURI:l.currentProfileBadgeURI},n):n,p=this.context.jsModules&&this.context.jsModules.ComposerSproutsListContainer,q=c('React').createElement(p,{config:this.props.config,fakeSprouts:true});return (c('React').createElement('div',{onClick:this.props.onInteract,onFocus:this.props.onInteract,role:'presentation'},o,q,c('React').createElement(c('ReactComposerFooter.react'),{background:'light-wash'},c('React').createElement(c('LeftRight.react'),null,c('React').createElement('div',null),c('React').createElement(c('ReactComposerFooterActions.react'),null,c('React').createElement(c('XUIButton.react'),{label:h._("Post"),use:'confirm'}))))));}});f.exports=j;}),null);
__d('ReactComposerWorkSpinner.react',['cx','React','XUISpinner.react'],(function a(b,c,d,e,f,g,h){var i=c('React').createClass({displayName:'ReactComposerWorkSpinner',render:function j(){return (c('React').createElement('div',{className:"_47pt"},c('React').createElement(c('XUISpinner.react'),{size:'large',background:'light'})));}});f.exports=i;}),null);
__d('ReactComposerWorkGroupRow.react',['cx','fbt','Badge.react','Image.react','ImageBlock.react','InlineBlock.react','React','TypeaheadViewItem','XUIGrayText.react','XUIText.react'],(function a(b,c,d,e,f,g,h,i){var j=c('React').createClass({displayName:'ReactComposerWorkGroupRow',mixins:[c('TypeaheadViewItem').Mixin],propTypes:babelHelpers['extends']({},c('TypeaheadViewItem').propTypes),render:function k(){var l=i._({"*":"{number} members","268435456":"1 member"},[i.plural(this.props.entry.getAuxiliaryData().member_count,'number')]),m=this.props.entry.getAuxiliaryData().is_mcg?c('React').createElement(c('Badge.react'),{type:'work_non_coworker'}):null;return (c('React').createElement('li',{'aria-selected':this.props.highlighted,className:(this.props.highlighted?"_4yhq":'')+(' '+"_2pi8")+(' '+"_2pi2"),onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role},c('React').createElement(c('ImageBlock.react'),{spacing:'large'},c('React').createElement(c('Image.react'),{className:"_4s59",src:this.props.entry.getAuxiliaryData().cover_photo}),c('React').createElement(c('InlineBlock.react'),{alignv:'middle',height:36,fullWidth:true},c('React').createElement('div',{className:"ellipsis"},c('React').createElement(c('XUIText.react'),{size:'medium',weight:'bold'},this.props.entry.getTitle()),m),c('React').createElement(c('XUIGrayText.react'),{shade:'light',size:'small'},this.props.entry.getAuxiliaryData().privacy_title?c('React').createElement('span',null,this.props.entry.getAuxiliaryData().privacy_title,' ','\u00B7',' '):null,l)))));}});f.exports=j;}),null);
__d('ReactComposerWorkGroupTypeaheadView.react',['cx','fbt','ReactComposerWorkGroupRow.react','React','SearchableEntry','TypeaheadViewPropTypes','XUIGrayText.react'],(function a(b,c,d,e,f,g,h,i){var j=c('React').createClass({displayName:'ReactComposerWorkGroupTypeaheadView',propTypes:c('TypeaheadViewPropTypes'),defaultProps:{role:'listbox'},_renderItem:function k(l){var m=l===this.props.highlightedEntry;return (c('React').createElement(c('ReactComposerWorkGroupRow.react'),{key:l.getUniqueID(),entry:l,highlighted:m,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));},render:function k(){var l=[],m=[],n=[];this.props.entries.map(function(r){if(r.getAuxiliaryData().top_group){l.push(r);}else if(r.getAuxiliaryData().is_member){m.push(r);}else n.push(r);});var o=this._renderSection(l,i._("YOUR TOP GROUPS")),p=this._renderSection(m,i._("GROUPS YOU'RE IN")),q=this._renderSection(n,i._("OTHER GROUPS YOU CAN POST TO"));return (c('React').createElement('ul',{id:this.props.ariaOwneeID,role:this.props.role},o,p,q));},_renderSection:function k(l,m){if(l.length==0)return null;return (c('React').createElement('div',null,c('React').createElement(c('XUIGrayText.react'),{className:"_1gf0 _1gf1 _2ph-",shade:'light',weight:'bold'},m),l.map(this._renderItem)));}});f.exports=j;}),null);
__d("XWorkFeedComposerGroupsBootstrapController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/work\/composer\/group_typeahead_bootstrap\/",{});}),null);
__d("XWorkFeedComposerGroupsTypeaheadController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/work\/composer\/group_typeahead\/",{value:{type:"String",defaultValue:""}});}),null);
__d('WorkComposerGroupsSearchSource',['AbstractSearchSource','immutable','SearchableEntry','WebAsyncSearchSource','WorkComposerGroupsBootstrap','XWorkFeedComposerGroupsBootstrapController','XWorkFeedComposerGroupsTypeaheadController'],(function a(b,c,d,e,f,g){var h,i,j=c('immutable').OrderedSet(c('WorkComposerGroupsBootstrap').top_groups);h=babelHelpers.inherits(k,c('AbstractSearchSource'));i=h&&h.prototype;function k(){'use strict';i.constructor.call(this);var l={uri:c('XWorkFeedComposerGroupsTypeaheadController').getURIBuilder().getURI()},m={uri:c('XWorkFeedComposerGroupsBootstrapController').getURIBuilder().getURI()};this.$WorkComposerGroupsSearchSource1=new (c('WebAsyncSearchSource'))({queryRequests:[l],bootstrapRequests:[m]});}k.prototype.bootstrapImpl=function(l){'use strict';l();this.$WorkComposerGroupsSearchSource1.bootstrap();};k.prototype.searchImpl=function(l,m){'use strict';if(l.length){this.$WorkComposerGroupsSearchSource1.search(l,m);}else{var n=j.map(function(o){return new (c('SearchableEntry'))({uniqueID:o.id,title:o.name,auxiliaryData:{cover_photo:o.photo,member_count:o.member_count,privacy_icon:o.privacy_icon,privacy_title:o.privacy_title,privacy_description:o.privacy_description,top_group:o.top_group,is_member:o.is_member,is_mcg:o.is_mcg}});}).toArray();m(n,l);}};f.exports=new k();}),null);
__d('ReactComposerWorkGroupSearch.react',['ix','cx','fbt','ReactComposerWorkGroupTypeaheadView.react','AbstractTypeahead.react','Image.react','ReactComponentWithPureRenderMixin','React','ReactComposerContextMixin','SearchableEntry','WorkComposerGroupsSearchSource','WorkFeedComposerLoggerEvent','WorkFeedComposerTypedLogger','XUICardSection.react','XUIText.react','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){var k=c('React').PropTypes,l=c('React').createClass({displayName:'ReactComposerWorkGroupSearch',mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin')],propTypes:{onTargetChange:k.func.isRequired},getInitialState:function m(){return {search:'',typing:false};},render:function m(){return (c('React').createElement(c('XUICardSection.react'),null,c('React').createElement('div',null,c('React').createElement(c('AbstractTypeahead.react'),{inputClassName:"_1gf2 _2pi9 _2pi4",hideViewWithEntries:false,focusedOnInit:true,queryString:this.state.search,onSelectAttempt:this._onSelect,onChange:this._onTypeaheadChange,presenter:{ViewRenderer:c('ReactComposerWorkGroupTypeaheadView.react'),useLayer:false,maxEntries:8,sortEntries:this._sortEntries},ref:'searchInput',searchSource:c('WorkComposerGroupsSearchSource'),showEntriesOnFocus:true}),c('React').createElement(c('Image.react'),{className:"_3f2l",src:h("126436")}),this.state.search?null:c('React').createElement(c('XUIText.react'),{className:"_3daz",size:'medium'},j._("Search for a group to post to")))));},_onTypeaheadChange:function m(event){if(!this.state.typing)new (c('WorkFeedComposerTypedLogger'))().setEvent(c('WorkFeedComposerLoggerEvent').TYPING_GROUP_QUERY).log();this.setState({search:event.target.value,typing:this.state.typing||!!event.target.value});},_onSelect:function m(n){this.props.onTargetChange(n);},_sortEntries:function m(n){var o=[],p=[],q=[];n.map(function(r){if(r.getAuxiliaryData().top_group){o.push(r);}else if(r.getAuxiliaryData().is_member){p.push(r);}else q.push(r);});return o.concat(p).concat(q);}});f.exports=l;}),null);
__d('ReactComposerWorkHeader.react',['cx','fbt','Image.react','InlineBlock.react','Link.react','ReactComponentWithPureRenderMixin','React','Tooltip.react','XUIGrayText.react','XUIText.react'],(function a(b,c,d,e,f,g,h,i){var j=c('React').PropTypes,k=c('React').createClass({displayName:'ReactComposerWorkHeader',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{target:j.object.isRequired},render:function l(){return (c('React').createElement(c('InlineBlock.react'),{alignv:'middle',className:"_3-8t",height:64},c('React').createElement(c('XUIGrayText.react'),{className:"_1gf0 _3-94",shade:'light',weight:'bold'},i._("POSTING TO")),c('React').createElement('span',{className:"_33bt"},c('React').createElement(c('Link.react'),{className:"_4s55",href:this.props.target.getURI()},c('React').createElement(c('XUIGrayText.react'),{shade:'medium',size:'medium'},this.props.target.getTitle())),c('React').createElement(c('XUIGrayText.react'),{shade:'medium',size:'medium'},' ','\u00B7',' ',i._({"*":"{number} members","268435456":"1 member"},[i.plural(this.props.target.getAuxiliaryData().member_count,'number')])),c('React').createElement('span',{className:"_33bu _3-99"},c('React').createElement('div',{className:"_33bw"},c('React').createElement(c('Tooltip.react'),{tooltip:c('React').createElement('div',{className:"_33bx"},c('React').createElement(c('XUIText.react'),{className:"_3-94",display:'block',weight:'bold'},this.props.target.getAuxiliaryData().privacy_title),c('React').createElement(c('XUIText.react'),{display:'block'},this.props.target.getAuxiliaryData().privacy_description))},c('React').createElement(c('Image.react'),{src:this.props.target.getAuxiliaryData().privacy_icon})))))));}});f.exports=k;}),null);
__d('ReactComposerWorkFeedActionTypes',['keyMirror'],(function a(b,c,d,e,f,g){f.exports=c('keyMirror')({SET_DISPLAY_STATE:null,SET_TARGET:null,SET_WORK_PROPS:null});}),null);
__d('ReactComposerWorkFeedDisplayState',['keyMirror'],(function a(b,c,d,e,f,g){f.exports=c('keyMirror')({DEFAULT:null,SEARCH:null,COMPOSER:null});}),null);
__d('ReactComposerWorkFeedActions',['ReactComposerWorkFeedActionTypes','ReactComposerDispatcher','ReactComposerWorkFeedDisplayState'],(function a(b,c,d,e,f,g){var h={setDisplayState:function i(j,k){c('ReactComposerDispatcher').dispatch({composerID:j,type:c('ReactComposerWorkFeedActionTypes').SET_DISPLAY_STATE,state:k});},setTarget:function i(j,k){c('ReactComposerDispatcher').dispatch({composerID:j,type:c('ReactComposerWorkFeedActionTypes').SET_TARGET,target:k});},setWorkProps:function i(j,k){c('ReactComposerDispatcher').dispatch({composerID:j,type:c('ReactComposerWorkFeedActionTypes').SET_WORK_PROPS,props:k});}};f.exports=h;}),null);
__d('ReactComposerWorkFeedStore',['ReactComposerActionStore','ReactComposerWorkFeedActionTypes','ReactComposerInit','ReactComposerWorkFeedDisplayState','FeedComposerIDStore','WorkFeedComposerLoggerEvent','WorkFeedComposerTypedLogger','update'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('ReactComposerActionStore'));i=h&&h.prototype;function j(){var k=void 0;i.constructor.call(this,function(){return {target:null,props:null,state:c('ReactComposerWorkFeedDisplayState').DEFAULT};},function(l){switch(l.type){case c('ReactComposerWorkFeedActionTypes').SET_DISPLAY_STATE:k&&k.$ReactComposerWorkFeedStore1(l);break;case c('ReactComposerWorkFeedActionTypes').SET_TARGET:k&&k.$ReactComposerWorkFeedStore2(l);break;case c('ReactComposerWorkFeedActionTypes').SET_WORK_PROPS:k&&k.$ReactComposerWorkFeedStore3(l);break;}});k=this;}j.prototype.getDisplayState=function(k){return this.getComposerData(k).state;};j.prototype.getTarget=function(k){return this.getComposerData(k).target;};j.prototype.getProps=function(k){return this.getComposerData(k).props;};j.prototype.showGroupTypeahead=function(k){return this.getComposerData(k).showGroupTypeahead;};j.prototype.$ReactComposerWorkFeedStore1=function(k){var l=this.validateAction(k,'composerID'),m=this.validateAction(k,'state'),n=this.getComposerData(l);if(m!==n.state){var event=void 0;switch(m){case c('ReactComposerWorkFeedDisplayState').SEARCH:event=c('WorkFeedComposerLoggerEvent').OPEN_GROUP_SEARCH;break;case c('ReactComposerWorkFeedDisplayState').COMPOSER:event=c('WorkFeedComposerLoggerEvent').SELECT_GROUP;break;}if(event)new (c('WorkFeedComposerTypedLogger'))().setEvent(event).log();}n.state=m;this.emitChange(l);};j.prototype.$ReactComposerWorkFeedStore2=function(k){var l=this.validateAction(k,'composerID'),m=this.validateAction(k,'target'),n=this.getComposerData(l);n.target=m;this.emitChange(l);};j.prototype.$ReactComposerWorkFeedStore3=function(k){var l=this.validateAction(k,'composerID'),m=this.validateAction(k,'props'),n=this.getComposerData(l);n.props=m;n.target=m.target;if(m.target){n.state=c('ReactComposerWorkFeedDisplayState').COMPOSER;}else n.state=c('ReactComposerWorkFeedDisplayState').DEFAULT;this.emitChange(l);};j.prototype.__onPostSucceeded=function(k){new (c('WorkFeedComposerTypedLogger'))().setEvent(c('WorkFeedComposerLoggerEvent').CREATE_POST).log();};j.prototype.__cleanup=function(k){var l=this.validateAction(k,'composerID'),m=this.getComposerData(l),n=c('update')(m.props,{workTarget:{$set:null}});setTimeout(function(){c('ReactComposerInit').changeProps(c('FeedComposerIDStore').get(),n);},0);};f.exports=new j();}),null);
__d('ReactComposerWorkFeedBodyContainer.react',['ReactComposerContextMixin','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerWorkBodyPlaceholder.react','ReactComposerWorkSpinner.react','ReactComposerWorkFeedActions','ReactComposerWorkFeedDisplayState','ReactComposerWorkFeedStore','AsyncRequest','ReactComponentWithPureRenderMixin','React'],(function a(b,c,d,e,f,g){'use strict';var h=c('React').PropTypes,i=c('React').createClass({displayName:'ReactComposerWorkFeedBodyContainer',mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerWorkFeedStore')),c('ReactComposerContextMixin')],propTypes:{target:h.object,config:h.object.isRequired},statics:{calculateState:function j(k,l,m){var n=c('ReactComposerWorkFeedStore').getDisplayState(k);return {showPlaceholder:n===c('ReactComposerWorkFeedDisplayState').DEFAULT&&!l.target,showSpinner:n===c('ReactComposerWorkFeedDisplayState').COMPOSER&&!l.target,showComposer:l.target};}},render:function j(){if(this.state.showPlaceholder)return (c('React').createElement(c('ReactComposerWorkBodyPlaceholder.react'),{config:this.props.config,onInteract:this._onPlaceholderInteract}));if(this.state.showSpinner)return c('React').createElement(c('ReactComposerWorkSpinner.react'),null);if(this.state.showComposer)return (c('React').createElement('div',null,this.props.children));return c('React').createElement('div',null);},_onPlaceholderInteract:function j(){c('ReactComposerWorkFeedActions').setDisplayState(this.context.composerID,c('ReactComposerWorkFeedDisplayState').SEARCH);}});f.exports=i;}),null);
__d('ReactComposerWorkFeedBootloader',['Bootloader'],(function a(b,c,d,e,f,g){'use strict';var h={statusAttachment:function i(j){c('Bootloader').loadModules(["ReactComposerStatusAttachmentContainer.react","ReactComposerWorkFeedPostButtonContainer.react"],j,'ReactComposerWorkFeedBootloader');},mediaAttachment:function i(j){c('Bootloader').loadModules(["ReactComposerMediaAttachmentContainer.react","ReactComposerWorkFeedPostButtonContainer.react"],j,'ReactComposerWorkFeedBootloader');}};f.exports=h;}),null);
__d("XReactComposerTargetChangeController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/react_composer\/target\/change\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"String"}});}),null);
__d('ReactComposerWorkHeaderContainer.react',['cx','ReactComposerContextMixin','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerWorkFeedActions','ReactComposerWorkFeedDisplayState','ReactComposerWorkFeedStore','ReactComposerWorkGroupSearch.react','ReactComposerWorkHeader.react','AsyncRequest','ReactComponentWithPureRenderMixin','React','SearchableEntry','XReactComposerTargetChangeController','XUICardSection.react','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('React').PropTypes,j=c('React').createClass({displayName:'ReactComposerWorkHeaderContainer',mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerWorkFeedStore')),c('ReactComposerContextMixin')],propTypes:{config:i.object.isRequired,target:i.object},statics:{calculateState:function k(l,m){var n=c('ReactComposerWorkFeedStore').getDisplayState(l),o=m.target||c('ReactComposerWorkFeedStore').getTarget(l);return {showHeader:n!==c('ReactComposerWorkFeedDisplayState').DEFAULT||o,showSearch:n===c('ReactComposerWorkFeedDisplayState').SEARCH,target:o};}},render:function k(){if(!this.state.showHeader)return c('React').createElement('div',null);return (c('React').createElement(c('XUICardSection.react'),{className:c('joinClasses')(this.props.className,!this.state.showSearch?"_1dzv":'')},this.state.showSearch?c('React').createElement(c('ReactComposerWorkGroupSearch.react'),{onTargetChange:this._onTargetChange}):c('React').createElement(c('ReactComposerWorkHeader.react'),{target:this.state.target})));},_onTargetChange:function k(l){c('ReactComposerWorkFeedActions').setTarget(this.context.composerID,l);c('ReactComposerWorkFeedActions').setDisplayState(this.context.composerID,c('ReactComposerWorkFeedDisplayState').COMPOSER);var m=c('XReactComposerTargetChangeController').getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setString('target_id',l.getUniqueID());new (c('AsyncRequest'))().setURI(m.getURI()).send();}});f.exports=j;}),null);
__d('ReactWorkFeedComposer.react',['cx','fbt','ReactComposerAttachmentActions','ReactComposerAttachmentType','ReactComposerBodyContainer.react','ReactComposerConfig','ReactComposerContextConfig','ReactComposerContextProviderMixin','ReactComposerInit','ReactComposerMediaLazyAttachment.react','ReactComposerStatusLazyAttachment.react','ReactComposerWithSprouts.react','ReactComposerWorkFeedActions','ReactComposerWorkFeedBodyContainer.react','ReactComposerWorkFeedBootloader','ReactComposerWorkFeedStore','ReactComposerWorkHeaderContainer.react','Arbiter','FeedComposerIDStore','LitestandComposer','React','update'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=c('React').PropTypes,k=c('React').createClass({displayName:'ReactWorkFeedComposer',_resetSubscription:undefined,mixins:[c('ReactComposerContextProviderMixin')],propTypes:{contextConfig:c('ReactComposerContextConfig').isRequired,config:c('ReactComposerConfig').isRequired,workTarget:j.object},componentWillMount:function l(){c('FeedComposerIDStore').set(this.props.contextConfig.composerID);},componentDidMount:function l(){var m=this.props.contextConfig.composerID;c('ReactComposerWorkFeedStore').registerComposerID(m);c('ReactComposerWorkFeedActions').setWorkProps(m,this.props);if(this.props.workTarget)c('ReactComposerAttachmentActions').selectAttachment(m,c('ReactComposerAttachmentType').STATUS,true);this._resetSubscription=c('Arbiter').subscribe('ReactComposerFocus/reset/'+m,this._resetTarget);c('LitestandComposer').initComposer(m);},componentWillUnmount:function l(){this._resetSubscription&&this._resetSubscription.unsubscribe();},render:function l(){return (c('React').createElement(c('ReactComposerWithSprouts.react'),{defaultAttachmentOnExpand:c('ReactComposerAttachmentType').STATUS,innerProps:{className:"_5n2b",loggingConfig:this.props.config.loggingConfig}},c('React').createElement(c('ReactComposerWorkHeaderContainer.react'),{config:this.props.config,target:this.props.workTarget}),c('React').createElement(c('ReactComposerWorkFeedBodyContainer.react'),{target:this.props.workTarget,config:this.props.config},c('React').createElement(c('ReactComposerBodyContainer.react'),{expanded:this.props.config.showExpandedComposer},c('React').createElement(c('ReactComposerStatusLazyAttachment.react'),{bootloader:c('ReactComposerWorkFeedBootloader'),config:this.props.config,selected:true,expanded:this.props.config.showExpandedComposer,placeholder:i._("What are you working on?")}),c('React').createElement(c('ReactComposerMediaLazyAttachment.react'),{bootloader:c('ReactComposerWorkFeedBootloader'),key:'media',config:this.props.config})))));},_resetTarget:function l(){var m=c('update')(this.props,{workTarget:{$set:null}});c('ReactComposerInit').changeProps(this.props.contextConfig.composerID,m);}});f.exports=k;}),null);