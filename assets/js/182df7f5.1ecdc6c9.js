"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1912],{5931:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=o(1085),i=o(1184);const r={},s="functions/monorepoUpdate",d={id:"complete-node/functions/monorepoUpdate",title:"functions/monorepoUpdate",description:"Functions",source:"@site/docs/complete-node/functions/monorepoUpdate.md",sourceDirName:"complete-node/functions",slug:"/complete-node/functions/monorepoUpdate",permalink:"/complete-node/functions/monorepoUpdate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"functions/monorepoPublish",permalink:"/complete-node/functions/monorepoPublish"},next:{title:"functions/npm",permalink:"/complete-node/functions/npm"}},c={},l=[{value:"Functions",id:"functions",level:2},{value:"lintMonorepoPackageJSONs()",id:"lintmonorepopackagejsons",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"updatePackageJSONDependenciesMonorepo()",id:"updatepackagejsondependenciesmonorepo",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"updatePackageJSONDependenciesMonorepoChildren()",id:"updatepackagejsondependenciesmonorepochildren",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"functionsmonorepoupdate",children:"functions/monorepoUpdate"})}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.h3,{id:"lintmonorepopackagejsons",children:"lintMonorepoPackageJSONs()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function lintMonorepoPackageJSONs(monorepoRoot?): Promise<void>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Helper function to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Check if all of the dependencies in the monorepo "package.json" files are up to date.'}),"\n",(0,t.jsx)(n.li,{children:'Check if any dependencies in the monorepo root "package.json" are unused.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is intended to be called in a monorepo lint script. It will exit the program with an error\ncode of 1 if discrepancies are found."}),"\n",(0,t.jsx)(n.p,{children:"This function attempts to find the monorepo root directory automatically based on searching\nbackwards from the file of the calling function."}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"monorepoRoot"}),"?"]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Optional. If specified, automatic monorepo root detection will be skipped."})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-node/src/functions/monorepoUpdate.ts#L40",children:"functions/monorepoUpdate.ts:40"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"updatepackagejsondependenciesmonorepo",children:"updatePackageJSONDependenciesMonorepo()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function updatePackageJSONDependenciesMonorepo(monorepoRoot?): Promise<boolean>\n"})}),"\n",(0,t.jsx)(n.p,{children:'Helper function to update the dependencies in all of the monorepo "package.json" files. If there\nare any updates, the package manager used in the project will be automatically invoked to install\nthem.'}),"\n",(0,t.jsx)(n.p,{children:"This function attempts to find the monorepo root directory automatically based on searching\nbackwards from the file of the calling function."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"monorepoRoot"}),"?"]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Optional. If specified, automatic monorepo root detection will be skipped."})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,t.jsx)(n.p,{children:'Whether any "package.json" files were changed.'}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-node/src/functions/monorepoUpdate.ts#L69",children:"functions/monorepoUpdate.ts:69"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"updatepackagejsondependenciesmonorepochildren",children:"updatePackageJSONDependenciesMonorepoChildren()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function updatePackageJSONDependenciesMonorepoChildren(monorepoRoot, dryRun): Promise<boolean>\n"})}),"\n",(0,t.jsx)(n.p,{children:'Helper function to only update the dependencies in the "package.json" files of the sub-packages\nof a monorepo.'}),"\n",(0,t.jsx)(n.p,{children:'This will update both the normal dependencies (to match what is in the monorepo root\n"package.json") and the monorepo dependencies (to be what is listed in the "version" field of the\nrespective "package.json" file).'}),"\n",(0,t.jsxs)(n.p,{children:["If you need to check this in a lint script, then use the ",(0,t.jsx)(n.code,{children:"lintMonorepoPackageJSONs"})," function\ninstead."]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"monorepoRoot"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"The full path to the monorepo root directory."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dryRun"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:'Optional. If true, will not modify the "package.json" files. Defaults to false.'})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,t.jsx)(n.p,{children:'Whether all of the "package.json" files were valid.'}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-node/src/functions/monorepoUpdate.ts#L103",children:"functions/monorepoUpdate.ts:103"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1184:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>d});var t=o(4041);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);