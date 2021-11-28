(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,n){},112:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),s=n.n(c),i=(n(87),n(88),n(1)),o=n(38),l=n(12),d=n(11),j=n(7),h=n(16),b=n(27),u=n(30),x=n(25),g=(n(90),n.p,n.p,n(22)),m=n.n(g),O=n(33),p=n(17),f=n.n(p),y=Object(r.createContext)();function v(e){var t=Object(r.useState)(void 0),n=Object(d.a)(t,2),a=n[0],c=n[1];function s(){return o.apply(this,arguments)}function o(){return(o=Object(O.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/auth/loggedIn");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){s()}),[]),Object(i.jsx)(y.Provider,{value:{loggedIn:a,getLoggedIn:s},children:e.children})}var w=y;n(110);var T=function(e){return e.trigger?Object(i.jsx)("div",{className:"popup",children:Object(i.jsxs)("div",{className:"popup-inner",children:[Object(i.jsx)("button",{className:"close-btn",onClick:function(){return e.setTrigger(!1)},children:Object(i.jsx)("b",{children:"X"})}),e.children]})}):""};var C=function(){var e=Object(r.useContext)(w).loggedIn,t=Object(r.useState)(!1),n=Object(d.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){var t=e;console.log("flag: ",t),!0===t&&(c(!0),t=!1)}),[]),Object(i.jsx)("div",{className:"Home",children:Object(i.jsxs)("div",{style:{backgroundImage:"url(/AnaliliaMenu.webp)",backgroundSize:"cover",height:"100vh"},children:[Object(i.jsx)("h1",{style:{paddingLeft:"65%",paddingTop:"11%",color:"white",fontSize:"60px"},children:"Analilia"}),Object(i.jsx)(b.a,{fluid:!0,children:Object(i.jsx)(u.a,{className:"justify-content-md-center",children:Object(i.jsx)(x.a,{children:Object(i.jsxs)(j.a,{style:{width:"40rem",marginTop:"5pt",marginRight:"11pt",marginBottom:"10px",float:"right",backgroundColor:"rgb(16,18,51)",boxShadow:"5px 10px 8px rgb(16, 18, 60)"},children:[Object(i.jsx)(j.a.Body,{children:Object(i.jsxs)(j.a.Text,{style:{color:"white"},children:[Object(i.jsx)("b",{children:Object(i.jsx)("h8",{children:"Analilia"})}),' is a free-to-play, RPG style fantasy game developed in order to give the player a perspective of the trials of being a women trying to get a leadership position. The game features a young woman, Analilia, who is trying to get a promotion at her tech job but battles the internal conflicts of lacking confidence and the external conflicts of sexism that prevent her from confronting her boss. She falls asleep and is transported to a "labyrinth" in which she experiences a path to leadership, encountering mythical creatures and problem solving puzzles. Analilia was developed by a group of University of Central Florida computer science senior design students.']})}),Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)(h.a,{size:"lg",variant:"secondary",children:"Download"})})]})})})}),Object(i.jsx)(T,{trigger:a,setTrigger:c,children:Object(i.jsx)("h3",{children:"Successfully logged in!"})})]})})},S=(n(111),n(44)),P=n(8);n(112);var k=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),o=Object(d.a)(s,2),l=o[0],g=o[1],m=Object(r.useState)([]),O=Object(d.a)(m,2),p=O[0],y=O[1],v=Object(r.useState)([]),T=Object(d.a)(v,2),C=T[0],k=T[1],A=Object(r.useState)([]),L=Object(d.a)(A,2),I=L[0],B=L[1],z=a.a.useState(!1),N=Object(d.a)(z,2),G=N[0],D=N[1],E=Object(r.useContext)(w).loggedIn,M=function(){return D(!1)},F=Object(r.useState)([]),R=Object(d.a)(F,2);R[0],R[1],Object(r.useEffect)((function(){U()}),[]);var U=function(){f.a.get("/gameInfo/info").then((function(e){var t=e.data;y(t),console.log("Data has been received!"),console.log(t)})).catch((function(){console.log("Error retrieving data!")}))},V=function(e){e.preventDefault();var t={title:n,description:l,link:C,genre:I};f()({url:"/gameInfo/save",method:"POST",data:t}).then((function(){console.log("Data has been sent to the server"),J(),U()})).catch((function(){console.log("Internal server error")})),D(!1)},J=function(){c(""),g(""),k(""),B("")};return Object(i.jsxs)("div",{className:"gamesSetUp",children:[Object(i.jsx)("br",{}),Object(i.jsxs)(b.a,{style:{height:"100%"},children:[Object(i.jsx)(u.a,{classname:"justify-content-md-center",children:Object(i.jsxs)(x.a,{xs:!0,lg:"12",children:[Object(i.jsx)("h1",{style:{color:"white"},children:"More Games"}),Object(i.jsx)("h4",{style:{color:"white",fontSize:"18px"},children:Object(i.jsx)("i",{children:"Other games featured by emPower Through Play sponsors. Links will open a new window."})}),!0===E&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h.a,{variant:"primary",onClick:function(){return D(!0)},children:"Add Game"}),Object(i.jsxs)(S.a,{show:G,onHide:M,size:"lg",centered:!0,children:[Object(i.jsx)(S.a.Header,{closeButton:!0,children:Object(i.jsx)(S.a.Title,{id:"contained-modal-title-vcenter",children:"Add Game"})}),Object(i.jsx)(S.a.Body,{children:Object(i.jsxs)(P.a,{onSubmit:V,children:[Object(i.jsxs)(P.a.Group,{as:u.a,children:[Object(i.jsx)(P.a.Label,{column:!0,sm:"3",children:"Title"}),Object(i.jsx)(x.a,{sm:"8",children:Object(i.jsx)(P.a.Control,{type:"text",placeholder:"Enter the title of the game here.",value:n,onChange:function(e){c(e.target.value)}})})]}),Object(i.jsxs)(P.a.Group,{as:u.a,children:[Object(i.jsx)(P.a.Label,{column:!0,sm:"3",children:"Description"}),Object(i.jsx)(x.a,{sm:"8",children:Object(i.jsx)(P.a.Control,{type:"text",as:"textarea",placeholder:"Enter a brief description of the game here.",value:l,onChange:function(e){g(e.target.value)}})})]}),Object(i.jsxs)(P.a.Group,{as:u.a,children:[Object(i.jsx)(P.a.Label,{column:!0,sm:"3",children:"Link"}),Object(i.jsx)(x.a,{sm:"8",children:Object(i.jsx)(P.a.Control,{type:"text",placeholder:"Enter link to your game here. Please include 'https://'",value:C,onChange:function(e){k(e.target.value)}})})]}),Object(i.jsxs)(P.a.Group,{as:u.a,children:[Object(i.jsx)(P.a.Label,{column:!0,sm:"3",children:"Type of Game"}),Object(i.jsx)(x.a,{sm:"8",children:Object(i.jsx)(P.a.Control,{type:"text",placeholder:"Enter the genre of the game here.",value:I,onChange:function(e){B(e.target.value)}})})]})]})}),Object(i.jsxs)(S.a.Footer,{children:[Object(i.jsx)(h.a,{onClick:V,children:"Submit"}),Object(i.jsx)(h.a,{onClick:M,children:"Close"})]})]})]}),Object(i.jsx)("br",{})]})}),Object(i.jsx)(b.a,{children:Object(i.jsx)(u.a,{style:{paddingBottom:"5rem"},children:function(e){return e.length?e.slice(0).reverse().map((function(e,t){return Object(i.jsxs)("div",{children:[Object(i.jsx)("br",{}),Object(i.jsxs)(j.a,{style:{width:"30rem",marginRight:"50pt"},children:[Object(i.jsxs)(j.a.Body,{children:[Object(i.jsxs)(j.a.Title,{children:[e.title," ",Object(i.jsx)("small",{children:Object(i.jsx)("i",{children:e.genre})})]}),Object(i.jsxs)(j.a.Text,{children:[e.description,Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),Object(i.jsxs)(h.a,{variant:"primary",href:e.link,children:["Play ",e.title]}),!0===E&&Object(i.jsx)(h.a,{variant:"primary",onClick:function(){!function(e){var t={title:e.title,_id:e._id};console.log("Game to be deleted: "+t),f.a.post("gameInfo/delete",t).then((function(e){console.log("Data has been deleted: "+e.data),U()})).catch((function(){console.log("Internal server error deleting data")}))}(e)},children:"Delete"})]}),Object(i.jsx)(j.a.Footer,{children:(n=e.date,n=parseInt(n),n=new Date(n).toLocaleDateString())})]})]},t);var n})):null}(p)})})]})]})};n(80);var A=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(d.a)(c,2),o=s[0],u=s[1],x=Object(r.useContext)(w).getLoggedIn,g=Object(l.f)(),p=Object(r.useState)(!1),y=Object(d.a)(p,2),v=y[0],C=y[1],S=Object(r.useState)(""),k=Object(d.a)(S,2),A=k[0],L=k[1],I=!1;function B(){return(B=Object(O.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r={email:n,password:o},e.next=5,f.a.post("/auth/login",r).then((function(e){console.log(e.data),I=!0})).catch((function(e){console.log(e.response.data.message),L(e.response.data.message),C(!0)}));case 5:if(!0!==I){e.next=9;break}return e.next=8,x();case 8:g.push("/");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return Object(i.jsxs)("div",{className:"loginSetUp",children:[Object(i.jsx)("br",{}),Object(i.jsx)(b.a,{children:Object(i.jsxs)(j.a,{style:{alignItems:"center",margin:"0 auto",marginTop:"10%",width:"425pt",height:"275pt"},children:[Object(i.jsx)(j.a.Title,{style:{color:"#682D43",textAlign:"center",fontSize:"xx-large",paddingTop:"10pt"},children:Object(i.jsx)("h8",{children:"Login"})}),Object(i.jsxs)(P.a,{onSubmit:function(e){return B.apply(this,arguments)},children:[Object(i.jsxs)(P.a.Group,{controlId:"formBasicEmail",children:[Object(i.jsx)(P.a.Label,{children:"Email address"}),Object(i.jsx)(P.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return a(e.target.value)},value:n}),Object(i.jsx)(P.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(i.jsxs)(P.a.Group,{controlId:"formBasicPassword",children:[Object(i.jsx)(P.a.Label,{children:"Password"}),Object(i.jsx)(P.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return u(e.target.value)},value:o})]}),Object(i.jsx)(h.a,{variant:"secondary",type:"submit",children:"Log In"})]})]})}),Object(i.jsx)(T,{trigger:v,setTrigger:C,children:Object(i.jsx)("b",{children:A})})]})},L=n(51),I=n(49),B=n(50),z=function(){var e=Object(r.useContext)(w).loggedIn;console.log(e);var t=Object(r.useContext)(w).getLoggedIn,n=Object(l.f)();function a(){return(a=Object(O.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/auth/logout");case 2:return e.next=4,t();case 4:n.push("/");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.jsx)("div",{className:"Navigation",children:Object(i.jsxs)(L.a,{fixed:"bottom",bg:"dark",variant:"dark",expand:"lg",children:[Object(i.jsx)(L.a.Brand,{href:"/",children:Object(i.jsx)("b",{children:"Play Analilia"})}),Object(i.jsx)(L.a.Toggle,{}),Object(i.jsx)(L.a.Collapse,{style:{float:"right"},className:"justify-content-end",children:Object(i.jsxs)(I.a,{className:"mr-auto",children:[Object(i.jsx)(I.a.Link,{href:"/Games",children:"More Games"}),Object(i.jsx)(I.a.Link,{href:"/About",children:"About Us"}),Object(i.jsxs)(B.a,{drop:"up",title:"Account",id:"basic-nav-dropdown",children:[!1===e&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(B.a.Item,{href:"/Login",children:"Login"}),Object(i.jsx)(B.a.Item,{href:"/Register",children:"Register"})]}),!0===e&&Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(B.a.Item,{onClick:function(){return a.apply(this,arguments)},children:" Logout"})})]})]})})]})})};var N=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(d.a)(c,2),o=s[0],u=s[1],x=Object(r.useState)(""),g=Object(d.a)(x,2),p=g[0],y=g[1],v=(Object(r.useContext)(w).getLoggedIn,Object(l.f)(),Object(r.useState)(!1)),C=Object(d.a)(v,2),S=C[0],k=C[1],A=Object(r.useState)(""),L=Object(d.a)(A,2),I=L[0],B=L[1];function z(){return(z=Object(O.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r={email:n,password:o,passwordVerify:p},console.log(r),e.next=6,f.a.post("/auth/",r).then((function(e){console.log(e.data),!0})).catch((function(e){console.log(e.response.data.message),B(e.response.data.message),k(!0)}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(i.jsxs)("div",{className:"loginSetUp",children:[Object(i.jsx)("br",{}),Object(i.jsx)(b.a,{children:Object(i.jsxs)(j.a,{style:{alignItems:"center",margin:"0 auto",marginTop:"3%",width:"500pt",height:"350pt"},children:[Object(i.jsx)(j.a.Title,{style:{color:"#682D43",textAlign:"center",fontSize:"xx-large",paddingTop:"10pt"},children:Object(i.jsx)("h8",{children:"Register"})}),Object(i.jsxs)(j.a.Text,{style:{textAlign:"center"},children:["You must be an emPower Through Play sponsor to create an account.",Object(i.jsx)("br",{}),"You do ",Object(i.jsx)("b",{children:"not"})," need an account to play ",Object(i.jsx)("i",{children:"Analilia"}),"."]}),Object(i.jsxs)(P.a,{children:[Object(i.jsxs)(P.a.Group,{controlId:"formBasicEmail",children:[Object(i.jsx)(P.a.Label,{children:"Email address"}),Object(i.jsx)(P.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return a(e.target.value)},value:n}),Object(i.jsx)(P.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(i.jsxs)(P.a.Group,{controlId:"formBasicPassword",children:[Object(i.jsx)(P.a.Label,{children:"Password"}),Object(i.jsx)(P.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return u(e.target.value)},value:o})]}),Object(i.jsxs)(P.a.Group,{controlId:"formBasicPasswordVerify",children:[Object(i.jsx)(P.a.Label,{children:"Password Verify"}),Object(i.jsx)(P.a.Control,{type:"password",placeholder:"Password Verify",onChange:function(e){return y(e.target.value)},value:p})]}),Object(i.jsx)(h.a,{variant:"secondary",onClick:function(e){return z.apply(this,arguments)},children:"Submit"})]})]})}),Object(i.jsx)(T,{trigger:S,setTrigger:k,children:Object(i.jsx)("b",{children:I})})]})},G=n(60),D=n(61),E=n(64),M=n(62),F=(n(120),function(e){Object(E.a)(n,e);var t=Object(M.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"About",children:[Object(i.jsxs)("div",{className:"heroContainer",style:{backgroundImage:"url(/AnaliliaMenu.webp)"},children:[Object(i.jsx)("h1",{style:{marginLeft:"4rem",marginTop:"10rem"},children:"emPower Through Play"}),Object(i.jsx)("p",{style:{marginLeft:"4rem"},children:"Diversity and leadership games and resources for educators and students alike."})]}),Object(i.jsxs)("div",{className:"missionContainer",children:[Object(i.jsx)(j.a,{style:{width:"33rem",height:"20rem",marginLeft:"6rem",marginRight:"2rem",marginTop:"2rem",marginBottom:"2rem",backgroundImage:"url(/AnaliliaLeader1.webp)"}}),Object(i.jsxs)(j.a,{style:{width:"38rem",height:"100%",marginLeft:"4rem",marginTop:"2rem",marginBottom:"2rem",backgroundColor:"#ffffff00",border:"none"},children:[Object(i.jsx)(j.a.Title,{style:{color:"white",textAlign:"left",fontSize:"xx-large",paddingLeft:"1.3rem",paddingTop:"10pt"},children:Object(i.jsx)("h8",{children:Object(i.jsx)("u",{children:"Mission"})})}),Object(i.jsxs)(j.a.Text,{style:{paddingTop:"0.5rem",paddingLeft:"1.3rem",paddingRight:"1.3rem",paddingBottom:"0.5rem",color:"white"},children:[Object(i.jsx)("b",{children:Object(i.jsx)("h8",{children:"emPower Through Play"})}),"'s mission is to provide students, educators, and non-educators alike a platform where one can share and access games and resources on diversity and leadership topics. The project is guided by Dr. Emily Johnson's motto that 'learning that's fun is fun', motivating emPower Through Play's focus on games. To support the start of the emPower Through Play project, a UCF Computer Science Senior Design Team created Analilia, a RPG-style fantasy game where players experience the trials of being a women trying to get a leadership position, while learning leadership and diversity skills. Analilia can be accessed on the emPower Through Play website, along with other diversity and leadership games created by educators. The future of the emPower Through Play platform will provide visitors with the following:",Object(i.jsxs)("ul",{style:{paddingLeft:"1.3rem"},children:[Object(i.jsx)("li",{children:"A moderated forum to ask questions about leadership & diversity topics"}),Object(i.jsx)("li",{children:"A Resources Page with links to Videos, Articles, Podcasts, etc on learship and diversity provided by educators"})]})]})]})]}),Object(i.jsxs)("div",{className:"teamContainer",children:[Object(i.jsxs)("div",{className:"sponsorsContainer",children:[Object(i.jsx)("h2",{style:{paddingLeft:"4rem",paddingTop:"1rem",paddingBottom:"0.6rem"},children:Object(i.jsx)("u",{children:"Project Sponsors"})}),Object(i.jsx)("p",{style:{paddingLeft:"4rem",paddingBottom:"1rem"},children:"The emPower Through Play project is lead and funded by the following sponsors."}),Object(i.jsxs)("div",{className:"sponsorsList",children:[Object(i.jsx)(j.a,{style:{width:"40rem",height:"100%",textAlign:"center",border:"none",backgroundColor:"#ffffff00",marginBottom:"2rem"},children:Object(i.jsxs)(j.a.Text,{style:{color:"white",fontSize:"40px"},children:["Dr. Emily Johnson",Object(i.jsx)(j.a.Text,{style:{color:"white",fontSize:"20px"},children:"Associate Professor at UCF of Games and Interactive Media"})]})}),Object(i.jsx)(j.a,{style:{width:"40rem",height:"100%",textAlign:"center",border:"none",backgroundColor:"#ffffff00",marginBottom:"2rem"},children:Object(i.jsxs)(j.a.Text,{style:{color:"white",fontSize:"40px"},children:["Dr. Emily Johnson",Object(i.jsx)(j.a.Text,{style:{color:"white",fontSize:"20px"},children:"Associate Professor at UCF of Games and Interactive Media"})]})}),Object(i.jsx)(j.a,{style:{width:"40rem",height:"100%",textAlign:"center",border:"none",backgroundColor:"#ffffff00",marginBottom:"2rem"},children:Object(i.jsxs)(j.a.Text,{style:{color:"white",fontSize:"40px"},children:["Dr. Emily Johnson",Object(i.jsx)(j.a.Text,{style:{color:"white",fontSize:"20px"},children:"Associate Professor at UCF of Games and Interactive Media"})]})})]})]}),Object(i.jsxs)("div",{className:"seniorDesignContainer",children:[Object(i.jsx)("h2",{style:{paddingLeft:"4rem",paddingTop:"1rem",paddingBottom:"0.6rem"},children:Object(i.jsx)("u",{children:"Senior Design Team"})}),Object(i.jsxs)("p",{style:{paddingLeft:"4rem",paddingBottom:"1rem"},children:["The emPower Through Play website and ",Object(i.jsx)("i",{children:"Analilia"})," videogame was created by Senior Design students at UCF."]}),Object(i.jsxs)("div",{className:"sponsorsList",children:[Object(i.jsx)(j.a,{style:{width:"20rem",height:"100%",textAlign:"center",border:"none",backgroundColor:"#ffffff00",marginBottom:"1rem"},children:Object(i.jsxs)(j.a.Text,{style:{color:"white",fontSize:"30px"},children:["Sabrina Gauch",Object(i.jsx)(j.a.Text,{style:{color:"white",fontSize:"20px"},children:"Project Manager"})]})}),Object(i.jsx)(j.a,{style:{width:"20rem",height:"100%",textAlign:"center",border:"none",backgroundColor:"#ffffff00",marginBottom:"1rem"},children:Object(i.jsxs)(j.a.Text,{style:{color:"white",fontSize:"30px"},children:["Indira Avendano",Object(i.jsx)(j.a.Text,{style:{color:"white",fontSize:"20px"},children:"Project Member"})]})}),Object(i.jsx)(j.a,{style:{width:"20rem",height:"100%",textAlign:"center",border:"none",backgroundColor:"#ffffff00",marginBottom:"1rem"},children:Object(i.jsxs)(j.a.Text,{style:{color:"white",fontSize:"30px"},children:["Carlos Beltran",Object(i.jsx)(j.a.Text,{style:{color:"white",fontSize:"20px"},children:"Project Member"})]})}),Object(i.jsx)(j.a,{style:{width:"20rem",border:"none",height:"100%",textAlign:"center",backgroundColor:"#ffffff00",marginBottom:"1rem"},children:Object(i.jsxs)(j.a.Text,{style:{color:"white",fontSize:"30px"},children:["Vincent Tran",Object(i.jsx)(j.a.Text,{style:{color:"white",fontSize:"20px"},children:"Project Member"})]})}),Object(i.jsx)(j.a,{style:{width:"20rem",height:"100%",textAlign:"center",backgroundColor:"#ffffff00",border:"none",marginBottom:"1rem"},children:Object(i.jsxs)(j.a.Text,{style:{color:"white",fontSize:"30px"},children:["Vincent Quan",Object(i.jsx)(j.a.Text,{style:{color:"white",fontSize:"20px"},children:"Project Member"})]})})]})]})]})]})}}]),n}(r.Component)),R=function(e){Object(E.a)(n,e);var t=Object(M.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"Profile",children:"Account has been verified."})}}]),n}(r.Component);var U=function(){var e=Object(r.useContext)(w).loggedIn;return Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(z,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",component:C,exact:!0}),Object(i.jsx)(l.a,{path:"/Games",component:k}),Object(i.jsx)(l.a,{path:"/About",component:F}),Object(i.jsx)(l.a,{path:"/Verified",component:R}),!1===e&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l.a,{path:"/Login",component:A}),Object(i.jsx)(l.a,{path:"/Register",component:N})]})]})]})})};f.a.defaults.withCredentials=!0;var V=function(){return Object(i.jsx)(v,{children:Object(i.jsx)(U,{})})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(V,{})}),document.getElementById("root"))},80:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.a219f777.chunk.js.map