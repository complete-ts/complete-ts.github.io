"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9591],{356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var s=t(1085),o=t(1184);const i={},l="format-jsdoc-comments",r={id:"eslint-plugin-complete/rules/format-jsdoc-comments",title:"format-jsdoc-comments",description:"Disallows / comments longer than N characters and multi-line comments that can be merged together.",source:"@site/docs/eslint-plugin-complete/rules/format-jsdoc-comments.md",sourceDirName:"eslint-plugin-complete/rules",slug:"/eslint-plugin-complete/rules/format-jsdoc-comments",permalink:"/eslint-plugin-complete/rules/format-jsdoc-comments",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"eqeqeq-fix",permalink:"/eslint-plugin-complete/rules/eqeqeq-fix"},next:{title:"format-line-comments",permalink:"/eslint-plugin-complete/rules/format-line-comments"}},c={},a=[{value:"Rule Details",id:"rule-details",level:2},{value:"Options and Defaults",id:"options-and-defaults",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"format-jsdoc-comments",children:(0,s.jsx)(n.code,{children:"format-jsdoc-comments"})})}),"\n",(0,s.jsxs)(n.p,{children:["Disallows ",(0,s.jsx)(n.code,{children:"/**"})," comments longer than N characters and multi-line comments that can be merged together."]}),"\n",(0,s.jsxs)(n.p,{children:["Much like ",(0,s.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier"}),", this rule is designed to auto-format your comments so that you don't have to think about it. Try ",(0,s.jsx)(n.a,{href:"/eslint-plugin-complete#automatic-fixing",children:"configuring your IDE"})," to run ",(0,s.jsx)(n.code,{children:"eslint --fix"})," on save."]}),"\n",(0,s.jsxs)(n.p,{children:["Also see the ",(0,s.jsx)(n.a,{href:"/eslint-plugin-complete/rules/format-line-comments",children:(0,s.jsx)(n.code,{children:"format-line-comments"})})," rule."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information on why you should use this rule, see the ",(0,s.jsx)(n.a,{href:"/eslint-plugin-complete/comments",children:"comment formatting discussion"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"rule-details",children:"Rule Details"}),"\n",(0,s.jsx)(n.p,{children:"Lines that are too long will be split to the next line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Bad\n/**\n * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n */\n\n// Good\n/**\n * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n * labore et dolore magna aliqua.\n */\n"})}),"\n",(0,s.jsx)(n.p,{children:"Similarly, lines that are too long in a single-line JSDoc will be converted to a multi-line JSDoc:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Bad\n/** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. */\n\n// Good\n/**\n * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n * labore et dolore magna aliqua.\n */\n"})}),"\n",(0,s.jsx)(n.p,{children:"Lines that are too short will be merged together. And, if possible, JSDoc will be converted to a single-line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Bad\n/**\n * I love cookies.\n * But not cake.\n */\n\n// Good\n/** I love cookies. But not cake. */\n"})}),"\n",(0,s.jsx)(n.p,{children:"The rule tries to be as smart as possible. For example, it won't complain about a bulleted list:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Good\n/**\n * These are my favorite things:\n * - cookies\n * - pie\n * - definitely not cake\n */\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can open a GitHub issue if you find a situation where this rule should be smarter."}),"\n",(0,s.jsxs)(n.p,{children:["Non JSDoc-style comments (i.e. lines that begin with ",(0,s.jsx)(n.code,{children:"/*"})," followed by a space) are ignored, since they are commonly-used to comment-out large blocks of code."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"/* This is a single-line comment. This is a single-line comment. This is a single-line comment. This is a single-line comment. */\n"})}),"\n",(0,s.jsx)(n.h2,{id:"options-and-defaults",children:"Options and Defaults"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "rules": {\n    "complete/format-jsdoc-comments": [\n      "error",\n      {\n        "maxLength": 100\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../..",children:"How to use this rule"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/main/packages/eslint-plugin-complete/src/rules/format-jsdoc-comments.ts",children:"Rule source"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/main/packages/eslint-plugin-complete/tests/rules/format-jsdoc-comments.test.ts",children:"Test source"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(4041);const o={},i=s.createContext(o);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);