"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8994],{1062:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var t=s(1085),o=s(1184);const c={},l="complete-sentences-jsdoc",i={id:"eslint-plugin-complete/rules/complete-sentences-jsdoc",title:"complete-sentences-jsdoc",description:"Requires complete sentences for JSDoc comments.",source:"@site/docs/eslint-plugin-complete/rules/complete-sentences-jsdoc.md",sourceDirName:"eslint-plugin-complete/rules",slug:"/eslint-plugin-complete/rules/complete-sentences-jsdoc",permalink:"/eslint-plugin-complete/rules/complete-sentences-jsdoc",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Comments",permalink:"/eslint-plugin-complete/comments"},next:{title:"complete-sentences-line-comments",permalink:"/eslint-plugin-complete/rules/complete-sentences-line-comments"}},r={},a=[{value:"Rule Details",id:"rule-details",level:2},{value:"Options and Defaults",id:"options-and-defaults",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"complete-sentences-jsdoc",children:(0,t.jsx)(n.code,{children:"complete-sentences-jsdoc"})})}),"\n",(0,t.jsx)(n.p,{children:"Requires complete sentences for JSDoc comments."}),"\n",(0,t.jsxs)(n.p,{children:["This rule is similar to the ",(0,t.jsx)(n.a,{href:"https://github.com/gajus/eslint-plugin-jsdoc#require-description-complete-sentence",children:(0,t.jsx)(n.code,{children:"jsdoc/require-description-complete-sentence"})})," rule, but it is smarter in that it will\ngenerate less false positives. (See the cases outlined below.)"]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on why you should use this rule, see the ",(0,t.jsx)(n.a,{href:"/eslint-plugin-complete/comments",children:"comment formatting discussion"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"rule-details",children:"Rule Details"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Bad\n/** sometimes I forget to capitalize my sentences. */\n\n// Good\n/** Sometimes I forget to capitalize my sentences. */\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Bad\n/** Sometimes I forget to put a period on my comments */\n\n// Good\n/** Sometimes I forget to put a period on my comments. */\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Good\n/**\n * - This JSDoc comment has a bullet and that's fine as far as this lint rule is concerned.\n */\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Good\n/**\n * Ending a sentence with a colon is okay:\n *\n * - Because there might be a list coming afterwards.\n */\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Good\n/**\n * URLS are ignored.\n * https://github.com/foo/bar/tree/main/packages/baz/\n */\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Good\n/**\n * Putting code blocks inside a JSDoc comment is okay:\n *\n * ```ts\n * function foo() {}\n * ```\n */\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Good\n/**\n * Asking questions is okay. What is the meaning of life?\n */\n"})}),"\n",(0,t.jsx)(n.p,{children:"The rule tries to be as smart as possible. You can open a GitHub issue if you find a situation where this rule should be smarter."}),"\n",(0,t.jsx)(n.h2,{id:"options-and-defaults",children:"Options and Defaults"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "rules": {\n    "complete/complete-sentences-jsdoc": "error"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"This rule is not configurable."}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../..",children:"How to use this rule"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/main/packages/eslint-plugin-complete/src/rules/complete-sentences-jsdoc.ts",children:"Rule source"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/main/packages/eslint-plugin-complete/tests/rules/complete-sentences-jsdoc.test.ts",children:"Test source"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1184:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(4041);const o={},c=t.createContext(o);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);