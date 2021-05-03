(this.webpackJsonpsongoftheday=this.webpackJsonpsongoftheday||[]).push([[0],{65:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(12),s=n.n(a),i=n(37),c=n.n(i),o=n(40),j=n(16),l=n(91),b=n(89),m=n(90),p=n(81),h=n(83),d=n(84),u=n(3),O=function(){return Object(u.jsx)(r.Fragment,{children:Object(u.jsx)(p.a,{color:"primary",position:"relative",children:Object(u.jsx)(h.a,{children:Object(u.jsx)("nav",{children:Object(u.jsx)(d.a,{variant:"h6",align:"center",children:"Song of the day"})})})})})},x=n(93),g=n(85),f=n(86),y=n(46),k=n.n(y),_=Object(l.a)((function(e){return{Song:{color:"#48c774",margin:"20px"},Title:{marginBottom:"20px"},Container:{margin:0,position:"absolute",left:"50%",top:"40%",textAlign:"center",transform:"translate(-50%, -50%)"}}})),v=function(e){var t=e.Song,n=e.checked,r=e.setSecondscreen,a=_(),s=t.song_title;return Object(u.jsx)(x.a,{in:n,timeout:2e3,children:Object(u.jsx)("main",{children:Object(u.jsx)(g.a,{maxWidth:"md",className:a.Container,children:Object(u.jsxs)("div",{children:[Object(u.jsx)(d.a,{variant:"h2",children:" The song of the day is: "}),Object(u.jsx)(d.a,{variant:"h3",className:a.Song,children:s}),Object(u.jsxs)(d.a,{variant:"h4",className:a.Title,children:["Enjoy it! ",Object(u.jsx)(k.a,{})]}),Object(u.jsx)(f.a,{variant:"outlined",color:"primary",fullWidth:!0,onClick:r,children:"Next"})]})})})})},S=n(94),W=Object(l.a)((function(e){return{Container:{margin:0,position:"absolute",left:"50%",top:"40%",textAlign:"center",transform:"translate(-50%, -50%)"},Button:{height:"60px"},Title:{margin:"20px"}}})),w=function(e){var t=e.secondscreen,n=e.Song,r=e.setLinks,a=e.setThirdscreen,s=W(),i=n.composer,c=n.links;return Object(u.jsx)(x.a,{in:t,timeout:2e3,children:Object(u.jsx)("main",{children:Object(u.jsx)(g.a,{maxWidth:"md",className:s.Container,children:Object(u.jsxs)("div",{children:[Object(u.jsxs)(d.a,{variant:"h4",className:s.Title,children:["Composer: ",Object(u.jsxs)("strong",{children:[" ",i.interpreter_name," "]})," "]}),Object(u.jsx)(d.a,{variant:"h4",className:s.Title,children:"Interpreters (select one): "}),c.map((function(e){return Object(u.jsxs)(f.a,{size:"large",className:s.Button,fullWidth:!0,onClick:function(){return t=e.embed_spotify_link,n=e.embed_youtube_link,r({spotify:t,youtube:n}),void a(!0);var t,n},children:[e.interpreters[0].interpreter_name,Object(u.jsx)(S.a,{className:s.Title,alt:e.interpreters[0].interpreter_name,src:e.interpreters[0].interpreter_image})]})}))]})})})})},N=n(66),C=n(92),T=n(87),J=n(88),q=Object(l.a)((function(e){return{Tabs:{margin:"30px"}}})),Y=function(e){var t=e.thirdscreen,n=e.links,a=q(),s=n.spotify,i=n.youtube,c=Object(r.useState)(0),o=Object(j.a)(c,2),l=o[0],b=o[1];return Object(u.jsx)(x.a,{in:t,timeout:2e3,children:Object(u.jsx)("main",{children:Object(u.jsx)(g.a,{maxWidth:"md",className:a.Container,children:Object(u.jsxs)("div",{children:[Object(u.jsx)(N.a,{square:!0,children:Object(u.jsxs)(C.a,{className:a.Tabs,value:l,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){b(t)},"aria-label":"disabled tabs example",children:[i?Object(u.jsx)(T.a,{label:"Youtube"}):null,s?Object(u.jsx)(T.a,{label:"Spotify"}):null]})}),0===l?Object(u.jsx)(J.a,{component:"iframe",height:"600",src:i}):Object(u.jsx)(J.a,{component:"iframe",height:"600",src:s})]})})})})},B=Object(l.a)((function(e){return{Spinner:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}})),H=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)({}),i=Object(j.a)(s,2),l=i[0],p=i[1],h=Object(r.useState)(!1),d=Object(j.a)(h,2),x=d[0],g=d[1],f=Object(r.useState)(!1),y=Object(j.a)(f,2),k=y[0],_=y[1],S=Object(r.useState)({}),W=Object(j.a)(S,2),N=W[0],C=W[1],T=function(){var e=Object(o.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://songs-project-backend.herokuapp.com/songoftheday/");case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent).length>0?p(n[0]):p({id:39,composer:{interpreter_name:"Wayne Shorter",interpreter_image:"https://songs-project-backend.herokuapp.com/media/artistimages/Wayne_Shorter.jpg"},links:[{interpreters:[{interpreter_name:"Wayne Shorter",interpreter_image:"https://songs-project-backend.herokuapp.com/media/artistimages/Wayne_Shorter.jpg"}],embed_youtube_link:"https://www.youtube.com/embed/k0q8mGUHJVQ",embed_spotify_link:"https://open.spotify.com/embed/track/4W7mDQgJwaLNHuweyq5Yzj"}],song_title:"Yes or no",date_song:"30-03"}),a(!0),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),p({id:39,composer:{interpreter_name:"Wayne Shorter",interpreter_image:"https://songs-project-backend.herokuapp.com/media/artistimages/Wayne_Shorter.jpg"},links:[{interpreters:[{interpreter_name:"Wayne Shorter",interpreter_image:"https://songs-project-backend.herokuapp.com/media/artistimages/Wayne_Shorter.jpg"}],embed_youtube_link:"https://www.youtube.com/embed/k0q8mGUHJVQ",embed_spotify_link:"https://open.spotify.com/embed/track/4W7mDQgJwaLNHuweyq5Yzj"}],song_title:"Yes or no",date_song:"30-03"}),a(!0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){T()}),[]);var J=B();return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(b.a,{}),Object(u.jsx)(O,{}),n?k?Object(u.jsx)(Y,{thirdscreen:k,links:N}):x?Object(u.jsx)(w,{secondscreen:x,Song:l,setLinks:C,setThirdscreen:_}):Object(u.jsx)(v,{Song:l,checked:n,setSecondscreen:g}):Object(u.jsx)(m.a,{className:J.Spinner})]})};s.a.render(Object(u.jsx)(H,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f6d83fcc.chunk.js.map