"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2757],{6520:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=s(1085),i=s(1184);const r={},c="functions/utils",d={id:"complete-node/functions/utils",title:"functions/utils",description:"Functions",source:"@site/docs/complete-node/functions/utils.md",sourceDirName:"complete-node/functions",slug:"/complete-node/functions/utils",permalink:"/complete-node/functions/utils",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"functions/update",permalink:"/complete-node/functions/update"},next:{title:"types/DependencyType",permalink:"/complete-node/types/DependencyType"}},l={},o=[{value:"Functions",id:"functions",level:2},{value:"diff()",id:"diff",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"fatalError()",id:"fatalerror",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getArgs()",id:"getargs",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"isMain()",id:"ismain",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"functionsutils",children:"functions/utils"})}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.h3,{id:"diff",children:"diff()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function diff(string1, string2): void\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Helper function to print the differences between two strings. Similar to the ",(0,t.jsx)(n.code,{children:"diff"})," Unix program."]}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string1"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string2"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-node/src/functions/utils.ts#L8",children:"functions/utils.ts:8"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"fatalerror",children:"fatalError()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function fatalError(...args): never\n"})}),"\n",(0,t.jsx)(n.p,{children:"Helper function to print out an error message and then exit the program."}),"\n",(0,t.jsxs)(n.p,{children:["All of the arguments will be passed to the ",(0,t.jsx)(n.code,{children:"console.error"})," function."]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["...",(0,t.jsx)(n.code,{children:"args"})]}),(0,t.jsxs)(n.td,{children:["readonly ",(0,t.jsx)(n.code,{children:"unknown"}),"[]"]})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"never"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-node/src/functions/utils.ts#L24",children:"functions/utils.ts:24"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"getargs",children:"getArgs()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function getArgs(): readonly string[]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Helper function to get the command-line arguments passed to the program/script."}),"\n",(0,t.jsxs)(n.p,{children:["This is an alias for: ",(0,t.jsx)(n.code,{children:"process.argv.slice(2)"})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["readonly ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-node/src/functions/utils.ts#L34",children:"functions/utils.ts:34"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ismain",children:"isMain()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function isMain(): boolean\n"})}),"\n",(0,t.jsx)(n.p,{children:"Helper function to see if the current file is is the JavaScript/TypeScript entry point. Returns\nfalse if the current file was imported from somewhere else."}),"\n",(0,t.jsxs)(n.p,{children:["This is similar to the ",(0,t.jsx)(n.code,{children:'__name__ == "__main__"'})," pattern from the Python programming language."]}),"\n",(0,t.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"boolean"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-node/src/functions/utils.ts#L44",children:"functions/utils.ts:44"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1184:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var t=s(4041);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);