var te=Object.defineProperty;var re=(t,e,r)=>e in t?te(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var h=(t,e,r)=>(re(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();class a extends Error{constructor(r,...n){super(r);h(this,"args");this.args=n}}const P="accepted",F="alpha",I="alpha-num",O="alpha-num-dash",U="between-length",V="between-number",D="digits",q="email",H="ends-with",R="equal-length",C="equal-number",x="greater-equal",B="integer",G="less-equal",j="max-length",z="min-length",W="num-dash",Q="number",X="regex",Z="required",K="starts-with",_="within";function ne(t){return t==="checked"?!0:new a(P)}const se=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,oe=/^[+-]?\d+$/,ie=/^[+-]?(\d+|\d*\.\d*)$/,ae=/^[\p{L}\p{M}]+$/u,ue=/^[\p{L}\p{M}\p{N}]+$/u,ce=/^[\p{L}\p{M}\p{N}_-]+$/u,le=/^[\p{N}_-]+$/u;function he(t){return ae.test(t)||new a(F)}function de(t){return ue.test(t)||new a(I)}function fe(t){return ce.test(t)||new a(O)}class ge{constructor(){h(this,"lang")}set(e){this.lang=e}get(){return typeof this.lang=="object"?this.lang:{}}}const b=new ge,me="checkbox",Ee="radio";function Y(t){return t.replace(/-./g,e=>e[1].toUpperCase())}function k(t){return t instanceof HTMLInputElement?t.type===me||t.type===Ee?t.checked?"checked":"":t.value:t instanceof HTMLTextAreaElement?t.value:t instanceof HTMLSelectElement?Array.from(t.selectedOptions).map(e=>e.value).join(","):""}function pe(t,...e){return t.replace(/\$(\d)/g,(r,n)=>(e==null?void 0:e[n-1])||"")}function w(t,e){let[r,n=""]=t.split(":"),s="";if(Ne(t)){if(!ve(t))throw new Error(`${t}: x-rules require an argument that is defined in the config.xRules object`);if(r=r.substring(2),Te(e==null?void 0:e[n])){const o=e==null?void 0:e[n];s=o.errorMessage||"",n=String(o.value)}else n=String(e==null?void 0:e[n])||""}return{name:r,argsValue:n,args:g(n),customErrorMessage:s}}function g(t){return t?t.split(","):[]}function be(t,...e){const r=b.get();let n=t;return Object.prototype.hasOwnProperty.call(r,t)&&(n=r[t]),pe(n,...e)}function i(t){return{throwError(e){if(t)throw new Error(e)}}}function we(t){t.on("field:error",(e,r,n)=>{n.reverse().forEach(s=>{const o=document.createElement("p");o.classList.add("validator-err"),o.innerHTML=s.message,r.parentNode&&r.parentNode.insertBefore(o,r.nextSibling)})}),t.on("validation:start",e=>{e.querySelectorAll(".validator-err").forEach(r=>{r.remove()})})}function ve(t){return t.includes(":")&&t.split(":").length===2}function Ne(t){return t.startsWith("x-")}function Te(t){return typeof t=="object"&&t!==null&&Object.getPrototypeOf(t)===Object.prototype}const c="An argument must be provided",v="The argument must be a number",N="The argument must be a positive number",ye="The argument must be an integer",_e="Invalid pattern provided";function $e(t,e=""){const[r,n,s]=g(e);i(!r).throwError(c),i(!n||!s).throwError(c);const o=Number(n),u=Number(s);return i(Number.isNaN(o)||Number.isNaN(u)).throwError(v),i(o>u).throwError("min must be less than max"),i(o===u).throwError("min and max must not be equal"),r==="number"?Ae(t,o,u):Se(t,o,u)}function Ae(t,e,r){const n=Number(t);return t!==""&&!Number.isNaN(n)&&n>=e&&n<=r?!0:new a(V,String(e),String(r))}function Se(t,e,r){return i(e<0||r<0).throwError(N),t.length>=e&&t.length<=r?!0:new a(U,String(e),String(r))}function Le(t,e=""){return i(e==="").throwError(c),i($(e)!==!0||+e<1).throwError(ye),new RegExp(`^-?[0-9]{${e}}$`).test(t)?!0:new a(D,e)}function Me(t,e=""){return i(e==="").throwError(c),t.endsWith(e)||new a(H,e)}function Pe(t){return se.test(t)||new a(q)}function Fe(t,e=""){const[r,n]=g(e);i(!r).throwError(c),i(!n).throwError(c);const s=Number(n);return i(Number.isNaN(s)).throwError(v),r==="number"?Ie(t,s):Oe(t,s)}function Ie(t,e){const r=Number(t);return t!==""&&!Number.isNaN(r)&&r>=e?!0:new a(x,String(e))}function Oe(t,e){return i(e<0).throwError(N),t.length>=e?!0:new a(z,String(e))}function $(t){return oe.test(t)||new a(B)}function Ue(t,e=""){const[r,n]=g(e);i(!r).throwError(c),i(!n).throwError(c);const s=Number(n);return i(Number.isNaN(s)).throwError(v),r==="number"?Ve(t,s):De(t,s)}function Ve(t,e){const r=Number(t);return t!==""&&!Number.isNaN(r)&&r<=e?!0:new a(G,String(e))}function De(t,e){return i(e<0).throwError(N),t.length<=e?!0:new a(j,String(e))}function qe(t){return ie.test(t)||new a(Q)}function He(t){return le.test(t)||new a(W)}const Re=t=>{try{return new RegExp(t),!0}catch{return!1}},Ce=t=>{var n,s;const e=((n=t.match(/\/(.+)\/.*/))==null?void 0:n[1])??"",r=((s=t.match(/\/.+\/(.*)/))==null?void 0:s[1])??"";return new RegExp(e,r)};function xe(t,e){return i(!e).throwError(c),i(Re(e)===!1).throwError(_e),Ce(e).test(t)||new a(X)}function A(t){return t.trim().length>0||new a(Z)}function Be(t,e=""){return A(e)===!0?A(t):!0}function Ge(t,e=""){const[r,n]=g(e);i(!r).throwError(c),i(!n).throwError(c);const s=Number(n);return i(Number.isNaN(s)).throwError(v),r==="number"?je(t,s):ze(t,s)}function je(t,e){const r=Number(t);return t!==""&&!Number.isNaN(r)&&r===e?!0:new a(C,String(e))}function ze(t,e){return i(e<0).throwError(N),t.length===e?!0:new a(R,String(e))}function We(t,e=""){return i(e==="").throwError(c),t.startsWith(e)||new a(K,e)}function L(t,e){const[r,...n]=g(e);if(i(!r).throwError(c),r==="array"){const s=g(t);for(const o of s)if(!n.includes(o))return new a(_);return!0}return n.includes(t)||new a(_)}const M=Object.freeze(Object.defineProperty({__proto__:null,accepted:ne,alpha:he,alphaNum:de,alphaNumDash:fe,between:$e,digits:Le,email:Pe,endsWith:Me,in:L,int:$,integer:$,max:Ue,min:Fe,numDash:He,number:qe,regex:xe,required:A,requiredIf:Be,size:Ge,startsWith:We,within:L},Symbol.toStringTag,{value:"Module"}));class Qe{constructor(){h(this,"lang");h(this,"errorsList");this.lang=b.get(),this.errorsList=[]}setError(e,r,n,s=""){let o=this.errorsList.find(l=>l[0].element===e);o||(o=[],this.errorsList.push(o));const d={message:s||be(n.message,...n.args),element:e,rule:r,cause:n.message,args:n.args};o.push(d)}get hasError(){return Object.keys(this.errorsList).length>0}get errors(){return this.errorsList}clearErrors(){this.errorsList=[]}}class Xe{constructor(e={}){h(this,"events");this.events={},Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(this.events[n]=[],this.events[n].push(e[n]))})}on(e,r){this.events[e]||(this.events[e]=[]),this.events[e].push(r)}off(e,r){if(typeof this.events[e]>"u")return;const n=this.events[e],s=n.indexOf(r);s!==-1&&n.splice(s,1)}call(e,...r){typeof this.events[e]<"u"&&this.events[e].forEach(s=>{s(...r)})}clear(){this.events={}}}const y={requiredIf:Ke,between:m,size:m,min:m,max:m,in:m};function Ze(t,e,r,n,s){var u;const o=Y(w(t,s).name);return((u=y[o])==null?void 0:u.call(y,t,e,r,n,s))||t}function m(t,e,r,n,s){const{name:o,argsValue:u}=w(t,s),d=e.indexOf(t),l=e.slice(0,d);let f="string";return l.includes("number")||l.includes("int")||l.includes("integer")?f="number":l.includes("array")&&(f="array"),`${o}:${f},${u}`}function Ke(t,e,r,n,s){const{name:o,args:u}=w(t,s);if(u.length===0)return o;let d="";if(u.length>0){const l=document.getElementById(u[0]);l!==null&&(d=k(l))}return u.splice(0,1,d),`${o}:${u.join(",")}`}const Ye={renderErrors:!0,onFieldChangeValidationDelay:500};class ke{constructor(e,r={}){h(this,"validatorError");h(this,"events");h(this,"options");h(this,"container");if(e===null||!(e instanceof HTMLElement))throw new Error("Invalid container element");this.options=Object.assign(Ye,r),this.validatorError=new Qe,this.events=new Xe(this.options.on),this.container=e,b.set(this.options.lang),this.options.renderErrors&&we(this.events),this.events.on("validation:start",()=>this.validatorError.clearErrors()),this.events.on("validation:failed",()=>this.triggerFieldErrorEvent()),r.onFieldChangeValidation&&this.validateOnFieldChange()}validate(e,r=!0){this.events.call("validation:start",this.container);let n=!0,s="success";return e===void 0&&(e=this.container.querySelectorAll("[data-rules]")),e.length>0&&(n=this.validateFields(Array.from(e)),s=n?"success":"failed"),this.events.call("validation:end",this.container,n),r&&this.events.call(`validation:${s}`,this.container),n}on(e,r){this.events.on(e,r)}off(e,r){this.events.off(e,r)}validateFields(e){var r;for(const n of e){const s=(r=n.getAttribute("data-rules"))==null?void 0:r.split("|");if(s&&s.length>0){const o=k(n),u=this.shouldStopOnFirstFailure(s),d=this.getComputedFieldRules(s,n);for(const l of d){const{name:f,argsValue:ee,customErrorMessage:E}=w(l,this.options.xRules),T=Y(f);if(this.isNullable(T)&&o==="")break;if(T in M)try{const p=M[T](o,ee);if(p instanceof a){let S="";if(E&&(S=typeof E=="function"?E(n):E),this.validatorError.setError(n,f,p,S),u)break}}catch(p){return console.error(new Error(`${f}: ${p.message}`)),!1}}}}return!this.validatorError.hasError}shouldStopOnFirstFailure(e){return e.includes("bail")}isNullable(e){return e==="nullable"}getComputedFieldRules(e,r){return e.map(n=>Ze(n,e,r,this.container,this.options.xRules))}triggerFieldErrorEvent(){this.validatorError.errors.forEach(r=>{r.length!==0&&this.events.call("field:error",this.container,r[0].element,r)})}validateOnFieldChange(){let e;this.container.addEventListener("input",r=>{window.clearTimeout(e);const n=this.options.onFieldChangeValidationDelay;e=window.setTimeout(()=>{const s=r.target;s.matches("[data-rules]")&&this.validate([s],!1)===!1&&this.triggerFieldErrorEvent()},n)})}setLanguage(e){b.set(e)}}const Je={[P]:"Please accept this field",[F]:"Please enter only alphabetic characters",[I]:"Please enter only alpha-numeric characters",[O]:"Please enter only alpha-numeric characters, dashes, and underscores",[U]:"The value must have between $1 and $2 characters",[V]:"Please enter a number between $1 and $2",[D]:"The value must be a $1-digits number",[q]:"Please enter a valid email address",[H]:'The value must ends with "$1"',[R]:"The value must have $1 characters",[C]:"The value must be equal to $1",[x]:"Please enter a number greater than or equal to $1",[B]:"The value must be a valid integer",[G]:"Please enter a number less than or equal to $1",[j]:"Max length is $1",[z]:"Min length is $1",[W]:"Please enter numbers with dashes and underscores",[Q]:"Please enter a valid number",[X]:"The value doesn't match the pattern",[Z]:"This field is required",[K]:'The value must start with "$1"',[_]:"The value is incorrect"},et=Je,J=document.querySelector("form");J.onsubmit=t=>{t.preventDefault(),tt.validate()};const tt=new ke(J,{lang:et,onFieldChangeValidation:!0,onFieldChangeValidationDelay:500,xRules:{zipcode:{value:"/^([0-9]{5})-([0-9]{5})$/",errorMessage:"Invalid zipcode"},password:{value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&*]).{8,}$/,errorMessage:t=>t.value.length<8?"Password must be at least 8 characters":/[A-Z]/.test(t.value)?/[a-z]/.test(t.value)?/[@#$%^&*]/.test(t.value)?"My custom error message":"Password must contain at least one special character":"Password must contain at least one lowercase letter":"Password must contain at least one uppercase letter"}},on:{"validation:success":()=>{alert("Success! Form validated without any errors")},"validation:end":()=>{console.log("validation:end")},"validation:start":()=>{console.log("validation:start")},"validation:failed":()=>{console.log("validation:failed")},"field:error":()=>{console.log("field:error")}}});
