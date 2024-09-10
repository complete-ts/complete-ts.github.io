"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5292],{2443:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var t=s(1085),l=s(1184);const i={},u="consistent-enum-values",r={id:"eslint-plugin-complete/rules/consistent-enum-values",title:"consistent-enum-values",description:"Requires that all enum values exactly match the enum name, like this:",source:"@site/docs/eslint-plugin-complete/rules/consistent-enum-values.md",sourceDirName:"eslint-plugin-complete/rules",slug:"/eslint-plugin-complete/rules/consistent-enum-values",permalink:"/eslint-plugin-complete/rules/consistent-enum-values",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"complete-sentences-line-comments",permalink:"/eslint-plugin-complete/rules/complete-sentences-line-comments"},next:{title:"consistent-named-tuples",permalink:"/eslint-plugin-complete/rules/consistent-named-tuples"}},o={},a=[{value:"Rule Details",id:"rule-details",level:2},{value:"Justification",id:"justification",level:2},{value:"Options and Defaults",id:"options-and-defaults",level:2},{value:"Resources",id:"resources",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"consistent-enum-values",children:(0,t.jsx)(n.code,{children:"consistent-enum-values"})})}),"\n",(0,t.jsx)(n.p,{children:"Requires that all enum values exactly match the enum name, like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'enum Foo {\n  Value1 = "Value1",\n  Value2 = "Value2",\n  Value3 = "Value3",\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"rule-details",children:"Rule Details"}),"\n",(0,t.jsx)(n.p,{children:"Use this rule to enforce a consistent enum style throughout your codebase."}),"\n",(0,t.jsxs)(n.p,{children:["This rule only enforces the naming style for string enums. Thus, you should use this rule in conjunction with the ",(0,t.jsx)(n.a,{href:"/eslint-plugin-complete/rules/no-number-enums",children:(0,t.jsx)(n.code,{children:"complete/no-number-enums"})})," rule and the ",(0,t.jsx)(n.a,{href:"https://typescript-eslint.io/rules/prefer-enum-initializers/",children:(0,t.jsx)(n.code,{children:"@typescript-eslint/prefer-enum-initializers"})})," rule to prevent all number enums."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// Bad\nenum Foo {\n  Value1 = "VALUE1",\n}\n\n// Good\nenum Foo {\n  Value1 = "Value1",\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"justification",children:"Justification"}),"\n",(0,t.jsx)(n.p,{children:"In pure TypeScript programs, the values of an enum are superfluous: they should not affect the runtime behavior of the program in any way. Thus, the values that you select for your enums are purely be a stylistic concern."}),"\n",(0,t.jsx)(n.p,{children:'Thus, it follows that the simplest and most maintainable solution would be to use the "computed" enum value feature of TypeScript, like this:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"enum Foo {\n  Value1,\n  Value2,\n  Value3,\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Unfortunately, this feature results in numeric values instead of string values. And the TypeScript compiler is not as strict with number enums as it is with string enums. Thus, in order to get the maximum guarantees of safety in our programs, we want to use string enums instead of number enums, and therefore cannot use the computed values feature."}),"\n",(0,t.jsx)(n.p,{children:"The next simplest and easiest-to-maintain solution is to simply copy the values of the the enum exactly. Thus, this lint rule enforces this style."}),"\n",(0,t.jsx)(n.h2,{id:"options-and-defaults",children:"Options and Defaults"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "rules": {\n    "complete/consistent-enum-values": "error"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"This rule is not configurable."}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../..",children:"How to use this rule"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/main/packages/eslint-plugin-complete/src/rules/consistent-enum-values.ts",children:"Rule source"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/main/packages/eslint-plugin-complete/tests/rules/consistent-enum-values.test.ts",children:"Test source"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1184:(e,n,s)=>{s.d(n,{R:()=>u,x:()=>r});var t=s(4041);const l={},i=t.createContext(l);function u(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:u(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);