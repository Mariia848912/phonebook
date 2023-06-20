"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[296],{3296:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r=t(5834),a=t(2791),i=t(5705),o=t(6727);function s(){return o.Ry().shape({name:o.Z_().required().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:o.Z_().required().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")})}var l,u,d,m,c,p,h,x,g,f=t(9434),b=t(6916),v=function(n){return n.filter.value},Z=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},w=(0,b.P1)([function(n){return n.contacts.items},v],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),y=t(3634),C=t(168),P=t(7691),T=P.ZP.div(l||(l=(0,C.Z)(["\n  margin: 20px 0;\n  width: 420px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 41px;\n  padding-right: 41px;\n  padding-top: 41px;\n  padding-bottom: 41px;\n  border: 0.4px solid rgba(25, 118, 210, 0.5);\n  border-radius: 4px;\n"]))),k=t(7509),z=t(4281),F=t(184),A=function(){var n=(0,f.v9)(w),e=(0,f.I0)(),t=(0,i.TA)({initialValues:{name:"",number:""},validationSchema:s,onSubmit:function(t,r){var a=t.name,i=t.number,o=n.some((function(n){return n.name.toLowerCase()===a.toLowerCase()})),s=n.some((function(n){return parseInt(i.replace(/[^\d]/g,""))===parseInt(n.number.replace(/[^\d]/g,""))}));return o?(r.resetForm(),window.alert("".concat(a," is already in contacts"))):s?(r.resetForm(),window.alert("".concat(i," is already in contacts"))):(e((0,y.uK)(t)),void r.resetForm())}});return(0,F.jsx)(T,{children:(0,F.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,F.jsx)(k.Z,{fullWidth:!0,size:"small",id:"name",name:"name",style:{marginBottom:"20px"},label:"Name",type:"text",value:t.values.name,onChange:t.handleChange,error:t.touched.name&&Boolean(t.errors.name),helperText:t.touched.name&&t.errors.name}),(0,F.jsx)(k.Z,{fullWidth:!0,size:"small",id:"number",name:"number",label:"Number",type:"tel",style:{marginBottom:"20px"},value:t.values.number,onChange:t.handleChange,error:t.touched.number&&Boolean(t.errors.number),helperText:t.touched.number&&t.errors.number}),(0,F.jsx)(z.Z,{color:"primary",style:{marginTop:"10px",textTransform:"none"},variant:"contained",fullWidth:!0,type:"submit",children:"Add contact"})]})})},I=P.ZP.ul(u||(u=(0,C.Z)(["\n  max-width: 420px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n"]))),B=P.ZP.li(d||(d=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  &:not(:last-child) {\n    margin-bottom: 12px;\n  }\n"]))),_=P.ZP.p(m||(m=(0,C.Z)(["\n  margin-right: auto;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 6px;\n  min-width: 336px;\n  max-width: 336px;\n  background-color: #f5f4fa;\n  border-radius: 4px;\n"]))),L=function(n){var e=n.name,t=n.id,r=n.number,a=(0,f.I0)();return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(B,{children:[(0,F.jsxs)(_,{children:[e,": ",r]}),(0,F.jsx)(z.Z,{variant:"outlined",href:"#outlined-buttons",size:"small",type:"submit",style:{fontSize:14,textTransform:"none"},onClick:function(){return a((0,y.GK)(t))},children:"Delete"})]})})},S=P.ZP.p(c||(c=(0,C.Z)(["\n  width: 420px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n"]))),W=function(n){var e=n.name;return(0,F.jsxs)(S,{children:["The ",e," is empty."]})},N=function(){var n=(0,f.v9)(w);return(0,F.jsx)(F.Fragment,{children:0===n.length?(0,F.jsx)(W,{name:"contact list"}):(0,F.jsx)(I,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,F.jsx)(L,{id:e,name:t,number:r},e)}))})})},q=t(4808),K=P.ZP.div(p||(p=(0,C.Z)(["\n  text-align: center;\n  padding-right: 80px;\n"]))),D=function(){var n=(0,f.I0)(),e=(0,f.v9)(v);return(0,F.jsx)(K,{children:(0,F.jsx)(k.Z,{id:"filter",size:"small",label:"Find contacts by name",variant:"outlined",value:e.value,onChange:function(e){n((0,q.bI)(e.currentTarget.value))},style:{marginBottom:"20px",width:"336px",marginTop:20}})})},E=(t(5462),t(7482)),G=P.ZP.p(h||(h=(0,C.Z)(["\n  margin-top: 20px;\n  width: 420px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n"]))),J=function(){return(0,F.jsx)(G,{children:"Whoops, something went wrong. Try later."})},M=P.ZP.h2(x||(x=(0,C.Z)(["\nmargin-top: 20px;\ntext-align:center\n"]))),R=P.ZP.h3(g||(g=(0,C.Z)(["\nmargin-top: 40px;\ntext-align:center\n\n"]))),V=function(){var n=(0,f.I0)(),e=(0,f.v9)(Z),t=(0,f.v9)(j);return(0,a.useEffect)((function(){n((0,y.yF)())}),[n]),(0,F.jsxs)(r.W,{children:[e&&(0,F.jsx)(E.Z,{}),(0,F.jsx)(M,{children:"Phonebook"}),(0,F.jsx)(A,{}),(0,F.jsx)(R,{children:"Contacts"}),(0,F.jsx)(D,{}),!e&&"get"!==t&&(0,F.jsx)(N,{}),"get"===t&&(0,F.jsx)(J,{})]})}}}]);
//# sourceMappingURL=296.f328c955.chunk.js.map