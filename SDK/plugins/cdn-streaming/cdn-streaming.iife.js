"use strict";var CDNStreaming=(()=>{var me=Object.create;var L=Object.defineProperty,le=Object.defineProperties,ce=Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertyNames,z=Object.getOwnPropertySymbols,ge=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var X=(l,e,i)=>e in l?L(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i,f=(l,e)=>{for(var i in e||(e={}))j.call(e,i)&&X(l,i,e[i]);if(z)for(var i of z(e))Se.call(e,i)&&X(l,i,e[i]);return l},Y=(l,e)=>le(l,pe(e));var be=(l,e)=>()=>(e||l((e={exports:{}}).exports,e),e.exports),Ce=(l,e)=>{for(var i in e)L(l,i,{get:e[i],enumerable:!0})},Z=(l,e,i,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let d of he(e))!j.call(l,d)&&d!==i&&L(l,d,{get:()=>e[d],enumerable:!(u=ce(e,d))||u.enumerable});return l};var Q=(l,e,i)=>(i=l!=null?me(ge(l)):{},Z(e||!l||!l.__esModule?L(i,"default",{value:l,enumerable:!0}):i,l)),De=l=>Z(L({},"__esModule",{value:!0}),l);var S=(l,e,i)=>(X(l,typeof e!="symbol"?e+"":e,i),i);var W=be((ee,H)=>{(function(l){"use strict";function e(t,p){var r=(t&65535)+(p&65535),g=(t>>16)+(p>>16)+(r>>16);return g<<16|r&65535}function i(t,p){return t<<p|t>>>32-p}function u(t,p,r,g,C,D){return e(i(e(e(p,t),e(g,D)),C),r)}function d(t,p,r,g,C,D,I){return u(p&r|~p&g,t,p,C,D,I)}function c(t,p,r,g,C,D,I){return u(p&g|r&~g,t,p,C,D,I)}function m(t,p,r,g,C,D,I){return u(p^r^g,t,p,C,D,I)}function h(t,p,r,g,C,D,I){return u(r^(p|~g),t,p,C,D,I)}function b(t,p){t[p>>5]|=128<<p%32,t[(p+64>>>9<<4)+14]=p;var r,g,C,D,I,o=1732584193,a=-271733879,s=-1732584194,n=271733878;for(r=0;r<t.length;r+=16)g=o,C=a,D=s,I=n,o=d(o,a,s,n,t[r],7,-680876936),n=d(n,o,a,s,t[r+1],12,-389564586),s=d(s,n,o,a,t[r+2],17,606105819),a=d(a,s,n,o,t[r+3],22,-1044525330),o=d(o,a,s,n,t[r+4],7,-176418897),n=d(n,o,a,s,t[r+5],12,1200080426),s=d(s,n,o,a,t[r+6],17,-1473231341),a=d(a,s,n,o,t[r+7],22,-45705983),o=d(o,a,s,n,t[r+8],7,1770035416),n=d(n,o,a,s,t[r+9],12,-1958414417),s=d(s,n,o,a,t[r+10],17,-42063),a=d(a,s,n,o,t[r+11],22,-1990404162),o=d(o,a,s,n,t[r+12],7,1804603682),n=d(n,o,a,s,t[r+13],12,-40341101),s=d(s,n,o,a,t[r+14],17,-1502002290),a=d(a,s,n,o,t[r+15],22,1236535329),o=c(o,a,s,n,t[r+1],5,-165796510),n=c(n,o,a,s,t[r+6],9,-1069501632),s=c(s,n,o,a,t[r+11],14,643717713),a=c(a,s,n,o,t[r],20,-373897302),o=c(o,a,s,n,t[r+5],5,-701558691),n=c(n,o,a,s,t[r+10],9,38016083),s=c(s,n,o,a,t[r+15],14,-660478335),a=c(a,s,n,o,t[r+4],20,-405537848),o=c(o,a,s,n,t[r+9],5,568446438),n=c(n,o,a,s,t[r+14],9,-1019803690),s=c(s,n,o,a,t[r+3],14,-187363961),a=c(a,s,n,o,t[r+8],20,1163531501),o=c(o,a,s,n,t[r+13],5,-1444681467),n=c(n,o,a,s,t[r+2],9,-51403784),s=c(s,n,o,a,t[r+7],14,1735328473),a=c(a,s,n,o,t[r+12],20,-1926607734),o=m(o,a,s,n,t[r+5],4,-378558),n=m(n,o,a,s,t[r+8],11,-2022574463),s=m(s,n,o,a,t[r+11],16,1839030562),a=m(a,s,n,o,t[r+14],23,-35309556),o=m(o,a,s,n,t[r+1],4,-1530992060),n=m(n,o,a,s,t[r+4],11,1272893353),s=m(s,n,o,a,t[r+7],16,-155497632),a=m(a,s,n,o,t[r+10],23,-1094730640),o=m(o,a,s,n,t[r+13],4,681279174),n=m(n,o,a,s,t[r],11,-358537222),s=m(s,n,o,a,t[r+3],16,-722521979),a=m(a,s,n,o,t[r+6],23,76029189),o=m(o,a,s,n,t[r+9],4,-640364487),n=m(n,o,a,s,t[r+12],11,-421815835),s=m(s,n,o,a,t[r+15],16,530742520),a=m(a,s,n,o,t[r+2],23,-995338651),o=h(o,a,s,n,t[r],6,-198630844),n=h(n,o,a,s,t[r+7],10,1126891415),s=h(s,n,o,a,t[r+14],15,-1416354905),a=h(a,s,n,o,t[r+5],21,-57434055),o=h(o,a,s,n,t[r+12],6,1700485571),n=h(n,o,a,s,t[r+3],10,-1894986606),s=h(s,n,o,a,t[r+10],15,-1051523),a=h(a,s,n,o,t[r+1],21,-2054922799),o=h(o,a,s,n,t[r+8],6,1873313359),n=h(n,o,a,s,t[r+15],10,-30611744),s=h(s,n,o,a,t[r+6],15,-1560198380),a=h(a,s,n,o,t[r+13],21,1309151649),o=h(o,a,s,n,t[r+4],6,-145523070),n=h(n,o,a,s,t[r+11],10,-1120210379),s=h(s,n,o,a,t[r+2],15,718787259),a=h(a,s,n,o,t[r+9],21,-343485551),o=e(o,g),a=e(a,C),s=e(s,D),n=e(n,I);return[o,a,s,n]}function _(t){var p,r="",g=t.length*32;for(p=0;p<g;p+=8)r+=String.fromCharCode(t[p>>5]>>>p%32&255);return r}function T(t){var p,r=[];for(r[(t.length>>2)-1]=void 0,p=0;p<r.length;p+=1)r[p]=0;var g=t.length*8;for(p=0;p<g;p+=8)r[p>>5]|=(t.charCodeAt(p/8)&255)<<p%32;return r}function E(t){return _(b(T(t),t.length*8))}function G(t,p){var r,g=T(t),C=[],D=[],I;for(C[15]=D[15]=void 0,g.length>16&&(g=b(g,t.length*8)),r=0;r<16;r+=1)C[r]=g[r]^909522486,D[r]=g[r]^1549556828;return I=b(C.concat(T(p)),512+p.length*8),_(b(D.concat(I),512+128))}function y(t){var p="0123456789abcdef",r="",g,C;for(C=0;C<t.length;C+=1)g=t.charCodeAt(C),r+=p.charAt(g>>>4&15)+p.charAt(g&15);return r}function O(t){return unescape(encodeURIComponent(t))}function U(t){return E(O(t))}function q(t){return y(U(t))}function B(t,p){return G(O(t),O(p))}function A(t,p){return y(B(t,p))}function V(t,p,r){return p?r?B(p,t):A(p,t):r?U(t):q(t)}typeof define=="function"&&define.amd?define(function(){return V}):typeof H=="object"&&H.exports?H.exports=V:l.md5=V})(ee)});var Ne={};Ce(Ne,{CDNStreaming:()=>J,PublishMode:()=>M,TRTCStreamType:()=>$,default:()=>Ae});var te=Q(W(),1);var M=(u=>(u.PublishMainStreamToCDN="publish-main-stream-to-cdn",u.PublishSubStreamToCDN="publish-sub-stream-to-cdn",u.PublishMixStreamToCDN="publish-mix-stream-to-cdn",u))(M||{}),$=(i=>(i.Main="main",i.Sub="sub",i))($||{});var K={IT_AUDIO_VIDEO:0,IT_PICTURE:2,IT_CANVAS:3,IT_PURE_AUDIO:4,IT_PURE_VIDEO:5};var R=class{constructor(e,i){S(this,"_core");S(this,"_room");S(this,"_log");S(this,"_params");S(this,"_publishGivenCDNData",null);this._core=e,this._room=e.room,this._log=i}get isPublishingGivenCDN(){return!!this._params}async startPublishGivenCDN(e){if(this._log.info(`[CDNStreaming] startPublishGivenCDN() current: ${JSON.stringify(this._params)}, params: ${JSON.stringify(e)}`),this.isPublishingGivenCDN){let{appId:i,bizId:u,url:d}=this._params||{};if(i===e.appId&&u===e.bizId&&d===e.url)return;await this.stopPublishGivenCDN()}this._params=e,this._publishGivenCDNData={pushRequestTime:Date.now(),pushAppId:e.appId,pushBizId:e.bizId,pushCdnUrl:e.url,pushStreamType:this.convertStreamType(e==null?void 0:e.publishMode),pushStreamId:e.streamId};try{let i=await this._room.sendStartPublishCDN(this._publishGivenCDNData,!1),{code:u,message:d}=i.data;if(u===0)this._log.info("[CDNStreaming] server success: start given cdn.");else throw this.resetGivenCDN(),this._log.error(`[CDNStreaming] server failed: start given cdn errCode: ${u} errMsg: ${d} options: ${JSON.stringify(e)}`),new Error(`[CDNStreaming] server failed: start given cdn errCode: ${u} errMsg: ${d}`)}catch(i){throw this.resetGivenCDN(),i}}async stopPublishGivenCDN(){if(this._log.info("[CDNStreaming] stopPublishGivenCDN"),!this.isPublishingGivenCDN||!this._publishGivenCDNData){this.resetGivenCDN();return}let{pushAppId:e,pushBizId:i,pushCdnUrl:u,pushStreamType:d,pushStreamId:c}=this._publishGivenCDNData,m={pushRequestTime:Date.now(),pushAppId:e,pushBizId:i,pushCdnUrl:u,pushStreamType:d,pushStreamId:c},h=await this._room.sendStopPublishCDN(m,!1),{code:b,message:_}=h.data;if(b===0)this._log.info("[CDNStreaming] server success: stop given cdn."),this.resetGivenCDN();else throw this._log.error(`[CDNStreaming] server failed: stop given cdn errCode: ${b} errMsg: ${_} data: ${JSON.stringify(m)}`),new Error(`[CDNStreaming] server failed: stop given cdn errCode: ${b} errMsg: ${_}`)}resetGivenCDN(){this._publishGivenCDNData=null,this._params=void 0}convertStreamType(e){return e==="publish-sub-stream-to-cdn"?"aux":"main"}};var x=class{constructor(e,i){S(this,"_core");S(this,"_room");S(this,"_log");S(this,"_config",null);S(this,"_data",null);S(this,"_givenCDNManager");this._core=e,this._room=e.room,this._log=i,this.reset()}get isMixing(){return!!this._data}get isStarted(){return!!this._config}get hasCustomCDN(){var e,i,u;return((e=this._config)==null?void 0:e.target.appId)&&((i=this._config)==null?void 0:i.target.bizId)&&((u=this._config)==null?void 0:u.target.url)}async startMixTranscode(e){if(this._log.info(`startMixTranscode: ${JSON.stringify(e)}`),this._config=e,this.installEvents(),!!this._core.room.isJoined)try{let i=this.getInputParam(e),u=this.getOutputParam(e),d=this.getOutputSessionId({config:e,roomId:this._room.roomId,userId:this._room.userId});this.isMixing&&this._data&&d!==this._data.outputSessionId&&(this._log.info("[CDNStreaming] streamId changed, auto stop mixing before start"),await this.doStopMixTranscode()),await this.doStartMixTranscode({outputSessionId:d,inputParam:i,outputParam:u});let{appId:c,bizId:m,url:h,streamId:b=""}=e.target;c&&m&&h&&(this._givenCDNManager||(this._givenCDNManager=new R(this._core,this._log)),await this._givenCDNManager.startPublishGivenCDN({publishMode:e.target.publishMode,appId:c,bizId:m,url:h,streamId:b}))}catch(i){throw this.reset(),i}}async doStartMixTranscode({outputSessionId:e,inputParam:i,outputParam:u}){let d={roomId:String(this._room.roomId),mcuRequestTime:Date.now(),outputSessionId:e,inputParam:i,outputParam:u};this._log.info(`[CDNStreaming] doStartMixTranscode: ${JSON.stringify(d)}`);let c=await this._room.sendStartMixTranscode(d),{code:m}=c.data,{message:h}=c.data;if(m===0)this._log.info("[CDNStreaming] server success: start mix"),this._data=d;else throw m===-102083&&(h=`Please enable relayed-push in ${this._core.constants.CLOUD_CONSOLE_URL} and try later, refer to ${this._core.constants.DOC_URL}tutorial-26-advanced-publish-cdn-stream.html`),this._log.error(`[CDNStreaming] server failed: start mix errCode: ${m} errMsg: ${h}`),new Error(`[CDNStreaming] server failed: start mix errCode: ${m} errMsg: ${h}`)}async stopMixTranscode(){this._log.info("[CDNStreaming] stopMixTranscode");try{this.isStarted&&this.isMixing&&(await this.doStopMixTranscode(),this._config&&this.hasCustomCDN&&this._givenCDNManager&&await this._givenCDNManager.stopPublishGivenCDN())}catch(e){throw e}this.reset()}async doStopMixTranscode(){let e={mcuRequestTime:Date.now(),outputSessionId:this._data.outputSessionId,streamType:this._data.outputParam.streamType};this._log.info(`[CDNStreaming] doStopMixTranscode: ${JSON.stringify(e)}`);let i=await this._room.sendStopMixTranscode(e),{code:u,message:d}=i.data;if(u===0)this._log.info("[CDNStreaming] server success: stop mix"),this.reset();else throw this._log.error(`[CDNStreaming] server failed: stop mix errCode: ${u} errMsg: ${d}`),new Error(`[CDNStreaming] server failed: stop mix errCode: ${u} errMsg: ${d}`)}reset(){this._config=null,this._data=null,this.uninstallEvents()}installEvents(){this._core.room.on("joined",this.handleRoomJoined,this),this._core.room.on("left",this.handleRoomLeft,this)}uninstallEvents(){this._core.room.off("joined",this.handleRoomJoined,this),this._core.room.off("left",this.handleRoomLeft,this)}async handleRoomJoined(){this._log.info(`[CDNStreaming] handleJoined: ${JSON.stringify(this._config)}`),this.isStarted&&this._config&&await this.startMixTranscode(this._config)}async handleRoomLeft(){this._log.info(`[CDNStreaming] handleRoomLeft: ${JSON.stringify(this._config)}`),this._data=null}getOutputSessionId({config:e,userId:i,roomId:u}){return this._core.utils.isString(e.target.streamId)&&e.target.streamId.length>0?e.target.streamId:(0,te.default)(`${u}_${i}_main`)}getStringRoomId(e,i){return e?String(e):i}getInputParam(e){let{mix:i={}}=e,{audioMixUserList:u=[],videoLayoutList:d=[]}=i,c=d.map(m=>({userId:m.fixedVideoUser.userId,roomId:this.getStringRoomId(m.fixedVideoUser.roomId,m.fixedVideoUser.strRoomId)||this._core.room.roomId,width:m.width||0,height:m.height||0,locationX:m.locationX||0,locationY:m.locationY||0,zOrder:m.zOrder||1,streamType:m.fixedVideoStreamType==="sub"?1:0,inputType:K.IT_PURE_VIDEO,renderMode:m.fillMode||0}));return u.forEach(m=>{let h=c.findIndex(b=>b.userId===m.userId&&b.roomId===this.getStringRoomId(m.roomId,m.strRoomId));h!==-1?c[h].inputType=K.IT_AUDIO_VIDEO:c.push({userId:m.userId,roomId:m.roomId||m.strRoomId||this._core.room.roomId,inputType:K.IT_PURE_AUDIO})}),c}getOutputParam(e){let i=e.target.streamId||"",{encoding:u={},mix:d={}}=e;return{streamId:i,streamType:i.length>0?1:0,width:this._core.utils.isUndefined(u.videoWidth)?640:u.videoWidth,height:this._core.utils.isUndefined(u.videoHeight)?480:u.videoHeight,videoBps:u.videoBitrate||0,fps:u.videoFramerate||15,gop:u.videoGOP||2,audioSampleRate:u.audioSampleRate||48e3,audioBps:u.audioBitrate||64,audioChannels:u.audioChannels||1,backgroundColor:d.backgroundColor||0,backgroundImg:d.backgroundImage||"",extraInfo:"",videoCodec:2,audioCodec:0}}};var F=Q(W(),1);var v=class{constructor(e,i){S(this,"_room");S(this,"_core");S(this,"_log");S(this,"_paramsForTencentCDN");S(this,"_initParamsForTencentCDN",{isPublished:!1,isStarted:!1});this._core=e,this._room=e.room,this._log=i,this._paramsForTencentCDN=new Map([["publish-main-stream-to-cdn",this._initParamsForTencentCDN],["publish-sub-stream-to-cdn",this._initParamsForTencentCDN]])}installEvents(){this._core.innerEmitter.on("104",this.handlePublished,this),this._core.room.on("left",this.handleRoomLeft,this)}uninstallEvents(){this._core.innerEmitter.off("104",this.handlePublished,this),this._core.room.off("left",this.handleRoomLeft,this)}async handlePublished({track:e}){var d;if(e.room!==this._room||(this._log.info(`[CDNStreaming] handlePublished: mediaType ${e.mediaType}, roomID ${(d=e==null?void 0:e.room)==null?void 0:d.roomId}`),e.mediaType===1))return;let i=e.mediaType===4?"publish-main-stream-to-cdn":"publish-sub-stream-to-cdn",u=this._paramsForTencentCDN.get(i)||null;u!=null&&u.target&&u.isStarted&&await this.startPublishTencentCDN(u.target)}async handleRoomLeft(){this._log.info("[CDNStreaming] handleRoomLeft"),this.changeDataStatus("publish-main-stream-to-cdn",{isPublished:!1}),this.changeDataStatus("publish-sub-stream-to-cdn",{isPublished:!1})}isStreamPublished(e){return e==="publish-main-stream-to-cdn"&&!this._room.isMainStreamPublished?(this._log.info("[CDNStreaming] Main stream has not already published, will auto reStart after published."),!1):e==="publish-sub-stream-to-cdn"&&!this._room.isAuxStreamPublished?(this._log.info("[CDNStreaming] Sub has not already published, will auto reStart after published."),!1):!0}changeDataStatus(e,i){let u=this._paramsForTencentCDN.get(e),d=f(f({},u),i);this._paramsForTencentCDN.set(e,d)}async startPublishTencentCDN(e){if(this._log.info(`[CDNStreaming] startPublishTencentCDN ${JSON.stringify(e)}`),this.installEvents(),this.changeDataStatus(e.publishMode,{target:e,isStarted:!0}),!this.isStreamPublished(e.publishMode))return;let i=e.streamId||"",u=this.generatePublishCDNStreamId(i,e.publishMode),d=this.generatePublishCDNSessionId(e.publishMode),c=e.publishMode==="publish-sub-stream-to-cdn"?1:0,m={requestTime:Date.now(),sessionId:d,streamId:u,streamType:c};await this.doStartPublishTencentCDN(m,e.publishMode);let{appId:h,bizId:b,url:_}=e;if(h&&b&&_){let T=this._paramsForTencentCDN.get(e.publishMode)||this._initParamsForTencentCDN;T!=null&&T.givenCDNManager||(T.givenCDNManager=new R(this._core,this._log),this._paramsForTencentCDN.set(e.publishMode,T)),await T.givenCDNManager.startPublishGivenCDN({publishMode:e.publishMode,appId:h,bizId:b,url:_,streamId:u})}}async doStartPublishTencentCDN(e,i){this._log.info(`[CDNStreaming] doStartPublishTencentCDN: ${JSON.stringify(e)}`);let u=6,d=500,c=0;for(;;){let m=await this._room.sendStartPublishCDN(e,!0),{code:h}=m.data,{message:b}=m.data;if(h===0){this._log.info("[CDNStreaming] server success: start tencent cdn"),this.changeDataStatus(i,{isPublished:!0});break}else if(h===-10006&&c<u)this._log.warn(`[CDNStreaming] doStartPublishTencentCDN: retry...${c+1}/6, reason: ${b}`),c+=1,await new Promise(_=>setTimeout(_,d));else throw this.changeDataStatus(i,{isPublished:!1}),h===-102083&&(b=`Please enable relayed-push in ${this._core.constants.CLOUD_CONSOLE_URL} and try later, refer to ${this._core.constants.DOC_URL}tutorial-26-advanced-publish-cdn-stream.html`),this._log.error(`[CDNStreaming] server failed: start tencent cdn errCode: ${h} errMsg: ${b}`),new Error(`[CDNStreaming] server failed: start tencent cdn errCode: ${h} errMsg: ${b}`)}}async stopPublishTencentCDN(e){this._log.info(`[CDNStreaming] doStartPublishTencentCDN: ${JSON.stringify(e)}`);let i=this._paramsForTencentCDN.get(e)||this._initParamsForTencentCDN;if(i.isPublished){let{target:u}=i;u!=null&&u.bizId&&u.appId&&u.url&&(i!=null&&i.givenCDNManager)&&await(i==null?void 0:i.givenCDNManager.stopPublishGivenCDN()),await this.doStopPublishTencentCDN(e)}this._paramsForTencentCDN.set(e,this._initParamsForTencentCDN)}async doStopPublishTencentCDN(e){let i={requestTime:Date.now(),sessionId:(0,F.default)(`${this._room.roomId}_${this._room.userId}_${this.convertPublishModeToStreamType(e)}`)};this._log.info(`[CDNStreaming] doStopPublishTencentCDN: ${JSON.stringify(i)}`);let u=await this._room.sendStopPublishCDN(i,!0),{code:d}=u.data,{message:c}=u.data;if(d===0)this._log.info("[CDNStreaming] server success: stop tencent cdn"),this._paramsForTencentCDN.set(e,this._initParamsForTencentCDN),this.reset(e);else throw d===-102069&&(this._paramsForTencentCDN.set(e,this._initParamsForTencentCDN),c=`can not stop in auto relayed-push mode ${c}`),this._log.error(`[CDNStreaming] server failed: stop tencent cdn errCode: ${d} errMsg: ${c}`),new Error(`[CDNStreaming] server failed: stop tencent cdn errCode: ${d} errMsg: ${c}`)}reset(e){this.uninstallEvents(),this._paramsForTencentCDN.set(e,this._initParamsForTencentCDN)}generatePublishCDNStreamId(e,i){if(e===""){let u=`${this._room.roomId}_${this._room.userId}_${this.convertPublishModeToStreamType(i)}`;return/^[A-Za-z\d_-]*$/.test(u)||(u=(0,F.default)(u)),`${this._room.sdkAppId}_${u}`}return e}convertPublishModeToStreamType(e){return e==="publish-main-stream-to-cdn"?"main":"aux"}generatePublishCDNSessionId(e){return(0,F.default)(`${this._room.roomId}_${this._room.userId}_${this.convertPublishModeToStreamType(e)}`)}};var re=l=>typeof l=="string";var N;function _e(l,e,i,u){if(!/^[A-Za-z\d_-]*$/.test(l)){let{RtcError:c,ErrorCode:m,ErrorCodeDictionary:h}=N;throw new c({code:m.INVALID_PARAMETER,extraCode:h.INVALID_STREAM_ID,messageParams:{key:"streamId"}})}}function Ie(l,e,i,u){let{RtcError:d,ErrorCode:c,ErrorCodeDictionary:m}=N;if(re(l))throw new d({code:c.INVALID_PARAMETER,extraCode:m.INVALID_ROOM_ID_INTEGER_STRING,fnName:i,messageParams:{key:"roomId"}});if(l===void 0)return;if(!(/^[1-9]\d*$/.test(String(l))&&l<4294967295))throw new d({code:c.INVALID_PARAMETER,extraCode:m.INVALID_ROOM_ID_INTEGER,fnName:i,messageParams:{key:"roomId"}})}function fe(l,e,i,u){let{RtcError:d,ErrorCode:c,ErrorCodeDictionary:m}=N;if(!/^[A-Za-z\d\s!#$%&()+\-:;<=.>?@[\]^_{}|~,]{1,64}$/.test(l))throw new d({code:c.INVALID_PARAMETER,extraCode:m.INVALID_ROOM_ID_STRING,fnName:i,messageParams:{key:"strRoomId"}})}var P={type:"number",notLessThanZero:!0},ie={type:"object",required:!0,properties:{userId:{required:!0,type:"string"},roomId:{type:["string","number"],validate:Ie},strRoomId:{type:"string",validate:fe}}},oe={required:!0,properties:{publishMode:{required:!0,values:["publish-main-stream-to-cdn","publish-mix-stream-to-cdn","publish-sub-stream-to-cdn"]},streamId:{required:!1,type:"string",validate:_e},appId:{type:"number",allowEmpty:!1},bizId:{type:"number",allowEmpty:!1},url:{type:"string",allowEmpty:!1}}},ae={required:!1,type:"object",properties:{videoWidth:P,videoHeight:P,videoBitrate:Y(f({},P),{allowEmpty:!1}),videoFramerate:{type:"number",validate(l,e,i,u){if(l<=0||l>30){let{RtcError:d,ErrorCode:c}=N;throw new d({code:c.INVALID_PARAMETER,message:"Invalid parameter mixConfig -> videoFramerate, the value must be between (0, 30]."})}}},videoGOP:{type:"number",validate(l,e,i,u){if(l<1||l>8){let{RtcError:d,ErrorCode:c}=N;throw new d({code:c.INVALID_PARAMETER,message:"Invalid parameter mixConfig -> videoGOP, the value must be between [1, 8]."})}}},audioSampleRate:P,audioBitrate:{type:"number",validate(l,e,i,u){if(l<32||l>192){let{RtcError:d,ErrorCode:c}=N;throw new d({code:c.INVALID_PARAMETER,message:"Invalid parameter mixConfig -> audioBitrate, the value must be between [32, 192]."})}}},audioChannels:{type:"number",values:[1,2]}}},se={required:!1,type:"object",properties:{backgroundColor:{type:"number"},backgroundImage:{type:"string"},audioMixUserList:{type:"array",arrayItem:f({},ie)},videoLayoutList:{type:"array",required:!0,arrayItem:{type:"object",properties:{fixedVideoUser:f({},ie),fixedVideoStreamType:{type:"string",required:!0,values:["main","sub"]},fillMode:{type:"number",values:[0,1,2,4]},zOrder:{type:"number",required:!0,validate(l,e,i,u){if(l<1||l>15){let{RtcError:d,ErrorCode:c}=N;throw new d({code:c.INVALID_PARAMETER,message:"Invalid parameter mix -> videoLayoutList -> zOrder, the value must be between [1, 15]."})}}},width:P,height:P,locationX:P,locationY:P}}}}};function ne(l){return N=l.errorModule,{name:"CDNStreamingOptions",type:"object",required:!0,allowEmpty:!1,properties:{target:f({},oe),encoding:f({},ae),mix:f({},se)},validate(e,i,u,d){var b,_;let{publishMode:c}=e.target,{encoding:m,mix:h}=e;if(c==="publish-mix-stream-to-cdn"){let{RtcError:T,ErrorCode:E,ErrorCodeDictionary:G}=l.errorModule;if(!m)throw new T({code:E.INVALID_PARAMETER,extraCode:G.INVALID_PARAMETER_REQUIRED,fnName:u,messageParams:{key:"encoding"}});if(!h)throw new T({code:E.INVALID_PARAMETER,extraCode:G.INVALID_PARAMETER_REQUIRED,fnName:u,messageParams:{key:"mix"}});if(h&&h.videoLayoutList){let y=0,O=0,U=[];if(h.videoLayoutList.forEach((A,V)=>{U.push(A.fixedVideoUser.userId),A.width+A.locationX>y&&(y=A.width+A.locationX),A.height+A.locationY>O&&(O=A.height+A.locationY)}),U.indexOf(l.room.userId)<0)throw new T({code:E.INVALID_PARAMETER,message:"Invalid parameter mix -> videoLayoutList, the value must be include self."});let q=(b=m==null?void 0:m.videoWidth)!=null?b:640,B=(_=m==null?void 0:m.videoHeight)!=null?_:480;if(q<y||B<O)throw new T({code:E.INVALID_PARAMETER,message:"Invalid parameter encoding, the width and height of the mixed video must encompass all the mixed-in video streams."})}}}}}function ue(l){return N=l.errorModule,{name:"CDNStreamingOptions",type:"object",required:!0,allowEmpty:!1,properties:{target:f({},oe),encoding:f({},ae),mix:f({},se)}}}function de(l){return N=l.errorModule,{name:"CDNStreamingOptions",type:"object",required:!0,allowEmpty:!1,properties:{target:{required:!0,properties:{publishMode:{required:!0,values:["publish-main-stream-to-cdn","publish-mix-stream-to-cdn","publish-sub-stream-to-cdn"]}}}}}}var w=0,k=class k{constructor(e){this.core=e;S(this,"_mixTranscodeManager");S(this,"_publishCDNManager");S(this,"_core");S(this,"_modeOptions");S(this,"seq");S(this,"_log");w=w+1,this.seq=w,this._log=e.log.createChild({id:`${this.getAlias()}${w}`}),this._log.info(`[CDNStreaming] created id=${this.getAlias()}${w}`),this._core=e,this._modeOptions=new Map,this._mixTranscodeManager=new x(e,this._log),this._publishCDNManager=new v(e,this._log)}getName(){return k.Name}getAlias(){return"cdn"}getValidateRule(e){switch(e){case"start":return ne(this._core);case"update":return ue(this._core);case"stop":return de(this._core)}}getGroup(e){return e.target.publishMode}async start(e){return this._modeOptions.set(e.target.publishMode,e),await this.doStart(e)}async update(e){let i=this._modeOptions.get(e.target.publishMode);return this._core.utils.deepMerge(i,e),await this.doStart(i)}async stop(e){switch(e.target.publishMode){case"publish-mix-stream-to-cdn":{await this._mixTranscodeManager.stopMixTranscode();break}case"publish-main-stream-to-cdn":case"publish-sub-stream-to-cdn":{await this._publishCDNManager.stopPublishTencentCDN(e.target.publishMode);break}}this._modeOptions.delete(e.target.publishMode)}async doStart(e){switch(this._log.info(`[CDNStreaming] doStart: ${JSON.stringify(e)}`),e.target.publishMode){case"publish-mix-stream-to-cdn":{await this._mixTranscodeManager.startMixTranscode(e);break}case"publish-main-stream-to-cdn":case"publish-sub-stream-to-cdn":{await this._publishCDNManager.startPublishTencentCDN(e.target);break}}}};S(k,"TYPE",{PublishMode:{PublishMainStreamToCDN:"publish-main-stream-to-cdn",PublishSubStreamToCDN:"publish-sub-stream-to-cdn",PublishMixStreamToCDN:"publish-mix-stream-to-cdn"}}),S(k,"Name","CDNStreaming");var J=k;var Ae=J;return De(Ne);})().default;
