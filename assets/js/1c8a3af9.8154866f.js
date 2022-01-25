"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8236:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},s="Deploying a smart contract from a DAO",l={unversionedId:"recipes/contract-deployment",id:"recipes/contract-deployment",title:"Deploying a smart contract from a DAO",description:"Have a smart contract, but want your DAO to control it?",source:"@site/docs/recipes/contract-deployment.md",sourceDirName:"recipes",slug:"/recipes/contract-deployment",permalink:"/docs/recipes/contract-deployment",editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/docs/recipes/contract-deployment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Diversify your DAO's treasury",permalink:"/docs/recipes/diversify-treasury"},next:{title:"Updating the config of a DAO",permalink:"/docs/recipes/config-updates"}},p=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Deploying a contract",id:"deploying-a-contract",children:[{value:"Collecting information about the contract to be deployed",id:"collecting-information-about-the-contract-to-be-deployed",children:[],level:3},{value:"Creating the deployment proposal",id:"creating-the-deployment-proposal",children:[],level:3}],level:2},{value:"Deployment",id:"deployment",children:[],level:2}],d={toc:p};function m(e){var t=e.components,c=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-a-smart-contract-from-a-dao"},"Deploying a smart contract from a DAO"),(0,r.kt)("p",null,"Have a smart contract, but want your DAO to control it?"),(0,r.kt)("p",null,"In this recipe, we'll walk through the process of deploying a smart contract via\na proposal in DAO DAO."),(0,r.kt)("p",null,"This example is intended for folks who already have some amount of\nexperience deploying smart contracts in Juno. If you'd like a\nrefresher consider reading the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.junonetwork.io/smart-contracts-and-junod-development/tutorial-erc-20"},"Juno\ndocumentation"),"\non smart contract deployment to learn more."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Smart contracts are typically structured such that their owner (the\nperson who deploys them) controls them. For example, the owner of a\nsmart contract that collects fees for its usage can withdraw those\nfunds. By deploying a smart contract from a DAO we can make sure that\nthe DAO owns the smart contract instead of a potentially untrustworthy\nindividual."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Did you know?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Ethereum Name Service (ENS) is currently controlled by a four-of-seven\nmultisig. This means that at the root of the entire system are seven\npeople, four of whom together have complete control over the\ncontract. As they write in ",(0,r.kt)("a",{parentName:"p",href:"https://ens.domains/about/#about-root"},"their\ndocs"),":"),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"In the long term, we would like the root multisig to be replaced by\nsome form of distributed decision making process, as such systems\nbecome available.")),(0,r.kt)("p",{parentName:"div"},"DAO DAO is one such system."))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Before beginning you'll need to have a DAO deployed on DAO-DAO. For a\nquick introduction to that see the\n",(0,r.kt)("a",{parentName:"p",href:"../quickstart/create-a-dao"},"quickstart")," guide."),(0,r.kt)("h2",{id:"deploying-a-contract"},"Deploying a contract"),(0,r.kt)("p",null,"From the homepage for your DAO go the proposals page and press the\ncreate button to create a new proposal."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7678).Z})),(0,r.kt)("p",null,"Type in the name and description of your proposal and then add a\n\"WASM\" message. We'll be using a WASM message as we'll be interacting\nwith a smart contract."),(0,r.kt)("h3",{id:"collecting-information-about-the-contract-to-be-deployed"},"Collecting information about the contract to be deployed"),(0,r.kt)("p",null,"Next, you'll need to gather some information about the contract you'll\nbe deploying. You'll need to know the code ID for the contract and\nwhat information the contract expects to be instantiated with."),(0,r.kt)("p",null,"At the time of writing the DAO-DAO smart contract is deployed with\ncode id ",(0,r.kt)("inlineCode",{parentName:"p"},"280")," and we can learn what information it expects for\ninstantiation by taking a look at its\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DA0-DA0/dao-contracts/blob/28744e2040fa09c0e3a4eb87905fc68895b01e9a/contracts/cw3-dao/src/msg.rs#L12-L28"},(0,r.kt)("inlineCode",{parentName:"a"},"InstantiateMsg")),"."),(0,r.kt)("h3",{id:"creating-the-deployment-proposal"},"Creating the deployment proposal"),(0,r.kt)("p",null,"In order to deploy the contract DAO-DAO expects a\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/cosmwasm-std/0.16.2/cosmwasm_std/enum.WasmMsg.html"},(0,r.kt)("inlineCode",{parentName:"a"},"WasmMsg")),",\nwhich encapsulates all of ways that one might interact with a smart\ncontract on Juno. We'll be using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Instantiate")," variant so our\nmessage will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "wasm": {\n    "instantiate": {\n      "admin": "juno147huky2j39qccdw4a0j68y8xrpg7wwqfvkm29qfmsecn5nu6rl8qsle7gk",\n      "code_id": 280,\n      "label": "baby dao",\n      "msg": {} // TODO - We\'ll create the message below.\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Here we've set the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," of the contract to the address of the DAO\nwe'll be deploying the contract from. This allows the DAO to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/315284e3601b5e4a15a57b8b9ab5edd785323b9c/x/wasm/internal/types/tx.proto#L51-L52"},"perform\na\nmigration"),"\nof the contract code should it want to. The admin field is optional if\nyou'd prefer to disable migration. You can find the address of your\nDAO in the \"Info\" tab on your DAO's homepage."),(0,r.kt)("p",null,"The message field will vary from contract to contract and based on\nhow you'd like to set up the DAO you're deploying so its particulars\naren't terribly important. Here we'll use a pretty standard issue DAO\nconfiguration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "baby dao",\n  "description": "this is a dao created via a DAO-DAO proposal",\n  "gov_token": {\n    "instantiate_new_cw20": {\n    "code_id": 279,\n    "label": "bdao",\n    "msg": {\n      "name": "baby dao",\n      "symbol": "bdao",\n      "decimals": 6,\n      "initial_balances": [\n          {\n            "address": "juno1m7a7nva00p82xr0tssye052r8sxsxvcy2v5qz6",\n            "amount": "6000000"\n          }\n        ]\n      }\n    }\n  },\n  "threshold": {\n    "absolute_percentage": {\n      "percentage": "0.5"\n    }\n  },\n  "proposal_deposit_amount": "1",\n  "max_voting_period": {\n    "time": 604800\n  }\n}\n')),(0,r.kt)("p",null,"Our final message is our WASM message with the above JSON object\nreplacing the ",(0,r.kt)("inlineCode",{parentName:"p"},"TODO")," line above. With the replacement done you can\ngo ahead and create the proposal."),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"All that is left is to chat with the other members of your DAO and\nvote on it. If it passes you can execute the proposal and your smart\ncontract will be instantiated!"))}m.isMDXComponent=!0},7678:function(e,t,n){t.Z=n.p+"assets/images/create-button-c805bc09a74e3bbd949759ae07eabdd8.jpg"}}]);