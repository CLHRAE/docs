"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[764],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1125:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return h},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],c={sidebar_position:3},s="What's the interchain?",l={unversionedId:"introduction/whats-the-interchain",id:"introduction/whats-the-interchain",title:"What's the interchain?",description:"The interchain (or cross-chain) is a phrase used to describe interoperability between separate,",source:"@site/docs/introduction/whats-the-interchain.md",sourceDirName:"introduction",slug:"/introduction/whats-the-interchain",permalink:"/docs/introduction/whats-the-interchain",editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/docs/introduction/whats-the-interchain.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"What's a DAO?",permalink:"/docs/introduction/what-is-dao"},next:{title:"What is Juno? CosmWasm?",permalink:"/docs/introduction/what-is-juno"}},h=[{value:"What&#39;s a blockchain?",id:"whats-a-blockchain",children:[],level:2},{value:"How do you send tokens between blockchains?",id:"how-do-you-send-tokens-between-blockchains",children:[],level:2},{value:"Okay, but how does IBC work?",id:"okay-but-how-does-ibc-work",children:[],level:2}],p={toc:h};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"whats-the-interchain"},"What's the interchain?"),(0,r.kt)("p",null,"The interchain (or cross-chain) is a phrase used to describe interoperability between separate,\nself-sovereign blockchains."),(0,r.kt)("h2",{id:"whats-a-blockchain"},"What's a blockchain?"),(0,r.kt)("p",null,"A blockchain is a database made up of ",(0,r.kt)("em",{parentName:"p"},"blocks")," of data, concatenated together to form a ",(0,r.kt)("em",{parentName:"p"},"chain"),"."),(0,r.kt)("p",null,"Specifically, new data comes in piece by piece in the form of transactions. Each transaction is added to a block. Each blocks is chained to the previous block, creating a chronological ordering of data."),(0,r.kt)("p",null,"While blockchains can store any type of data, the most common use is to produce a ledger: an append-only list of transactions. For example, Bitcoin's blockchain stores all the transactions from one wallet (account) to every other. The balance of each account is a reduce over these transactions."),(0,r.kt)("p",null,"Blockchains use cryptography and distributed computing algorithms to provide immutability, meaning that data entered cannot be changed after the fact. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone."),(0,r.kt)("h2",{id:"how-do-you-send-tokens-between-blockchains"},"How do you send tokens between blockchains?"),(0,r.kt)("p",null,"Short answer: the ",(0,r.kt)("strong",{parentName:"p"},"inter-blockchain"),", or ",(0,r.kt)("strong",{parentName:"p"},"IBC")," protocol."),(0,r.kt)("p",null,"Before IBC, each blockchain was siloed. There was no way to send a token from one\nblockchain to another.\nIBC allows chains to share data with one another, including tokens."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since DAO DAO is IBC-native, your DAO governance tokens can be shared across any chain that supports IBC. Want your governance token to be tradeable ",(0,r.kt)("a",{parentName:"p",href:"https://osmosis.zone/"},"Osmosis"),"? DAO DAO can help with that!"))),(0,r.kt)("h2",{id:"okay-but-how-does-ibc-work"},"Okay, but how does IBC work?"),(0,r.kt)("p",null,"Say Alice wants to send 10 ATOM from her chain to Bob's chain:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Bob and Alice each run a light client of the other, tracking headers, but not\nreplicating the chain\u2019s full state.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Alice bonds 10 ATOM on Alice\u2019s chain.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Alice relays a proof to Bob that she has bonded 10 ATOM.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Bob verifies the proof. if valid, Bob creates 10 ATOM "vouchers" on his\nchain.'))),(0,r.kt)("p",null,"The ATOM on Bob\u2019s chain are not real ATOM. they represent Alice's ATOM, and a\nproof that those ATOM are frozen. But Bob can \u201credeem\u201d her vouchers for ATOM on\nA anytime. So they\u2019re as good as ATOM!"))}d.isMDXComponent=!0}}]);