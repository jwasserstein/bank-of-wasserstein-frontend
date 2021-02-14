(this["webpackJsonpbank-of-wasserstein"]=this["webpackJsonpbank-of-wasserstein"]||[]).push([[0],Array(44).concat([function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(22),s=n.n(r),o=n(2),i=n(6),u=n(12),l=n(5),d=n(13),b=n(7),j=n(8),h=n(10),p=n(9),m=n(4),O=n.n(m),f=n(15),g="LOG_IN",v="LOG_OUT",x="GET_TRANSACTIONS",y="REMOVE_TRANSACTIONS",w="GET_ACCOUNTS",N="REMOVE_ACCOUNTS",k="UPDATE_BALANCE",C="CLOSE_ACCOUNT",T="https://bank-of-wasserstein-api.herokuapp.com/api";function S(e,t,n){return A.apply(this,arguments)}function A(){return(A=Object(f.a)(O.a.mark((function e(t,n,a){var c,r,s,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("get"!==t.toLowerCase()){e.next=10;break}return e.next=3,fetch(T+n,{method:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}});case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.next=12,fetch(T+n,{method:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify(a)});case 12:return s=e.sent,e.next=15,s.json();case 15:return o=e.sent,e.abrupt("return",o);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(44);var P=function(e){var t=e.color,n=e.children,c="Message-"+(t||"red");return Object(a.jsx)("div",{className:"Message "+c,children:n})},I=(n(45),function(e){var t=e.className,n=e.form,c=e.children,r=e.to,s=e.onClick,o=t?"Button ".concat(t):"Button";return n?Object(a.jsx)("button",{type:"submit",className:o+" Button-form",onClick:s,children:c}):Object(a.jsx)(u.b,{className:o,to:r,onClick:s,children:c})}),F=(n(47),function(e){var t=e.fields,n=e.loading,c=e.onSubmit,r=e.onChange,s=t.map((function(e){return Object(a.jsxs)("label",{htmlFor:e.name,className:"Form-label",children:[e.label,":",Object(a.jsx)("input",{type:e.type,className:"Form-field",value:e.value,onChange:r,id:e.name,name:e.name,placeholder:e.label,autoComplete:"off",autoCorrect:"off",autoCapitalize:"none",required:!0})]},e.name)}));return Object(a.jsxs)("form",{className:"Form-form",onSubmit:c,children:[s,Object(a.jsx)(I,{form:!0,className:"Form-btn",children:n?"Loading...":"Submit"})]})}),B=(n(48),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).onChange=function(e){a.setState(Object(o.a)(Object(o.a)({},a.state),{},Object(d.a)({},e.target.name,e.target.value)))},a.onSubmit=function(e){e.preventDefault(),a.setState(Object(o.a)(Object(o.a)({},a.state),{},{loading:!0})),a.props.logIn(e.target.username.value,e.target.password.value).then((function(){a.setState(Object(o.a)(Object(o.a)({},a.state),{},{loading:!1,error:""})),a.props.history.push("/accounts")})).catch((function(e){a.setState(Object(o.a)(Object(o.a)({},a.state),{},{loading:!1,error:e}))}))},a.state={username:"",password:"",loading:!1,error:""},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,c=e.loading,r=e.error,s=[{label:"Username",name:"username",type:"text",value:t},{label:"Password",name:"password",type:"password",value:n}];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"LoginPage-message",children:"Log in to Bank of Wasserstein."},"LoginPage-message"),r&&Object(a.jsx)(P,{color:"red",children:r}),Object(a.jsx)(F,{onSubmit:this.onSubmit,onChange:this.onChange,loading:c,fields:s})]})}}]),n}(c.Component)),D=Object(i.b)(null,{logIn:function(e,t){return function(n){return new Promise(function(){var a=Object(f.a)(O.a.mark((function a(c,r){var s;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,S("post","/auth/signin",{username:e,password:t});case 3:if(!(s=a.sent).error){a.next=6;break}return a.abrupt("return",r(s.error));case 6:if(s.token){a.next=8;break}return a.abrupt("return",r("Error getting token"));case 8:return localStorage.setItem("token",s.token),n(Object(o.a)({type:g},s)),a.abrupt("return",c());case 13:return a.prev=13,a.t0=a.catch(0),a.abrupt("return",r(a.t0.message));case 16:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e,t){return a.apply(this,arguments)}}())}}})(B),R=n(11);function E(e){return function(t){return new Promise(function(){var n=Object(f.a)(O.a.mark((function n(a,c){var r,s;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S("get","/accounts/".concat(e,"/transactions/"),{});case 3:if(!(r=n.sent).error){n.next=6;break}return n.abrupt("return",c(new Error(r.error)));case 6:return s=r.sort((function(e,t){return t.transactionNumber-e.transactionNumber})),t({type:x,accountId:e,transactions:s}),n.abrupt("return",a());case 11:return n.prev=11,n.t0=n.catch(0),n.abrupt("return",c(n.t0));case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,t){return n.apply(this,arguments)}}())}}function M(){return function(e){return new Promise(function(){var t=Object(f.a)(O.a.mark((function t(n,a){var c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S("get","/accounts",{});case 3:if(!(c=t.sent).error){t.next=6;break}return t.abrupt("return",a(new Error(c.error)));case 6:return e({type:w,accounts:c}),t.abrupt("return",n());case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",a(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}())}}n(49);var U=function(e){var t=e.accountBalance;return Object(a.jsxs)("div",{className:"Balance",children:[Object(a.jsx)("strong",{children:"Balance"}),": $",t.toFixed(2)]})},L=(n(50),function(e){var t=e.items,n=e.itemProps,c=e.ItemComponent,r=e.itemName;return Object(a.jsxs)("div",{className:"ItemList-container",children:[t&&t.map((function(e){var t={};return Object.keys(n).forEach((function(a){return t[a]=e[n[a]]})),Object(a.jsx)(c,Object(o.a)({},t))})),!t.length&&Object(a.jsxs)("div",{className:"ItemList-placeholder",children:["You don't have any ",r," yet!"]})]})}),_=n(24),W=n.n(_),z=(n(51),function(e){var t=e.description,n=e.date,c=e.amount,r=e.accountBalance;return Object(a.jsx)("div",{className:"Transaction-transaction",children:Object(a.jsxs)("div",{className:"Transaction-container",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"Transaction-recipient",children:t}),Object(a.jsx)("div",{className:"Transaction-date",children:W()(n).format("MM/DD/YYYY h:mmA")})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"Transaction-amount",children:["$",c.toFixed(2)]}),Object(a.jsxs)("div",{className:"Transaction-balance",children:["$",r.toFixed(2)]})]})]})})}),Y=(n(52),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).closeAccount=a.closeAccount.bind(Object(R.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e,t=this.props.match.params.accountId;(null===(e=this.props.transactionReducer[t])||void 0===e?void 0:e.lastUpdated)||this.props.getTransactions(t)}},{key:"closeAccount",value:function(e){var t=this;e.preventDefault(),this.props.deleteAccount(this.props.match.params.accountId).then((function(){return t.props.history.push("/accounts")}))}},{key:"render",value:function(){var e,t=this.props,n=t.match,c=t.transactionReducer,r=t.accounts,s=n.params.accountId;if(!c[s])return Object(a.jsx)("div",{});var o=c[s].transactions,i=null===(e=r.find((function(e){return e._id===s})))||void 0===e?void 0:e.type;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"TransactionPage-message",children:"Review your transactions."}),Object(a.jsxs)("p",{className:"TransactionPage-account-type",children:[i," Account"]}),Object(a.jsxs)("div",{className:"TransactionPage-btn-container",children:[Object(a.jsx)(I,{to:"/accounts/".concat(s,"/transactions/new"),children:"New Transaction"}),Object(a.jsx)(U,{accountBalance:o[0]?o[0].accountBalance:0})]}),Object(a.jsx)(L,{items:o,ItemComponent:z,itemName:"transactions",itemProps:{date:"date",description:"description",amount:"amount",accountBalance:"accountBalance",key:"transactionNumber"}}),Object(a.jsx)("h2",{className:"TransactionPage-message",children:"Close your account."}),Object(a.jsx)("form",{className:"TransactionPage-close-account-container",children:Object(a.jsxs)(I,{className:"TransactionPage-close-btn",onClick:this.closeAccount,form:!0,children:["Close ",i," Account"]})})]})}}]),n}(c.Component));var G=Object(i.b)((function(e){return{transactionReducer:e.transactionReducer,accounts:e.accountReducer.accounts}}),{getTransactions:E,deleteAccount:function(e){return function(t){return new Promise(function(){var n=Object(f.a)(O.a.mark((function n(a,c){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S("delete","/accounts/".concat(e),{});case 3:if(!(r=n.sent).error){n.next=6;break}return n.abrupt("return",c(new Error(r.error)));case 6:return t({type:C,accountId:e}),n.abrupt("return",a());case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",c(n.t0));case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,t){return n.apply(this,arguments)}}())}}})(Y);var J=function(e){var t=function(t){Object(h.a)(c,t);var n=Object(p.a)(c);function c(){return Object(b.a)(this,c),n.apply(this,arguments)}return Object(j.a)(c,[{key:"componentDidMount",value:function(){this.props.userId||this.props.history.push("/login")}},{key:"componentDidUpdate",value:function(){this.props.userId||this.props.history.push("/login")}},{key:"render",value:function(){return this.props.userId?Object(a.jsx)(e,Object(o.a)({},this.props)):Object(a.jsx)("div",{children:"Loading..."})}}]),c}(c.Component);return Object(i.b)((function(e){return{userId:e.authReducer.userId}}))(t)},q=(n(53),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).onChange=function(e){a.setState(Object(o.a)(Object(o.a)({},a.state),{},Object(d.a)({},e.target.name,e.target.value)))},a.onSubmit=function(e){if(e.preventDefault(),a.setState(Object(o.a)(Object(o.a)({},a.state),{},{loading:!0})),a.state.password!==a.state.repeatPassword)return a.setState(Object(o.a)(Object(o.a)({},a.state),{},{loading:!1,error:"Your passwords don't match"}));a.props.signUp(a.state.username,a.state.email,a.state.password).then((function(){a.setState(Object(o.a)(Object(o.a)({},a.state),{},{loading:!1,error:""})),a.props.history.push("/accounts")})).catch((function(e){a.setState(Object(o.a)(Object(o.a)({},a.state),{},{loading:!1,error:e}))}))},a.state={username:"",email:"",password:"",repeatPassword:"",loading:!1,error:""},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,c=e.password,r=e.repeatPassword,s=e.error,o=e.loading,i=[{label:"Username",name:"username",type:"text",value:t},{label:"Email",name:"email",type:"email",value:n},{label:"Password",name:"password",type:"password",value:c},{label:"Repeat Password",name:"repeatPassword",type:"password",value:r}];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"SignupPage-message",children:"Make an account."}),s&&Object(a.jsx)(P,{children:s}),Object(a.jsx)(F,{onSubmit:this.onSubmit,onChange:this.onChange,fields:i,loading:o})]})}}]),n}(c.Component)),H=Object(i.b)(null,{signUp:function(e,t,n){return function(a){return new Promise(function(){var c=Object(f.a)(O.a.mark((function c(r,s){var i;return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,S("post","/auth/signup",{username:e,email:t,password:n});case 3:if(!(i=c.sent).error){c.next=6;break}return c.abrupt("return",s(i.error));case 6:if(i.token){c.next=8;break}return c.abrupt("return",s("Error getting token"));case 8:return localStorage.setItem("token",i.token),a(Object(o.a)({type:g},i)),c.abrupt("return",r());case 13:return c.prev=13,c.t0=c.catch(0),c.abrupt("return",s(c.t0.message));case 16:case"end":return c.stop()}}),c,null,[[0,13]])})));return function(e,t){return c.apply(this,arguments)}}())}}})(q),V=(n(54),function(e){var t=e.onSubmit,n=e.transactionType,c=e.amount,r=e.onChange,s=e.counterparty,o=e.accountTypeAnotherUser,i=e.accountTypeBetweenAcc,u=e.enabledAccounts,l=e.number,d=e.loading;return Object(a.jsxs)("form",{className:"NewTransactionForm-form",onSubmit:t,children:[["Deposit","Withdrawal","Transfer to another user","Transfer between my accounts"].includes(n)&&[Object(a.jsx)("label",{htmlFor:"amount",children:"Amount:"},"label"),Object(a.jsx)("input",{type:"number",className:"NewTransactionForm-field",name:"amount",id:"amount",placeholder:"Amount",min:"0.01",step:"0.01",value:c,onChange:r,autoComplete:"off",autoCorrect:"off",autoCapitalize:"none",required:!0},"input")],["Transfer to another user"].includes(n)&&[Object(a.jsx)("label",{htmlFor:"counterparty",children:"Counterparty:"},"label-counterparty"),Object(a.jsx)("input",{type:"text",className:"NewTransactionForm-field",name:"counterparty",id:"counterparty",placeholder:"Counterparty",value:s,onChange:r,autoComplete:"off",autoCorrect:"off",autoCapitalize:"none",required:!0},"input-counterparty")],["Transfer to another user"].includes(n)&&[Object(a.jsx)("label",{htmlFor:"accountTypeAnotherUser",children:"Account Type:"},"label-accountType"),Object(a.jsxs)("div",{className:"NewTransactionForm-radio-container",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"Checking",className:"NewTransactionForm-radio",value:"Checking",name:"accountTypeAnotherUser",onChange:r,checked:"Checking"===o}),Object(a.jsx)("label",{htmlFor:"Checking",children:"Checking"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"Savings",className:"NewTransactionForm-radio",value:"Savings",name:"accountTypeAnotherUser",onChange:r,checked:"Savings"===o}),Object(a.jsx)("label",{htmlFor:"Savings",children:"Savings"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"Investing",className:"NewTransactionForm-radio",value:"Investing",name:"accountTypeAnotherUser",onChange:r,checked:"Investing"===o}),Object(a.jsx)("label",{htmlFor:"Investing",children:"Investing"})]})]},"radio-container")],["Transfer between my accounts"].includes(n)&&[Object(a.jsx)("label",{htmlFor:"accountTypeBetweenAcc",children:"Account Type:"},"label-accountType"),Object(a.jsxs)("div",{className:"NewTransactionForm-radio-container",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"Checking",className:"NewTransactionForm-radio",value:"Checking",name:"accountTypeBetweenAcc",onChange:r,checked:"Checking"===i,disabled:!u.includes("Checking")}),Object(a.jsx)("label",{htmlFor:"Checking",className:u.includes("Checking")?"":"NewTransactionForm-disabled",children:"Checking"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"Savings",className:"NewTransactionForm-radio",value:"Savings",name:"accountTypeBetweenAcc",onChange:r,checked:"Savings"===i,disabled:!u.includes("Savings")}),Object(a.jsx)("label",{htmlFor:"Savings",className:u.includes("Savings")?"":"NewTransactionForm-disabled",children:"Savings"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"Investing",className:"NewTransactionForm-radio",value:"Investing",name:"accountTypeBetweenAcc",onChange:r,checked:"Investing"===i,disabled:!u.includes("Investing")}),Object(a.jsx)("label",{htmlFor:"Investing",className:u.includes("Investing")?"":"NewTransactionForm-disabled",children:"Investing"})]})]},"radio-container")],["Generate"].includes(n)&&[Object(a.jsx)("label",{htmlFor:"number",children:"Number:"},"label"),Object(a.jsx)("input",{type:"number",className:"NewTransactionForm-field",name:"number",id:"number",placeholder:"Number",min:"1",step:"1",value:l,onChange:r,autoComplete:"off",autoCorrect:"off",autoCapitalize:"none",required:!0},"input")],Object(a.jsx)(I,{form:!0,className:"NewTransactionForm-form-btn",children:d?"Loading...":"Create Transaction"})]})}),$=(n(55),function(e){var t=e.radios,n=e.name,c=e.onChange,r=t.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:e.label,className:"RadioContainer-radio",value:e.label,name:n,onChange:c,checked:e.checked,disabled:e.disabled}),Object(a.jsx)("label",{htmlFor:e.label,className:e.disabled?"RadioContainer-disabled":"",children:e.label})]},e.label)}));return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"RadioContainer-container",children:r})})}),K=(n(56),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={number:"",amount:"",counterparty:"",transactionType:"Deposit",accountTypeAnotherUser:"",accountTypeBetweenAcc:"",err:"",loading:!1},a.create=a.create.bind(Object(R.a)(a)),a.onChange=a.onChange.bind(Object(R.a)(a)),a.onSubmit=a.onSubmit.bind(Object(R.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.lastUpdated||this.props.getAccounts()}},{key:"create",value:function(e){var t=this,n=this.props.match.params.accountId;return this.setState(Object(o.a)(Object(o.a)({},this.state),{},{loading:!0})),this.props.createTransaction(e,n).then((function(){t.setState(Object(o.a)(Object(o.a)({},t.state),{},{loading:!1,err:""})),t.props.history.push("/accounts/".concat(n))})).catch((function(e){return t.setState(Object(o.a)(Object(o.a)({},t.state),{},{loading:!1,err:e.message}))}))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var n=this.props.match.params.accountId;switch(this.state.transactionType){case"Deposit":this.create({amount:this.state.amount,type:"Deposit",description:"Deposit"});break;case"Withdrawal":this.create({amount:-1*this.state.amount,type:"Withdrawal",description:"Withdrawal"});break;case"Transfer to another user":this.create({amount:-1*this.state.amount,counterparty:this.state.counterparty,accountType:this.state.accountTypeAnotherUser,type:"Transfer",description:"Transfer to "+this.state.counterparty});break;case"Transfer between my accounts":this.create({amount:-1*this.state.amount,counterparty:this.props.username,accountType:this.state.accountTypeBetweenAcc,type:"Transfer",description:"Transfer to my ".concat(this.state.accountTypeBetweenAcc," account")}).then((function(){t.props.getAccounts();var e=t.props.accounts.find((function(e){return e.type===t.state.accountTypeBetweenAcc}))._id;t.props.getTransactions(e)}));break;case"Generate":this.setState(Object(o.a)(Object(o.a)({},this.state),{},{loading:!0})),this.props.generateTransactions(+this.state.number,n).then((function(){t.setState(Object(o.a)(Object(o.a)({},t.state),{},{loading:!1,err:""})),t.props.history.push("/accounts/".concat(n))})).catch((function(e){return t.setState(Object(o.a)(Object(o.a)({},t.state),{},{loading:!1,err:e.message}))}));break;default:this.setState(Object(o.a)(Object(o.a)({},this.state),{},{err:"Couldn't process request"}))}}},{key:"onChange",value:function(e){this.setState(Object(o.a)(Object(o.a)({},this.state),{},Object(d.a)({},e.target.name,e.target.value)))}},{key:"render",value:function(){var e=this.props,t=e.accounts,n=e.match,c=this.state,r=c.transactionType,s=c.err,o=c.amount,i=c.counterparty,u=c.number,l=c.loading,d=c.accountTypeAnotherUser,b=c.accountTypeBetweenAcc,j=[];t.forEach((function(e){e._id!==n.params.accountId&&j.push(e.type)}));var h=[{label:"Deposit",checked:"Deposit"===r},{label:"Withdrawal",checked:"Withdrawal"===r},{label:"Transfer to another user",checked:"Transfer to another user"===r},{label:"Transfer between my accounts",checked:"Transfer between my accounts"===r},{label:"Generate",checked:"Generate"===r}];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"NewTransactionPage-message",children:"Select a transaction type."}),Object(a.jsx)($,{radios:h,name:"transactionType",onChange:this.onChange}),Object(a.jsx)("h2",{className:"NewTransactionPage-message",children:"Enter your transaction details."}),s&&Object(a.jsx)(P,{children:s}),Object(a.jsx)(V,{transactionType:r,amount:o,counterparty:i,number:u,loading:l,accountTypeAnotherUser:d,accountTypeBetweenAcc:b,enabledAccounts:j,onChange:this.onChange,onSubmit:this.onSubmit})]})}}]),n}(c.Component));var X=Object(i.b)((function(e){return{username:e.authReducer.username,accounts:e.accountReducer.accounts,lastUpdated:e.accountReducer.lastUpdated}}),{generateTransactions:function(e,t){return function(n){return new Promise(function(){var a=Object(f.a)(O.a.mark((function a(c,r){var s,o;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,S("post","/accounts/".concat(t,"/transactions/generate/").concat(e),{});case 3:if(!(s=a.sent).error){a.next=6;break}return a.abrupt("return",r(new Error(s.error)));case 6:return o=s.sort((function(e,t){return t.transactionNumber-e.transactionNumber})),n({type:x,accountId:t,transactions:o}),n({type:k,accountId:t,accountBalance:o[0].accountBalance}),a.abrupt("return",c());case 12:return a.prev=12,a.t0=a.catch(0),a.abrupt("return",r(a.t0));case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e,t){return a.apply(this,arguments)}}())}},createTransaction:function(e,t){return function(n){return new Promise(function(){var a=Object(f.a)(O.a.mark((function a(c,r){var s,o;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,S("post","/accounts/".concat(t,"/transactions/"),e);case 3:if(!(s=a.sent).error){a.next=6;break}return a.abrupt("return",r(new Error(s.error)));case 6:return o=s.sort((function(e,t){return t.transactionNumber-e.transactionNumber})),n({type:x,accountId:t,transactions:o}),n({type:k,accountId:t,accountBalance:o[0].accountBalance}),a.abrupt("return",c());case 12:return a.prev=12,a.t0=a.catch(0),a.abrupt("return",r(a.t0));case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e,t){return a.apply(this,arguments)}}())}},getAccounts:M,getTransactions:E})(K),Q=(n(57),function(){return Object(a.jsxs)("div",{className:"Hero-main-container",children:[Object(a.jsxs)("div",{className:"Hero-main-text",children:[Object(a.jsx)("h2",{children:"Banking Reimagined."}),Object(a.jsx)("p",{children:"Start saving for the future of your dreams."})]}),Object(a.jsx)("img",{className:"Hero-coins-growing",src:"https://bank-of-wasserstein.s3.amazonaws.com/coins-growing.jpeg",alt:"coins growing"})]})}),Z=(n(58),function(e){var t=e.title,n=e.description,c=e.img,r=e.alt;return Object(a.jsxs)("div",{className:"Feature",children:[Object(a.jsx)("img",{className:"Feature-image",src:c,alt:r}),Object(a.jsxs)("div",{className:"Feature-text",children:[Object(a.jsx)("h3",{children:t}),Object(a.jsx)("p",{children:n})]})]})}),ee=(n(59),function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("main",{className:"LandingPage-main",children:Object(a.jsx)(Q,{})}),Object(a.jsxs)("section",{className:"LandingPage-secondary-container",children:[Object(a.jsx)(Z,{title:"Make Deposits.",description:"Deposit your spare cash with our easy-to-use system.",img:"https://bank-of-wasserstein.s3.amazonaws.com/piggybank.jpeg",alt:"piggy bank"}),Object(a.jsx)(Z,{title:"Make Withdrawals.",description:"Access your cash when you need it, from the convenience of your laptop.",img:"https://bank-of-wasserstein.s3.amazonaws.com/atm.jpeg",alt:"atm"}),Object(a.jsx)(Z,{title:"Make Transfers.",description:"Transfer money to your friends with the click of a button.",img:"https://bank-of-wasserstein.s3.amazonaws.com/money.jpeg",alt:"money and pen"}),Object(a.jsxs)("div",{className:"LandingPage-join",children:[Object(a.jsx)("h3",{children:"Join Today!"}),Object(a.jsx)(I,{to:"/signup",children:"Sign Up"})]})]},"LandingPage-secondary-container"),Object(a.jsx)("footer",{className:"LandingPage-footer",children:"For demonstration purposes only, not a real bank.  Made by Justin Wasserstein in 2020."})]})}),te=(n(60),function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"AboutPage-container",children:[Object(a.jsx)("h2",{className:"AboutPage-title",children:"About BANK OF WASSERSTEIN"}),Object(a.jsx)("p",{children:"BANK OF WASSERSTEIN is a demonstration banking application made for the purposes of learning React and Redux. It allows users to create accounts, submit transactions, and transfer money to other users.  It was designed in Figma and uses the following technologies:"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Front-end"}),": React and Redux"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Back-end"}),": Node.js and Express"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Database"}),": MongoDB"]})]}),Object(a.jsxs)("p",{children:["Hand-crafted with ",Object(a.jsx)("span",{className:"AboutPage-heart",children:"\u2764"})," in Glastonbury, Connecticut."]})]})})}),ne=(n(61),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={currentPassword:"",newPassword:"",repeatNewPassword:"",loading:!1,message:"",messageColor:""},a.onChange=a.onChange.bind(Object(R.a)(a)),a.onSubmit=a.onSubmit.bind(Object(R.a)(a)),a}return Object(j.a)(n,[{key:"onChange",value:function(e){this.setState(Object(o.a)(Object(o.a)({},this.state),{},Object(d.a)({},e.target.name,e.target.value)))}},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),this.state.newPassword!==this.state.repeatNewPassword)return this.setState(Object(o.a)(Object(o.a)({},this.state),{},{currentPassword:"",newPassword:"",repeatNewPassword:"",message:"New passwords must match",messageColor:"red"}));this.setState(Object(o.a)(Object(o.a)({},this.state),{},{loading:!0})),S("POST","/auth/changePassword",{currentPassword:this.state.currentPassword,newPassword:this.state.newPassword,repeatNewPassword:this.state.repeatNewPassword}).then((function(e){var n="error"in e?e.error:e.message,a="error"in e?"red":"green";t.setState({currentPassword:"",newPassword:"",repeatNewPassword:"",loading:!1,message:n,messageColor:a})}))}},{key:"render",value:function(){var e=this.state,t=e.currentPassword,n=e.newPassword,c=e.repeatNewPassword,r=e.message,s=e.messageColor,o=e.loading,i=this.props,u=i.username,l=i.email,d=i.joinDate,b=[{label:"Current Password",name:"currentPassword",type:"password",value:t},{label:"New Password",name:"newPassword",type:"password",value:n},{label:"Repeat New Password",name:"repeatNewPassword",type:"password",value:c}];return Object(a.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(a.jsx)("h2",{className:"ProfilePage-message",children:"View your profile."}),Object(a.jsxs)("div",{className:"ProfilePage-fields",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"ProfilePage-field-title",children:"Username"}),Object(a.jsx)("p",{className:"ProfilePage-field-value",children:u})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"ProfilePage-field-title",children:"Email"}),Object(a.jsx)("p",{className:"ProfilePage-field-value",children:l})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"ProfilePage-field-title",children:"Join Date"}),Object(a.jsx)("p",{className:"ProfilePage-field-value",children:W()(d).format("MM/DD/YYYY h:mmA")})]})]}),Object(a.jsx)("h2",{className:"ProfilePage-message",children:"Change your password."}),r&&Object(a.jsx)(P,{color:s,children:r}),Object(a.jsx)(F,{onSubmit:this.onSubmit,onChange:this.onChange,fields:b,loading:o})]})}}]),n}(c.Component));var ae=Object(i.b)((function(e){return{userId:e.authReducer.userId,username:e.authReducer.username,email:e.authReducer.email,joinDate:e.authReducer.joinDate}}),null)(ne),ce=(n(62),function(e){var t=e.link,n=e.type,c=e.accountBalance;return Object(a.jsx)(u.b,{className:"Account-account",to:t,children:Object(a.jsxs)("div",{className:"Account-container",children:[Object(a.jsxs)("div",{className:"Account-type",children:[n," Account"]}),Object(a.jsxs)("div",{className:"Account-balance",children:["$",c.toFixed(2)]})]})})}),re=(n(63),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.lastUpdated||this.props.getAccounts()}},{key:"render",value:function(){var e=this.props.accounts,t=e&&e.reduce((function(e,t){return e+t.accountBalance}),0),n=e&&e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{link:"/accounts/".concat(e._id)})}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"AccountsPage-message",children:"Select an account."}),Object(a.jsxs)("div",{className:"AccountsPage-btn-container",children:[Object(a.jsx)(I,{to:"/accounts/new",children:"New Account"}),Object(a.jsx)(U,{accountBalance:t})]}),Object(a.jsx)(L,{items:n,ItemComponent:ce,itemName:"accounts",itemProps:{type:"type",link:"link",accountBalance:"accountBalance",key:"type"}})]})}}]),n}(c.Component));var se=Object(i.b)((function(e){return{accounts:e.accountReducer.accounts,lastUpdated:e.accountReducer.lastUpdated}}),{getAccounts:M})(re),oe=(n(64),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={accountType:"",err:"",loading:!1},a.onChange=a.onChange.bind(Object(R.a)(a)),a.onSubmit=a.onSubmit.bind(Object(R.a)(a)),a}return Object(j.a)(n,[{key:"onChange",value:function(e){this.setState(Object(o.a)(Object(o.a)({},this.state),{},Object(d.a)({},e.target.name,e.target.value)))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.setState(Object(o.a)(Object(o.a)({},this.state),{},{loading:!0})),this.props.createAccount(this.state.accountType).then((function(){t.setState(Object(o.a)(Object(o.a)({},t.state),{},{loading:!1,err:""})),t.props.history.push("/accounts")})).catch((function(e){t.setState(Object(o.a)(Object(o.a)({},t.state),{},{loading:!1,err:e.message}))}))}},{key:"render",value:function(){var e=this.props.accounts,t=this.state,n=t.accountType,c=t.err,r=t.loading,s=e.map((function(e){return e.type})),o=[{label:"Checking",checked:"Checking"===n,disabled:s.includes("Checking")},{label:"Savings",checked:"Savings"===n,disabled:s.includes("Savings")},{label:"Investing",checked:"Investing"===n,disabled:s.includes("Investing")}];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"NewAccountPage-message",children:"Select an account type."}),c&&Object(a.jsx)(P,{children:c}),Object(a.jsxs)("form",{className:"NewAccountForm-form",onSubmit:this.onSubmit,children:[Object(a.jsx)($,{radios:o,name:"accountType",onChange:this.onChange}),Object(a.jsx)(I,{form:!0,className:"NewAccountForm-form-btn",children:r?"Loading...":"Create Account"})]})]})}}]),n}(c.Component));var ie=Object(i.b)((function(e){return{accounts:e.accountReducer.accounts}}),{createAccount:function(e){return function(t){return new Promise(function(){var n=Object(f.a)(O.a.mark((function n(a,c){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S("post","/accounts",{type:e});case 3:if(!(r=n.sent).error){n.next=6;break}return n.abrupt("return",c(new Error(r.error)));case 6:return t({type:w,accounts:r}),n.abrupt("return",a());case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",c(n.t0));case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,t){return n.apply(this,arguments)}}())}}})(oe),ue=(n(65),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={menuActive:""},a.toggleMenu=a.toggleMenu.bind(Object(R.a)(a)),a.closeMenu=a.closeMenu.bind(Object(R.a)(a)),a}return Object(j.a)(n,[{key:"toggleMenu",value:function(){""===this.state.menuActive?this.setState({menuActive:"active"}):this.setState({menuActive:""})}},{key:"closeMenu",value:function(){this.setState({menuActive:""})}},{key:"render",value:function(){var e=this,t=this.props,n=t.username,c=t.logOut,r=this.state.menuActive;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"Navbar-spacer"}),Object(a.jsxs)("header",{className:"Navbar "+r,children:[Object(a.jsxs)("div",{className:"Navbar-burger",onClick:this.toggleMenu,children:[Object(a.jsx)("span",{className:"Navbar-bar"}),Object(a.jsx)("span",{className:"Navbar-bar"}),Object(a.jsx)("span",{className:"Navbar-bar"})]}),Object(a.jsx)(u.b,{onClick:this.closeMenu,to:"/",className:"Navbar-brand",children:Object(a.jsx)("h1",{children:"BANK OF WASSERSTEIN"})}),Object(a.jsxs)("div",{className:"Navbar-links-left",children:[Object(a.jsx)(u.b,{onClick:this.closeMenu,to:"/",className:"Navbar-link",children:"Home"}),Object(a.jsx)(u.b,{onClick:this.closeMenu,to:"/accounts",className:"Navbar-link",children:"Accounts"}),Object(a.jsx)(u.b,{onClick:this.closeMenu,to:"/about",className:"Navbar-link",children:"About"})]}),n?Object(a.jsxs)("div",{className:"Navbar-links-right",children:[Object(a.jsx)(u.b,{onClick:this.closeMenu,to:"/profile",className:"Navbar-link",children:n}),Object(a.jsx)(u.b,{onClick:function(){e.closeMenu(),c()},to:"/login",className:"Navbar-link Navbar-signup-btn",children:"Sign Out"})]}):Object(a.jsxs)("div",{className:"Navbar-links-right",children:[Object(a.jsx)(u.b,{onClick:this.closeMenu,to:"/login",className:"Navbar-link",children:"Log In"}),Object(a.jsx)(u.b,{onClick:this.closeMenu,to:"/signup",className:"Navbar-link Navbar-signup-btn",children:"Sign Up"})]})]})]})}}]),n}(c.Component));var le=Object(i.b)((function(e){return{username:e.authReducer.username}}),{logOut:function(){return function(e){localStorage.removeItem("token"),e({type:v}),e({type:y}),e({type:N})}}})(ue),de=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(le,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/accounts/new",component:J(ie)}),Object(a.jsx)(l.a,{path:"/accounts/:accountId/transactions/new",component:J(X)}),Object(a.jsx)(l.a,{path:"/accounts/:accountId",component:J(G)}),Object(a.jsx)(l.a,{path:"/accounts",component:J(se)}),Object(a.jsx)(l.a,{path:"/profile",component:J(ae)}),Object(a.jsx)(l.a,{path:"/about",component:te}),Object(a.jsx)(l.a,{path:"/signup",component:H}),Object(a.jsx)(l.a,{path:"/login",component:D}),Object(a.jsx)(l.a,{path:"/",component:ee})]})]})},be=n(19),je=n(32),he={userId:"",username:"",email:""};var pe={};var me={accounts:[]};var Oe=Object(be.c)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(o.a)(Object(o.a)({},e),{},{userId:t.id,username:t.username,email:t.email,joinDate:t.joinDate,loggedInAt:Date.now()});case v:return Object(o.a)(Object(o.a)({},e),{},{userId:"",username:"",email:"",joinDate:0,loggedInAt:0});default:return e}},transactionReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(o.a)(Object(o.a)({},e),{},Object(d.a)({},t.accountId,{transactions:t.transactions,lastUpdated:Date.now()}));case y:return{};default:return e}},accountReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(o.a)(Object(o.a)({},e),{},{accounts:t.accounts,lastUpdated:Date.now()});case N:return Object(o.a)(Object(o.a)({},e),{},{accounts:[],lastUpdated:0});case k:var n=e.accounts.map((function(e){return e._id!==t.accountId?e:Object(o.a)(Object(o.a)({},e),{},{accountBalance:t.accountBalance,lastUpdated:Date.now()})}));return Object(o.a)(Object(o.a)({},e),{},{accounts:n});case C:var a=e.accounts.filter((function(e){return e._id!==t.accountId}));return Object(o.a)(Object(o.a)({},e),{},{accounts:a});default:return e}}});var fe=n(33),ge=function(){var e;return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,e=Object(be.a)(je.a),Object(be.e)(Oe,e)}();if(localStorage.getItem("token")){var ve=Object(fe.a)(localStorage.getItem("token"));Date.now()/1e3-ve.iat<3600?ge.dispatch(Object(o.a)({type:g},ve)):localStorage.removeItem("token")}var xe=function(){return Object(a.jsx)(i.a,{store:ge,children:Object(a.jsx)(u.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(de,{})})})})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(66);s.a.render(Object(a.jsx)(xe,{}),document.getElementById("root")),ye()}]),[[67,1,2]]]);
//# sourceMappingURL=main.8b8a5345.chunk.js.map