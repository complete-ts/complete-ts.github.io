"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4827],{9856:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var r=s(1085),t=s(1184);const d={},c="functions/assert",i={id:"complete-common/functions/assert",title:"functions/assert",description:"Helper functions that have to do with asserting.",source:"@site/docs/complete-common/functions/assert.md",sourceDirName:"complete-common/functions",slug:"/complete-common/functions/assert",permalink:"/complete-common/functions/assert",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"functions/array",permalink:"/complete-common/functions/array"},next:{title:"functions/enums",permalink:"/complete-common/functions/enums"}},l={},a=[{value:"Functions",id:"functions",level:2},{value:"assertDefined()",id:"assertdefined",level:3},{value:"Type Parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"assertNotNull()",id:"assertnotnull",level:3},{value:"Type Parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"functionsassert",children:"functions/assert"})}),"\n",(0,r.jsx)(n.p,{children:"Helper functions that have to do with asserting."}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(n.h3,{id:"assertdefined",children:"assertDefined()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function assertDefined<T>(value, ...__namedParameters): asserts value is Exclude<T, undefined>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Helper function to throw an error if the provided value is equal to ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["This is useful to have TypeScript narrow a ",(0,r.jsx)(n.code,{children:"T | undefined"})," value to ",(0,r.jsx)(n.code,{children:"T"})," in a concise way."]}),"\n",(0,r.jsx)(n.h4,{id:"type-parameters",children:"Type Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Type Parameter"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"T"})})})})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"value"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"T"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["...",(0,r.jsx)(n.code,{children:"__namedParameters"})]}),(0,r.jsxs)(n.td,{children:["[",(0,r.jsx)(n.code,{children:"undefined"}),"] ",(0,r.jsx)(n.em,{children:"extends"})," [",(0,r.jsx)(n.code,{children:"T"}),"] ? [",(0,r.jsx)(n.code,{children:"string"}),"] : [",(0,r.jsx)(n.code,{children:'"The assertion is useless because the provided value does not contain undefined."'}),"]"]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"asserts value is Exclude<T, undefined>"})}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-common/src/functions/assert.ts#L12",children:"functions/assert.ts:12"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"assertnotnull",children:"assertNotNull()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function assertNotNull<T>(value, ...__namedParameters): asserts value is Exclude<T, null>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Helper function to throw an error if the provided value is equal to ",(0,r.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["This is useful to have TypeScript narrow a ",(0,r.jsx)(n.code,{children:"T | null"})," value to ",(0,r.jsx)(n.code,{children:"T"})," in a concise way."]}),"\n",(0,r.jsx)(n.h4,{id:"type-parameters-1",children:"Type Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Type Parameter"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"T"})})})})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"value"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"T"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["...",(0,r.jsx)(n.code,{children:"__namedParameters"})]}),(0,r.jsxs)(n.td,{children:["[",(0,r.jsx)(n.code,{children:"null"}),"] ",(0,r.jsx)(n.em,{children:"extends"})," [",(0,r.jsx)(n.code,{children:"T"}),"] ? [",(0,r.jsx)(n.code,{children:"string"}),"] : [",(0,r.jsx)(n.code,{children:'"The assertion is useless because the provided value does not contain null."'}),"]"]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"asserts value is Exclude<T, null>"})}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-common/src/functions/assert.ts#L30",children:"functions/assert.ts:30"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1184:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(4041);const t={},d=r.createContext(t);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);