(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{5852:function(e,r,t){Promise.resolve().then(t.bind(t,2239))},2239:function(e,r,t){"use strict";t.d(r,{ExperienceCard:function(){return c}});var n=t(7437),i=t(2265),s=t(6070),a=t(6471);let o=(0,a.Z)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),l=(0,a.Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var d=t(2869);function c(e){let{title:r,company:t,date:a,description:c,details:u}=e,[f,m]=(0,i.useState)(!1);return(0,n.jsxs)(s.Zb,{className:"group transition-all duration-300 hover:border-primary",children:[(0,n.jsxs)(s.Ol,{children:[(0,n.jsx)(s.ll,{children:r}),(0,n.jsx)("p",{className:"text-muted-foreground",children:t}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:a})]}),(0,n.jsxs)(s.aY,{children:[(0,n.jsx)("p",{className:"text-muted-foreground mb-4",children:c}),(0,n.jsx)("div",{className:"overflow-hidden transition-all duration-300 ".concat(f?"max-h-[1000px]":"max-h-0"),children:(0,n.jsx)("ul",{className:"list-disc pl-5 mb-4 space-y-2",children:u.map((e,r)=>(0,n.jsx)("li",{children:e},r))})}),(0,n.jsx)(d.z,{variant:"ghost",className:"w-full justify-center",onClick:()=>m(!f),children:f?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"mr-2",children:"Show less"}),(0,n.jsx)(o,{size:20})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"mr-2",children:"Show more"}),(0,n.jsx)(l,{size:20})]})})]})]})}},2869:function(e,r,t){"use strict";t.d(r,{z:function(){return d}});var n=t(7437),i=t(2265),s=t(5293),a=t(535),o=t(4508);let l=(0,a.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,r)=>{let{className:t,variant:i,size:a,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(l({variant:i,size:a,className:t})),ref:r,...c})});d.displayName="Button"},6070:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},Zb:function(){return a},aY:function(){return d},ll:function(){return l}});var n=t(7437),i=t(2265),s=t(4508);let a=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...i})});a.displayName="Card";let o=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...i})});o.displayName="CardHeader";let l=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("font-semibold leading-none tracking-tight",t),...i})});l.displayName="CardTitle",i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...i})}).displayName="CardDescription";let d=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...i})});d.displayName="CardContent",i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...i})}).displayName="CardFooter"},4508:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var n=t(1994),i=t(3335);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,i.m6)((0,n.W)(r))}},5293:function(e,r,t){"use strict";t.d(r,{g7:function(){return a}});var n=t(2265);function i(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}var s=t(7437),a=n.forwardRef((e,r)=>{let{children:t,...i}=e,a=n.Children.toArray(t),l=a.find(d);if(l){let e=l.props.children,t=a.map(r=>r!==l?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,s.jsx)(o,{...i,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,s.jsx)(o,{...i,ref:r,children:t})});a.displayName="Slot";var o=n.forwardRef((e,r)=>{let{children:t,...s}=e;if(n.isValidElement(t)){let e,a;let o=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let i=e[n],s=r[n];/^on[A-Z]/.test(n)?i&&s?t[n]=(...e)=>{s(...e),i(...e)}:i&&(t[n]=i):"style"===n?t[n]={...i,...s}:"className"===n&&(t[n]=[i,s].filter(Boolean).join(" "))}return{...e,...t}}(s,t.props),ref:r?function(...e){return r=>{let t=!1,n=e.map(e=>{let n=i(e,r);return t||"function"!=typeof n||(t=!0),n});if(t)return()=>{for(let r=0;r<n.length;r++){let t=n[r];"function"==typeof t?t():i(e[r],null)}}}}(r,o):o})}return n.Children.count(t)>1?n.Children.only(null):null});o.displayName="SlotClone";var l=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function d(e){return n.isValidElement(e)&&e.type===l}},6471:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(2265);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,n.forwardRef)((e,r)=>{let{color:t="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:d="",children:c,iconNode:u,...f}=e;return(0,n.createElement)("svg",{ref:r,...a,width:i,height:i,stroke:t,strokeWidth:l?24*Number(o)/Number(i):o,className:s("lucide",d),...f},[...u.map(e=>{let[r,t]=e;return(0,n.createElement)(r,t)}),...Array.isArray(c)?c:[c]])}),l=(e,r)=>{let t=(0,n.forwardRef)((t,a)=>{let{className:l,...d}=t;return(0,n.createElement)(o,{ref:a,iconNode:r,className:s("lucide-".concat(i(e)),l),...d})});return t.displayName="".concat(e),t}}},function(e){e.O(0,[851,971,117,744],function(){return e(e.s=5852)}),_N_E=e.O()}]);