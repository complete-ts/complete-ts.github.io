"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8359],{6189:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var i=s(1085),r=s(1184);const t={},d="functions/utils",c={id:"complete-common/functions/utils",title:"functions/utils",description:"Helper functions that do not belong to any category in particular.",source:"@site/docs/complete-common/functions/utils.md",sourceDirName:"complete-common/functions",slug:"/complete-common/functions/utils",permalink:"/complete-common/functions/utils",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"functions/types",permalink:"/complete-common/functions/types"},next:{title:"types/AddSubtract",permalink:"/complete-common/types/AddSubtract"}},l={},h=[{value:"Functions",id:"functions",level:2},{value:"eRange()",id:"erange",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"iRange()",id:"irange",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"isKeyOf()",id:"iskeyof",level:3},{value:"Type Parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"noop()",id:"noop",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"parseFloatSafe()",id:"parsefloatsafe",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"parseIntSafe()",id:"parseintsafe",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"repeat()",id:"repeat",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"todo()",id:"todo",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Allow Empty Variadic",id:"allow-empty-variadic",level:4},{value:"Defined in",id:"defined-in-7",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"functionsutils",children:"functions/utils"})}),"\n",(0,i.jsx)(n.p,{children:"Helper functions that do not belong to any category in particular."}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.h3,{id:"erange",children:"eRange()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function eRange(\n   start, \n   end?, \nincrement?): Generator<number>\n"})}),"\n",(0,i.jsxs)(n.p,{children:['Helper function to get an iterator of integers with the specified range, inclusive on the lower\nend and exclusive on the high end. (The "e" in the function name stands for exclusive.) Thus,\nthis function works in the same way as the built-in ',(0,i.jsx)(n.code,{children:"range"})," function from Python."]}),"\n",(0,i.jsx)(n.p,{children:"If the end is lower than the start, then an empty range will be returned."}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eRange(2)"})," returns ",(0,i.jsx)(n.code,{children:"[0, 1]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eRange(3)"})," returns ",(0,i.jsx)(n.code,{children:"[0, 1, 2]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eRange(-3)"})," returns ",(0,i.jsx)(n.code,{children:"[0, -1, -2]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eRange(1, 3)"})," returns ",(0,i.jsx)(n.code,{children:"[1, 2]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eRange(2, 5)"})," returns ",(0,i.jsx)(n.code,{children:"[2, 3, 4]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eRange(5, 2)"})," returns ",(0,i.jsx)(n.code,{children:"[]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eRange(3, 3)"})," returns ",(0,i.jsx)(n.code,{children:"[]"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you want an array instead of an iterator, use the spread operator like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const myArray = [...eRange(1, 3)];\n"})}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"start"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"The integer to start at."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"end"}),"?"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"Optional. The integer to end at. If not specified, then the start will be 0 and the first argument will be the end."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"increment"}),"?"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1"})}),(0,i.jsx)(n.td,{children:"Optional. The increment to use. Default is 1."})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Generator"}),"<",(0,i.jsx)(n.code,{children:"number"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-common/src/functions/utils.ts#L41",children:"functions/utils.ts:41"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"irange",children:"iRange()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function iRange(\n   start, \n   end?, \nincrement?): Generator<number>\n"})}),"\n",(0,i.jsx)(n.p,{children:'Helper function to get an array of integers with the specified range, inclusive on both ends.\n(The "i" in the function name stands for inclusive.)'}),"\n",(0,i.jsx)(n.p,{children:"If the end is lower than the start, then an empty range will be returned."}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iRange(2)"})," returns ",(0,i.jsx)(n.code,{children:"[0, 1, 2]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iRange(3)"})," returns ",(0,i.jsx)(n.code,{children:"[0, 1, 2, 3]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iRange(-3)"})," returns ",(0,i.jsx)(n.code,{children:"[0, -1, -2, -3]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iRange(1, 3)"})," returns ",(0,i.jsx)(n.code,{children:"[1, 2, 3]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iRange(2, 5)"})," returns ",(0,i.jsx)(n.code,{children:"[2, 3, 4, 5]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iRange(5, 2)"})," returns ",(0,i.jsx)(n.code,{children:"[]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iRange(3, 3)"})," returns ",(0,i.jsx)(n.code,{children:"[3]"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you want an array instead of an iterator, use the spread operator like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const myArray = [...iRange(1, 3)];\n"})}),"\n",(0,i.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"start"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"The integer to start at."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"end"}),"?"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"Optional. The integer to end at. If not specified, then the start will be 0 and the first argument will be the end."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"increment"}),"?"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1"})}),(0,i.jsx)(n.td,{children:"Optional. The increment to use. Default is 1."})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Generator"}),"<",(0,i.jsx)(n.code,{children:"number"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-common/src/functions/utils.ts#L83",children:"functions/utils.ts:83"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"iskeyof",children:"isKeyOf()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function isKeyOf<T>(key, target): key is keyof T\n"})}),"\n",(0,i.jsxs)(n.p,{children:["From: ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/61526746",children:"https://stackoverflow.com/questions/61526746"})]}),"\n",(0,i.jsx)(n.h4,{id:"type-parameters",children:"Type Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type Parameter"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"T"})," ",(0,i.jsx)(n.em,{children:"extends"})," ",(0,i.jsx)(n.code,{children:"object"})]})})})]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"key"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PropertyKey"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"target"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"T"})})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"key is keyof T"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-common/src/functions/utils.ts#L98",children:"functions/utils.ts:98"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"noop",children:"noop()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function noop(): void\n"})}),"\n",(0,i.jsx)(n.p,{children:"Helper function to perform a no-op. This can be useful in order to make a trailing return valid\nin functions that use the early return pattern."}),"\n",(0,i.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-common/src/functions/utils.ts#L110",children:"functions/utils.ts:110"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"parsefloatsafe",children:"parseFloatSafe()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function parseFloatSafe(string): number | undefined\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is a more reliable version of ",(0,i.jsx)(n.code,{children:"Number.parseFloat"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"undefined"})," is returned instead of ",(0,i.jsx)(n.code,{children:"Number.NaN"}),", which is helpful in conjunction with\nTypeScript type narrowing patterns."]}),"\n",(0,i.jsx)(n.li,{children:'Strings that are a mixture of numbers and letters will result in undefined instead of the part\nof the string that is the number. (e.g. "1a" --\x3e undefined instead of "1a" --\x3e 1)'}),"\n",(0,i.jsx)(n.li,{children:"Non-strings will result in undefined instead of being coerced to a number."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"A string to convert to an integer."})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"number"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-common/src/functions/utils.ts#L123",children:"functions/utils.ts:123"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"parseintsafe",children:"parseIntSafe()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function parseIntSafe(string): number | undefined\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is a more reliable version of ",(0,i.jsx)(n.code,{children:"Number.parseInt"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"undefined"})," is returned instead of ",(0,i.jsx)(n.code,{children:"Number.NaN"}),", which is helpful in conjunction with\nTypeScript type narrowing patterns."]}),"\n",(0,i.jsx)(n.li,{children:'Strings that are a mixture of numbers and letters will result in undefined instead of the part\nof the string that is the number. (e.g. "1a" --\x3e undefined instead of "1a" --\x3e 1)'}),"\n",(0,i.jsx)(n.li,{children:"Non-strings will result in undefined instead of being coerced to a number."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you have to use a radix other than 10, use the vanilla ",(0,i.jsx)(n.code,{children:"Number.parseInt"})," function instead,\nbecause this function ensures that the string contains no letters."]}),"\n",(0,i.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"number"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-common/src/functions/utils.ts#L151",children:"functions/utils.ts:151"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"repeat",children:"repeat()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function repeat(num, func): void\n"})}),"\n",(0,i.jsx)(n.p,{children:"Helper function to repeat code N times. This is faster to type and cleaner than using a for loop."}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"repeat(10, () => {\n  foo();\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"The repeated function is passed the index of the iteration, if needed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'repeat(3, (i) => {\n  console.log(i); // Prints "0", "1", "2"\n});\n'})}),"\n",(0,i.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"num"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func"})}),(0,i.jsxs)(n.td,{children:["(",(0,i.jsx)(n.code,{children:"i"}),") => ",(0,i.jsx)(n.code,{children:"void"})]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-common/src/functions/utils.ts#L186",children:"functions/utils.ts:186"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"todo",children:"todo()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function todo(...args): void\n"})}),"\n",(0,i.jsx)(n.p,{children:'Helper function to signify that the enclosing code block is not yet complete. Using this function\nis similar to writing a "TODO" comment, but it has the benefit of preventing ESLint errors due to\nunused variables or early returns.'}),"\n",(0,i.jsx)(n.p,{children:"When you see this function, it simply means that the programmer intends to add in more code to\nthis spot later."}),"\n",(0,i.jsx)(n.p,{children:"This function is variadic, meaning that you can pass as many arguments as you want. (This is\nuseful as a means to prevent unused variables.)"}),"\n",(0,i.jsx)(n.p,{children:'This function does not actually do anything. (It is an "empty" function.)'}),"\n",(0,i.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["...",(0,i.jsx)(n.code,{children:"args"})]}),(0,i.jsxs)(n.td,{children:["readonly ",(0,i.jsx)(n.code,{children:"unknown"}),"[]"]})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"allow-empty-variadic",children:"Allow Empty Variadic"}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/complete-ts/complete/blob/e4c07d57386e06c666c5f47f1c78d667b6ec4f62/packages/complete-common/src/functions/utils.ts#L208",children:"functions/utils.ts:208"})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1184:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var i=s(4041);const r={},t=i.createContext(r);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);