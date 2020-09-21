(this.webpackJsonpharvest2sheet=this.webpackJsonpharvest2sheet||[]).push([[0],{43:function(e){e.exports=JSON.parse('{"a":"1.0.0"}')},45:function(e,t,r){e.exports=r(56)},56:function(e,t,r){"use strict";r.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=r(1),a=r(16),o=r.n(a),i=r(4),c=r.n(i),s=r(11),u=r(6),d=r(0),l=r.n(d),p=r(41),m=r(24),b=r(40),f=r(39),h=r(19),g={date:{name:"Date",value:function(e){return e.spent_date}},hours:{name:"Hours",value:function(e){return e.hours}},rounded_hours:{name:"Rounded Hours",value:function(e){return e.rounded_hours}},notes:{name:"Notes",value:function(e){return e.notes}},locked:{name:"Locked",value:function(e){return e.is_locked?"Yes":"No"}},locked_reason:{name:"Locked Reason",value:function(e){return e.locked_reason}},closed:{name:"Closed",value:function(e){return e.is_closed?"Yes":"No"}},billed:{name:"Billed",value:function(e){return e.is_billed?"Yes":"No"}},timer_started_at:{name:"Timer Started At",value:function(e){return e.timer_started_at}},started_time:{name:"Started Timer",value:function(e){return e.started_time}},ended_time:{name:"Ended Timer",value:function(e){return e.ended_time}},running:{name:"Running",value:function(e){return e.is_running?"Yes":"No"}},billable:{name:"Billable",value:function(e){return e.billable}},budgeted:{name:"Budgeted",value:function(e){return e.budgeted}},billable_rate:{name:"Billable Rate",value:function(e){return e.billable_rate}},billable_amount:{name:"Billable Amount",value:function(e){return e.rounded_hours*e.billable_rate}},cost_rate:{name:"Cost Rate",value:function(e){return e.cost_rate}},cost_amount:{name:"Cost Amount",value:function(e){return e.rounded_hours*e.cost_rate}},created_at:{name:"Created At",value:function(e){return Object(h.a)(Object(m.a)(e.created_at),"yyyy-MM-dd")}},updated_at:{name:"Updated At",value:function(e){return e.updated_at}},user:{name:"User",value:function(e){return e.user.name}},client:{name:"Client",value:function(e){return e.client.name}},currency:{name:"Currency",value:function(e){return e.client.currency}},project:{name:"Project",value:function(e){return e.project.name}},project_code:{name:"Project Code",value:function(e){return e.project.code}},task:{name:"Task",value:function(e){return e.task.name}}};function v(e){return O.apply(this,arguments)}function O(){return(O=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.harvestapp.com/v2/users/me",{method:"GET",headers:{Authorization:"Bearer ".concat(t.HARVEST_ACCESS_TOKEN),"Harvest-Account-Id":t.HARVEST_ACCOUNT_ID,"User-Agent":"Harvest2Sheet"}});case 3:return r=e.sent,e.next=6,r.json();case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Harvest login failed. Please check your credentials.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function j(e,t){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(c.a.mark((function e(t,r){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.harvestapp.com/v2/projects/".concat(r),{method:"GET",headers:{Authorization:"Bearer ".concat(t.HARVEST_ACCESS_TOKEN),"Harvest-Account-Id":t.HARVEST_ACCOUNT_ID,"User-Agent":"Harvest2Sheet"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Harvest sync failed. Please check your credentials.");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function x(e,t,r,n){return y.apply(this,arguments)}function y(){return(y=Object(s.a)(c.a.mark((function e(t,r,n,a){var o,i,s,u,d,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=[],i=Object(m.a)("".concat(n,"-01T00:00:00.000Z")),Object(f.a)(i)&&"Invalid Date"!==i.toString()){e.next=5;break}return console.error("The date passed in is not valid"),e.abrupt("return");case 5:return s=Object(b.a)(Object(p.a)(i)),u=[a.map((function(e){return g[e]?g[e].name:"unknown"}))],e.prev=7,e.next=10,fetch("https://api.harvestapp.com/v2/time_entries?from=".concat(Object(h.a)(i,"yyyyMMdd"),"&to=").concat(Object(h.a)(s,"yyyyMMdd"),"&project_id=").concat(r),{method:"GET",headers:{Authorization:"Bearer ".concat(t.HARVEST_ACCESS_TOKEN),"Harvest-Account-Id":t.HARVEST_ACCOUNT_ID,"User-Agent":"Harvest2Sheet"}});case 10:return d=e.sent,e.next=13,d.json();case 13:l=e.sent,l.time_entries.reverse().forEach((function(e){u.push(a.map((function(t){return g[t]?g[t].value(e):""})))})),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),o.push(e.t0);case 21:return e.abrupt("return",{csv:u,errors:o.length?o.join("\n"):null});case 22:case"end":return e.stop()}}),e,null,[[7,18]])})))).apply(this,arguments)}function w(e,t){return k.apply(this,arguments)}function k(){return(k=Object(s.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.gapi.client.sheets.spreadsheets.batchUpdate({spreadsheetId:t,resource:{requests:[{addSheet:{properties:{title:r,tabColor:{red:155,green:155,blue:155}}}}]}});case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function I(e,t){return C.apply(this,arguments)}function C(){return(C=Object(s.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.gapi.client.sheets.spreadsheets.values.clear({spreadsheetId:t,range:"".concat(r,"!A1:ZZZ9999")});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,r){return _.apply(this,arguments)}function _(){return(_=Object(s.a)(c.a.mark((function e(t,r,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.gapi.client.sheets.spreadsheets.values.append({spreadsheetId:t,range:r,valueInputOption:"RAW",insertDataOption:"OVERWRITE",resource:{values:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return window.gapi.client?Promise.resolve():new Promise(function(){var r=Object(s.a)(c.a.mark((function r(n,a){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t>2&&a("Google login failed. Check you credentials."),r.prev=1,r.next=4,window.gapi.load("client:auth2",function(){var r=Object(s.a)(c.a.mark((function r(o){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,window.gapi.client.init({apiKey:e.GOOGLE_API_KEY,clientId:e.GOOGLE_CLIENT_ID,discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:"https://www.googleapis.com/auth/spreadsheets"});case 3:r.next=8;break;case 5:r.prev=5,r.t0=r.catch(0),a("Google login failed. Check you credentials.");case 8:if(!window.gapi.auth2.getAuthInstance().isSignedIn.get()){r.next=13;break}n(),r.next=24;break;case 13:return r.prev=13,r.next=16,window.gapi.auth2.getAuthInstance().signIn();case 16:return r.next=18,E(e,t+1);case 18:n(),r.next=24;break;case 21:r.prev=21,r.t1=r.catch(13),a(r.t1);case 24:case"end":return r.stop()}}),r,null,[[0,5],[13,21]])})));return function(e){return r.apply(this,arguments)}}());case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(1),a(r.t0);case 9:case"end":return r.stop()}}),r,null,[[1,6]])})));return function(e,t){return r.apply(this,arguments)}}())}function N(e,t){return A.apply(this,arguments)}function A(){return(A=Object(s.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return e.next=4,window.gapi.client.sheets.spreadsheets.get({spreadsheetId:r});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t,r,n,a){return R.apply(this,arguments)}function R(){return(R=Object(s.a)(c.a.mark((function e(t,r,n,a,o){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return e.next=4,w(r,o);case 4:return e.next=6,I(r,o);case 6:return e.next=8,T(r,o,a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){var t=e.children,r=e.size,a=void 0===r?"md":r;return Object(n.d)("div",{css:{maxWidth:{sm:"30rem",md:"60rem",lg:"93.75rem"}[a],background:"#fff",margin:"1rem auto",padding:"1rem",boxShadow:"0 0 1rem 0.25rem rgba(0, 0, 0, 0.4)","@media (min-width: 37.5rem)":{padding:"2rem"}}},t)}var H=r(21),P=r(25);function z(e){var t=e.children,r=e.loading,a=e.look,o=void 0===a?"default":a,i=e.as,c=void 0===i?"button":i,s=Object(P.a)(e,["children","loading","look","as"]),u={default:{background:"#008800",color:"#fff",":hover":s.disabled?{}:{boxShadow:"0 0 0 2px white, 0 0 0 3px #008800"}},muted:{border:"1px solid #767676",":hover":s.disabled?{}:{boxShadow:"0 0 0 2px white, 0 0 0 3px #767676"}}},d=Object(n.e)({to:{transform:"rotate( 360deg )"}});return Object(n.d)(c,Object.assign({disabled:!!r,css:Object(H.a)({position:"relative",display:"inline-block",border:"none",borderRadius:"1px",apperance:"none",fontSize:"1rem",cursor:"pointer",lineHeight:1,padding:"1rem 1.5rem",margin:"1rem 0 0 0",textDecoration:"none",":after":{content:'""',display:r?"block":"none",position:"absolute",top:"12px",left:"50%",marginLeft:"-0.75rem",width:"1.5rem",height:"1.5rem",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(d," 0.6s linear infinite")},":disabled":{opacity:.4}},u[o]?u[o]:{})},s),t)}function G(e){var t=e.id,r=e.label,a=e.loading,o=void 0!==a&&a,i=Object(P.a)(e,["id","label","loading"]),c=Object(n.e)({to:{transform:"rotate( 360deg )"}});return Object(n.d)("li",{css:{marginBottom:"0.5rem","@media (min-width: 37.5rem)":{display:"grid",gridTemplateColumns:"16rem auto"}}},Object(n.d)("label",{htmlFor:t,css:{display:"block",margin:"1rem 0 0.5rem 0",fontSize:"1.5rem",alignSelf:"center",whiteSpace:"nowrap","@media (min-width: 37.5rem)":{display:"inline-block",margin:"0 0.5rem 0 0"}}},r),Object(n.d)("span",{css:{position:"relative",":after":{content:'""',display:o?"block":"none",position:"absolute",top:"10px",left:"50%",marginLeft:"-0.75rem",width:"1.5rem",height:"1.5rem",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(c," 0.6s linear infinite")}}},Object(n.d)("input",Object.assign({id:t,type:"text",css:{fontSize:"1.5rem",padding:"0.5rem",margin:0,border:"1px solid #767676",borderRadius:"0.2rem",apperance:"none",width:"100%",color:"#383E48",":focus":{boxShadow:"0 0 0 3px #006cff",borderColor:"#006cff",outline:"none"},":disabled":{background:"#eee"}}},i))))}function V(e){var t=e.handleLogin,r=e.inputLines,a=e.loading,o=e.error,i=Object(n.e)({to:{transform:"rotate( 360deg )"}});return Object(n.d)(d.Fragment,null,Object(n.d)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"20vw",margin:"0 0 5vw 0",textAlign:"center",fontWeight:700,textShadow:"0 1.8vw 1.8vw #333",color:"#fff","@media (min-width: 125rem)":{fontSize:"25rem",marginBottom:"6.25rem",textShadow:"0 2.25rem 2.25rem #333"}}},"Login"),Object(n.d)(L,null,Object(n.d)("form",{onSubmit:t,css:{position:"relative",margin:0,padding:0,":after":{content:'""',display:a?"block":"none",position:"absolute",top:"50%",left:"50%",marginLeft:"-2.5rem",marginTop:"-2.5rem",width:"5rem",height:"5rem",border:"0.75rem solid #aaa",borderTopColor:"#383E48",borderRadius:"100%",animation:"".concat(i," 0.5s linear infinite")}}},Object(n.d)("ul",{css:{listStyle:"none",padding:0,margin:0,opacity:a?.4:1}},r.map((function(e){var t=e.id,r=e.label,o=e.value,i=e.setValue;return Object(n.d)(G,{required:!0,key:t,id:t,label:r,value:o,disabled:a,onChange:function(e){return i(e.target.value)}})}))),Object(n.d)(z,{type:"submit",disabled:a,css:{float:"right"}},"Save login"),o&&Object(n.d)("span",{css:{display:"inline-block",marginTop:"1rem",color:"red"}},o))))}var B=r(17),M=r(9);function U(e){var t=e.children,r=e.confirm,a=e.onClick,o=e.look,i=void 0===o?"add":o,c=e.as,s=void 0===c?"button":c,l=Object(P.a)(e,["children","confirm","onClick","look","as"]),p=Object(d.useState)(!1),m=Object(u.a)(p,2),b=m[0],f=m[1],h=Object(d.useState)(!1),g=Object(u.a)(h,2),v=g[0],O=g[1],j=Object(d.useState)([]),S=Object(u.a)(j,2),x=S[0],y=S[1],w=Object(n.e)({"0%":{transform:"scale(0.6)",opacity:0},"33%":{transform:"scale(1)",opacity:1},"100%":{transform:"scale(1.4)",opacity:0}}),k=Object(n.e)({"0%":{boxShadow:"0 0 0 3px rgba(255, 255, 255, 0.2)",opacity:0},"33%":{boxShadow:"0 0 0 10px rgba(255, 255, 255, 0.2)",opacity:1},"100%":{boxShadow:"0 0 0 16px rgba(255, 255, 255, 0.2)",opacity:0}}),I={adjust:{":before":{content:'""',position:"absolute",top:"50%",left:"14px",width:"14px",height:"14px",marginTop:"-7px",border:"6px solid #383E48",borderRadius:"100%",transition:"border 0.2s ease"},":after":{content:'""',position:"absolute",boxSizing:"content-box",top:"50%",left:"12px",width:"10px",height:"10px",marginTop:"-9px",border:"4px dotted #383E48",borderRadius:"100%",transition:"border 0.2s ease"},":hover":{background:"#005FCC",color:"#fff"},":hover:before, :hover:after":{borderColor:"#fff"}},logout:{padding:"0.5rem 1rem",background:"#fff",":hover":{background:"#ee0000",color:"#fff"}},sync:{background:l.disabled?"#eee":"#008800",color:l.disabled?"#383E48":"#fff",cursor:l.disabled?"not-allowed":"pointer",":before":{content:'""',position:"absolute",top:"50%",left:"0.5rem",width:"1.5rem",height:"1.5rem",marginTop:"-0.75rem",background:"rgba(255,255,255, 0.2)",borderRadius:"50px",opacity:0,animation:l.disabled?"none":"".concat(w," 3s 2s infinite linear")},":after":{content:'""',position:"absolute",top:"50%",left:"1rem",width:"4px",height:"4px",marginTop:"-2px",marginLeft:"2px",background:l.disabled?"#383E48":"#fff",borderRadius:"50%",boxShadow:"0 0 0 1px rgba(255, 255, 255, 0.2)",animation:l.disabled?"none":"".concat(k," 3s infinite linear")}},add:{":before, :after":{content:'""',position:"absolute",width:"1rem",height:"0.25rem",background:"#383E48",borderRadius:"2px",top:"50%",marginTop:"-0.125rem",left:"1rem",transition:"background 0.2s ease"},":after":{transform:"rotate(-90deg)"},":hover":{background:"#005FCC",color:"#fff"},":hover:before, :hover:after":{background:"#fff"}},delete:{":before, :after":{content:'""',position:"absolute",width:"1rem",height:"0.25rem",background:"#383E48",borderRadius:"2px",transform:"rotate(45deg)",top:"50%",marginTop:"-0.125rem",left:"1rem",transition:"background 0.2s ease"},":after":{transform:"rotate(-45deg)"},":hover":{background:"#ee0000",color:"#fff"},":hover:before, :hover:after":{background:"#fff"}},edit:{":before":{content:'""',position:"absolute",top:"50%",marginTop:"-0.5rem",left:"1rem",width:"0.9rem",height:"1rem",border:"2px solid #383E48",transition:"border 0.2s ease"},":after":{content:'""',position:"absolute",top:"2px",left:"1.65rem",background:"#383E48",width:"4px",height:"1rem",transform:"rotate(45deg)",borderRadius:"1px 1px 50% 50%",boxShadow:"0 0 0 2px #eee",transition:"background 0.2s ease, box-shadow 0.2s ease"},":hover":{background:"#008800",color:"#fff"},":hover:before":{borderColor:"#fff"},":hover:after":{background:"#fff",boxShadow:"0 0 0 2px #008800"}}};return Object(n.d)(s,Object.assign({css:Object(H.a)({position:"relative",display:"inline-block",apperance:"none",background:"#eee",color:"#383E48",border:"none",padding:"0.5rem 1rem 0.5rem 2.5rem",fontSize:"0.75rem",textDecoration:"none",textAlign:"center",lineHeight:1,borderRadius:"3px",transition:"background 0.2s ease, color 0.2s ease",overflow:"hidden",cursor:"pointer"},I[i]?I[i]:{}),onClick:function(e){clearTimeout(x),y([]),r&&!b?(e.preventDefault(),O(!0),y(setTimeout((function(){f(!1),O(!1),y([])}),3e3))):("function"==typeof a&&a(),O(!1)),f(!b)}},l),v?"Sure?":t)}var J=r(35);function F(e){return Object(n.d)("span",Object.assign({css:{display:"inline-block",background:"#eee",border:"1px solid #ccc",padding:"0 0.25rem",borderRadius:"3px",margin:"0.25rem 0.25rem 0 0",fontSize:"0.75rem"}},e))}function K(e){var t=e.id,r=e.name,a=e.hProjectName,o=e.tabName,i=e.gSheetIDName,c=e.output,s=e.selected,u=e.toggle,d=e.deleteSheet;return Object(n.d)("div",{css:{display:"grid",gridTemplateColumns:"3rem auto",gap:"0.5rem",alignItems:"center","@media (min-width: 40rem)":{gridTemplateColumns:"3rem auto 12rem"}}},Object(n.d)("label",{css:{position:"relative",overflow:"hidden",display:"block",width:"3rem",height:"3rem",cursor:"pointer"}},Object(n.d)("input",{id:t,type:"checkbox",checked:s.includes(t),onChange:function(){return u(t)},css:{position:"absolute",top:"-5rem",left:"-5rem"}}),Object(n.d)("span",{css:{display:"block",width:"2rem",height:"2rem",margin:"0.5rem",border:"4px solid #000",borderRadius:"3px",":before":{content:'""',display:"none",position:"absolute",top:"0.5rem",right:"0.5rem",width:"1.5rem",height:"0.8rem",borderBottom:"4px solid #000",borderLeft:"4px solid #000",transform:"rotate(-45deg)",zIndex:2},":after":{content:'""',display:"none",position:"absolute",top:"0",right:"0",width:"1.3rem",height:"1.3rem",background:"#fff",zIndex:1},"input:checked + &:before,input:checked + &:after":{display:"block"}}})),Object(n.d)("label",{htmlFor:t,css:{display:"block",cursor:"pointer"}},Object(n.d)("strong",{css:{display:"block"}},r),Object(n.d)(F,null,a),Object(n.d)(F,null,i),Object(n.d)(F,null,o),Object(n.d)(F,null,c.length," columns")),Object(n.d)("div",{css:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem",alignItems:"center",gridColumn:"1 / 3","@media (min-width: 40rem)":{gridTemplateColumns:"1fr 1fr",gridColumn:"unset"}}},Object(n.d)(U,{look:"edit",as:B.b,to:"/edit/".concat(t)},"Edit"),Object(n.d)(U,{confirm:!0,type:"button",look:"delete",onClick:function(){return d(t)}},"Delete")))}function q(){var e=JSON.parse(localStorage.getItem("harvest2sheetLogin")||"{}"),t=JSON.parse(localStorage.getItem("harvest2sheetOutput")||"[]");0===t.length&&(t=["date","user","client","project","task","hours","rounded_hours","notes","billable_rate","billable_amount","cost_rate","cost_amount","currency"],localStorage.setItem("harvest2sheetOutput",JSON.stringify(t)));var r=Object(d.useState)(JSON.parse(localStorage.getItem("harvest2sheetSheets")||"[]")),a=Object(u.a)(r,2),o=a[0],i=a[1],l=Object(d.useState)(Object(h.a)(new Date,"yyyy-MM")),p=Object(u.a)(l,2),b=p[0],f=p[1],g=Object(d.useState)(!1),v=Object(u.a)(g,2),O=v[0],j=v[1],S=Object(d.useState)([]),y=Object(u.a)(S,2),w=y[0],k=y[1],I=function(e){var t=o.filter((function(t){return t.id!==e}));localStorage.setItem("harvest2sheetSheets",JSON.stringify(t)),i(t)},C=function(e){if(w.includes(e)){var t=Object(J.a)(w).filter((function(t){return t!==e}));k(t)}else{var r=Object(J.a)(w);r.push(e),k(r)}},T=function(){var r=Object(s.a)(c.a.mark((function r(n,a){var i;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),j(!0),i=o.filter((function(e){var t=e.id;return w.includes(t)})),r.next=5,Promise.all(i.map(function(){var r=Object(s.a)(c.a.mark((function r(n){var o,i,s;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=n.hProject,i=n.gSheetID,r.prev=1,r.next=4,x(e,o,b,t);case 4:return s=r.sent,r.next=7,D(e,i,b,s.csv,a);case 7:k([]),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}()));case 5:j(!1);case 6:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}(),_=Object(n.e)({to:{transform:"rotate( 360deg )"}}),E=Object(m.a)("".concat(7===b.length?b:"2020-01","-01T00:00:00.000Z")),N="H|".concat(Object(h.a)(E,"LLL"),"'").concat(Object(h.a)(E,"yy"));return Object(n.d)(L,{size:"lg"},Object(n.d)("h2",null,"Sheets"),Object(n.d)("div",{css:{display:"grid",gridTemplateColumns:"1fr",alignItems:"center","@media (min-width: 28.75rem)":{gridTemplateColumns:"1fr 1fr"}}},Object(n.d)("div",{css:{"@media (min-width: 28.75rem)":{justifySelf:"start"}}},Object(n.d)(U,{look:"add",as:B.b,to:"/add"},"Add new"),Object(n.d)(U,{look:"adjust",as:B.b,to:"/output",css:{marginLeft:"0.5rem"}},"Output")),Object(n.d)("form",{onSubmit:function(e){return T(e,N)},css:{marginTop:"1rem","@media (min-width: 28.75rem)":{justifySelf:"end",marginTop:0}}},Object(n.d)("input",{type:"text",value:b,onChange:function(e){return f(e.target.value)},pattern:"\\d{4}-\\d{2}",title:"Please use the format year(4 numbers)-month(2 numbers). E.g.: 2020-09 or 2023-03",css:{display:"inline-block",apperance:"none",background:"#fff",border:"1px solid #383E48",width:"7em",padding:"0.5rem",lineHeight:1,marginRight:"1rem",textAlign:"center",":invalid":{boxShadow:"0 0 0 3px #ee0000"}}}),Object(n.d)(U,{look:"sync",type:"submit",disabled:!w.length},"Sync"))),Object(n.d)("ul",{css:{position:"relative",listStyle:"none",padding:0,margin:0,":after":{content:'""',display:O?"block":"none",position:"absolute",top:"50%",left:"50%",marginLeft:"-2.5rem",marginTop:"-2.5rem",width:"5rem",height:"5rem",border:"0.75rem solid #aaa",borderTopColor:"#383E48",borderRadius:"100%",animation:"".concat(_," 0.5s linear infinite")}}},o.map((function(e,r){var a=e.id,o=e.name,i=e.hProjectName,c=e.gSheetIDName;return Object(n.d)("li",{key:a,css:{opacity:O?.2:1,marginTop:"1.5rem",":not(:first-of-type)":{borderTop:"2px dashed #eee",paddingTop:"0.5rem"},"@media (min-width: 40rem)":{marginTop:"0.5rem"}}},Object(n.d)(K,{id:a,name:o,hProjectName:i,tabName:N,gSheetIDName:c,output:t,selected:w,toggle:C,deleteSheet:I}))}))))}var W=r(43),Y=r(34),Z=r(5),$=r(44);var Q=Object(Y.b)((function(e){var t={onMouseDown:function(e){e.preventDefault(),e.stopPropagation()}};return Object(n.d)(Z.z.MultiValue,Object.assign({},e,{innerProps:t}))})),X=Object(Y.a)($.a);function ee(){var e=JSON.parse(localStorage.getItem("harvest2sheetOutput")||"[]").map((function(e){return{value:e,label:g[e].name}})),t=Object(d.useState)(e),r=Object(u.a)(t,2),a=r[0],o=r[1],i=Object(M.f)(),c=Object.entries(g).map((function(e){var t=Object(u.a)(e,2);return{value:t[0],label:t[1].name}}));return Object(n.d)(L,null,Object(n.d)("h2",null,"Output"),Object(n.d)("form",{onSubmit:function(e){e.preventDefault(),localStorage.setItem("harvest2sheetOutput",JSON.stringify(a.map((function(e){return e.value})))),i.push("/")},css:{margin:0,padding:0}},Object(n.d)("p",null,"Select the columns to be written into the spreadsheets"),Object(n.d)(X,{axis:"xy",onSortEnd:function(e){var t,r,n,i=e.oldIndex,c=e.newIndex,s=(r=i,n=c,(t=(t=a).slice()).splice(n<0?t.length+n:n,0,t.splice(r,1)[0]),t);o(s)},distance:4,getHelperDimensions:function(e){return e.node.getBoundingClientRect()},isMulti:!0,options:c,value:a,onChange:function(e){return o(e)},components:{MultiValue:Q},closeMenuOnSelect:!1}),Object(n.d)("div",{css:{display:"grid",gridTemplateColumns:"1fr 1fr",justifyItems:"start"}},Object(n.d)(z,{look:"muted",to:"/",as:B.b},"Cancel"),Object(n.d)(z,{type:"submit",css:{justifySelf:"end"}},"Save output"))))}function te(e){var t=e.match.params.sheetID;t=parseInt(t);var r=JSON.parse(localStorage.getItem("harvest2sheetSheets")||"[]"),a="",o="",i="",l="",p="";if(t){var m=r.filter((function(e){return e.id===t}));1===m.length&&(a=m[0].hProject,o=m[0].hProjectName,i=m[0].gSheetID,l=m[0].gSheetIDName,p=m[0].name)}var b=Object(d.useState)(!1),f=Object(u.a)(b,2),h=f[0],g=f[1],v=Object(d.useState)(a),O=Object(u.a)(v,2),S=O[0],x=O[1],y=Object(d.useState)(o),w=Object(u.a)(y,2),k=w[0],I=w[1],C=Object(d.useState)(i),T=Object(u.a)(C,2),_=T[0],E=T[1],A=Object(d.useState)(l),D=Object(u.a)(A,2),R=D[0],P=D[1],V=Object(d.useState)(p),U=Object(u.a)(V,2),J=U[0],F=U[1],K=Object(M.f)(),q=JSON.parse(localStorage.getItem("harvest2sheetLogin")||"{}"),W=function(){var e=Object(s.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),I(""),e.prev=2,e.next=5,j(q,S);case 5:t=e.sent,r=t.name,I(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),I("- not found -");case 13:g(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(s.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),P(""),e.prev=2,e.next=5,N(q,_);case 5:t=e.sent,r=t.result.properties.title,P(r||""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),P("- not found -");case 13:g(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.d)(L,null,Object(n.d)("h2",null,t?"Edit a":"Add a new"," sheet"),Object(n.d)("form",{onSubmit:function(e){e.preventDefault(),"- not found -"!==k&&""!==k&&k&&"- not found -"!==R&&""!==R&&R&&(t?r=r.map((function(e){return e.id===t?{id:e.id,name:J,hProject:S,hProjectName:k,gSheetID:_,gSheetIDName:R}:e})):r.push({id:r.length?r[r.length-1].id+1:1,name:J,hProject:S,hProjectName:k,gSheetID:_,gSheetIDName:R}),localStorage.setItem("harvest2sheetSheets",JSON.stringify(r)),K.push("/"))},css:{margin:0,padding:0}},Object(n.d)("ul",{css:{listStyle:"none",padding:0,margin:0}},Object(n.d)(G,{required:!0,id:"name",label:"Sheet name",value:J,onChange:function(e){return F(e.target.value)}}),Object(n.d)(G,{required:!0,id:"hProject",label:"Harvest Project ID",value:S,onChange:function(e){x(e.target.value),I("")},onBlur:W}),Object(n.d)(G,{required:!0,id:"hProjectName",label:"Harvest Project Name",value:k,disabled:!0,loading:h,readOnly:!0,css:Object(H.a)({},"- not found -"!==k&&""!==k&&k?{}:{boxShadow:"0 0 0 3px red"})}),Object(n.d)(G,{required:!0,id:"gSheetID",label:"Spreadsheet ID",value:_,onChange:function(e){E(e.target.value),P("")},onBlur:Y}),Object(n.d)(G,{required:!0,id:"gSheetIDName",label:"Sheet Name",value:R,disabled:!0,loading:h,readOnly:!0,css:Object(H.a)({},"- not found -"!==R&&""!==R&&R?{}:{boxShadow:"0 0 0 3px red"})})),Object(n.d)("div",{css:{display:"grid",gridTemplateColumns:"1fr 1fr",justifyItems:"start"}},Object(n.d)(z,{look:"muted",to:"/",as:B.b},"Cancel"),Object(n.d)(z,{type:"submit",loading:h,css:{justifySelf:"end"}},t?"Edit":"Add"," sheet"))))}function re(e){var t=e.handleLogout;return Object(n.d)(d.Fragment,null,Object(n.d)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"10vw",lineHeight:1,margin:"1vw 0 3vw 0",textAlign:"center",fontWeight:700,textShadow:"0 0 1px #000, 0 1.8vw 1.8vw #333",color:"#fff","@media (min-width: 75rem)":{fontSize:"7.5rem",margin:"0.75rem 0 2.25rem 0",textShadow:"0 0 1px #000, 0 1.34375rem 1.34375rem #333"}}},"Harvest 2 Sheet"),Object(n.d)(U,{look:"logout",onClick:t,css:{display:"block",margin:"0 auto","@media (min-width: 41.875rem)":{position:"absolute",top:"1rem",right:"1rem"}}},"Logout"),Object(n.d)(B.a,null,Object(n.d)(M.c,null,Object(n.d)(M.a,{exact:!0,path:"/",component:q}),Object(n.d)(M.a,{exact:!0,path:"/add",component:te}),Object(n.d)(M.a,{exact:!0,path:"/output",component:ee}),Object(n.d)(M.a,{exact:!0,path:"/edit/:sheetID",component:te}))),Object(n.d)("span",{css:{display:"block",padding:"1rem",textAlign:"right",color:"#fff",fontSize:"0.5rem"}},"v",W.a))}function ne(){var e=Object(d.useState)(JSON.parse(localStorage.getItem("harvest2sheetLogin")||"{}")),t=Object(u.a)(e,2),r=t[0],a=t[1],o=Object(d.useState)(!1),i=Object(u.a)(o,2),l=i[0],p=i[1],m=Object(d.useState)(""),b=Object(u.a)(m,2),f=b[0],h=b[1],g=Object(d.useState)(""),O=Object(u.a)(g,2),j=O[0],S=O[1],x=Object(d.useState)(""),y=Object(u.a)(x,2),w=y[0],k=y[1],I=Object(d.useState)(""),C=Object(u.a)(I,2),T=C[0],_=C[1],N=Object(d.useState)(""),A=Object(u.a)(N,2),D=A[0],R=A[1],L=function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p(!0),!(j&&w&&T&&D)){e.next=18;break}return r={HARVEST_ACCESS_TOKEN:j,HARVEST_ACCOUNT_ID:w,GOOGLE_CLIENT_ID:T,GOOGLE_API_KEY:D},e.prev=4,e.next=7,v(r);case 7:return e.next=9,E(r);case 9:localStorage.setItem("harvest2sheetLogin",JSON.stringify(r)),a(r),p(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),h(e.t0.toString()),p(!1);case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),H=!!r&&(!!r.HARVEST_ACCESS_TOKEN||!!r.HARVEST_ACCOUNT_ID||!!r.GOOGLE_CLIENT_ID||!!r.GOOGLE_API_KEY);return Object(n.d)("main",{css:{textRendering:"optimizeLegibility",fontKerning:"auto",MozOsxFontSmoothing:"grayscale"}},H?Object(n.d)(re,{handleLogout:function(){localStorage.setItem("harvest2sheetLogin","{}"),a({})}}):Object(n.d)(V,{handleLogin:L,loading:l,error:f,inputLines:[{id:"hToken",label:"Harvest access token",value:j,setValue:S},{id:"hID",label:"Harvest account ID",value:w,setValue:k},{id:"gClientID",label:"Google client ID",value:T,setValue:_},{id:"gAPIKey",label:"Google API key",value:D,setValue:R}]}))}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(n.c,{styles:{html:{background:"rgb(183, 1, 255) -webkit-radial-gradient(left bottom, rgb(1, 255, 251), rgb(183, 1, 255)) repeat fixed 0% 0%",height:"100%"},body:{fontFamily:'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',lineHeight:1.2,margin:0,padding:0,color:"#383E48"},a:{color:"#383E48"},"*, *:before, *:after":{boxSizing:"border-box"}}}),l.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.96bf3650.chunk.js.map