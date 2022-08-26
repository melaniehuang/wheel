(function(g){var window=this;'use strict';var $Wa=function(a,b){a.Oa("onAutonavCoundownStarted",b)},R5=function(a,b,c){g.M(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Re(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.QE&&(b.lengthText?(e=b.lengthText||null,f=b.tq||null):b.lengthSeconds&&(e=g.$K(b.lengthSeconds),f=g.$K(b.lengthSeconds,!0)));var k=!!d;d=k&&"RD"===g.ME(d).type;var l=b instanceof g.QE?b.isLivePlayback:null,m=b instanceof g.QE?b.isUpcoming:null;c={title:b.title,author:b.author,author_and_views:b.shortViewCount?b.author+" \u2022 "+b.shortViewCount:b.author,aria_label:b.Rl||g.kH("Watch $TITLE",{TITLE:b.title}),duration:e,
timestamp:f,url:b.Wk(),is_live:l,is_upcoming:m,is_list:k,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:b.shortViewCount?b.shortViewCount+" \u2022 "+b.publishedTimeText:b.publishedTimeText,autoplayAlternativeHeader:b.un};b instanceof g.PE&&(c.playlist_length=b.playlistLength);a.update(c)},S5=function(a){var b=a.T(),c=b.i;
g.W.call(this,{D:"a",K:"ytp-autonav-suggestion-card",V:{href:"{{url}}",target:c?b.I:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{D:"div",Ga:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],V:{style:"{{background}}"},U:[{D:"div",V:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],qa:"{{duration}}"},{D:"div",Ga:["ytp-autonav-live-stamp"],qa:"Live"},{D:"div",
Ga:["ytp-autonav-upcoming-stamp"],qa:"Upcoming"},{D:"div",K:"ytp-autonav-list-overlay",U:[{D:"div",K:"ytp-autonav-mix-text",qa:"Mix"},{D:"div",K:"ytp-autonav-mix-icon"}]}]},{D:"div",Ga:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],qa:"{{title}}"},{D:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],qa:"{{author}}"},{D:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],qa:"{{views_and_publish_time}}"}]});this.G=a;this.suggestion=
null;this.i=c;this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress)},U5=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{D:"div",K:"ytp-autonav-endscreen-countdown-container"});var c=this;this.I=b;this.C=void 0;this.j=0;b=a.T();var d=b.i;this.G=a;this.suggestion=null;this.onVideoDataChange("newdata",this.G.getVideoData());this.S(a,"videodatachange",this.onVideoDataChange);this.i=new g.W({D:"div",K:"ytp-autonav-endscreen-upnext-container",V:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{D:"div",
K:"ytp-autonav-endscreen-upnext-header"},{D:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",qa:"{{autoplayAlternativeHeader}}"},{D:"a",K:"ytp-autonav-endscreen-link-container",V:{href:"{{url}}",target:d?b.I:""},U:[{D:"div",K:"ytp-autonav-endscreen-upnext-thumbnail",V:{style:"{{background}}"},U:[{D:"div",V:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],qa:"{{duration}}"},{D:"div",Ga:["ytp-autonav-live-stamp"],qa:"Live"},{D:"div",Ga:["ytp-autonav-upcoming-stamp"],qa:"Upcoming"}]},
{D:"div",K:"ytp-autonav-endscreen-video-info",U:[{D:"div",K:"ytp-autonav-endscreen-premium-badge"},{D:"div",K:"ytp-autonav-endscreen-upnext-title",qa:"{{title}}"},{D:"div",K:"ytp-autonav-endscreen-upnext-author",qa:"{{author}}"},{D:"div",K:"ytp-autonav-view-and-date",qa:"{{views_and_publish_time}}"},{D:"div",K:"ytp-autonav-author-and-view",qa:"{{author_and_views}}"}]}]}]});g.J(this,this.i);this.i.Ca(this.element);d||this.S(this.i.Da("ytp-autonav-endscreen-link-container"),"click",this.jJ);this.G.Bb(this.element,
this,115127);this.G.Bb(this.i.Da("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({D:"div",K:"ytp-autonav-overlay"});g.J(this,this.overlay);this.overlay.Ca(this.element);this.u=new g.W({D:"div",K:"ytp-autonav-endscreen-button-container"});g.J(this,this.u);this.u.Ca(this.element);this.cancelButton=new g.W({D:"button",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],V:{"aria-label":"Cancel autoplay"},qa:"Cancel"});g.J(this,this.cancelButton);
this.cancelButton.Ca(this.u.element);this.cancelButton.Pa("click",this.oR,this);this.G.Bb(this.cancelButton.element,this,115129);this.playButton=new g.W({D:"a",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],V:{href:"{{url}}",role:"button","aria-label":"Play next video"},qa:"Play now"});g.J(this,this.playButton);this.playButton.Ca(this.u.element);this.playButton.Pa("click",this.jJ,this);this.G.Bb(this.playButton.element,this,115130);this.B=new g.K(function(){T5(c)},
500);
g.J(this,this.B);this.iJ();this.S(a,"autonavvisibility",this.iJ)},X5=function(a){var b=a.G.Dj(!0,a.G.isFullscreen());
g.M(a.element,"ytp-autonav-endscreen-small-mode",a.Bf(b));g.M(a.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.FB);g.M(a.G.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.G.qe());g.M(a.G.getRootNode(),"countdown-running",a.Lh());g.M(a.element,"ytp-player-content",a.G.qe());g.xn(a.overlay.element,{width:b.width+"px"});if(!a.Lh()){a.G.qe()?V5(a,Math.round(W5(a)/1E3)):V5(a);b=!!a.suggestion&&!!a.suggestion.un;var c=a.G.qe()||!b;g.M(a.element,"ytp-autonav-endscreen-upnext-alternative-header-only",
!c&&b);g.M(a.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.XJ(a.u,a.G.qe())}},T5=function(a){var b=W5(a),c=Math,d=c.min;
var e=a.j?Date.now()-a.j:0;c=d.call(c,e,b);V5(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Lh()?a.select(!0):a.Lh()&&a.B.start()},W5=function(a){var b=a.G.Vp();
return 0<=b?b:g.lD(a.G.T().experiments,"autoplay_time")||1E4},V5=function(a,b){b=void 0===b?-1:b;
a=a.i.Da("ytp-autonav-endscreen-upnext-header");g.Ph(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Oh("Up next in $SECONDS".slice(0,d)));var e=g.Nh("span");g.mr(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Uh(e,b);a.appendChild(e);a.appendChild(g.Oh("Up next in $SECONDS".slice(d+c.length)));return}}g.Uh(a,"Up next")},Y5=function(a,b){g.W.call(this,{D:"div",
Ga:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},Z5=function(a){g.W.call(this,{D:"div",
Ga:["ytp-upnext","ytp-player-content"],V:{"aria-label":"{{aria_label}}"},U:[{D:"div",K:"ytp-cued-thumbnail-overlay-image",V:{style:"{{background}}"}},{D:"span",K:"ytp-upnext-top",U:[{D:"span",K:"ytp-upnext-header",qa:"Up Next"},{D:"span",K:"ytp-upnext-title",qa:"{{title}}"},{D:"span",K:"ytp-upnext-author",qa:"{{author}}"}]},{D:"a",K:"ytp-upnext-autoplay-icon",V:{role:"button",href:"{{url}}","aria-label":"Play next video"},U:[{D:"svg",V:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
U:[{D:"circle",K:"ytp-svg-autoplay-circle",V:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",K:"ytp-svg-autoplay-ring",V:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",K:"ytp-svg-fill",V:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",K:"ytp-upnext-bottom",U:[{D:"span",K:"ytp-upnext-cancel"},{D:"span",K:"ytp-upnext-paused",
qa:"Auto-play is paused"}]}]});this.api=a;this.cancelButton=null;this.C=this.Da("ytp-svg-autoplay-ring");this.u=this.notification=this.i=this.suggestion=null;this.B=new g.K(this.ez,5E3,this);this.j=0;var b=this.Da("ytp-upnext-cancel");this.cancelButton=new g.W({D:"button",Ga:["ytp-upnext-cancel-button","ytp-button"],V:{tabindex:"0","aria-label":"Cancel autoplay"},qa:"Cancel"});g.J(this,this.cancelButton);this.cancelButton.Pa("click",this.pR,this);this.cancelButton.Ca(b);this.cancelButton&&this.api.Bb(this.cancelButton.element,
this,115129);g.J(this,this.B);this.api.Bb(this.element,this,18788);b=this.Da("ytp-upnext-autoplay-icon");this.S(b,"click",this.qR);this.api.Bb(b,this,115130);this.kJ();this.S(a,"autonavvisibility",this.kJ);this.S(a,"mdxnowautoplaying",this.eW);this.S(a,"mdxautoplaycanceled",this.fW);g.M(this.element,"ytp-upnext-mobile",this.api.T().isMobile)},aXa=function(a,b){return b?b:0<=a.api.Vp()?a.api.Vp():g.lD(a.api.T().experiments,"autoplay_time")||1E4},$5=function(a,b){b=aXa(a,b);
var c=Math,d=c.min;var e=(0,g.R)()-a.j;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.C.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Lh()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Lh()&&a.i.start()},a6=function(a){Y5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.W({D:"div",K:"ytp-suggestion-panel",U:[{D:"div",Ga:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],qa:"More videos"}]});this.J=new g.W({D:"div",K:"ytp-suggestions-container"});this.videos=[];this.u=null;this.C=this.I=!1;this.j=new U5(this.player);g.J(this,this.j);this.j.Ca(this.element);a.getVideoData().wc?this.i=this.j:(this.i=new Z5(a),g.fM(this.player,this.i.element,4),g.J(this,this.i));this.overlay=new g.W({D:"div",
K:"ytp-autonav-overlay-cancelled-state"});g.J(this,this.overlay);this.overlay.Ca(this.element);this.B=new g.sC(this);g.J(this,this.B);g.J(this,this.table);this.table.Ca(this.element);this.table.show();g.J(this,this.J);this.J.Ca(this.table.element);this.hide()},b6=function(a){var b=a.qe();
b!==a.C&&(a.C=b,a.player.Z("autonavvisibility"),a.C?(a.j!==a.i&&a.j.hide(),a.table.hide()):(a.j!==a.i&&a.j.show(),a.table.show()))},c6=function(a){Y5.call(this,a,"subscribecard-endscreen");
this.i=new g.W({D:"div",K:"ytp-subscribe-card",U:[{D:"img",K:"ytp-author-image",V:{src:"{{profilePicture}}"}},{D:"div",K:"ytp-subscribe-card-right",U:[{D:"div",K:"ytp-author-name",qa:"{{author}}"},{D:"div",K:"html5-subscribe-button-container"}]}]});g.J(this,this.i);this.i.Ca(this.element);var b=a.getVideoData();this.subscribeButton=new g.wN("Subscribe",null,"Unsubscribe",null,!0,!1,b.nj,b.subscribed,"trailer-endscreen",null,null,a);g.J(this,this.subscribeButton);this.subscribeButton.Ca(this.i.Da("html5-subscribe-button-container"));
this.S(a,"videodatachange",this.Ja);this.Ja();this.hide()},d6=function(a){var b=a.T(),c=g.Uz||g.UD?{style:"will-change: opacity"}:void 0,d=b.i,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.W.call(this,{D:"a",Ga:e,V:{href:"{{url}}",target:d?b.I:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},U:[{D:"div",K:"ytp-videowall-still-image",V:{style:"{{background}}"}},{D:"span",K:"ytp-videowall-still-info",U:[{D:"span",K:"ytp-videowall-still-info-bg",U:[{D:"span",K:"ytp-videowall-still-info-content",V:c,U:[{D:"span",K:"ytp-videowall-still-info-title",qa:"{{title}}"},{D:"span",
K:"ytp-videowall-still-info-author",qa:"{{author_and_views}}"},{D:"span",K:"ytp-videowall-still-info-live",qa:"Live"},{D:"span",K:"ytp-videowall-still-info-duration",qa:"{{duration}}"}]}]}]},{D:"span",Ga:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],U:[{D:"span",K:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",K:"ytp-videowall-still-listlabel-length",U:[" (",{D:"span",qa:"{{playlist_length}}"},")"]}]},{D:"span",Ga:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
U:[{D:"span",K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",K:"ytp-videowall-still-listlabel-length",qa:" (50+)"}]}]});this.suggestion=null;this.j=d;this.api=a;this.i=new g.sC(this);g.J(this,this.i);this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress);this.i.S(a,"videodatachange",this.onVideoDataChange);a.Vg(this.element,this);this.onVideoDataChange()},e6=function(a){Y5.call(this,a,"videowall-endscreen");
var b=this;this.G=a;this.u=0;this.stills=[];this.B=this.videoData=null;this.C=this.J=!1;this.N=null;this.j=new g.sC(this);g.J(this,this.j);this.I=new g.K(function(){g.L(b.element,"ytp-show-tiles")},0);
g.J(this,this.I);var c=new g.W({D:"button",Ga:["ytp-button","ytp-endscreen-previous"],V:{"aria-label":"Previous"},U:[g.dK()]});g.J(this,c);c.Ca(this.element);c.Pa("click",this.uR,this);this.table=new g.UJ({D:"div",K:"ytp-endscreen-content"});g.J(this,this.table);this.table.Ca(this.element);c=new g.W({D:"button",Ga:["ytp-button","ytp-endscreen-next"],V:{"aria-label":"Next"},U:[g.eK()]});g.J(this,c);c.Ca(this.element);c.Pa("click",this.tR,this);a.getVideoData().wc?this.i=new U5(a,!0):this.i=new Z5(a);
g.J(this,this.i);g.fM(this.player,this.i.element,4);this.hide()},f6=function(a){return g.gM(a.player)&&a.uv()&&!a.B},g6=function(a){var b=a.qe();
b!==a.J&&(a.J=b,a.player.Z("autonavvisibility"))},h6=function(a){g.tM.call(this,a);
var b=this;this.endScreen=null;this.i=this.j=this.u=!1;this.listeners=new g.sC(this);g.J(this,this.listeners);this.env=a.T();bXa(a)?(this.u=!0,cXa(this),this.i?this.endScreen=new a6(a):this.endScreen=new e6(this.player)):this.env.me?this.endScreen=new c6(this.player):this.endScreen=new Y5(this.player);g.J(this,this.endScreen);g.fM(this.player,this.endScreen.element,4);dXa(this);this.listeners.S(a,"videodatachange",this.onVideoDataChange,this);this.listeners.S(a,g.Ny("endscreen"),function(c){b.onCueRangeEnter(c)});
this.listeners.S(a,g.Oy("endscreen"),function(c){b.onCueRangeExit(c)})},cXa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.Gi&&a.j===b.wc)return!1;a.i=b.Gi;a.j=b.wc;return!0},bXa=function(a){a=a.T();
return a.Jb&&!a.me},dXa=function(a){a.player.gf("endscreen");
var b=a.player.getVideoData();b=new g.Ly(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.Ly(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Nd([b,c])};
g.ZL.prototype.Vp=g.ca(3,function(){return this.app.Vp()});
g.VX.prototype.Vp=g.ca(2,function(){return this.getVideoData().rO});g.v(S5,g.W);S5.prototype.select=function(){(this.G.fk(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Ov||void 0)||this.G.L("web_player_endscreen_double_log_fix_killswitch"))&&this.G.ub(this.element)};
S5.prototype.onClick=function(a){g.QM(a,this.G,this.i,this.suggestion.sessionData||void 0)&&this.select()};
S5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Gu(a)||(this.select(),g.Fu(a))}};g.v(U5,g.W);g.h=U5.prototype;g.h.Fy=function(a){this.suggestion!==a&&(this.suggestion=a,R5(this.i,a),this.playButton.Ma("url",this.suggestion.Wk()),X5(this))};
g.h.Lh=function(){return 0<this.j};
g.h.Yt=function(){this.Lh()||(this.j=Date.now(),T5(this),$Wa(this.G,W5(this)),g.M(this.G.getRootNode(),"countdown-running",this.Lh()))};
g.h.Fq=function(){this.Um();T5(this);var a=this.i.Da("ytp-autonav-endscreen-upnext-header");a&&g.Uh(a,"Up next")};
g.h.Um=function(){this.Lh()&&(this.B.stop(),this.j=0)};
g.h.select=function(a){this.G.nextVideo(!1,void 0===a?!1:a);this.Um()};
g.h.jJ=function(a){g.QM(a,this.G)&&(a.currentTarget===this.playButton.element?this.G.ub(this.playButton.element):a.currentTarget===this.i.Da("ytp-autonav-endscreen-link-container")&&(a=this.i.Da("ytp-autonav-endscreen-link-container"),this.G.Za(a,!0),this.G.ub(a)),this.select())};
g.h.oR=function(){this.G.ub(this.cancelButton.element);g.aM(this.G,!0);this.C&&this.G.Oa("innertubeCommand",this.C)};
g.h.onVideoDataChange=function(a,b){var c;this.C=null==(c=b.BZ)?void 0:c.command};
g.h.iJ=function(){var a=this.G.qe();this.I&&this.sb!==a&&g.XJ(this,a);X5(this);this.G.Za(this.element,a);this.G.Za(this.cancelButton.element,a);this.G.Za(this.i.Da("ytp-autonav-endscreen-link-container"),a);this.G.Za(this.playButton.element,a)};
g.h.Bf=function(a){return 400>a.width||459>a.height};g.v(Y5,g.W);g.h=Y5.prototype;g.h.create=function(){this.created=!0};
g.h.destroy=function(){this.created=!1};
g.h.uv=function(){return!1};
g.h.qe=function(){return!1};
g.h.mM=function(){return!1};g.v(Z5,g.W);g.h=Z5.prototype;g.h.ez=function(){this.notification&&(this.B.stop(),this.xc(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.h.Fy=function(a){this.suggestion=a;R5(this,a,"hqdefault.jpg")};
g.h.kJ=function(){g.XJ(this,this.api.qe());this.api.Za(this.element,this.api.qe());this.api.Za(this.Da("ytp-upnext-autoplay-icon"),this.api.qe());this.cancelButton&&this.api.Za(this.cancelButton.element,this.api.qe())};
g.h.nW=function(){window.focus();this.ez()};
g.h.Yt=function(a){var b=this;this.Lh()||(g.Vu("a11y-announce","Up Next "+this.suggestion.title),this.j=(0,g.R)(),this.i=new g.K(function(){$5(b,a)},25),$5(this,a),$Wa(this.api,aXa(this,a)));
g.pr(this.element,"ytp-upnext-autoplay-paused")};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.Lh=function(){return!!this.i};
g.h.Fq=function(){this.Um();this.j=(0,g.R)();$5(this);g.L(this.element,"ytp-upnext-autoplay-paused")};
g.h.Um=function(){this.Lh()&&(this.i.dispose(),this.i=null)};
g.h.select=function(a){a=void 0===a?!1:a;if(this.api.T().L("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.ez(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.Re()}),this.u=this.S(this.notification,"click",this.nW),this.B.start())}this.Um();this.api.nextVideo(!1,a)};
g.h.qR=function(a){!g.Th(this.cancelButton.element,g.Bu(a))&&g.QM(a,this.api)&&(this.api.qe()&&this.api.ub(this.Da("ytp-upnext-autoplay-icon")),this.select())};
g.h.pR=function(){this.api.qe()&&this.cancelButton&&this.api.ub(this.cancelButton.element);g.aM(this.api,!0)};
g.h.eW=function(a){this.api.getPresentingPlayerType();this.show();this.Yt(a)};
g.h.fW=function(){this.api.getPresentingPlayerType();this.Um();this.hide()};
g.h.ra=function(){this.Um();this.ez();g.W.prototype.ra.call(this)};g.v(a6,Y5);g.h=a6.prototype;g.h.create=function(){Y5.prototype.create.call(this);this.B.S(this.player,"appresize",this.Wu);this.B.S(this.player,"onVideoAreaChange",this.Wu);this.B.S(this.player,"videodatachange",this.onVideoDataChange);this.B.S(this.player,"autonavchange",this.lJ);this.B.S(this.player,"autonavcancel",this.rR);this.onVideoDataChange()};
g.h.show=function(){Y5.prototype.show.call(this);(this.I||this.u&&this.u!==this.videoData.clientPlaybackNonce)&&g.aM(this.player,!1);g.gM(this.player)&&this.uv()&&!this.u?(b6(this),2===this.videoData.autonavState?this.player.T().L("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Yt():3===this.videoData.autonavState&&this.i.Fq()):(g.aM(this.player,!0),b6(this));this.Wu()};
g.h.hide=function(){Y5.prototype.hide.call(this);this.i.Fq();b6(this)};
g.h.Wu=function(){var a=this.player.Dj(!0,this.player.isFullscreen());b6(this);X5(this.j);g.M(this.element,"ytp-autonav-cancelled-small-mode",this.Bf(a));g.M(this.element,"ytp-autonav-cancelled-tiny-mode",this.mA(a));g.M(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.xn(this.overlay.element,{width:a.width+"px"});if(!this.C){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.q(b.value);b=c.next().value;c=c.next().value;g.M(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.h.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){this.i.Fy(a[0]);this.i!==this.j&&this.j.Fy(a[0]);for(var b=0;b<eXa.length;++b){var c=eXa[b];if(a&&a[c]){this.videos[b]=new S5(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,R5(d,c));g.J(this,this.videos[b]);this.videos[b].Ca(this.J.element)}}}this.Wu()}};
g.h.lJ=function(a){1===a?(this.I=!1,this.u=this.videoData.clientPlaybackNonce,this.i.Um(),this.sb&&this.Wu()):(this.I=!0,this.qe()&&(2===a?this.i.Yt():3===a&&this.i.Fq()))};
g.h.rR=function(a){a?this.lJ(1):(this.u=null,this.I=!1)};
g.h.uv=function(){return 1!==this.videoData.autonavState};
g.h.Bf=function(a){return(910>a.width||459>a.height)&&!this.mA(a)&&!(400>=a.width||360>=a.height)};
g.h.mA=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.h.qe=function(){return this.sb&&g.gM(this.player)&&this.uv()&&!this.u};
var eXa=[1,3,2,4];g.v(c6,Y5);c6.prototype.Ja=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.nj;var b=this.subscribeButton;a.subscribed?b.j():b.u()};g.v(d6,g.W);d6.prototype.select=function(){(this.api.fk(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Ov||void 0)||this.api.L("web_player_endscreen_double_log_fix_killswitch"))&&this.api.ub(this.element)};
d6.prototype.onClick=function(a){g.QM(a,this.api,this.j,this.suggestion.sessionData||void 0)&&this.select()};
d6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Gu(a)||(this.select(),g.Fu(a))}};
d6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.T();this.j=a.C?!1:b.i};g.v(e6,Y5);g.h=e6.prototype;g.h.create=function(){Y5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Hl();this.j.S(this.player,"appresize",this.Hl);this.j.S(this.player,"onVideoAreaChange",this.Hl);this.j.S(this.player,"videodatachange",this.onVideoDataChange);this.j.S(this.player,"autonavchange",this.RC);this.j.S(this.player,"autonavcancel",this.sR);a=this.videoData.autonavState;a!==this.N&&this.RC(a);this.j.S(this.element,"transitionend",this.DX)};
g.h.destroy=function(){g.sx(this.j);g.Te(this.stills);this.stills=[];Y5.prototype.destroy.call(this);g.pr(this.element,"ytp-show-tiles");this.I.stop();this.N=this.videoData.autonavState};
g.h.uv=function(){return 1!==this.videoData.autonavState};
g.h.show=function(){Y5.prototype.show.call(this);g.pr(this.element,"ytp-show-tiles");this.player.T().isMobile?g.ir(this.I):this.I.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.aM(this.player,!1);f6(this)?(g6(this),2===this.videoData.autonavState?this.player.T().L("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Yt():3===this.videoData.autonavState&&this.i.Fq()):(g.aM(this.player,!0),g6(this))};
g.h.hide=function(){Y5.prototype.hide.call(this);this.i.Fq();g6(this)};
g.h.DX=function(a){g.Bu(a)===this.element&&this.Hl()};
g.h.Hl=function(){if(this.videoData&&this.videoData.suggestions&&this.videoData.suggestions.length){g.L(this.element,"ytp-endscreen-paginate");var a=this.G.Dj(!0,this.G.isFullscreen()),b=g.WL(this.G);b&&(b=b.Ye()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.videoData.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,w=e<=k-2&&n>=p*m;if((p+
1)/r*d/c>c/(p/(r+1)*d)&&w)n-=p*m,e+=2;else if(t)n-=r*m,b+=2;else if(w)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.ho(a,m,n);g.xn(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.Fy(this.videoData.suggestions[0]);this.i instanceof U5&&X5(this.i);g.M(this.element,"ytp-endscreen-takeover",f6(this));g6(this);m+=4;n+=4;for(f=
c=0;f<b;f++)for(k=0;k<e;k++)if(p=c,r=0,d&&f>=b-2&&k>=e-2?r=1:0===k%2&&0===f%2&&(2>k&&2>f?0===k&&0===f&&(r=2):r=2),p=g.Zg(p+this.u,l),0!==r){t=this.stills[c];t||(t=new d6(this.player),this.stills[c]=t,a.appendChild(t.element));w=Math.floor(n*k/e);var x=Math.floor(m*f/b),y=Math.floor(n*(k+r)/e)-w-4,z=Math.floor(m*(f+r)/b)-x-4;g.En(t.element,x,w);g.ho(t.element,z,y);g.xn(t.element,"transitionDelay",(k+f)/20+"s");g.M(t.element,"ytp-videowall-still-mini",1===r);g.M(t.element,"ytp-videowall-still-large",
2<r);r=t;p=this.videoData.suggestions[p];r.suggestion!==p&&(r.suggestion=p,t=r.api.T(),w=g.nr(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",R5(r,p,w),g.WD(t)&&(t=p.Wk(),t=g.Hj(t,g.OL("emb_rel_end")),r.Ma("url",t)),(p=(p=p.sessionData)&&p.itct)&&r.api.Xj(r.element,p));c++}g.M(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Rh(e.element),g.Se(e);this.stills.length=c}};
g.h.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.u=0,this.videoData=a,this.Hl())};
g.h.tR=function(){this.u+=this.stills.length;this.Hl()};
g.h.uR=function(){this.u-=this.stills.length;this.Hl()};
g.h.mM=function(){return this.i.Lh()};
g.h.RC=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,this.i.Um(),this.sb&&this.Hl()):(this.C=!0,this.sb&&f6(this)&&(2===a?this.i.Yt():3===a&&this.i.Fq()))};
g.h.sR=function(a){if(a){for(a=0;a<this.stills.length;a++)this.G.Za(this.stills[a].element,!0);this.RC(1)}else this.B=null,this.C=!1;this.Hl()};
g.h.qe=function(){return this.sb&&f6(this)};g.v(h6,g.tM);g.h=h6.prototype;g.h.Sq=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!bXa(this.player)||b;var c=a.Ie||g.gE(a.u),d=this.player.Uv();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.h.qe=function(){return this.endScreen.qe()};
g.h.cU=function(){return this.qe()?this.endScreen.mM():!1};
g.h.ra=function(){this.player.gf("endscreen");g.tM.prototype.ra.call(this)};
g.h.load=function(){var a=this.player.getVideoData();var b=a.qM;if(b&&b.videoId){var c=this.player.tb().Ld.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].videoId&&!a.EJ?a=!1:(this.player.fk(b.videoId,void 0,void 0,!0,!0,b),c&&c.vA("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.tM.prototype.load.call(this),this.endScreen.show())};
g.h.unload=function(){g.tM.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.h.onCueRangeEnter=function(a){this.Sq()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.h.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.h.onVideoDataChange=function(){dXa(this);this.u&&cXa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new a6(this.player):this.endScreen=new e6(this.player),g.J(this,this.endScreen),g.fM(this.player,this.endScreen.element,4))};g.sM("endscreen",h6);})(_yt_player);
