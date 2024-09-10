"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7516],{5302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>r});var i=t(1085),o=t(1184);const c={},s="functions/build",d={id:"complete-node/functions/build",title:"functions/build",description:"Functions",source:"@site/docs/complete-node/functions/build.md",sourceDirName:"complete-node/functions",slug:"/complete-node/functions/build",permalink:"/complete-node/functions/build",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"functions/base64",permalink:"/complete-node/functions/base64"},next:{title:"functions/commandExists",permalink:"/complete-node/functions/commandExists"}},u={},r=[{value:"Functions",id:"functions",level:2},{value:"checkCompiledOutputInRepo()",id:"checkcompiledoutputinrepo",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"functionsbuild",children:"functions/build"})}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.h3,{id:"checkcompiledoutputinrepo",children:"checkCompiledOutputInRepo()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function checkCompiledOutputInRepo(): Promise<void>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Helper function to see if the compiled output that is checked-in to the Git repository is\nup-to-date."}),"\n",(0,i.jsx)(n.p,{children:'Note that compiled output (in e.g. the "dist" directory) is not usually committed to a Git\nrepository, but this is necessary in certain cases, such as when writing a custom GitHub Action\nin TypeScript. In these situations, this function should be run as part of the linting stage in\norder to ensure that the compiled output is always up to date.'}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-node/src/functions/build.ts#L14",children:"functions/build.ts:14"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(4041);const o={},c=i.createContext(o);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);