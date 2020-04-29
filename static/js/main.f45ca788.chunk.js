(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{38:function(e,t,a){e.exports=a(68)},43:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),l=a(2),s=a(3),i=a(5),m=a(4),u=a(13),p=a(14),h=(a(43),a(6)),d=a.n(h),f=a(11),b=a(12),v=a.n(b),E=a(36),y=a(18),C=r.a.createContext(),g=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[t.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){e.setState((function(e){return g(e,t)}))}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),j=C.Consumer,O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onDeleteClick=function(){var e=Object(f.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(j,null,(function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}})," ",r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,a,s),className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"}}),r.a.createElement(u.b,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",margin:"0.5rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c," "),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o," ")):null)}))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,(function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(O,{key:e.id,contact:e})})))}))}}]),a}(n.Component),w=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}," Home ")),r.a.createElement(u.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}," Add ")),r.a.createElement(u.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}," About ")))))))};w.defaultProps={branding:"My App"};var x=w,S=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},A=a(16),T=a(35),D=a.n(T),P=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:D()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"}," ",s))};P.defaultProps={type:"text"};var q=P,M=a(69),_=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onContactChange=function(t){e.setState(Object(A.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(f.a)(d.a.mark((function t(a,n){var r,c,o,l,s,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==o){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==l){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return s={id:Object(M.a)(),name:c,email:o,phone:l},t.next=14,v.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=t.sent,a({type:"ADD_CONTACT",payload:i.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(j,null,(function(t){var l=t.dispatch;return r.a.createElement("div",null,r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name..",value:a,onChange:e.onContactChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",type:"email",placeholder:"Enter Email..",value:n,onChange:e.onContactChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter Phone..",value:c,onChange:e.onContactChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"})))))}))}}]),a}(n.Component),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onContactChange=function(t){e.setState(Object(A.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(f.a)(d.a.mark((function t(a,n){var r,c,o,l,s,i,m;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==o){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==l){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=e.props.match.params.id,t.next=15,v.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=t.sent,a({type:"UPDATE_CONTACT",payload:m.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,v.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(j,null,(function(t){var l=t.dispatch;return r.a.createElement("div",null,r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name..",value:a,onChange:e.onContactChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",type:"email",placeholder:"Enter Email..",value:n,onChange:e.onContactChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter Phone..",value:c,onChange:e.onContactChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Edit Contact",className:"btn btn-light btn-block"})))))}))}}]),a}(n.Component),F=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"}," 404 Page Not Found")),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},B=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:",",title:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,id:t.id})}))}},{key:"render",value:function(){var e=this.state,t=e.id,a=e.title;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),a}(n.Component),J=(a(67),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:k}),r.a.createElement(p.a,{exact:!0,path:"/contact/add",component:_}),r.a.createElement(p.a,{exact:!0,path:"/contact/edit/:id",component:I}),r.a.createElement(p.a,{exact:!0,path:"/about",component:S}),r.a.createElement(p.a,{exact:!0,path:"/test",component:B}),r.a.createElement(p.a,{component:F}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.f45ca788.chunk.js.map