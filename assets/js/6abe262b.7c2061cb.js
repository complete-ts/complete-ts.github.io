"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1207],{2921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(1085),c=t(1184);const s={},d="functions/nukeDependencies",r={id:"complete-node/functions/nukeDependencies",title:"functions/nukeDependencies",description:"Functions",source:"@site/docs/complete-node/functions/nukeDependencies.md",sourceDirName:"complete-node/functions",slug:"/complete-node/functions/nukeDependencies",permalink:"/complete-node/functions/nukeDependencies",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"functions/npm",permalink:"/complete-node/functions/npm"},next:{title:"functions/packageJSON",permalink:"/complete-node/functions/packageJSON"}},o={},l=[{value:"Functions",id:"functions",level:2},{value:"nukeDependencies()",id:"nukedependencies",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"functionsnukedependencies",children:"functions/nukeDependencies"})}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.h3,{id:"nukedependencies",children:"nukeDependencies()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function nukeDependencies(packageRoot): void\n"})}),"\n",(0,i.jsx)(n.p,{children:"Helper function to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'delete the "node_modules" folder'}),"\n",(0,i.jsx)(n.li,{children:"delete any package manager lock files that exist"}),"\n",(0,i.jsx)(n.li,{children:"reinstall the dependencies using the detected package manager"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'This will attempt to validate that the directory is correct by looking for a "package.json" file.\nIf not found, this function will print an error message and exit.'}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"packageRoot"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"undefined"})," | ",(0,i.jsx)(n.code,{children:"string"})]}),(0,i.jsx)(n.td,{children:'The path to the directory that contains the "package.json" file and the "node_modules" folder. If undefined is passed, the current working directory will be used.'})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.p,{children:"Whether any dependencies were updated."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-node/src/functions/nukeDependencies.ts#L25",children:"functions/nukeDependencies.ts:25"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var i=t(4041);const c={},s=i.createContext(c);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);