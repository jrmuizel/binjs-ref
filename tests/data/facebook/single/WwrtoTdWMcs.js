if (self.CavalryLogger) { CavalryLogger.start_js(["Wda7Q"]); }

__d('Emoji',['DOMEmoji','JSXDOM','emojiAndEmote','transformTextToDOM'],(function a(b,c,d,e,f,g){var h={htmlEmojiAndEmote:function i(j,k){return c('JSXDOM').span(null,c('emojiAndEmote')(j)).innerHTML;},htmlEmojiAndEmoteWithoutFBID:function i(j,k){return c('JSXDOM').span(null,c('emojiAndEmote')(j,false)).innerHTML;},htmlEmoji:function i(j,k){return c('JSXDOM').span(null,c('transformTextToDOM')(j,c('DOMEmoji').params({size:k}))).innerHTML;}};f.exports=h;}),null);
__d('Emote',['DOMEmote','JSXDOM','transformTextToDOM'],(function a(b,c,d,e,f,g){var h={htmlEmoteWithoutFBID:function i(j,k){return c('JSXDOM').span(null,c('transformTextToDOM')(j,c('DOMEmote'))).innerHTML;},htmlEmote:function i(j,k){return (c('JSXDOM').span(null,c('transformTextToDOM')(j,[c('DOMEmote')])).innerHTML);}};f.exports=h;}),null);
__d('LegacyTextWithEmoticons.react',['Emoji','Emote','React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';if(!this.props.renderEmoticons&&!this.props.renderEmoji)return c('React').createElement('span',null,this.props.text);var k;if(this.props.renderEmoticons&&this.props.renderEmoji){k=c('Emoji').htmlEmojiAndEmoteWithoutFBID(this.props.text);}else if(this.props.renderEmoticons){k=c('Emote').htmlEmoteWithoutFBID(this.props.text);}else k=c('Emoji').htmlEmoji(this.props.text,this.props.size);if(k.indexOf('<')===-1)return c('React').createElement('span',null,this.props.text);return c('React').createElement('span',{dangerouslySetInnerHTML:{__html:k}});};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);