"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9397],{4245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var s=n(1085),o=n(1184);const i={},l="format-line-comments",r={id:"eslint-plugin-complete/rules/format-line-comments",title:"format-line-comments",description:"Disallows // comments longer than N characters and multi-line comments that can be merged together.",source:"@site/docs/eslint-plugin-complete/rules/format-line-comments.md",sourceDirName:"eslint-plugin-complete/rules",slug:"/eslint-plugin-complete/rules/format-line-comments",permalink:"/eslint-plugin-complete/rules/format-line-comments",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"format-jsdoc-comments",permalink:"/eslint-plugin-complete/rules/format-jsdoc-comments"},next:{title:"jsdoc-code-block-language",permalink:"/eslint-plugin-complete/rules/jsdoc-code-block-language"}},c={},a=[{value:"Rule Details",id:"rule-details",level:2},{value:"Options and Defaults",id:"options-and-defaults",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"format-line-comments",children:(0,s.jsx)(t.code,{children:"format-line-comments"})})}),"\n",(0,s.jsxs)(t.p,{children:["Disallows ",(0,s.jsx)(t.code,{children:"//"})," comments longer than N characters and multi-line comments that can be merged together."]}),"\n",(0,s.jsxs)(t.p,{children:["Like ",(0,s.jsx)(t.a,{href:"https://prettier.io/",children:"Prettier"}),", this rule is designed to auto-format your comments so that you don't have to think about it. Try ",(0,s.jsx)(t.a,{href:"/eslint-plugin-complete#automatic-fixing",children:"configuring your IDE"})," to run ",(0,s.jsx)(t.code,{children:"eslint --fix"})," on save."]}),"\n",(0,s.jsxs)(t.p,{children:["Also see the ",(0,s.jsx)(t.a,{href:"/eslint-plugin-complete/rules/format-jsdoc-comments",children:(0,s.jsx)(t.code,{children:"format-jsdoc-comments"})})," rule."]}),"\n",(0,s.jsxs)(t.p,{children:["For more information on why you should use this rule, see the ",(0,s.jsx)(t.a,{href:"/eslint-plugin-complete/comments",children:"comment formatting discussion"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"rule-details",children:"Rule Details"}),"\n",(0,s.jsx)(t.p,{children:"Lines that are too long will be split to the next line:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// Bad\n// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n// Good\n// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n// labore et dolore magna aliqua.\n"})}),"\n",(0,s.jsx)(t.p,{children:"Lines that are too short will be merged together:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// Bad\n// Lorem ipsum dolor sit amet,\n// consectetur adipiscing elit\n\n// Good\n// Lorem ipsum dolor sit amet, consectetur adipiscing elit\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The rule tries to be as smart as possible. For example, it won't complain about TypeScript ",(0,s.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html",children:"triple slash directives"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'/// <reference path="foo1.d.ts" />\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can open a GitHub issue if you find a situation where this rule should be smarter."}),"\n",(0,s.jsx)(t.h2,{id:"options-and-defaults",children:"Options and Defaults"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "rules": {\n    "complete/format-line-comments": [\n      "error",\n      {\n        "maxLength": 100\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../..",children:"How to use this rule"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/complete-ts/complete/blob/main/packages/eslint-plugin-complete/src/rules/format-line-comments.ts",children:"Rule source"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/complete-ts/complete/blob/main/packages/eslint-plugin-complete/tests/rules/format-line-comments.test.ts",children:"Test source"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1184:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(4041);const o={},i=s.createContext(o);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);