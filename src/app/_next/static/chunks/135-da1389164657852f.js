(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[135],{68394:function(e,t,i){"use strict";i.d(t,{ap:function(){return Y},Ux:function(){return m}});var n,a,s=i(20794);let o=e=>!!e&&e.some(e=>{let[t]=(null==e?void 0:e.split(":"))||[];return e===s.sHr||t&&s.kF5.includes(t)});var r=i(97898);let l=e=>{let{type:t,tag:i}=e.id;return{title:e.name,seed:"".concat(t,":").concat(i),specialContext:e.specialContext,specialContextImage:e.specialContextImage}},c=e=>({value:e.value,title:e.name,seed:e.serializedSeed,imageUrl:e.imageUrl}),d=(e,t)=>{let i=[];return t.possibleValues.forEach(e=>{e.unspecified||i.push(c(e))}),{type:e,title:t.name,values:(0,r.pj)(i)}};(n=a||(a={})).DIVERSITY="diversity",n.MOOD_ENERGY="moodEnergy",n.LANGUAGE="language";let u=r.V5.model("ContextItem",{title:r.V5.string,seed:r.V5.string,specialContext:r.V5.boolean,specialContextImage:r.V5.optional(r.V5.string,"")}),g=r.V5.model("RestrictonValue",{value:r.V5.string,title:r.V5.string,seed:r.V5.string,imageUrl:r.V5.maybe(r.V5.string)}),_=r.V5.model("Restricton",{type:r.V5.enumeration(Object.values(a)),title:r.V5.string,values:r.V5.array(g)}),m=r.V5.model("VibeSettings",{loadingState:r.V5.enumeration(Object.values(s.Gui)),contextItems:r.V5.array(u),diversity:r.V5.maybeNull(_),moodEnergy:r.V5.maybeNull(_),language:r.V5.maybeNull(_)}).views(e=>({get isNeededToLoad(){return e.loadingState===s.Gui.IDLE}})).actions(e=>({getData:(0,r.ls)(function*(t){let{rotorResource:i,modelActionsLogger:n}=(0,r.dU)(e);if(e.loadingState!==s.Gui.PENDING)try{var o,c,u,g;e.loadingState=s.Gui.PENDING;let n=yield i.waveSettings(t);(null==n?void 0:null===(o=n.settingRestrictions)||void 0===o?void 0:o.diversity)&&(e.diversity=d(a.DIVERSITY,n.settingRestrictions.diversity)),(null==n?void 0:null===(c=n.settingRestrictions)||void 0===c?void 0:c.moodEnergy)&&(e.moodEnergy=d(a.MOOD_ENERGY,n.settingRestrictions.moodEnergy)),(null==n?void 0:null===(u=n.settingRestrictions)||void 0===u?void 0:u.language)&&(e.language=d(a.LANGUAGE,n.settingRestrictions.language));let _=Array.isArray(null==n?void 0:n.blocks)&&(null==n?void 0:null===(g=n.blocks)||void 0===g?void 0:g.find(e=>(null==e?void 0:e.type)==="contexts"));_&&Array.isArray(_.items)&&(e.contextItems=(0,r.pj)(_.items.map(l))),e.loadingState!==s.Gui.IDLE&&(e.loadingState=s.Gui.RESOLVE)}catch(t){n.error(t),e.loadingState!==s.Gui.IDLE&&(e.loadingState=s.Gui.REJECT)}}),reset(){e.loadingState=s.Gui.IDLE,e.contextItems=(0,r.pj)([]),e.diversity=null,e.moodEnergy=null,e.language=null}}));var b=i(95660),p=i(44744),v=i(71859),x=i(36621),h=i(71037),E=i(9883),y=i(39661),B=i(93062),N=i(15706),S=i(7669),I=i(91972),V=i(42255);let R=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,i]=(0,v.useState)(e),{contentRef:n}=(0,s.$Y6)();return(0,v.useEffect)(()=>{let e=new ResizeObserver(e=>{let[n]=e||[];n&&n.contentRect.height!==t&&i(n.contentRect.height)});return n&&e.observe(n),()=>{e.disconnect()}},[t,n]),{contentHeight:t}};var f=i(23974),j=i(22899),C=i(76730),T=i.n(C);let G=e=>{let{title:t,children:i,restrictionsClassName:n,...a}=e;return(0,b.jsxs)("section",{className:T().root,...(0,s.tEg)(a),children:[(0,b.jsx)(V.Caption,{variant:"span",type:"text",size:"m",weight:"medium","aria-hidden":!0,children:t}),(0,b.jsx)(j.y,{children:(0,b.jsx)(V.Heading,{variant:"h4",children:t})}),(0,b.jsx)("div",{className:(0,f.W)(T().restrictions,n),children:i})]})};var L=i(28227);let k=e=>{var t,i,n;let{seed:a,title:o,isStation:r}=e,{vibe:l}=(0,s.oR4)(),{applySetting:c}=(0,s.QhE)({seeds:null!==(n=null===(t=l.meta)||void 0===t?void 0:t.seeds)&&void 0!==n?n:[],pageIdForFrom:s.Rhz.HOME,blockIdForFrom:s.BEo.RUP_MAIN_RADIO}),{formatMessage:d}=(0,x.Z)(),u=!!(null===(i=l.meta)||void 0===i?void 0:i.seeds.includes(a)),g=l.applyingSetting===a,_=(0,v.useMemo)(()=>u?"".concat(d({id:"vibe-actions.remove"})," ").concat(o):"".concat(d({id:"vibe-actions.apply"})," ").concat(o),[u,o,d]);return{isApplying:g,isSelected:u,ariaLabel:_,ariaPressed:u,onClickHandler:(0,v.useCallback)(async()=>{l.setApplyingSetting(a),await c(a,r),l.setApplyingSetting()},[c,r,a,l])}};var A=i(22804),O=i.n(A);let z=(0,p.Pi)(e=>{let{item:t}=e,{vibe:i}=(0,s.oR4)(),n=(0,v.useRef)(null),{isApplying:a,isSelected:o,ariaPressed:r,onClickHandler:l}=k({seed:t.seed,title:t.title,isStation:!0}),c=(0,v.useCallback)(e=>{i.isLoading||(n.current&&(0,y.m)(e,O().ripple,n.current),l())},[l,i.isLoading]);return(0,b.jsxs)(B.z,{radius:"xxxl",className:(0,f.W)(O().button,O().textButton,{[O().button_selected]:o,[O().button_applying]:a,[O().specialButton]:t.specialContext}),onClick:c,"aria-disabled":i.isLoading,"aria-pressed":r,withRipple:!1,...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON),children:[t.specialContext&&(0,b.jsx)(L.Image,{className:O().specialImage,src:t.specialContextImage,size:100,fit:"cover",withAvatarReplace:!0}),(0,b.jsx)(V.Caption,{variant:"span",type:"controls",size:"m",weight:"medium",className:O().title,children:t.title}),(0,b.jsx)("div",{className:O().rippleContainer,ref:n})]})}),M=(0,p.Pi)(e=>{let{type:t,restrictionValue:i}=e,{vibe:n}=(0,s.oR4)(),o=(0,v.useRef)(null),{isApplying:r,isSelected:l,ariaPressed:c,onClickHandler:d}=k({seed:i.seed,title:i.title}),u=(0,v.useCallback)(e=>{n.isLoading||(o.current&&(0,y.m)(e,O().ripple,o.current),d())},[d,n.isLoading]),g=(0,v.useMemo)(()=>(0,b.jsx)(V.Caption,{variant:"span",type:"controls",size:"m",weight:"medium",className:O().title,children:i.title}),[i.title]);switch(t){case a.DIVERSITY:return(0,b.jsxs)(B.z,{className:(0,f.W)(O().button,O().diversityButton,{[O().button_selected]:l,[O().button_applying]:r}),radius:"xl","aria-disabled":n.isLoading,"aria-pressed":c,onClick:u,withRipple:!1,...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_DIVERSITY_BUTTON),children:[(0,b.jsx)(L.Image,{"aria-hidden":!0,src:i.imageUrl,fit:"contain",width:40,height:40,withAvatarReplace:!0,className:O().diversityButtonImage}),g,(0,b.jsx)("div",{className:O().rippleContainer,ref:o})]});case a.MOOD_ENERGY:return(0,b.jsxs)("div",{className:O().moodEnergy,...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BUTTON),children:[(0,b.jsx)(B.z,{variant:"text",className:(0,f.W)(O().button,O().moodEnergyButton,{[O().button_selected]:l,[O().button_applying]:r}),radius:"round",onClick:u,withRipple:!1,"aria-disabled":n.isLoading,"aria-pressed":c,"aria-label":i.title,children:(0,b.jsx)(L.Image,{src:i.imageUrl,fit:"contain",width:52,height:52,"aria-hidden":!0,withAvatarReplace:!0,className:O().moodEnergyButtonImage})}),(0,b.jsx)("span",{"aria-hidden":!0,children:g})]});case a.LANGUAGE:return(0,b.jsxs)(B.z,{radius:"xxxl",className:(0,f.W)(O().button,O().textButton,{[O().button_selected]:l,[O().button_applying]:r}),onClick:u,withRipple:!1,"aria-disabled":n.isLoading,"aria-pressed":c,...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_LANGUAGE_BUTTON),children:[g,(0,b.jsx)("div",{className:O().rippleContainer,ref:o})]});default:return null}});var P=i(17575),U=i.n(P);let w=(0,p.Pi)(()=>{let{vibeSettings:e}=(0,s.oR4)(),{formatMessage:t}=(0,x.Z)();return e.isNeededToLoad&&e.getData(),(0,b.jsxs)("div",{className:U().root,children:[e.contextItems.length>0&&(0,b.jsx)(G,{title:t({id:"interface-actions.my-vibe-context-settings"}),restrictionsClassName:U().contextItems,...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_CONTEXT_BLOCK),children:e.contextItems.map(e=>(0,b.jsx)(z,{item:e,...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON)},e.seed))}),e.diversity&&(0,b.jsx)(G,{title:e.diversity.title,restrictionsClassName:U().diversity,...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_DIVERSITY_BLOCK),children:e.diversity.values.map(t=>{var i;return(0,b.jsx)(M,{type:null===(i=e.diversity)||void 0===i?void 0:i.type,restrictionValue:t},t.value)})}),e.moodEnergy&&(0,b.jsx)(G,{title:e.moodEnergy.title,restrictionsClassName:U().moodEnergy,...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BLOCK),children:e.moodEnergy.values.map(t=>{var i;return(0,b.jsx)(M,{type:null===(i=e.moodEnergy)||void 0===i?void 0:i.type,restrictionValue:t},t.value)})}),e.language&&(0,b.jsx)(G,{title:e.language.title,restrictionsClassName:U().contextItems,...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_LANGUAGE_BLOCK),children:e.language.values.map(t=>{var i;return(0,b.jsx)(M,{type:null===(i=e.language)||void 0===i?void 0:i.type,restrictionValue:t},t.value)})})]})});var D=i(37579),F=i.n(D);let W={duration:300,initial:{transform:"translateX(5%)",opacity:0},open:{transform:"translateX(0)",opacity:1},close:{transform:"translateX(5%)",opacity:0}},Y=(0,p.Pi)(()=>{var e,t,i,n;let{formatMessage:a}=(0,x.Z)(),{vibe:r,settings:l,vibeSettings:c}=(0,s.oR4)(),{pageId:d}=(0,s.lVB)(),{blockIdForFrom:u}=(0,s.qYG)(),g=(0,v.useRef)(null),_=(0,v.useRef)(null),{resetSettings:m}=(0,s.QhE)({seeds:null!==(n=null===(e=r.meta)||void 0===e?void 0:e.seeds)&&void 0!==n?n:[],pageIdForFrom:d,blockIdForFrom:u}),{contentRef:p}=(0,s.$Y6)(),{contentHeight:f}=R(0),[j,C]=(0,v.useState)(!1);(0,v.useEffect)(()=>()=>{c.reset()},[c]);let T=(0,v.useCallback)(()=>{C(!1)},[C]),G=l.layout===s.t8m.Mobile,L=(0,v.useMemo)(()=>G?{height:"90vh"}:p?{insetInlineEnd:20,insetBlockStart:p.offsetTop+7,height:f-16}:{},[f,p,G]),k=!!(r.isLoading||r.isMyVibe),A=(0,v.useCallback)(e=>{if(!r.isLoading){var t;g.current&&(0,y.m)(e,F().ripple,g.current),m(),null===(t=_.current)||void 0===t||t.focus()}},[m,r.isLoading]),O=(0,v.useMemo)(()=>{var e,t;if(o(null===(e=r.meta)||void 0===e?void 0:e.seeds))return(null===(t=r.meta)||void 0===t?void 0:t.context)?(0,b.jsx)(B.z,{className:F().toggleSettingsButton,size:"m",radius:"round",icon:(0,b.jsx)(N.Icon,{variant:"filter",size:"xs"}),"aria-label":a({id:"vibe-actions.aria-label-settings"}),...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_BUTTON)}):(0,b.jsx)(B.z,{className:F().toggleSettingsButton,size:"default",radius:"xxxl",icon:(0,b.jsx)(N.Icon,{variant:"filter",size:"xxs"}),"aria-label":a({id:"vibe-actions.aria-label-settings"}),...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_BUTTON),children:(0,b.jsx)(V.Caption,{variant:"span",type:"controls",size:"m",weight:"medium",children:(0,b.jsx)(h.Z,{id:"interface-actions.configure-my-vibe"})})})},[a,null===(t=r.meta)||void 0===t?void 0:t.context,null===(i=r.meta)||void 0===i?void 0:i.seeds]);return(0,b.jsxs)(S.J2,{placement:"bottom",isMobile:G,strategy:"fixed",transform:!1,positionElement:p,disableFloatingStyles:!G,open:j,onOpenChange:C,style:L,overlayClassName:F().overlay,transition:W,children:[O,(0,b.jsx)(S.yk,{className:F().popover,...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_BLOCK),children:(0,b.jsxs)("div",{className:F().root,children:[(0,b.jsxs)("div",{className:F().header,children:[(0,b.jsx)(V.Heading,{variant:"h3",size:"s",weight:"bold",...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_TITLE),children:(0,b.jsx)(h.Z,{id:"interface-actions.my-vibe-settings"})}),(0,b.jsxs)("div",{className:F().actions,children:[(0,b.jsx)(I.u,{offsetOptions:4,placement:"left",text:a({id:"interface-actions.reset-my-vibe-settings"}),children:(0,b.jsx)(B.z,{variant:"outline",radius:"round",size:"xxxs",icon:(0,b.jsx)(N.Icon,{variant:"reset",size:"xxxs"}),onClick:A,disabled:!!r.isMyVibe,"aria-hidden":!!r.isMyVibe,"aria-disabled":k,"aria-label":a({id:"interface-actions.reset-my-vibe-settings"}),ref:g,...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_RESET_BUTTON)})}),(0,b.jsx)(B.z,{radius:"round",color:"secondary",size:"xxs",icon:(0,b.jsx)(N.Icon,{variant:"close",size:"xxs"}),onClick:T,"aria-label":a({id:"interface-actions.close-my-vibe-settings"}),ref:_,...(0,E.BA)(E.bG.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON)})]})]}),(0,b.jsx)(w,{})]})})]})})},90135:function(e,t,i){"use strict";i.d(t,{MainPage:function(){return S}});var n=i(95660),a=i(23974),s=i(44744),o=i(97667),r=i(71859),l=i(36621),c=i(9883),d=i(33413),u=i(93062),g=i(64275),_=i(91972),m=i(42255),b=i(44443),p=i(98836),v=i(34518),x=i(70124),h=i(30476),E=i(20794),y=i(96235),B=i(117),N=i.n(B);let S=(0,s.Pi)(e=>{let{withVideoModal:t}=e,{main:i,user:s,experiments:B,releaseNotes:S,fullscreenVideoPlayer:I}=(0,E.oR4)(),{formatMessage:V}=(0,l.Z)(),R=(0,E.bop)(),{contentScrollRef:f,setContentScrollRef:j}=(0,E.$Y6)(),[C,T]=(0,E.zU3)(),G=(0,o.useSearchParams)().get(E.wxR.IDS),L=(0,x.Yd)(G),k=B.checkExperiment(E.peG.WebNextClips,"on");if(t&&k&&L.length&&(I.setIds(L),I.modal.open()),t&&!k&&(0,o.notFound)(),i.landing.loadingState===E.Gui.IDLE){let e;e=s.isAuthorized?B.checkExperiment(E.peG.WebNextSwitchMainSkeletons,"on")?d.j.MAIN:d.j.WEB_MAIN:d.j.MAIN_NOLOGIN,(0,r.use)(i.landing.getSkeleton({id:e,showWizard:s.settings.showWizard},{preloadBlocks:2}))}(0,r.useEffect)(()=>()=>i.landing.reset(),[i.landing]),(0,E.NOh)(i.landing.loadingState===E.Gui.RESOLVE);let A=B.checkExperiment(E.peG.WebNextDisableVibe,"on"),O=(0,r.useCallback)(()=>{S.isReady&&S.modal.open()},[S.isReady,S.modal]),z=(0,r.useMemo)(()=>A?{"margin-block-start":"1vh"}:{},[A]),M=(0,r.useMemo)(()=>(0,n.jsxs)(_.u,{placement:"right",offsetOptions:4,children:[(0,n.jsx)(u.z,{color:"secondary",radius:"xl","aria-label":"Beta ".concat(V({id:"desktop.app-version"},{version:R})),className:(0,a.W)(N().beta,{[N().beta_withReleaseNotes]:S.isReady}),onClick:O,children:(0,n.jsx)(m.Caption,{variant:"div",type:"text",size:"s",weight:"medium",children:"Beta"})}),(0,n.jsx)(_._v,{children:R})]}),[V,O,S.isReady,R]),P=(0,r.useMemo)(()=>[(0,E.FsJ)(B.checkExperiment(E.peG.WebNextEntityTrailerOnboarding,"on"))],[B]);return(0,n.jsx)(E.Lh6,{pageId:E.Rhz.HOME,children:(0,n.jsx)(E.kZw,{config:P,children:(0,n.jsx)(h.I7,{scrollElement:f,headerElement:C,children:(0,n.jsxs)(g.t,{className:N().root,containerClassName:N().content,ref:j,...(0,c.BA)(c.Br.main.MAIN_PAGE),children:[M,!A&&(0,n.jsx)(E.Ja5,{blockIdForFrom:E.BEo.RUP_MAIN_RADIO,blockId:E.aUg.RUP,blockType:E.aUg.RUP,blockPosX:0,blockPosY:0,objectsCount:0,children:(0,n.jsx)(v.w,{className:N().vibe})}),(0,n.jsx)("div",{className:N().header,ref:T}),(0,n.jsx)(b.Od,{landing:i.landing,errorComponent:(0,n.jsx)(p.D,{className:N().error,withBackwardControl:!1}),containerClassName:N().landing,headerClassName:N().header,containerStyle:z,blockHeadingVariant:"h2"}),(0,n.jsx)(y.$_,{className:N().footer})]})})})})})},34518:function(e,t,i){"use strict";i.d(t,{a:function(){return r},w:function(){return L}});var n,a=i(97898);(n||(n={})).OK="ok";var s=i(88693),o=i(20794);let r=a.V5.model("VibeActions",{meta:a.V5.maybeNull(s.KW),applyingSetting:a.V5.maybeNull(a.V5.string),isLoading:a.V5.boolean,getLastLoadingState:a.V5.enumeration(Object.values(o.Gui)),vibeResetLoadingState:a.V5.enumeration(Object.values(o.Gui))}).views(e=>({get isMyVibe(){return e.meta&&1===e.meta.seeds.length&&e.meta.seeds[0]===o.sHr}})).actions(e=>({getLastVibe:(0,a.ls)(function*(){let{rotorResource:t,modelActionsLogger:i}=(0,a.dU)(e);if(e.getLastLoadingState!==o.Gui.PENDING)try{e.getLastLoadingState=o.Gui.PENDING;let i=yield t.waveLast();e.meta=(0,s.xF)(i),e.getLastLoadingState=o.Gui.RESOLVE}catch(t){i.error(t),e.getLastLoadingState=o.Gui.REJECT}}),vibeReset:(0,a.ls)(function*(){let{rotorResource:t,modelActionsLogger:i}=(0,a.dU)(e);if(e.vibeResetLoadingState!==o.Gui.PENDING)try{e.vibeResetLoadingState=o.Gui.PENDING,(yield t.waveLastReset())===n.OK&&(e.meta=(0,s.xF)({name:"",seeds:[o.sHr],stationId:o.sHr,idForFrom:o.sHr})),e.vibeResetLoadingState=o.Gui.RESOLVE}catch(t){i.error(t),e.vibeResetLoadingState=o.Gui.REJECT}}),setApplyingSetting(t){t?e.applyingSetting=(0,a.pj)(t):e.applyingSetting=null},setIsLoading(t){e.isLoading=t},setVibe(t){e.meta=(0,s.xF)(t)},reset(){e.meta=null,e.vibeResetLoadingState=o.Gui.IDLE,e.getLastLoadingState=o.Gui.IDLE}}));var l=i(95660),c=i(23974),d=i(44744),u=i(97667),g=i(71859),_=i(71037),m=i(9883),b=i(42255),p=i(97547),v=i(299),x=i(36621),h=i(93062),E=i(15706),y=i(80147),B=i.n(y);let N=(0,d.Pi)(e=>{let{isPlaying:t,onClick:i,ariaDisabled:n,className:a}=e,{vibe:s}=(0,o.oR4)(),{formatMessage:r}=(0,x.Z)(),d=t?"pauseVibe":"playVibe",u=t?m.QM.vibe.MY_VIBE_PAUSE_BUTTON:m.QM.vibe.MY_VIBE_PLAY_BUTTON,b=(0,g.useMemo)(()=>t?r({id:"vibe-actions.aria-label-pause"}):r({id:"vibe-actions.aria-label-play"}),[r,t]),p=(0,g.useCallback)(e=>{s.isLoading||null==i||i(),e.stopPropagation(),e.preventDefault()},[i,s.isLoading]);return(0,l.jsx)(h.z,{className:(0,c.W)(B().root,{[B().root_isLoading]:s.isLoading},a),withRipple:!1,withHover:!1,onClick:p,variant:"text","aria-disabled":s.isLoading||n,"aria-label":b,icon:(0,l.jsx)(E.Icon,{size:"s",className:(0,c.W)(B().icon,B()["icon_".concat(d)]),variant:d}),...(0,m.BA)(u),children:(0,l.jsx)(_.Z,{id:"entity-names.my-vibe"})})}),S=e=>{let{className:t}=e,i=(0,u.useRouter)(),n=(0,o.uK4)().get(o.xit),a=(0,g.useCallback)(()=>{n.authorizationUrl&&i.push(n.authorizationUrl)},[n.authorizationUrl,i]);return(0,l.jsx)(h.z,{onClick:a,className:t,isBlock:!0,color:"primary",variant:"default",size:"l",radius:"xxxl",children:(0,l.jsx)(b.Caption,{variant:"div",size:"l",lineClamp:1,children:(0,l.jsx)(_.Z,{id:"authorization.enter-button"})})})};var I=i(41971),V=i.n(I),R=i(68394),f=i(96235),j=i(86118),C=i.n(j);let T=(0,d.Pi)(e=>{var t;let{context:i,onResetClick:n,className:a}=e,{vibe:r,settings:d}=(0,o.oR4)(),{formatMessage:u}=(0,x.Z)(),g=(0,s.BV)(r.meta),_=d.layout===o.t8m.Mobile,p=i&&!_;return(0,l.jsxs)("div",{className:(0,c.W)(C().root,a),children:[p&&(0,l.jsx)(f.RT,{size:"m",iconSize:"xs",withScaleAnimation:!1,isPinned:null===(t=r.meta)||void 0===t?void 0:t.isPinned,onClick:g,className:C().pinButton}),(0,l.jsx)(R.ap,{}),i&&(0,l.jsxs)("div",{className:(0,c.W)(C().context),...(0,m.BA)(m.QM.vibe.VIBE_CONTEXT),children:[(0,l.jsx)(b.Caption,{variant:"span",type:"controls",size:"m",weight:"medium",lineClamp:1,children:i}),(0,l.jsx)(h.z,{className:C().resetButton,variant:"text",radius:"round",withRipple:!1,icon:(0,l.jsx)(E.Icon,{variant:"close",size:"xxs"}),onClick:n,"aria-label":"".concat(u({id:"vibe-actions.reset-settings"})," ").concat(i),...(0,m.BA)(m.QM.vibe.RESET_VIBE_CONTEXT_BUTTON)})]})]})}),G="vibe-block-controls",L=(0,d.Pi)(e=>{var t,i,n;let{className:a}=e,s=(0,u.useRouter)(),{vibe:r,experiments:d,user:x}=(0,o.oR4)(),[h,E]=(0,o.zU3)(),{pageId:y}=(0,o.lVB)(),{blockIdForFrom:B}=(0,o.qYG)(),{isFreemium:I}=(0,o.NMB)(),{openPaymentWidgetModal:R,isShimmerActive:f,isShimmerVisible:j,mainText:C,additionText:L}=(0,p.xU)({storeName:"music",isEnabled:I,offerElement:{element:h,intersectionPropertyId:G}}),k=(0,o.uK4)().get(o.xit),{isVibeContext:A,isPlaying:O,togglePlay:z,resetSettings:M}=(0,o.QhE)({seeds:null!==(n=null===(t=r.meta)||void 0===t?void 0:t.seeds)&&void 0!==n?n:[],pageIdForFrom:y,blockIdForFrom:B}),P=d.checkExperiment(o.peG.WebNextDisableVibeSettings,"on")||I||!x.isAuthorized;r.getLastLoadingState===o.Gui.IDLE&&(0,g.use)(r.getLastVibe());let U=(0,g.useCallback)(()=>{A?M():r.vibeResetLoadingState!==o.Gui.PENDING&&r.vibeReset()},[A,r,M]),w=(0,g.useCallback)(()=>{if(!x.isAuthorized){if(!k.authorizationUrl)return;s.push(k.authorizationUrl);return}I&&R()},[x.isAuthorized,k.authorizationUrl,s,I,R]),D=(0,g.useCallback)(e=>{e.stopPropagation(),e.preventDefault(),w()},[w]),F=(0,g.useCallback)(()=>{if(I||!x.isAuthorized){w();return}z()},[I,x.isAuthorized,z,w]);return(0,g.useEffect)(()=>()=>{r.reset()},[r]),(0,l.jsxs)("div",{className:(0,c.W)(V().root,{[V().root_freemium]:I||!x.isAuthorized},a),...(0,m.BA)(m.QM.vibe.VIBE_BLOCK),children:[(0,l.jsx)(v.i,{className:V().vibeAnimation}),(0,l.jsxs)("div",{className:V().controls,onClick:D,ref:E,"data-intersection-property-id":G,children:[(0,l.jsx)(N,{className:V().playButton,isPlaying:O,ariaDisabled:I||!x.isAuthorized,onClick:F}),!P&&(0,l.jsx)(T,{className:V().settingsButton,context:null===(i=r.meta)||void 0===i?void 0:i.context,onResetClick:U}),(I||!x.isAuthorized)&&(0,l.jsx)(b.Caption,{className:V().subscriptionText,variant:"div",size:"l",children:(0,l.jsx)(_.Z,{id:"vibe-freemium.available-in-plus",values:{br:(0,l.jsx)("br",{})}})}),!x.isAuthorized&&(0,l.jsx)(S,{className:V().button}),I&&(0,l.jsx)(p.CS,{isShimmerActive:f,isShimmerVisible:j,onClick:R,mainText:C,additionText:L,className:V().button})]})]})})},76730:function(e){e.exports={root:"RestrictionBlock_root__P_g9o",restrictions:"RestrictionBlock_restrictions__BhR_r"}},22804:function(e){e.exports={button:"RestrictionButton_button__eLMkU",button_selected:"RestrictionButton_button_selected__LHD20",button_applying:"RestrictionButton_button_applying___ik5f","applying-setting":"RestrictionButton_applying-setting__utqyc",diversityButton:"RestrictionButton_diversityButton__uclSi",diversityButtonImage:"RestrictionButton_diversityButtonImage__21oME",moodEnergy:"RestrictionButton_moodEnergy__q_I4y",moodEnergyButton:"RestrictionButton_moodEnergyButton__yKkaS",moodEnergyButtonImage:"RestrictionButton_moodEnergyButtonImage__zxT2C",textButton:"RestrictionButton_textButton__HC_AE",title:"RestrictionButton_title__UZn0O",specialButton:"RestrictionButton_specialButton__Di6B9",specialImage:"RestrictionButton_specialImage__0E3x2",rippleContainer:"RestrictionButton_rippleContainer__xPANO",ripple:"RestrictionButton_ripple__Rsu8b"}},17575:function(e){e.exports={root:"VibeRestrictions_root__efJez",diversity:"VibeRestrictions_diversity__qfOls",moodEnergy:"VibeRestrictions_moodEnergy__Le0Cy",contextItems:"VibeRestrictions_contextItems__JrF7D"}},37579:function(e){e.exports={root:"VibeSettings_root__ufZlV",popover:"VibeSettings_popover__VKqUc",overlay:"VibeSettings_overlay__pusb4",toggleSettingsButton:"VibeSettings_toggleSettingsButton__j6fIU",header:"VibeSettings_header__OAWe2",actions:"VibeSettings_actions__ckbMt",ripple:"VibeSettings_ripple__kmFX6"}},117:function(e){e.exports={content:"MainPage_content__kskSM",root:"MainPage_root__STXqc",container:"MainPage_container__CB86l",vibe:"MainPage_vibe__XEBbh",landing:"MainPage_landing___FGNm",header:"MainPage_header__lPh0v",beta:"MainPage_beta__y32vb",beta_withReleaseNotes:"MainPage_beta_withReleaseNotes__WOjUk",footer:"MainPage_footer__2rGy2",error:"MainPage_error__u_UCm"}},80147:function(e){e.exports={root:"PlayButton_root__nYKdN",root_isLoading:"PlayButton_root_isLoading__925Sa","applying-setting":"PlayButton_applying-setting__3nbT9",icon:"PlayButton_icon__t_THQ",icon_pauseVibe:"PlayButton_icon_pauseVibe__Ogg_U",icon_playVibe:"PlayButton_icon_playVibe__BKPRh"}},41971:function(e){e.exports={vibeAnimation:"VibeBlock_vibeAnimation__XVEE6",controls:"VibeBlock_controls__BpDFL",root:"VibeBlock_root__z7LtR",root_freemium:"VibeBlock_root_freemium__4i2rV",playButton:"VibeBlock_playButton__6xU55",settingsButton:"VibeBlock_settingsButton__GeMtO",subscriptionText:"VibeBlock_subscriptionText__ODUZN",button:"VibeBlock_button__fWXM_"}},86118:function(e){e.exports={root:"VibeContext_root__dbiNv",context:"VibeContext_context__Z_82k",pinButton:"VibeContext_pinButton__b6SNF",resetButton:"VibeContext_resetButton__9KK4S"}}}]);