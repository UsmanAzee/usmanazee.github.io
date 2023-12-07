"use strict";(self.webpackChunkbinary_crafts=self.webpackChunkbinary_crafts||[]).push([[153],{74153:function(e,i,r){r.r(i);r(72791);var t=r(43504),s=r(45953),n=r(96015),a=r(4565),l=r(94162),o=r(70237),c=r(28012),d=r(69163),u=r(29757),m=r(80184);i.default=function(){return(0,m.jsx)(o.Z,{title:"Register",description:"this is Register page",children:(0,m.jsxs)(s.ZP,{container:!0,spacing:0,justifyContent:"center",sx:{overflowX:"hidden"},children:[(0,m.jsx)(s.ZP,{item:!0,xs:12,sm:12,lg:7,xl:8,sx:{position:"relative","&:before":{content:'""',background:"radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",backgroundSize:"400% 400%",animation:"gradient 15s ease infinite",position:"absolute",height:"100%",width:"100%",opacity:"0.3"}},children:(0,m.jsxs)(n.Z,{position:"relative",children:[(0,m.jsx)(n.Z,{px:3,children:(0,m.jsx)(d.Z,{})}),(0,m.jsx)(n.Z,{alignItems:"center",justifyContent:"center",height:"calc(100vh - 75px)",sx:{display:{xs:"none",lg:"flex"}},children:(0,m.jsx)("img",{src:c.Z,alt:"bg",style:{width:"100%",maxWidth:"500px"}})})]})}),(0,m.jsx)(s.ZP,{item:!0,xs:12,sm:12,lg:5,xl:4,display:"flex",justifyContent:"center",alignItems:"center",children:(0,m.jsx)(n.Z,{p:4,children:(0,m.jsx)(u.Z,{title:"Welcome to Modernize",subtext:(0,m.jsx)(a.Z,{variant:"subtitle1",color:"textSecondary",mb:1,children:"Your Admin Dashboard"}),subtitle:(0,m.jsxs)(l.Z,{direction:"row",spacing:1,mt:3,children:[(0,m.jsx)(a.Z,{color:"textSecondary",variant:"h6",fontWeight:"400",children:"Already have an Account?"}),(0,m.jsx)(a.Z,{component:t.rU,to:"/auth/login",fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:"Sign In"})]})})})})]})})}},29757:function(e,i,r){var t=r(1413),s=r(74165),n=r(15861),a=r(4565),l=r(96015),o=r(81872),c=r(81508),d=r(94162),u=r(17205),m=r(92506),h=r(16871),x=r(81724),p=r(66771),Z=r(74444),f=r(44738),g=r(46742),j=r(80178),b=r(80184);i.Z=function(e){var i=e.title,r=e.subtitle,v=e.subtext,w=(0,Z.Z)(),y=(0,p.Z)(),S=y.signup,U=y.CreateUser,N=(0,h.s0)(),W=x.Ry().shape({UserName:x.Z_().required("UserName is required"),email:x.Z_().email("Email is invalid").required("Email is required"),password:x.Z_().min(6,"Password must be at least 6 characters").required("Password is required"),acceptTerms:x.Xg().oneOf([!0],"Accept Terms & Conditions is required")}),k=(0,m.TA)({initialValues:{UserName:"",email:"",password:"",policy:!0,submit:null,acceptTerms:!0},validationSchema:W,onSubmit:function(){var e=(0,n.Z)((0,s.Z)().mark((function e(i,r){var t,n,a,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.setErrors,n=r.setStatus,a=r.setSubmitting,e.prev=1,e.next=4,S(i.email,i.password);case 4:l=e.sent,console.log("firebase user created: ",l),U(l.user.uid,{username:i.UserName,email:i.email}),N("/auth/login"),w.current&&(n({success:!0}),a(!0)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),w.current&&(n({success:!1}),t({submit:e.t0.message}),a(!1));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(i,r){return e.apply(this,arguments)}}()}),q=k.errors,C=k.touched,P=k.handleSubmit,T=k.isSubmitting,A=k.getFieldProps;return(0,b.jsxs)(b.Fragment,{children:[i?(0,b.jsx)(a.Z,{fontWeight:"700",variant:"h3",mb:1,children:i}):null,v,(0,b.jsx)(j.Z,{title:"Sign up with"}),(0,b.jsx)(l.Z,{mt:3,children:(0,b.jsx)(o.Z,{children:(0,b.jsx)(a.Z,{component:"span",color:"textSecondary",variant:"h6",fontWeight:"400",position:"relative",px:2,children:"or sign up with"})})}),(0,b.jsxs)(l.Z,{children:[q.submit&&(0,b.jsx)(l.Z,{mt:2,children:(0,b.jsx)(c.Z,{severity:"error",children:q.submit})}),(0,b.jsx)(m.Hy,{value:k,children:(0,b.jsxs)(m.l0,{onSubmit:function(e){P(e)},children:[(0,b.jsxs)(d.Z,{mb:3,children:[(0,b.jsx)(f.Z,{htmlFor:"name",children:"Name"}),(0,b.jsx)(g.Z,(0,t.Z)((0,t.Z)({id:"name",variant:"outlined",fullWidth:!0},A("UserName")),{},{error:Boolean(C.UserName&&q.UserName),helperText:C.UserName&&q.UserName})),(0,b.jsx)(f.Z,{htmlFor:"email",children:"Email Adddress"}),(0,b.jsx)(g.Z,(0,t.Z)((0,t.Z)({id:"email",variant:"outlined",fullWidth:!0},A("email")),{},{error:Boolean(C.email&&q.email),helperText:C.email&&q.email})),(0,b.jsx)(f.Z,{htmlFor:"password",children:"Password"}),(0,b.jsx)(g.Z,(0,t.Z)((0,t.Z)({id:"password",variant:"outlined",fullWidth:!0},A("password")),{},{error:Boolean(C.password&&q.password),helperText:C.password&&q.password}))]}),(0,b.jsx)(u.Z,{color:"primary",variant:"contained",size:"large",fullWidth:!0,type:"submit",disabled:T,children:"Sign Up"})]})})]}),r]})}}}]);
//# sourceMappingURL=153.9aaa5b29.chunk.js.map