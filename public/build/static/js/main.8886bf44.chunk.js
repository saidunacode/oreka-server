(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{39:function(e,t,n){e.exports=n(68)},44:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(37),o=n.n(l),c=n(5),s=n(6),u=n(7),i=n(11),m=n(10),p=(n(44),n(4)),h=n(1),d=n.n(h),g=n(2),f=n(18),b=n.n(f),E=new(function(){function e(){var t=this;Object(s.a)(this,e),this.creagen=function(){var e=Object(g.a)(d.a.mark((function e(n){var a,r,l,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.month,r=n.year,l=n.userId,o="/agenda-routes/agendacreate/"+l,e.prev=2,e.next=5,t.auth.post(o,{month:a,year:r});case 5:return c=e.sent,e.abrupt("return",c.data);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),this.getagen=function(){var e=Object(g.a)(d.a.mark((function e(n){var a,r,l,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.year,r=n.month,l=n.userId,o="/agenda-routes/agenda?year="+a+"&month="+r,e.prev=2,e.next=5,t.auth.get(o,{userId:l});case 5:return c=e.sent,e.abrupt("return",c.data);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),this.updateagen=function(){var e=Object(g.a)(d.a.mark((function e(n,a,r){var l,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l="/agenda-routes/agendamodify/"+n+"/"+a,e.prev=1,e.next=4,t.auth.patch(l,{agenda:r});case 4:return o=e.sent,e.abrupt("return",o.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,a){return e.apply(this,arguments)}}(),this.handleUpload=function(){var e=Object(g.a)(d.a.mark((function e(n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.auth.post("/agenda-routes/upload",n);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.auth=b.a.create({baseURL:"https://oreka-journal.herokuapp.com",withCredentials:!0})}return Object(u.a)(e,[{key:"signup",value:function(e){var t=e.email,n=e.password,a=e.username,r=e.usersurname,l=e.age,o=e.userImgUrl;return this.auth.post("/auth/signup",{email:t,password:n,username:a,usersurname:r,age:l,userImgUrl:o}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.email,n=e.password;return this.auth.post("/auth/login",{email:t,password:n}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}},{key:"dashboardGet",value:function(e){var t="/agenda-routes/agenda?year="+e.formYear+"&month="+e.formMonth;return this.auth.get(t).then((function(e){return e.agenda}))}},{key:"userprofile",value:function(e){var t=e.userId,n=e.username,a=e.usersurname,r=e.age,l=e.userImgUrl,o="/agenda-routes/usermodify/"+t;return this.auth.put(o,{username:n,usersurname:a,age:r,userImgUrl:l}).then((function(e){return e.message}))}},{key:"dashboardPut",value:function(e){var t=e.userId,n=e.agenda,a="/agenda-routes/agendamodify/"+t;return this.auth.put(a,{agenda:n}).then((function(e){return e.message}))}}]),e}()),v=r.a.createContext(),k=v.Consumer,y=v.Provider,D=function(e){return function(t){Object(i.a)(a,t);var n=Object(m.a)(a);function a(){return Object(s.a)(this,a),n.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(k,null,(function(n){var a=n.login,l=n.signup,o=n.user,c=n.logout,s=n.creagen,u=n.getagen,i=n.isLoggedin;return r.a.createElement(e,Object.assign({login:a,signup:l,user:o,logout:c,creagen:s,getagen:u,isLoggedin:i},t.props))}))}}]),a}(a.Component)},w=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedin:!1,user:null,isLoading:!0},e.signup=function(t){var n=t.email,a=t.password,r=t.username,l=t.usersurname,o=t.age,c=t.userImgUrl;E.signup({email:n,password:a,username:r,usersurname:l,age:o,userImgUrl:c}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(t){var n=t.error;return e.setState({message:n.data.statusMessage})}))},e.login=function(){var t=Object(g.a)(d.a.mark((function t(n){var a,r,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.email,r=n.password,t.prev=1,t.next=4,E.login({email:a,password:r});case 4:l=t.sent,e.setState({isLoggedin:!0,user:l}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e.logout=Object(g.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.logout();case 3:e.setState({isLoggedin:!1,user:null}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))),e.creagen=function(t){var n=t.month,a=t.year,r=t.userId;E.creagen({month:n,year:a,userId:r}).then((function(e){var t=e.agenda;return console.log("I'm back within creagen on AuthProvider",t),t})).catch((function(t){var n=t.error;return e.setState({message:n.data.statusMessage})}))},e.getagen=function(t){console.log("I'm within getagen on AuthProvider");var n=t.year,a=t.month,r=t.userId;E.getagen({month:a,year:n,userId:r}).then((function(e){var t=e.agenda;return console.log("I'm back within getagen on AuthProvider",t),t})).catch((function(t){var n=t.error;return e.setState({message:n.data.statusMessage})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;E.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.isLoggedin,a=e.user,l=this.login,o=this.logout,c=this.signup,s=this.creagen,u=this.getagen;return t?r.a.createElement("div",null,"Loading..."):r.a.createElement(y,{value:{isLoggedin:n,user:a,login:l,logout:o,creagen:s,getagen:u,signup:c}},this.props.children)}}]),n}(a.Component),O=D(function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.user,e.logout),n=e.isLoggedin;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("img",{className:"logo",src:"../images/logo3.png",alt:"logo"}),r.a.createElement(c.b,{to:"/",id:"home-btn"},r.a.createElement("h5",null)),n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:"btn btn-secondary dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Menu"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},r.a.createElement(c.b,{to:"/dashboard"},r.a.createElement("a",{className:"dropdown-item"},"Dashboard")),r.a.createElement(c.b,{to:"/userprofile"},r.a.createElement("a",{className:"dropdown-item"},"User profile")),r.a.createElement("a",{className:"dropdown-item",onClick:t},"Logout")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:"btn btn-secondary dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Menu"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},r.a.createElement(c.b,{to:"/login"},r.a.createElement("a",{className:"dropdown-item"},"Login")),r.a.createElement(c.b,{to:"/signup"},r.a.createElement("a",{className:"dropdown-item"},"Sign Up"))))))}}]),n}(a.Component));var T,j=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"))},x=n(9),S=D(function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",username:"",usersurname:"",age:0},e.handleFormSubmit=function(){var t=Object(g.a)(d.a.mark((function t(n){var a,r,l,o,c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,a=e.state,r=a.email,l=a.password,o=a.username,c=a.usersurname,s=a.age,t.next=5,e.props.signup({email:r,password:l,username:o,usersurname:c,age:s,userImgUrl:T});case 5:e.setState({email:"",password:"",username:"",usersurname:"",age:0}),T="",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("Error while creating the user: ",t.t0);case 12:return t.abrupt("return");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(x.a)({},a,r))},e.handleFileUpload=function(){var e=Object(g.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("userImgUrl",t.target.files[0]),e.prev=2,e.next=5,E.handleUpload(n);case 5:a=e.sent,T=a.secure_url,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.email,a=t.password,l=t.username,o=t.usersurname,s=t.age;return r.a.createElement("div",null,r.a.createElement("h1",{className:"h1-centered"},"Sign Up"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",value:n,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"username",value:l,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Surname:"),r.a.createElement("input",{type:"text",name:"usersurname",value:o,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Age:"),r.a.createElement("input",{type:"text",name:"age",value:s,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Add your photo:"),r.a.createElement("input",{type:"file",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?"),r.a.createElement(c.b,{to:"/login"}," Login"))}}]),n}(a.Component)),A=D(function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.email,r=n.password;e.props.login({email:a,password:r})},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(x.a)({},a,r))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return r.a.createElement("div",{className:"login-div"},r.a.createElement("h1",{className:"h1-centered"},"Login"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",value:t,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Login"})))}}]),n}(a.Component)),C=D(function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome ",this.props.user.username))}}]),n}(a.Component)),I=n(16),U=n(12),F=n(3);var N=function(e){var t=Object(a.useState)([{habitToDoDesc:"",habitDoneTick:!1},{habitToDoDesc:"",habitDoneTick:!1},{habitToDoDesc:"",habitDoneTick:!1},{habitToDoDesc:"",habitDoneTick:!1}]),n=Object(F.a)(t,2),l=n[0],o=n[1];function c(e,t){var n=e.target,a=n.name,r=n.value,c=Object(U.a)(l);c[t]=Object(I.a)(Object(I.a)({},l[t]),{},Object(x.a)({},a,r)),console.log(a,r),"habitDoneTick"===a&&console.log(c),o(c),console.log("DESPUES DE SETHABITS :",l)}function s(e){"Enter"===e.key&&console.log(l)}function u(){return(u=Object(g.a)(d.a.mark((function t(n){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("I'm in handleFormUpdate"),a=e._id,console.log("habits in handleFormUpdate before update: ",l),t.next=6,E.updateagen(a,"habits",l);case 6:r=t.sent,console.log("after update response is: ",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(Object(a.useEffect)((function(){o(e.habits)}),[e.habits]),console.log(e.habits,"DESPUES USEEFFECT AGENDA HABITS"),console.log("I'm in FormCheck children"),console.log("with agenda: ",e),l.length&&l.length<4)for(;e.habits.length<4;)e.habits.push({habitDoneTick:!1,habitToDoDesc:""});return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Habits To Adopt "),r.a.createElement("form",null,l.length&&l.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"habitDoneTick",value:!e.habitDoneTick,onChange:function(e){c(e,t)},checked:e.habitDoneTick}),r.a.createElement("input",{key:t,name:"habitToDoDesc",onChange:function(e){c(e,t)},onKeyDown:s,placeholder:"Habit ".concat(t+1),value:e.habitToDoDesc}))})),r.a.createElement("button",{onClick:function(e){return u.apply(this,arguments)}},r.a.createElement("span",null,"UPDATE HABITS"))))};var M=function(e){var t=Object(a.useState)(!1),n=Object(F.a)(t,2),l=n[0],o=n[1];return r.a.createElement("div",{onClick:function(){o((function(e){return!e}))}},r.a.createElement("p",{style:{textDecoration:l?"line-through":"none"}}),e.text)};var L=function(e){var t=Object(a.useState)(""),n=Object(F.a)(t,2),l=n[0],o=n[1],c=Object(a.useState)([]),s=Object(F.a)(c,2),u=s[0],i=s[1];function m(){}function p(){return(p=Object(g.a)(d.a.mark((function t(n){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("I'm in handleFormUpdate"),a=e._id,console.log("habits in handleFormUpdate before update: ",u),t.next=6,E.updateagen(a,"peopleToMeet",u);case 6:r=t.sent,console.log("after update response is: ",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){i(e.peopleToMeet)}),[e.peopleToMeet]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"People To See")),r.a.createElement("div",{className:"form"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",value:l}),r.a.createElement("button",{onClick:function(){var e={personToMeetDesc:l,personToMeetTick:!0};console.log(e),i((function(t){return[].concat(Object(U.a)(t),[e])})),o("")}},r.a.createElement("span",null,"+"))),r.a.createElement("div",null,u.map((function(e){return r.a.createElement(M,{text:e.personToMeetDesc,onChecked:m})})),r.a.createElement("button",{onClick:function(e){return p.apply(this,arguments)}},r.a.createElement("span",null,"UPDATE PEOPLE"))))};var P=function(e){var t=Object(a.useState)([{skillToDoDesc:"",skillDoneTick:!1},{skillToDoDesc:"",skillDoneTick:!1},{skillToDoDesc:"",skillDoneTick:!1},{skillToDoDesc:"",skillDoneTick:!1}]),n=Object(F.a)(t,2),l=n[0],o=n[1];function c(e,t){var n=e.target,a=n.name,r=n.value,c=Object(U.a)(l);c[t]=Object(I.a)(Object(I.a)({},l[t]),{},Object(x.a)({},a,r)),console.log(a,r),"skillDoneTick"===a&&console.log(c),o(c)}function s(e){"Enter"===e.key&&console.log(l)}function u(){return(u=Object(g.a)(d.a.mark((function t(n){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("I'm in handleFormUpdate"),a=e._id,console.log("habits in handleFormUpdate before update: ",l),t.next=6,E.updateagen(a,"skills",l);case 6:r=t.sent,console.log("after update response is: ",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(Object(a.useEffect)((function(){o(e.skills)}),[e.skills]),console.log("I'm in FormCheck children"),console.log("with agenda: ",e),l.length&&l.length<4)for(;e.skills.length<4;)e.skills.push({skillDoneTick:!1,skillToDoDesc:""});return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Skills To Learn "),r.a.createElement("form",null,l.length&&l.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"skillDoneTick",value:!e.skillDoneTick,onChange:function(e){c(e,t)},checked:e.skillDoneTick}),r.a.createElement("input",{key:t,name:"skillToDoDesc",onChange:function(e){c(e,t)},onKeyDown:s,placeholder:"Skill ".concat(t+1),value:e.skillToDoDesc}))})),r.a.createElement("button",{onClick:function(e){return u.apply(this,arguments)}},r.a.createElement("span",null,"UPDATE SKILLS"))))};var _=function(e){var t=Object(a.useState)(""),n=Object(F.a)(t,2),l=n[0],o=n[1],c=Object(a.useState)([]),s=Object(F.a)(c,2),u=s[0],i=s[1];function m(){}function p(){return(p=Object(g.a)(d.a.mark((function t(n){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("I'm in handleFormUpdate"),a=e._id,console.log("habits in handleFormUpdate before update: ",u),t.next=6,E.updateagen(a,"appointments",u);case 6:r=t.sent,console.log("after update response is: ",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){i(e.appointments)}),[e.appointments]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Appointments")),r.a.createElement("div",{className:"form"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",value:l}),r.a.createElement("button",{onClick:function(){var e={appointmentDesc:l,appointmentTick:!0};console.log(e),i((function(t){return[].concat(Object(U.a)(t),[e])})),o("")}},r.a.createElement("span",null,"+"))),r.a.createElement("div",null,r.a.createElement("ul",null,u.map((function(e){return r.a.createElement(M,{text:e.appointmentDesc,onChecked:m})}))),r.a.createElement("button",{onClick:function(e){return p.apply(this,arguments)}},r.a.createElement("span",null,"UPDATE APPOINTMENTS"))))};var G=function(e){var t=Object(a.useState)(""),n=Object(F.a)(t,2),l=n[0],o=n[1],c=Object(a.useState)([]),s=Object(F.a)(c,2),u=s[0],i=s[1];function m(){}function p(){return(p=Object(g.a)(d.a.mark((function t(n){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("I'm in handleFormUpdate"),a=e._id,console.log("habits in handleFormUpdate before update: ",u),t.next=6,E.updateagen(a,"placesToVisit",u);case 6:r=t.sent,console.log("after update response is: ",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){i(e.placesToVisit)}),[e.placesToVisit]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Places To Visit")),r.a.createElement("div",{className:"form"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",value:l}),r.a.createElement("button",{onClick:function(){var e={placeToVisitDesc:l,placeToVisitTick:!0};console.log(e),i((function(t){return[].concat(Object(U.a)(t),[e])})),o("")}},r.a.createElement("span",null,"+"))),r.a.createElement("div",null,r.a.createElement("ul",null,u.map((function(e){return r.a.createElement(M,{text:e.placeToVisitDesc,onChecked:m})}))),r.a.createElement("button",{onClick:function(e){return p.apply(this,arguments)}},r.a.createElement("span",null,"UPDATE PLACE"))))};var H=function(e){var t=Object(a.useState)(""),n=Object(F.a)(t,2),l=n[0],o=n[1];function c(){return(c=Object(g.a)(d.a.mark((function t(n){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("I'm in handleFormUpdate"),a=e._id,console.log("habits in handleFormUpdate before update: ",l),t.next=6,E.updateagen(a,"reward",l);case 6:r=t.sent,console.log("after update response is: ",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){o(e.reward)}),[e.reward]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Reward")),r.a.createElement("form",null,r.a.createElement("textarea",{name:"reward",onChange:function(e){var t=e.target.value;o(t)},type:"textarea",placeholder:"Write here your reward",onKeyDown:function(e){"Enter"===e.key&&console.log(l)},value:l}),r.a.createElement("button",{onClick:function(e){return c.apply(this,arguments)}},r.a.createElement("span",null,"UPDATE REWARD"))))};var V=function(e){var t=Object(a.useState)(""),n=Object(F.a)(t,2),l=n[0],o=n[1];function c(){return(c=Object(g.a)(d.a.mark((function t(n){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("I'm in handleFormUpdate"),a=e._id,console.log("habits in handleFormUpdate before update: ",l),t.next=6,E.updateagen(a,"insights",l);case 6:r=t.sent,console.log("after update response is: ",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){o(e.insights)}),[e.insights]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Insights")),r.a.createElement("form",null,r.a.createElement("textarea",{name:"insights",onChange:function(e){var t=e.target.value;o(t)},type:"textarea",placeholder:"Write here your Insights",onKeyDown:function(e){"Enter"===e.key&&console.log(l)},value:l}),r.a.createElement("button",{onClick:function(e){return c.apply(this,arguments)}},r.a.createElement("span",null,"UPDATE INSIGHTS"))))};var B=function(e){var t=Object(a.useState)([{incomeDesc:"",incomeAmount:0},{incomeDesc:"",incomeAmount:0},{incomeDesc:"",incomeAmount:0},{incomeDesc:"",incomeAmount:0}]),n=Object(F.a)(t,2),l=n[0],o=n[1];function c(e,t){var n=e.target,a=n.name,r=n.value,c=Object(U.a)(l);c[t]=Object(I.a)(Object(I.a)({},l[t]),{},Object(x.a)({},a,r)),console.log(a,r),o(c),console.log("DESPUES DE SETHABITS :",l)}function s(e){"Enter"===e.key&&console.log(l)}function u(){return(u=Object(g.a)(d.a.mark((function t(n){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("I'm in handleFormUpdate"),a=e._id,console.log("habits in handleFormUpdate before update: ",l),t.next=6,E.updateagen(a,"incomes",l);case 6:r=t.sent,console.log("after update response is: ",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(Object(a.useEffect)((function(){o(e.incomes)}),[e.incomes]),console.log(e.incomes,"DESPUES USEEFFECT AGENDA HABITS"),console.log("I'm in FormCheck children"),console.log("with agenda: ",e),l.length&&l.length<4)for(;e.incomes.length<4;)e.incomes.push({incomeDesc:"",incomeAmount:0});return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Incomes "),r.a.createElement("form",null,l.length&&l.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("input",{key:t,name:"incomeDesc",onChange:function(e){c(e,t)},onKeyDown:s,placeholder:"Income ".concat(t+1),value:e.incomeDesc}),r.a.createElement("input",{key:t,type:"number",name:"incomeAmount",onChange:function(e){c(e,t)},onKeyDown:s,placeholder:"\u20ac",value:e.incomeAmount}))})),r.a.createElement("button",{onClick:function(e){return u.apply(this,arguments)}},r.a.createElement("span",null,"UPDATE INCOMES"))))};var K=function(e){var t=Object(a.useState)([{expenseDesc:"",expenseAmount:0},{expenseDesc:"",expenseAmount:0},{expenseDesc:"",expenseAmount:0},{expenseDesc:"",expenseAmount:0}]),n=Object(F.a)(t,2),l=n[0],o=n[1];function c(e,t){var n=e.target,a=n.name,r=n.value,c=Object(U.a)(l);c[t]=Object(I.a)(Object(I.a)({},l[t]),{},Object(x.a)({},a,r)),console.log(a,r),console.log(c),o(c),console.log("DESPUES DE SETHABITS :",l)}function s(e){"Enter"===e.key&&console.log(l)}function u(){return(u=Object(g.a)(d.a.mark((function t(n){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("I'm in handleFormUpdate"),a=e._id,console.log("habits in handleFormUpdate before update: ",l),t.next=6,E.updateagen(a,"expenses",l);case 6:r=t.sent,console.log("after update response is: ",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(Object(a.useEffect)((function(){o(e.expenses)}),[e.expenses]),console.log(e.expenses,"DESPUES USEEFFECT AGENDA HABITS"),console.log("I'm in FormCheck children"),console.log("with agenda: ",e),l.length&&l.length<10)for(;e.expenses.length<10;)e.expenses.push({expenseDesc:"",expenseAmount:0});return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Expenses "),r.a.createElement("form",null,l.length&&l.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("input",{key:t,name:"expenseDesc",onChange:function(e){c(e,t)},onKeyDown:s,placeholder:"Expense ".concat(t+1),value:e.expenseDesc}),r.a.createElement("input",{key:t,type:"number",name:"expenseAmount",onChange:function(e){c(e,t)},onKeyDown:s,placeholder:"\u20ac",value:e.expenseAmount}))})),r.a.createElement("button",{onClick:function(e){return u.apply(this,arguments)}},r.a.createElement("span",null,"UPDATE EXPENSES"))))},R=D(function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={messageAboutAgenda:"",month:0,year:0,agenda:{userId:{},year:0,month:0,habits:[{habitToDoDesc:"",habitDoneTick:!1}],skills:[{skillToDoDesc:"",skillDoneTick:!1}],appointments:[{appointmentDesc:"",appointmentTick:!1}],peopleToMeet:[{personToMeetDesc:"",personToMeetTick:!1}],placesToVisit:[{placeToVisitDesc:"",placeToVisitTick:!1}],incomes:[{incomeDesc:"",incomeAmount:0}],expenses:[{expenseDesc:"",expenseAmount:0}],reward:"",insights:""}},e.handleFormCreate=function(){var t=Object(g.a)(d.a.mark((function t(n){var a,r,l,o,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,a=e.state,r=a.month,l=a.year,o=e.props.user._id,t.next=6,E.getagen({year:l,month:r,userId:o});case 6:if(!t.sent){t.next=11;break}e.setState({messageAboutAgenda:"This year/month exists already, you can't create it."}),t.next=17;break;case 11:return e.setState({messageAboutAgenda:"Month and year were successfully created."}),t.next=14,E.creagen({month:r,year:l,userId:o});case 14:c=t.sent,console.log("Agenda id: ",c._id),e.setState({month:r,year:l,agenda:{_id:c._id,userId:c.userId,year:c.year,month:c.month,habits:[{habitToDoDesc:"",habitDoneTick:!1}],skills:[{skillToDoDesc:"",skillDoneTick:!1}],appointments:[{appointmentDesc:"",appointmentTick:!1}],peopleToMeet:[{personToMeetDesc:"",personToMeetTick:!1}],placesToVisit:[{placeToVisitDesc:"",placeToVisitTick:!1}],incomes:[{incomeDesc:"",incomeAmount:0}],expenses:[{expenseDesc:"",expenseAmount:0}],reward:"",insights:""}});case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(1),console.log("Error while creating the agenda: ",t.t0),e.setState({messageAboutAgenda:"Error while creating the agenda: ,"+t.t0});case 23:return t.abrupt("return");case 24:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(e){return t.apply(this,arguments)}}(),e.handleFormUpdate=function(){var t=Object(g.a)(d.a.mark((function t(n){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a=e.state.agenda,r=a._id,a.reward="It's been updated succesfully three times.",E.updateagen({agenId:r,agenda:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleFormGet=function(){var t=Object(g.a)(d.a.mark((function t(n){var a,r,l,o,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,a=e.state,r=a.month,l=a.year,o=e.props.user._id,t.next=6,E.getagen({year:l,month:r,userId:o});case 6:c=t.sent,e.setState({agenda:c}),console.log("Finance agenda en Dashboard get: ",c),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log("Error while getting the agenda: ",t.t0),e.setState({messageAboutAgenda:"Error while getting the agenda: ,"+t.t0});case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),e.handleFormGetCurrent=Object(g.a)(d.a.mark((function t(){var n,a,r,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.props.user._id,a=(new Date).getFullYear(),r=(new Date).getMonth()+1,e.setState({month:r}),e.setState({year:a}),t.next=8,E.getagen({year:a,month:r,userId:n});case 8:l=t.sent,e.setState({agenda:l}),console.log("Finance agenda en Dashboard get: ",l),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),console.log("Error while getting the agenda: ",t.t0),e.setState({messageAboutAgenda:"Error while getting the agenda: ,"+t.t0});case 17:case"end":return t.stop()}}),t,null,[[0,13]])}))),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(x.a)({},a,r))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.messageAboutAgenda,n=e.month,a=e.year,l=e.agenda;return 0===n&&0===a&&this.handleFormGetCurrent(),r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("form",{onSubmit:this.handleFormCreate},r.a.createElement("div",{className:"header1"},r.a.createElement("h1",null,"Dashboard"),r.a.createElement("label",null,"MONTH:"),r.a.createElement("br",null),r.a.createElement("input",{className:"number",type:"number",name:"month",value:n,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"YEAR:"),r.a.createElement("input",{className:"number",type:"number",name:"year",value:a,onChange:this.handleChange})),r.a.createElement("div",{className:"header2"},r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"CREATE NEW MONTH"}),r.a.createElement("br",null),r.a.createElement("p",null,t),r.a.createElement("button",{onClick:this.handleFormGet},r.a.createElement("span",null,"GET MONTH"))))),r.a.createElement("section",null,r.a.createElement("div",null,null!==l?r.a.createElement(N,l):null),r.a.createElement("div",null,null!==l?r.a.createElement(P,l):null),r.a.createElement("div",null,null!==l?r.a.createElement(_,l):null),r.a.createElement("div",null,null!==l?r.a.createElement(G,l):null),r.a.createElement("div",null,null!==l?r.a.createElement(L,l):null),r.a.createElement("div",null,null!==l?r.a.createElement(H,l):null),r.a.createElement("div",null,null!==l?r.a.createElement(V,l):null),r.a.createElement("div",null,null!==l?r.a.createElement(B,l):null),r.a.createElement("div",null,null!==l?r.a.createElement(K,l):null)))}}]),n}(a.Component)),W=D(function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.usersurname,l=t.age,o=t.userImgUrl,c=a.props.user._id;E.userprofile({userId:c,username:n,usersurname:r,age:l,userImgUrl:o});a.setState({messageAboutUser:"User updated."}),a.props.user.username=n,a.props.user.usersurname=r,a.props.user.age=l,a.props.user.userImgUrl=o},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(x.a)({},n,r))},a.handleFormGet=function(){var e=Object(g.a)(d.a.mark((function e(t){var n,r,l,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=a.state,r=n.month,l=n.year,o=a.props.user._id,e.next=6,E.getagen({year:l,month:r,userId:o});case 6:c=e.sent,a.setState({agenda:c}),a.setState({monthlyBalance:a.calculateMonthlyBalance(c)}),a.setState({monthlyAccomplishments:a.calculateMonthlyAccomplishments(c)}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("Error while getting the agenda: ",e.t0),a.setState({messageAboutAgenda:"Error while getting the agenda."});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),a.handleFormGetCurrent=Object(g.a)(d.a.mark((function e(){var t,n,r,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.props.user._id,n=(new Date).getFullYear(),r=(new Date).getMonth()+1,a.setState({month:r}),a.setState({year:n}),e.next=8,E.getagen({year:n,month:r,userId:t});case 8:l=e.sent,a.setState({agenda:l}),a.setState({monthlyBalance:a.calculateMonthlyBalance(l)}),a.setState({monthlyAccomplishments:a.calculateMonthlyAccomplishments(l)}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Error while getting the agenda: ",e.t0),a.setState({messageAboutAgenda:"Error while getting the agenda."});case 18:case"end":return e.stop()}}),e,null,[[0,14]])}))),a.state={messageAboutUser:"",messageAboutAgenda:"",username:a.props.user.username,usersurname:a.props.user.usersurname,age:a.props.user.age,userImgUrl:a.props.user.userImgUrl,month:0,year:0,monthlyBalance:0,monthlyAccomplishments:0,agenda:{userId:{},year:0,month:0,habits:[{habitToDoDesc:"",habitDoneTick:!1}],skills:[{skillToDoDesc:"",skillDoneTick:!1}],appointments:[{appointmentDesc:"",appointmentTick:!1}],peopleToMeet:[{personToMeetDesc:"",personToMeetTick:!1}],placesToVisit:[{placeToVisitDesc:"",placeToVisitTick:!1}],incomes:[{incomeDesc:"",incomeAmount:0}],expenses:[{expenseDesc:"",expenseAmount:0}],reward:"",insights:""}},a}return Object(u.a)(n,[{key:"calculateMonthlyBalance",value:function(e){var t=0;if(void 0!=e.incomes)for(var n=0;n<e.incomes.length;n++)t+=e.incomes[n].incomeAmount;var a=0;if(void 0!=e.expenses)for(var r=0;r<e.expenses.length;r++)a+=e.expenses[r].expenseAmount;return Math.round(100*(t-a))/100}},{key:"calculateMonthlyAccomplishments",value:function(e){var t=0,n=0;if(void 0!=e.habits[0])for(var a=0;a<e.habits.length;a++)e.habits[a].habitDoneTick&&t++,n++;if(void 0!=e.skills[0])for(var r=0;r<e.skills.length;r++)e.skills[r].skillDoneTick&&t++,n++;var l=100*t/n;return Math.round(100*l)/100}},{key:"render",value:function(){var e=this,t=this.state,n=t.messageAboutUser,a=t.messageAboutAgenda,l=t.username,o=t.usersurname,c=t.age,s=t.userImgUrl,u=t.month,i=t.year,m=t.monthlyBalance,p=t.monthlyAccomplishments;return 0===u&&0===i&&this.handleFormGetCurrent(),r.a.createElement("div",{className:"UserProfile"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("br",null),r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"username",value:l,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Surname:"),r.a.createElement("input",{type:"text",name:"usersurname",value:o,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Age:"),r.a.createElement("input",{type:"number",name:"age",value:c,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:s,alt:"user photo",width:"150",height:"200"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"UPDATE USER'S INFO"}),r.a.createElement("p",null,n),r.a.createElement("p",null," -------------------------------------- "),r.a.createElement("label",null,"MONTH:"),r.a.createElement("input",{type:"number",name:"month",value:u,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"YEAR:"),r.a.createElement("input",{type:"number",name:"year",value:i,onChange:this.handleChange}),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("h5",null,"Financial balance and goals accomplished"),r.a.createElement("br",null),r.a.createElement("p",null,"Financial balance: ",m),r.a.createElement("p",null,"Goals accomplished: ",p,"%"),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleFormGet},r.a.createElement("span",null,"GET MONTH")),r.a.createElement("p",null,a))}}]),n}(a.Component)),Y=n(23),J=D((function(e){var t=e.component,n=e.isLoggedin,a=Object(Y.a)(e,["component","isLoggedin"]);return console.log(n),r.a.createElement(p.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(p.a,{to:"/dashboard"}):r.a.createElement(t,e)}}))})),X=D((function(e){var t=e.component,n=e.isLoggedin,a=Object(Y.a)(e,["component","isLoggedin"]);return r.a.createElement(p.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))})),q=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement("div",{className:"container"},r.a.createElement(O,null),r.a.createElement(p.d,null,r.a.createElement(J,{exact:!0,path:"/",component:j}),r.a.createElement(J,{exact:!0,path:"/signup",component:S}),r.a.createElement(J,{exact:!0,path:"/login",component:A}),r.a.createElement(X,{exact:!0,path:"/private",component:C}),r.a.createElement(X,{exact:!0,path:"/dashboard",component:R}),r.a.createElement(X,{exact:!0,path:"/userprofile",component:W}))))}}]),n}(a.Component);o.a.render(r.a.createElement(c.a,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8886bf44.chunk.js.map