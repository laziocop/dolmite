;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="a30a6de5-31ef-72cd-08cb-7b283b05d39d")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,205443,e=>{"use strict";var t=e.i(568643);e.s(["useAccount",()=>t.useConnection])},644649,e=>{"use strict";var t=e.i(829804),n=e.i(368994),o=e.i(374638);e.s(["useConnectionEffect",0,function(e={}){let{onConnect:r,onDisconnect:i}=e,a=(0,o.useConfig)(e);(0,n.useEffect)(()=>(0,t.watchConnection)(a,{onChange(e,t){if(("reconnecting"===t.status||"connecting"===t.status&&void 0===t.address)&&"connected"===e.status){let{address:n,addresses:o,chain:i,chainId:a,connector:s}=e,c="reconnecting"===t.status||void 0===t.status;r?.({address:n,addresses:o,chain:i,chainId:a,connector:s,isReconnected:c})}else"connected"===t.status&&"disconnected"===e.status&&i?.()}}),[a,r,i])}])},282978,(e,t,n)=>{"use strict";var o=60103,r=60106,i=60107,a=60108,s=60114,c=60109,l=60110,d=60112,u=60113,p=60120,h=60115,g=60116,f=60121,b=60122,x=60117,m=60129,C=60131;if("function"==typeof Symbol&&Symbol.for){var v=Symbol.for;o=v("react.element"),r=v("react.portal"),i=v("react.fragment"),a=v("react.strict_mode"),s=v("react.profiler"),c=v("react.provider"),l=v("react.context"),d=v("react.forward_ref"),u=v("react.suspense"),p=v("react.suspense_list"),h=v("react.memo"),g=v("react.lazy"),f=v("react.block"),b=v("react.server.block"),x=v("react.fundamental"),m=v("react.debug_trace_mode"),C=v("react.legacy_hidden")}function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case i:case s:case a:case u:case p:return e;default:switch(e=e&&e.$$typeof){case l:case d:case g:case h:case c:return e;default:return t}}case r:return t}}}var k=c,y=o,A=d,j=i,S=g,E=h,L=r,M=s,N=a,I=u;n.ContextConsumer=l,n.ContextProvider=k,n.Element=y,n.ForwardRef=A,n.Fragment=j,n.Lazy=S,n.Memo=E,n.Portal=L,n.Profiler=M,n.StrictMode=N,n.Suspense=I,n.isAsyncMode=function(){return!1},n.isConcurrentMode=function(){return!1},n.isContextConsumer=function(e){return w(e)===l},n.isContextProvider=function(e){return w(e)===c},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},n.isForwardRef=function(e){return w(e)===d},n.isFragment=function(e){return w(e)===i},n.isLazy=function(e){return w(e)===g},n.isMemo=function(e){return w(e)===h},n.isPortal=function(e){return w(e)===r},n.isProfiler=function(e){return w(e)===s},n.isStrictMode=function(e){return w(e)===a},n.isSuspense=function(e){return w(e)===u},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===s||e===m||e===a||e===u||e===p||e===C||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===x||e.$$typeof===f||e[0]===b)||!1},n.typeOf=w},111136,(e,t,n)=>{"use strict";t.exports=e.r(282978)},924330,(e,t,n)=>{t.exports=function(e,t,n,o){var r=n?n.call(o,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!s(l))return!1;var d=e[l],u=t[l];if(!1===(r=n?n.call(o,d,u,l):void 0)||void 0===r&&d!==u)return!1}return!0}},700742,(e,t,n)=>{"use strict";var o="function"==typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,p=o?Symbol.for("react.concurrent_mode"):60111,h=o?Symbol.for("react.forward_ref"):60112,g=o?Symbol.for("react.suspense"):60113,f=o?Symbol.for("react.suspense_list"):60120,b=o?Symbol.for("react.memo"):60115,x=o?Symbol.for("react.lazy"):60116,m=o?Symbol.for("react.block"):60121,C=o?Symbol.for("react.fundamental"):60117,v=o?Symbol.for("react.responder"):60118,w=o?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case p:case a:case c:case s:case g:return e;default:switch(e=e&&e.$$typeof){case d:case h:case x:case b:case l:return e;default:return t}}case i:return t}}}function y(e){return k(e)===p}n.AsyncMode=u,n.ConcurrentMode=p,n.ContextConsumer=d,n.ContextProvider=l,n.Element=r,n.ForwardRef=h,n.Fragment=a,n.Lazy=x,n.Memo=b,n.Portal=i,n.Profiler=c,n.StrictMode=s,n.Suspense=g,n.isAsyncMode=function(e){return y(e)||k(e)===u},n.isConcurrentMode=y,n.isContextConsumer=function(e){return k(e)===d},n.isContextProvider=function(e){return k(e)===l},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},n.isForwardRef=function(e){return k(e)===h},n.isFragment=function(e){return k(e)===a},n.isLazy=function(e){return k(e)===x},n.isMemo=function(e){return k(e)===b},n.isPortal=function(e){return k(e)===i},n.isProfiler=function(e){return k(e)===c},n.isStrictMode=function(e){return k(e)===s},n.isSuspense=function(e){return k(e)===g},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===c||e===s||e===g||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===x||e.$$typeof===b||e.$$typeof===l||e.$$typeof===d||e.$$typeof===h||e.$$typeof===C||e.$$typeof===v||e.$$typeof===w||e.$$typeof===m)},n.typeOf=k},127142,(e,t,n)=>{"use strict";t.exports=e.r(700742)},705927,(e,t,n)=>{"use strict";var o=e.r(127142),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return o.isMemo(e)?a:s[e.$$typeof]||r}s[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[o.Memo]=a;var l=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,g=Object.prototype;t.exports=function e(t,n,o){if("string"!=typeof n){if(g){var r=h(n);r&&r!==g&&e(t,r,o)}var a=d(n);u&&(a=a.concat(u(n)));for(var s=c(t),f=c(n),b=0;b<a.length;++b){var x=a[b];if(!i[x]&&!(o&&o[x])&&!(f&&f[x])&&!(s&&s[x])){var m=p(n,x);try{l(t,x,m)}catch(e){}}}}return t}},952145,974348,991303,443026,498354,840290,35994,819636,137402,412367,872900,766911,396885,483822,875023,754961,927121,855550,e=>{"use strict";var t,n,o=e.i(644649);e.s(["useAccountEffect",()=>o.useConnectionEffect],952145);var r=e.i(550253),i=e.i(739448),a=e.i(531448),s=e.i(239727);async function c(e,t){let n,{account:o,connector:r,...c}=t;return n="object"==typeof o&&"local"===o.type?e.getClient():await (0,s.getConnectorClient)(e,{account:o,connector:r}),(0,a.getAction)(n,i.signMessage,"signMessage")({...c,...o?{account:o}:{}})}var l=e.i(374638);e.s(["useSignMessage",0,function(e={}){let t=function(e,t={}){return{...t.mutation,mutationFn:t=>c(e,t),mutationKey:["signMessage"]}}((0,l.useConfig)(e),e),n=(0,r.useMutation)(t);return{...n,signMessage:n.mutate,signMessageAsync:n.mutateAsync}}],974348);let d=[];function u(e){let t=e.connectors;return d.length===t.length&&d.every((e,n)=>e===t[n])?d:(d=t,t)}var p=e.i(368994);function h(e={}){let t=(0,l.useConfig)(e);return(0,p.useSyncExternalStore)(e=>(function(e,t){let{onChange:n}=t;return e._internal.connectors.subscribe((e,t)=>{n(Object.values(e),t)})})(t,{onChange:e}),()=>u(t),()=>u(t))}e.s(["useConnectors",0,h],991303);var g=e.i(763485);async function f(e,t){let n;if((n="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector).uid===e.state.current)throw new g.ConnectorAlreadyConnectedError;try{e.setState(e=>({...e,status:"connecting"})),n.emitter.emit("message",{type:"connecting"});let{connector:o,...r}=t,i=await n.connect(r);return n.emitter.off("connect",e._internal.events.connect),n.emitter.on("change",e._internal.events.change),n.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",n.id),e.setState(e=>({...e,connections:new Map(e.connections).set(n.uid,{accounts:r.withCapabilities?i.accounts.map(e=>"object"==typeof e?e.address:e):i.accounts,chainId:i.chainId,connector:n}),current:n.uid,status:"connected"})),{accounts:r.withCapabilities?i.accounts.map(e=>"object"==typeof e?e:{address:e,capabilities:{}}):i.accounts,chainId:i.chainId}}catch(t){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),t}}e.s(["useConnect",0,function(e={}){let t=(0,l.useConfig)(e),n=function(e,t={}){return{...t.mutation,mutationFn:async t=>f(e,t),mutationKey:["connect"]}}(t,e),o=(0,r.useMutation)(n);return(0,p.useEffect)(()=>t.subscribe(({status:e})=>e,(e,t)=>{"connected"===t&&"disconnected"===e&&o.reset()}),[t,o.reset]),{...o,connect:o.mutate,connectAsync:o.mutateAsync,connectors:h({config:t})}}],443026);var b=e.i(960366),x=e.i(409590),m=e.i(953323),C=e.i(886690);e.s(["useEnsAddress",0,function(e={}){let t=(0,l.useConfig)(e),n=(0,C.useChainId)({config:t}),o=function(e,t={}){return{...t.query,enabled:!!(t.name&&(t.query?.enabled??!0)),queryFn:async t=>{let[,{scopeKey:n,...o}]=t.queryKey;if(!o.name)throw Error("name is required");return function(e,t){let{chainId:n,...o}=t,r=e.getClient({chainId:n});return(0,a.getAction)(r,b.getEnsAddress,"getEnsAddress")(o)}(e,{...o,name:o.name})},queryKey:function(e={}){return["ensAddress",(0,x.filterQueryOptions)(e)]}(t)}}(t,{...e,chainId:e.chainId??n});return(0,m.useQuery)(o)}],498354);var v=e.i(907092);e.s(["useEnsName",0,function(e={}){let t=(0,l.useConfig)(e),n=(0,C.useChainId)({config:t}),o=function(e,t={}){return{...t.query,enabled:!!(t.address&&(t.query?.enabled??!0)),queryFn:async t=>{let[,{scopeKey:n,...o}]=t.queryKey;if(!o.address)throw Error("address is required");return function(e,t){let{chainId:n,...o}=t,r=e.getClient({chainId:n});return(0,a.getAction)(r,v.getEnsName,"getEnsName")(o)}(e,{...o,address:o.address})},queryKey:function(e={}){return["ensName",(0,x.filterQueryOptions)(e)]}(t)}}(t,{...e,chainId:e.chainId??n});return(0,m.useQuery)(o)}],840290);var w=e.i(617713);e.s(["useEnsAvatar",0,function(e={}){let t=(0,l.useConfig)(e),n=(0,C.useChainId)({config:t}),o=function(e,t={}){return{...t.query,enabled:!!(t.name&&(t.query?.enabled??!0)),queryFn:async t=>{let[,{scopeKey:n,...o}]=t.queryKey;if(!o.name)throw Error("name is required");return function(e,t){let{chainId:n,...o}=t,r=e.getClient({chainId:n});return(0,a.getAction)(r,w.getEnsAvatar,"getEnsAvatar")(o)}(e,{...o,name:o.name})},queryKey:function(e={}){return["ensAvatar",(0,x.filterQueryOptions)(e)]}(t)}}(t,{...e,chainId:e.chainId??n});return(0,m.useQuery)(o)}],35994);var k=e.i(888352),y=e.i(568643);e.s(["useConnectorClient",0,function(e={}){let t=(0,l.useConfig)(e),n=(0,C.useChainId)({config:t}),{address:o,connector:r}=(0,y.useConnection)({config:t}),i=function(e,t={}){return{...t.query,enabled:!!(t.connector?.getProvider&&(t.query?.enabled??!0)),gcTime:0,queryFn:async n=>{let[,{connectorUid:o,scopeKey:r,...i}]=n.queryKey;return(0,s.getConnectorClient)(e,{...i,connector:t.connector})},queryKey:function(e={}){return["connectorClient",(0,x.filterQueryOptions)(e)]}(t),staleTime:1/0}}(t,{...e,chainId:e.chainId??n,connector:e.connector??r,query:e.query}),a=(0,p.useRef)(o),c=(0,k.useQueryClient)();return(0,p.useEffect)(()=>{let e=a.current;!o&&e?(c.removeQueries({queryKey:i.queryKey}),a.current=void 0):o!==e&&(c.invalidateQueries({queryKey:i.queryKey}),a.current=o)},[o,c]),(0,m.useQuery)(i)}],819636);var A=e.i(558475);e.s(["useBalance",0,function(e={}){let t=(0,l.useConfig)(e),n=(0,C.useChainId)({config:t}),o=function(e,t={}){return{...t.query,enabled:!!(t.address&&(t.query?.enabled??!0)),queryFn:async t=>{let[,{scopeKey:n,...o}]=t.queryKey;if(!o.address)throw Error("address is required");return await (0,A.getBalance)(e,{...o,address:o.address})??null},queryKey:function(e={}){return["balance",(0,x.filterQueryOptions)(e)]}(t)}}(t,{...e,chainId:e.chainId??n});return(0,m.useQuery)(o)}],137402);var j=e.i(936084),S=e.i(328400);e.s(["useBlockNumber",0,function(e={}){let t=(0,l.useConfig)(e),n=(0,C.useChainId)({config:t}),o=function(e,t={}){return{...t.query,gcTime:0,queryFn:async t=>{let[,{scopeKey:n,...o}]=t.queryKey;return await function(e,t={}){let{chainId:n,...o}=t,r=e.getClient({chainId:n});return(0,a.getAction)(r,j.getBlockNumber,"getBlockNumber")(o)}(e,o)??null},queryKey:function(e={}){return["blockNumber",(0,x.filterQueryOptions)(e)]}(t)}}(t,{...e,chainId:e.chainId??n}),r=(0,k.useQueryClient)();return!function(e={}){let{enabled:t=!0,onBlockNumber:n,config:o,...r}=e,i=(0,l.useConfig)(e),s=(0,C.useChainId)({config:i}),c=e.chainId??s,d=(0,p.useRef)(n),u=(0,p.useRef)(r.onError);d.current=n,u.current=r.onError,(0,p.useEffect)(()=>{if(t&&d.current)return function(e,t){let n,o,{syncConnectedChain:r=e._internal.syncConnectedChain,...i}=t,s=t=>{n&&n();let o=e.getClient({chainId:t});return n=(0,a.getAction)(o,S.watchBlockNumber,"watchBlockNumber")(i)},c=s(t.chainId);return r&&!t.chainId&&(o=e.subscribe(({chainId:e})=>e,async e=>s(e))),()=>{c?.(),o?.()}}(i,{...r,chainId:c,onBlockNumber:(e,t)=>d.current?.(e,t),onError:e=>u.current?.(e)})},[c,i,t,r.emitMissed,r.emitOnBegin,r.poll,r.pollingInterval,r.syncConnectedChain])}({...{config:e.config,chainId:e.chainId,..."object"==typeof e.watch?e.watch:{}},enabled:!!((o.enabled??!0)&&("object"==typeof e.watch?e.watch.enabled:e.watch)),onBlockNumber(e){r.setQueryData(o.queryKey,e)}}),(0,m.useQuery)(o)}],412367);var E=e.i(940473);let L=(0,E.defineChain)({id:137,name:"Polygon",blockTime:2e3,nativeCurrency:{name:"POL",symbol:"POL",decimals:18},rpcUrls:{default:{http:["https://polygon.drpc.org"]}},blockExplorers:{default:{name:"PolygonScan",url:"https://polygonscan.com",apiUrl:"https://api.etherscan.io/v2/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:0x18938b0}}});e.s(["polygon",0,L],872900);var M=e.i(572070),N=e.i(64957),I=e.i(327580),F=e.i(865928);let O={block:(0,N.defineBlock)({format:e=>({transactions:e.transactions?.map(e=>{if("string"==typeof e)return e;let t=(0,I.formatTransaction)(e);return"0x7e"===t.typeHex&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,M.hexToBigInt)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}),stateRoot:e.stateRoot})}),transaction:(0,I.defineTransaction)({format(e){let t={};return"0x7e"===e.type&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,M.hexToBigInt)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:(0,F.defineTransactionReceipt)({format:e=>({l1GasPrice:e.l1GasPrice?(0,M.hexToBigInt)(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?(0,M.hexToBigInt)(e.l1GasUsed):null,l1Fee:e.l1Fee?(0,M.hexToBigInt)(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null})})};var B=e.i(78098),_=e.i(579828),D=e.i(525780),R=e.i(130882),T=e.i(839149),z=e.i(324459);let W={blockTime:2e3,contracts:{gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},formatters:O,serializers:{transaction:function(e,t){var n;return"deposit"===(n=e).type||void 0!==n.sourceHash?function(e){!function(e){let{from:t,to:n}=e;if(t&&!(0,_.isAddress)(t))throw new B.InvalidAddressError({address:t});if(n&&!(0,_.isAddress)(n))throw new B.InvalidAddressError({address:n})}(e);let{sourceHash:t,data:n,from:o,gas:r,isSystemTx:i,mint:a,to:s,value:c}=e,l=[t,o,s??"0x",a?(0,R.toHex)(a):"0x",c?(0,R.toHex)(c):"0x",r?(0,R.toHex)(r):"0x",i?"0x1":"0x",n??"0x"];return(0,D.concatHex)(["0x7e",(0,T.toRlp)(l)])}(e):(0,z.serializeTransaction)(e,t)}}},U=(0,E.defineChain)({...W,id:10,name:"OP Mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://mainnet.optimism.io"]}},blockExplorers:{default:{name:"Optimism Explorer",url:"https://optimistic.etherscan.io",apiUrl:"https://api-optimistic.etherscan.io/api"}},contracts:{...W.contracts,disputeGameFactory:{1:{address:"0xe5965Ab5962eDc7477C8520243A95517CD252fA9"}},l2OutputOracle:{1:{address:"0xdfe97868233d1aa22e815a266982f2cf17685a27"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:4286263},portal:{1:{address:"0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"}},l1StandardBridge:{1:{address:"0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"}}},sourceId:1});e.s(["optimism",0,U],766911);var H=e.i(921138),G=e.i(234372),P=e.i(43030),Q=e.i(815464);function Z(t={}){let n,o,{shimDisconnect:r=!1}=t;return(0,H.createConnector)(i=>({id:"safe",name:"Safe",type:Z.type,async connect({withCapabilities:e}={}){let t=await this.getProvider();if(!t)throw new G.ProviderNotFoundError;let n=await this.getAccounts(),a=await this.getChainId();return o||(o=this.onDisconnect.bind(this),t.on("disconnect",o)),r&&await i.storage?.removeItem("safe.disconnected"),{accounts:e?n.map(e=>({address:e,capabilities:{}})):n,chainId:a}},async disconnect(){let e=await this.getProvider();if(!e)throw new G.ProviderNotFoundError;o&&(e.removeListener("disconnect",o),o=void 0),r&&await i.storage?.setItem("safe.disconnected",!0)},async getAccounts(){let e=await this.getProvider();if(!e)throw new G.ProviderNotFoundError;return(await e.request({method:"eth_accounts"})).map(P.getAddress)},async getProvider(){if("u">typeof window&&window?.parent!==window){if(!n){let{default:o}=await (()=>{try{return e.A(166676)}catch{throw Error('dependency "@safe-global/safe-apps-sdk" not found')}})(),r=new o(t),i=await (0,Q.withTimeout)(()=>r.safe.getInfo(),{timeout:t.unstable_getInfoTimeout??10});if(!i)throw Error("Could not load Safe information");n=new(await (async()=>{let t=await (()=>{try{return e.A(581380)}catch{throw Error('dependency "@safe-global/safe-apps-provider" not found')}})();return"function"!=typeof t.SafeAppProvider&&"function"==typeof t.default.SafeAppProvider?t.default.SafeAppProvider:t.SafeAppProvider})())(i,r)}return n}},async getChainId(){let e=await this.getProvider();if(!e)throw new G.ProviderNotFoundError;return Number(e.chainId)},async isAuthorized(){try{if(r&&await i.storage?.getItem("safe.disconnected"))return!1;return!!(await this.getAccounts()).length}catch{return!1}},onAccountsChanged(){},onChainChanged(){},onDisconnect(){i.emitter.emit("disconnect")}}))}Z.type="safe",e.s(["safe",0,Z],396885);var V=e.i(833708);function Y(t={}){let n,o,r,i;return(0,H.createConnector)(a=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",rdns:"com.coinbase.wallet",type:Y.type,async connect({chainId:e,withCapabilities:t,...n}={}){try{let a=await this.getProvider(),s=(await a.request({method:"eth_requestAccounts",params:"instantOnboarding"in n&&n.instantOnboarding?[{onboarding:"instant"}]:[]})).map(e=>(0,P.getAddress)(e));o||(o=this.onAccountsChanged.bind(this),a.on("accountsChanged",o)),r||(r=this.onChainChanged.bind(this),a.on("chainChanged",r)),i||(i=this.onDisconnect.bind(this),a.on("disconnect",i));let c=await this.getChainId();if(e&&c!==e){let t=await this.switchChain({chainId:e}).catch(e=>{if(e.code===V.UserRejectedRequestError.code)throw e;return{id:c}});c=t?.id??c}return{accounts:t?s.map(e=>({address:e,capabilities:{}})):s,chainId:c}}catch(e){if(/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(e.message))throw new V.UserRejectedRequestError(e);throw e}},async disconnect(){let e=await this.getProvider();o&&(e.removeListener("accountsChanged",o),o=void 0),r&&(e.removeListener("chainChanged",r),r=void 0),i&&(e.removeListener("disconnect",i),i=void 0),e.disconnect(),e.close?.()},async getAccounts(){let e=await this.getProvider();return(await e.request({method:"eth_accounts"})).map(e=>(0,P.getAddress)(e))},async getChainId(){let e=await this.getProvider();return Number(await e.request({method:"eth_chainId"}))},async getProvider(){if(!n){let{createCoinbaseWalletSDK:o}=await (()=>{try{return e.A(350003)}catch{throw Error('dependency "@coinbase/wallet-sdk" not found')}})();n=o({...t,appChainIds:a.chains.map(e=>e.id),preference:{options:"all",...t.preference??{}}}).getProvider()}return n},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let n=a.chains.find(e=>e.id===t);if(!n)throw new V.SwitchChainError(new g.ChainNotConfiguredError);let o=await this.getProvider();try{return await o.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,R.numberToHex)(n.id)}]}),n}catch(r){if(4902===r.code)try{let r,i;r=e?.blockExplorerUrls?e.blockExplorerUrls:n.blockExplorers?.default.url?[n.blockExplorers?.default.url]:[],i=e?.rpcUrls?.length?e.rpcUrls:[n.rpcUrls.default?.http[0]??""];let a={blockExplorerUrls:r,chainId:(0,R.numberToHex)(t),chainName:e?.chainName??n.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??n.nativeCurrency,rpcUrls:i};return await o.request({method:"wallet_addEthereumChain",params:[a]}),n}catch(e){throw new V.UserRejectedRequestError(e)}throw new V.SwitchChainError(r)}},onAccountsChanged(e){0===e.length?this.onDisconnect():a.emitter.emit("change",{accounts:e.map(e=>(0,P.getAddress)(e))})},onChainChanged(e){let t=Number(e);a.emitter.emit("change",{chainId:t})},async onDisconnect(e){a.emitter.emit("disconnect");let t=await this.getProvider();o&&(t.removeListener("accountsChanged",o),o=void 0),r&&(t.removeListener("chainChanged",r),r=void 0),i&&(t.removeListener("disconnect",i),i=void 0)}}))}function J(t){let n,o,r,i,a,s,c,l,d=t.isNewChainsStale??!0;return(0,H.createConnector)(u=>({id:"walletConnect",name:"WalletConnect",type:J.type,async setup(){let e=await this.getProvider().catch(()=>null);e&&(a||(a=this.onConnect.bind(this),e.on("connect",a)),c||(c=this.onSessionDelete.bind(this),e.on("session_delete",c)))},async connect({chainId:e,withCapabilities:t,...n}={}){try{let o=await this.getProvider();if(!o)throw new G.ProviderNotFoundError;s||(s=this.onDisplayUri,o.on("display_uri",s));let d=e;if(!d){let e=await u.storage?.getItem("state")??{};d=u.chains.some(t=>t.id===e.chainId)?e.chainId:u.chains[0]?.id}if(!d)throw Error("No chains found on connector.");let p=await this.isChainsStale();if(o.session&&p&&await o.disconnect(),!o.session||p){let e=u.chains.filter(e=>e.id!==d).map(e=>e.id);await o.connect({optionalChains:[d,...e],..."pairingTopic"in n?{pairingTopic:n.pairingTopic}:{}}),this.setRequestedChainsIds(u.chains.map(e=>e.id))}let h=(await o.enable()).map(e=>(0,P.getAddress)(e)),g=await this.getChainId();if(e&&g!==e){let t=await this.switchChain({chainId:e}).catch(e=>{if(e.code===V.UserRejectedRequestError.code&&e.cause?.message!=="Missing or invalid. request() method: wallet_addEthereumChain")throw e;return{id:g}});g=t?.id??g}return s&&(o.removeListener("display_uri",s),s=void 0),a&&(o.removeListener("connect",a),a=void 0),r||(r=this.onAccountsChanged.bind(this),o.on("accountsChanged",r)),i||(i=this.onChainChanged.bind(this),o.on("chainChanged",i)),l||(l=this.onDisconnect.bind(this),o.on("disconnect",l)),c||(c=this.onSessionDelete.bind(this),o.on("session_delete",c)),{accounts:t?h.map(e=>({address:e,capabilities:{}})):h,chainId:g}}catch(e){if(/(user rejected|connection request reset)/i.test(e?.message))throw new V.UserRejectedRequestError(e);throw e}},async disconnect(){let e=await this.getProvider();try{await e?.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{i&&(e?.removeListener("chainChanged",i),i=void 0),l&&(e?.removeListener("disconnect",l),l=void 0),a||(a=this.onConnect.bind(this),e?.on("connect",a)),r&&(e?.removeListener("accountsChanged",r),r=void 0),c&&(e?.removeListener("session_delete",c),c=void 0),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map(e=>(0,P.getAddress)(e))},async getProvider({chainId:r}={}){async function i(){let n=u.chains.map(e=>e.id);if(!n.length)return;let{EthereumProvider:o}=await (()=>{try{return e.A(808132)}catch{throw Error('dependency "@walletconnect/ethereum-provider" not found')}})();return await o.init({...t,disableProviderPing:!0,optionalChains:n,projectId:t.projectId,rpcMap:Object.fromEntries(u.chains.map(e=>{let[t]=function(e){let{chain:t}=e,n=t.rpcUrls.default.http[0];if(!e.transports)return[n];let o=e.transports?.[t.id]?.({chain:t});return(o?.value?.transports||[o]).map(({value:e})=>e?.url||n)}({chain:e,transports:u.transports});return[e.id,t]})),showQrModal:t.showQrModal??!0})}return n||(o||(o=i()),n=await o,n?.events.setMaxListeners(1/0)),r&&await this.switchChain?.({chainId:r}),n},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccounts(),this.getProvider()]);if(!e.length)return!1;if(await this.isChainsStale()&&t.session)return await t.disconnect().catch(()=>{}),!1;return!0}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let n=await this.getProvider();if(!n)throw new G.ProviderNotFoundError;let o=u.chains.find(e=>e.id===t);if(!o)throw new V.SwitchChainError(new g.ChainNotConfiguredError);try{await Promise.all([new Promise(e=>{let n=({chainId:o})=>{o===t&&(u.emitter.off("change",n),e())};u.emitter.on("change",n)}),n.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,R.numberToHex)(t)}]})]);let e=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...e,t]),o}catch(r){if(/(user rejected)/i.test(r.message))throw new V.UserRejectedRequestError(r);try{let r,i;r=e?.blockExplorerUrls?e.blockExplorerUrls:o.blockExplorers?.default.url?[o.blockExplorers?.default.url]:[],i=e?.rpcUrls?.length?e.rpcUrls:[...o.rpcUrls.default.http];let a={blockExplorerUrls:r,chainId:(0,R.numberToHex)(t),chainName:e?.chainName??o.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??o.nativeCurrency,rpcUrls:i};await n.request({method:"wallet_addEthereumChain",params:[a]});let s=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...s,t]),o}catch(e){throw new V.UserRejectedRequestError(e)}}},onAccountsChanged(e){0===e.length?this.onDisconnect():u.emitter.emit("change",{accounts:e.map(e=>(0,P.getAddress)(e))})},onChainChanged(e){let t=Number(e);u.emitter.emit("change",{chainId:t})},async onConnect(e){let t=Number(e.chainId),n=await this.getAccounts();u.emitter.emit("connect",{accounts:n,chainId:t})},async onDisconnect(e){this.setRequestedChainsIds([]),u.emitter.emit("disconnect");let t=await this.getProvider();r&&(t.removeListener("accountsChanged",r),r=void 0),i&&(t.removeListener("chainChanged",i),i=void 0),l&&(t.removeListener("disconnect",l),l=void 0),c&&(t.removeListener("session_delete",c),c=void 0),a||(a=this.onConnect.bind(this),t.on("connect",a))},onDisplayUri(e){u.emitter.emit("message",{type:"display_uri",data:e})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds:()=>n?n.session?.namespaces.eip155?.accounts?.map(e=>Number.parseInt(e.split(":")[1]||"",10))??[]:[],async getRequestedChainsIds(){return await u.storage?.getItem(this.requestedChainsStorageKey)??[]},async isChainsStale(){if(!d)return!1;let e=u.chains.map(e=>e.id),t=this.getNamespaceChainsIds();if(t.length&&!t.some(t=>e.includes(t)))return!1;let n=await this.getRequestedChainsIds();return!e.every(e=>n.includes(e))},async setRequestedChainsIds(e){await u.storage?.setItem(this.requestedChainsStorageKey,e)},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}}))}Y.type="coinbaseWallet",e.s(["coinbaseWallet",0,Y],483822),J.type="walletConnect",e.s(["walletConnect",0,J],875023),e.s(["familyAccountsConnector",0,()=>({connect:async()=>({accounts:[],chainId:1}),disconnect:async()=>Promise.resolve(),getAccounts:async()=>[],getChainId:async()=>1,getProvider:async()=>void 0,id:"family",isAuthorized:async()=>!1,name:"Family",onAccountsChanged:()=>{},onChainChanged:()=>{},onDisconnect:()=>{},type:"family"})],754961);var q=e.i(486777),K=e.i(256192),X=e.i(340059),$=e.i(893245),ee=e.i(678468);e.s(["MotionConfig",0,function({children:e,isValidProp:t,...n}){t&&(0,$.loadExternalIsValidProp)(t);let o=(0,p.useContext)(X.MotionConfigContext);(n={...o,...n}).transition=(0,K.resolveTransition)(n.transition,o.transition),n.isStatic=(0,ee.useConstant)(()=>n.isStatic);let r=(0,p.useMemo)(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion,n.skipAnimations]);return(0,q.jsx)(X.MotionConfigContext.Provider,{value:r,children:e})}],927121);var et=e.i(585904),en=e.i(111136),eo=e.i(924330);let er=function(e){function t(e,t,o){var r=t.trim().split(g);t=r;var i=r.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<i;++s)t[s]=n(e,t[s],o).trim();break;default:var c=s=0;for(t=[];s<i;++s)for(var l=0;l<a;++l)t[c++]=n(e[l]+" ",r[s],o).trim()}return t}function n(e,t,n){var o=t.charCodeAt(0);switch(33>o&&(o=(t=t.trim()).charCodeAt(0)),o){case 38:return t.replace(f,"$1"+e.trim());case 58:return e.trim()+t.replace(f,"$1"+e.trim());default:if(0<+n&&0<t.indexOf("\f"))return t.replace(f,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function o(e,t,n,i){var a=e+";",s=2*t+3*n+4*i;if(944===s){e=a.indexOf(":",9)+1;var c=a.substring(e,a.length-1).trim();return c=a.substring(0,e).trim()+c+";",1===M||2===M&&r(c,1)?"-webkit-"+c+c:c}if(0===M||2===M&&!r(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(j,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(c=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+c+a;case 1005:return p.test(a)?a.replace(u,":-webkit-")+a.replace(u,":-moz-")+a:a;case 1e3:switch(t=(c=a.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=a.replace(C,"tb");break;case 232:c=a.replace(C,"tb-rl");break;case 220:c=a.replace(C,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+c+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(c=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:a=a.replace(c,"-webkit-"+c)+";"+a;break;case 207:case 102:a=a.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(c,"-webkit-"+c)+";"+a.replace(c,"-ms-"+c+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return c=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+c+"-ms-flex-"+c+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(k,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(k,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===A.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?o(e.replace("stretch","fill-available"),t,n,i).replace(":fill-available",":stretch"):a.replace(c,"-webkit-"+c)+a.replace(c,"-moz-"+c.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===n+i&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+a}return a}function r(e,t){var n=e.indexOf(1===t?":":"{"),o=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),O(2!==t?o:o.replace(y,"$1"),n,t)}function i(e,t){var n=o(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(w," or ($1)").substring(4):"("+t+")"}function a(e,t,n,o,r,i,a,s,l,d){for(var u,p=0,h=t;p<F;++p)switch(u=I[p].call(c,e,h,n,o,r,i,a,s,l,d)){case void 0:case!1:case!0:case null:break;default:h=u}if(h!==t)return h}function s(e){return void 0!==(e=e.prefix)&&(O=null,e?"function"!=typeof e?M=1:(M=2,O=e):M=0),s}function c(e,n){var s=e;if(33>s.charCodeAt(0)&&(s=s.trim()),s=[s],0<F){var c=a(-1,n,s,s,E,S,0,0,0,0);void 0!==c&&"string"==typeof c&&(n=c)}var u=function e(n,s,c,u,p){for(var h,g,f,C,w,k=0,y=0,A=0,j=0,I=0,O=0,_=f=h=0,D=0,R=0,T=0,z=0,W=c.length,U=W-1,H="",G="",P="",Q="";D<W;){if(g=c.charCodeAt(D),D===U&&0!==y+j+A+k&&(0!==y&&(g=47===y?10:47),j=A=k=0,W++,U++),0===y+j+A+k){if(D===U&&(0<R&&(H=H.replace(d,"")),0<H.trim().length)){switch(g){case 32:case 9:case 59:case 13:case 10:break;default:H+=c.charAt(D)}g=59}switch(g){case 123:for(h=(H=H.trim()).charCodeAt(0),f=1,z=++D;D<W;){switch(g=c.charCodeAt(D)){case 123:f++;break;case 125:f--;break;case 47:switch(g=c.charCodeAt(D+1)){case 42:case 47:e:{for(_=D+1;_<U;++_)switch(c.charCodeAt(_)){case 47:if(42===g&&42===c.charCodeAt(_-1)&&D+2!==_){D=_+1;break e}break;case 10:if(47===g){D=_+1;break e}}D=_}}break;case 91:g++;case 40:g++;case 34:case 39:for(;D++<U&&c.charCodeAt(D)!==g;);}if(0===f)break;D++}if(f=c.substring(z,D),0===h&&(h=(H=H.replace(l,"").trim()).charCodeAt(0)),64===h){switch(0<R&&(H=H.replace(d,"")),g=H.charCodeAt(1)){case 100:case 109:case 115:case 45:R=s;break;default:R=N}if(z=(f=e(s,R,f,g,p+1)).length,0<F&&(w=a(3,f,R=t(N,H,T),s,E,S,z,g,p,u),H=R.join(""),void 0!==w&&0===(z=(f=w.trim()).length)&&(g=0,f="")),0<z)switch(g){case 115:H=H.replace(v,i);case 100:case 109:case 45:f=H+"{"+f+"}";break;case 107:f=(H=H.replace(b,"$1 $2"))+"{"+f+"}",f=1===M||2===M&&r("@"+f,3)?"@-webkit-"+f+"@"+f:"@"+f;break;default:f=H+f,112===u&&(G+=f,f="")}else f=""}else f=e(s,t(s,H,T),f,u,p+1);P+=f,f=T=R=_=h=0,H="",g=c.charCodeAt(++D);break;case 125:case 59:if(1<(z=(H=(0<R?H.replace(d,""):H).trim()).length))switch(0===_&&(45===(h=H.charCodeAt(0))||96<h&&123>h)&&(z=(H=H.replace(" ",":")).length),0<F&&void 0!==(w=a(1,H,s,n,E,S,G.length,u,p,u))&&0===(z=(H=w.trim()).length)&&(H="\0\0"),h=H.charCodeAt(0),g=H.charCodeAt(1),h){case 0:break;case 64:if(105===g||99===g){Q+=H+c.charAt(D);break}default:58!==H.charCodeAt(z-1)&&(G+=o(H,h,g,H.charCodeAt(2)))}T=R=_=h=0,H="",g=c.charCodeAt(++D)}}switch(g){case 13:case 10:47===y?y=0:0===1+h&&107!==u&&0<H.length&&(R=1,H+="\0"),0<F*B&&a(0,H,s,n,E,S,G.length,u,p,u),S=1,E++;break;case 59:case 125:if(0===y+j+A+k){S++;break}default:switch(S++,C=c.charAt(D),g){case 9:case 32:if(0===j+k+y)switch(I){case 44:case 58:case 9:case 32:C="";break;default:32!==g&&(C=" ")}break;case 0:C="\\0";break;case 12:C="\\f";break;case 11:C="\\v";break;case 38:0===j+y+k&&(R=T=1,C="\f"+C);break;case 108:if(0===j+y+k+L&&0<_)switch(D-_){case 2:112===I&&58===c.charCodeAt(D-3)&&(L=I);case 8:111===O&&(L=O)}break;case 58:0===j+y+k&&(_=D);break;case 44:0===y+A+j+k&&(R=1,C+="\r");break;case 34:case 39:0===y&&(j=j===g?0:0===j?g:j);break;case 91:0===j+y+A&&k++;break;case 93:0===j+y+A&&k--;break;case 41:0===j+y+k&&A--;break;case 40:0===j+y+k&&(0===h&&(2*I+3*O==533||(h=1)),A++);break;case 64:0===y+A+j+k+_+f&&(f=1);break;case 42:case 47:if(!(0<j+k+A))switch(y){case 0:switch(2*g+3*c.charCodeAt(D+1)){case 235:y=47;break;case 220:z=D,y=42}break;case 42:47===g&&42===I&&z+2!==D&&(33===c.charCodeAt(z+2)&&(G+=c.substring(z,D+1)),C="",y=0)}}0===y&&(H+=C)}O=I,I=g,D++}if(0<(z=G.length)){if(R=s,0<F&&void 0!==(w=a(2,G,R,n,E,S,z,u,p,u))&&0===(G=w).length)return Q+G+P;if(G=R.join(",")+"{"+G+"}",0!=M*L){switch(2!==M||r(G,2)||(L=0),L){case 111:G=G.replace(m,":-moz-$1")+G;break;case 112:G=G.replace(x,"::-webkit-input-$1")+G.replace(x,"::-moz-$1")+G.replace(x,":-ms-input-$1")+G}L=0}}return Q+G+P}(N,s,n,0,0);return 0<F&&void 0!==(c=a(-2,u,s,s,E,S,u.length,0,0,0))&&(u=c),L=0,S=E=1,u}var l=/^\0+/g,d=/[\0\r\f]/g,u=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,g=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,m=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,v=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,k=/-self|flex-/g,y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,S=1,E=1,L=0,M=1,N=[],I=[],F=0,O=null,B=0;return c.use=function e(t){switch(t){case void 0:case null:F=I.length=0;break;default:if("function"==typeof t)I[F++]=t;else if("object"==typeof t)for(var n=0,o=t.length;n<o;++n)e(t[n]);else B=0|!!t}return e},c.set=s,void 0!==e&&s(e),c},ei={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var ea=e.i(570606),es=e.i(705927);function ec(){return(ec=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var el=function(e,t){for(var n=[e[0]],o=0,r=t.length;o<r;o+=1)n.push(t[o],e[o+1]);return n},ed=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,en.typeOf)(e)},eu=Object.freeze([]),ep=Object.freeze({});function eh(e){return"function"==typeof e}function eg(e){return e.displayName||e.name||"Component"}function ef(e){return e&&"string"==typeof e.styledComponentId}var eb=void 0!==et.default&&void 0!==et.default.env&&(et.default.env.REACT_APP_SC_ATTR||et.default.env.SC_ATTR)||"data-styled",ex="u">typeof window&&"HTMLElement"in window,em=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==et.default&&void 0!==et.default.env&&(void 0!==et.default.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==et.default.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==et.default.env.REACT_APP_SC_DISABLE_SPEEDY&&et.default.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==et.default.env.SC_DISABLE_SPEEDY&&""!==et.default.env.SC_DISABLE_SPEEDY&&"false"!==et.default.env.SC_DISABLE_SPEEDY&&et.default.env.SC_DISABLE_SPEEDY));function eC(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];throw Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ev=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,r=o;e>=r;)(r<<=1)<0&&eC(16,""+e);this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var i=o;i<r;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),o=n+t;this.groupSizes[e]=0;for(var r=n;r<o;r++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),r=o+n,i=o;i<r;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),ew=new Map,ek=new Map,ey=1,eA=function(e){if(ew.has(e))return ew.get(e);for(;ek.has(ey);)ey++;var t=ey++;return ew.set(e,t),ek.set(t,e),t},ej=function(e,t){t>=ey&&(ey=t+1),ew.set(e,t),ek.set(t,e)},eS="style["+eb+'][data-styled-version="5.3.11"]',eE=RegExp("^"+eb+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),eL=function(e,t,n){for(var o,r=n.split(","),i=0,a=r.length;i<a;i++)(o=r[i])&&e.registerName(t,o)},eM=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),o=[],r=0,i=n.length;r<i;r++){var a=n[r].trim();if(a){var s=a.match(eE);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(ej(l,c),eL(e,l,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}},eN=function(){return"u">typeof __webpack_nonce__?__webpack_nonce__:null},eI=function(e){var t=document.head,n=e||t,o=document.createElement("style"),r=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var o=t[n];if(o&&1===o.nodeType&&o.hasAttribute(eb))return o}}(n),i=void 0!==r?r.nextSibling:null;o.setAttribute(eb,"active"),o.setAttribute("data-styled-version","5.3.11");var a=eN();return a&&o.setAttribute("nonce",a),n.insertBefore(o,i),o},eF=function(){function e(e){var t=this.element=eI(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,o=t.length;n<o;n++){var r=t[n];if(r.ownerNode===e)return r}eC(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),eO=function(){function e(e){var t=this.element=eI(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),o=this.nodes[e];return this.element.insertBefore(n,o||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),eB=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),e_=ex,eD={isServer:!ex,useCSSOMInjection:!em},eR=function(){function e(e,t,n){void 0===e&&(e=ep),void 0===t&&(t={}),this.options=ec({},eD,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ex&&e_&&(e_=!1,function(e){for(var t=document.querySelectorAll(eS),n=0,o=t.length;n<o;n++){var r=t[n];r&&"active"!==r.getAttribute(eb)&&(eM(e,r),r.parentNode&&r.parentNode.removeChild(r))}}(this))}e.registerId=function(e){return eA(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(ec({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){var e,t,n,o;return this.tag||(this.tag=(t=(e=this.options).isServer,n=e.useCSSOMInjection,o=e.target,new ev(t?new eB(o):n?new eF(o):new eO(o))))},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(eA(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(eA(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(eA(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,o="",r=0;r<n;r++){var i,a=(i=r,ek.get(i));if(void 0!==a){var s=e.names.get(a),c=t.getGroup(r);if(s&&c&&s.size){var l=eb+".g"+r+'[id="'+a+'"]',d="";void 0!==s&&s.forEach(function(e){e.length>0&&(d+=e+",")}),o+=""+c+l+'{content:"'+d+'"}/*!sc*/\n'}}}return o}(this)},e}(),eT=/(a)(d)/gi,ez=function(e){return String.fromCharCode(e+(e>25?39:97))};function eW(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ez(t%52)+n;return(ez(t%52)+n).replace(eT,"$1-$2")}var eU=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},eH=function(e){return eU(5381,e)};function eG(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(eh(n)&&!ef(n))return!1}return!0}var eP=eH("5.3.11"),eQ=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&eG(e),this.componentId=t,this.baseHash=eU(eP,t),this.baseStyle=n,eR.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var o=this.componentId,r=[];if(this.baseStyle&&r.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))r.push(this.staticRulesId);else{var i=e6(this.rules,e,t,n).join(""),a=eW(eU(this.baseHash,i)>>>0);if(!t.hasNameForId(o,a)){var s=n(i,"."+a,void 0,o);t.insertRules(o,a,s)}r.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,l=eU(this.baseHash,n.hash),d="",u=0;u<c;u++){var p=this.rules[u];if("string"==typeof p)d+=p;else if(p){var h=e6(p,e,t,n),g=Array.isArray(h)?h.join(""):h;l=eU(l,g+u),d+=g}}if(d){var f=eW(l>>>0);if(!t.hasNameForId(o,f)){var b=n(d,"."+f,void 0,o);t.insertRules(o,f,b)}r.push(f)}}return r.join(" ")},e}(),eZ=/^\s*\/\/.*$/gm,eV=[":","[",".","#"];function eY(e){var t,n,o,r,i=void 0===e?ep:e,a=i.options,s=void 0===a?ep:a,c=i.plugins,l=void 0===c?eu:c,d=new er(s),u=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,o,r,i,a,s,c,l,d,u){switch(n){case 1:if(0===d&&64===o.charCodeAt(0))return e(o+";"),"";break;case 2:if(0===l)return o+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(r[0]+o),"";default:return o+(0===u?"/*|*/":"")}case -2:o.split("/*|*/}").forEach(t)}}}(function(e){u.push(e)}),h=function(e,o,i){return 0===o&&-1!==eV.indexOf(i[n.length])||i.match(r)?e:"."+t};function g(e,i,a,s){void 0===s&&(s="&");var c=e.replace(eZ,""),l=i&&a?a+" "+i+" { "+c+" }":c;return t=s,o=RegExp("\\"+(n=i)+"\\b","g"),r=RegExp("(\\"+n+"\\b){2,}"),d(a||!i?"":i,l)}return d.use([].concat(l,[function(e,t,r){2===e&&r.length&&r[0].lastIndexOf(n)>0&&(r[0]=r[0].replace(o,h))},p,function(e){if(-2===e){var t=u;return u=[],t}}])),g.hash=l.length?l.reduce(function(e,t){return t.name||eC(15),eU(e,t.name)},5381).toString():"",g}var eJ=p.default.createContext(),eq=(eJ.Consumer,p.default.createContext()),eK=(eq.Consumer,new eR),eX=eY();function e$(){return(0,p.useContext)(eJ)||eK}function e1(e){var t=(0,p.useState)(e.stylisPlugins),n=t[0],o=t[1],r=e$(),i=(0,p.useMemo)(function(){var t=r;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target]),a=(0,p.useMemo)(function(){return eY({options:{prefix:!e.disableVendorPrefixes},plugins:n})},[e.disableVendorPrefixes,n]);return(0,p.useEffect)(function(){(0,eo.default)(n,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]),p.default.createElement(eJ.Provider,{value:i},p.default.createElement(eq.Provider,{value:a},e.children))}var e0=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=eX);var o=n.name+t.hash;e.hasNameForId(n.id,o)||e.insertRules(n.id,o,t(n.rules,o,"@keyframes"))},this.toString=function(){return eC(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=eX),this.name+e.hash},e}(),e2=/([A-Z])/,e3=/([A-Z])/g,e5=/^ms-/,e4=function(e){return"-"+e.toLowerCase()};function e8(e){return e2.test(e)?e.replace(e3,e4).replace(e5,"-ms-"):e}var e9=function(e){return null==e||!1===e||""===e};function e6(e,t,n,o){if(Array.isArray(e)){for(var r,i=[],a=0,s=e.length;a<s;a+=1)""!==(r=e6(e[a],t,n,o))&&(Array.isArray(r)?i.push.apply(i,r):i.push(r));return i}return e9(e)?"":ef(e)?"."+e.styledComponentId:eh(e)?"function"!=typeof e||e.prototype&&e.prototype.isReactComponent||!t?e:e6(e(t),t,n,o):e instanceof e0?n?(e.inject(n,o),e.getName(o)):e:ed(e)?function e(t,n){var o,r=[];for(var i in t)t.hasOwnProperty(i)&&!e9(t[i])&&(Array.isArray(t[i])&&t[i].isCss||eh(t[i])?r.push(e8(i)+":",t[i],";"):ed(t[i])?r.push.apply(r,e(t[i],i)):r.push(e8(i)+": "+(null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||i in ei||i.startsWith("--")?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(r,["}"]):r}(e):e.toString()}var e7=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function te(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return eh(e)||ed(e)?e7(e6(el(eu,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:e7(e6(el(e,n)))}var tt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tn=/(^-|-$)/g;function to(e){return e.replace(tt,"-").replace(tn,"")}var tr=function(e){return eW(eH(e)>>>0)};function ti(e){return"string"==typeof e}var ta=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},ts=p.default.createContext();ts.Consumer;var tc={},tl=function(e){return function e(t,n,o){if(void 0===o&&(o=ep),!(0,en.isValidElementType)(n))return eC(1,String(n));var r=function(){return t(n,o,te.apply(void 0,arguments))};return r.withConfig=function(r){return e(t,n,ec({},o,{},r))},r.attrs=function(r){return e(t,n,ec({},o,{attrs:Array.prototype.concat(o.attrs,r).filter(Boolean)}))},r}(function e(t,n,o){var r=ef(t),i=!ti(t),a=n.attrs,s=void 0===a?eu:a,c=n.componentId,l=void 0===c?(b=n.displayName,x=n.parentComponentId,tc[m="string"!=typeof b?"sc":to(b)]=(tc[m]||0)+1,C=m+"-"+tr("5.3.11"+m+tc[m]),x?x+"-"+C:C):c,d=n.displayName,u=void 0===d?ti(t)?"styled."+t:"Styled("+eg(t)+")":d,h=n.displayName&&n.componentId?to(n.displayName)+"-"+n.componentId:n.componentId||l,g=r&&t.attrs?Array.prototype.concat(t.attrs,s).filter(Boolean):s,f=n.shouldForwardProp;r&&t.shouldForwardProp&&(f=n.shouldForwardProp?function(e,o,r){return t.shouldForwardProp(e,o,r)&&n.shouldForwardProp(e,o,r)}:t.shouldForwardProp);var b,x,m,C,v,w=new eQ(o,h,r?t.componentStyle:void 0),k=w.isStatic&&0===s.length,y=function(e,t){return function(e,t,n,o){var r,i,a,s,c,l,d,u=e.attrs,h=e.componentStyle,g=e.defaultProps,f=e.foldedComponentIds,b=e.shouldForwardProp,x=e.styledComponentId,m=e.target,C=(r=(0,p.useContext)(ts),void 0===(i=g)&&(i=ep),a=t.theme!==i.theme&&t.theme||r||i.theme||ep,void 0===a&&(a=ep),s=ec({},t,{theme:a}),c={},u.forEach(function(e){var t,n,o,r=e;for(t in eh(r)&&(r=r(s)),r)s[t]=c[t]="className"===t?(n=c[t],o=r[t],n&&o?n+" "+o:n||o):r[t]}),[s,c]),v=C[0],w=C[1],k=(l=e$(),d=(0,p.useContext)(eq)||eX,o?h.generateAndInjectStyles(ep,l,d):h.generateAndInjectStyles(v,l,d)),y=w.$as||t.$as||w.as||t.as||m,A=ti(y),j=w!==t?ec({},t,{},w):t,S={};for(var E in j)"$"!==E[0]&&"as"!==E&&("forwardedAs"===E?S.as=j[E]:(b?b(E,ea.default,y):!A||(0,ea.default)(E))&&(S[E]=j[E]));return t.style&&w.style!==t.style&&(S.style=ec({},t.style,{},w.style)),S.className=Array.prototype.concat(f,x,k!==x?k:null,t.className,w.className).filter(Boolean).join(" "),S.ref=n,(0,p.createElement)(y,S)}(v,e,t,k)};return y.displayName=u,(v=p.default.forwardRef(y)).attrs=g,v.componentStyle=w,v.displayName=u,v.shouldForwardProp=f,v.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):eu,v.styledComponentId=h,v.target=r?t.target:t,v.withComponent=function(t){var r=n.componentId,i=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t.indexOf(n=i[o])>=0||(r[n]=e[n]);return r}(n,["componentId"]),a=r&&r+"-"+(ti(t)?t:to(eg(t)));return e(t,ec({},i,{attrs:g,componentId:a}),o)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function e(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];for(var i=0;i<o.length;i++){var a=o[i];if(ta(a))for(var s in a)"__proto__"!==s&&"constructor"!==s&&"prototype"!==s&&function(t,n,o){var r=t[o];ta(n)&&ta(r)?e(r,n):t[o]=n}(t,a[s],s)}return t}({},t.defaultProps,e):e}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&(0,es.default)(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v},e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){tl[e]=tl(e)}),(t=(function(e,t){this.rules=e,this.componentId=t,this.isStatic=eG(e),eR.registerId(this.componentId+1)}).prototype).createStyles=function(e,t,n,o){var r=o(e6(this.rules,t,n,o).join(""),""),i=this.componentId+e;n.insertRules(i,i,r)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,o){e>2&&eR.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,o)},(n=(function(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=eN();return"<style "+[n&&'nonce="'+n+'"',eb+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?eC(2):e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)return eC(2);var t,n=((t={})[eb]="",t["data-styled-version"]="5.3.11",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=eN();return o&&(n.nonce=o),[p.default.createElement("style",ec({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new eR({isServer:!0}),this.sealed=!1}).prototype).collectStyles=function(e){return this.sealed?eC(2):p.default.createElement(e1,{sheet:this.instance},e)},n.interleaveWithNodeStream=function(e){return eC(3)},e.s(["ThemeProvider",0,function(e){var t=(0,p.useContext)(ts),n=(0,p.useMemo)(function(){var n;return n=e.theme,n?eh(n)?n(t):Array.isArray(n)||"object"!=typeof n?eC(8):t?ec({},t,{},n):n:eC(14)},[e.theme,t]);return e.children?p.default.createElement(ts.Provider,{value:n},e.children):null},"css",0,te,"default",0,tl,"keyframes",0,function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=te.apply(void 0,[e].concat(n)).join("");return new e0(tr(r),r)}],855550)},777010,e=>{"use strict";let t,n,o,r,i,a,s,c,l,d,u,p,h,g,f,b=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]);function x(e){var t;let n;return t=function(e){let t=0;function n(){return e[t++]<<8|e[t++]}let o=n(),r=1,i=[0,1];for(let e=1;e<o;e++)i.push(r+=n());let a=n(),s=t;t+=a;let c=0,l=0;function d(){return 0==c&&(l=l<<8|e[t++],c=8),l>>--c&1}let u=0x80000000-1,p=0;for(let e=0;e<31;e++)p=p<<1|d();let h=[],g=0,f=0x80000000;for(;;){let e=Math.floor(((p-g+1)*r-1)/f),t=0,n=o;for(;n-t>1;){let o=t+n>>>1;e<i[o]?n=o:t=o}if(0==t)break;h.push(t);let a=g+Math.floor(f*i[t]/r),s=g+Math.floor(f*i[t+1]/r)-1;for(;((a^s)&0x40000000)==0;)p=p<<1&u|d(),a=a<<1&u,s=s<<1&u|1;for(;a&~s&0x20000000;)p=0x40000000&p|p<<1&u>>>1|d(),a=a<<1^0x40000000,s=(0x40000000^s)<<1|0x40000001;g=a,f=1+s-a}let b=o-4;return h.map(t=>{switch(t-b){case 3:return b+65792+(e[s++]<<16|e[s++]<<8|e[s++]);case 2:return b+256+(e[s++]<<8|e[s++]);case 1:return b+e[s++];default:return t-1}})}(function(e){let t=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((e,n)=>t[e.charCodeAt(0)]=n);let n=e.length,o=new Uint8Array(6*n>>3);for(let r=0,i=0,a=0,s=0;r<n;r++)s=s<<6|t[e.charCodeAt(r)],(a+=6)>=8&&(o[i++]=s>>(a-=8));return o}(e)),n=0,()=>t[n++]}function m(e,t=0){let n=[];for(;;){let o=e(),r=e();if(!r)break;t+=o;for(let e=0;e<r;e++)n.push(t+e);t+=r+1}return n}function C(e){return w(()=>{let t=m(e);if(t.length)return t})}function v(e){let t=[];for(;;){let n=e();if(0==n)break;t.push(function(e,t){let n=1+t(),o=t(),r=w(t);return k(r.length,1+e,t).flatMap((e,t)=>{let[i,...a]=e;return Array(r[t]).fill().map((e,t)=>{let r=t*o;return[i+t*n,a.map(e=>e+r)]})})}(n,e))}for(;;){var n,o;let r=e()-1;if(r<0)break;t.push((n=r,k(1+(o=e)(),1+n,o).map(e=>[e[0],e.slice(1)])))}return t.flat()}function w(e){let t=[];for(;;){let n=e(t.length);if(!n)break;t.push(n)}return t}function k(e,t,n){let o=Array(e).fill().map(()=>[]);for(let r=0;r<t;r++)(function(e,t){let n=Array(e);for(let r=0,i=0;r<e;r++){var o;n[r]=i+=1&(o=t())?~o>>1:o>>1}return n})(e,n).forEach((e,t)=>o[t].push(e));return o}function y(e){return`{${e.toString(16).toUpperCase().padStart(2,"0")}}`}function A(e){let t=e.length;if(t<4096)return String.fromCodePoint(...e);let n=[];for(let o=0;o<t;)n.push(String.fromCodePoint(...e.slice(o,o+=4096)));return n.join("")}function j(e,t){let n=e.length,o=n-t.length;for(let r=0;0==o&&r<n;r++)o=e[r]-t[r];return o}let S=55204;function E(e){return e>>24&255}function L(e){return 0xffffff&e}function M(e){return e>=44032&&e<S}function N(e){t||function(){let e=x("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");for(let[i,a]of(t=new Map(C(e).flatMap((e,t)=>e.map(e=>[e,t+1<<24]))),n=new Set(m(e)),o=new Map,r=new Map,v(e))){if(!n.has(i)&&2==a.length){let[e,t]=a,n=r.get(e);n||(n=new Map,r.set(e,n)),n.set(t,i)}o.set(i,a.reverse())}}();let i=[],a=[],s=!1;function c(e){let n=t.get(e);n&&(s=!0,e|=n),i.push(e)}for(let t of e)for(;;){if(t<128)i.push(t);else if(M(t)){let e=t-44032,n=e/588|0,o=e%588/28|0,r=e%28;c(4352+n),c(4449+o),r>0&&c(4519+r)}else{let e=o.get(t);e?a.push(...e):c(t)}if(!a.length)break;t=a.pop()}if(s&&i.length>1){let e=E(i[0]);for(let t=1;t<i.length;t++){let n=E(i[t]);if(0==n||e<=n){e=n;continue}let o=t-1;for(;;){let t=i[o+1];if(i[o+1]=i[o],i[o]=t,!o||(e=E(i[--o]))<=n)break}e=E(i[t])}}return i}function I(e){return function(e){let t=[],n=[],o=-1,i=0;for(let a of e){let e=E(a),s=L(a);if(-1==o)0==e?o=s:t.push(s);else if(i>0&&i>=e)0==e?(t.push(o,...n),n.length=0,o=s):n.push(s),i=e;else{let a=function(e,t){if(e>=4352&&e<4371&&t>=4449&&t<4470)return 44032+(e-4352)*588+(t-4449)*28;{if(M(e)&&t>4519&&t<4547&&(e-44032)%28==0)return e+(t-4519);let n=r.get(e);return n&&(n=n.get(t))?n:-1}}(o,s);a>=0?o=a:0==i&&0==e?(t.push(o),o=s):(n.push(s),i=e)}}return o>=0&&t.push(o,...n),t}(N(e))}let F=e=>Array.from(e);function O(e,t){return e.P.has(t)||e.Q.has(t)}class B extends Array{get is_emoji(){return!0}}function _(){let e,t;if(i)return;let n=x("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"),o=()=>new Set(m(n)),r=(e,t)=>t.forEach(t=>e.add(t));i=new Map(v(n)),a=o(),s=m(n),c=new Set(m(n).map(e=>s[e])),s=new Set(s),l=o(),o();let b=C(n),k=n(),y=()=>{let e=new Set;return m(n).forEach(t=>r(e,b[t])),r(e,m(n)),e};d=w(e=>{let t=w(n).map(e=>e+96);if(t.length){let o=e>=k;t[0]-=32,t=A(t),o&&(t=`Restricted[${t}]`);let r=y();return{N:t,P:r,Q:y(),M:!n(),R:o}}}),u=o(),p=new Map;let S=m(n).concat(F(u)).sort((e,t)=>e-t);for(let{V:e,M:t}of(S.forEach((e,t)=>{let o=n(),r=S[t]=o?S[t-o]:{V:[],M:new Map};r.V.push(e),u.has(e)||p.set(e,r)}),new Set(p.values()))){let n=[];for(let t of e){let e=d.filter(e=>O(e,t)),o=n.find(({G:t})=>e.some(e=>t.has(e)));o||(o={G:new Set,V:[]},n.push(o)),o.V.push(t),r(o.G,e)}let o=n.flatMap(e=>F(e.G));for(let{G:e,V:r}of n){let n=new Set(o.filter(t=>!e.has(t)));for(let e of r)t.set(e,n)}}h=new Set;let E=new Set,M=e=>h.has(e)?E.add(e):h.add(e);for(let e of d){for(let t of e.P)M(t);for(let t of e.Q)M(t)}for(let e of h)p.has(e)||E.has(e)||p.set(e,1);for(let o of(r(h,N(h).map(L)),g=(e=[],t=m(n),function t({S:n,B:o},r,i){if(!(4&n)||i!==r[r.length-1])for(let a of(2&n&&(i=r[r.length-1]),1&n&&e.push(r),o))for(let e of a.Q)t(a,[...r,e],i)}(function e(o){return{S:n(),B:w(()=>{let o=m(n).map(e=>t[e]);if(o.length)return e(o)}),Q:o}}([]),[]),e).map(e=>B.from(e)).sort(j),f=new Map,g)){let e=[f];for(let t of o){let n=e.map(e=>{let n=e.get(t);return n||(n=new Map,e.set(t,n)),n});65039===t?e.push(...n):e=n}for(let t of e)t.V=o}}function D(e){return(z(e)?"":`${R(T([e]))} `)+y(e)}function R(e){return`"${e}"\u200E`}function T(e,t=1/0,n=y){var o;let r=[];o=e[0],_(),s.has(o)&&r.push("◌"),e.length>t&&(t>>=1,e=[...e.slice(0,t),8230,...e.slice(-t)]);let i=0,a=e.length;for(let t=0;t<a;t++){let o=e[t];z(o)&&(r.push(A(e.slice(i,t))),r.push(n(o)),i=t+1)}return r.push(A(e.slice(i,a))),r.join("")}function z(e){return _(),l.has(e)}function W(e){return Error(`disallowed character: ${D(e)}`)}function U(e,t){let n=D(t),o=d.find(e=>e.P.has(t));return o&&(n=`${o.N} ${n}`),Error(`illegal mixture: ${e.N} + ${n}`)}function H(e){return Error(`illegal placement: ${e}`)}function G(e){return e.filter(e=>65039!=e)}e.s(["normalize",0,function(e){var t=function(e,t,n){if(!e)return[];_();let o=0;return e.split(".").map(e=>{let r=function(e){let t=[];for(let n=0,o=e.length;n<o;){let o=e.codePointAt(n);n+=o<65536?1:2,t.push(o)}return t}(e),l={input:r,offset:o};o+=r.length+1;try{let e,o=l.tokens=function(e,t,n){let o=[],r=[];for(e=e.slice().reverse();e.length;){let s=function(e){let t,n=f,o=e.length;for(;o&&(n=n.get(e[--o]));){let{V:r}=n;r&&(t=r,e.length=o)}return t}(e);if(s)r.length&&(o.push(t(r)),r=[]),o.push(n(s));else{let t=e.pop();if(h.has(t))r.push(t);else{let e=i.get(t);if(e)r.push(...e);else if(!a.has(t))throw W(t)}}}return r.length&&o.push(t(r)),o}(r,t,n),u=o.length;if(!u)throw Error("empty label");let g=l.output=o.flat();for(let e=g.lastIndexOf(95);e>0;)if(95!==g[--e])throw Error("underscore allowed only at start");if(!(l.emoji=u>1||o[0].is_emoji)&&g.every(e=>e<128)){if(g.length>=4&&45==g[2]&&45==g[3])throw Error(`invalid label extension: "${A(g.slice(0,4))}"`);e="ASCII"}else{let t=o.flatMap(e=>e.is_emoji?[]:e);if(t.length){if(s.has(g[0]))throw H("leading combining mark");for(let e=1;e<u;e++){let t=o[e];if(!t.is_emoji&&s.has(t[0]))throw H(`emoji + combining mark: "${A(o[e-1])} + ${T([t[0]])}"`)}!function(e){let t=e[0],n=b.get(t);if(n)throw H(`leading ${n}`);let o=e.length,r=-1;for(let i=1;i<o;i++){t=e[i];let o=b.get(t);if(o){if(r==i)throw H(`${n} + ${o}`);r=i+1,n=o}}if(r==o)throw H(`trailing ${n}`)}(g);let n=F(new Set(t)),[r]=function(e){let t=d;for(let n of e){let e=t.filter(e=>O(e,n));if(!e.length)if(d.some(e=>O(e,n)))throw U(t[0],n);else throw W(n);if(t=e,1==e.length)break}return t}(n);(function(e,t){for(let n of t)if(!O(e,n))throw U(e,n);if(e.M){let e=N(t).map(L);for(let t=1,n=e.length;t<n;t++)if(c.has(e[t])){let o=t+1;for(let r;o<n&&c.has(r=e[o]);o++)for(let n=t;n<o;n++)if(e[n]==r)throw Error(`duplicate non-spacing marks: ${D(r)}`);if(o-t>4)throw Error(`excessive non-spacing marks: ${R(T(e.slice(t-1,o)))} (${o-t}/4)`);t=o}}})(r,t),function(e,t){let n,o=[];for(let e of t){let t=p.get(e);if(1===t)return;if(t){let o=t.M.get(e);if(!(n=n?n.filter(e=>o.has(e)):F(o)).length)return}else o.push(e)}if(n){for(let t of n)if(o.every(e=>O(t,e)))throw Error(`whole-script confusable: ${e.N}/${t.N}`)}}(r,n),e=r.N}else e="Emoji"}l.type=e}catch(e){l.error=e}return l})}(e,I,G);return t.map(({input:e,error:n,output:o})=>{if(n){let o=n.message;throw Error(1==t.length?o:`Invalid label ${R(T(e,63))}: ${o}`)}return A(o)}).join(".")}],777010)},530689,(e,t,n)=>{t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},628151,(e,t,n)=>{let o,r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];n.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},n.getSymbolTotalCodewords=function(e){return r[e]},n.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},n.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');o=e},n.isKanjiModeEnabled=function(){return void 0!==o},n.toSJIS=function(e){return o(e)}},731351,(e,t,n)=>{n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2},n.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},n.from=function(e,t){if(n.isValid(e))return e;try{if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw Error("Unknown EC Level: "+e)}}catch(e){return t}}},299931,(e,t,n)=>{function o(){this.buffer=[],this.length=0}o.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=o},762091,(e,t,n)=>{function o(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}o.prototype.set=function(e,t,n,o){let r=e*this.size+t;this.data[r]=n,o&&(this.reservedBit[r]=!0)},o.prototype.get=function(e,t){return this.data[e*this.size+t]},o.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},o.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=o},271112,(e,t,n)=>{let o=e.r(628151).getSymbolSize;n.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,n=o(e),r=145===n?26:2*Math.ceil((n-13)/(2*t-2)),i=[n-7];for(let e=1;e<t-1;e++)i[e]=i[e-1]-r;return i.push(6),i.reverse()},n.getPositions=function(e){let t=[],o=n.getRowColCoords(e),r=o.length;for(let e=0;e<r;e++)for(let n=0;n<r;n++)(0!==e||0!==n)&&(0!==e||n!==r-1)&&(e!==r-1||0!==n)&&t.push([o[e],o[n]]);return t}},853658,(e,t,n)=>{let o=e.r(628151).getSymbolSize;n.getPositions=function(e){let t=o(e);return[[0,0],[t-7,0],[0,t-7]]}},546711,(e,t,n)=>{n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};n.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},n.from=function(e){return n.isValid(e)?parseInt(e,10):void 0},n.getPenaltyN1=function(e){let t=e.size,n=0,o=0,r=0,i=null,a=null;for(let s=0;s<t;s++){o=r=0,i=a=null;for(let c=0;c<t;c++){let t=e.get(s,c);t===i?o++:(o>=5&&(n+=3+(o-5)),i=t,o=1),(t=e.get(c,s))===a?r++:(r>=5&&(n+=3+(r-5)),a=t,r=1)}o>=5&&(n+=3+(o-5)),r>=5&&(n+=3+(r-5))}return n},n.getPenaltyN2=function(e){let t=e.size,n=0;for(let o=0;o<t-1;o++)for(let r=0;r<t-1;r++){let t=e.get(o,r)+e.get(o,r+1)+e.get(o+1,r)+e.get(o+1,r+1);(4===t||0===t)&&n++}return 3*n},n.getPenaltyN3=function(e){let t=e.size,n=0,o=0,r=0;for(let i=0;i<t;i++){o=r=0;for(let a=0;a<t;a++)o=o<<1&2047|e.get(i,a),a>=10&&(1488===o||93===o)&&n++,r=r<<1&2047|e.get(a,i),a>=10&&(1488===r||93===r)&&n++}return 40*n},n.getPenaltyN4=function(e){let t=0,n=e.data.length;for(let o=0;o<n;o++)t+=e.data[o];return 10*Math.abs(Math.ceil(100*t/n/5)-10)},n.applyMask=function(e,t){let o=t.size;for(let r=0;r<o;r++)for(let i=0;i<o;i++)t.isReserved(i,r)||t.xor(i,r,function(e,t,o){switch(e){case n.Patterns.PATTERN000:return(t+o)%2==0;case n.Patterns.PATTERN001:return t%2==0;case n.Patterns.PATTERN010:return o%3==0;case n.Patterns.PATTERN011:return(t+o)%3==0;case n.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(o/3))%2==0;case n.Patterns.PATTERN101:return t*o%2+t*o%3==0;case n.Patterns.PATTERN110:return(t*o%2+t*o%3)%2==0;case n.Patterns.PATTERN111:return(t*o%3+(t+o)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,i,r))},n.getBestMask=function(e,t){let o=Object.keys(n.Patterns).length,r=0,i=1/0;for(let a=0;a<o;a++){t(a),n.applyMask(a,e);let o=n.getPenaltyN1(e)+n.getPenaltyN2(e)+n.getPenaltyN3(e)+n.getPenaltyN4(e);n.applyMask(a,e),o<i&&(i=o,r=a)}return r}},105693,(e,t,n)=>{let o=e.r(731351),r=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];n.getBlocksCount=function(e,t){switch(t){case o.L:return r[(e-1)*4+0];case o.M:return r[(e-1)*4+1];case o.Q:return r[(e-1)*4+2];case o.H:return r[(e-1)*4+3];default:return}},n.getTotalCodewordsCount=function(e,t){switch(t){case o.L:return i[(e-1)*4+0];case o.M:return i[(e-1)*4+1];case o.Q:return i[(e-1)*4+2];case o.H:return i[(e-1)*4+3];default:return}}},473398,(e,t,n)=>{let o=new Uint8Array(512),r=new Uint8Array(256),i=1;for(let e=0;e<255;e++)o[e]=i,r[i]=e,256&(i<<=1)&&(i^=285);for(let e=255;e<512;e++)o[e]=o[e-255];n.log=function(e){if(e<1)throw Error("log("+e+")");return r[e]},n.exp=function(e){return o[e]},n.mul=function(e,t){return 0===e||0===t?0:o[r[e]+r[t]]}},476093,(e,t,n)=>{let o=e.r(473398);n.mul=function(e,t){let n=new Uint8Array(e.length+t.length-1);for(let r=0;r<e.length;r++)for(let i=0;i<t.length;i++)n[r+i]^=o.mul(e[r],t[i]);return n},n.mod=function(e,t){let n=new Uint8Array(e);for(;n.length-t.length>=0;){let e=n[0];for(let r=0;r<t.length;r++)n[r]^=o.mul(t[r],e);let r=0;for(;r<n.length&&0===n[r];)r++;n=n.slice(r)}return n},n.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let r=0;r<e;r++)t=n.mul(t,new Uint8Array([1,o.exp(r)]));return t}},701763,(e,t,n)=>{let o=e.r(476093);function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=o.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let n=o.mod(t,this.genPoly),r=this.degree-n.length;if(r>0){let e=new Uint8Array(this.degree);return e.set(n,r),e}return n},t.exports=r},111735,(e,t,n)=>{n.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},214477,(e,t,n)=>{let o="[0-9]+",r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",i="(?:(?![A-Z0-9 $%*+\\-./:]|"+(r=r.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";n.KANJI=RegExp(r,"g"),n.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),n.BYTE=RegExp(i,"g"),n.NUMERIC=RegExp(o,"g"),n.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let a=RegExp("^"+r+"$"),s=RegExp("^"+o+"$"),c=RegExp("^[A-Z0-9 $%*+\\-./:]+$");n.testKanji=function(e){return a.test(e)},n.testNumeric=function(e){return s.test(e)},n.testAlphanumeric=function(e){return c.test(e)}},310413,(e,t,n)=>{let o=e.r(111735),r=e.r(214477);n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!o.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},n.getBestModeForData=function(e){return r.testNumeric(e)?n.NUMERIC:r.testAlphanumeric(e)?n.ALPHANUMERIC:r.testKanji(e)?n.KANJI:n.BYTE},n.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},n.isValid=function(e){return e&&e.bit&&e.ccBits},n.from=function(e,t){if(n.isValid(e))return e;try{if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw Error("Unknown mode: "+e)}}catch(e){return t}}},725510,(e,t,n)=>{let o=e.r(628151),r=e.r(105693),i=e.r(731351),a=e.r(310413),s=e.r(111735),c=o.getBCHDigit(7973);function l(e,t){return a.getCharCountIndicator(e,t)+4}n.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},n.getCapacity=function(e,t,n){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===n&&(n=a.BYTE);let i=(o.getSymbolTotalCodewords(e)-r.getTotalCodewordsCount(e,t))*8;if(n===a.MIXED)return i;let c=i-l(n,e);switch(n){case a.NUMERIC:return Math.floor(c/10*3);case a.ALPHANUMERIC:return Math.floor(c/11*2);case a.KANJI:return Math.floor(c/13);case a.BYTE:default:return Math.floor(c/8)}},n.getBestVersionForData=function(e,t){let o,r=i.from(t,i.M);if(Array.isArray(e)){if(e.length>1){for(let t=1;t<=40;t++)if(function(e,t){let n=0;return e.forEach(function(e){let o=l(e.mode,t);n+=o+e.getBitsLength()}),n}(e,t)<=n.getCapacity(t,r,a.MIXED))return t;return}if(0===e.length)return 1;o=e[0]}else o=e;return function(e,t,o){for(let r=1;r<=40;r++)if(t<=n.getCapacity(r,o,e))return r}(o.mode,o.getLength(),r)},n.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;o.getBCHDigit(t)-c>=0;)t^=7973<<o.getBCHDigit(t)-c;return e<<12|t}},546103,(e,t,n)=>{let o=e.r(628151),r=o.getBCHDigit(1335);n.getEncodedBits=function(e,t){let n=e.bit<<3|t,i=n<<10;for(;o.getBCHDigit(i)-r>=0;)i^=1335<<o.getBCHDigit(i)-r;return(n<<10|i)^21522}},938983,(e,t,n)=>{let o=e.r(310413);function r(e){this.mode=o.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n;for(t=0;t+3<=this.data.length;t+=3)n=parseInt(this.data.substr(t,3),10),e.put(n,10);let o=this.data.length-t;o>0&&(n=parseInt(this.data.substr(t),10),e.put(n,3*o+1))},t.exports=r},488440,(e,t,n)=>{let o=e.r(310413),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(e){this.mode=o.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=45*r.indexOf(this.data[t]);n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},t.exports=i},120648,(e,t,n)=>{let o=e.r(310413);function r(e){this.mode=o.BYTE,"string"==typeof e?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}r.getBitsLength=function(e){return 8*e},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},t.exports=r},416133,(e,t,n)=>{let o=e.r(310413),r=e.r(628151);function i(e){this.mode=o.KANJI,this.data=e}i.getBitsLength=function(e){return 13*e},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");n=(n>>>8&255)*192+(255&n),e.put(n,13)}},t.exports=i},745759,(e,t,n)=>{"use strict";var o={single_source_shortest_paths:function(e,t,n){var r,i,a,s,c,l,d,u={},p={};p[t]=0;var h=o.PriorityQueue.make();for(h.push(t,0);!h.empty();)for(a in i=(r=h.pop()).value,s=r.cost,c=e[i]||{})c.hasOwnProperty(a)&&(l=s+c[a],d=p[a],(void 0===p[a]||d>l)&&(p[a]=l,h.push(a,l),u[a]=i));if(void 0!==n&&void 0===p[n])throw Error("Could not find a path from "+t+" to "+n+".");return u},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],o=t;o;)n.push(o),e[o],o=e[o];return n.reverse(),n},find_path:function(e,t,n){var r=o.single_source_shortest_paths(e,t,n);return o.extract_shortest_path_from_predecessor_list(r,n)},PriorityQueue:{make:function(e){var t,n=o.PriorityQueue,r={};for(t in e=e||{},n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r.queue=[],r.sorter=e.sorter||n.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=o},658931,(e,t,n)=>{let o=e.r(310413),r=e.r(938983),i=e.r(488440),a=e.r(120648),s=e.r(416133),c=e.r(214477),l=e.r(628151),d=e.r(745759);function u(e){return unescape(encodeURIComponent(e)).length}function p(e,t,n){let o,r=[];for(;null!==(o=e.exec(n));)r.push({data:o[0],index:o.index,mode:t,length:o[0].length});return r}function h(e){let t,n,r=p(c.NUMERIC,o.NUMERIC,e),i=p(c.ALPHANUMERIC,o.ALPHANUMERIC,e);return l.isKanjiModeEnabled()?(t=p(c.BYTE,o.BYTE,e),n=p(c.KANJI,o.KANJI,e)):(t=p(c.BYTE_KANJI,o.BYTE,e),n=[]),r.concat(i,t,n).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function g(e,t){switch(t){case o.NUMERIC:return r.getBitsLength(e);case o.ALPHANUMERIC:return i.getBitsLength(e);case o.KANJI:return s.getBitsLength(e);case o.BYTE:return a.getBitsLength(e)}}function f(e,t){let n,c=o.getBestModeForData(e);if((n=o.from(t,c))!==o.BYTE&&n.bit<c.bit)throw Error('"'+e+'" cannot be encoded with mode '+o.toString(n)+".\n Suggested mode is: "+o.toString(c));switch(n===o.KANJI&&!l.isKanjiModeEnabled()&&(n=o.BYTE),n){case o.NUMERIC:return new r(e);case o.ALPHANUMERIC:return new i(e);case o.KANJI:return new s(e);case o.BYTE:return new a(e)}}n.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(f(t,null)):t.data&&e.push(f(t.data,t.mode)),e},[])},n.fromString=function(e,t){let r=function(e,t){let n={},r={start:{}},i=["start"];for(let a=0;a<e.length;a++){let s=e[a],c=[];for(let e=0;e<s.length;e++){let l=s[e],d=""+a+e;c.push(d),n[d]={node:l,lastCount:0},r[d]={};for(let e=0;e<i.length;e++){let a=i[e];n[a]&&n[a].node.mode===l.mode?(r[a][d]=g(n[a].lastCount+l.length,l.mode)-g(n[a].lastCount,l.mode),n[a].lastCount+=l.length):(n[a]&&(n[a].lastCount=l.length),r[a][d]=g(l.length,l.mode)+4+o.getCharCountIndicator(l.mode,t))}}i=c}for(let e=0;e<i.length;e++)r[i[e]].end=0;return{map:r,table:n}}(function(e){let t=[];for(let n=0;n<e.length;n++){let r=e[n];switch(r.mode){case o.NUMERIC:t.push([r,{data:r.data,mode:o.ALPHANUMERIC,length:r.length},{data:r.data,mode:o.BYTE,length:r.length}]);break;case o.ALPHANUMERIC:t.push([r,{data:r.data,mode:o.BYTE,length:r.length}]);break;case o.KANJI:t.push([r,{data:r.data,mode:o.BYTE,length:u(r.data)}]);break;case o.BYTE:t.push([{data:r.data,mode:o.BYTE,length:u(r.data)}])}}return t}(h(e,l.isKanjiModeEnabled())),t),i=d.find_path(r.map,"start","end"),a=[];for(let e=1;e<i.length-1;e++)a.push(r.table[i[e]].node);return n.fromArray(a.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},n.rawSplit=function(e){return n.fromArray(h(e,l.isKanjiModeEnabled()))}},364367,(e,t,n)=>{let o=e.r(628151),r=e.r(731351),i=e.r(299931),a=e.r(762091),s=e.r(271112),c=e.r(853658),l=e.r(546711),d=e.r(105693),u=e.r(701763),p=e.r(725510),h=e.r(546103),g=e.r(310413),f=e.r(658931);function b(e,t,n){let o,r,i=e.size,a=h.getEncodedBits(t,n);for(o=0;o<15;o++)r=(a>>o&1)==1,o<6?e.set(o,8,r,!0):o<8?e.set(o+1,8,r,!0):e.set(i-15+o,8,r,!0),o<8?e.set(8,i-o-1,r,!0):o<9?e.set(8,15-o-1+1,r,!0):e.set(8,15-o-1,r,!0);e.set(i-8,8,1,!0)}n.create=function(e,t){let n,h;if(void 0===e||""===e)throw Error("No input text");let x=r.M;return void 0!==t&&(x=r.from(t.errorCorrectionLevel,r.M),n=p.from(t.version),h=l.from(t.maskPattern),t.toSJISFunc&&o.setToSJISFunction(t.toSJISFunc)),function(e,t,n,r){let h;if(Array.isArray(e))h=f.fromArray(e);else if("string"==typeof e){let o=t;if(!o){let t=f.rawSplit(e);o=p.getBestVersionForData(t,n)}h=f.fromString(e,o||40)}else throw Error("Invalid data");let x=p.getBestVersionForData(h,n);if(!x)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<x)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+x+".\n")}else t=x;let m=function(e,t,n){let r=new i;n.forEach(function(t){r.put(t.mode.bit,4),r.put(t.getLength(),g.getCharCountIndicator(t.mode,e)),t.write(r)});let a=(o.getSymbolTotalCodewords(e)-d.getTotalCodewordsCount(e,t))*8;for(r.getLengthInBits()+4<=a&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(0);let s=(a-r.getLengthInBits())/8;for(let e=0;e<s;e++)r.put(e%2?17:236,8);return function(e,t,n){let r,i,a=o.getSymbolTotalCodewords(t),s=a-d.getTotalCodewordsCount(t,n),c=d.getBlocksCount(t,n),l=a%c,p=c-l,h=Math.floor(a/c),g=Math.floor(s/c),f=g+1,b=h-g,x=new u(b),m=0,C=Array(c),v=Array(c),w=0,k=new Uint8Array(e.buffer);for(let e=0;e<c;e++){let t=e<p?g:f;C[e]=k.slice(m,m+t),v[e]=x.encode(C[e]),m+=t,w=Math.max(w,t)}let y=new Uint8Array(a),A=0;for(r=0;r<w;r++)for(i=0;i<c;i++)r<C[i].length&&(y[A++]=C[i][r]);for(r=0;r<b;r++)for(i=0;i<c;i++)y[A++]=v[i][r];return y}(r,e,t)}(t,n,h),C=new a(o.getSymbolSize(t));!function(e,t){let n=e.size,o=c.getPositions(t);for(let t=0;t<o.length;t++){let r=o[t][0],i=o[t][1];for(let t=-1;t<=7;t++)if(!(r+t<=-1)&&!(n<=r+t))for(let o=-1;o<=7;o++)i+o<=-1||n<=i+o||(t>=0&&t<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===t||6===t)||t>=2&&t<=4&&o>=2&&o<=4?e.set(r+t,i+o,!0,!0):e.set(r+t,i+o,!1,!0))}}(C,t);let v=C.size;for(let e=8;e<v-8;e++){let t=e%2==0;C.set(e,6,t,!0),C.set(6,e,t,!0)}return!function(e,t){let n=s.getPositions(t);for(let t=0;t<n.length;t++){let o=n[t][0],r=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)-2===t||2===t||-2===n||2===n||0===t&&0===n?e.set(o+t,r+n,!0,!0):e.set(o+t,r+n,!1,!0)}}(C,t),b(C,n,0),t>=7&&function(e,t){let n,o,r,i=e.size,a=p.getEncodedBits(t);for(let t=0;t<18;t++)n=Math.floor(t/3),o=t%3+i-8-3,r=(a>>t&1)==1,e.set(n,o,r,!0),e.set(o,n,r,!0)}(C,t),!function(e,t){let n=e.size,o=-1,r=n-1,i=7,a=0;for(let s=n-1;s>0;s-=2)for(6===s&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(r,s-n)){let o=!1;a<t.length&&(o=(t[a]>>>i&1)==1),e.set(r,s-n,o),-1==--i&&(a++,i=7)}if((r+=o)<0||n<=r){r-=o,o=-o;break}}}(C,m),isNaN(r)&&(r=l.getBestMask(C,b.bind(null,C,n))),l.applyMask(r,C),b(C,n,r),{modules:C,version:t,errorCorrectionLevel:n,maskPattern:r,segments:h}}(e,n,x,h)}},283195,(e,t,n)=>{function o(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let n=parseInt(t.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+t.slice(0,6).join("")}}n.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,r=e.scale||4;return{width:n,scale:n?4:r,margin:t,color:{dark:o(e.color.dark||"#000000ff"),light:o(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},n.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},n.getImageWidth=function(e,t){let o=n.getScale(e,t);return Math.floor((e+2*t.margin)*o)},n.qrToImageData=function(e,t,o){let r=t.modules.size,i=t.modules.data,a=n.getScale(r,o),s=Math.floor((r+2*o.margin)*a),c=o.margin*a,l=[o.color.light,o.color.dark];for(let t=0;t<s;t++)for(let n=0;n<s;n++){let d=(t*s+n)*4,u=o.color.light;t>=c&&n>=c&&t<s-c&&n<s-c&&(u=l[+!!i[Math.floor((t-c)/a)*r+Math.floor((n-c)/a)]]),e[d++]=u.r,e[d++]=u.g,e[d++]=u.b,e[d]=u.a}}},61494,(e,t,n)=>{let o=e.r(283195);n.render=function(e,t,n){var r;let i=n,a=t;void 0!==i||t&&t.getContext||(i=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),i=o.getOptions(i);let s=o.getImageWidth(e.modules.size,i),c=a.getContext("2d"),l=c.createImageData(s,s);return o.qrToImageData(l.data,e,i),r=a,c.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=s,r.width=s,r.style.height=s+"px",r.style.width=s+"px",c.putImageData(l,0,0),a},n.renderToDataURL=function(e,t,o){let r=o;void 0!==r||t&&t.getContext||(r=t,t=void 0),r||(r={});let i=n.render(e,t,r),a=r.type||"image/png",s=r.rendererOpts||{};return i.toDataURL(a,s.quality)}},3442,(e,t,n)=>{let o=e.r(283195);function r(e,t){let n=e.a/255,o=t+'="'+e.hex+'"';return n<1?o+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':o}function i(e,t,n){let o=e+t;return void 0!==n&&(o+=" "+n),o}n.render=function(e,t,n){let a=o.getOptions(t),s=e.modules.size,c=e.modules.data,l=s+2*a.margin,d=a.color.light.a?"<path "+r(a.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",u="<path "+r(a.color.dark,"stroke")+' d="'+function(e,t,n){let o="",r=0,a=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),d=Math.floor(c/t);l||a||(a=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(o+=a?i("M",l+n,.5+d+n):i("m",r,0),r=0,a=!1),l+1<t&&e[c+1]||(o+=i("h",s),s=0)):r++}return o}(c,s,a.margin)+'"/>',p='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+('viewBox="0 0 '+l+" ")+l+'" shape-rendering="crispEdges">'+d+u+"</svg>\n";return"function"==typeof n&&n(null,p),p}},698870,(e,t,n)=>{let o=e.r(530689),r=e.r(364367),i=e.r(61494),a=e.r(3442);function s(e,t,n,i,a){let s=[].slice.call(arguments,1),c=s.length,l="function"==typeof s[c-1];if(!l&&!o())throw Error("Callback required as last argument");if(l){if(c<2)throw Error("Too few arguments provided");2===c?(a=n,n=t,t=i=void 0):3===c&&(t.getContext&&void 0===a?(a=i,i=void 0):(a=i,i=n,n=t,t=void 0))}else{if(c<1)throw Error("Too few arguments provided");return 1===c?(n=t,t=i=void 0):2!==c||t.getContext||(i=n,n=t,t=void 0),new Promise(function(o,a){try{let a=r.create(n,i);o(e(a,t,i))}catch(e){a(e)}})}try{let o=r.create(n,i);a(null,e(o,t,i))}catch(e){a(e)}}n.create=r.create,n.toCanvas=s.bind(null,i.render),n.toDataURL=s.bind(null,i.renderToDataURL),n.toString=s.bind(null,function(e,t,n){return a.render(e,n)})},520369,e=>{"use strict";let t,n,o;var r,i,a=e.i(940024),s=e.i(205443),c=e.i(952145),l=e.i(974348),d=e.i(991303),u=e.i(349520),p=e.i(374638),h=e.i(443026),g=e.i(330229),f=e.i(498354),b=e.i(840290),x=e.i(35994),m=e.i(670683),C=e.i(819636),v=e.i(137402),w=e.i(855964),k=e.i(412367),y=e.i(379709),A=e.i(872900),j=e.i(766911),S=e.i(545514),E=e.i(396885),L=e.i(50847),M=e.i(483822),N=e.i(875023),I=e.i(754961),F=e.i(486777),O=e.i(368994),B=e.i(33898),_=e.i(259390),D=e.i(341807),R=e.i(972643),T=e.i(927121),z=e.i(855550),W=e.i(423063),U=e.i(43030),H=e.i(479069),G=e.i(888352),P=e.i(777010),Q=e.i(448406),Z=function(){if("u">typeof Map)return Map;function e(e,t){var n=-1;return e.some(function(e,o){return e[0]===t&&(n=o,!0)}),n}function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),o=this.__entries__[n];return o&&o[1]},t.prototype.set=function(t,n){var o=e(this.__entries__,t);~o?this.__entries__[o][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,o=e(n,t);~o&&n.splice(o,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,o=this.__entries__;n<o.length;n++){var r=o[n];e.call(t,r[1],r[0])}},t}(),V="u">typeof window&&"u">typeof document&&window.document===document,Y=e.g.Math===Math?e.g:"u">typeof self&&self.Math===Math?self:"u">typeof window&&window.Math===Math?window:Function("return this")(),J="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Y):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},q=["top","right","bottom","left","width","height","size","weight"],K="u">typeof MutationObserver,X=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e){var t=!1,n=!1,o=0;function r(){t&&(t=!1,e()),n&&a()}function i(){J(r)}function a(){var e=Date.now();if(t){if(e-o<2)return;n=!0}else t=!0,n=!1,setTimeout(i,20);o=e}return a}(this.refresh.bind(this))}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){V&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),K?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){V&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;q.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),$=function(e,t){for(var n=0,o=Object.keys(t);n<o.length;n++){var r=o[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},ee=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||Y},et=ei(0,0,0,0);function en(e){return parseFloat(e)||0}function eo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(t,n){return t+en(e["border-"+n+"-width"])},0)}var er="u">typeof SVGGraphicsElement?function(e){return e instanceof ee(e).SVGGraphicsElement}:function(e){return e instanceof ee(e).SVGElement&&"function"==typeof e.getBBox};function ei(e,t,n,o){return{x:e,y:t,width:n,height:o}}var ea=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ei(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=function(e){if(!V)return et;if(er(e)){var t;return ei(0,0,(t=e.getBBox()).width,t.height)}return function(e){var t,n=e.clientWidth,o=e.clientHeight;if(!n&&!o)return et;var r=ee(e).getComputedStyle(e),i=function(e){for(var t={},n=0,o=["top","right","bottom","left"];n<o.length;n++){var r=o[n],i=e["padding-"+r];t[r]=en(i)}return t}(r),a=i.left+i.right,s=i.top+i.bottom,c=en(r.width),l=en(r.height);if("border-box"===r.boxSizing&&(Math.round(c+a)!==n&&(c-=eo(r,"left","right")+a),Math.round(l+s)!==o&&(l-=eo(r,"top","bottom")+s)),(t=e)!==ee(t).document.documentElement){var d=Math.round(c+a)-n,u=Math.round(l+s)-o;1!==Math.abs(d)&&(c-=d),1!==Math.abs(u)&&(l-=u)}return ei(i.left,i.top,c,l)}(e)}(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),es=function(e,t){var n,o,r,i,a,s=(n=t.x,o=t.y,r=t.width,i=t.height,$(a=Object.create(("u">typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:n,y:o,width:r,height:i,top:o,right:n+r,bottom:i+o,left:n}),a);$(this,{target:e,contentRect:s})},ec=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new Z,"function"!=typeof e)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if(!("u"<typeof Element)&&Element instanceof Object){if(!(e instanceof ee(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new ea(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if(!("u"<typeof Element)&&Element instanceof Object){if(!(e instanceof ee(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new es(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),el="u">typeof WeakMap?new WeakMap:new Z,ed=function e(t){if(!(this instanceof e))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var n=new ec(t,X.getInstance(),this);el.set(this,n)};["observe","unobserve","disconnect"].forEach(function(e){ed.prototype[e]=function(){var t;return(t=el.get(this))[e].apply(t,arguments)}});var eu=void 0!==Y.ResizeObserver?Y.ResizeObserver:ed,ep=e.i(698870),eh=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],eg=function(e){return e?6:5},ef=function(e,t,n,o,r){clearTimeout(o.current),t(e),n.current=e,r&&r({state:eh[e]})},eb=function(e){var t,n,o=void 0===e?{}:e,r=o.enter,i=void 0===r||r,a=o.exit,s=void 0===a||a,c=o.preEnter,l=o.preExit,d=o.timeout,u=o.initialEntered,p=o.mountOnEnter,h=o.unmountOnExit,g=o.onChange,f=(0,O.useState)(u?2:eg(p)),b=f[0],x=f[1],m=(0,O.useRef)(b),C=(0,O.useRef)();"object"==typeof d?(t=d.enter,n=d.exit):t=n=d;var v=(0,O.useCallback)(function(){var e;switch(m.current){case 1:case 0:e=2;break;case 4:case 3:e=eg(h)}void 0!==e&&ef(e,x,m,C,g)},[g,h]),w=(0,O.useCallback)(function(e){var o=function e(o){switch(ef(o,x,m,C,g),o){case 1:t>=0&&(C.current=setTimeout(v,t));break;case 4:n>=0&&(C.current=setTimeout(v,n));break;case 0:case 3:C.current=setTimeout(function(){return e(o+1)},0)}},r=m.current<=2;"boolean"!=typeof e&&(e=!r),e?r||o(i?+!c:2):r&&o(s?l?3:4:eg(h))},[v,g,i,s,c,l,t,n,h]);return(0,O.useEffect)(function(){return function(){return clearTimeout(C.current)}},[]),[eh[b],w,v]};let ex=e=>{if("u"<typeof window)return!1;let{ethereum:t}=window;return!!((null==t?void 0:t[`is${e}`])||(null==t?void 0:t.providers)&&(null==t?void 0:t.providers.find(t=>null==t?void 0:t[`is${e}`])))},em=({background:e=!1,...t})=>(0,F.jsx)("svg",{...t,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:e?{background:"var(--ck-brand-walletConnect)"}:void 0,children:(0,F.jsx)("path",{d:"M9.58818 11.8556C13.1293 8.31442 18.8706 8.31442 22.4117 11.8556L22.8379 12.2818C23.015 12.4588 23.015 12.7459 22.8379 12.9229L21.3801 14.3808C21.2915 14.4693 21.148 14.4693 21.0595 14.3808L20.473 13.7943C18.0026 11.3239 13.9973 11.3239 11.5269 13.7943L10.8989 14.4223C10.8104 14.5109 10.6668 14.5109 10.5783 14.4223L9.12041 12.9645C8.94336 12.7875 8.94336 12.5004 9.12041 12.3234L9.58818 11.8556ZM25.4268 14.8706L26.7243 16.1682C26.9013 16.3452 26.9013 16.6323 26.7243 16.8093L20.8737 22.6599C20.6966 22.8371 20.4096 22.8371 20.2325 22.6599L16.0802 18.5076C16.0359 18.4634 15.9641 18.4634 15.9199 18.5076L11.7675 22.6599C11.5905 22.8371 11.3034 22.8371 11.1264 22.66C11.1264 22.66 11.1264 22.6599 11.1264 22.6599L5.27561 16.8092C5.09856 16.6322 5.09856 16.3451 5.27561 16.168L6.57313 14.8706C6.75019 14.6934 7.03726 14.6934 7.21431 14.8706L11.3668 19.023C11.411 19.0672 11.4828 19.0672 11.5271 19.023L15.6793 14.8706C15.8563 14.6934 16.1434 14.6934 16.3205 14.8706L20.473 19.023C20.5172 19.0672 20.589 19.0672 20.6332 19.023L24.7856 14.8706C24.9627 14.6935 25.2498 14.6935 25.4268 14.8706Z",fill:e?"white":"var(--ck-brand-walletConnect)"})}),eC=({theme:e="light",...t})=>(0,F.jsxs)("svg",{...t,width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("rect",{width:"44",height:"44",fill:"light"===e?"var(--ck-brand-trust-02)":"var(--ck-brand-trust-02b)"}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.0246 11.8662C33.4096 11.8662 33.774 12.0243 34.0421 12.2925C34.3102 12.5675 34.4615 12.9387 34.4546 13.3168C34.3859 17.4143 34.2277 20.5493 33.9321 23.0312C33.6433 25.5131 33.2102 27.3556 32.5571 28.8475C32.1171 29.8443 31.574 30.6693 30.9346 31.3706C30.0752 32.2987 29.0921 32.9725 28.0196 33.6119C27.561 33.8861 27.0843 34.1568 26.5842 34.4408C25.5172 35.0468 24.3441 35.713 23.0146 36.6025C22.5333 36.9256 21.9077 36.9256 21.4265 36.6025C20.0766 35.7026 18.8879 35.0281 17.8112 34.4173C17.5718 34.2815 17.3379 34.1488 17.109 34.0175C15.8509 33.2887 14.7165 32.5943 13.7265 31.5906C13.0665 30.9306 12.4959 30.1262 12.0421 29.1706C11.4234 27.8918 11.004 26.345 10.6946 24.3443C10.2821 21.67 10.0759 18.1706 10.0002 13.3168C9.99336 12.9387 10.1377 12.5675 10.4059 12.2925C10.674 12.0243 11.0452 11.8662 11.4302 11.8662H12.0215C13.8433 11.8731 17.8652 11.6943 21.344 8.98559C21.8596 8.58683 22.5815 8.58683 23.0971 8.98559C26.5759 11.6943 30.5977 11.8731 32.4265 11.8662H33.0246ZM29.8277 27.9331C30.2746 27.0118 30.6459 25.74 30.9277 23.9112C31.2646 21.725 31.4709 18.755 31.5671 14.7125C29.4221 14.6506 25.7371 14.2381 22.224 11.8731C18.7109 14.2312 15.0259 14.6437 12.8877 14.7125C12.9633 18.0537 13.1146 20.6525 13.3552 22.6943C13.6302 25.0181 14.0221 26.5925 14.5102 27.6993C14.8333 28.435 15.1909 28.9643 15.6171 29.4318C16.1877 30.0575 16.9096 30.5731 17.8927 31.1643C18.3005 31.409 18.7502 31.6635 19.2396 31.9406C20.1116 32.4341 21.1099 32.9991 22.224 33.7081C23.3175 33.0107 24.3014 32.4515 25.1633 31.9616C25.4231 31.8139 25.6717 31.6725 25.909 31.5356C27.119 30.8412 28.0127 30.2637 28.6796 29.59C29.1265 29.1293 29.4909 28.6275 29.8277 27.9331Z",fill:"light"===e?"var(--ck-brand-trust-01)":"var(--ck-brand-trust-01b)"})]}),ev=({...e})=>(0,F.jsxs)("svg",{...e,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("rect",{width:"32",height:"32",fill:"white"}),(0,F.jsx)("path",{d:"M18.3242 7.63647H13.6516C13.4955 7.63647 13.3704 7.76611 13.367 7.92726C13.2726 12.4568 10.9768 16.7559 7.02532 19.8009C6.89986 19.8976 6.87128 20.0792 6.963 20.21L9.69685 24.112C9.78986 24.2448 9.97107 24.2747 10.0986 24.1772C12.5694 22.2856 14.5567 20.0038 15.9879 17.4746C17.4191 20.0038 19.4065 22.2856 21.8773 24.1772C22.0047 24.2747 22.186 24.2448 22.2791 24.112L25.013 20.21C25.1045 20.0792 25.0759 19.8976 24.9506 19.8009C20.999 16.7559 18.7033 12.4568 18.609 7.92726C18.6056 7.76611 18.4803 7.63647 18.3242 7.63647Z",fill:"var(--ck-brand-argent)"})]}),ew=({...e})=>(0,F.jsx)("svg",{...e,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:`linear-gradient(
      180deg,
      var(--ck-brand-imtoken-01) 0%,
      var(--ck-brand-imtoken-02) 100%
    )`},children:(0,F.jsx)("path",{d:"M26.8543 9.96509C27.5498 19.3857 21.4942 23.8384 16.0655 24.3132C11.0184 24.7546 6.26765 21.6534 5.85087 16.8885C5.50707 12.952 7.94004 11.2761 9.8516 11.109C11.8177 10.9367 13.4698 12.2925 13.6132 13.9342C13.7512 15.5125 12.7664 16.2308 12.0815 16.2906C11.5398 16.3381 10.8584 16.0093 10.7968 15.3032C10.7441 14.6965 10.9744 14.6138 10.9182 13.9693C10.8179 12.8219 9.81731 12.6882 9.26951 12.7357C8.60654 12.7937 7.40368 13.5675 7.5725 15.4949C7.7422 17.439 9.60628 18.9751 12.0498 18.7614C14.6868 18.531 16.5227 16.4779 16.6608 13.5983C16.6595 13.4458 16.6916 13.2948 16.7548 13.156L16.7557 13.1525C16.7841 13.0922 16.8174 13.0342 16.8551 12.9793C16.9113 12.8949 16.9835 12.8016 17.0767 12.6997C17.0775 12.697 17.0775 12.697 17.0793 12.697C17.147 12.6205 17.2288 12.5379 17.3211 12.4491C18.473 11.3623 22.6214 8.79916 26.5448 9.61074C26.6277 9.62851 26.7026 9.67262 26.7584 9.73649C26.8142 9.80035 26.8478 9.88054 26.8543 9.96509",fill:"white"})}),ek=({...e})=>(0,F.jsxs)("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"var(--ck-brand-safe)"},children:[(0,F.jsx)("path",{d:"M68.7186 44H62.6472C60.8339 44 59.3646 45.4686 59.3646 47.281V56.0888C59.3646 57.9012 57.8952 59.3697 56.0819 59.3697H31.9278C30.1145 59.3697 28.6452 60.8383 28.6452 62.6507V68.719C28.6452 70.5314 30.1145 72 31.9278 72H57.48C59.2933 72 60.7417 70.5314 60.7417 68.719V63.8504C60.7417 62.038 62.2111 60.7524 64.0244 60.7524H68.7174C70.5307 60.7524 72 59.2838 72 57.4714V47.2429C72 45.4305 70.5307 44 68.7174 44H68.7186Z",fill:"#121312"}),(0,F.jsx)("path",{d:"M28.6406 31.9308C28.6406 30.1162 30.1104 28.6458 31.9243 28.6458H56.0712C57.8851 28.6458 59.3548 27.1754 59.3548 25.3608V19.285C59.3548 17.4704 57.8851 16 56.0712 16H30.5245C28.7107 16 27.2409 17.4704 27.2409 19.285V23.9666C27.2409 25.7813 25.7711 27.2516 23.9572 27.2516H19.2837C17.4698 27.2516 16 28.722 16 30.5366V40.7888C16 42.6034 17.4759 44 19.2898 44H25.3631C27.177 44 28.6468 42.5296 28.6468 40.715L28.6406 31.932V31.9308Z",fill:"#121312"}),(0,F.jsx)("path",{d:"M41.1004 37.6774H46.8995C48.7894 37.6774 50.3226 39.2117 50.3226 41.1004V46.8995C50.3226 48.7894 48.7882 50.3225 46.8995 50.3225H41.1004C39.2106 50.3225 37.6774 48.7882 37.6774 46.8995V41.1004C37.6774 39.2105 39.2118 37.6774 41.1004 37.6774V37.6774Z",fill:"#121312"})]}),ey=({background:e=!1,...t})=>(0,F.jsx)("svg",{...t,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:e?{background:"#AB9FF2"}:void 0,children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.7425 57.0705C34.1942 62.3362 28.2483 69 20.3366 69C16.5965 69 13.0001 67.5093 13 61.0322C12.9997 44.5362 36.2555 19.0003 57.8334 19C70.1084 18.9998 75 27.2474 75 36.6136C75 48.6357 66.9442 62.3824 58.9368 62.3824C56.3955 62.3824 55.1487 61.031 55.1487 58.888C55.1487 58.3288 55.2442 57.7228 55.4365 57.0705C52.7029 61.5902 47.4285 65.7849 42.4896 65.7849C38.8933 65.7849 37.0713 63.5944 37.0713 60.5187C37.0713 59.4003 37.311 58.2357 37.7425 57.0705ZM53.7586 31.6834C51.8054 31.6868 50.4738 33.2938 50.478 35.5864C50.4822 37.879 51.8198 39.5273 53.7729 39.5241C55.6789 39.5208 57.0099 37.8679 57.0058 35.5752C57.0016 33.2827 55.6646 31.6802 53.7586 31.6834ZM64.1193 31.6725C62.1661 31.6759 60.8345 33.2829 60.8387 35.5755C60.8429 37.868 62.1798 39.5164 64.1336 39.5131C66.0396 39.5099 67.3706 37.8569 67.3664 35.5643C67.3622 33.2718 66.0253 31.6693 64.1193 31.6725Z",fill:e?"#ffffff":"currentColor"})}),eA=({...e})=>(0,F.jsxs)("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"#8697FF"},children:[(0,F.jsx)("path",{d:"M76.2062 48.0657C78.7621 42.356 66.1267 26.404 54.0555 19.7581C46.4467 14.6095 38.5183 15.3169 36.9125 17.5775C33.3886 22.5385 48.5814 26.7423 58.742 31.6478C56.5579 32.5964 54.4996 34.2987 53.2893 36.4758C49.5013 32.3404 41.1872 28.7791 31.4315 31.6478C24.8574 33.5809 19.3937 38.1382 17.2821 45.0216C16.7689 44.7936 16.2009 44.6669 15.6032 44.6669C13.3176 44.6669 11.4648 46.5197 11.4648 48.8052C11.4648 51.0908 13.3176 52.9435 15.6032 52.9435C16.0268 52.9435 17.3514 52.6594 17.3514 52.6594L38.5183 52.8128C30.0532 66.2418 23.3634 68.2049 23.3634 70.5314C23.3634 72.8579 29.7643 72.2274 32.1678 71.3602C43.6732 67.2088 56.0306 54.2706 58.1511 50.5462C67.056 51.6572 74.5397 51.7886 76.2062 48.0657Z",fill:"url(#paint0_linear_60607_36577)"}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M58.65 31.6053C58.682 31.6193 58.7139 31.6332 58.7458 31.6471C59.2168 31.4616 59.1406 30.766 59.0113 30.2198C58.714 28.9643 53.5856 23.9001 48.7696 21.6318C42.1984 18.5367 37.3618 18.7007 36.6582 20.1307C37.9975 22.8695 44.1927 25.441 50.663 28.1266C53.3909 29.2589 56.1676 30.4114 58.65 31.6053Z",fill:"url(#paint1_linear_60607_36577)"}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50.4154 59.2247C49.0895 58.7182 47.592 58.2536 45.8898 57.8319C47.707 54.5801 48.0884 49.7663 46.3721 46.7226C43.9635 42.4512 40.9399 40.1777 33.9139 40.1777C30.0495 40.1777 19.6451 41.4794 19.4603 50.1648C19.441 51.0763 19.4599 51.9118 19.5259 52.68L38.5175 52.8176C35.9568 56.8798 33.5586 59.8928 31.4589 62.1841C33.9831 62.8309 36.0657 63.3738 37.9775 63.8722C39.7885 64.3443 41.4462 64.7764 43.1809 65.2191C45.8007 63.3102 48.2635 61.2288 50.4154 59.2247Z",fill:"url(#paint2_linear_60607_36577)"}),(0,F.jsx)("path",{d:"M17.0296 51.7821C17.8058 58.38 21.5555 60.9657 29.2177 61.7309C36.8799 62.4961 41.2751 61.9828 47.1265 62.5151C52.0136 62.9598 56.3772 65.4502 57.996 64.5895C59.4529 63.815 58.6378 61.0167 56.6884 59.2214C54.1614 56.8943 50.6641 55.2763 44.5104 54.7021C45.7368 51.3443 45.3931 46.6362 43.4885 44.0748C40.7345 40.3711 35.6513 38.6967 29.2177 39.4282C22.4962 40.1926 16.0556 43.5018 17.0296 51.7821Z",fill:"url(#paint3_linear_60607_36577)"}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("linearGradient",{id:"paint0_linear_60607_36577",x1:"30.666",y1:"43.0094",x2:"75.6558",y2:"55.7677",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"white"}),(0,F.jsx)("stop",{offset:"1",stopColor:"white"})]}),(0,F.jsxs)("linearGradient",{id:"paint1_linear_60607_36577",x1:"68.0842",y1:"42.1521",x2:"35.6221",y2:"9.60636",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#7258DC"}),(0,F.jsx)("stop",{offset:"1",stopColor:"#797DEA",stopOpacity:"0"})]}),(0,F.jsxs)("linearGradient",{id:"paint2_linear_60607_36577",x1:"51.3184",y1:"60.3591",x2:"20.1383",y2:"42.4347",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#7461EA"}),(0,F.jsx)("stop",{offset:"1",stopColor:"#BFC2FF",stopOpacity:"0"})]}),(0,F.jsxs)("linearGradient",{id:"paint3_linear_60607_36577",x1:"33.3531",y1:"42.6732",x2:"54.4308",y2:"69.4547",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"white"}),(0,F.jsx)("stop",{offset:"0.983895",stopColor:"#D5CEFF"})]})]})]});var ej=({background:e=!1,...t})=>(0,F.jsxs)("svg",{...t,style:e?{background:"linear-gradient(0deg, var(--ck-brand-metamask-12), var(--ck-brand-metamask-11))",borderRadius:"27.5%"}:void 0,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("path",{d:"M27.2684 4.03027L17.5018 11.2841L19.3079 7.00442L27.2684 4.03027Z",fill:"var(--ck-brand-metamask-02)",stroke:"var(--ck-brand-metamask-02)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M4.7218 4.03027L14.4099 11.3528L12.6921 7.00442L4.7218 4.03027Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M23.7544 20.8438L21.1532 24.8289L26.7187 26.3602L28.3187 20.9321L23.7544 20.8438Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M3.69104 20.9321L5.28117 26.3602L10.8467 24.8289L8.24551 20.8438L3.69104 20.9321Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M10.5327 14.1108L8.98181 16.4568L14.5081 16.7022L14.3117 10.7637L10.5327 14.1108Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M21.4576 14.1111L17.6295 10.6953L17.5018 16.7025L23.0182 16.4571L21.4576 14.1111Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M10.8469 24.8292L14.1647 23.2096L11.2984 20.9717L10.8469 24.8292Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M17.8257 23.2096L21.1531 24.8292L20.6918 20.9717L17.8257 23.2096Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M21.1531 24.8296L17.8257 23.21L18.0906 25.3793L18.0612 26.2921L21.1531 24.8296Z",fill:"var(--ck-brand-metamask-06)",stroke:"var(--ck-brand-metamask-06)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M10.8469 24.8296L13.9388 26.2921L13.9192 25.3793L14.1647 23.21L10.8469 24.8296Z",fill:"var(--ck-brand-metamask-06)",stroke:"var(--ck-brand-metamask-06)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M13.9877 19.5389L11.2196 18.7242L13.1729 17.8311L13.9877 19.5389Z",fill:"var(--ck-brand-metamask-09)",stroke:"var(--ck-brand-metamask-09)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M18.0023 19.5389L18.8171 17.8311L20.7802 18.7242L18.0023 19.5389Z",fill:"var(--ck-brand-metamask-09)",stroke:"var(--ck-brand-metamask-09)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M10.8468 24.8289L11.3179 20.8438L8.24561 20.9321L10.8468 24.8289Z",fill:"var(--ck-brand-metamask-03)",stroke:"var(--ck-brand-metamask-03)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M20.6821 20.8438L21.1532 24.8289L23.7544 20.9321L20.6821 20.8438Z",fill:"var(--ck-brand-metamask-03)",stroke:"var(--ck-brand-metamask-03)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M23.0182 16.4565L17.5018 16.7019L18.0122 19.5387L18.827 17.8308L20.7902 18.7239L23.0182 16.4565Z",fill:"var(--ck-brand-metamask-03)",stroke:"var(--ck-brand-metamask-03)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M11.2198 18.7239L13.1829 17.8308L13.9878 19.5387L14.5081 16.7019L8.98181 16.4565L11.2198 18.7239Z",fill:"var(--ck-brand-metamask-03)",stroke:"var(--ck-brand-metamask-03)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M8.98181 16.4565L11.2983 20.9718L11.2198 18.7239L8.98181 16.4565Z",fill:"var(--ck-brand-metamask-10)",stroke:"var(--ck-brand-metamask-10)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M20.7901 18.7239L20.6919 20.9718L23.0181 16.4565L20.7901 18.7239Z",fill:"var(--ck-brand-metamask-10)",stroke:"var(--ck-brand-metamask-10)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M14.508 16.7021L13.9878 19.5389L14.6356 22.886L14.7828 18.4788L14.508 16.7021Z",fill:"var(--ck-brand-metamask-10)",stroke:"var(--ck-brand-metamask-10)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M17.5017 16.7021L17.2367 18.4689L17.3545 22.886L18.0121 19.5389L17.5017 16.7021Z",fill:"var(--ck-brand-metamask-10)",stroke:"var(--ck-brand-metamask-10)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M18.0121 19.5388L17.3545 22.886L17.8257 23.2099L20.6918 20.972L20.79 18.7241L18.0121 19.5388Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M11.2196 18.7241L11.2981 20.972L14.1644 23.2099L14.6355 22.886L13.9877 19.5388L11.2196 18.7241Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M18.0615 26.2917L18.0908 25.3788L17.8455 25.1628H14.145L13.9192 25.3788L13.9388 26.2917L10.8469 24.8291L11.9267 25.7126L14.1155 27.234H17.875L20.0736 25.7126L21.1533 24.8291L18.0615 26.2917Z",fill:"var(--ck-brand-metamask-07)",stroke:"var(--ck-brand-metamask-07)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M17.8258 23.2096L17.3546 22.8857H14.6357L14.1646 23.2096L13.9191 25.379L14.1449 25.163H17.8454L18.0907 25.379L17.8258 23.2096Z",fill:"var(--ck-brand-metamask-04)",stroke:"var(--ck-brand-metamask-04)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M27.6806 11.7552L28.5149 7.75041L27.2683 4.03027L17.8257 11.0387L21.4575 14.1109L26.591 15.6128L27.7296 14.2876L27.2389 13.9342L28.0241 13.2178L27.4156 12.7465L28.2007 12.1478L27.6806 11.7552Z",fill:"var(--ck-brand-metamask-05)",stroke:"var(--ck-brand-metamask-05)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M3.48486 7.75041L4.3192 11.7552L3.78916 12.1478L4.57441 12.7465L3.97566 13.2178L4.7609 13.9342L4.27012 14.2876L5.39892 15.6128L10.5325 14.1109L14.1644 11.0387L4.72164 4.03027L3.48486 7.75041Z",fill:"var(--ck-brand-metamask-05)",stroke:"var(--ck-brand-metamask-05)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M26.591 15.6122L21.4575 14.1104L23.0181 16.4564L20.6919 20.9716L23.7544 20.9323H28.3186L26.591 15.6122Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M10.5326 14.1104L5.39897 15.6122L3.69104 20.9323H8.24551L11.2982 20.9716L8.98168 16.4564L10.5326 14.1104Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M17.5018 16.7018L17.8258 11.0381L19.3177 7.00391H12.6921L14.1645 11.0381L14.5081 16.7018L14.6258 18.4883L14.6356 22.8856H17.3546L17.3742 18.4883L17.5018 16.7018Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"})]}),eS=({background:e=!1,...t})=>(0,F.jsxs)("svg",{...t,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("circle",{cx:"10",cy:"10",r:"10",fill:"var(--ck-brand-coinbaseWallet)"}),e&&(0,F.jsx)("rect",{rx:"27%",width:"20",height:"20",fill:"var(--ck-brand-coinbaseWallet)"}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z",fill:"white"})]}),eE=()=>(0,F.jsx)("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M69.3985 17.8729C71.1916 19.6658 72.1993 22.0974 72.2 24.633C72.2023 26.8681 71.4164 29.0324 69.9804 30.7453C68.5444 32.4582 66.5504 33.61 64.349 33.998V34.1876C66.5344 34.6137 68.5036 35.7864 69.9194 37.5047C71.3351 39.223 72.1093 41.3801 72.1093 43.6064C72.1093 45.8327 71.3351 47.9898 69.9194 49.7081C68.5036 51.4264 66.5344 52.5991 64.349 53.0252V53.2134C66.6856 53.6659 68.7701 54.972 70.1962 56.8773C71.6224 58.7825 72.2881 61.1504 72.0635 63.5196C71.839 65.8888 70.7404 68.0896 68.9817 69.6931C67.223 71.2966 64.9303 72.188 62.5502 72.1935C57.9579 72.1935 54.0768 68.8855 53.1774 64.5316H52.9408C52.512 66.6983 51.3421 68.6482 49.632 70.0464C47.9219 71.4445 45.7783 72.2037 43.5693 72.1935C38.977 72.1935 35.0959 68.8855 34.1965 64.5316H33.9599C33.6143 66.2325 32.8128 67.8076 31.641 69.0882C30.4693 70.3688 28.9715 71.3069 27.3077 71.8021C25.644 72.2973 23.8769 72.3309 22.1955 71.8995C20.5141 71.468 18.9816 70.5877 17.7619 69.3526C16.5423 68.1175 15.6813 66.5741 15.2711 64.8876C14.861 63.201 14.917 61.4347 15.4333 59.7776C15.9496 58.1204 16.9067 56.6347 18.2022 55.4795C19.4977 54.3242 21.083 53.5428 22.7884 53.2188V53.0306C20.603 52.6045 18.6337 51.4318 17.218 49.7135C15.8022 47.9952 15.0281 45.8381 15.0281 43.6118C15.0281 41.3854 15.8022 39.2284 17.218 37.5101C18.6337 35.7917 20.603 34.6191 22.7884 34.1929V34.0034C21.0847 33.6728 19.5027 32.8862 18.2109 31.7274C16.9192 30.5685 15.9661 29.081 15.4533 27.4232C14.9405 25.7655 14.8871 23.9996 15.299 22.3139C15.7108 20.6283 16.5723 19.0859 17.7918 17.8512C19.0112 16.6166 20.5429 15.7359 22.2235 15.3031C23.9041 14.8703 25.6706 14.9015 27.3348 15.3935C28.9991 15.8855 30.4986 16.8198 31.6736 18.0968C32.8486 19.3738 33.655 20.9457 34.007 22.6449H34.2436C34.6954 20.4915 35.8758 18.5596 37.5858 17.1748C39.2958 15.79 41.431 15.0369 43.6315 15.0425C45.832 15.048 47.9634 15.8118 49.6665 17.2052C51.3695 18.5985 52.5402 20.5363 52.9811 22.692H53.2178C54.1682 18.3381 57.9996 15.0246 62.6376 15.0717C65.1735 15.0724 67.6053 16.08 69.3985 17.8729ZM31.9823 29.5165C30.2472 29.5165 28.8497 30.9389 28.8758 32.6738C28.9236 35.8456 28.9876 40.7732 28.9876 44.421C28.9876 48.0656 28.9237 52.9878 28.8759 56.1599C28.8498 57.8992 30.2516 59.3256 31.9912 59.3256H55.6872C57.4267 59.3256 58.8286 57.8992 58.8024 56.1599C58.7546 52.9878 58.6908 48.0656 58.6908 44.421C58.6908 40.7732 58.7547 35.8456 58.8025 32.6738C58.8287 30.9389 57.433 29.5165 55.6979 29.5165L31.9823 29.5165Z",fill:"var(--ck-body-color)"})}),eL=({...e})=>(0,F.jsxs)("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"white"},children:[(0,F.jsx)("mask",{id:"mask0_2091_4394",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"13",y:"9",width:"62",height:"71",children:(0,F.jsx)("path",{d:"M44 9L13 26.75V62.25L44 80L75 62.25V26.75L44 9ZM31.7577 24.3492H56.1513L59.0935 36.684H28.9307L31.7577 24.3492ZM41.5613 61.2993L36.2955 66.161H31.8427L20.6924 46.9369L28.8701 40.9079L36.0953 45.4627V53.6578L41.5552 58.8504V61.2993H41.5613ZM37.9759 53.1584L38.7888 45.4326L36.1256 38.5432H51.9229L49.3204 45.4326L50.0787 53.1283L44 53.1584H37.9759ZM56.2059 66.1069H51.8076L46.5419 61.2993V58.8564L52.0018 53.6638V45.4627L59.1421 40.8537L67.2955 46.9369L56.2059 66.1069Z",fill:"#002D74"})}),(0,F.jsxs)("g",{mask:"url(#mask0_2091_4394)",children:[(0,F.jsx)("rect",{y:"8",width:"44",height:"72",fill:"url(#paint0_linear_2091_4394)"}),(0,F.jsx)("rect",{x:"88",y:"80",width:"44",height:"72",transform:"rotate(-180 88 80)",fill:"url(#paint1_linear_2091_4394)"})]}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("linearGradient",{id:"paint0_linear_2091_4394",x1:"22",y1:"8",x2:"22",y2:"80",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#010935"}),(0,F.jsx)("stop",{offset:"1",stopColor:"#142C70"})]}),(0,F.jsxs)("linearGradient",{id:"paint1_linear_2091_4394",x1:"110",y1:"80",x2:"110",y2:"152",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#010935"}),(0,F.jsx)("stop",{offset:"1",stopColor:"#142C70"})]})]})]});let eM=/^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/,eN=(e,t="••••")=>{if(!e)return"";let n=e.match(eM);return n?`${n[1]}${t}${n[2]}`:e},eI=(e,t=2)=>{if(e<1e4)return e.toFixed(2);var n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"m"},{value:1e9,symbol:"g"},{value:1e12,symbol:"t"},{value:1e15,symbol:"p"},{value:1e18,symbol:"e"}].reverse().find(function(t){return e>=t.value});return n?(e/n.value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n.symbol:"0"},eF=()=>{var e;let t=(0,B.detect)();return null!=(e=null==t?void 0:t.name)?e:""},eO=()=>{var e;let t=(0,B.detect)();return null!=(e=null==t?void 0:t.os)?e:""},eB=()=>eO().toLowerCase().includes("android"),e_=()=>eB()||eO().toLowerCase().includes("ios");function eD(e){return O.default.Children.toArray(e).reduce((e,t)=>t.type===O.default.Fragment?e.concat(eD(t.props.children)):(e.push(t),e),[])}let eR={mock:{icon:(0,F.jsx)(({...e})=>(0,F.jsxs)("svg",{...e,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)"},children:[(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5611 8.12948C21.0082 7.90729 21.5007 7.79167 22 7.79167C22.4993 7.79167 22.9919 7.90729 23.439 8.12948L23.4408 8.1304L33.0387 12.9293C33.577 13.197 34.031 13.61 34.3478 14.121C34.6649 14.6323 34.833 15.2218 34.8333 15.8234V27.2595C34.833 27.8611 34.6649 28.4511 34.3478 28.9624C34.031 29.4733 33.578 29.8858 33.0398 30.1535L23.4411 34.9528C22.9919 35.1775 22.4963 35.2947 21.994 35.2947C21.4918 35.2947 20.9964 35.1777 20.5472 34.9529L10.9475 30.1531L10.9452 30.1519C10.4071 29.8808 9.95535 29.4646 9.6411 28.9504C9.32739 28.437 9.16312 27.8464 9.16673 27.2448L9.16675 27.2417L10.0004 27.2475H9.16673V27.2448V15.8239C9.16705 15.2223 9.33518 14.6322 9.65222 14.121C9.96906 13.61 10.4221 13.1976 10.9604 12.9298L20.5592 8.1304L20.5611 8.12948ZM21.3031 9.62267L11.8706 14.3389L22 19.4036L32.1294 14.3389L22.697 9.62267C22.4806 9.51531 22.2416 9.45905 22 9.45905C21.7585 9.45905 21.5194 9.51534 21.3031 9.62267ZM10.8341 15.8241C10.8341 15.7785 10.8362 15.733 10.8401 15.6878L21.1663 20.8509V33.3983L11.6955 28.6629C11.4352 28.5315 11.2159 28.3297 11.0638 28.0809C10.9116 27.8318 10.8321 27.5452 10.8341 27.2533L10.8341 27.2475V15.8241ZM22.8337 33.3923L32.2967 28.6608C32.5576 28.5312 32.7772 28.3313 32.9308 28.0836C33.0844 27.836 33.1658 27.5504 33.166 27.259V15.8243C33.1659 15.7786 33.1639 15.7331 33.1599 15.6878L22.8337 20.8509V33.3923Z",fill:"url(#paint0_linear_3546_7073)"}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.8341 15.8241C10.8341 15.7785 10.8362 15.733 10.8401 15.6878L21.1663 20.8509V33.3983L11.6955 28.6629C11.4352 28.5315 11.2159 28.3297 11.0638 28.0809C10.9116 27.8318 10.8321 27.5452 10.8341 27.2533L10.8341 27.2475V15.8241Z",fill:"url(#paint1_linear_3546_7073)",fillOpacity:"0.3"}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("linearGradient",{id:"paint0_linear_3546_7073",x1:"22",y1:"7.79167",x2:"22",y2:"35.2947",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"white"}),(0,F.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0.7"})]}),(0,F.jsxs)("linearGradient",{id:"paint1_linear_3546_7073",x1:"22",y1:"7.79167",x2:"22",y2:"35.2947",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"white"}),(0,F.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0.7"})]})]})]}),{})},argent:{name:"Argent",icon:(0,F.jsx)(ev,{}),downloadUrls:{download:"https://connect.family.co/v0/download/argent",android:"https://play.google.com/store/apps/details?id=im.argent.contractwalletclient",ios:"https://apps.apple.com/app/argent/id1358741926"},getWalletConnectDeeplink:e=>eB()?e:`https://argent.link/app/wc?uri=${encodeURIComponent(e)}`},"coinbaseWallet, coinbaseWalletSDK":{name:"Coinbase Wallet",shortName:"Coinbase",icon:(0,F.jsx)(eS,{background:!0}),iconShape:"squircle",downloadUrls:{download:"https://connect.family.co/v0/download/coinbasewallet",website:"https://www.coinbase.com/wallet/getting-started-extension",android:"https://play.google.com/store/apps/details?id=org.toshi",ios:"https://apps.apple.com/app/coinbase-wallet-store-crypto/id1278383455",chrome:"https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad"},getWalletConnectDeeplink:e=>`https://go.cb-w.com/wc?uri=${encodeURIComponent(e)}`},"com.coinbase.wallet":{name:"Coinbase Wallet",shortName:"Coinbase",icon:(0,F.jsx)(eS,{background:!0}),iconShape:"circle",downloadUrls:{download:"https://connect.family.co/v0/download/coinbasewallet",website:"https://www.coinbase.com/wallet/getting-started-extension",android:"https://play.google.com/store/apps/details?id=org.toshi",ios:"https://apps.apple.com/app/coinbase-wallet-store-crypto/id1278383455",chrome:"https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad"},getWalletConnectDeeplink:e=>`https://go.cb-w.com/wc?uri=${encodeURIComponent(e)}`},"com.crypto.wallet":{name:"Crypto.com",shortName:"Crypto"},dawn:{name:"Dawn Wallet",shortName:"Dawn",downloadUrls:{download:"https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782",website:"https://www.dawnwallet.xyz/",ios:"https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782"}},"co.family.wallet":{name:"Family",shortName:"Family",icon:(0,F.jsx)(({...e})=>(0,F.jsx)("svg",{...e,width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{backgroundSize:"100% 100%",backgroundImage:'url("data:image/png;base64,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")'}}),{}),iconShape:"squircle",downloadUrls:{download:"https://connect.family.co/v0/download/family",website:"https://family.co",ios:"https://family.co/download"},getWalletConnectDeeplink:e=>eB()?e:`familywallet://wc?uri=${encodeURIComponent(e)}`},familyAccountsProvider:{name:"Family",shortName:"Family",icon:(0,F.jsx)(eE,{}),iconConnector:(0,F.jsx)(eE,{}),iconShape:"squircle"},frame:{name:"Frame",icon:(0,F.jsx)(({...e})=>(0,F.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("rect",{width:"32",height:"32",fill:"white"}),(0,F.jsx)("path",{d:"M24.9055 15.8824V8.30065C24.9055 7.63399 24.3583 7.08497 23.6938 7.08497H16.1238C16.0456 7.08497 15.9805 7.05882 15.9153 7.00654L15.0033 6.0915C14.9511 6.03922 14.873 6 14.7948 6H7.21173C6.54723 6 6 6.53595 6 7.21569V14.7974C6 14.8758 6.02606 14.9412 6.07818 15.0065L6.99023 15.9216C7.04235 15.9739 7.08143 16.0523 7.08143 16.1307V23.7124C7.08143 24.3791 7.62866 24.9281 8.29316 24.9281H15.8762C15.9544 24.9281 16.0195 24.9542 16.0847 25.0065L16.9967 25.9216C17.0489 25.9739 17.127 26 17.2052 26H24.7883C25.4528 26 26 25.4641 26 24.7843V17.2026C26 17.1242 25.9739 17.0588 25.9218 16.9935L25.0098 16.0784C24.9446 16.0261 24.9055 15.9608 24.9055 15.8824ZM19.759 19.9346H12.241C12.1498 19.9346 12.0717 19.8562 12.0717 19.7647V12.2353C12.0717 12.1438 12.1498 12.0654 12.241 12.0654H19.759C19.8502 12.0654 19.9283 12.1438 19.9283 12.2353V19.7647C19.9414 19.8562 19.8632 19.9346 19.759 19.9346Z",fill:"#00D2BE"})]}),{}),iconShouldShrink:!0,downloadUrls:{download:"https://connect.family.co/v0/download/frame",website:"https://frame.sh",chrome:"https://chrome.google.com/webstore/detail/frame-companion/ldcoohedfbjoobcadoglnnmmfbdlmmhf",firefox:"https://addons.mozilla.org/en-US/firefox/addon/frame-extension",brave:"https://chrome.google.com/webstore/detail/frame-companion/ldcoohedfbjoobcadoglnnmmfbdlmmhf"},getWalletConnectDeeplink:e=>e},frontier:{name:"Frontier Wallet",shortName:"Frontier",icon:(0,F.jsx)(({...e})=>(0,F.jsx)("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"#CC703C"},children:(0,F.jsx)("path",{d:"M63.6429 20L63.3645 20.7254L62.4521 23.0445L61.8461 24.5395C57.2427 35.7491 53.6629 41.0688 49.8557 41.0688C48.8938 41.0936 47.9371 40.9212 47.0465 40.5625C46.156 40.2038 45.3512 39.6667 44.6834 38.9852L44.1979 38.5518C42.9885 37.4538 42.4799 37.1831 41.3154 37.1832C40.7094 37.1832 39.6238 37.9435 38.2521 39.7303C36.4147 42.2912 34.8522 45.0327 33.59 47.9106L33.4353 48.2482L49.7645 48.2483L47.7312 52.4075H32.4845L32.4843 69.44L28 69.44L28.0001 20L63.6429 20ZM57.2889 24.1518L32.4843 24.1518L32.4843 40.6262C35.4564 35.5545 38.2816 33.0086 41.32 33.0086C42.3421 32.9765 43.3595 33.1534 44.3082 33.5284C45.2569 33.9034 46.1159 34.468 46.8311 35.1865L47.3323 35.6335C48.4611 36.6585 48.8956 36.8941 49.8604 36.8941C50.9211 36.8957 53.7433 32.4855 57.2889 24.1518Z",fill:"white"})}),{}),downloadUrls:{download:"https://connect.family.co/v0/download/frontier",ios:"https://apps.apple.com/app/frontier-crypto-defi-wallet/id1482380988",android:"https://play.google.com/store/apps/details?id=com.frontierwallet",website:"https://frontier.xyz/",chrome:"https://chrome.google.com/webstore/detail/frontier-wallet/kppfdiipphfccemcignhifpjkapfbihd"},getWalletConnectDeeplink:e=>eB()?e:`frontier://wc?uri=${encodeURIComponent(e)}`},injected:{name:"Browser Wallet",shortName:"Browser",icon:(0,F.jsx)(({...e})=>(0,F.jsx)("svg",{...e,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.6505 3.64041C15.6501 3.64062 15.6497 3.64083 15.6493 3.64103L6.05165 8.43985L16.2501 13.5391L26.4484 8.43987L16.8508 3.64103C16.8504 3.64083 16.85 3.64063 16.8496 3.64043C16.6632 3.54806 16.458 3.5 16.25 3.5C16.042 3.5 15.8369 3.54806 15.6505 3.64041ZM28 10.4592L17.5001 15.7091L17.5 28.5205L27.248 23.6465L27.2508 23.6452C27.4757 23.5334 27.665 23.3611 27.7973 23.1477C27.9297 22.9342 27.9999 22.6881 28 22.4369V10.4592ZM15 28.527L15.0001 15.7091L4.50006 10.4591V22.4333C4.49831 22.6849 4.56687 22.9319 4.69807 23.1466C4.82896 23.3608 5.01696 23.5342 5.24095 23.6475C5.24148 23.6477 5.242 23.648 5.24253 23.6483L15 28.527ZM14.5207 31.0824L4.12104 25.8826L4.11759 25.8809C3.47681 25.558 2.93902 25.0625 2.56486 24.4502C2.19154 23.8394 1.99597 23.1365 2.00006 22.4207V10.0486C2.00044 9.33234 2.20062 8.62972 2.5781 8.021C2.95529 7.41274 3.49457 6.92167 4.13537 6.60291C4.13585 6.60267 4.13633 6.60243 4.13681 6.60219L14.534 1.40359L14.5368 1.40221C15.0692 1.13767 15.6556 1 16.25 1C16.8445 1 17.4309 1.13767 17.9633 1.40221L17.966 1.40358L28.3633 6.60219C28.3638 6.60245 28.3643 6.6027 28.3648 6.60295C29.0055 6.92171 29.5448 7.41276 29.922 8.021C30.2994 8.62973 30.4996 9.33168 30.5 10.0479V22.4376C30.4996 23.1538 30.2994 23.8565 29.922 24.4652C29.5448 25.0734 29.0056 25.5644 28.365 25.8831C28.3644 25.8834 28.3638 25.8837 28.3633 25.884L17.9664 31.0824C17.9663 31.0825 17.9665 31.0824 17.9664 31.0824C17.4316 31.3499 16.8415 31.4894 16.2435 31.4894C15.6455 31.4894 15.0554 31.3499 14.5207 31.0824C14.5205 31.0824 14.5208 31.0825 14.5207 31.0824Z",fill:"#CCCCCC"})}),{})},"metaMask, metaMask-io, io.metamask, io.metamask.mobile, metaMaskSDK":{name:"MetaMask",icon:(0,F.jsx)(ej,{}),iconConnector:(0,F.jsx)(ej,{}),iconShouldShrink:!0,downloadUrls:{download:"https://connect.family.co/v0/download/metamask",website:"https://metamask.io/download/",android:"https://play.google.com/store/apps/details?id=io.metamask",ios:"https://apps.apple.com/app/metamask/id1438144202",chrome:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",firefox:"https://addons.mozilla.org/firefox/addon/ether-metamask/",brave:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",edge:"https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm"},getWalletConnectDeeplink:e=>eB()?e:`https://metamask.app.link/wc?uri=${encodeURIComponent(e)}`},"app.phantom":{name:"Phantom",icon:(0,F.jsx)(ey,{background:!0}),iconShape:"squircle",downloadUrls:{download:"https://phantom.app/download",website:"https://phantom.app",android:"https://play.google.com/store/apps/details?id=app.phantom",ios:"https://apps.apple.com/app/phantom-crypto-wallet/id1598432977",chrome:"https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa"},getWalletConnectDeeplink:e=>eB()?e:`https://phantom.app/ul/wc?uri=${encodeURIComponent(e)}`},"me.rainbow":{name:"Rainbow Wallet",shortName:"Rainbow",icon:(0,F.jsx)(({round:e=!1,...t})=>(0,F.jsx)("svg",{...t,width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{backgroundSize:"100% 100%",backgroundImage:`url("${e?"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF84XzU1NCkiPgo8bWFzayBpZD0ibWFzazBfOF81NTQiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIj4KPGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNjAiIGZpbGw9IiNEOUQ5RDkiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzhfNTU0KSI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfOF81NTQpIi8+CjwvZz4KPHBhdGggZD0iTTI2LjY2NjcgNDEuNjY2N0gzMS42NjY3QzU3LjQ0IDQxLjY2NjcgNzguMzMzMyA2Mi41NiA3OC4zMzMzIDg4LjMzMzNWOTMuMzMzM0g4OC4zMzMzQzkxLjA5NDggOTMuMzMzMyA5My4zMzMzIDkxLjA5NDcgOTMuMzMzMyA4OC4zMzMzQzkzLjMzMzMgNTQuMjc1OCA2NS43MjQyIDI2LjY2NjcgMzEuNjY2NyAyNi42NjY3QzI4LjkwNTIgMjYuNjY2NyAyNi42NjY3IDI4LjkwNTIgMjYuNjY2NyAzMS42NjY3VjQxLjY2NjdaIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfOF81NTQpIi8+CjxwYXRoIGQ9Ik04MCA4OC4zMzMzSDkzLjMzMzNDOTMuMzMzMyA5MS4wOTQ4IDkxLjA5NDcgOTMuMzMzMyA4OC4zMzMzIDkzLjMzMzNIODBWODguMzMzM1oiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl84XzU1NCkiLz4KPHBhdGggZD0iTTMxLjY2NjcgMjYuNjY2N0wzMS42NjY3IDQwSDI2LjY2NjdMMjYuNjY2NyAzMS42NjY3QzI2LjY2NjcgMjguOTA1MiAyOC45MDUyIDI2LjY2NjcgMzEuNjY2NyAyNi42NjY3WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzhfNTU0KSIvPgo8cGF0aCBkPSJNMjYuNjY2NiA0MEgzMS42NjY2QzU4LjM2MDQgNDAgODAgNjEuNjM5NiA4MCA4OC4zMzMzVjkzLjMzMzNINjVWODguMzMzM0M2NSA2OS45MjM4IDUwLjA3NjEgNTUgMzEuNjY2NiA1NUgyNi42NjY2VjQwWiIgZmlsbD0idXJsKCNwYWludDRfcmFkaWFsXzhfNTU0KSIvPgo8cGF0aCBkPSJNNjYuNjY2NiA4OC4zMzMzSDgwVjkzLjMzMzNINjYuNjY2NlY4OC4zMzMzWiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzhfNTU0KSIvPgo8cGF0aCBkPSJNMjYuNjY2NiA1My4zMzMzTDI2LjY2NjYgNDBMMzEuNjY2NiA0MEwzMS42NjY2IDUzLjMzMzNIMjYuNjY2NloiIGZpbGw9InVybCgjcGFpbnQ2X2xpbmVhcl84XzU1NCkiLz4KPHBhdGggZD0iTTI2LjY2NjYgNjEuNjY2N0MyNi42NjY2IDY0LjQyODEgMjguOTA1MiA2Ni42NjY3IDMxLjY2NjYgNjYuNjY2N0M0My42MzI4IDY2LjY2NjcgNTMuMzMzMyA3Ni4zNjcyIDUzLjMzMzMgODguMzMzM0M1My4zMzMzIDkxLjA5NDcgNTUuNTcxOSA5My4zMzMzIDU4LjMzMzMgOTMuMzMzM0g2Ni42NjY2Vjg4LjMzMzNDNjYuNjY2NiA2OS4wMDM0IDUwLjk5NjYgNTMuMzMzMyAzMS42NjY2IDUzLjMzMzNIMjYuNjY2NlY2MS42NjY3WiIgZmlsbD0idXJsKCNwYWludDdfcmFkaWFsXzhfNTU0KSIvPgo8cGF0aCBkPSJNNTMuMzMzMyA4OC4zMzMzSDY2LjY2NjZWOTMuMzMzM0g1OC4zMzMzQzU1LjU3MTkgOTMuMzMzMyA1My4zMzMzIDkxLjA5NDggNTMuMzMzMyA4OC4zMzMzWiIgZmlsbD0idXJsKCNwYWludDhfcmFkaWFsXzhfNTU0KSIvPgo8cGF0aCBkPSJNMzEuNjY2NiA2Ni42NjY3QzI4LjkwNTIgNjYuNjY2NyAyNi42NjY2IDY0LjQyODEgMjYuNjY2NiA2MS42NjY3TDI2LjY2NjYgNTMuMzMzM0wzMS42NjY2IDUzLjMzMzNMMzEuNjY2NiA2Ni42NjY3WiIgZmlsbD0idXJsKCNwYWludDlfcmFkaWFsXzhfNTU0KSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfOF81NTQiIHgxPSI2MCIgeTE9IjAiIHgyPSI2MCIgeTI9IjEyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTc0Mjk5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwMUU1OSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MV9yYWRpYWxfOF81NTQiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzEuNjY2NyA4OC4zMzMzKSByb3RhdGUoLTkwKSBzY2FsZSg2MS42NjY3KSI+CjxzdG9wIG9mZnNldD0iMC43NzAyNzciIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl84XzU1NCIgeDE9Ijc5LjE2NjYiIHkxPSI5MC44MzMzIiB4Mj0iOTMuMzMzMyIgeTI9IjkwLjgzMzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzhfNTU0IiB4MT0iMjkuMTY2NyIgeTE9IjI2LjY2NjciIHgyPSIyOS4xNjY3IiB5Mj0iNDAuODMzMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50NF9yYWRpYWxfOF81NTQiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzEuNjY2NiA4OC4zMzMzKSByb3RhdGUoLTkwKSBzY2FsZSg0OC4zMzMzKSI+CjxzdG9wIG9mZnNldD0iMC43MjM5MjkiIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl84XzU1NCIgeDE9IjY2LjY2NjYiIHkxPSI5MC44MzMzIiB4Mj0iODAiIHkyPSI5MC44MzMzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ2X2xpbmVhcl84XzU1NCIgeDE9IjI5LjE2NjYiIHkxPSI1My4zMzMzIiB4Mj0iMjkuMTY2NiIgeTI9IjQwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ3X3JhZGlhbF84XzU1NCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgzMS42NjY2IDg4LjMzMzMpIHJvdGF0ZSgtOTApIHNjYWxlKDM1KSI+CjxzdG9wIG9mZnNldD0iMC41OTUxMyIgc3RvcC1jb2xvcj0iIzAwQUFGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMURBNDAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDhfcmFkaWFsXzhfNTU0IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDUyLjUgOTAuODMzMykgc2NhbGUoMTQuMTY2NyAzNy43Nzc4KSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMEFBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ5X3JhZGlhbF84XzU1NCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyOS4xNjY2IDY3LjUpIHJvdGF0ZSgtOTApIHNjYWxlKDE0LjE2NjcgMjY4LjY0MikiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzhfNTU0Ij4KPHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzhIMjZDNTYuOTI3OSAzOCA4MiA2My4wNzIxIDgyIDk0VjEwMEg5NEM5Ny4zMTM3IDEwMCAxMDAgOTcuMzEzNyAxMDAgOTRDMTAwIDUzLjEzMDkgNjYuODY5MSAyMCAyNiAyMEMyMi42ODYzIDIwIDIwIDIyLjY4NjMgMjAgMjZWMzhaIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNODQgOTRIMTAwQzEwMCA5Ny4zMTM3IDk3LjMxMzcgMTAwIDk0IDEwMEg4NFY5NFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiAyMEwyNiAzNkgyMEwyMCAyNkMyMCAyMi42ODYzIDIyLjY4NjMgMjAgMjYgMjBaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzZIMjZDNTguMDMyNSAzNiA4NCA2MS45Njc1IDg0IDk0VjEwMEg2NlY5NEM2NiA3MS45MDg2IDQ4LjA5MTQgNTQgMjYgNTRIMjBWMzZaIiBmaWxsPSJ1cmwoI3BhaW50NF9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNNjggOTRIODRWMTAwSDY4Vjk0WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDUyTDIwIDM2TDI2IDM2TDI2IDUySDIwWiIgZmlsbD0idXJsKCNwYWludDZfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDYyQzIwIDY1LjMxMzcgMjIuNjg2MyA2OCAyNiA2OEM0MC4zNTk0IDY4IDUyIDc5LjY0MDYgNTIgOTRDNTIgOTcuMzEzNyA1NC42ODYzIDEwMCA1OCAxMDBINjhWOTRDNjggNzAuODA0IDQ5LjE5NiA1MiAyNiA1MkgyMFY2MloiIGZpbGw9InVybCgjcGFpbnQ3X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik01MiA5NEg2OFYxMDBINThDNTQuNjg2MyAxMDAgNTIgOTcuMzEzNyA1MiA5NFoiIGZpbGw9InVybCgjcGFpbnQ4X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiA2OEMyMi42ODYzIDY4IDIwIDY1LjMxMzcgMjAgNjJMMjAgNTJMMjYgNTJMMjYgNjhaIiBmaWxsPSJ1cmwoI3BhaW50OV9yYWRpYWxfNjJfMzI5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzYyXzMyOSIgeDE9IjYwIiB5MT0iMCIgeDI9IjYwIiB5Mj0iMTIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNzQyOTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDAxRTU5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQxX3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDc0KSI+CjxzdG9wIG9mZnNldD0iMC43NzAyNzciIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl82Ml8zMjkiIHgxPSI4MyIgeTE9Ijk3IiB4Mj0iMTAwIiB5Mj0iOTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzYyXzMyOSIgeDE9IjIzIiB5MT0iMjAiIHgyPSIyMyIgeTI9IjM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0MDAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ0X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDU4KSI+CjxzdG9wIG9mZnNldD0iMC43MjM5MjkiIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl82Ml8zMjkiIHgxPSI2OCIgeTE9Ijk3IiB4Mj0iODQiIHkyPSI5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Nl9saW5lYXJfNjJfMzI5IiB4MT0iMjMiIHkxPSI1MiIgeDI9IjIzIiB5Mj0iMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjcwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk5MDEiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDdfcmFkaWFsXzYyXzMyOSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyNiA5NCkgcm90YXRlKC05MCkgc2NhbGUoNDIpIj4KPHN0b3Agb2Zmc2V0PSIwLjU5NTEzIiBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50OF9yYWRpYWxfNjJfMzI5IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDUxIDk3KSBzY2FsZSgxNyA0NS4zMzMzKSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMEFBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ5X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMgNjkpIHJvdGF0ZSgtOTApIHNjYWxlKDE3IDMyMi4zNykiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="}")`}}),{}),iconShape:"squircle",downloadUrls:{download:"https://connect.family.co/v0/download/rainbow",website:"https://rainbow.me/?utm_source=connectkit",android:"https://play.google.com/store/apps/details?id=me.rainbow&referrer=utm_source%3Dconnectkit&utm_source=connectkit",ios:"https://apps.apple.com/app/rainbow-ethereum-wallet/id1457119021?pt=119997837&ct=connectkit&mt=8",chrome:"https://rainbow.me/extension?utm_source=connectkit",edge:"https://rainbow.me/extension?utm_source=connectkit",brave:"https://rainbow.me/extension?utm_source=connectkit"},getWalletConnectDeeplink:e=>eB()?e:`https://rnbwapp.com/wc?uri=${encodeURIComponent(e)}&connector=connectkit`},"io.rabby":{name:"Rabby Wallet",shortName:"Rabby",downloadUrls:{website:"https://rabby.io",chrome:"https://chrome.google.com/webstore/detail/rabby-wallet/acmacodkjbdgmoleebolmdjonilkdbch"}},safe:{name:"Safe",icon:(0,F.jsx)(ek,{}),downloadUrls:{download:"https://connect.family.co/v0/download/safe",website:"https://safe.global/",ios:"https://apps.apple.com/app/id1515759131",android:"https://play.google.com/store/apps/details?id=io.gnosis.safe"},getWalletConnectDeeplink:e=>eB()?e:`https://gnosis-safe.io/wc?uri=${encodeURIComponent(e)}`},"xyz.talisman":{name:"Talisman",shortName:"Talisman",iconShape:"squircle",downloadUrls:{download:"https://talisman.xyz/download",website:"https://talisman.xyz",chrome:"https://chrome.google.com/webstore/detail/talisman-polkadot-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld",firefox:"https://addons.mozilla.org/en-US/firefox/addon/talisman-wallet-extension/"}},"com.trustwallet.app":{name:"Trust Wallet",shortName:"Trust",icon:(0,F.jsx)(eC,{}),iconShouldShrink:!0,downloadUrls:{download:"https://connect.family.co/v0/download/trust",android:"https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",ios:"https://apps.apple.com/app/trust-crypto-bitcoin-wallet/id1288339409"},getWalletConnectDeeplink:e=>eB()?e:`https://link.trustwallet.com/wc?uri=${encodeURIComponent(e)}`},infinityWallet:{name:"Infinity Wallet",icon:(0,F.jsx)(({...e})=>(0,F.jsxs)("svg",{...e,version:"1.1",id:"e551690a-81c0-4880-9b93-334a37ce6796",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1025 1025",children:[(0,F.jsx)("style",{type:"text/css",children:`
        .infinityWallet-st0{fill:url(#ID_InfinityWallet_1);}
        .infinityWallet-st1{fill:url(#ID_InfinityWallet_2);}
        .infinityWallet-st2{opacity:0.49;fill:url(#ID_InfinityWallet_3);enable-background:new;}
        .infinityWallet-st3{opacity:0.49;fill:url(#ID_InfinityWallet_4);enable-background:new;}
        .infinityWallet-st4{opacity:0.49;fill:url(#ID_InfinityWallet_5);enable-background:new;}
        .infinityWallet-st5{fill:url(#ID_InfinityWallet_6);}
        .infinityWallet-st6{opacity:0.49;fill:url(#ID_InfinityWallet_7);enable-background:new;}
        .infinityWallet-st7{opacity:0.49;fill:url(#ID_InfinityWallet_8);enable-background:new;}
        .infinityWallet-st8{opacity:0.49;fill:url(#ID_InfinityWallet_9);enable-background:new;}
      `}),(0,F.jsxs)("linearGradient",{id:"ID_InfinityWallet_1",gradientUnits:"userSpaceOnUse",x1:"512.5",y1:"1056.1801",x2:"512.5",y2:"317.03",gradientTransform:"matrix(1 0 0 -1 0 1260)",children:[(0,F.jsx)("stop",{offset:"0",style:{stopColor:"#1D2643"}}),(0,F.jsx)("stop",{offset:"1",style:{stopColor:"#12142C"}})]}),(0,F.jsx)("path",{className:"infinityWallet-st0",d:"M130,0H895c71.8,0,130,58.2,130,130V895c0,71.8-58.2,130-130,130H130C58.2,1025,0,966.8,0,895V130\n    	C0,58.2,58.2,0,130,0z"}),(0,F.jsxs)("g",{children:[(0,F.jsxs)("g",{children:[(0,F.jsxs)("linearGradient",{id:"ID_InfinityWallet_2",gradientUnits:"userSpaceOnUse",x1:"326.0557",y1:"-1280.3162",x2:"326.0557",y2:"-296.3967",gradientTransform:"matrix(1 0 0 1 0 1474)",children:[(0,F.jsx)("stop",{offset:"1.000000e-02",style:{stopColor:"#00BFE1"}}),(0,F.jsx)("stop",{offset:"0.97",style:{stopColor:"#2738AB"}})]}),(0,F.jsx)("path",{className:"infinityWallet-st1",d:"M550.9,380.8c-0.7-2-2.4-3.4-4.4-3.9c-2.3-0.6-4.7,0-6.4,1.7l-13.4,13.4l-2.2,2.2L418.3,288.5\n    			c-40.2-40-105.2-40-145.4,0L121.7,439.9c-40,40.5-40,105.6,0,146.1l151.4,150.5c40.2,40,105.1,40,145.3,0l34.4-34.4\n    			c4.5-4.5,9.9-10.7,12.9-18.7c4.7-13.1,2.8-27.7-5.2-39.1c-1.5-2.2-3.2-4.2-5.1-6c-16.9-16.5-43.9-16.3-60.7,0.3l-37.2,37.1\n    			c-2.2,2.3-5,3.8-8.1,4.5c-2.9,0.7-6,0.5-8.8-0.6c-2.9-1-5.5-2.7-7.7-5L182.6,524.2c-2.3-2.3-3.9-5.2-4.6-8.4\n    			c-0.8-4-0.1-8.2,2.1-11.8l0.8-0.9L334,350.3c2.4-2.4,5.4-4,8.7-4.6c1-0.2,2.1-0.3,3.1-0.3c4.4-0.1,8.7,1.7,11.7,5l105.8,105.2\n    			l-5.3,5.3l-10.4,10.6c-1.7,1.7-2.3,4.1-1.7,6.4c0.5,2,2,3.7,3.9,4.4l95.7,11.7c8.2-0.1,14.8-6.7,15-15L550.9,380.8z"}),(0,F.jsxs)("linearGradient",{id:"ID_InfinityWallet_3",gradientUnits:"userSpaceOnUse",x1:"137.7126",y1:"-935.1906",x2:"201.098",y2:"-882.1746",gradientTransform:"matrix(1 0 0 1 -0.94 1473.3899)",children:[(0,F.jsx)("stop",{offset:"3.000000e-02",style:{stopColor:"#1B1464"}}),(0,F.jsx)("stop",{offset:"1",style:{stopColor:"#1B1464",stopOpacity:0}})]}),(0,F.jsx)("path",{className:"infinityWallet-st2",d:"M181.4,522.9c-4.3-4.9-5.1-13.3-1.3-19c0,0-49.7,54.3-25.8,114.4l31.5,31.3l45.8-76.2L181.4,522.9z"}),(0,F.jsxs)("linearGradient",{id:"ID_InfinityWallet_4",gradientUnits:"userSpaceOnUse",x1:"4132.3252",y1:"1674.2513",x2:"4102.1333",y2:"1717.0756",gradientTransform:"matrix(-1 0 0 -1 4515 2382.0898)",children:[(0,F.jsx)("stop",{offset:"3.000000e-02",style:{stopColor:"#1B1464"}}),(0,F.jsx)("stop",{offset:"1",style:{stopColor:"#1B1464",stopOpacity:0}})]}),(0,F.jsx)("path",{className:"infinityWallet-st3",d:"M336.4,677.7c56.1,51.6,117.9,22.9,117.9,22.9s8.1-7.5,11.4-17.4c-8.3-4-68.6-47.2-68.6-47.2l-35.6,35.6\n    			C348.6,687.1,336.4,677.7,336.4,677.7z"}),(0,F.jsxs)("linearGradient",{id:"ID_InfinityWallet_5",gradientUnits:"userSpaceOnUse",x1:"4217.4238",y1:"2067.1885",x2:"4240.0796",y2:"2011.1337",gradientTransform:"matrix(-1 0 0 -1 4515 2382.0898)",children:[(0,F.jsx)("stop",{offset:"3.000000e-02",style:{stopColor:"#1B1464"}}),(0,F.jsx)("stop",{offset:"1",style:{stopColor:"#1B1464",stopOpacity:0}})]}),(0,F.jsx)("path",{className:"infinityWallet-st4",d:"M299.4,385c0,0,35.9-36.2,36-36c0,0,9.6-7.7,19.7-0.7c0,0-59.7-49.2-123.6-18.3l-18.6,18.7L299.4,385z"})]}),(0,F.jsxs)("g",{children:[(0,F.jsxs)("linearGradient",{id:"ID_InfinityWallet_6",gradientUnits:"userSpaceOnUse",x1:"698.9443",y1:"-1280.3162",x2:"698.9443",y2:"-296.3967",gradientTransform:"matrix(1 0 0 1 0 1474)",children:[(0,F.jsx)("stop",{offset:"1.000000e-02",style:{stopColor:"#00BFE1"}}),(0,F.jsx)("stop",{offset:"0.97",style:{stopColor:"#2738AB"}})]}),(0,F.jsx)("path",{className:"infinityWallet-st5",d:"M474.1,644.3c0.7,2,2.4,3.4,4.4,3.9c2.3,0.6,4.7,0,6.4-1.7l13.4-13.4l2.2-2.2l106.2,105.6\n    			c40.2,40,105.2,40,145.4,0l151.2-151.4c40-40.5,40-105.6,0-146.1L751.9,288.5c-40.2-40-105.1-40-145.3,0l-34.4,34.4\n    			c-4.5,4.5-9.9,10.7-12.9,18.7c-4.7,13.1-2.8,27.7,5.2,39.1c1.5,2.2,3.2,4.2,5.1,6c16.9,16.5,43.9,16.3,60.7-0.3l37.2-37.1\n    			c2.2-2.3,5-3.8,8.1-4.5c2.9-0.7,6-0.5,8.8,0.6c2.9,1,5.5,2.7,7.7,5l150.3,150.3c2.3,2.3,3.9,5.2,4.6,8.4c0.8,4,0.1,8.2-2.1,11.8\n    			l-0.8,0.9L691,674.5c-2.4,2.4-5.4,4-8.7,4.6c-1,0.2-2.1,0.3-3.1,0.3c-4.4,0.1-8.7-1.7-11.7-5L561.6,569.7l5.3-5.3l10.4-10.6\n    			c1.7-1.7,2.3-4.1,1.7-6.4c-0.5-2-2-3.7-3.9-4.4l-95.6-11.7c-8.2,0.1-14.8,6.7-15,15L474.1,644.3z"}),(0,F.jsxs)("linearGradient",{id:"ID_InfinityWallet_7",gradientUnits:"userSpaceOnUse",x1:"3824.9182",y1:"1469.7789",x2:"3888.3037",y2:"1522.7949",gradientTransform:"matrix(-1 0 0 -1 4713.1299 1956.6599)",children:[(0,F.jsx)("stop",{offset:"3.000000e-02",style:{stopColor:"#1B1464"}}),(0,F.jsx)("stop",{offset:"1",style:{stopColor:"#1B1464",stopOpacity:0}})]}),(0,F.jsx)("path",{className:"infinityWallet-st6",d:"M843.6,502.2c4.3,4.9,5.1,13.3,1.3,19c0,0,49.7-54.3,25.8-114.4l-31.5-31.3l-45.8,76.2L843.6,502.2z"}),(0,F.jsxs)("linearGradient",{id:"ID_InfinityWallet_8",gradientUnits:"userSpaceOnUse",x1:"445.1279",y1:"-730.6945",x2:"414.9359",y2:"-687.8702",gradientTransform:"matrix(1 0 0 1 197.19 1047.96)",children:[(0,F.jsx)("stop",{offset:"3.000000e-02",style:{stopColor:"#1B1464"}}),(0,F.jsx)("stop",{offset:"1",style:{stopColor:"#1B1464",stopOpacity:0}})]}),(0,F.jsx)("path",{className:"infinityWallet-st7",d:"M688.6,347.4c-56.1-51.6-117.9-22.9-117.9-22.9s-8.1,7.5-11.4,17.4c8.3,4,68.6,47.2,68.6,47.2l35.6-35.6\n    			C676.4,338,688.6,347.4,688.6,347.4z"}),(0,F.jsxs)("linearGradient",{id:"ID_InfinityWallet_9",gradientUnits:"userSpaceOnUse",x1:"530.1512",y1:"-337.7953",x2:"552.8069",y2:"-393.8502",gradientTransform:"matrix(1 0 0 1 197.19 1047.96)",children:[(0,F.jsx)("stop",{offset:"3.000000e-02",style:{stopColor:"#1B1464"}}),(0,F.jsx)("stop",{offset:"1",style:{stopColor:"#1B1464",stopOpacity:0}})]}),(0,F.jsx)("path",{className:"infinityWallet-st8",d:"M725.5,640.1c0,0-35.9,36.2-36,36c0,0-9.6,7.7-19.7,0.7c0,0,59.7,49.2,123.6,18.3l18.6-18.7L725.5,640.1z"})]})]})]}),{}),downloadUrls:{download:"https://connect.family.co/v0/download/infinityWallet",website:"https://infinitywallet.io/download",chrome:"https://infinitywallet.io/download",firefox:"https://infinitywallet.io/download",brave:"https://infinitywallet.io/download",edge:"https://infinitywallet.io/download"}},imToken:{name:"imToken",icon:(0,F.jsx)(ew,{}),downloadUrls:{download:"https://connect.family.co/v0/download/imToken",android:"https://play.google.com/store/apps/details?id=im.token.app",ios:"https://itunes.apple.com/us/app/imtoken2/id1384798940"},getWalletConnectDeeplink:e=>`imtokenv2://wc?uri=${encodeURIComponent(e)}`},unstoppable:{name:"Unstoppable",icon:(0,F.jsx)(({...e})=>(0,F.jsx)("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(180deg, #FED812 0%, #FFAF00 100%)"},children:(0,F.jsx)("path",{d:"M47.4 43.7163C47.4 45.6251 45.8781 47.1714 44.0001 47.1714C42.1219 47.1714 40.6 45.6251 40.6 43.7163L40.6 -7H27L27 43.7163C27 53.2612 34.6106 61 44.0001 61C53.3882 61 61 53.2612 61 43.7163V-7H47.4V43.7163Z",fill:"#1F2129"})}),{}),downloadUrls:{download:"https://connect.family.co/v0/download/unstoppable",ios:"https://apps.apple.com/app/bank-bitcoin-wallet/id1447619907",android:"https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet"},getWalletConnectDeeplink:e=>eB()?e:`https://unstoppable.money/wc?uri=${encodeURIComponent(e)}`},onto:{name:"ONTO",icon:(0,F.jsx)(({...e})=>(0,F.jsx)("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"white"},children:(0,F.jsx)("path",{d:"M20 16L28.675 24.677C32.1885 21.8644 36.4154 20.0873 40.8816 19.545C45.348 19.0026 49.8769 19.7164 53.9604 21.6063C58.0438 23.4963 61.5207 26.4876 64.0005 30.2447C66.4804 34.0019 67.8653 38.3763 68 42.8772V43.5854V72L59.3367 63.3231C55.8263 66.1389 51.6014 67.9196 47.1361 68.4655C42.6708 69.0112 38.1419 68.3007 34.0577 66.4135C29.9734 64.5262 26.4956 61.537 24.0144 57.7813C21.5333 54.0255 20.1472 49.6521 20.0115 45.1515V44.4433L20 16ZM25.931 30.3311V44.4146C25.9323 47.7294 26.8335 50.9817 28.5384 53.8236C30.2432 56.6655 32.6875 58.9902 35.6101 60.5497C38.5328 62.1089 41.8238 62.8439 45.1313 62.6764C48.439 62.5087 51.639 61.4445 54.3894 59.5978L54.8611 59.2754L27.0873 31.4884L25.931 30.3311ZM33.6223 28.4022L33.1505 28.7304L60.9186 56.5117L62.069 57.6632V43.5854C62.0683 40.2717 61.1679 37.0204 59.464 34.179C57.7603 31.3377 55.3171 29.0132 52.3957 27.4539C49.4742 25.8946 46.1844 25.1592 42.8777 25.3262C39.5712 25.4933 36.372 26.5565 33.6223 28.4022Z",fill:"#23262F"})}),{}),downloadUrls:{download:"https://connect.family.co/v0/download/onto",ios:"https://apps.apple.com/app/onto-an-ontology-dapp/id1436009823",android:"https://play.google.com/store/apps/details?id=com.github.ontio.onto",website:"https://onto.app/en/download/"},getWalletConnectDeeplink:e=>eB()?e:`https://onto.app/wc?uri=${encodeURIComponent(e)}`},steak:{name:"Steak",icon:(0,F.jsx)(({...e})=>(0,F.jsxs)("svg",{...e,width:"600",height:"600",viewBox:"0 0 600 600",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"black"},children:[(0,F.jsx)("path",{d:"M470.747 209.191C462.305 192.354 448.646 178.695 431.808 170.253C413.337 161 389.233 161 341.006 161C331.236 161 307.916 161 300 161C292.084 161 268.728 161 258.994 161C210.856 161 186.662 161 168.191 170.253C151.354 178.69 137.7 192.35 129.27 209.191C119.999 227.662 120 251.767 120 299.976C120 348.185 119.999 372.308 129.27 390.778C137.7 407.619 151.354 421.279 168.191 429.716C186.662 438.97 210.784 438.97 258.994 438.97C268.764 438.97 292.084 438.97 300 438.97C307.916 438.97 331.272 438.97 341.006 438.97C389.144 438.97 413.337 438.97 431.808 429.716C448.646 421.274 462.305 407.616 470.747 390.778C480 372.308 480 348.203 480 299.976C480 251.749 480 227.662 470.747 209.191Z",fill:"#FFCEAA"}),(0,F.jsx)("path",{d:"M218.557 350.342C216.323 345.957 212.922 342.274 208.729 339.698C204.536 337.121 199.713 335.752 194.791 335.741H166.747C163.876 335.755 161.041 336.37 158.422 337.548C155.804 338.725 153.462 340.439 151.547 342.577C149.632 344.716 148.186 347.232 147.303 349.964C146.42 352.696 146.12 355.582 146.422 358.437C147.385 367.476 148.954 374.34 151.575 379.564C157.629 391.573 167.378 401.323 179.388 407.377C188.195 411.798 201.674 413.26 222.444 413.742C225.415 413.812 228.353 413.109 230.97 411.702C233.587 410.295 235.793 408.232 237.373 405.715C238.953 403.199 239.852 400.315 239.982 397.346C240.113 394.378 239.47 391.427 238.116 388.781L218.557 350.342Z",fill:"#FF3B9A"}),(0,F.jsx)("path",{d:"M180.618 312.563C189.852 312.562 198.95 310.335 207.14 306.071C215.33 301.806 222.371 295.63 227.668 288.066L254.856 249.253C259.761 242.25 262.839 234.134 263.81 225.64C264.782 217.146 263.616 208.545 260.419 200.616V200.384C258.913 196.555 256.409 193.2 253.167 190.666C249.925 188.133 246.064 186.514 241.985 185.978C209.732 186.085 190.726 186.887 179.405 192.575C167.37 198.586 157.611 208.339 151.592 220.37C146.725 230.247 145.227 258.007 144.87 280.507C144.797 284.698 145.56 288.862 147.114 292.754C148.668 296.647 150.983 300.191 153.923 303.179C156.863 306.167 160.369 308.539 164.236 310.156C168.103 311.774 172.254 312.604 176.445 312.599L180.618 312.563Z",fill:"#FF3B9A"}),(0,F.jsx)("path",{d:"M449.702 220.356C443.655 208.365 433.909 198.639 421.906 192.614C409.89 186.588 389.262 186.053 353.337 186C304.664 186 289.528 242 279.134 256.834L248.556 300.497C243.645 307.51 240.729 315.725 240.12 324.266C239.511 332.806 241.231 341.352 245.098 348.991L267.758 393.813C270.842 399.931 275.578 405.063 281.43 408.627C287.282 412.191 294.016 414.045 300.867 413.978H301.49C309.495 413.978 334.171 413.978 342.283 413.978C385.072 413.978 408.713 413.977 421.906 407.381C433.914 401.331 443.66 391.58 449.702 379.568C456.317 366.374 456.316 342.787 456.316 299.944C456.316 257.101 456.317 233.621 449.702 220.356Z",fill:"#FF3B9A"})]}),{}),downloadUrls:{download:"https://connect.family.co/v0/download/steak",android:"https://play.google.com/store/apps/details?id=fi.steakwallet.app",ios:"https://apps.apple.com/app/steakwallet/id1569375204",website:"https://steakwallet.fi/download"},getWalletConnectDeeplink:e=>eB()?e:`https://links.steakwallet.fi/wc?uri=${encodeURIComponent(e)}`},ledger:{name:"Ledger Live",shortName:"Ledger",icon:(0,F.jsx)(({...e})=>(0,F.jsx)("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"black"},children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.2106 16H16V29.4577H19.2182V19.2182L37.2106 19.1011V16ZM37.3568 33.4073V54.6179H50.8146V51.3997H40.575L40.458 33.4073H37.3568ZM16 72.1714H37.2106V69.0703L19.2182 68.9533V58.7137H16V72.1714ZM50.9609 16H72.1714V29.4577H68.9533V19.2182L50.9609 19.1011V16ZM72.1714 72.1714H50.9609V69.0703L68.9533 68.9533V58.7137H72.1714V72.1714Z",fill:"white"})}),{}),downloadUrls:{download:"https://connect.family.co/v0/download/ledger",website:"https://www.ledger.com/ledger-live/download#download-device-2",android:"https://play.google.com/store/apps/details?id=com.ledger.live",ios:"https://apps.apple.com/app/ledger-live-web3-wallet/id1361671700"},getWalletConnectDeeplink:e=>eB()?e:`ledgerlive://wc?uri=${encodeURIComponent(e)}`,shouldDeeplinkDesktop:!0},zerion:{name:"Zerion",icon:(0,F.jsx)(({...e})=>(0,F.jsxs)("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(120.22deg, #2962EF 0%, #255CE5 100%)"},children:[(0,F.jsx)("path",{d:"M19.0864 22C17.5783 22 16.9973 23.8648 18.2628 24.6438L49.9199 43.732C50.709 44.2178 51.7614 44.0258 52.3048 43.2969L66.2236 25.024C67.17 23.7545 66.2138 22 64.5757 22H19.0864Z",fill:"white"}),(0,F.jsx)("path",{d:"M68.8425 66C70.3503 66 70.9466 64.1252 69.6814 63.3464L38.015 44.2605C37.2259 43.7748 36.1989 43.991 35.6558 44.7198L21.7099 62.9891C20.7639 64.2582 21.7499 66 23.3877 66H68.8425Z",fill:"white"})]}),{}),downloadUrls:{download:"https://connect.family.co/v0/download/zerion",ios:"https://apps.apple.com/app/apple-store/id1456732565",android:"https://play.google.com/store/apps/details?id=io.zerion.android",website:"https://zerion.io/"},getWalletConnectDeeplink:e=>eB()?e:`https://app.zerion.io/wc?uri=${encodeURIComponent(e)}`},slope:{name:"Slope",icon:(0,F.jsx)(({...e})=>(0,F.jsxs)("svg",{...e,width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"#6C67F1"},children:[(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50.6667 24.3696L34.8872 40.1864L24.0001 37.7402L37.3334 24.3696L48.4438 13.3798C49.268 12.5646 50.6667 13.1484 50.6667 14.3077V24.3696ZM37.3339 51.0358L50.6672 37.74V24.3694L35.2001 39.8737L37.3339 51.0358Z",fill:"url(#paint0_linear_2593_6077)"}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.3337 64.2947V50.9617L50.667 37.6284L55.7849 45.8435L55.9822 45.6463L64 50.9616L39.5582 75.2343C38.7347 76.0521 37.3336 75.4687 37.3336 74.3082V64.2949L37.3337 64.2947Z",fill:"url(#paint1_linear_2593_6077)"}),(0,F.jsx)("path",{d:"M24 37.7405H32.573C35.202 37.7405 37.3333 39.8718 37.3333 42.5009V51.0359H28.7602C26.1313 51.0359 24 48.9046 24 46.2757V37.7405Z",fill:"#F1F0FF"}),(0,F.jsx)("path",{d:"M50.6667 37.7405H59.2398C61.8688 37.7405 64 39.8718 64 42.5009V51.0359H55.4271C52.798 51.0359 50.6667 48.9046 50.6667 46.2757V37.7405Z",fill:"#F1F0FF"}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("linearGradient",{id:"paint0_linear_2593_6077",x1:"37.3336",y1:"13",x2:"37.3336",y2:"51.0358",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#A8ADFF"}),(0,F.jsx)("stop",{offset:"0.648556",stopColor:"white"})]}),(0,F.jsxs)("linearGradient",{id:"paint1_linear_2593_6077",x1:"50.6668",y1:"37.6284",x2:"50.6668",y2:"75.616",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{offset:"0.260784",stopColor:"#B6BAFF"}),(0,F.jsx)("stop",{offset:"1",stopColor:"#E4E2FF"})]})]})]}),{}),downloadUrls:{download:"https://connect.family.co/v0/download/slope",ios:"https://apps.apple.com/app/slope-wallet/id1574624530",android:"https://play.google.com/store/apps/details?id=com.wd.wallet",chrome:"https://chrome.google.com/webstore/detail/slope-wallet/pocmplpaccanhmnllbbkpgfliimjljgo",website:"https://slope.finance/"},getWalletConnectDeeplink:e=>eB()?e:`https://slope.finance/app/wc?uri=${encodeURIComponent(e)}`},tokenPocket:{name:"TokenPocket Wallet",icon:(0,F.jsx)(({...e})=>(0,F.jsxs)("svg",{...e,width:"88px",height:"88px",viewBox:"0 0 88 88",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("defs",{children:(0,F.jsxs)("linearGradient",{x1:"107.511425%",y1:"50.0147427%",x2:"0.0459570557%",y2:"50.0147427%",id:"linearGradient-1",children:[(0,F.jsx)("stop",{stopColor:"#FFFFFF",offset:"0%"}),(0,F.jsx)("stop",{stopColor:"#FFFFFF",stopOpacity:"0.3233",offset:"96.67%"}),(0,F.jsx)("stop",{stopColor:"#FFFFFF",stopOpacity:"0.3",offset:"100%"})]})}),(0,F.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,F.jsxs)("g",{id:"tokenpocket",fillRule:"nonzero",children:[(0,F.jsx)("polygon",{fill:"#2980FE",points:"87.9604864 0 0 0 0 88 87.9604864 88"}),(0,F.jsxs)("g",{transform:"translate(16.052385, 23.804688)",children:[(0,F.jsx)("path",{d:"M19.6653508,13.8911953 L19.6784508,13.8911953 C19.6653508,13.8236484 19.6653508,13.7448437 19.6653508,13.6772969 L19.6653508,13.8911953 Z",fill:"#29AEFF"}),(0,F.jsx)("path",{d:"M41.1271993,16.0301797 L29.2440711,16.0301797 L29.2440711,38.4205938 C29.2440711,39.4787422 30.0635659,40.3343359 31.0771712,40.3343359 L39.2940168,40.3343359 C40.3077044,40.3343359 41.1271993,39.4787422 41.1271993,38.4205938 L41.1271993,16.0301797 Z",fill:"#FFFFFF"}),(0,F.jsx)("path",{d:"M23.5075248,0 L23.1085201,0 L1.83318241,0 C0.819494855,0 0,0.855507812 0,1.91374219 L0,9.68111719 C0,10.7393516 0.819494855,11.5948594 1.83318241,11.5948594 L6.82580355,11.5948594 L8.80996071,11.5948594 L8.80996071,13.8912813 L8.80996071,38.4768828 C8.80996071,39.5351172 9.62945557,40.390625 10.6430608,40.390625 L18.4502002,40.390625 C19.4638054,40.390625 20.2833003,39.5351172 20.2833003,38.4768828 L20.2833003,13.8912813 L20.2833003,13.6774688 L20.2833003,11.5948594 L22.2674574,11.5948594 L23.0761684,11.5948594 L23.4751731,11.5948594 C26.5376389,11.5948594 29.0285575,8.99447656 29.0285575,5.79742969 C29.0609093,2.60038281 26.5699906,0 23.5075248,0 Z",fill:"#FFFFFF"}),(0,F.jsx)("path",{d:"M41.1381478,16.0301797 L41.1381478,31.6550781 C41.5479364,31.7563984 41.9684266,31.8352031 42.399783,31.90275 C43.0036819,31.9928125 43.6290664,32.0491016 44.2545332,32.0603594 C44.2868849,32.0603594 44.3192367,32.0603594 44.3623723,32.0603594 L44.3623723,19.6324219 C42.5615416,19.5085859 41.1381478,17.9438359 41.1381478,16.0301797 Z",fill:"url(#linearGradient-1)"}),(0,F.jsx)("path",{d:"M44.5993714,0 C36.1237942,0 29.2440711,7.18205469 29.2440711,16.0301797 C29.2440711,23.6400312 34.3229635,30.0115234 41.1379832,31.6550781 L41.1379832,16.0301797 C41.1379832,14.0376328 42.6907839,12.4165937 44.5993714,12.4165937 C46.5080412,12.4165937 48.0608419,14.0376328 48.0608419,16.0301797 C48.0608419,17.7075078 46.9717493,19.1146484 45.483652,19.5198437 C45.2032703,19.5986484 44.9013209,19.6436797 44.5993714,19.6436797 L44.5993714,32.0603594 C44.9013209,32.0603594 45.1924864,32.0491016 45.483652,32.0378438 C53.5495229,31.5537578 59.9547666,24.5743438 59.9547666,16.0301797 C59.9655379,7.18205469 53.0858148,0 44.5993714,0 Z",fill:"#FFFFFF"}),(0,F.jsx)("path",{d:"M44.5992891,32.0603594 L44.5992891,19.6436797 C44.5131001,19.6436797 44.4376127,19.6436797 44.3513414,19.6324219 L44.3513414,32.0603594 C44.4376127,32.0603594 44.523884,32.0603594 44.5992891,32.0603594 Z",fill:"#FFFFFF"})]})]})})]}),{}),downloadUrls:{website:"https://www.tokenpocket.pro/en/download/app",download:"https://www.tokenpocket.pro/en/download/app",android:"https://play.google.com/store/apps/details?id=vip.mytokenpocket",ios:"https://apps.apple.com/us/app/tp-global-wallet/id6444625622",chrome:"https://chrome.google.com/webstore/detail/tokenpocket/mfgccjchihfkkindfppnaooecgfneiii"}},talisman:{name:"Talisman",icon:(0,F.jsx)(({...e})=>(0,F.jsxs)("svg",{...e,width:"82",height:"82",viewBox:"0 0 82 82",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("rect",{width:"82",height:"82",rx:"12",fill:"#D5FF5C"}),(0,F.jsx)("path",{d:"M35.04 55C35.04 58.2905 37.6887 60.9623 40.9703 60.9996C44.2519 60.9623 46.9006 58.2905 46.9006 55C46.9006 51.7096 44.2519 49.0377 40.9703 49.0004C37.6887 49.0377 35.04 51.7096 35.04 55Z",fill:"#FD4848"}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.8544 44.6623C22.2462 45.9868 20.4553 46.4546 19.4248 45.4241L17.5356 43.5349C15.583 41.5823 12.4171 41.5823 10.4645 43.5349C8.51184 45.4875 8.51184 48.6534 10.4645 50.606L25.7391 65.8807C29.3942 70.2176 34.8595 72.9788 40.9703 72.9994C47.0811 72.9788 52.5464 70.2176 56.2014 65.8807L71.4761 50.606C73.4287 48.6534 73.4287 45.4875 71.4761 43.5349C69.5234 41.5823 66.3576 41.5823 64.4049 43.5349L62.5158 45.4241C61.4852 46.4546 59.6943 45.9868 59.0861 44.6623C58.9663 44.4013 58.901 44.1213 58.901 43.8341L58.901 20.9995C58.901 18.2381 56.6624 15.9995 53.901 15.9995C51.1396 15.9995 48.901 18.2381 48.901 20.9995L48.901 32.5568C48.901 33.5506 47.8829 34.2252 46.9353 33.9257C46.3356 33.7361 45.9023 33.1901 45.9023 32.5611L45.9023 13.9996C45.9023 11.2608 43.7004 9.03637 40.9703 9C38.2402 9.03637 36.0382 11.2608 36.0382 13.9996L36.0382 32.5611C36.0382 33.1901 35.605 33.7361 35.0052 33.9257C34.0576 34.2252 33.0395 33.5506 33.0395 32.5568L33.0396 20.9995C33.0396 18.2381 30.801 15.9995 28.0395 15.9995C25.2781 15.9995 23.0395 18.2381 23.0395 20.9995L23.0395 43.8341C23.0395 44.1213 22.9743 44.4013 22.8544 44.6623ZM40.9703 44.9999C32.1659 45.0525 25.0403 54.9997 25.0403 54.9997C25.0403 54.9997 32.1659 64.9469 40.9703 64.9995C49.7746 64.9469 56.9002 54.9997 56.9002 54.9997C56.9002 54.9997 49.7746 45.0525 40.9703 44.9999Z",fill:"#FD4848"})]}),{}),downloadUrls:{download:"https://talisman.xyz/download",website:"https://talisman.xyz",chrome:"https://chrome.google.com/webstore/detail/talisman-polkadot-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld",firefox:"https://addons.mozilla.org/en-US/firefox/addon/talisman-wallet-extension/"}},walletConnect:{name:"Other Wallets",shortName:"Other",icon:(0,F.jsx)(em,{background:!0}),iconConnector:(0,F.jsx)(({...e})=>{let t={position:"relative",display:"flex",gap:3},n={width:"50%",overflow:"hidden",borderRadius:"27.5%"};return(0,F.jsxs)("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:3},...e,children:[(0,F.jsxs)("div",{style:t,children:[(0,F.jsx)("div",{style:n,children:(0,F.jsx)(em,{background:!0})}),(0,F.jsx)("div",{style:n,children:ex("Argent")?(0,F.jsx)(eA,{}):(0,F.jsx)(ev,{})})]}),(0,F.jsxs)("div",{style:t,children:[(0,F.jsx)("div",{style:n,children:ex("Phantom")?(0,F.jsx)(ew,{}):(0,F.jsx)(ey,{background:!0})}),(0,F.jsx)("div",{style:n,children:ex("Safe")?(0,F.jsx)(eC,{}):(0,F.jsx)(ek,{})})]})]})},{}),iconShape:"square",getWalletConnectDeeplink:e=>e}};Object.keys(eR).reduce((e,t)=>{var n,o,r,i,a,s;let c=eR[t];if(!(null==c?void 0:c.getWalletConnectDeeplink))return e;let l=t.split(",")[0].trim(),d=null!=(o=null==(n=c.name)?void 0:n.replace("Wallet","").replace(" ",""))?o:l[0].toUpperCase()+l.slice(1),u=(0,L.injected)({target:{id:l,name:null!=(i=null!=(r=c.name)?r:c.shortName)?i:t,provider:e=>{var t;return null==(t=null==e?void 0:e.ethereum)?void 0:t[`is${d}`]}}});return e[(null!=(s=null!=(a=c.name)?a:c.shortName)?s:t).toLowerCase().replace(/(?:^|\s)\S/g,e=>e.toUpperCase()).replace(/\s/g,"").replace(/(?:^|\s)\S/g,e=>e.toLowerCase())]=u,e},{});let eT={font:{family:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji'"},text:{primary:{color:"#373737"},secondary:{color:"#999999",hover:{color:"#111111"}},error:"#FC6464",valid:"#32D74B"},buttons:{primary:{borderRadius:16,color:"#000373737000",background:"#FFFFFF",border:"#F0F0F0",hover:{color:"#000000",border:"#1A88F8"}},secondary:{borderRadius:16,background:"#F6F7F9",color:"#000000"}},navigation:{color:"#999999"},modal:{background:"#ffffff",divider:"#f7f6f8"},tooltips:{color:"#999999",background:"#ffffff",hover:{background:"#f6f7f9"}},overlay:{background:"rgba(0, 0, 0, 0.06)"},qrCode:{accentColor:"#F7F6F8"}};"u"<typeof window||window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;let ez={connectKit:{options:{iconStyle:"light"},theme:{preferred:"dark",light:eT,dark:eT}}};var eW="function"==typeof z.default.div?z.default:z.default.default,eU={"--ck-font-family":"Lato","--ck-border-radius":"0px","--ck-connectbutton-color":"#373737","--ck-connectbutton-background":"linear-gradient(180deg, #F0F0EA 0%, #FFFFFF 50%, #F0F0EA 100%) 100% 100% / 200% 200%, #F5F5F1","--ck-connectbutton-box-shadow":" 0 0 0 1px #003C74, 2px 2px 0px rgba(255, 255, 255, 0.75), -2px -2px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 0px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-connectbutton-border-radius":"4.5px","--ck-connectbutton-hover-color":"#373737","--ck-connectbutton-hover-background":"linear-gradient(180deg, #F0F0EA 0%, #FFFFFF 50%, #F0F0EA 100%) 100% 0% / 200% 200%, #F5F5F1","--ck-connectbutton-active-background":"linear-gradient(180deg, #F0F0EA 0%, #FFFFFF 50%, #F0F0EA 100%) 100% 100% / 200% 200%, #F5F5F1","--ck-connectbutton-balance-color":"#373737","--ck-connectbutton-balance-background":"#fff","--ck-connectbutton-balance-box-shadow":"0 0 0 1px #E4E7E7","--ck-connectbutton-balance-hover-box-shadow":"0 0 0 1px #d7dbdb","--ck-connectbutton-balance-active-box-shadow":"0 0 0 1px #bbc0c0","--ck-focus-color":"#1A88F8","--ck-overlay-background":"rgba(0, 127,  128, 0.8)","--ck-body-color":"#373737","--ck-body-color-muted":"#808080","--ck-body-color-muted-hover":"#111111","--ck-body-background":"#F0EDE2","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary-hover-background":"#FAFAFA","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-action-color":"#373737","--ck-body-color-danger":"#FC6464","--ck-body-color-valid":"#32D74B","--ck-body-divider":"#919B9C","--ck-body-divider-box-shadow":"0px 1px 0px #FBFBF8","--ck-primary-button-background":"linear-gradient(180deg, #FFFFFF 0%, #F0F0EA 100%), #F5F5F1","--ck-primary-button-box-shadow":"inset 0 0 0 1px #003C74, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 0px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-primary-button-border-radius":"6px","--ck-primary-button-hover-box-shadow":"inset 0 0 0 1px #003C74, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 5px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-primary-button-hover-border-radius":"6px","--ck-modal-heading-font-weight":400,"--ck-modal-box-shadow":`
    inset 0px -3px 0px #0F37A9,
    inset -2px 0px 0px #0F37A9,
    inset 0px -4px 0px #0D5DDF,
    inset -4px 0px 0px #0D5DDF,
    inset 2px 0px 0px #0453DD,
    inset 0px 2px 0px #044FD1,
    inset 4px 0px 0px #4283EB,
    inset 0px 4px 0px #4283EB
  `,"--ck-modal-h1-font-weight":400,"--ck-secondary-button-color":"#373737","--ck-secondary-button-border-radius":"6px","--ck-secondary-button-box-shadow":"inset 0 0 0 1px #003C74, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 0px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-secondary-button-background":"linear-gradient(180deg, #FFFFFF 0%, #F0F0EA 100%), #F5F5F1","--ck-secondary-button-hover-box-shadow":"inset 0 0 0 1px #003C74, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 4px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-body-background-secondary":"rgba(0, 0, 0, 0.1)","--ck-body-background-tertiary":"linear-gradient(180deg, #FBFBFB 0%, #EFEFEE 100%)","--ck-tertiary-border-radius":"0px","--ck-tertiary-box-shadow":"inset 0 0 0 1px #919B9C, 1px 1px 2px rgba(0, 0, 0, 0.15), inset -2px -2px 0px #FFFFFF","--ck-body-button-text-align":"left","--ck-body-button-box-shadow":"0 2px 4px rgba(0, 0, 0, 0.05 )","--ck-body-disclaimer-background":"linear-gradient(180deg, #FBFBFB 0%, #EFEFEE 100%)","--ck-body-disclaimer-box-shadow":`
    inset 0px -3px 0px #0F37A9,
    inset -2px 0px 0px #0F37A9,
    inset 0px -4px 0px #0D5DDF,
    inset -4px 0px 0px #0D5DDF,
    inset 2px 0px 0px #0453DD,
    inset 4px 0px 0px #4283EB,
    inset 0 1px 0 0 #919B9C`,"--ck-body-disclaimer-font-size":"14px","--ck-body-disclaimer-color":"#959594","--ck-body-disclaimer-link-color":"#626262","--ck-body-disclaimer-link-hover-color":"#000000","--ck-qr-dot-color":"#000000","--ck-qr-border-color":"#919B9C","--ck-qr-border-radius":"0","--ck-qr-background":"#FFFFFF","--ck-copytoclipboard-stroke":"rgba(55, 55, 55, 0.4)","--ck-tooltip-background":"linear-gradient(270deg, #F7F3E6 7.69%, #F5F7DA 100%)","--ck-tooltip-background-secondary":"#f6f7f9","--ck-tooltip-color":"#000000","--ck-tooltip-shadow":" 0 0 0 1.5px #2b2622, 0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px #A0A0A0, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-dropdown-button-background":"linear-gradient(180deg, #FFFFFF 0%, #F0F0EA 100%), #F5F5F1","--ck-dropdown-button-hover-background":"linear-gradient(0deg, #FFFFFF 0%, #F0F0EA 100%), #F5F5F1","--ck-dropdown-pending-color":"#ACA899","--ck-dropdown-active-color":"#FFFFFF","--ck-dropdown-active-static-color":"#ACA899","--ck-dropdown-active-background":"#3F69BF","--ck-dropdown-active-border-radius":"0","--ck-dropdown-active-inset":"-12px","--ck-dropdown-color":"#ACA899","--ck-dropdown-background":"#FFFFFF","--ck-dropdown-box-shadow":"inset 0 0 0 1px #ACA899, 2px 2px 7px rgba(0, 0, 0, 0.15)","--ck-dropdown-border-radius":"0","--ck-alert-color":"#ACA899","--ck-alert-background":"linear-gradient(180deg, #FBFBFB 0%, #EFEFEE 100%)","--ck-alert-box-shadow":"inset 0 0 0 1px #919B9C, 1px 1px 2px rgba(0, 0, 0, 0.15), inset -2px -2px 0px #FFFFFF","--ck-alert-border-radius":"0","--ck-recent-badge-border-radius":"32px","--ck-recent-badge-top-offset":"0px","--ck-graphic-primary-color":"#333333","--ck-graphic-primary-background":"#FFFFFF","--ck-graphic-compass-background":"#FFFFFF","--ck-siwe-border":"#919B9C"},eH={"--ck-connectbutton-font-size":"15px","--ck-connectbutton-color":"#373737","--ck-connectbutton-background":"#F6F7F9","--ck-connectbutton-background-secondary":"#FFFFFF","--ck-connectbutton-hover-color":"#373737","--ck-connectbutton-hover-background":"#F0F2F5","--ck-connectbutton-active-color":"#373737","--ck-connectbutton-active-background":"#EAECF1","--ck-connectbutton-balance-color":"#373737","--ck-connectbutton-balance-background":"#fff","--ck-connectbutton-balance-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-background)","--ck-connectbutton-balance-hover-background":"#F6F7F9","--ck-connectbutton-balance-hover-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-hover-background)","--ck-connectbutton-balance-active-background":"#F0F2F5","--ck-connectbutton-balance-active-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-active-background)","--ck-primary-button-border-radius":"16px","--ck-primary-button-color":"#373737","--ck-primary-button-background":"#F6F7F9","--ck-primary-button-font-weight":"600","--ck-primary-button-hover-color":"#373737","--ck-primary-button-hover-background":"#F0F2F5","--ck-secondary-button-border-radius":"16px","--ck-secondary-button-color":"#373737","--ck-secondary-button-background":"#F6F7F9","--ck-tertiary-button-background":"#FFFFFF","--ck-secondary-button-hover-background":"#e0e4eb","--ck-modal-box-shadow":"0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-overlay-background":"rgba(71, 88, 107, 0.24)","--ck-body-color":"#373737","--ck-body-color-muted":"#999999","--ck-body-color-muted-hover":"#111111","--ck-body-background":"#ffffff","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#f6f7f9","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-background-tertiary":"#F3F4F7","--ck-body-action-color":"#999999","--ck-body-divider":"#f7f6f8","--ck-body-divider-secondary":"rgba(0, 0, 0, 0.06)","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-siwe-border":"#F0F0F0","--ck-body-disclaimer-color":"#AAAAAB","--ck-body-disclaimer-link-color":"#838485","--ck-body-disclaimer-link-hover-color":"#000000","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px rgba(0,0,0,0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#F5F7F9","--ck-qr-dot-color":"#000000","--ck-qr-border-color":"#f7f6f8","--ck-focus-color":"#1A88F8","--ck-spinner-color":"var(--ck-focus-color)","--ck-copytoclipboard-stroke":"#CCCCCC"},eG={"--ck-connectbutton-font-size":"15px","--ck-connectbutton-color":"#ffffff","--ck-connectbutton-background":"#383838","--ck-connectbutton-background-secondary":"#282828","--ck-connectbutton-hover-background":"#404040","--ck-connectbutton-active-background":"#4D4D4D","--ck-connectbutton-balance-color":"#fff","--ck-connectbutton-balance-background":"#282828","--ck-connectbutton-balance-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-background)","--ck-connectbutton-balance-hover-background":"#383838","--ck-connectbutton-balance-hover-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-hover-background)","--ck-connectbutton-balance-active-background":"#404040","--ck-connectbutton-balance-active-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-active-background)","--ck-primary-button-color":"#ffffff","--ck-primary-button-background":"#383838","--ck-primary-button-border-radius":"16px","--ck-primary-button-font-weight":"600","--ck-primary-button-hover-background":"#404040","--ck-primary-button-active-border-radius":"16px","--ck-secondary-button-color":"#ffffff","--ck-secondary-button-background":"#333333","--ck-secondary-button-hover-background":"#4D4D4D","--ck-tertiary-button-background":"#424242","--ck-focus-color":"#1A88F8","--ck-overlay-background":"rgba(0,0,0,0.4)","--ck-body-color":"#ffffff","--ck-body-color-muted":"rgba(255, 255, 255, 0.4)","--ck-body-color-muted-hover":"rgba(255, 255, 255, 0.8)","--ck-body-background":"#2B2B2B","--ck-body-background-transparent":"rgba(0,0,0,0)","--ck-body-background-secondary":"#333333","--ck-body-background-secondary-hover-background":"#4D4D4D","--ck-body-background-secondary-hover-outline":"#ffffff","--ck-body-background-tertiary":"#333333","--ck-body-action-color":"#808080","--ck-body-divider":"#383838","--ck-body-color-danger":"#FF4E4E","--ck-body-disclaimer-color":"#858585","--ck-body-disclaimer-link-color":"#ADADAD","--ck-body-disclaimer-link-hover-color":"#FFFFFF","--ck-modal-box-shadow":"0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-copytoclipboard-stroke":"#555555","--ck-tooltip-background":"#2B2B2B","--ck-tooltip-background-secondary":"#333333","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-dropdown-button-color":"#6C7381","--ck-spinner-color":"var(--ck-focus-color)","--ck-qr-dot-color":"#ffffff","--ck-qr-border-color":"#3d3d3d"};let eP={default:{"--ck-font-family":`-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji',
    'Segoe UI Symbol'`,"--ck-border-radius":"20px","--ck-secondary-button-border-radius":"16px"},graphics:{light:{"--ck-graphic-wave-stop-01":"#E8F17D","--ck-graphic-wave-stop-02":"#A8ECDE","--ck-graphic-wave-stop-03":"#7AA1F2","--ck-graphic-wave-stop-04":"#DEA1E8","--ck-graphic-wave-stop-05":"#F46D98","--ck-graphic-scaniconwithlogos-01":"#4E4E4E","--ck-graphic-scaniconwithlogos-02":"#272727","--ck-graphic-scaniconwithlogos-03":"#F8D74A","--ck-graphic-scaniconwithlogos-04":"#F6F7F9","--ck-chain-ethereum-01":"#25292E","--ck-chain-ethereum-02":"#ffffff","--ck-chain-ethereum-03":"#DFE0E0"},dark:{"--ck-graphic-wave-stop-01":"#E8F17D","--ck-graphic-wave-stop-02":"#A8ECDE","--ck-graphic-wave-stop-03":"#7AA1F2","--ck-graphic-wave-stop-04":"#DEA1E8","--ck-graphic-wave-stop-05":"#F46D98","--ck-graphic-scaniconwithlogos-01":"#AFAFAF","--ck-graphic-scaniconwithlogos-02":"#696969","--ck-graphic-scaniconwithlogos-03":"#F8D74A","--ck-graphic-scaniconwithlogos-04":"#3D3D3D"}},ens:{light:{"--ck-ens-01-start":"#FF3B30","--ck-ens-01-stop":"#FF9500","--ck-ens-02-start":"#FF9500","--ck-ens-02-stop":"#FFCC00","--ck-ens-03-start":"#FFCC00","--ck-ens-03-stop":"#34C759","--ck-ens-04-start":"#5856D6","--ck-ens-04-stop":"#AF52DE","--ck-ens-05-start":"#5AC8FA","--ck-ens-05-stop":"#007AFF","--ck-ens-06-start":"#007AFF","--ck-ens-06-stop":"#5856D6","--ck-ens-07-start":"#5856D6","--ck-ens-07-stop":"#AF52DE","--ck-ens-08-start":"#AF52DE","--ck-ens-08-stop":"#FF2D55"},dark:{"--ck-ens-01-start":"#FF453A","--ck-ens-01-stop":"#FF9F0A","--ck-ens-02-start":"#FF9F0A","--ck-ens-02-stop":"#FFD60A","--ck-ens-03-start":"#FFD60A","--ck-ens-03-stop":"#32D74B","--ck-ens-04-start":"#32D74B","--ck-ens-04-stop":"#64D2FF","--ck-ens-05-start":"#64D2FF","--ck-ens-05-stop":"#0A84FF","--ck-ens-06-start":"#0A84FF","--ck-ens-06-stop":"#5E5CE6","--ck-ens-07-start":"#5E5CE6","--ck-ens-07-stop":"#BF5AF2","--ck-ens-08-start":"#BF5AF2","--ck-ens-08-stop":"#FF2D55"}},brand:{"--ck-family-accounts-brand":"#0090ff","--ck-family-brand":"#1A88F8","--ck-brand-walletConnect":"#3B99FC","--ck-brand-coinbaseWallet":"#0052FF","--ck-brand-metamask":"#f6851b","--ck-brand-metamask-01":"#F6851B","--ck-brand-metamask-02":"#E2761B","--ck-brand-metamask-03":"#CD6116","--ck-brand-metamask-04":"#161616","--ck-brand-metamask-05":"#763D16","--ck-brand-metamask-06":"#D7C1B3","--ck-brand-metamask-07":"#C0AD9E","--ck-brand-metamask-08":"#E4761B","--ck-brand-metamask-09":"#233447","--ck-brand-metamask-10":"#E4751F","--ck-brand-metamask-11":"#FEF5E7","--ck-brand-metamask-12":"#E3C8AB","--ck-brand-trust-01":"#3375BB","--ck-brand-trust-02":"#ffffff","--ck-brand-trust-01b":"#ffffff","--ck-brand-trust-02b":"#3375BB","--ck-brand-argent":"#f36a3d","--ck-brand-imtoken-01":"#11C4D1","--ck-brand-imtoken-02":"#0062AD","--ck-brand-safe":"#12FF80","--ck-brand-dawn":"#000000"}},eQ=eH,eZ=eG,eV=eU,eY={"--ck-font-family":'"SF Pro Rounded",ui-rounded,"Nunito",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"8px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-color":"#000000","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"-4px 4px 0px #000000, inset 0 0 0 2px #000000","--ck-connectbutton-border-radius":"8px","--ck-connectbutton-hover-background":"#F3EDE8","--ck-connectbutton-active-box-shadow":"0 0 0 0 #000000, inset 0 0 0 2px #000000","--ck-connectbutton-balance-color":"#000000","--ck-connectbutton-balance-background":"#F3EDE8","--ck-connectbutton-balance-box-shadow":"-4px 4px 0px #000000, inset 0 0 0 2px #000000","--ck-connectbutton-balance-hover-background":"#eee5dd","--ck-connectbutton-balance-connectbutton-box-shadow":"-4px 8px 0px -4px #000000, inset 0 0 0 2px #000000","--ck-connectbutton-balance-connectbutton-border-radius":"0px 8px 8px 0","--ck-primary-button-color":"#373737","--ck-primary-button-background":"#ffffff","--ck-primary-button-box-shadow":"inset 0 0 0 2px #000000, -4px 4px 0 0 #000000","--ck-primary-button-border-radius":"8px","--ck-primary-button-hover-background":"#F3EDE8","--ck-primary-button-hover-box-shadow":"inset 0 0 0 2px #000000, -0px 0px 0 0 #000000","--ck-secondary-button-border-radius":"8px","--ck-secondary-button-color":"#373737","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-box-shadow":"-4px 4px 0 0 #000000, inset 0 0 0 2px #000000","--ck-secondary-button-hover-background":"#F3EDE8","--ck-secondary-button-hover-box-shadow":"0 0 0 0 #000000, inset 0 0 0 2px #000000","--ck-focus-color":"#3B99FC","--ck-overlay-background":"rgba(133, 120, 122, 0.8)","--ck-body-color":"#373737","--ck-body-color-muted":"rgba(0, 0, 0, 0.5)","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#EBE1D8","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"rgba(0,0,0,0.1)","--ck-body-background-secondary-hover-background":"#4D4D4D","--ck-body-background-secondary-hover-outline":"#373737","--ck-body-background-tertiary":"#ffffff","--ck-tertiary-border-radius":"8px","--ck-tertiary-box-shadow":"-4px 4px 0 0 #000000, inset 0 0 0 2px #000000","--ck-body-action-color":"#373737","--ck-body-divider":"#373737","--ck-body-color-danger":"#FF4E4E","--ck-body-disclaimer-background":"#E3D6C9","--ck-body-disclaimer-box-shadow":"-4px 4px 0 0 #000000, inset 2px 0 0 0 #000000, inset -2px 0 0 0 #000000, inset 0 -2px 0 0 #000000","--ck-body-disclaimer-font-weight":"500","--ck-body-disclaimer-color":"#888079","--ck-body-disclaimer-link-color":"#5B5650","--ck-body-disclaimer-link-hover-color":"#000000","--ck-modal-box-shadow":"-10px 10px 0px #000000, inset 0 0 0 2px #000000","--ck-copytoclipboard-stroke":"#555555","--ck-tooltip-border-radius":"8px","--ck-tooltip-color":"#373737","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#EBE1D8","--ck-tooltip-shadow":"-6px 6px 0 0 #000000, 0 0 0 2px #000000","--ck-spinner-color":"#1A88F8","--ck-dropdown-button-color":"#000","--ck-dropdown-button-box-shadow":"-2px 2px 0 2px #000000,  0 0 0 2px #000000","--ck-dropdown-button-background":"#ffffff","--ck-dropdown-button-hover-background":"#F3EDE8","--ck-dropdown-button-hover-box-shadow":"-2px 2px 0 0 #000000,  0 0 0 2px #000000","--ck-dropdown-pending-color":"rgba(0, 0, 0, 0.5)","--ck-dropdown-active-color":"#FFFFFF","--ck-dropdown-active-static-color":"rgba(0, 0, 0, 0.5)","--ck-dropdown-active-background":"#3B99FC","--ck-dropdown-active-box-shadow":"inset 0 0 0 2px #000000","--ck-dropdown-active-border-radius":"8px","--ck-dropdown-color":"rgba(0, 0, 0, 0.5)","--ck-dropdown-background":"#FFFFFF","--ck-dropdown-box-shadow":"-4px 4px 0 0 #000000, inset 0 0 0 2px #000000","--ck-dropdown-border-radius":"8px","--ck-alert-color":"rgba(0, 0, 0, 0.5)","--ck-alert-background":" #F5F5F5","--ck-alert-border-radius":"8px","--ck-qr-border-radius":"8px","--ck-qr-dot-color":"#000000","--ck-qr-border-color":"#000000","--ck-qr-background":"#ffffff","--ck-recent-badge-border-radius":"32px","--ck-recent-badge-box-shadow":"inset 0 0 0 2px currentColor","--ck-graphic-primary-color":"#000000","--ck-graphic-primary-background":"#ffffff","--ck-graphic-compass-background":"#FFFFFF","--ck-siwe-border":"#8E8985"},eJ={"--ck-border-radius":"12px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-border-radius":"12px","--ck-connectbutton-color":"#414451","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"inset 0 0 0 1px #E9EAEC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-hover-background":"#F6F7F9","--ck-connectbutton-hover-box-shadow":"inset 0 0 0 1px #E9EAEC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-balance-color":"#373737","--ck-connectbutton-balance-background":"#F6F7F9","--ck-connectbutton-balance-box-shadow":"none","--ck-connectbutton-balance-hover-background":"#f1f1f3","--ck-primary-button-border-radius":"12px","--ck-primary-button-color":"#414451","--ck-primary-button-background":"#ffffff","--ck-primary-button-box-shadow":"0 0 0 1px #E9EAEC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-primary-button-hover-background":"#F6F7F9","--ck-primary-button-hover-box-shadow":"0 0 0 1px #D9DBDD, 0px 0 0 rgba(0, 0, 0, 0.02)","--ck-secondary-button-border-radius":"12px","--ck-secondary-button-color":"#414451","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-box-shadow":"0 0 0 1px #E9EAEC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-secondary-button-hover-background":"#F6F7F9","--ck-secondary-button-hover-box-shadow":"0 0 0 1px #D9DBDD, 0px 0 0 rgba(0, 0, 0, 0.02)","--ck-focus-color":"#1A88F8","--ck-modal-box-shadow":"0px 3px 16px rgba(0, 0, 0, 0.08)","--ck-body-color":"#414451","--ck-body-color-muted":"#9196A1","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#ffffff","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#f6f7f9","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-background-tertiary":"#F6F8FA","--ck-tertiary-border-radius":"13px","--ck-tertiary-box-shadow":"inset 0 0 0 1px rgba(0, 0, 0, 0.04)","--ck-body-action-color":"#999999","--ck-body-divider":"#f7f6f8","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#F9FAFA","--ck-body-disclaimer-color":"#AFB1B6","--ck-body-disclaimer-link-color":"#787B84","--ck-body-disclaimer-link-hover-color":"#000000","--ck-copytoclipboard-stroke":"#CCCCCC","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px rgba(0, 0, 0, 0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#E7E7E7","--ck-dropdown-color":"rgba(55, 55, 55, 0.4)","--ck-dropdown-box-shadow":"0px 2px 15px rgba(0, 0, 0, 0.15)","--ck-alert-color":"#9196A1","--ck-alert-background":"#F6F8FA","--ck-alert-box-shadow":"inset 0 0 0 1px rgba(0, 0, 0, 0.04)","--ck-alert-border-radius":"8px","--ck-qr-border-radius":"12px","--ck-qr-dot-color":"#2E3138","--ck-qr-border-color":"#E9EAEC","--ck-siwe-border":"#EAEBED"},eq={"--ck-font-family":'"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"10px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-border-radius":"8px","--ck-connectbutton-color":"#ffffff","--ck-connectbutton-background":"#313235","--ck-connectbutton-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.05)","--ck-connectbutton-hover-background":"#414144","--ck-connectbutton-active-background":"#4C4D4F","--ck-connectbutton-balance-color":"#ffffff","--ck-connectbutton-balance-background":"#1F2023","--ck-connectbutton-balance-box-shadow":"inset 0 0 0 1px #313235","--ck-connectbutton-balance-hover-background":"#313235","--ck-connectbutton-balance-active-background":"#414144","--ck-primary-button-border-radius":"8px","--ck-primary-button-color":"#ffffff","--ck-primary-button-background":"rgba(255, 255, 255, 0.08)","--ck-primary-button-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.05)","--ck-primary-button-hover-background":"rgba(255, 255, 255, 0.2)","--ck-secondary-button-border-radius":"8px","--ck-secondary-button-color":"#ffffff","--ck-secondary-button-background":"#363638","--ck-secondary-button-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.05)","--ck-secondary-button-hover-background":"#3c3c3e","--ck-overlay-background":"rgba(0,0,0,0.4)","--ck-modal-box-shadow":"inset 0 0 0 1px #38393C, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-focus-color":"#1A88F8","--ck-body-color":"#ffffff","--ck-body-color-muted":"#8B8F97","--ck-body-color-muted-hover":"#ffffff","--ck-body-background":"#1F2023","--ck-body-background-transparent":"rgba(31, 32, 35, 0)","--ck-body-background-secondary":"#313235","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"rgba(255, 255, 255, 0.02)","--ck-body-background-tertiary":"#313235","--ck-tertiary-border-radius":"12px","--ck-tertiary-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.02)","--ck-body-action-color":"#8B8F97","--ck-body-divider":"rgba(255,255,255,0.1)","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#2B2D31","--ck-body-disclaimer-box-shadow":"none","--ck-body-disclaimer-color":"#808183","--ck-body-disclaimer-link-color":"#AAABAD","--ck-body-disclaimer-link-hover-color":"#ffffff","--ck-copytoclipboard-stroke":"#CCCCCC","--ck-tooltip-background":"#1F2023","--ck-tooltip-background-secondary":"#1F2023","--ck-tooltip-color":"#ffffff","--ck-tooltip-shadow":" 0 0 0 1px rgba(255, 255, 255, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#6C7381","--ck-dropdown-button-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.05)","--ck-dropdown-button-background":"#313235","--ck-dropdown-pending-color":"#8B8F97","--ck-dropdown-active-color":"#FFF","--ck-dropdown-active-static-color":"#FFF","--ck-dropdown-active-background":"rgba(255, 255, 255, 0.07)","--ck-dropdown-color":"#8B8F97","--ck-dropdown-background":"#313235","--ck-dropdown-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.03)","--ck-dropdown-border-radius":"8px","--ck-alert-color":"#8B8F97","--ck-alert-background":"#404145","--ck-alert-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.02)","--ck-qr-border-radius":"12px","--ck-qr-dot-color":"#ffffff","--ck-qr-border-color":"rgba(255,255,255,0.1)","--ck-recent-badge-border-radius":"32px"},eK={"--ck-font-family":'"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"0px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-border-radius":"0px","--ck-connectbutton-color":"#414451","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"inset 0 0 0 1px #EBEBEB","--ck-connectbutton-hover-color":"#111","--ck-connectbutton-hover-box-shadow":"inset 0 0 0 1px #111","--ck-connectbutton-balance-color":"#111111","--ck-connectbutton-balance-background":"#F7F7F7","--ck-connectbutton-balance-box-shadow":"inset 0 0 0 1px #F7F7F7","--ck-connectbutton-balance-hover-background":"#f1f1f3","--ck-connectbutton-balance-hover-box-shadow":"inset 0 0 0 1px #111","--ck-primary-button-border-radius":"0px","--ck-primary-button-color":"#111111","--ck-primary-button-background":"#ffffff","--ck-primary-button-box-shadow":"inset 0 0 0 1px #EBEBEB","--ck-primary-button-hover-box-shadow":"inset 0 0 0 1px #111111","--ck-secondary-button-border-radius":"0px","--ck-secondary-button-color":"#111111","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-box-shadow":"inset 0 0 0 1px #EBEBEB","--ck-secondary-button-hover-box-shadow":"inset 0 0 0 1px #111111","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px rgba(0, 0, 0, 0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#E7E7E7","--ck-focus-color":"#1A88F8","--ck-modal-box-shadow":"0px 3px 16px rgba(0, 0, 0, 0.08)","--ck-body-color":"#111111","--ck-body-color-muted":"#A0A0A0","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#ffffff","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#f6f7f9","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-background-tertiary":"#ffffff","--ck-tertiary-border-radius":"0px","--ck-tertiary-box-shadow":"inset 0 0 0 1px rgba(0, 0, 0, 0.04)","--ck-body-action-color":"#A0A0A0","--ck-body-divider":"#EBEBEB","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#FAFAFA","--ck-body-disclaimer-box-shadow":"inset 0 1px 0 0 #ECECEC","--ck-body-disclaimer-color":"#9D9D9D","--ck-body-disclaimer-link-color":"#6E6E6E","--ck-body-disclaimer-link-hover-color":"#000000","--ck-copytoclipboard-stroke":"#CCCCCC","--ck-tooltip-border-radius":"0px","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-active-border-radius":"0","--ck-dropdown-box-shadow":"0px 2px 15px rgba(0, 0, 0, 0.15)","--ck-dropdown-border-radius":"0","--ck-alert-color":"rgba(17, 17, 17, 0.4)","--ck-alert-background":"#fff","--ck-alert-box-shadow":"inset 0 0 0 1px #EBEBEB","--ck-alert-border-radius":"0","--ck-qr-border-radius":"0px","--ck-qr-dot-color":"#111111","--ck-qr-border-color":"#EBEBEB","--ck-modal-h1-font-weight":"400","--ck-modal-heading-font-weight":"400","--ck-primary-button-font-weight":"400","--ck-recent-badge-top-offset":"0px","--ck-siwe-border":"#EBEBEB"},eX={"--ck-font-family":'"Nunito",ui-rounded,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"24px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-font-weight":"700","--ck-connectbutton-border-radius":"14px","--ck-connectbutton-color":"#000000","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"inset 0 0 0 2px #DFE4EC, 0 2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-hover-background":"#F9FAFB","--ck-connectbutton-balance-color":"#414451","--ck-connectbutton-balance-background":"#F9FAFB","--ck-connectbutton-balance-box-shadow":"0 2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-balance-hover-background":"#F5F7F9","--ck-connectbutton-balance-hover-box-shadow":"0 2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-balance-active-box-shadow":"0 0 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-active-background":"#F5F7F9","--ck-connectbutton-active-box-shadow":"inset 0 0 0 2px #CFD7E2, 0 0px 0 0 #CFD7E2, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-primary-button-border-radius":"18px","--ck-primary-button-color":"#000000","--ck-primary-button-background":"#ffffff","--ck-primary-button-box-shadow":"inset 0 0 0 2px #DFE4EC, inset  0 -4px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-primary-button-hover-background":"#F5F7F9","--ck-primary-button-hover-box-shadow":"inset 0 0 0 2px #DFE4EC, inset  0 -2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-secondary-button-border-radius":"16px","--ck-secondary-button-color":"#000000","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-box-shadow":"inset 0 0 0 2px #DFE4EC, inset  0 -4px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-secondary-button-hover-background":"#F5F7F9","--ck-secondary-button-hover-box-shadow":"inset 0 0 0 2px #DFE4EC, inset  0 -2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-focus-color":"#1A88F8","--ck-modal-box-shadow":"0px 3px 16px rgba(0, 0, 0, 0.08)","--ck-body-color":"#000000","--ck-body-color-muted":"#93989F","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#ffffff","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#f6f7f9","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-background-tertiary":"#ffffff","--ck-tertiary-border-radius":"22px","--ck-tertiary-box-shadow":"inset 0 0 0 2px #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-body-action-color":"#93989F","--ck-body-divider":"#DFE4EC","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#F9FAFB","--ck-body-disclaimer-font-size":"14px","--ck-body-disclaimer-font-weight":"700","--ck-body-disclaimer-color":"#959697","--ck-body-disclaimer-link-color":"#646464","--ck-body-disclaimer-link-hover-color":"#000000","--ck-copytoclipboard-stroke":"#CCCCCC","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":" 0 0 0 2px #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 2px #DFE4EC,  0 2px 0 2px #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#F5F7F9","--ck-dropdown-pending-color":"#848D9A","--ck-dropdown-active-color":"#000000","--ck-dropdown-active-static-color":"#848D9A","--ck-dropdown-active-background":"#F5F7F9","--ck-dropdown-color":"#848D9A","--ck-dropdown-background":"#FFFFFF","--ck-dropdown-box-shadow":"0px 2px 15px rgba(0, 0, 0, 0.15)","--ck-dropdown-border-radius":"16px","--ck-alert-color":"#848D9A","--ck-alert-background":"#F5F7F9","--ck-qr-border-radius":"24px","--ck-qr-dot-color":"#111111","--ck-qr-border-color":"#DFE4EC","--ck-modal-h1-font-weight":"700","--ck-modal-heading-font-weight":"700","--ck-primary-button-font-weight":"700","--ck-recent-badge-box-shadow":"inset 0 0 0 2px currentColor","--ck-recent-badge-top-offset":"0px","--ck-siwe-border":"#DFE4EC"},e$={"--ck-font-family":'"PT Root UI",ui-rounded,"Nunito",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"24px","--ck-connectbutton-font-size":"16px","--ck-connectbutton-font-weight":"700","--ck-connectbutton-border-radius":"10px","--ck-connectbutton-color":"#151C3B","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"inset 0 0 0 1px #D6D8E1","--ck-connectbutton-hover-background":"#E9EBF3","--ck-connectbutton-hover-box-shadow":"inset 0 0 0 1px #D4D8E8","--ck-connectbutton-active-background":"#D4D8E8","--ck-connectbutton-active-box-shadow":"inset 0 0 0 1px #D4D8E8","--ck-connectbutton-balance-color":"#373737","--ck-connectbutton-balance-background":"#F6F7F9","--ck-connectbutton-balance-box-shadow":"none","--ck-connectbutton-balance-hover-background":"#f1f1f3","--ck-primary-button-border-radius":"16px","--ck-primary-button-color":"#151C3B","--ck-primary-button-background":"#ffffff","--ck-primary-button-font-weight":"700","--ck-primary-button-hover-background":"#DEE1ED","--ck-secondary-button-border-radius":"16px","--ck-secondary-button-color":"#151C3B","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-font-weight":"700","--ck-secondary-button-hover-background":"#DEE1ED","--ck-focus-color":"#1A88F8","--ck-modal-box-shadow":"0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-overlay-background":"rgba(213, 215, 225, 0.8)","--ck-overlay-backdrop-filter":"blur(6px)","--ck-body-color":"#151C3B","--ck-body-color-muted":"#757A8E","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#F4F4F8","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#E9E9F1","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-tertiary":"#E9E9F1","--ck-tertiary-border-radius":"24px","--ck-body-action-color":"#79809C","--ck-body-divider":"#D9DBE3","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#F9FAFA","--ck-body-disclaimer-color":"#AFB1B6","--ck-body-disclaimer-link-color":"#787B84","--ck-body-disclaimer-link-hover-color":"#000000","--ck-copytoclipboard-stroke":"#79809C","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px rgba(0, 0, 0, 0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#DEE1ED","--ck-dropdown-button-hover-box-shadow":"0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-color":"#757A8E","--ck-dropdown-box-shadow":"0 0 0 1px rgba(0, 0, 0, 0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-alert-color":"#9196A1","--ck-alert-background":"#F6F8FA","--ck-alert-box-shadow":"inset 0 0 0 1px rgba(0, 0, 0, 0.04)","--ck-alert-border-radius":"8px","--ck-qr-border-radius":"24px","--ck-qr-dot-color":"#000000","--ck-qr-background":"#ffffff","--ck-recent-badge-color":"#79809C","--ck-recent-badge-background":"#F4F4F8","--ck-recent-badge-box-shadow":"none","--ck-siwe-border":"#DFE4EC","--ck-graphic-primary-background":"#fff","--ck-graphic-compass-background":"#fff","--ck-graphic-primary-box-shadow":"0px 2.94737px 14.7368px rgba(0, 0, 0, 0.1)","--ck-graphic-compass-box-shadow":"0px 2px 9px rgba(0, 0, 0, 0.15)"},e1=(e,t)=>{let n=t?" !important":"";return z.css`
    ${Object.keys(e).map(t=>{let o=e[t];return o&&`${t}:${o}${n};`})}
    @supports (color: color(display-p3 1 1 1)) {
      ${Object.keys(e).map(t=>{let o=e[t];return`${t}:${(e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(null==t)return e;let n={r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)};return`color(display-p3 ${n.r/255} ${n.g/255} ${n.b/255})`})(o)}${n};`})}
    }
  `},e0={default:(o=eP.default,z.css`
    ${Object.keys(o).map(e=>{let t=o[e];return t&&`${e}:${t};`})}
  `),light:e1(eQ),dark:e1(eZ),web95:e1(eV),retro:e1(eY),soft:e1(eJ),midnight:e1(eq),minimal:e1(eK),rounded:e1(eX),nouns:e1(e$)},e2={brand:e1(eP.brand),ensLight:e1(eP.ens.light),ensDark:e1(eP.ens.dark),graphicsLight:e1(eP.graphics.light),graphicsDark:e1(eP.graphics.dark)},e3=z.css`
  ${e2.brand}
  ${e2.ensLight}
  ${e2.graphicsLight}
`,e5=z.css`
  ${e2.brand}
  ${e2.ensDark}
  ${e2.graphicsDark}
`,e4="auto",e8=eW(D.motion.div)`
  ${e0.default}

  ${e=>{switch(e.$useTheme){case"web95":return e4="light",e0.web95;case"retro":return e4="light",e0.retro;case"soft":return e4="light",e0.soft;case"midnight":return e4="dark",e0.midnight;case"minimal":return e4="light",e0.minimal;case"rounded":return e4="light",e0.rounded;case"nouns":return e4="light",e0.nouns;default:if("light"===e.$useMode)return e4="light",e0.light;if("dark"===e.$useMode)return e4="dark",e0.dark;return z.css`
            @media (prefers-color-scheme: light) {
              ${e0.light}
            }
            @media (prefers-color-scheme: dark) {
              ${e0.dark}
            }
          `}}}

  ${e=>{switch(e4){case"light":return e3;case"dark":return e5;default:return z.css`
          ${e3}
          @media (prefers-color-scheme: dark) {
            ${e5}
          }
        `}}}

  ${e=>{var t;if(e.$customTheme&&e.$customTheme["--ck-accent-color"]&&["light","dark","auto","",void 0].includes(e.$useTheme)){let n=e.$customTheme["--ck-accent-color"],o=null!=(t=e.$customTheme["--ck-accent-text-color"])?t:"#ffffff";return{"--ck-accent-color":n,"--ck-accent-text-color":o,"--ck-secondary-button-background":n,"--ck-secondary-button-hover-background":n,"--ck-secondary-button-color":o,"--ck-button-primary-color":o,"--ck-focus-color":n}}if(e.$customTheme)return e1(e.$customTheme,!0)}}

  all: initial;
  text-align: left;
  text-direction: ltr;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 0.001px transparent;
  text-size-adjust: none;
  font-size: 16px;

  button {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 0.001px transparent;
  }

  &,
  * {
    font-family: var(--ck-font-family);
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  /*
  @media (prefers-reduced-motion) {
    * {
      animation-duration: 60ms !important;
      transition-duration: 60ms !important;
    }
  }
  */
  img,
  svg {
    max-width: 100%;
  }
  strong {
    font-weight: 600;
  }
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--ck-focus-color);
  }
`,e9=e=>{let{selector:t,children:n}=e={selector:"__CONNECTKIT__",...e},o=(0,O.useRef)(null),[r,i]=(0,O.useState)(!1);return((0,O.useEffect)(()=>{let e="#"+t.replace(/^#/,"");if(o.current=document.querySelector(e),!o.current){let e=document.createElement("div");e.setAttribute("id",t),e.setAttribute("data-connectkit",`${aS}`),document.body.appendChild(e),o.current=e}i(!0)},[t]),o.current&&r)?(0,W.createPortal)(n,o.current):null},e6=eW(D.motion.div)`
  z-index: -1;
  pointer-events: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: var(--width);
  top: 64px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  background: var(--ck-body-color-danger);
  border-radius: 20px;
  padding: 24px 46px 82px 24px;
  transition: width var(--duration) var(--ease);
  a {
    font-weight: 700;
    text-decoration: underline;
  }
  code {
    font-size: 0.9em;
    display: inline-block;
    font-family: monospace;
    margin: 1px;
    padding: 0 4px;
    border-radius: 8px;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.1);
  }
`,e7=z.keyframes`
from { opacity: 0; }
  to { opacity: 1; }
`,te=z.keyframes`
from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
`,tt=z.keyframes`
from { opacity: 0; transform: scale(1.1); }
  to { opacity: 1; transform: scale(1); }
`,tn=z.keyframes`
from { opacity: 1; }
  to { opacity: 0; }
`,to=z.keyframes`
from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(1.1); }
`,tr=z.keyframes`
from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.85); }
`,ti=eW(D.motion.div)`
  max-width: 100%;
  width: 295px;
  padding-top: 48px;
`,ta=eW(D.motion.div)`
  user-select: none;
  position: relative;
  display: block;
  text-align: center;
  color: var(--ck-body-color-muted);
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  span {
    z-index: 2;
    position: relative;
    display: inline-block;
    user-select: none;
    pointer-events: none;
    padding: 0 14px;
    background: var(--ck-body-background);
    transition: background-color 200ms ease;
  }
  ${e=>!e.$disableHr&&`
  &:before {
    z-index: 2;
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    transform: translateY(-1px);
    background: var(--ck-body-divider);
    box-shadow: var(--ck-body-divider-box-shadow);
  }
    `}
`,ts=eW(D.motion.div)`
  z-index: 3;
  pointer-events: none;
  user-select: none;
  position: absolute;
  top: 25px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  transform: translateX(-50%);
  width: var(--width);
  text-align: center;
  font-size: 17px;
  line-height: 20px;
  font-weight: var(--ck-modal-heading-font-weight, 600);
  color: var(--ck-body-color);
  span {
    display: inline-block;
  }
`,tc=eW(D.motion.div)`
  position: relative;
  padding: 0;
`,tl=eW(D.motion.div)`
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 0 16px;

  @media only screen and (max-width: ${560}px) {
    display: block;
  }
`,td=eW(D.motion.h1)`
  margin: 0;
  padding: 0;
  line-height: ${e=>e.$small?20:22}px;
  font-size: ${e=>e.$small?17:19}px;
  font-weight: var(--ck-modal-h1-font-weight, 600);
  color: ${e=>e.$error?"var(--ck-body-color-danger)":e.$valid?"var(--ck-body-color-valid)":"var(--ck-body-color)"};
  > svg {
    position: relative;
    top: -2px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
  }
  @media only screen and (max-width: ${560}px) {
    margin-bottom: 6px;
    font-size: 17px;
  }
`,tu=eW.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  color: var(--ck-body-color-muted);
  strong {
    font-weight: 500;
    color: var(--ck-body-color);
  }
`;eW.div`
  padding: 0 12px;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  color: var(--ck-body-color-muted);
  strong {
    font-weight: 500;
    color: var(--ck-body-color);
  }
`;let tp=eW(D.motion.div)`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--ck-overlay-background, rgba(71, 88, 107, 0.24));
  backdrop-filter: ${e=>e.$blur?`blur(${e.$blur}px)`:"var(--ck-overlay-backdrop-filter, none)"};
  opacity: 0;
  animation: ${e=>e.$active?e7:tn} 150ms ease-out
    both;
`,th=z.keyframes`
  from{ opacity: 0; transform: scale(0.97); }
  to{ opacity: 1; transform: scale(1); }
`,tg=z.keyframes`
  from{ opacity: 1; transform: scale(1); }
  to{ opacity: 0; transform: scale(0.97); }
`,tf=z.keyframes`
  from { transform: translate3d(0, 100%, 0); }
  to { transform: translate3d(0, 0%, 0); }
`,tb=z.keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`,tx=eW(D.motion.div)`
  z-index: 2;
  position: relative;
  color: var(--ck-body-color);

  animation: 150ms ease both;
  animation-name: ${tg};
  &.active {
    animation-name: ${th};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: var(--width);
    height: var(--height);
    transform: translateX(-50%);
    backface-visibility: hidden;
    transition: all 200ms ease;
    border-radius: var(--ck-border-radius, 20px);
    background: var(--ck-body-background);
    box-shadow: var(--ck-modal-box-shadow);
  }

  @media only screen and (max-width: ${560}px) {
    animation-name: ${tb};
    animation-duration: 130ms;
    animation-timing-function: ease;

    &.active {
      animation-name: ${tf};
      animation-duration: 300ms;
      animation-delay: 32ms;
      animation-timing-function: cubic-bezier(0.15, 1.15, 0.6, 1);
    }

    &:before {
      width: 100%;
      transition: 0ms height cubic-bezier(0.15, 1.15, 0.6, 1);
      will-change: height;
    }
  }
`,tm=eW(D.motion.div)`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 50%;
  height: 64px;
  transform: translateX(-50%);
  backface-visibility: hidden;
  width: var(--width);
  transition: 0.2s ease width;
  pointer-events: auto;
  //border-bottom: 1px solid var(--ck-body-divider);
`,tC=eW(D.motion.div)`
  position: relative;
  overflow: hidden;
  height: var(--height);
  transition: 0.2s ease height;
  @media only screen and (max-width: ${560}px) {
    transition: 0ms height cubic-bezier(0.15, 1.15, 0.6, 1);
    /* animation-delay: 34ms; */
  }
`,tv=eW(D.motion.div)`
  z-index: 2;
  position: relative;
  top: 0;
  left: 50%;
  margin-left: calc(var(--width) / -2);
  width: var(--width);
  /* left: 0; */
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
  animation: 200ms ease both;

  &.active {
    animation-name: ${tt};
  }
  &.active-scale-up {
    animation-name: ${te};
  }
  &.exit-scale-down {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    animation-name: ${tr};
  }
  &.exit {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    /* left: 50%; */
    /* transform: translateX(-50%); */
    animation-name: ${to};
    animation-delay: 16.6667ms;
  }
  @media only screen and (max-width: ${560}px) {
    /* animation: 0ms ease both; */
    /* animation-delay: 35ms; */
    animation: 0ms cubic-bezier(0.15, 1.15, 0.6, 1) both;

    &.active {
      animation-name: ${e7};
    }
    &.active-scale-up {
      animation-name: ${e7};
    }
    &.exit-scale-down {
      z-index: 3;
      animation-name: ${tn};
    }
    &.exit {
      z-index: 3;
      animation-name: ${tn};
      animation-delay: 0ms;
    }
  }
`,tw=eW(D.motion.div)`
  margin: 0 auto;
  width: fit-content;
  padding: 29px 24px 24px;
  backface-visibility: hidden;
`,tk=eW.div`
  z-index: 2147483646; // z-index set one below max (2147483647) for if we wish to layer things ontop of the modal in a seperate Portal
  position: fixed;
  inset: 0;
`,ty=eW(D.motion.button)`
  z-index: 3;
  cursor: pointer;
  position: absolute;
  top: 22px;
  right: 17px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
  }

  &:hover {
    background: var(--ck-body-background-secondary);
  }
  &:active {
    transform: scale(0.9);
  }
`,tA=eW(D.motion.button)`
  z-index: 3;
  position: absolute;
  inset: 0;
  width: 100%; // FireFox fix
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
    position: relative;
  }

  &:enabled {
    cursor: pointer;
    &:hover {
      background: var(--ck-body-background-secondary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`,tj=eW(D.motion.button)`
  z-index: 3;
  position: absolute;
  inset: 0;
  width: 100%; // FireFox fix
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
    position: relative;
    left: -1px;
  }

  &:enabled {
    cursor: pointer;
    &:hover {
      background: var(--ck-body-background-secondary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`,tS=eW(D.motion.button)`
  z-index: 3;
  position: absolute;
  inset: 0;
  width: 100%; // FireFox fix
  transform: translateX(-1px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
    position: relative;
  }
  &:enabled {
    cursor: pointer;
    &:hover {
      background: var(--ck-body-background-secondary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`,tE=eW(D.motion.div)`
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration: 200ms;
  --transition: height var(--duration) var(--ease),
    width var(--duration) var(--ease);
  z-index: 3;
  display: block;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  @media only screen and (max-width: ${560}px) {
    pointer-events: auto;
    left: 0;
    top: auto;
    bottom: -5px;
    transform: none;
    ${tx} {
      max-width: 448px;
      margin: 0 auto;
      &:before {
        width: 100%;
        border-radius: var(--ck-border-radius, 30px)
          var(--ck-border-radius, 30px) 0 0;
      }
    }
    ${tv} {
      left: 0;
      right: 0;
      margin: 0 auto;
      width: auto;
    }
    ${ti} {
      margin: 0 auto;
      width: 100% !important;
    }
    ${ts} {
      top: 29px;
    }
    ${tl} {
      gap: 12px;
    }
    ${tu} {
      margin: 0 auto;
      max-width: 295px;
    }
    ${tw} {
      width: 100%;
      padding: 31px 24px;
    }
    ${tm} {
      width: 100%;
      top: 4px;
      border-bottom: 0;
    }
    ${ty} {
      right: 22px;
    }
    ${tj} {
      top: -1px;
      left: -3px;
    }
    ${tS} {
      top: -1px;
      left: -3px;
      svg {
        width: 65%;
        height: auto;
      }
    }
    ${ty},
    ${tj},
    ${tS} {
      // Quick hack for bigger tappable area on mobile
      transform: scale(1.4) !important;
      background: transparent !important;
      svg {
        transform: scale(0.8) !important;
      }
    }
  }
`,tL=eW(D.motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px -24px -24px -24px;
  padding: 15px 40px 18px;
  font-size: var(--ck-body-disclaimer-font-size, 13px);
  font-weight: var(--ck-body-disclaimer-font-weight, 400);
  text-align: center;
  line-height: 19px;
  color: var(--ck-body-disclaimer-color, var(--ck-body-color-muted, inherit));

  & a {
    color: var(--ck-body-disclaimer-link-color, inherit);
    font-weight: var(--ck-body-disclaimer-font-weight, 400);
    text-decoration: none;
    transition: color 200ms ease;
    &:hover {
      color: var(--ck-body-disclaimer-link-hover-color, inherit);
    }
  }

  @media only screen and (max-width: ${560}px) {
    margin: 24px -24px -26px -24px;
    padding: 20px 42px 22px 42px;
  }
`,tM=eW(D.motion.div)`
  pointer-events: all;
  z-index: 9;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: var(--width);
  backface-visibility: hidden;
  transform: translateX(-50%);
  transform-origin: bottom center;

  border-radius: var(--ck-border-radius, 30px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transition: width 200ms ease;

  background: var(
    --ck-body-disclaimer-background,
    var(--ck-body-background-secondary)
  );
  box-shadow: var(--ck-body-disclaimer-box-shadow);

  ${tL} {
    margin: 0 !important;
    /* visibility: hidden; */
  }

  @media only screen and (max-width: ${560}px) {
    border-radius: 0;
  }
`,tN=eW(D.motion.div)`
  z-index: 2;
  position: absolute;
  top: 100%;
  white-space: nowrap;
  padding: 8px 16px;
  color: #fff;
  font-size: 13px;
  line-height: 1.5;
  background: #1a88f8;
  border-radius: calc(var(--ck-border-radius) * 0.75);
  transform: translateY(8px) translateX(-48px);
  box-shadow: var(--ck-modal-box-shadow);
  &:before {
    content: '';
    position: absolute;
    box-shadow: var(--shadow);
    width: 18px;
    height: 18px;
    transform: translate(215%, -75%) rotate(45deg);
    background: inherit;
    border-radius: 3px 0 0 0;
  }

  @media only screen and (max-width: ${560}px) {
    transform: translateY(8px) translateX(-16px);
    &:before {
      transform: translate(40%, -75%) rotate(45deg);
    }
  }
`,tI="u">typeof window?O.useLayoutEffect:O.useEffect;function tF(e){let[t,n]=(0,O.useState)(e),o=ar();return tI(()=>{var e;if(!t)return;let n={overflow:document.body.style.overflow,position:document.body.style.position,touchAction:document.body.style.touchAction,paddingRight:document.body.style.paddingRight},r=getComputedStyle(document.body),i=parseInt(r.marginRight)+parseInt(r.paddingRight)+parseInt(r.borderRight)+parseInt(r.marginLeft)+parseInt(r.paddingLeft)+parseInt(r.borderLeft),a=window.innerWidth-document.body.offsetWidth-i;return document.documentElement.style.setProperty("--ck-scrollbar-width",`${a}px`),document.body.style.overflow="hidden",document.body.style.position="relative",document.body.style.touchAction="none",(null==(e=o.options)?void 0:e.avoidLayoutShift)&&(document.body.style.paddingRight=`${a}px`),()=>{var e;document.documentElement.style.removeProperty("--ck-scrollbar-width"),document.body.style.overflow=n.overflow,document.body.style.position=n.position,document.body.style.touchAction=n.touchAction,(null==(e=o.options)?void 0:e.avoidLayoutShift)&&(document.body.style.paddingRight=n.paddingRight)}},[t]),(0,O.useEffect)(()=>{t!==e&&n(e)},[e]),[t,n]}function tO(e){let t=function(){let e=(0,O.useRef)(null);function t(t){if(e.current){var n=e.current.querySelectorAll(`
        a[href]:not(:disabled),
        button:not(:disabled),
        textarea:not(:disabled),
        input[type="text"]:not(:disabled),
        input[type="radio"]:not(:disabled),
        input[type="checkbox"]:not(:disabled),
        select:not(:disabled)
      `),o=n[0],r=n[n.length-1];("Tab"===t.key||9===t.keyCode)&&(t.shiftKey?document.activeElement===o&&(r.focus(),t.preventDefault()):document.activeElement===r&&(o.focus(),t.preventDefault()))}}return(0,O.useEffect)(()=>(e.current&&(e.current.addEventListener("keydown",t),e.current.focus({preventScroll:!0})),()=>{e.current&&e.current.removeEventListener("keydown",t)}),[]),e}();return(0,O.useEffect)(()=>{t.current&&t.current.focus({preventScroll:!0})},[]),(0,F.jsx)("div",{ref:t,tabIndex:0,children:e.children})}function tB(e,t){let n=(0,O.useRef)({target:e,previous:t});return n.current.target!==e&&(n.current.previous=n.current.target,n.current.target=e),n.current.previous}let t_=(0,O.createContext)(null),tD=({children:e,theme:t="auto",mode:n="auto",customTheme:o})=>(0,O.createElement)(t_.Provider,{value:{theme:t,mode:n,customTheme:o}},(0,F.jsx)(F.Fragment,{children:e})),tR=()=>{let e=O.default.useContext(t_);if(!e)throw Error("ConnectKitThemeProvider must be inside a Provider.");return e},tT=({...e})=>(0,F.jsxs)("svg",{"aria-hidden":"true",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{left:0,top:0},...e,children:[(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 4C2.89543 4 2 4.89543 2 6V12C2 13.1046 2.89543 14 4 14H10C11.1046 14 12 13.1046 12 12V9.66667C12 9.11438 12.4477 8.66667 13 8.66667C13.5523 8.66667 14 9.11438 14 9.66667V12C14 14.2091 12.2091 16 10 16H4C1.79086 16 0 14.2091 0 12V6C0 3.79086 1.79086 2 4 2H6.33333C6.88562 2 7.33333 2.44772 7.33333 3C7.33333 3.55228 6.88562 4 6.33333 4H4Z",fill:"currentColor",fillOpacity:.3}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.5 1C9.5 0.447715 9.94772 0 10.5 0H15C15.5523 0 16 0.447715 16 1V5.5C16 6.05228 15.5523 6.5 15 6.5C14.4477 6.5 14 6.05228 14 5.5V3.41421L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289L12.5858 2H10.5C9.94772 2 9.5 1.55228 9.5 1Z",fill:"currentColor",fillOpacity:.3})]}),tz=({...e})=>(0,F.jsxs)("svg",{"aria-hidden":"true",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.81753 1.60122C7.39283 0.530035 8.46953 0 9.50409 0C10.5507 0 11.6022 0.539558 12.1805 1.59767L18.6047 13.3334C18.882 13.8283 19 14.3568 19 14.8622C19 16.5296 17.7949 18 15.9149 18H3.08514C1.20508 18 0 16.5296 0 14.8622C0 14.3454 0.131445 13.8172 0.405555 13.3379L6.81753 1.60122ZM9.50409 2C9.13355 2 8.77256 2.18675 8.57866 2.54907L8.57458 2.5567L2.14992 14.3166L2.144 14.3268C2.04638 14.4959 2 14.6817 2 14.8622C2 15.5497 2.43032 16 3.08514 16H15.9149C16.5697 16 17 15.5497 17 14.8622C17 14.6681 16.9554 14.4805 16.8588 14.309L16.8529 14.2986L10.4259 2.55741C10.2191 2.1792 9.86395 2 9.50409 2Z",fill:"currentColor"}),(0,F.jsx)("path",{d:"M9.5 11.2297C9.01639 11.2297 8.7459 10.9419 8.72951 10.4186L8.60656 6.4157C8.59016 5.88372 8.95902 5.5 9.4918 5.5C10.0164 5.5 10.4016 5.89244 10.3852 6.42442L10.2623 10.4099C10.2377 10.9419 9.96721 11.2297 9.5 11.2297ZM9.5 14.5C8.95082 14.5 8.5 14.0901 8.5 13.5058C8.5 12.9215 8.95082 12.5116 9.5 12.5116C10.0492 12.5116 10.5 12.9128 10.5 13.5058C10.5 14.0988 10.041 14.5 9.5 14.5Z",fill:"currentColor"})]}),tW=({...e})=>(0,F.jsx)("svg",{"aria-hidden":"true",width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{left:0,top:0},...e,children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 0C1.79086 0 0 1.79086 0 4V10C0 12.2091 1.79086 14 4 14H6C6.55228 14 7 13.5523 7 13C7 12.4477 6.55228 12 6 12H4C2.89543 12 2 11.1046 2 10V4C2 2.89543 2.89543 2 4 2H6C6.55228 2 7 1.55228 7 1C7 0.447715 6.55228 0 6 0H4ZM11.7071 3.29289C11.3166 2.90237 10.6834 2.90237 10.2929 3.29289C9.90237 3.68342 9.90237 4.31658 10.2929 4.70711L11.5858 6H9.5H6C5.44772 6 5 6.44772 5 7C5 7.55228 5.44772 8 6 8H9.5H11.5858L10.2929 9.29289C9.90237 9.68342 9.90237 10.3166 10.2929 10.7071C10.6834 11.0976 11.3166 11.0976 11.7071 10.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289L11.7071 3.29289Z",fill:"currentColor",fillOpacity:"0.4"})}),tU=({...e})=>(0,F.jsx)("svg",{"aria-hidden":"true",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM13.274 7.13324C13.6237 6.70579 13.5607 6.07577 13.1332 5.72604C12.7058 5.37632 12.0758 5.43932 11.726 5.86676L7.92576 10.5115L6.20711 8.79289C5.81658 8.40237 5.18342 8.40237 4.79289 8.79289C4.40237 9.18342 4.40237 9.81658 4.79289 10.2071L7.29289 12.7071C7.49267 12.9069 7.76764 13.0128 8.04981 12.9988C8.33199 12.9847 8.59505 12.8519 8.77396 12.6332L13.274 7.13324Z",fill:"currentColor"})}),tH=({...e})=>(0,F.jsx)("svg",{"aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM24.5001 8.74263C25.0834 8.74263 25.5563 9.21551 25.5563 9.79883V14.5997C25.5563 15.183 25.0834 15.6559 24.5001 15.6559H19.6992C19.1159 15.6559 18.643 15.183 18.643 14.5997C18.643 14.0164 19.1159 13.5435 19.6992 13.5435H21.8378L20.071 11.8798C20.0632 11.8724 20.0555 11.865 20.048 11.8574C19.1061 10.915 17.8835 10.3042 16.5643 10.1171C15.2452 9.92999 13.9009 10.1767 12.7341 10.82C11.5674 11.4634 10.6413 12.4685 10.0955 13.684C9.54968 14.8994 9.41368 16.2593 9.70801 17.5588C10.0023 18.8583 10.711 20.0269 11.7273 20.8885C12.7436 21.7502 14.0124 22.2582 15.3425 22.336C16.6726 22.4138 17.9919 22.0572 19.1017 21.3199C19.5088 21.0495 19.8795 20.7333 20.2078 20.3793C20.6043 19.9515 21.2726 19.9262 21.7004 20.3228C22.1282 20.7194 22.1534 21.3876 21.7569 21.8154C21.3158 22.2912 20.8176 22.7161 20.2706 23.0795C18.7793 24.0702 17.0064 24.5493 15.2191 24.4448C13.4318 24.3402 11.7268 23.6576 10.3612 22.4998C8.9956 21.3419 8.0433 19.7716 7.6478 18.0254C7.2523 16.2793 7.43504 14.4519 8.16848 12.8186C8.90192 11.1854 10.1463 9.83471 11.7142 8.97021C13.282 8.10572 15.0884 7.77421 16.861 8.02565C18.6282 8.27631 20.2664 9.09278 21.5304 10.3525L23.4439 12.1544V9.79883C23.4439 9.21551 23.9168 8.74263 24.5001 8.74263Z",fill:"currentColor"})}),tG=({...e})=>(0,F.jsxs)("svg",{"aria-hidden":"true",width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,F.jsx)("path",{d:"M14.5 2V6H10.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M14 5.66537L10.9899 2.75871C10.0931 1.83853 8.92897 1.24216 7.6729 1.05947C6.41683 0.876774 5.13688 1.11765 4.02592 1.7458C2.91497 2.37395 2.0332 3.35534 1.5135 4.54208C0.993792 5.72883 0.864305 7.05663 1.14455 8.3254C1.42479 9.59418 2.09958 10.7352 3.06724 11.5765C4.03489 12.4178 5.24298 12.9138 6.50946 12.9898C7.77594 13.0657 9.03219 12.7176 10.0889 11.9977C10.4765 11.7337 10.8295 11.4249 11.142 11.0792",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),tP=({...e})=>(0,F.jsxs)("svg",{"aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,F.jsx)("path",{d:"M14 9.5V7C14 5.89543 13.1046 5 12 5H7C5.89543 5 5 5.89543 5 7V12C5 13.1046 5.89543 14 7 14H9.5",stroke:"var(--ck-body-color-muted)",strokeWidth:"2"}),(0,F.jsx)("rect",{x:"10",y:"10",width:"9",height:"9",rx:"2",stroke:"var(--ck-body-color-muted)",strokeWidth:"2"}),(0,F.jsx)("path",{d:"M1 3L3 5L7 1",stroke:"var(--ck-body-color)",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]}),tQ=({...e})=>(0,F.jsx)("div",{...e,style:{zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",bottom:0,right:0,background:"#34C759",borderRadius:10,boxShadow:"0 0 0 1.5px var(--background)",width:10,height:10,...null==e?void 0:e.style},children:(0,F.jsx)("svg",{"aria-hidden":"true",width:"6",height:"6",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,F.jsx)("path",{d:"M0.75 3L2.25 4.5L5.25 1.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})});(r=i||(i={})).READY="ready",r.LOADING="loading",r.SUCCESS="success",r.REJECTED="rejected",r.ERROR="error";let tZ=(0,O.createContext)(null),tV=({onSignIn:e,onSignOut:t}={})=>{let n=(0,O.useContext)(tZ);if(!n)return{isSignedIn:!1,data:void 0,status:i.ERROR,error:Error("useSIWE hook must be inside a SIWEProvider."),isRejected:!1,isError:!0,isLoading:!1,isSuccess:!1,isReady:!1,reset:()=>{},signIn:()=>Promise.reject(),signOut:()=>Promise.reject()};let{session:o,nonce:r,status:a,signOut:s,signIn:c,resetStatus:l}=n,{address:d,chainId:u}=o.data||{},p=d?i.SUCCESS:o.isLoading||r.isLoading?i.LOADING:a,h=p===i.LOADING,g=p===i.SUCCESS,f=p===i.REJECTED,b=p===i.ERROR,x=!d||r.isFetching||h||g,m=!!d;return{isSignedIn:m,data:m?{address:d,chainId:u}:void 0,status:p,error:o.error||r.error,isRejected:f,isError:b,isLoading:h,isSuccess:g,isReady:x,signIn:async()=>{if(!m){let t=await c();t&&(null==e||e(t))}},signOut:async()=>{m&&(await s(),null==t||t())},reset:()=>l()}},tY="ckSiweNonce",tJ={continueWithFamily:"Continue with Family",orSelectWallet:"or select a wallet from the list below",loginWithEmailOrPhone:"Login with Email or Phone",connectWithFamilyIOS:"Connect with Family iOS",connectWallet:"Connect Wallet",disconnect:"Disconnect",connected:"Connected",wrongNetwork:"Wrong Network",switchNetworks:"Switch Networks",switchWallets:"Switch Wallets",chainNetwork:"{{ CHAIN }} Network",copyToClipboard:"Copy to Clipboard",copyCode:"Copy Code",moreInformation:"More Information",back:"Back",close:"Close",or:"or",more:"More",tryAgain:"Try Again",tryAgainQuestion:"Try Again?",dontHaveTheApp:"Don't have the app?",scanTheQRCode:"Scan the QR code",useWalletConnectModal:"Use WalletConnect Modal",useModal:"Use Modal",installTheExtension:"Install the Extension",getWalletName:"Get {{ CONNECTORNAME }}",otherWallets:"Other Wallets",learnMore:"Learn More",getWallet:"Get a Wallet",approveInWallet:"Approve in Wallet",confirmInWallet:"Confirm in Wallet",awaitingConfirmation:"Awaiting Confirmation",signIn:"Sign In",signOut:"Sign Out",signedIn:"Signed In",signedOut:"Signed Out",walletNotConnected:"Wallet Not Connected",warnings_walletSwitchingUnsupported:"Your wallet does not support switching networks from this app.",warnings_walletSwitchingUnsupportedResolve:"Try switching networks from within your wallet instead.",warnings_chainUnsupported:"This app does not support the current connected network.",warnings_chainUnsupportedResolve:"Switch or disconnect to continue.",onboardingScreen_heading:"Get a Wallet",onboardingScreen_h1:"Start Exploring Web3",onboardingScreen_p:"Your wallet is the gateway to all things Ethereum, the magical technology that makes it possible to explore web3.",onboardingScreen_ctaText:"Choose Your First Wallet",onboardingScreen_ctaUrl:"https://ethereum.org/en/wallets/find-wallet/",aboutScreen_heading:"About Wallets",aboutScreen_a_h1:"For your digital assets",aboutScreen_a_p:"Wallets let you send, receive, store, and interact with digital assets like NFTs and other Ethereum tokens.",aboutScreen_b_h1:"A better way to login",aboutScreen_b_p:"With modern apps, your wallet can be used as an easy way to login, instead of having to remember a password.",aboutScreen_c_h1:"Explore the world of web3",aboutScreen_c_p:"Your wallet is an essential utility that lets you explore and participate in the fast evolving world of web3.",aboutScreen_ctaText:"Learn More",aboutScreen_ctaUrl:"https://ethereum.org/en/wallets/",connectorsScreen_heading:"Connect Wallet",connectorsScreen_newcomer:"I don’t have a wallet",connectorsScreen_h1:"What is a wallet?",connectorsScreen_p:"Wallets are used to send, receive, and store digital assets. Connecting a wallet lets you interact with apps.",mobileConnectorsScreen_heading:"Choose Wallet",scanScreen_heading:"Scan with Phone",scanScreen_heading_withConnector:"Scan with {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:`Open a [WALLETCONNECTLOGO] WalletConnect 
supported wallet to scan`,scanScreen_tooltip_default:`Open {{ CONNECTORNAME }} on 
your mobile phone to scan`,downloadAppScreen_heading:"Get {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Scan with your phone camera to download on iOS or Android.",downloadAppScreen_ios:"Scan with your phone camera to download on iOS.",downloadAppScreen_android:"Scan with your phone camera to download on Android.",injectionScreen_unavailable_h1:"Unsupported Browser",injectionScreen_unavailable_p:`To connect your {{ CONNECTORSHORTNAME }} wallet,
install the extension on {{ SUGGESTEDEXTENSIONBROWSER }}.`,injectionScreen_install_h1:"Install {{ CONNECTORNAME }}",injectionScreen_install_p:`To connect your {{ CONNECTORSHORTNAME }} wallet,
install the browser extension.`,injectionScreen_connecting_h1:"Requesting Connection",injectionScreen_connecting_p:`Open the {{ CONNECTORSHORTNAME }} browser 
extension to connect your wallet.`,injectionScreen_connecting_injected_h1:"Requesting Connection",injectionScreen_connecting_injected_p:"Accept the request through your wallet to connect to this app.",injectionScreen_connected_h1:"Already Connected",injectionScreen_connected_p:"It is now okay to close this popup",injectionScreen_rejected_h1:"Request Cancelled",injectionScreen_rejected_p:`You cancelled the request.
Click above to try again.`,injectionScreen_failed_h1:"Connection Failed",injectionScreen_failed_p:`Sorry, something went wrong.
Please try connecting again.`,injectionScreen_notconnected_h1:"Login to {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"To continue, please login to your {{ CONNECTORNAME }} extension.",profileScreen_heading:"Connected",switchNetworkScreen_heading:"Switch Networks",signInWithEthereumScreen_tooltip:"You’re not signed in to this app.\n**Sign In With Ethereum** to continue.",signInWithEthereumScreen_signedOut_heading:"Sign In With Ethereum",signInWithEthereumScreen_signedOut_h1:"This app would like to verify you \n as the owner of this wallet.",signInWithEthereumScreen_signedOut_p:`Please sign the message request 
 in your wallet to continue.`,signInWithEthereumScreen_signedOut_button:"Sign In",signInWithEthereumScreen_signedIn_heading:"Signed In With Ethereum",signInWithEthereumScreen_signedIn_h1:"You successfully verified yourself \n as the owner of this wallet.",signInWithEthereumScreen_signedIn_p:`Signing out will require you to 
 authenticate again in the future.`,signInWithEthereumScreen_signedIn_button:"Sign Out"},tq={...tJ,connectWallet:"الاتصال بالمحفظة",disconnect:"قطع الاتصال",connected:"متصل",wrongNetwork:"شبكة خاطئة",switchNetworks:"تغيير الشبكات",chainNetwork:"شبكة {{ CHAIN }}",copyToClipboard:"نسخ إلى الحافظة",copyCode:"نسخ الكود",moreInformation:"مزيد من المعلومات",back:"عودة",close:"إغلاق",or:"أو",more:"المزيد",tryAgain:"حاول مجددًا",tryAgainQuestion:"هل نحاول مرة أخرى؟",dontHaveTheApp:"ليس لديك التطبيق؟",scanTheQRCode:"مسح رمز الاستجابة السريعة",useWalletConnectModal:"استخدم نموذج ولِيت‌كنيكت",useModal:"استخدم النموذج",installTheExtension:"تثبيت الإضافة",getWalletName:"الحصول على {{ CONNECTORNAME }}",otherWallets:"محافظ أخرى",learnMore:"تعرف على المزيد",getWallet:"الحصول على محفظة",approveInWallet:"الموافقة في المحفظة",confirmInWallet:"تأكيد في المحفظة",awaitingConfirmation:"بانتظار التأكيد",signIn:"تسجيل الدخول",signOut:"تسجيل الخروج",signedIn:"تم تسجيل الدخول",signedOut:"تم تسجيل الخروج",walletNotConnected:"المحفظة غير متصلة",warnings_walletSwitchingUnsupported:"عذرًا، لا تدعم محفظتك تغيير الشبكات من هذا التطبيق.",warnings_walletSwitchingUnsupportedResolve:"حاول تغيير الشبكات من داخل محفظتك بدلاً من ذلك.",warnings_chainUnsupported:"هذا التطبيق غير متوافق مع الشبكة المتصلة حاليًا.",warnings_chainUnsupportedResolve:"للمتابعة، قم بتغيير الشبكة أو قطع الاتصال.",onboardingScreen_heading:"الحصول على محفظة",onboardingScreen_h1:"ابدأ استكشاف الويب3",onboardingScreen_p:"تعتبر محفظتك بوابتك إلى عوالم إيثريوم، التكنولوجيا السحرية التي تمكن استكشاف الويب3.",onboardingScreen_ctaText:"اختر محفظتك الأولى",onboardingScreen_ctaUrl:"https://ethereum.org/ar/wallets/find-wallet/",aboutScreen_heading:"حول المحافظ",aboutScreen_a_h1:"حافظ على أصولك الرقمية",aboutScreen_a_p:"تمكنك المحافظ من إرسال واستقبال وتخزين والتفاعل مع الأصول الرقمية مثل NFTs ورموز إيثريوم الأخرى.",aboutScreen_b_h1:"وسيلة أفضل لتسجيل الدخول",aboutScreen_b_p:"في تطبيقات العصر الحديث، يمكن استخدام محفظتك كوسيلة سهلة لتسجيل الدخول بدلاً من الحاجة إلى تذكر كلمة مرور.",aboutScreen_c_h1:"استكشاف عالم الويب3",aboutScreen_c_p:"تعتبر محفظتك أداة أساسية تمكنك من استكشاف والمشاركة في عالم الويب3 الذي يتطور بسرعة.",aboutScreen_ctaText:"استزيد من المعرفة",aboutScreen_ctaUrl:"https://ethereum.org/ar/wallets/",connectorsScreen_heading:"الاتصال بالمحفظة",connectorsScreen_newcomer:"ليس لدي محفظة",connectorsScreen_h1:"ما هي المحافظ؟",connectorsScreen_p:"تُستخدم المحافظ لإرسال واستقبال وتخزين الأصول الرقمية. يمكنك الاتصال بمحفظة للتفاعل مع التطبيقات.",mobileConnectorsScreen_heading:"اختر محفظة",scanScreen_heading:"مسح باستخدام الهاتف",scanScreen_heading_withConnector:"مسح باستخدام {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:`افتح محفظة تدعم ولِيت‌كنيكت 
 لبدء المسح.`,scanScreen_tooltip_default:"افتح {{ CONNECTORNAME }} على هاتفك للمسح",downloadAppScreen_heading:"الحصول على {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:`استخدم كاميرا هاتفك للمسح وتنزيله على نظامي iOS أو Android

.`,downloadAppScreen_ios:"استخدم كاميرا هاتفك للمسح وتنزيله على نظام iOS.",downloadAppScreen_android:"استخدم كاميرا هاتفك للمسح وتنزيله على نظام Android.",injectionScreen_unavailable_h1:"المتصفح غير مدعوم",injectionScreen_unavailable_p:"لتوصيل محفظتك {{ CONNECTORSHORTNAME }}، قم بتثبيت الإضافة على متصفح {{ SUGGESTEDEXTENSIONBROWSER }}.",injectionScreen_install_h1:"تثبيت {{ CONNECTORNAME }}",injectionScreen_install_p:"لتوصيل محفظتك {{ CONNECTORSHORTNAME }}، قم بتثبيت الإضافة على المتصفح.",injectionScreen_connecting_h1:"طلب الاتصال",injectionScreen_connecting_p:"افتح إضافة المتصفح {{ CONNECTORSHORTNAME }} لتوصيل محفظتك.",injectionScreen_connecting_injected_h1:"طلب الاتصال",injectionScreen_connecting_injected_p:"قبل الطلب من خلال محفظتك للاتصال بتطبيقنا.",injectionScreen_connected_h1:"الاتصال بالفعل",injectionScreen_connected_p:"من الآمن الآن إغلاق هذه النافذة المنبثقة.",injectionScreen_rejected_h1:"تم رفض الطلب",injectionScreen_rejected_p:"لقد قمت برفض الطلب. انقر أعلى للمحاولة مرة أخرى.",injectionScreen_failed_h1:"فشل الاتصال",injectionScreen_failed_p:"عذرًا، حدث خطأ ما. يُرجى المحاولة مرة أخرى للاتصال.",injectionScreen_notconnected_h1:"تسجيل الدخول إلى {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"للمتابعة، يُرجى تسجيل الدخول إلى إضافة {{ CONNECTORNAME }}.",profileScreen_heading:"متصل",switchNetworkScreen_heading:"تبديل الشبكات",signInWithEthereumScreen_tooltip:"أنت غير مسجل الدخول حاليًا إلى هذا التطبيق.\n**سجل الدخول باستخدام إثيريوم** للمتابعة.",signInWithEthereumScreen_signedOut_heading:"سجل الدخول باستخدام إثيريوم",signInWithEthereumScreen_signedOut_h1:"يود هذا التطبيق التحقق منك \n كصاحب لهذه المحفظة.",signInWithEthereumScreen_signedOut_p:"يرجى تأكيد طلب الرسالة في محفظتك للمتابعة.",signInWithEthereumScreen_signedOut_button:"سجل الدخول",signInWithEthereumScreen_signedIn_heading:"تم تسجيل الدخول باستخدام إثيريوم",signInWithEthereumScreen_signedIn_h1:"لقد قمت بتأكيد نفسك كصاحب لهذه المحفظة بنجاح.",signInWithEthereumScreen_signedIn_p:"سيتطلب تسجيل الخروج منك إعادة المصادقة مرة أخرى في المستقبل.",signInWithEthereumScreen_signedIn_button:"تسجيل الخروج"},tK={...tJ,connectWallet:"Ühenda rahakott",disconnect:"Katkesta ühendus",connected:"Ühendatud",wrongNetwork:"Vale võrk",switchNetworks:"Vaheta võrke",chainNetwork:"{{ CHAIN }} Võrk",copyToClipboard:"Kopeeri lõikelauale",copyCode:"Kopeeri koodi",moreInformation:"Rohkem infot",back:"Tagasi",close:"Pane kinni",or:"või",more:"Rohkem",tryAgain:"Proovi uuesti",tryAgainQuestion:"Proovi uuesti?",dontHaveTheApp:"Kas teil pole rakendust?",scanTheQRCode:"Skaneeri QR-kood",useWalletConnectModal:"Kasuta WalletConnecti modalit",useModal:"Kasuta Modalit",installTheExtension:"Installi laiendust",getWalletName:"Hanki {{ CONNECTORNAME }}",otherWallets:"Teised rahakotid",learnMore:"Avasta rohkem",getWallet:"Lae alla rahakott",approveInWallet:"Kiita heaks rahakotis",confirmInWallet:"Kinnita rahakotis",awaitingConfirmation:"Kinnituse ootel",signIn:"Logi sisse",signOut:"Logi välja",signedIn:"Sisse logitud",signedOut:"Välja logitud",walletNotConnected:"Raakott pole ühendatud",warnings_walletSwitchingUnsupported:"Teie rahakott ei toeta võrgu vahetamist sellest rakendusest.",warnings_walletSwitchingUnsupportedResolve:"Proovige võrgu vahetamist teha oma rahakoti seest.",warnings_chainUnsupported:"See rakendus ei toeta praegu ühendatud võrku.",warnings_chainUnsupportedResolve:"Jätkamiseks vahetage või ühendage lahti.",onboardingScreen_heading:"Hankige rahakott",onboardingScreen_h1:"Alustage Web3 uurimist",onboardingScreen_p:"Teie rahakott on värav kõigele, mis puudutab Ethereumit, maagilist tehnoloogiat, mis võimaldab uurida Web3.",onboardingScreen_ctaText:"Valige oma esimene rahakott",onboardingScreen_ctaUrl:"https://ethereum.org/en/wallets/find-wallet/",aboutScreen_heading:"Rahakottidest",aboutScreen_a_h1:"Teie digitaalsetele varadele",aboutScreen_a_p:"Rahakotid võimaldavad teil saata, vastu võtta, salvestada ja suhelda digitaalsete varadega nagu NFT-d ja teised Ethereumi tokenid.",aboutScreen_b_h1:"Parem viis sisse logimiseks",aboutScreen_b_p:"Kaasaegsete rakendustega saab teie rahakotti kasutada lihtsa sisselogimisviisina, ilma et peaksite meeles pidama parooli.",aboutScreen_c_h1:"Uurige Web3 maailma",aboutScreen_c_p:"Teie rahakott on oluline tööriist, mis võimaldab teil uurida ja osaleda kiiresti arenevas Web3 maailmas.",aboutScreen_ctaText:"Lisateavet saamiseks",aboutScreen_ctaUrl:"https://ethereum.org/en/wallets/",connectorsScreen_heading:"Ühendage rahakott",connectorsScreen_newcomer:"Mul pole rahakotti",connectorsScreen_h1:"Mis on rahakott?",connectorsScreen_p:"Rahakotte kasutatakse digitaalsete varade saatmiseks, vastuvõtmiseks ja salvestamiseks. Rahakoti ühendamine võimaldab teil rakendustega suhelda.",mobileConnectorsScreen_heading:"Valige rahakott",scanScreen_heading:"Skaneerige telefoni abil",scanScreen_heading_withConnector:"Skaneerige koos {{ CONNECTORNAME }}-ga",scanScreen_tooltip_walletConnect:`Ava [WALLETCONNECTLOGO] WalletConnect 
toetatud rahakott skaneerimiseks`,scanScreen_tooltip_default:`Ava {{ CONNECTORNAME }} oma 
mobiiltelefonil skaneerimiseks`,downloadAppScreen_heading:"Hankige {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Skaneerige oma telefoni kaameraga allalaadimiseks iOS-i või Androidi jaoks.",downloadAppScreen_ios:"Skaneerige oma telefoni kaameraga allalaadimiseks iOS-i jaoks.",downloadAppScreen_android:"Skaneerige oma telefoni kaameraga Androidi allalaadimiseks.",injectionScreen_unavailable_h1:"Toetuseta brauser",injectionScreen_unavailable_p:`Teie {{ CONNECTORSHORTNAME }} rahakoti \xfchendamiseks
installige laiendus {{ SUGGESTEDEXTENSIONBROWSER }}-le.`,injectionScreen_install_h1:"Installige {{ CONNECTORNAME }}",injectionScreen_install_p:`Teie {{ CONNECTORSHORTNAME }} rahakoti \xfchendamiseks
installige brauseri laiendus.`,injectionScreen_connecting_h1:"Ühenduse taotlemine",injectionScreen_connecting_p:`Ava {{ CONNECTORSHORTNAME }} brauseri 
laiendus rahakoti \xfchendamiseks.`,injectionScreen_connecting_injected_h1:"Ühenduse taotlemine",injectionScreen_connecting_injected_p:"Nõustuge rakendusega ühendamiseks oma rahakotis.",injectionScreen_connected_h1:"Juba ühendatud",injectionScreen_connected_p:"Selle popup-i saab nüüd sulgeda",injectionScreen_rejected_h1:"Taotlus tühistatud",injectionScreen_rejected_p:`T\xfchistasite taotluse.
Kl\xf5psake \xfclal, et uuesti proovida.`,injectionScreen_failed_h1:"Ühenduse loomine ebaõnnestus",injectionScreen_failed_p:`Vabandame, midagi l\xe4ks valesti.
Proovige \xfchendust uuesti luua.`,injectionScreen_notconnected_h1:"Logige sisse {{ CONNECTORNAME }}-ga",injectionScreen_notconnected_p:"Jätkamiseks logige sisse oma {{ CONNECTORNAME }} laiendisse.",profileScreen_heading:"Ühendatud",switchNetworkScreen_heading:"Võrkude vahetamine",signInWithEthereumScreen_tooltip:"Te pole selle rakendusse sisse logitud.\n**Logi sisse Ethereumiga** jätkamiseks.",signInWithEthereumScreen_signedOut_heading:"Logi sisse Ethereumiga",signInWithEthereumScreen_signedOut_h1:"See rakendus soovib teid autentida \n selle rahakoti omanikuna.",signInWithEthereumScreen_signedOut_p:`J\xe4tkamiseks allkirjastage s\xf5numip\xe4ring 
 oma rahakotis.`,signInWithEthereumScreen_signedOut_button:"Logi sisse",signInWithEthereumScreen_signedIn_heading:"Logi välja",signInWithEthereumScreen_signedIn_h1:"Olete edukalt autentinud end \n selle rahakoti omanikuna.",signInWithEthereumScreen_signedIn_p:`V\xe4lja logimine n\xf5uab tulevikus 
 uuesti autentimist.`,signInWithEthereumScreen_signedIn_button:"Logi välja"},tX={...tJ,connectWallet:"Conecta una cartera",disconnect:"Desconectar",connected:"Conectado",wrongNetwork:"Red incorrecta",switchNetworks:"Cambio de red",chainNetwork:"Red {{ CHAIN }}",copyToClipboard:"Copiar al portapapeles",copyCode:"Copiar código",moreInformation:"Más información",back:"Atrás",close:"Cerrar",or:"o",more:"Más",tryAgain:"Intentar de nuevo",tryAgainQuestion:"¿Intentar de nuevo?",dontHaveTheApp:"¿No tienes la aplicación?",scanTheQRCode:"Escanea el código QR",useWalletConnectModal:"Utilizar WalletConnect Modal",useModal:"Utilizar Modal",installTheExtension:"Instalar la extensión",getWalletName:"Obtén {{ CONNECTORNAME }}",otherWallets:"Otras carteras",learnMore:"Más información",getWallet:"Obtén una cartera",approveInWallet:"Aprobar en la cartera",confirmInWallet:"Confirmar en la cartera",awaitingConfirmation:"A la espera de confirmación",signIn:"Iniciar sesión",signOut:"Cerrar sesión",signedIn:"Sesión iniciada",signedOut:"Sesión cerrada",walletNotConnected:"Cartera no conectada",warnings_walletSwitchingUnsupported:"Tu cartera no permite cambiar de red desde esta aplicación.",warnings_walletSwitchingUnsupportedResolve:"Prueba a cambiar de red desde tu cartera.",warnings_chainUnsupported:"Esta aplicación no es compatible con la red conectada actualmente.",warnings_chainUnsupportedResolve:"Cambia o desconecta para continuar.",onboardingScreen_heading:"Obtén una cartera",onboardingScreen_h1:"Comienza a explorar la Web3",onboardingScreen_p:"Tu cartera es el portal de acceso a todo lo relacionado con Ethereum, la tecnología mágica que permite explorar la Web3.",onboardingScreen_ctaText:"Elige tu primera cartera",onboardingScreen_ctaUrl:"https://ethereum.org/es/wallets/find-wallet/",aboutScreen_heading:"Acerca de las carteras",aboutScreen_a_h1:"Para tus activos digitales",aboutScreen_a_p:"Las carteras te permiten enviar, recibir, almacenar e interactuar con activos digitales como los NFT y otros tokens de Ethereum.",aboutScreen_b_h1:"Una manera mejor de iniciar sesión",aboutScreen_b_p:"Con las aplicaciones modernas, puedes utilizar tu cartera para iniciar sesión fácilmente, en vez de tener que recordar una contraseña.",aboutScreen_c_h1:"Explora el mundo de la Web3",aboutScreen_c_p:"Tu cartera es una herramienta esencial que te permite explorar y participar en el mundo en rápida evolución de la Web3.",aboutScreen_ctaText:"Más información",aboutScreen_ctaUrl:"https://ethereum.org/es/wallets/",connectorsScreen_heading:"Conecta una cartera",connectorsScreen_newcomer:"No tengo una cartera",connectorsScreen_h1:"¿Qué es una cartera?",connectorsScreen_p:"Las carteras se utilizan para enviar, recibir y almacenar activos digitales. Si conectas una cartera, podrás interactuar con las aplicaciones.",mobileConnectorsScreen_heading:"Elige una cartera",scanScreen_heading:"Escanea con el teléfono",scanScreen_heading_withConnector:"Escanea con {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"Abre una cartera compatible con WalletConnect [WALLETCONNECTLOGO] para escanear",scanScreen_tooltip_default:"Abre {{ CONNECTORNAME }} en tu teléfono móvil para escanear",downloadAppScreen_heading:"Obtén {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Escanea con la cámara de tu teléfono para descargarla en iOS o Android.",downloadAppScreen_ios:"Escanea con la cámara de tu teléfono para descargarla en iOS.",downloadAppScreen_android:"Escanea con la cámara de tu teléfono para descargarla en Android.",injectionScreen_unavailable_h1:"Navegador no compatible",injectionScreen_unavailable_p:"Para conectar tu cartera de {{ CONNECTORSHORTNAME }}, instala la extensión en {{ SUGGESTEDEXTENSIONBROWSER }}.",injectionScreen_install_h1:"Instala {{ CONNECTORNAME }}",injectionScreen_install_p:"Para conectar tu cartera de {{ CONNECTORSHORTNAME }}, instala la extensión del navegador.",injectionScreen_connecting_h1:"Solicitud de conexión",injectionScreen_connecting_p:"Abre la extensión del navegador de {{ CONNECTORSHORTNAME }}  para conectar tu cartera.",injectionScreen_connecting_injected_h1:"Solicitud de conexión",injectionScreen_connecting_injected_p:"Acepta la solicitud a través de tu cartera para conectarte a esta aplicación.",injectionScreen_connected_h1:"Ya conectada",injectionScreen_connected_p:"Ya puedes cerrar esta ventana emergente",injectionScreen_rejected_h1:"Solicitud cancelada",injectionScreen_rejected_p:"Has cancelado la solicitud. Haz clic arriba para intentarlo de nuevo.",injectionScreen_failed_h1:"Error de conexión",injectionScreen_failed_p:"Lo sentimos, ha habido un problema. Intenta conectarte de nuevo.",injectionScreen_notconnected_h1:"Inicia sesión en {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"Para continuar, inicia sesión en tu extensión de {{ CONNECTORNAME }}.",profileScreen_heading:"Conectado",switchNetworkScreen_heading:"Cambio de red",signInWithEthereumScreen_tooltip:"No has iniciado sesión en esta aplicación.\n**Inicia sesión con Ethereum** para continuar.",signInWithEthereumScreen_signedOut_heading:"Inicia sesión con Ethereum",signInWithEthereumScreen_signedOut_h1:"Esta aplicación desea verificar que eres el propietario de esta cartera.",signInWithEthereumScreen_signedOut_p:"Firma la solicitud de mensaje en tu cartera para continuar.",signInWithEthereumScreen_signedOut_button:"Iniciar sesión",signInWithEthereumScreen_signedIn_heading:"Sesión iniciada con Ethereum",signInWithEthereumScreen_signedIn_h1:"Te has verificado correctamente como propietario de esta cartera.",signInWithEthereumScreen_signedIn_p:"Si cierras la sesión, tendrás que volver a autenticarte más adelante.",signInWithEthereumScreen_signedIn_button:"Cerrar sesión"},t$={...tJ,connectWallet:"اتصال به کیف پول",disconnect:"قطع ارتباط",connected:"متصل شد",wrongNetwork:"شبکه نادرست",switchNetworks:"تغییر شبکه‌ها",chainNetwork:"{{ CHAIN }} شبکه",copyToClipboard:"کپی به کلیپ‌بورد",copyCode:"کپی کد",moreInformation:"اطلاعات بیشتر",back:"بازگشت",close:"بستن",or:"یا",more:"بیشتر",tryAgain:"تلاش دوباره",tryAgainQuestion:"آیا دوباره تلاش کنیم؟",dontHaveTheApp:"اپلیکیشن را ندارید؟",scanTheQRCode:"اسکن کیو‌آر کد",useWalletConnectModal:"استفاده از مودال والت‌‌کانکت",useModal:"استفاده از مودال",installTheExtension:"نصب افزونه",getWalletName:"دریافت {{ CONNECTORNAME }}",otherWallets:"کیف پول‌های دیگر",learnMore:"بیشتر بدانید",getWallet:"یک کیف پول دریافت کنید",approveInWallet:"در کیف پول تأیید کنید",confirmInWallet:"در کیف پول تأیید کنید",awaitingConfirmation:"در انتظار تأیید",signIn:"ورود",signOut:"خروج",signedIn:"وارد شده",signedOut:"خارج شده",walletNotConnected:"کیف پول متصل نیست",warnings_walletSwitchingUnsupported:"متاسفانه، کیف پول شما از تغییر شبکه در این برنامه پشتیبانی نمی‌کند.",warnings_walletSwitchingUnsupportedResolve:"بهتر است از داخل کیف پول خود تغییر شبکه دهید.",warnings_chainUnsupported:"این برنامه با شبکه‌ای که در حال حاضر متصل است، سازگاری ندارد.",warnings_chainUnsupportedResolve:"برای ادامه، شبکه را تغییر دهید یا اتصال را قطع کنید.",onboardingScreen_heading:"دریافت کیف پول",onboardingScreen_h1:"آغاز کاوش در وب3",onboardingScreen_p:"کیف پول شما دروازه‌ای است به دنیای اتریوم، فناوری جادویی که ممکن می‌سازد تا وب3 را کاوش کنید.",onboardingScreen_ctaText:"کیف پول نخست خود را انتخاب کنید",onboardingScreen_ctaUrl:"https://ethereum.org/fa/wallets/find-wallet/",aboutScreen_heading:"درباره کیف پول‌ها",aboutScreen_a_h1:"نگهبان دارایی‌های دیجیتالی شما",aboutScreen_a_p:"کیف پول‌ها به شما اجازه می‌دهند دارایی‌های دیجیتالی مانند ان‌اف‌تی و توکن‌های اتریومی دیگر را ارسال، دریافت، ذخیره و تعامل دهید.",aboutScreen_b_h1:"یک روش بهتر برای ورود",aboutScreen_b_p:"در برنامه‌های مدرن، کیف پول شما می‌تواند به عنوان یک راه ورود آسان به جای به یادآوری یک رمز عبور مورد استفاده قرار گیرد.",aboutScreen_c_h1:"جهان وب3 را کاوش کنید",aboutScreen_c_p:"کیف پول شما یک ابزار ضروری است که به شما اجازه می‌دهد جهان در حال تغییر سریع وب3 را کاوش و در آن شرکت کنید.",aboutScreen_ctaText:"دانش بیشتری بیافزایید",aboutScreen_ctaUrl:"https://ethereum.org/fa/wallets/",connectorsScreen_heading:"برقراری ارتباط با کیف پول",connectorsScreen_newcomer:"کیف پول ندارم",connectorsScreen_h1:"چیستی رمزگذاری کیف پول؟",connectorsScreen_p:"کیف پول‌ها برای ارسال، دریافت و نگهداری دارایی‌های دیجیتال استفاده می‌شوند. برقراری ارتباط با یک کیف پول به شما امکان تعامل با برنامه‌ها را می‌دهد.",mobileConnectorsScreen_heading:"انتخاب کیف پول",scanScreen_heading:"اسکن با گوشی",scanScreen_heading_withConnector:"اسکن با {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"یک کیف پول با پشتیبانی از والت‌‌کانکت را باز کنید تا اسکن را آغاز کنید",scanScreen_tooltip_default:"{{ CONNECTORNAME }} را روی گوشی خود باز کنید تا اسکن شود",downloadAppScreen_heading:"دریافت {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"از دوربین گوشی خود برای اسکن و دریافت نسخه iOS یا Android استفاده کنید.",downloadAppScreen_ios:"از دوربین گوشی خود برای دریافت نسخه iOS استفاده کنید.",downloadAppScreen_android:"از دوربین گوشی خود برای دریافت نسخه Android استفاده کنید.",injectionScreen_unavailable_h1:"مرورگر پشتیبانی نمی‌شود",injectionScreen_unavailable_p:"برای برقراری ارتباط با کیف پول {{ CONNECTORSHORTNAME }}، افزونه مرورگر را در {{ SUGGESTEDEXTENSIONBROWSER }} نصب کنید.",injectionScreen_install_h1:"نصب {{ CONNECTORNAME }}",injectionScreen_install_p:"برای برقراری ارتباط با کیف پول {{ CONNECTORSHORTNAME }}، افزونه مرورگر را نصب کنید.",injectionScreen_connecting_h1:"درخواست اتصال",injectionScreen_connecting_p:"افزونه مرورگر {{ CONNECTORSHORTNAME }} را باز کنید تا ارتباط با کیف پول ایجاد شود.",injectionScreen_connecting_injected_h1:"درخواست اتصال",injectionScreen_connecting_injected_p:"درخواست را از طریق کیف پول خود بپذیرید تا به این برنامه متصل شوید.",injectionScreen_connected_h1:"اتصال از قبل برقرار است",injectionScreen_connected_p:"اکنون می‌توانید این پنجره‌ی بازشو را ببندید.",injectionScreen_rejected_h1:"درخواست لغو شد",injectionScreen_rejected_p:"شما درخواست را لغو کرده‌اید. برای تلاش مجدد، بالا کلیک کنید.",injectionScreen_failed_h1:"ارتباط ناموفق",injectionScreen_failed_p:"متاسفانه، مشکلی بوجود آمد. لطفاً مجدداً اتصال برقرار کنید.",injectionScreen_notconnected_h1:"با ورود به {{ CONNECTORNAME }} وارد شوید",injectionScreen_notconnected_p:"برای ادامه، لطفاً وارد افزونه {{ CONNECTORNAME }} خود شوید.",profileScreen_heading:"اتصال‌ها",switchNetworkScreen_heading:"تغییر شبکه‌ها",signInWithEthereumScreen_tooltip:"شما در حال حاضر به این برنامه وارد نشده‌اید.\n**با اتریوم وارد شوید** تا ادامه دهید.",signInWithEthereumScreen_signedOut_heading:"با اتریوم وارد شوید",signInWithEthereumScreen_signedOut_h1:"این برنامه می‌خواهد هویت شما \n به عنوان صاحب این کیف پول را تأیید کند.",signInWithEthereumScreen_signedOut_p:"لطفاً درخواست پیام را در کیف پول خود تأیید کنید تا ادامه دهید.",signInWithEthereumScreen_signedOut_button:"با اتریوم وارد شوید",signInWithEthereumScreen_signedIn_heading:"با اتریوم وارد شده‌اید",signInWithEthereumScreen_signedIn_h1:"شما به عنوان صاحب این کیف پول هویت خود را با موفقیت تأیید کرده‌اید.",signInWithEthereumScreen_signedIn_p:"خروج از حساب کاربری شما در آینده نیاز به تأیید دوباره دارد.",signInWithEthereumScreen_signedIn_button:"خروج"},t1={...tJ,connectWallet:"Connecter le portefeuille",disconnect:"Déconnecter",connected:"Connecté",wrongNetwork:"Réseau incorrect",switchNetworks:"Changer de réseau",chainNetwork:"Réseau {{ CHAIN }}",copyToClipboard:"Copier dans le presse-papiers",copyCode:"Copier le code",moreInformation:"Plus d’informations",back:"Retour",close:"Fermer",or:"ou",more:"Plus",tryAgain:"Réessayer",tryAgainQuestion:"Réessayer ?",dontHaveTheApp:"Vous n’avez pas l’application ?",scanTheQRCode:"Scannez le code QR",useWalletConnectModal:"Utiliser la modale WalletConnect",useModal:"Utiliser la modale",installTheExtension:"Installer l’extension",getWalletName:"Obtenez {{ CONNECTORNAME }}",otherWallets:"Autres portefeuilles",learnMore:"En savoir plus",getWallet:"Obtenir un portefeuille",approveInWallet:"Approuver dans le portefeuille",confirmInWallet:"Confirmer dans le portefeuille",awaitingConfirmation:"En attente de confirmation",signIn:"Se connecter",signOut:"Se déconnecter",signedIn:"Connecté",signedOut:"Déconnecté",walletNotConnected:"Portefeuille non connecté",warnings_walletSwitchingUnsupported:"Votre portefeuille ne prend pas en charge le changement de réseau à partir de cette application.",warnings_walletSwitchingUnsupportedResolve:"Essayez plutôt de changer de réseau à partir de votre portefeuille.",warnings_chainUnsupported:"Cette application ne prend pas en charge le réseau connecté actuel.",warnings_chainUnsupportedResolve:"Changez ou déconnectez-vous pour continuer.",onboardingScreen_heading:"Obtenez un portefeuille",onboardingScreen_h1:"Commencez à explorer le Web3",onboardingScreen_p:"Votre portefeuille est la porte d'entrée vers tout ce qui concerne l'Ethereum, la technologie magique qui permet d'explorer le Web3.",onboardingScreen_ctaText:"Choisissez votre premier portefeuille",onboardingScreen_ctaUrl:"https://ethereum.org/fr/wallets/find-wallet/",aboutScreen_heading:"À propos des portefeuilles",aboutScreen_a_h1:"Pour vos actifs numériques",aboutScreen_a_p:"Les portefeuilles vous permettent d'envoyer, de recevoir, de stocker et d'interagir avec des actifs numériques tels que des NFT et d'autres jetons Ethereum.",aboutScreen_b_h1:"Une meilleure façon de se connecter",aboutScreen_b_p:"Avec les applications modernes, votre portefeuille peut s'utiliser pour vous connecter facilement, au lieu d'avoir à mémoriser un mot de passe.",aboutScreen_c_h1:"Explorez le monde du Web3",aboutScreen_c_p:"Votre portefeuille est un utilitaire essentiel qui vous permet d'explorer et de participer au monde en évolution rapide du Web3.",aboutScreen_ctaText:"En savoir plus",aboutScreen_ctaUrl:"https://ethereum.org/fr/wallets/",connectorsScreen_heading:"Connectez le portefeuille",connectorsScreen_newcomer:"Je n’ai pas de portefeuille",connectorsScreen_h1:"Qu’est-ce qu’un portefeuille ?",connectorsScreen_p:"Les portefeuilles s'utilisent pour envoyer, recevoir et stocker des actifs numériques. La connexion d'un portefeuille vous permet d'interagir avec les applications.",mobileConnectorsScreen_heading:"Choisissez le portefeuille",scanScreen_heading:"Scannez avec le téléphone",scanScreen_heading_withConnector:"Scannez avec {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"Ouvrez un portefeuille pris en charge par WalletConnect [WALLETCONNECTLOGO] pour scanner",scanScreen_tooltip_default:"Ouvrez {{ CONNECTORNAME }} sur votre téléphone mobile pour scanner",downloadAppScreen_heading:"Obtenez {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Scannez avec l'appareil photo de votre téléphone pour le télécharger sur iOS ou Android.",downloadAppScreen_ios:"Scannez avec l'appareil photo de votre téléphone pour le télécharger sur iOS.",downloadAppScreen_android:"Scannez avec l'appareil photo de votre téléphone pour le télécharger sur Android.",injectionScreen_unavailable_h1:"Navigateur non pris en charge",injectionScreen_unavailable_p:"Pour connecter votre portefeuille {{ CONNECTORSHORTNAME }}, installez l’extension sur {{ SUGGESTEDEXTENSIONBROWSER }}.",injectionScreen_install_h1:"Installez {{ CONNECTORNAME }}",injectionScreen_install_p:"Pour connecter votre portefeuille {{ CONNECTORSHORTNAME }}, installez l’extension de navigateur.",injectionScreen_connecting_h1:"Demande de connexion",injectionScreen_connecting_p:"Ouvrez l’extension de navigateur {{ CONNECTORSHORTNAME }} pour connecter votre portefeuille.",injectionScreen_connecting_injected_h1:"Demande de connexion",injectionScreen_connecting_injected_p:"Acceptez la demande via votre portefeuille pour vous connecter à cette application.",injectionScreen_connected_h1:"Déjà connecté",injectionScreen_connected_p:"Vous pouvez maintenant fermer ce pop-up",injectionScreen_rejected_h1:"Demande annulée",injectionScreen_rejected_p:"Vous avez annulé la demande. Cliquez ci-dessus pour réessayer.",injectionScreen_failed_h1:"Échec de la connexion",injectionScreen_failed_p:"Malheureusement, un problème est survenu. Veuillez réessayer de vous connecter.",injectionScreen_notconnected_h1:"Connectez-vous à {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"Pour continuer, veuillez vous connecter à votre extension {{ CONNECTORNAME }} .",profileScreen_heading:"Connecté",switchNetworkScreen_heading:"Changer de réseau",signInWithEthereumScreen_tooltip:"Vous n’êtes pas connecté à cette application.\n**Connectez-vous avec Ethereum** pour continuer.",signInWithEthereumScreen_signedOut_heading:"Connectez-vous avec Ethereum",signInWithEthereumScreen_signedOut_h1:"Cette application souhaite vérifier que vous êtes bien le propriétaire de ce portefeuille.",signInWithEthereumScreen_signedOut_p:"Veuillez signer la demande de message dans votre portefeuille pour continuer.",signInWithEthereumScreen_signedOut_button:"Se connecter",signInWithEthereumScreen_signedIn_heading:"Connecté avec Ethereum",signInWithEthereumScreen_signedIn_h1:"Vous avez réussi à vous identifier en tant que propriétaire de ce portefeuille.",signInWithEthereumScreen_signedIn_p:"La déconnexion vous obligera à vous authentifier à nouveau à l'avenir.",signInWithEthereumScreen_signedIn_button:"Se déconnecter"},t0={...tJ,connectWallet:"ウォレットの接続",disconnect:"切断",connected:"接続されました",wrongNetwork:"間違ったネットワーク",switchNetworks:"ネットワークの切り替え",chainNetwork:"{{ CHAIN }} ネットワーク",copyToClipboard:"クリップボードにコピー",copyCode:"コードをコピー",moreInformation:"詳細情報",back:"戻る",close:"閉じる",or:"または",more:"その他",tryAgain:"再試行",tryAgainQuestion:"もう一度試しますか？",dontHaveTheApp:"アプリをお持ちではありませんか？",scanTheQRCode:"QR コードをスキャン",useWalletConnectModal:"WalletConnect モーダルを使用",useModal:"モーダルを使用",installTheExtension:"拡張機能をインストール",getWalletName:"{{ CONNECTORNAME }} を取得",otherWallets:"その他のウォレット",learnMore:"詳細情報",getWallet:"ウォレットを入手",approveInWallet:"ウォレットで承認",confirmInWallet:"ウォレットで確認",awaitingConfirmation:"確認を待っています",signIn:"サインイン",signOut:"サインアウト",signedIn:"サインインしました",signedOut:"サインアウトしました",walletNotConnected:"ウォレットが接続されていません",warnings_walletSwitchingUnsupported:"お使いのウォレットは、このアプリからのネットワークの切り替えをサポートしていません。",warnings_walletSwitchingUnsupportedResolve:"代わりにウォレット内からネットワークを切り替えてみてください。",warnings_chainUnsupported:"このアプリは、現在接続されているネットワークをサポートしていません。",warnings_chainUnsupportedResolve:"切り替えるか切断して続行します。",onboardingScreen_heading:"ウォレットを入手",onboardingScreen_h1:"Web3 の探索を開始",onboardingScreen_p:"ウォレットは、web3 の探索を可能にする魔法のテクノロジーであるイーサリアムのすべてへのゲートウェイです。",onboardingScreen_ctaText:"最初のウォレットを選択してください",onboardingScreen_ctaUrl:"https://ethereum.org/ja/wallets/find-wallet/",aboutScreen_heading:"ウォレットについて",aboutScreen_a_h1:"デジタル資産用",aboutScreen_a_p:"ウォレットを使用すると、NFT やその他のイーサリアム トークンなどのデジタル資産を送信、受信、保存、および操作できます。",aboutScreen_b_h1:"より良いログイン方法",aboutScreen_b_p:"最新のアプリでは、パスワードを覚える必要がなく、ウォレットを簡単なログイン方法として使用できます。",aboutScreen_c_h1:"web3 の世界を探索",aboutScreen_c_p:"ウォレットは、急速に進化する web3 の世界を探索し、参加するために不可欠なユーティリティです。",aboutScreen_ctaText:"詳細情報",aboutScreen_ctaUrl:"https://ethereum.org/ja/wallets/",connectorsScreen_heading:"ウォレットの接続",connectorsScreen_newcomer:"ウォレットを持っていません",connectorsScreen_h1:"ウォレットとは何ですか？",connectorsScreen_p:"ウォレットは、デジタル資産の送信、受信、および保存に使用されます。 ウォレットを接続すると、アプリとやり取りできます。",mobileConnectorsScreen_heading:"ウォレットを選択",scanScreen_heading:"電話でスキャンする",scanScreen_heading_withConnector:"{{ CONNECTORNAME }}でスキャンする",scanScreen_tooltip_walletConnect:"[WALLETCONNECTLOGO] WalletConnect 対応の ウォレットを開いてスキャンします",scanScreen_tooltip_default:"携帯電話で {{ CONNECTORNAME }} を 開いてスキャンします",downloadAppScreen_heading:"{{ CONNECTORNAME }} を取得",downloadAppScreen_iosAndroid:"携帯電話のカメラでスキャンして、iOS または Android にダウンロードします。",downloadAppScreen_ios:"携帯電話のカメラでスキャンして、iOS にダウンロードします。",downloadAppScreen_android:"携帯電話のカメラでスキャンして、Android にダウンロードします。",injectionScreen_unavailable_h1:"サポートされていないブラウザ",injectionScreen_unavailable_p:"{{ CONNECTORSHORTNAME }} ウォレットを接続するには、{{ SUGGESTEDEXTENSIONBROWSER }} に拡張機能をインストールします。",injectionScreen_install_h1:"{{ CONNECTORNAME }} をインストール",injectionScreen_install_p:"{{ CONNECTORSHORTNAME }} ウォレットを接続するには、ブラウザ拡張機能をインストールします。",injectionScreen_connecting_h1:"接続を要求",injectionScreen_connecting_p:"{{ CONNECTORSHORTNAME }} ブラウザ拡張機能を 開いて、ウォレットを接続します。",injectionScreen_connecting_injected_h1:"接続を要求",injectionScreen_connecting_injected_p:"このアプリに接続するには、ウォレットを介して要求を受け入れます。",injectionScreen_connected_h1:"すでに接続済み",injectionScreen_connected_p:"このポップアップを閉じてもかまいません",injectionScreen_rejected_h1:"要求がキャンセルされました",injectionScreen_rejected_p:"要求をキャンセルしました。上をクリックしてもう一度お試しください。",injectionScreen_failed_h1:"接続に失敗しました",injectionScreen_failed_p:"申し訳ありませんが、問題が発生しました。もう一度接続してみてください。",injectionScreen_notconnected_h1:"{{ CONNECTORNAME }} にログイン",injectionScreen_notconnected_p:"続行するには、 {{ CONNECTORNAME }} 拡張機能にログインしてください。",profileScreen_heading:"接続されました",switchNetworkScreen_heading:"ネットワークの切り替え",signInWithEthereumScreen_tooltip:"このアプリにサインインしていません。\n続行するには、**イーサリアムでサインイン**してください。",signInWithEthereumScreen_signedOut_heading:"イーサリアムでサインイン",signInWithEthereumScreen_signedOut_h1:"このアプリは、あなたがこのウォレットの 所有者であることを確認しようとしています。",signInWithEthereumScreen_signedOut_p:"続行するには、ウォレットで メッセージ リクエストに署名してください。",signInWithEthereumScreen_signedOut_button:"サインイン",signInWithEthereumScreen_signedIn_heading:"イーサリアムでサインインしました",signInWithEthereumScreen_signedIn_h1:"このウォレットの所有者であることが 正常に確認されました。",signInWithEthereumScreen_signedIn_p:"サインアウトすると、今後 再度認証する必要があります。",signInWithEthereumScreen_signedIn_button:"サインアウト"},t2={...tJ,connectWallet:"Conectar carteira",disconnect:"Desconectar",connected:"Conectado",wrongNetwork:"Rede incorreta",switchNetworks:"Alternar rede",chainNetwork:"Rede {{ CHAIN }}",copyToClipboard:"Copiar para a área de transferência",copyCode:"Copiar código",moreInformation:"Mais informações",back:"Voltar",close:"Fechar",or:"ou",more:"Mais",tryAgain:"Tentar novamente",tryAgainQuestion:"Tentar novamente?",dontHaveTheApp:"Não tem o aplicativo?",scanTheQRCode:"Escaneie o código QR",useWalletConnectModal:"Use o modal do WalletConnect",useModal:"Usar modal",installTheExtension:"Instale a extensão",getWalletName:"Obter {{ CONNECTORNAME }}",otherWallets:"Outras carteiras",learnMore:"Saiba mais",getWallet:"Obtenha uma carteira",approveInWallet:"Aprovar na carteira",confirmInWallet:"Confirmar na carteira",awaitingConfirmation:"Aguardando confirmação",signIn:"Entrar",signOut:"Sair",signedIn:"Conectado",signedOut:"Desconectado",walletNotConnected:"Carteira não conectada",warnings_walletSwitchingUnsupported:"A sua carteira não permite a troca de rede a partir deste aplicativo.",warnings_walletSwitchingUnsupportedResolve:"Tente trocar de rede de dentro da sua carteira.",warnings_chainUnsupported:"Este aplicativo não é compatível com a rede conectada.",warnings_chainUnsupportedResolve:"Altere a rede ou desconecte para continuar.",onboardingScreen_heading:"Obtenha uma carteira",onboardingScreen_h1:"Comece a explorar a Web3",onboardingScreen_p:"Sua carteira é a porta de entrada para todas as coisas Ethereum, a tecnologia mágica que torna possível explorar a web3.",onboardingScreen_ctaText:"Escolha sua primeira carteira",onboardingScreen_ctaUrl:"https://ethereum.org/pt-br/wallets/find-wallet/",aboutScreen_heading:"Sobre as carteiras",aboutScreen_a_h1:"Para seus ativos digitais",aboutScreen_a_p:"As carteiras permitem que você envie, receba, armazene e interaja com ativos digitais como NFTs e outros tokens Ethereum.",aboutScreen_b_h1:"Uma maneira melhor de fazer login",aboutScreen_b_p:"Com aplicativos modernos, sua carteira pode ser usada como uma maneira fácil de fazer login, em vez de ter que lembrar uma senha.",aboutScreen_c_h1:"Explore o mundo da Web3",aboutScreen_c_p:"Sua carteira é uma utilidade essencial que permite explorar e participar do mundo em rápida evolução da Web3.",aboutScreen_ctaText:"Saiba mais",aboutScreen_ctaUrl:"https://ethereum.org/pt-br/wallets/",connectorsScreen_heading:"Conectar carteira",connectorsScreen_newcomer:"Eu não tenho uma carteira",connectorsScreen_h1:"O que é uma carteira?",connectorsScreen_p:"As carteiras são usadas para enviar, receber e armazenar ativos digitais. A conexão de uma carteira permite que você interaja com aplicativos.",mobileConnectorsScreen_heading:"Escolha uma carteira",scanScreen_heading:"Escanear com o celular",scanScreen_heading_withConnector:"Escanear com o {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:`Abra uma carteira compat\xedvel 
com o WalletConnect [WALLETCONNECTLOGO] para escanear`,scanScreen_tooltip_default:`Abra o {{ CONNECTORNAME }} no 
seu celular para escanear`,downloadAppScreen_heading:"Obter {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Escaneie com a câmera do seu celular para baixar no iOS ou Android.",downloadAppScreen_ios:"Escaneie com a câmera do seu celular para baixar no iOS.",downloadAppScreen_android:"Escaneie com a câmera do seu celular para baixar no Android.",injectionScreen_unavailable_h1:"Navegador não compatível",injectionScreen_unavailable_p:`Para conectar sua carteira {{ CONNECTORSHORTNAME }},
instale a extens\xe3o no {{ SUGGESTEDEXTENSIONBROWSER }}.`,injectionScreen_install_h1:"Instalar {{ CONNECTORNAME }}",injectionScreen_install_p:`Para conectar sua carteira {{ CONNECTORSHORTNAME }},
instale a extens\xe3o do navegador`,injectionScreen_connecting_h1:"Solicitando conexão",injectionScreen_connecting_p:`Abra a extens\xe3o do navegador do {{ CONNECTORSHORTNAME }} 
para conectar a sua carteira.`,injectionScreen_connecting_injected_h1:"Solicitando conexão",injectionScreen_connecting_injected_p:"Aceite a solicitação por meio de sua carteira para se conectar a este aplicativo.",injectionScreen_connected_h1:"Já conectado",injectionScreen_connected_p:"Agora você já pode fechar esta janela",injectionScreen_rejected_h1:"Solicitação cancelada",injectionScreen_rejected_p:`Voc\xea cancelou a solicita\xe7\xe3o.
Clique acima para tentar novamente.`,injectionScreen_failed_h1:"A conexão falhou",injectionScreen_failed_p:`Desculpe, ocorreu um erro.
Por favor, tente conectar novamente.`,injectionScreen_notconnected_h1:"Faça login no {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"Para continuar, faça login na sua extensão do {{ CONNECTORNAME }}.",profileScreen_heading:"Conectado",switchNetworkScreen_heading:"Alternar rede",signInWithEthereumScreen_tooltip:"Você não está conectado a este aplicativo.\n**Entre com Ethereum** para continuar.",signInWithEthereumScreen_signedOut_heading:"Entrar com Ethereum",signInWithEthereumScreen_signedOut_h1:"Este aplicativo gostaria de verificar você \n como o proprietário desta carteira.",signInWithEthereumScreen_signedOut_p:`Por favor, assine o pedido de mensagem 
 em sua carteira para continuar.`,signInWithEthereumScreen_signedOut_button:"Entrar",signInWithEthereumScreen_signedIn_heading:"Conectado com Ethereum",signInWithEthereumScreen_signedIn_h1:"Você se verificou com sucesso \n como o proprietário desta carteira",signInWithEthereumScreen_signedIn_p:`Se sair, ser\xe1 necess\xe1rio que voc\xea 
 autentique novamente no futuro.`,signInWithEthereumScreen_signedIn_button:"Sair"},t3={...tJ,connectWallet:"Подключить кошелек",disconnect:"Отключить",connected:"Подключена",wrongNetwork:"Неверная сеть",switchNetworks:"Переключение сети",chainNetwork:"Сеть {{ CHAIN }}",copyToClipboard:"Скопировать в буфер обмена",copyCode:"Скопировать код",moreInformation:"Больше информации",back:"Назад",close:"Закрыть",or:"или",more:"Еще",tryAgain:"Попробовать снова",tryAgainQuestion:"Попробовать снова?",dontHaveTheApp:"У вас нет приложения?",scanTheQRCode:"Отсканируйте QR-код",useWalletConnectModal:"Использовать окно WalletConnect",useModal:"Использовать модальное окно",installTheExtension:"Установить расширение",getWalletName:"Скачать {{ CONNECTORNAME }}",otherWallets:"Другие кошельки",learnMore:"Узнать больше",getWallet:"Завести кошелек",approveInWallet:"Подтвердите",confirmInWallet:"Подтвердите",awaitingConfirmation:"Ожидаем подтверждение",signIn:"Войти",signOut:"Выйти",signedIn:"Вошли",signedOut:"Вышли",walletNotConnected:"Кошелек не подключен",warnings_walletSwitchingUnsupported:"Ваш кошелек не поддерживает переключение сетей из этого приложения.",warnings_walletSwitchingUnsupportedResolve:"Попробуйте переключиться на другую сеть прямо в вашем кошельке.",warnings_chainUnsupported:"Это приложение не поддерживает текущую подключенную сеть.",warnings_chainUnsupportedResolve:"Для продолжения переключите сеть или отключите кошелек.",onboardingScreen_heading:"Завести кошелек",onboardingScreen_h1:"Начните исследовать веб3",onboardingScreen_p:"Ваш кошелек — это врата в мир Ethereum, волшебной технологии, которая позволяет исследовать веб3.",onboardingScreen_ctaText:"Выбрать свой первый кошелек",onboardingScreen_ctaUrl:"https://ethereum.org/en/wallets/find-wallet/",aboutScreen_heading:"О кошельках",aboutScreen_a_h1:"Для ваших цифровых активов",aboutScreen_a_p:"Кошельки позволяют вам отправлять, получать, хранить и взаимодействовать с цифровыми активами, такими как NFT и другие токены Ethereum.",aboutScreen_b_h1:"Лучший способ входа",aboutScreen_b_p:"В современных приложениях ваш кошелек можно использовать как удобный способ входа без необходимости помнить пароль.",aboutScreen_c_h1:"Исследуйте мир веб3",aboutScreen_c_p:"Ваш кошелек - это неотъемлемый инструмент, который позволяет вам исследовать и участвовать в быстро развивающемся мире веб3.",aboutScreen_ctaText:"Узнать больше",aboutScreen_ctaUrl:"https://ethereum.org/en/wallets/",connectorsScreen_heading:"Подключение кошелька",connectorsScreen_newcomer:"У меня нет кошелька",connectorsScreen_h1:"Что такое кошелек?",connectorsScreen_p:"Кошельки используются для отправки, получения и хранения цифровых активов. Подключение кошелька позволяет вам взаимодействовать с приложениями.",mobileConnectorsScreen_heading:"Выберите кошелек",scanScreen_heading:"Сканирование с телефона",scanScreen_heading_withConnector:"Сканирование с помощью {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"Откройте [WALLETCONNECTLOGO] поддерживаемый WalletConnect кошелек для сканирования",scanScreen_tooltip_default:"Откройте {{ CONNECTORNAME }} на вашем мобильном телефоне для сканирования",downloadAppScreen_heading:"Скачивание {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Отсканируйте камерой телефона для загрузки приложения на iOS или Android.",downloadAppScreen_ios:"Отсканируйте камерой телефона для загрузки приложения на iOS.",downloadAppScreen_android:"Сканируйте камерой телефона для загрузки приложения на Android.",injectionScreen_unavailable_h1:"Неподдерживаемый браузер",injectionScreen_unavailable_p:"Для подключения вашего кошелька {{ CONNECTORSHORTNAME }}, установите расширение для браузера {{ SUGGESTEDEXTENSIONBROWSER }}.",injectionScreen_install_h1:"Установите {{ CONNECTORNAME }}",injectionScreen_install_p:"Для подключения вашего кошелька {{ CONNECTORSHORTNAME }}, установите расширение для браузера.",injectionScreen_connecting_h1:"Запрос на подключение",injectionScreen_connecting_p:"Откройте расширение для браузера {{ CONNECTORSHORTNAME }} для подключения вашего кошелька.",injectionScreen_connecting_injected_h1:"Запрос на подключение",injectionScreen_connecting_injected_p:"Примите запрос в вашем кошельке, чтобы подключиться к приложению.",injectionScreen_connected_h1:"Уже подключен",injectionScreen_connected_p:"Можно закрыть это окно",injectionScreen_rejected_h1:"Запрос отменен",injectionScreen_rejected_p:`Вы отменили запрос.
Нажмите выше, чтобы попробовать снова.`,injectionScreen_failed_h1:"Сбой подключения",injectionScreen_failed_p:`Извините, что-то пошло не так.
Пожалуйста, попробуйте подключиться снова.`,injectionScreen_notconnected_h1:"Войдите в {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"Для продолжения войдите в расширение {{ CONNECTORNAME }}.",profileScreen_heading:"Кошелек подключен",switchNetworkScreen_heading:"Переключение сетей",signInWithEthereumScreen_tooltip:"Вы не вошли в это приложение.\n**Войдите с помощью Ethereum**, чтобы продолжить.",signInWithEthereumScreen_signedOut_heading:"Войти с помощью Ethereum",signInWithEthereumScreen_signedOut_h1:"Это приложение хочет подтвердить вас \n в качестве владельца этого кошелька.",signInWithEthereumScreen_signedOut_p:`Пожалуйста, подпишите запрос на сообщение 
 в своем кошельке, чтобы продолжить.`,signInWithEthereumScreen_signedOut_button:"Войти",signInWithEthereumScreen_signedIn_heading:"Вошли с помощью Ethereum",signInWithEthereumScreen_signedIn_h1:"Вы успешно подтвердили себя \n в качестве владельца этого кошелька.",signInWithEthereumScreen_signedIn_p:`Выйти потребуется 
 повторная аутентификация в будущем.`,signInWithEthereumScreen_signedIn_button:"Выйти"},t5={...tJ,connectWallet:"绑定钱包",disconnect:"解除绑定",connected:"已绑定",wrongNetwork:"错误网络",switchNetworks:"切换网络",chainNetwork:"{{ CHAIN }}网络",copyToClipboard:"复制到剪贴板",copyCode:"复制代码",moreInformation:"更多信息",back:"返回",close:"关闭",or:"或",more:"更多",tryAgain:"重试",tryAgainQuestion:"重试？",dontHaveTheApp:"没有该应用？",scanTheQRCode:"扫描二维码",useWalletConnectModal:"使用 WalletConnect 模态窗",useModal:"使用模态窗",installTheExtension:"安装扩展程序",getWalletName:"获取{{ CONNECTORNAME }}",otherWallets:"其他钱包",learnMore:"了解更多",getWallet:"获取钱包",approveInWallet:"在钱包中批准",confirmInWallet:"在钱包中确认",awaitingConfirmation:"等待确认",signIn:"登录",signOut:"登出",signedIn:"已登录",signedOut:"已登出",walletNotConnected:"钱包未绑定",warnings_walletSwitchingUnsupported:"您的钱包不支持从此应用切换网络。",warnings_walletSwitchingUnsupportedResolve:"请尝试从钱包中切换网络。",warnings_chainUnsupported:"此应用不支持当前连接的网络。",warnings_chainUnsupportedResolve:"请切换网络或断开连接以继续。",onboardingScreen_heading:"获取钱包",onboardingScreen_h1:"开始探索 Web3",onboardingScreen_p:"您的钱包是通往以太坊的一扇大门，而以太坊是探索 Web3 的一项神奇技术。",onboardingScreen_ctaText:"选择您的第一钱包",onboardingScreen_ctaUrl:"https://ethereum.org/zh/wallets/find-wallet/",aboutScreen_heading:"关于钱包",aboutScreen_a_h1:"对于您的数字资产",aboutScreen_a_p:"有了钱包，您可以发送、接收、存储数字资产及使用数字资产进行交互，例如 NFT 和其他以太坊通证等。",aboutScreen_b_h1:"更好的登录方式",aboutScreen_b_p:"使用现代应用，您的钱包可以用作简便的登录方法，而不必记住密码。",aboutScreen_c_h1:"探索 Web3 世界",aboutScreen_c_p:"您的钱包是一个重要的工具，可以让您探索并参与到快速发展的 Web3 世界。",aboutScreen_ctaText:"了解更多",aboutScreen_ctaUrl:"https://ethereum.org/zh/wallets/",connectorsScreen_heading:"绑定钱包",connectorsScreen_newcomer:"我没有钱包",connectorsScreen_h1:"什么是钱包？",connectorsScreen_p:"钱包可用于发送、接收和存储数字资产。通过绑定钱包，您可以与应用进行交互。",mobileConnectorsScreen_heading:"选择钱包",scanScreen_heading:"手机扫描",scanScreen_heading_withConnector:"手机扫描{{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"打开 [WALLETCONNECTLOGO] WalletConnect 支持的钱包进行扫描",scanScreen_tooltip_default:"打开您手机上的{{ CONNECTORNAME }} 进行扫描",downloadAppScreen_heading:"获取{{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"使用手机相机扫描以下载 iOS 或 Android 应用。",downloadAppScreen_ios:"使用手机相机扫描以下载 iOS 应用。",downloadAppScreen_android:"使用手机相机扫描以下载 Android 应用。",injectionScreen_unavailable_h1:"不支持的浏览器",injectionScreen_unavailable_p:"要绑定您的{{ CONNECTORSHORTNAME }}钱包，请在{{ SUGGESTEDEXTENSIONBROWSER }}上安装此扩展程序。",injectionScreen_install_h1:"安装{{ CONNECTORNAME }}",injectionScreen_install_p:"要绑定您的{{ CONNECTORSHORTNAME }}钱包，请安装此浏览器扩展程序。",injectionScreen_connecting_h1:"请求绑定",injectionScreen_connecting_p:"打开{{ CONNECTORSHORTNAME }}浏览器 扩展程序以绑定您的钱包。",injectionScreen_connecting_injected_h1:"请求绑定",injectionScreen_connecting_injected_p:"通过您的钱包接受请求，以绑定到此应用。",injectionScreen_connected_h1:"已绑定",injectionScreen_connected_p:"现在可以关闭此弹窗",injectionScreen_rejected_h1:"请求已取消",injectionScreen_rejected_p:"您已取消请求。点击上面可重试。",injectionScreen_failed_h1:"绑定失败",injectionScreen_failed_p:"抱歉，发生错误。请尝试重新绑定。",injectionScreen_notconnected_h1:"登录{{ CONNECTORNAME }}",injectionScreen_notconnected_p:"要继续，请登录到您的{{ CONNECTORNAME }}扩展程序。",profileScreen_heading:"已绑定",switchNetworkScreen_heading:"切换网络",signInWithEthereumScreen_tooltip:"您尚未登录到此应用。\n请选择**使用以太坊登录**以继续。",signInWithEthereumScreen_signedOut_heading:"使用以太坊登录",signInWithEthereumScreen_signedOut_h1:"此应用希望验证您是 此钱包的所有者。",signInWithEthereumScreen_signedOut_p:"请签署钱包中的消息请求 以继续。",signInWithEthereumScreen_signedOut_button:"登录",signInWithEthereumScreen_signedIn_heading:"已使用以太坊登录",signInWithEthereumScreen_signedIn_h1:"您已成功验证自己 是此钱包的所有者。",signInWithEthereumScreen_signedIn_p:"登出后，将来您还需要 再次进行身份验证。",signInWithEthereumScreen_signedIn_button:"登出"},t4={...tJ,connectWallet:"Connecta la cartera",disconnect:"Desconnectar",connected:"Connectat",wrongNetwork:"Xarxa incorrecta",switchNetworks:"Canvi de xarxa",chainNetwork:"Xarxa {{ CHAIN }}",copyToClipboard:"Copia al portapapers",copyCode:"Copia codi",moreInformation:"Més informació",back:"Enrere",close:"Tanca",or:"o",more:"Més",tryAgain:"Torna-ho a intentar",tryAgainQuestion:"Tornar a intentar-ho?",dontHaveTheApp:"No tens l'aplicació?",scanTheQRCode:"Escaneja el codi QR",useWalletConnectModal:"Utilitza WalletConnect Modal",useModal:"Utilitza Modal",installTheExtension:"Instal·la l'extensió",getWalletName:"Obté {{ CONNECTORNAME }}",otherWallets:"Altres carteres",learnMore:"Més informació",getWallet:"Obté una cartera",approveInWallet:"Aprova a la cartera",confirmInWallet:"Confirma a la cartera",awaitingConfirmation:"Esperant confirmació",signIn:"Inicia sessió",signOut:"Tanca sessió",signedIn:"Sessió iniciada",signedOut:"Sessió tancada",walletNotConnected:"Cartera no connectada",warnings_walletSwitchingUnsupported:"La teva cartera no permet canviar de xarxa des d'aquesta aplicació.",warnings_walletSwitchingUnsupportedResolve:"Prova a canviar de xarxa des de la teva cartera.",warnings_chainUnsupported:"Aquesta aplicació no és compatible amb la xarxa connectada actualment.",warnings_chainUnsupportedResolve:"Canvia o desconnecta per continuar.",onboardingScreen_heading:"Obté una cartera",onboardingScreen_h1:"Comença a explorar la Web3",onboardingScreen_p:"La teva cartera és el portal d'accés a tot el relacionat amb Ethereum, la tecnologia màgica que permet explorar la Web3.",onboardingScreen_ctaText:"Tria la teva primera cartera",onboardingScreen_ctaUrl:"https://ethereum.org/es/wallets/find-wallet/",aboutScreen_heading:"Sobre les carteres",aboutScreen_a_h1:"Per als teus actius digitals",aboutScreen_a_p:"Les carteres et permeten enviar, rebre, emmagatzemar i interactuar amb actius digitals com els NFT i altres tokens d'Ethereum.",aboutScreen_b_h1:"Una manera millor d'iniciar sessió",aboutScreen_b_p:"Amb les aplicacions modernes, pots utilitzar la teva cartera per iniciar sessió fàcilment, en lloc de haver de recordar una contrasenya.",aboutScreen_c_h1:"Explora el món de la Web3",aboutScreen_c_p:"La teva cartera és una eina essencial que et permet explorar i participar en el món en ràpida evolució de la Web3.",aboutScreen_ctaText:"Més informació",aboutScreen_ctaUrl:"https://ethereum.org/es/wallets/",connectorsScreen_heading:"Connecta una cartera",connectorsScreen_newcomer:"No tinc una cartera",connectorsScreen_h1:"Què és una cartera?",connectorsScreen_p:"Les carteres s'utilitzen per enviar, rebre i emmagatzemar actius digitals. Si connectes una cartera, podràs interactuar amb les aplicacions.",mobileConnectorsScreen_heading:"Tria una cartera",scanScreen_heading:"Escaneja amb el telèfon",scanScreen_heading_withConnector:"Escaneja amb {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"Obre una cartera compatible amb WalletConnect [WALLETCONNECTLOGO] per escanejar",scanScreen_tooltip_default:"Obre {{ CONNECTORNAME }} en el teu telèfon mòbil per escanejar",downloadAppScreen_heading:"Obté {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Escaneja amb la càmera del teu telèfon per descarregar-la en iOS o Android.",downloadAppScreen_ios:"Escaneja amb la càmera del teu telèfon per descarregar-la en iOS.",downloadAppScreen_android:"Escaneja amb la càmera del teu telèfon per descarregar-la en Android.",injectionScreen_unavailable_h1:"Navegador no compatible",injectionScreen_unavailable_p:"Per connectar la teva cartera de {{ CONNECTORSHORTNAME }}, instal·la l'extensió en {{ SUGGESTEDEXTENSIONBROWSER }}.",injectionScreen_install_h1:"Instal·la {{ CONNECTORNAME }}",injectionScreen_install_p:"Per connectar la teva cartera de {{ CONNECTORSHORTNAME }}, instal·la l'extensió del navegador.",injectionScreen_connecting_h1:"Sol·licitud de connexió",injectionScreen_connecting_p:"Obre l'extensió del navegador de {{ CONNECTORSHORTNAME }}  per connectar la teva cartera.",injectionScreen_connecting_injected_h1:"Sol·licitud de connexió",injectionScreen_connecting_injected_p:"Accepta la sol·licitud a través de la teva cartera per connectar-te a aquesta aplicació.",injectionScreen_connected_h1:"Ja connectada",injectionScreen_connected_p:"Ja pots tancar aquesta finestra emergent",injectionScreen_rejected_h1:"Sol·licitud cancel·lada",injectionScreen_rejected_p:"Has cancel·lat la sol·licitud. Fes clic a dalt per tornar-ho a intentar.",injectionScreen_failed_h1:"Error de connexió",injectionScreen_failed_p:"Ho sentim, hi ha hagut un problema. Intenta connectar-te de nou.",injectionScreen_notconnected_h1:"Inicia sessió en {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"Per continuar, inicia sessió en la teva extensió de {{ CONNECTORNAME }}.",profileScreen_heading:"Connectat",switchNetworkScreen_heading:"Canvi de xarxa",signInWithEthereumScreen_tooltip:"No has iniciat sessió en aquesta aplicació.\n**Inicia sessió amb Ethereum** per continuar.",signInWithEthereumScreen_signedOut_heading:"Inicia sessió amb Ethereum",signInWithEthereumScreen_signedOut_h1:"Aquesta aplicació vol verificar que ets el propietari d'aquesta cartera.",signInWithEthereumScreen_signedOut_p:"Signa la sol·licitud de missatge en la teva cartera per continuar.",signInWithEthereumScreen_signedOut_button:"Inicia sessió",signInWithEthereumScreen_signedIn_heading:"Sessió iniciada amb Ethereum",signInWithEthereumScreen_signedIn_h1:"T'has verificat correctament com a propietari d'aquesta cartera.",signInWithEthereumScreen_signedIn_p:"Si tanques la sessió, hauràs de tornar a autenticar-te més endavant.",signInWithEthereumScreen_signedIn_button:"Tanca sessió"},t8={...tJ,connectWallet:"Cüzdan Bağla",disconnect:"Bağlantıyı Kes",connected:"Bağlandı",wrongNetwork:"Yanlış Ağ",switchNetworks:"Ağ Değiştir",chainNetwork:"{{ CHAIN }} Ağı",copyToClipboard:"Panoya Kopyala",copyCode:"Kodu Kopyala",moreInformation:"Daha Fazla Bilgi",back:"Geri",close:"Kapat",or:"veya",more:"Daha Fazla",tryAgain:"Tekrar Dene",tryAgainQuestion:"Tekrar Dene?",dontHaveTheApp:"Uygulaman yok mu?",scanTheQRCode:"Karekodu tarat",useWalletConnectModal:"WalletConnect Modalini Kullan ",useModal:"Modal Kullan",installTheExtension:"Eklentiyi İndir",getWalletName:"{{ CONNECTORNAME }} Alın",otherWallets:"Diğer Cüzdanlar",learnMore:"Daha Fazlasını Öğren",getWallet:"Cüzdan Al",approveInWallet:"Cüzdanda Yetki Ver",confirmInWallet:"Cüzdanda Onayla",awaitingConfirmation:"Doğrulama Bekleniyor",signIn:"Giriş Yap",signOut:"Çıkış Yap",signedIn:"Giriş Yapıldı",signedOut:"Çıkış Yapıldı",walletNotConnected:"Cüzdan Bağlı Değil",warnings_walletSwitchingUnsupported:"Bu uygulamada ağ değiştirmeyi cüzdanın desteklemiyor.",warnings_walletSwitchingUnsupportedResolve:"Bunun yerine cüzdanınızdan ağları değiştirmeyi deneyin.",warnings_chainUnsupported:"Bu uygulama kullanmış olduğunuz ağı desteklemiyor.",warnings_chainUnsupportedResolve:"Devam etmek için ağ değiştir veya bağlantıyı kes.",onboardingScreen_heading:"Cüzdan Al",onboardingScreen_h1:"Web3'ü keşfetmeye başla",onboardingScreen_p:"Cüzdanınız, Web3'ü keşfetmeyi mümkün kılan sihirli teknoloji olan Ethereum'a açılan kapıdır.",onboardingScreen_ctaText:"İlk Cüzdanını Seç",onboardingScreen_ctaUrl:"https://ethereum.org/tr/wallets/find-wallet/",aboutScreen_heading:"Cüzdanlar Hakkında",aboutScreen_a_h1:"Dijital varlıkların için",aboutScreen_a_p:"Cüzdanlar, NFT'ler ve diğer Ethereum varlıkları gibi dijital varlıklar göndermenize, almanıza, saklamanıza ve bunlarla etkileşim kurmanıza olanak tanır.",aboutScreen_b_h1:"Giriş yapmanın daha iyi bir yolu",aboutScreen_b_p:"Modern uygulamalar ile parola hatırlamak yerine cüzdanınız ile kolayca giriş yapabilirsiniz.",aboutScreen_c_h1:"Web3 dünyasını keşfet",aboutScreen_c_p:"Cüzdanınız, hızla gelişen Web3 dünyasını keşfetmenizi ve bu dünyaya katılmanızı sağlayan temel bir yardımcı programdır.",aboutScreen_ctaText:"Daha Fazlasını Öğren",aboutScreen_ctaUrl:"https://ethereum.org/tr/wallets/",connectorsScreen_heading:"Cüzdan Bağla",connectorsScreen_newcomer:"Cüzdanım Yok",connectorsScreen_h1:"Cüzdan nedir?",connectorsScreen_p:"Cüzdanlar, dijital varlıkları göndermek, almak ve depolamak için kullanılır. Bir cüzdanı bağlamak, uygulamalarla etkileşime geçmenizi sağlar.",mobileConnectorsScreen_heading:"Cüzdan Seç",scanScreen_heading:"Telefon ile Tarat",scanScreen_heading_withConnector:"{{ CONNECTORNAME }} ile tarat",scanScreen_tooltip_walletConnect:`Desteklenen bir c\xfczdan taramak i\xe7in
 [WALLETCONNECTLOGO] WalletConnect uygulamasını a\xe7`,scanScreen_tooltip_default:`Taramak i\xe7in telefonunda
 {{ CONNECTORNAME }} uygulamasını a\xe7`,downloadAppScreen_heading:"{{ CONNECTORNAME }} İndir",downloadAppScreen_iosAndroid:"iOS ve Android'e indirmek için telefon kameran ile tarat.",downloadAppScreen_ios:"iOS'a indirmek için telefon kameran ile tarat.",downloadAppScreen_android:"Android'e indirmek için telefon kameran ile tarat.",injectionScreen_unavailable_h1:"Desteklenmeyen Tarayıcı",injectionScreen_unavailable_p:`{{ CONNECTORSHORTNAME }} c\xfczdanına bağlanmak i\xe7in
{{ SUGGESTEDEXTENSIONBROWSER }} \xfczerinde indirmen gerekiyor.`,injectionScreen_install_h1:"{{ CONNECTORNAME }} İndir",injectionScreen_install_p:`{{ CONNECTORSHORTNAME }} c\xfczdanına bağlanmak i\xe7in,
tarayıcı eklentisini indir.`,injectionScreen_connecting_h1:"Bağlantı İsteniyor.",injectionScreen_connecting_p:`C\xfczdanını bağlamak i\xe7in
 tarayıcıdan {{ CONNECTORSHORTNAME }} uzantısını a\xe7ın.`,injectionScreen_connecting_injected_h1:"Bağlantı İsteniyor.",injectionScreen_connecting_injected_p:"Bu uygulamaya bağlanmak için cüzdanına gelen isteği kabul et.",injectionScreen_connected_h1:"Zaten Bağlanmış",injectionScreen_connected_p:"Bu açılır pencereyi artık kapatabilirsin",injectionScreen_rejected_h1:"İstek iptal edildi.",injectionScreen_rejected_p:`İsteği iptal ettin.
Tekrar denemek i\xe7in yukarıyı tıklayın.`,injectionScreen_failed_h1:"Bağlantı Başarısız",injectionScreen_failed_p:`\xdczg\xfcn\xfcz, bir şeyler ters gitti.
L\xfctfen daha sonra tekrar deneyin.`,injectionScreen_notconnected_h1:"{{ CONNECTORNAME }} ile giriş yap",injectionScreen_notconnected_p:"Devam etmek için, {{ CONNECTORNAME }} eklentisine giriş yapın.",profileScreen_heading:"Bağlandı",switchNetworkScreen_heading:"Ağ Değiştir",signInWithEthereumScreen_tooltip:"Bu uygulamada oturum açmadınız.\n Devam etmek için **Ethereum İle Giriş Yap**.",signInWithEthereumScreen_signedOut_heading:"Ethereum İle Giriş Yap",signInWithEthereumScreen_signedOut_h1:"Bu uygulama seni \n bu cüzdanın sahibi olarak doğrulamak istiyor.",signInWithEthereumScreen_signedOut_p:`Devam etmek i\xe7in 
 c\xfczdanınızdaki isteği onaylayın.`,signInWithEthereumScreen_signedOut_button:"Giriş Yap",signInWithEthereumScreen_signedIn_heading:"Ethereum İle Giriş Yapıldı",signInWithEthereumScreen_signedIn_h1:"Bu cüzdanın sahibi olduğunu \n başarıyla onayladın.",signInWithEthereumScreen_signedIn_p:`\xc7ıkış yaparsan ileride 
 tekrar giriş yapman gerekecek. `,signInWithEthereumScreen_signedIn_button:"Çıkış Yap"},t9={...tJ,connectWallet:"Kết nối ví",disconnect:"Ngắt kết nối",connected:"Đã kết nối",wrongNetwork:"Mạng không hỗ trợ",switchNetworks:"Đổi mạng",chainNetwork:"Mạng {{ CHAIN }}",copyToClipboard:"Sao chép",copyCode:"Sao chép mã",moreInformation:"Thêm thông tin",back:"Quay lại",close:"Đóng",or:"hoặc",more:"Thêm",tryAgain:"Thử lại",tryAgainQuestion:"Thử lại?",dontHaveTheApp:"Không có app?",scanTheQRCode:"Quét mã QR",useWalletConnectModal:"Dùng WalletConnect Modal",useModal:"Dùng Modal",installTheExtension:"Cài tiện ích",getWalletName:"Lấy {{ CONNECTORNAME }}",otherWallets:"Các ví khác",learnMore:"Xem thêm",getWallet:"Tạo một ví",approveInWallet:"Cấp quyền trong ví",confirmInWallet:"Xác nhận trong ví",awaitingConfirmation:"Đang chờ xác nhận",signIn:"Đăng nhập",signOut:"Đăng xuất",signedIn:"Đã đăng nhập",signedOut:"Đã đăng xuất",walletNotConnected:"Chưa kết nối ví",warnings_walletSwitchingUnsupported:"Ví của bạn không hỗ trợ đổi mạng từ ứng dụng.",warnings_walletSwitchingUnsupportedResolve:"Hãy thử đổi mạng từ phía ví của bạn.",warnings_chainUnsupported:"Ứng dụng này không hỗ trợ mạng hiện tại.",warnings_chainUnsupportedResolve:"Đổi hoặc ngắt kết nối để tiếp tục.",onboardingScreen_heading:"Tạo một ví",onboardingScreen_h1:"Bắt đầu khám khá Web3",onboardingScreen_p:"Ví của bạn là cổng giao tiếp mọi thứ trên Ethereum, công nghệ tuyệt vời giúp khám phá Web3.",onboardingScreen_ctaText:"Chọn ví đầu tiên của bạn",onboardingScreen_ctaUrl:"https://ethereum.org/en/wallets/find-wallet/",aboutScreen_heading:"Giới thiệu các ví",aboutScreen_a_h1:"Cho tài sản số của bạn",aboutScreen_a_p:"Các ví để bạn gửi, nhận, lưu trữ, và tương tác với các tài sản điện tử như NFTs và các loại tiền Ethereum khác.",aboutScreen_b_h1:"Một cách tốt hơn để đăng nhập",aboutScreen_b_p:"Với các ứng dụng hiện đại, ví của bạn có thể dùng để đăng nhập dễ dàng thay vì phải nhớ tài khoản và mật khẩu.",aboutScreen_c_h1:"Khám phá thế giới Web3",aboutScreen_c_p:"Ví của bạn là một tiện ích thiết yếu cho phép bạn khám phá và tham gia vào thế giới web3 đang phát triển nhanh chóng.",aboutScreen_ctaText:"Tìm hiểu thêm",aboutScreen_ctaUrl:"https://ethereum.org/en/wallets/",connectorsScreen_heading:"Kết nối Ví",connectorsScreen_newcomer:"Tôi chưa có ví",connectorsScreen_h1:"Ví là gì?",connectorsScreen_p:"Ví dùng để gửi, nhận, và lưu trữ các tài sản điện tử. Kết nối với một ví giúp bạn tương tác với các ứng dụng.",mobileConnectorsScreen_heading:"Chọn ví",scanScreen_heading:"Scan bằng điện thoại",scanScreen_heading_withConnector:"Quét với {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:`Mở một [WALLETCONNECTLOGO] m\xe0 WalletConnect 
 hỗ trợ để qu\xe9t`,scanScreen_tooltip_default:`Mở {{ CONNECTORNAME }} trong 
điện thoại của bạn để qu\xe9t`,downloadAppScreen_heading:"Lấy {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Quét bằng camera trên điện thoại của bạn để tải về cho iOS hoặc Android.",downloadAppScreen_ios:"Quét bằng camera trên điện thoại ủa bạn để tải về cho iOS.",downloadAppScreen_android:"Quét bằng camera trên điện thoại ủa bạn để tải về cho Android.",injectionScreen_unavailable_h1:"Trình duyệt không được hỗ trợ",injectionScreen_unavailable_p:`Để kết nối v\xed {{ CONNECTORSHORTNAME }} của bạn,
c\xe0i đặt tiện \xedch tr\xean {{ SUGGESTEDEXTENSIONBROWSER }}.`,injectionScreen_install_h1:"Cài {{ CONNECTORNAME }}",injectionScreen_install_p:`Để kết nối v\xed {{ CONNECTORSHORTNAME }},
c\xe0i đặt tiện \xedch tr\xean tr\xecnh duyệt.`,injectionScreen_connecting_h1:"Đang yêu cầu kết nối",injectionScreen_connecting_p:`Mở tiện \xedch {{ CONNECTORSHORTNAME }} 
 tr\xean tr\xecnh duyệt để kết nối.`,injectionScreen_connecting_injected_h1:"Đang yêu cầu kết nối",injectionScreen_connecting_injected_p:"Đồng ý yêu cầu từ phía ví của bạn để kết nối ứng dụng này.",injectionScreen_connected_h1:"Đã kết nối",injectionScreen_connected_p:"Đã có thể đóng popup",injectionScreen_rejected_h1:"Đã hủy yêu cầu",injectionScreen_rejected_p:`Bạn vừa hủy y\xeau cầu.
Nhấn ph\xeda tr\xean để thử lại.`,injectionScreen_failed_h1:"Kết nối không thành công",injectionScreen_failed_p:`Xin lỗi, c\xf3 g\xec đ\xf3 kh\xf4ng đ\xfang.
Vui l\xf2ng thử lại.`,injectionScreen_notconnected_h1:"Đăng nhập vào {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"Để tiếp tục, vui lòng đăng nhập bằng tiện ích {{ CONNECTORNAME }}.",profileScreen_heading:"Đã kết nối",switchNetworkScreen_heading:"Đổi mạng",signInWithEthereumScreen_tooltip:"Bạn chưa đăng nhập vào ứng dụng.\n**Đăng nhập qua Ethereum** để tiếp tục.",signInWithEthereumScreen_signedOut_heading:"Đăng nhập qua Ethereum",signInWithEthereumScreen_signedOut_h1:"Ứng dụng này muốn xác nhận bạn \n là chủ sở hữu của ví.",signInWithEthereumScreen_signedOut_p:`Vui l\xf2ng k\xfd tin nhắn y\xeau cầu 
 tr\xean v\xed của bạn để tiếp tục.`,signInWithEthereumScreen_signedOut_button:"Đăng nhập",signInWithEthereumScreen_signedIn_heading:"Đăng nhập qua Ethereum",signInWithEthereumScreen_signedIn_h1:"Bạn đã xác nhận thành công.",signInWithEthereumScreen_signedIn_p:`Sau khi Đăng xuất bạn sẽ cần 
 x\xe1c nhận lại trong l\xe0n tiếp theo.`,signInWithEthereumScreen_signedIn_button:"Đăng xuất"};function t6(e){var t,n;let o=null!=(n=null==(t=ar().options)?void 0:t.language)?n:"en-US",r=(0,O.useMemo)(()=>(e=>{switch(e){case"ee-EE":return tK;case"ar-AE":return tq;case"es-ES":return tX;case"fa-IR":return t$;case"fr-FR":return t1;case"ja-JP":return t0;case"pt-BR":return t2;case"ru-RU":return t3;case"zh-CN":return t5;case"ca-AD":return t4;case"tr-TR":return t8;case"vi-VN":return t9;default:return tJ}})(o),[o]);if(!r)throw console.error(`Missing translations for: ${o}`),Error(`Missing translations for: ${o}`);let i={};return Object.keys(r).map(t=>{let n=r[t];return i[t]=t7(n,e)}),i}let t7=(e,t)=>{let n=e;return t&&Object.keys(t).forEach(e=>{n=n.replace(RegExp(`({{ ${e} }})`,"g"),t[e])}),ne(n)},ne=e=>{let t=e;return t=(t=t.split("\n")).map((e,n)=>(0,F.jsxs)(O.default.Fragment,{children:[nt(e),n<t.length-1&&(0,F.jsx)("br",{})]},n))},nt=e=>e.split(/(\*\*[^\*]*\*\*)/g).map((e,t)=>/(\*\*.*\*\*)/g.test(e)?(0,F.jsx)("strong",{children:e.replace(/\*\*/g,"")},t):`${e}`).map(e=>"string"==typeof e?e.split(/(\[WALLETCONNECTLOGO\])/g).map(e=>"[WALLETCONNECTLOGO]"===e?(0,F.jsx)("span",{className:"ck-tt-logo",children:(0,F.jsx)(em,{})},e):e):e),nn={debug:10,info:20,warn:30,error:40,none:100},no="u">typeof window&&window.document&&void 0!==window.document.createElement?O.useLayoutEffect:O.useEffect,nr=({children:e})=>{let[t,n]=O.default.useState(!1),{fontSize:o,ref:r}=(({logLevel:e="info",maxFontSize:t=100,minFontSize:n=20,onFinish:o,onStart:r,resolution:i=5}={})=>{let a=nn[e],s=(0,O.useCallback)(()=>({calcKey:0,fontSize:t,fontSizePrev:n,fontSizeMax:t,fontSizeMin:n}),[t,n]),c=(0,O.useRef)(null),l=(0,O.useRef)(),d=(0,O.useRef)(!1),[u,p]=(0,O.useState)(s),{calcKey:h,fontSize:g,fontSizeMax:f,fontSizeMin:b,fontSizePrev:x}=u,m=null,[C]=(0,O.useState)(()=>new eu(()=>{m=window.requestAnimationFrame(()=>{d.current||(r&&r(),d.current=!0,p({...s(),calcKey:h+1}))})}));(0,O.useEffect)(()=>(c.current&&C.observe(c.current),()=>{m&&window.cancelAnimationFrame(m),C.disconnect()}),[m,C]);let v=c.current&&c.current.innerHTML;return(0,O.useEffect)(()=>{0===h||d.current||(v!==l.current&&(r&&r(),p({...s(),calcKey:h+1})),l.current=v)},[h,s,v,r]),no(()=>{let e;if(0===h)return;let t=Math.abs(g-x)<=i,r=!!c.current&&(c.current.scrollHeight>c.current.offsetHeight||c.current.scrollWidth>c.current.offsetWidth),s=r&&g===x,l=g>x;if(t)return void(s?(d.current=!1,a<=nn.info&&console.info(`[use-fit-text] reached \`minFontSize = ${n}\` without fitting text`)):r?p({fontSize:l?x:b,fontSizeMax:f,fontSizeMin:b,fontSizePrev:x,calcKey:h}):(d.current=!1,o&&o(g)));let u=f,m=b;r?(e=l?x-g:b-g,u=Math.min(f,g)):(e=l?f-g:x-g,m=Math.max(b,g)),p({calcKey:h,fontSize:g+e/2,fontSizeMax:u,fontSizeMin:m,fontSizePrev:g})},[h,g,f,b,x,o,c,i]),{fontSize:g,ref:c}})({logLevel:"none",maxFontSize:100,minFontSize:70,onStart:()=>n(!0),onFinish:()=>n(!0)});return(0,F.jsx)("div",{ref:r,style:{visibility:t?"visible":"hidden",fontSize:`${o}%`,maxHeight:"100%",maxWidth:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e})};function ni(){let e=(0,d.useConnectors)();return null!=e?e:[]}function na(e,t){let n=ni();return"injected"===e&&t?n.find(n=>n.id===e&&n.name===t):"injected"===e?n.find(t=>t.id===e&&t.name.includes("Injected")):n.find(t=>t.id===e)}function ns(){return na("familyAccountsProvider")}function nc(){return na("co.family.wallet")}nr.displayName="FitText";let nl=e=>{let t=nd().find(t=>t.id===e);return t||null},nd=()=>{let e=ni(),t=ar();return e.map(e=>{var t,n;let o=Object.keys(eR).find(t=>-1!==t.split(",").map(e=>e.trim()).indexOf(e.id)),r={id:e.id,name:null!=(n=null!=(t=e.name)?t:e.id)?n:e.type,icon:(0,F.jsx)("img",{src:e.icon,alt:e.name,width:"100%",height:"100%"}),connector:e,iconShape:"squircle",isInstalled:"mock"===e.type||"injected"===e.type&&"metaMask"!==e.id||"coinbaseWalletSDK"===e.id};if(o){let t=eR[o];return{...r,iconConnector:e.icon?(0,F.jsx)("img",{src:e.icon,alt:e.name,width:"100%",height:"100%"}):void 0,...t}}return r}).filter((e,t,n)=>n.findIndex(t=>t.id===e.id)===t).map(e=>{var n,o;return"walletConnect"===e.id?{...e,name:(null==(n=t.options)?void 0:n.walletConnectName)||e.name,shortName:(null==(o=t.options)?void 0:o.walletConnectName)||e.shortName}:e}).filter((e,t,n)=>!("coinbaseWalletSDK"===e.id&&n.find(e=>"com.coinbase.wallet"===e.id))).filter((e,t,n)=>!(("metaMaskSDK"===e.id||"metaMask"===e.id)&&n.find(e=>"io.metamask"===e.id||"io.metamask.mobile"===e.id))).sort((e,t)=>{let n=e.isInstalled&&"injected"===e.connector.type,o=t.isInstalled&&"injected"===t.connector.type;return n&&!o?-1:!n&&o?1:0}).sort((e,t)=>"walletConnect"===e.id?1:"walletConnect"===t.id?-1:0)},nu=({isSignedIn:e})=>(0,F.jsxs)("div",{style:{position:"relative"},children:[e?(0,F.jsx)(tQ,{style:{bottom:-1,right:-1}}):(0,F.jsx)("div",{style:{zIndex:2,position:"absolute",top:-2,right:-2,background:"#1A88F8",borderRadius:8,boxShadow:"0 0 0 2px var(--ck-body-background)",width:8,height:8}}),(0,F.jsxs)("svg",{"aria-hidden":"true",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{overflow:"visible"},children:[(0,F.jsx)("circle",{cx:"10",cy:"10",r:"9",stroke:"currentColor",strokeWidth:"2"}),(0,F.jsx)("path",{d:"M16.5 16.775C14.8618 15.0649 12.5552 14 10 14C7.44477 14 5.13825 15.0649 3.5 16.775",stroke:"currentColor",strokeWidth:"2"}),(0,F.jsx)("circle",{cx:"10",cy:"8",r:"3",stroke:"currentColor",strokeWidth:"2"})]})]}),np=({...e})=>(0,F.jsx)("svg",{"aria-hidden":"true",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11.6445 12.7051C11.6445 13.1348 11.3223 13.4678 10.7744 13.4678C10.2266 13.4678 9.92578 13.1885 9.92578 12.6191V12.4795C9.92578 11.4268 10.4951 10.8574 11.2686 10.3203C12.2031 9.67578 12.665 9.32129 12.665 8.59082C12.665 7.76367 12.0205 7.21582 11.043 7.21582C10.3232 7.21582 9.80762 7.57031 9.45312 8.16113C9.38282 8.24242 9.32286 8.32101 9.2667 8.39461C9.04826 8.68087 8.88747 8.8916 8.40039 8.8916C8.0459 8.8916 7.66992 8.62305 7.66992 8.15039C7.66992 7.96777 7.70215 7.7959 7.75586 7.61328C8.05664 6.625 9.27051 5.75488 11.1182 5.75488C12.9336 5.75488 14.5234 6.71094 14.5234 8.50488C14.5234 9.7832 13.7822 10.417 12.7402 11.1045C11.999 11.5986 11.6445 11.9746 11.6445 12.5762V12.7051ZM11.9131 15.5625C11.9131 16.1855 11.376 16.6797 10.7529 16.6797C10.1299 16.6797 9.59277 16.1748 9.59277 15.5625C9.59277 14.9395 10.1191 14.4453 10.7529 14.4453C11.3867 14.4453 11.9131 14.9287 11.9131 15.5625Z",fill:"currentColor"})}),nh=({...e})=>(0,F.jsx)(D.motion.svg,{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,F.jsx)("path",{d:"M1 13L13 1M1 1L13 13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),ng=({...e})=>(0,F.jsx)(D.motion.svg,{width:9,height:16,viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,F.jsx)("path",{d:"M8 1L1 8L8 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),nf={initial:{zIndex:2,opacity:0},animate:{opacity:1,scale:1,transition:{duration:.165,delay:.055,ease:[.26,.08,.25,1]}},exit:{zIndex:1,opacity:0,pointerEvents:"none",position:"absolute",left:["50%","50%"],x:["-50%","-50%"],transition:{duration:.22,ease:[.26,.08,.25,1]}}},nb=({open:e,pages:t,pageId:n,positionInside:o,inline:r,demo:i,onClose:a,onBack:c,onInfo:l})=>{var d,p,h,g,f,b,x,m,C,v,w,k;let y,A=ar(),j=tR(),S=e_(),{isSignedIn:E,reset:L}=tV(),M=nl(null==(d=A.connector)?void 0:d.id),N={name:null==M?void 0:M.name,shortName:null!=(p=null==M?void 0:M.shortName)?p:null==M?void 0:M.name,icon:null!=(h=null==M?void 0:M.iconConnector)?h:null==M?void 0:M.icon,iconShape:null!=(g=null==M?void 0:M.iconShape)?g:"circle",iconShouldShrink:null==M?void 0:M.iconShouldShrink},I=t6({CONNECTORNAME:null==N?void 0:N.name}),[B,_]=eb({timeout:160,preEnter:!0,mountOnEnter:!0,unmountOnExit:!0}),T="exited"!==B&&"unmounted"!==B,z="preEnter"===B||"exiting"!==B,W=A.route===an.CONNECTORS?0:A.route===an.DOWNLOAD?2:1,U=tB(W,W);o||tF(T),tB(n,n),(0,O.useEffect)(()=>{_(e),e&&Q(void 0)},[e]);let[H,G]=(0,O.useState)({width:void 0,height:void 0}),[P,Q]=(0,O.useState)(void 0),Z=e=>{let t={width:null==e?void 0:e.offsetWidth,height:null==e?void 0:e.offsetHeight};G({width:`${null==t?void 0:t.width}px`,height:`${null==t?void 0:t.height}px`})},V=(0,O.useCallback)(e=>{e&&(q.current=e,Q(void 0!==P),clearTimeout(y),y=setTimeout(()=>Q(!1),360),Z(e))},[e,P]),{chain:Y}=(0,s.useAccount)(),{switchChain:J}=(0,u.useSwitchChain)(),q=(0,O.useRef)(null);(0,O.useEffect)(()=>{q.current&&Z(q.current)},[Y,J,S,E,A.options,A.resize]),(0,O.useEffect)(()=>{if(!T)return void G({width:void 0,height:void 0});let e=e=>{"Escape"===e.key&&a&&a()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[T,a]);let K={"--height":H.height,"--width":H.width},X=(0,F.jsx)(e8,{$useTheme:null!=(f=null==i?void 0:i.theme)?f:j.theme,$useMode:null!=(b=null==i?void 0:i.mode)?b:j.mode,$customTheme:null!=(x=null==i?void 0:i.customTheme)?x:j.customTheme,children:(0,F.jsxs)(tk,{role:"dialog",style:{pointerEvents:z?"auto":"none",position:o?"absolute":void 0},children:[!r&&(0,F.jsx)(tp,{$active:z,onClick:a,$blur:null==(m=A.options)?void 0:m.overlayBlur}),(0,F.jsxs)(tE,{style:K,initial:!1,children:[(0,F.jsx)("div",{style:{pointerEvents:P?"all":"none",position:"absolute",top:0,bottom:0,left:"50%",transform:"translateX(-50%)",width:"var(--width)",zIndex:9,transition:"width 200ms ease"}}),(0,F.jsxs)(tx,{className:`${z&&"active"}`,children:[(0,F.jsx)(R.AnimatePresence,{initial:!1,children:(null==(C=A.options)?void 0:C.disclaimer)&&A.route===an.CONNECTORS&&(0,F.jsx)(tM,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:0,duration:.2,ease:[.25,.1,.25,1]},children:(0,F.jsx)(tL,{children:(0,F.jsx)("div",{children:null==(v=A.options)?void 0:v.disclaimer})})})}),(0,F.jsx)(R.AnimatePresence,{initial:!1,children:A.errorMessage&&(0,F.jsxs)(e6,{initial:{y:"10%",x:"-50%"},animate:{y:"-100%"},exit:{y:"100%"},transition:{duration:.2,ease:"easeInOut"},children:[(0,F.jsx)("span",{children:A.errorMessage}),(0,F.jsx)("div",{onClick:()=>A.displayError(null),style:{position:"absolute",right:24,top:24,cursor:"pointer"},children:(0,F.jsx)(nh,{})})]})}),(0,F.jsxs)(tm,{children:[a&&(0,F.jsx)(ty,{"aria-label":eD(I.close).toString(),onClick:a,children:(0,F.jsx)(nh,{})}),(0,F.jsx)("div",{style:{position:"absolute",top:23,left:20,width:32,height:32},children:(0,F.jsx)(R.AnimatePresence,{children:c?(0,F.jsx)(tj,{disabled:P,"aria-label":eD(I.back).toString(),onClick:c,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.1*!S,delay:.01*!!S},children:(0,F.jsx)(ng,{})},"backButton"):A.route===an.PROFILE&&A.signInWithEthereum?(0,F.jsxs)(F.Fragment,{children:[!E&&!(null==(w=A.options)?void 0:w.hideTooltips)&&(0,F.jsx)(D.motion.div,{style:{position:"absolute",inset:0,pointerEvents:"none"},initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1,transition:{delay:.5,duration:.2}},exit:{opacity:0,scale:.6,transition:{delay:0,duration:.1*!S}},children:(0,F.jsx)(tN,{children:I.signInWithEthereumScreen_tooltip})}),(0,F.jsx)(tA,{disabled:P,"aria-label":I.signInWithEthereumScreen_signedOut_heading,onClick:()=>{L(),A.setRoute(an.SIGNINWITHETHEREUM)},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.1*!S,delay:.01*!!S},children:(0,F.jsx)(nu,{isSignedIn:E})},"siweButton")]}):l&&!(null==(k=A.options)?void 0:k.hideQuestionMarkCTA)&&(0,F.jsx)(tS,{disabled:P,"aria-label":eD(I.moreInformation).toString(),onClick:l,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.1*!S,delay:.01*!!S},children:(0,F.jsx)(np,{})},"infoButton")})})]}),(0,F.jsx)(ts,{children:(0,F.jsx)(R.AnimatePresence,{children:(0,F.jsx)(D.motion.div,{style:{position:"absolute",top:0,bottom:0,left:52,right:52,display:"flex",justifyContent:"center"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.17*!S,delay:.01*!!S},children:(0,F.jsx)(nr,{children:function(){var e;switch(A.route){case an.ABOUT:return I.aboutScreen_heading;case an.CONNECT:if(M?!M.getWalletConnectDeeplink||M.isInstalled:1)return null==N?void 0:N.name;return"walletConnect"===(null==(e=null==M?void 0:M.connector)?void 0:e.id)?I.scanScreen_heading:I.scanScreen_heading_withConnector;case an.CONNECTORS:return I.connectorsScreen_heading;case an.MOBILECONNECTORS:return I.mobileConnectorsScreen_heading;case an.DOWNLOAD:return I.downloadAppScreen_heading;case an.ONBOARDING:return I.onboardingScreen_heading;case an.PROFILE:return I.profileScreen_heading;case an.SWITCHNETWORKS:return I.switchNetworkScreen_heading;case an.SIGNINWITHETHEREUM:return E?I.signInWithEthereumScreen_signedIn_heading:I.signInWithEthereumScreen_signedOut_heading;default:return""}}()})},`${A.route}-${E?"signedIn":""}`)})}),(0,F.jsx)(tC,{children:Object.keys(t).map(e=>{let r=t[e];return(0,F.jsx)(nx,{open:e===n,initial:!o&&"entered"!==B,enterAnim:e===n?W>U?"active-scale-up":"active":"",exitAnim:e!==n?W<U?"exit-scale-down":"exit":"",children:(0,F.jsx)(tw,{ref:V,style:{pointerEvents:e===n&&z?"auto":"none"},children:r},`inner-${e}`)},e)})})]})]})]})});return(0,F.jsx)(F.Fragment,{children:T&&(0,F.jsx)(F.Fragment,{children:o?X:(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(e9,{children:(0,F.jsx)(tO,{children:X})})})})})},nx=({children:e,open:t,initial:n,prevDepth:o,currentDepth:r,enterAnim:i,exitAnim:a})=>{let[s,c]=eb({timeout:400,preEnter:!0,initialEntered:t,mountOnEnter:!0,unmountOnExit:!0});return((0,O.useEffect)(()=>{c(t)},[t]),"exited"===s||"unmounted"===s)?null:(0,F.jsx)(tv,{className:`${"preEnter"===s||"exiting"!==s?i:a}`,style:{animationDuration:n?"0ms":void 0,animationDelay:n?"0ms":void 0},children:e})},nm=({children:e,hideHr:t})=>{let n=t6();return(0,F.jsx)(ta,{$disableHr:t,children:(0,F.jsx)("span",{children:null!=e?e:n.or})})},nC=eW(D.motion.div)`
  position: relative;
  margin: 16px auto 20px;
  height: 190px;
  max-width: 295px;
  pointer-events: none;
  user-select: none;
  @media only screen and (max-width: ${560}px) {
    height: 200px;
    max-width: 100%;
    margin-bottom: 32px;
  }
`,nv=eW(D.motion.div)`
  position: absolute;
  inset: 0;
  z-index: 2;
`,nw=z.keyframes`
  0%{
    opacity:0;
    transform:scale(0.9);
  }
  100%{
    opacity:1;
    transform:none;
  }
`,nk=eW(D.motion.div)`
  z-index: 1;
  position: absolute;
  inset: 0;
  top: -2px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--ck-body-background);
    background: radial-gradient(
      closest-side,
      var(--ck-body-background-transparent, transparent) 18.75%,
      var(--ck-body-background) 100%
    );
    background-size: 100%;
  }
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  animation: ${nw} 1000ms 100ms ease both;
  @media only screen and (max-width: ${560}px) {
    animation: none;
  }
`,ny=z.keyframes`
  0%{
    opacity:0;
    transform:scale(0) translateY(40%);
  }
  100%{
    opacity:1;
    transform:none;
  }
`,nA=eW(D.motion.div)`
  position: absolute;
  inset: 0;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-delay: inherit;
`,nj=eW(D.motion.div)`
  position: absolute;
`,nS=eW(D.motion.div)`
  position: relative;
  overflow: hidden;
  height: 58px;
  width: 58px;
  border-radius: 13.84px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 20px 0 rgba(0, 0, 0, 0.03);

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,nE=z.keyframes`
  0%,100%{ transform:none; }
  50%{ transform: translateY(-10%) }
`,nL=eW(D.motion.div)`
  position: relative;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-name: ${nE};
  animation-duration: 3600ms;
`,nM=z.keyframes`
  0%,100%{ transform:rotate(-3deg); }
  50%{ transform:rotate(3deg); }
`,nN=eW(D.motion.div)`
  position: relative;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-name: ${nM};
  animation-duration: 3200ms;
`,nI=eW(D.motion.div)`
  position: absolute;
  inset: 0;

  animation: ${ny} 750ms cubic-bezier(0.19, 1, 0.22, 1) both;
  &:nth-child(1){ z-index:2; animation-delay:0ms;  }
  &:nth-child(2){ z-index:1; animation-delay:60ms; }
  &:nth-child(3){ z-index:1; animation-delay:30ms; }
  &:nth-child(4){ z-index:1; animation-delay:90ms; }
  &:nth-child(5){ z-index:1; animation-delay:120ms;}

  &:nth-child(1){ ${nN}{ animation-delay:0ms; } }
  &:nth-child(2){ ${nN}{ animation-delay:-600ms; } }
  &:nth-child(3){ ${nN}{ animation-delay:-1200ms; } }
  &:nth-child(4){ ${nN}{ animation-delay:-1800ms; } }
  &:nth-child(5){ ${nN}{ animation-delay:-2400ms; } }

  &:nth-child(1){ ${nL}{ animation-delay:-200ms; } }
  &:nth-child(2){ ${nL}{ animation-delay:-600ms; } }
  &:nth-child(3){ ${nL}{ animation-delay:-800ms; } }
  &:nth-child(4){ ${nL}{ animation-delay:-300ms; } }
  &:nth-child(5){ ${nL}{ animation-delay:-3200ms; } }

  @media only screen and (max-width: ${560}px) {
    animation: none !important;
    ${nN},${nL} {
      animation: none !important;
    }
  }

  ${nj} {
    transform: translate(-50%, -50%);
  }

  &:nth-child(1) ${nA} {
    transform: translate(50%, 50%);
    ${nS} {
      border-radius: 17.2px;
      width: 72px;
      height: 72px;
    }
  }
  &:nth-child(2) ${nA} {
    transform: translate(21%, 21.5%);
  }
  &:nth-child(3) ${nA} {
    transform: translate(78%, 14%);
  }
  &:nth-child(4) ${nA} {
    transform: translate(22.5%, 76%);
  }
  &:nth-child(5) ${nA} {
    transform: translate(76%, 80%);
  }
`;var nF=(0,F.jsxs)("svg",{"aria-hidden":"true",width:"298",height:"188",viewBox:"0 0 298 188",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("path",{d:"M1 55.2757L21.6438 46.0285C55.5896 30.8228 94.4104 30.8228 128.356 46.0286L169.644 64.5229C203.59 79.7287 242.41 79.7286 276.356 64.5229L297 55.2757M1 44.2118L21.6438 34.9646C55.5896 19.7589 94.4104 19.7589 128.356 34.9646L169.644 53.459C203.59 68.6647 242.41 68.6647 276.356 53.459L297 44.2118M1 33.1477L21.6438 23.9005C55.5896 8.69479 94.4104 8.69479 128.356 23.9005L169.644 42.3949C203.59 57.6006 242.41 57.6006 276.356 42.3949L297 33.1477M1 22.1477L21.6438 12.9005C55.5896 -2.30521 94.4104 -2.30521 128.356 12.9005L169.644 31.3949C203.59 46.6006 242.41 46.6006 276.356 31.3949L297 22.1477M1 66.3398L21.6438 57.0926C55.5896 41.8869 94.4104 41.8869 128.356 57.0926L169.644 75.587C203.59 90.7927 242.41 90.7927 276.356 75.587L297 66.3398M1 77.404L21.6438 68.1568C55.5896 52.9511 94.4104 52.9511 128.356 68.1569L169.644 86.6512C203.59 101.857 242.41 101.857 276.356 86.6512L297 77.404M1 88.4681L21.6438 79.2209C55.5896 64.0152 94.4104 64.0152 128.356 79.2209L169.644 97.7153C203.59 112.921 242.41 112.921 276.356 97.7153L297 88.4681M1 121.66L21.6438 112.413C55.5896 97.2075 94.4104 97.2075 128.356 112.413L169.644 130.908C203.59 146.113 242.41 146.113 276.356 130.908L297 121.66M1 110.596L21.6438 101.349C55.5896 86.1433 94.4104 86.1433 128.356 101.349L169.644 119.843C203.59 135.049 242.41 135.049 276.356 119.843L297 110.596M1 99.5321L21.6438 90.2849C55.5896 75.0792 94.4104 75.0792 128.356 90.2849L169.644 108.779C203.59 123.985 242.41 123.985 276.356 108.779L297 99.5321M1 132.724L21.6438 123.477C55.5896 108.271 94.4104 108.271 128.356 123.477L169.644 141.971C203.59 157.177 242.41 157.177 276.356 141.971L297 132.724M1 143.788L21.6438 134.541C55.5896 119.336 94.4104 119.336 128.356 134.541L169.644 153.036C203.59 168.241 242.41 168.241 276.356 153.036L297 143.788M1 154.853L21.6438 145.605C55.5896 130.4 94.4104 130.4 128.356 145.605L169.644 164.1C203.59 179.305 242.41 179.305 276.356 164.1L297 154.853M1 165.853L21.6438 156.605C55.5896 141.4 94.4104 141.4 128.356 156.605L169.644 175.1C203.59 190.305 242.41 190.305 276.356 175.1L297 165.853",stroke:"url(#paint0_linear_1094_2077)",strokeOpacity:"0.9",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("defs",{children:(0,F.jsxs)("linearGradient",{id:"paint0_linear_1094_2077",x1:"1",y1:"112.587",x2:"297.034",y2:"79.6111",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-01)"}),(0,F.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-02)",offset:"0.239583"}),(0,F.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-03)",offset:"0.515625"}),(0,F.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-04)",offset:"0.739583"}),(0,F.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-05)",offset:"1"})]})})]});let nO=eW(D.motion.div)`
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,nB=eW.svg`
  --x: -3px;
  --stroke-width: 2;
  position: relative;
  top: 1px;
  left: -0.5px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 9px;
  margin-right: 1px;
  transition: all 100ms ease;
  transform: translateX(var(--x, -3px));
  color: currentColor;
  opacity: 0.4;
`,n_=eW.path``,nD=eW.line`
  transition: inherit;
  transition-property: transform;
  transform-origin: 90% 50%;
  transform: scaleX(0.1);
`,nR=eW.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-right: 6px;
  color: currentColor;
`,nT=eW.div`
  transform: rotate(90deg);
  ${nB} {
    margin: 0 auto;
  }
`,nz=eW(D.motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  height: 100%;
`,nW=eW.button`

  ${({disabled:e})=>e&&z.css`
      cursor: not-allowed;
      pointer-events: none;
      ${nU} {
        opacity: 0.4;
      }
    `}

  ${({$variant:e})=>"primary"===e?z.css`
        --color: var(--ck-primary-button-color, var(--ck-body-color));
        --background: var(
          --ck-primary-button-background,
          var(--ck-body-background-primary)
        );
        --box-shadow: var(--ck-primary-button-box-shadow);
        --border-radius: var(--ck-primary-button-border-radius);
        --font-weight: var(--ck-primary-button-font-weight, 500);

        --hover-color: var(--ck-button-primary-hover-color, var(--color));
        --hover-background: var(
          --ck-primary-button-hover-background,
          var(--background)
        );
        --hover-box-shadow: var(
          --ck-primary-button-hover-box-shadow,
          var(--box-shadow)
        );
        --hover-border-radius: var(
          --ck-primary-button-hover-border-radius,
          var(--border-radius)
        );
        --hover-font-weight: var(
          --ck-primary-button-font-weight,
          var(--font-weight)
        );
      `:"secondary"===e?z.css`
        --color: var(--ck-secondary-button-color, var(--ck-body-color));
        --background: var(
          --ck-secondary-button-background,
          var(--ck-body-background-secondary)
        );
        --box-shadow: var(--ck-secondary-button-box-shadow);
        --border-radius: var(--ck-secondary-button-border-radius);
        --font-weight: var(--ck-secondary-button-font-weight, 500);

        --hover-color: var(--ck-secondary-button-hover-color, var(--color));
        --hover-background: var(
          --ck-secondary-button-hover-background,
          var(--background)
        );
        --hover-box-shadow: var(
          --ck-secondary-button-hover-box-shadow,
          var(--box-shadow)
        );
        --hover-border-radius: var(
          --ck-secondary-button-hover-border-radius,
          var(--border-radius)
        );
        --hover-font-weight: var(
          --ck-secondary-button-font-weight,
          var(--font-weight)
        );
      `:"tertiary"===e?z.css`
        --color: var(
          --ck-tertiary-button-color,
          var(--ck-secondary-button-color)
        );
        --background: var(
          --ck-tertiary-button-background,
          var(--ck-secondary-button-background)
        );
        --box-shadow: var(
          --ck-tertiary-button-box-shadow,
          var(--ck-secondary-button-box-shadow)
        );
        --border-radius: var(
          --ck-tertiary-button-border-radius,
          var(--ck-secondary-button-border-radius)
        );
        --font-weight: var(
          --ck-tertiary-button-font-weight,
          var(--ck-secondary-button-font-weight)
        );

        --hover-color: var(
          --button-tertiary-hover-color,
          var(--ck-tertiary-button-color)
        );
        --hover-background: var(
          --ck-tertiary-button-hover-background,
          var(--ck-tertiary-button-background)
        );
        --hover-box-shadow: var(
          --ck-tertiary-button-hover-box-shadow,
          var(--ck-tertiary-button-box-shadow)
        );
        --hover-border-radius: var(
          --ck-tertiary-button-hover-border-radius,
          var(--ck-tertiary-button-border-radius, var(--border-radius))
        );
        --hover-font-weight: var(
          --ck-tertiary-button-font-weight,
          var(--ck-secondary-button-font-weight)
        );
      `:void 0}

  appearance: none;
  cursor: pointer;
  user-select: none;
  min-width: fit-content;
  width: 100%;
  display:block;
  text-align: center;
  height: 48px;
  margin: 12px 0 0;
  line-height: 48px;
  padding: 0 4px;
  font-size: 16px;
  font-weight: var(--font-weight,500);
  text-decoration: none;
  white-space: nowrap;
  transition: 100ms ease;
  transition-property: box-shadow, background-color;
  color: var(--color);
  background: var(--background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  will-change: transform, box-shadow, background-color, color;

  ${nR} {
    ${nB} {
      transform: translateX(0);
      ${nD} {
        transform: none;
      }
      ${n_} {
      }
    }
  }
}

  @media only screen and (min-width: ${561}px) {
    &:hover,
    &:focus-visible {
      color: var(--ck-accent-text-color, var(--hover-color));
      background: var(--ck-accent-color, var(--hover-background));
      border-radius: var(--hover-border-radius);
      box-shadow: var(--hover-box-shadow);

      ${nB} {
        transform: translateX(0);
        ${nD} {
          transform: none;
        }
        ${n_} {
        }
      }
      ${nR} {
        ${nB} {
          transform: translateX(var(--x));
          ${nD} {
            transform: scaleX(0.1);
          }
          ${n_} {
          }
        }
      }
    }
    &:active {
      box-shadow: var(--ck-secondary-button-active-box-shadow, var(--hover-box-shadow));
    }
  }
  @media only screen and (max-width: ${560}px) {
    transition: transform 100ms ease;
    transform: scale(1);
    font-size: 17px;
    &:active {
    }
  }
`,nU=eW.div`
  transform: translateZ(0); // Shifting fix
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: calc(100% - 42px);
  transition: opacity 300ms ease;
  /*
  overflow: hidden;
  text-overflow: ellipsis;
  */
`,nH=eW(D.motion.div)`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 20px;
  max-height: 20px;
  margin: 0 10px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  ${e=>e.$rounded&&z.css`
        overflow: hidden;
        border-radius: 5px;
      `}
  svg {
    display: block;
    position: relative;
    max-width: 100%;
    height: auto;
  }
`,nG=z.keyframes`
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
`,nP=eW(D.motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${nG} 1s linear infinite;
  svg {
    display: block;
    position: relative;
    animation: ${nG} 1s ease-in-out infinite;
  }
`,nQ={duration:.4,ease:[.175,.885,.32,.98]},nZ=()=>(0,F.jsx)(nP,{initial:{opacity:0,rotate:180},animate:{opacity:1,rotate:0},exit:{position:"absolute",opacity:0,rotate:-180,transition:{...nQ}},transition:{...nQ,delay:.2},children:(0,F.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("circle",{cx:"9",cy:"9",r:"7",stroke:"currentColor",strokeOpacity:"0.1",strokeWidth:"2.5"}),(0,F.jsx)("path",{d:"M16 9C16 5.13401 12.866 2 9 2",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"})]})}),nV={duration:.4,ease:[.175,.885,.32,.98]},nY=({children:e,variant:t="secondary",disabled:n,icon:o,iconPosition:r="left",roundedIcon:i,waiting:a,arrow:s,download:c,href:l,style:d,onClick:u})=>{let p="string"==typeof e?e:eD(e).join(""),h=l&&("string"==typeof l?l:eD(l).join(""));return(0,F.jsx)(nW,{as:l?"a":void 0,onClick:e=>{!n&&u&&u(e)},href:h,target:l&&"_blank",rel:l&&"noopener noreferrer",disabled:n,$variant:t,style:d,children:(0,F.jsxs)(R.AnimatePresence,{initial:!1,children:[(0,F.jsxs)(nz,{initial:{opacity:0,y:-10},animate:{opacity:1,y:-1},exit:{position:"absolute",opacity:0,y:10,transition:{...nV}},transition:{...nV,delay:.2},children:[o&&"left"===r&&(0,F.jsx)(nH,{$rounded:i,children:o}),c&&(0,F.jsx)(nR,{children:(0,F.jsx)(nT,{children:(0,F.jsxs)(nB,{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)(nD,{stroke:"currentColor",x1:"1",y1:"6",x2:"12",y2:"6",strokeWidth:"var(--stroke-width)",strokeLinecap:"round"}),(0,F.jsx)(n_,{stroke:"currentColor",d:"M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314",strokeWidth:"var(--stroke-width)",strokeLinecap:"round"})]})})}),(0,F.jsx)(nU,{style:{paddingLeft:6*!!s},children:(0,F.jsx)(nr,{children:e})}),o&&"right"===r&&(0,F.jsx)(nH,{$rounded:i,children:o}),s&&(0,F.jsxs)(nB,{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)(nD,{stroke:"currentColor",x1:"1",y1:"6",x2:"12",y2:"6",strokeWidth:"2",strokeLinecap:"round"}),(0,F.jsx)(n_,{stroke:"currentColor",d:"M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314",strokeWidth:"2",strokeLinecap:"round"})]})]},p),a&&(0,F.jsx)(nO,{children:(0,F.jsx)(nZ,{})})]})})},nJ=()=>{var e,t;let n=ar(),o=t6({}),r=null!=(t=null==(e=n.options)?void 0:e.walletOnboardingUrl)?t:o.onboardingScreen_ctaUrl;return(0,F.jsxs)(ti,{children:[(0,F.jsxs)(nC,{children:[(0,F.jsxs)(nv,{children:[(0,F.jsx)(nI,{children:(0,F.jsx)(nA,{children:(0,F.jsx)(nj,{children:(0,F.jsx)(nL,{children:(0,F.jsx)(nN,{children:(0,F.jsx)(nS,{children:(0,F.jsx)(eS,{background:!0})})})})})})}),(0,F.jsx)(nI,{children:(0,F.jsx)(nA,{children:(0,F.jsx)(nj,{children:(0,F.jsx)(nL,{children:(0,F.jsx)(nN,{children:(0,F.jsx)(nS,{children:(0,F.jsx)(ej,{background:!0})})})})})})}),(0,F.jsx)(nI,{children:(0,F.jsx)(nA,{children:(0,F.jsx)(nj,{children:(0,F.jsx)(nL,{children:(0,F.jsx)(nN,{children:(0,F.jsx)(nS,{children:(0,F.jsx)(eC,{})})})})})})}),(0,F.jsx)(nI,{children:(0,F.jsx)(nA,{children:(0,F.jsx)(nj,{children:(0,F.jsx)(nL,{children:(0,F.jsx)(nN,{children:(0,F.jsx)(nS,{children:(0,F.jsx)(ev,{})})})})})})}),(0,F.jsx)(nI,{children:(0,F.jsx)(nA,{children:(0,F.jsx)(nj,{children:(0,F.jsx)(nL,{children:(0,F.jsx)(nN,{children:(0,F.jsx)(nS,{children:(0,F.jsx)(ew,{})})})})})})})]}),(0,F.jsx)(nk,{children:nF})]}),(0,F.jsxs)(tl,{style:{paddingBottom:18},children:[(0,F.jsx)(td,{$small:!0,children:o.onboardingScreen_h1}),(0,F.jsx)(tu,{children:o.onboardingScreen_p})]}),(0,F.jsx)(nY,{href:r,arrow:!0,children:o.onboardingScreen_ctaText})]})},nq=eW.div`
  pointer-events: none;
  user-select: none;
  height: ${208}px;
  padding: 0 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
  }
  @media only screen and (max-width: ${560}px) {
    display: none;
  }
`,nK=eW(D.motion.div)``,nX=eW.div`
  pointer-events: none;
  user-select: none;
  height: ${208}px;
  padding: 0 0 12px;
  display: none;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
  }
  @media only screen and (max-width: ${560}px) {
    display: flex;
  }
`,n$=eW.div`
  position: relative;
`,n1=eW(D.motion.div)`
  scroll-snap-type: x mandatory;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 4px 8px;
  /* will-change: transform, opacity; */
  transition: 400ms 50ms cubic-bezier(0.16, 1, 0.3, 1);
  transition-property: transform, opacity;
  ${e=>!e.$active&&z.css`
      pointer-events: none;
      position: absolute;
      opacity: 0;
      transform: scale(0.95);
      transition-duration: 300ms;
      transition-delay: 0ms;
    `}
`,n0=eW.div`
  --background: var(--ck-body-background-secondary);
  --background-transparent: var(--ck-body-background-transparent, transparent);
  position: relative;
  padding: 0 0 4px;
  border-radius: 16px;
  @media only screen and (max-width: ${560}px) {
    margin: 0 -24px;
    ${n$} {
      position: relative;
      z-index: 3;
      display: flex;
      overflow: auto;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      margin-top: -${208}px;
      padding-top: ${208}px;
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
    }
    ${n1} {
      position: relative;
      opacity: 1;
      transform: none;
      flex-shrink: 0;
      scroll-snap-align: start;
    }
  }
`,n2=eW.div`
  position: relative;
  top: -1px;
  display: flex;
  justify-content: center;
  pointer-events: auto;
`,n3=eW.button`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 2px;
  background: none;
  @media only screen and (max-width: ${560}px) {
    padding: 4px;
    &:before {
      transform: none !important;
    }
  }
  &:before {
    content: '';
    display: block;
    width: 16px;
    height: 3px;
    opacity: 0.12;
    border-radius: 4px;
    background: var(--ck-accent-color, var(--ck-body-color));
    transition: transform 200ms ease, opacity 180ms ease;
  }
  ${e=>e.$active?z.css`
          cursor: default;
          &:before {
            opacity: 1;
          }
        `:!e.disabled&&z.css`
          cursor: pointer;
          &:hover:before {
            transform: scaleY(3.5);
          }
          &:active:before {
          }
        `}
`,n5={scale:[.9,1.25,1.6],opacity:[0,.11,0]},n4={ease:"linear",duration:2,repeat:1/0},n8=eW.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
`,n9=z.keyframes`
  from{ transform: rotate(0deg); }
  to{ transform: rotate(360deg); }
`,n6=eW(D.motion.div)`
  z-index: -1;
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 100%;
  animation: ${n9} 16s linear infinite;
`,n7=eW(D.motion.div)`
  overflow: hidden;
  border-radius: inherit;
  z-index: 0;
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
`,oe=eW(D.motion.div)`
  z-index: 2;
  position: relative;
  border-radius: 50%;
  background: var(--ck-body-background);
`,ot=eW(D.motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`,on=(0,F.jsxs)("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("path",{d:"M17 34C26.3 34 34 26.2833 34 17C34 7.7 26.2833 0 16.9833 0C7.7 0 0 7.7 0 17C0 26.2833 7.71667 34 17 34ZM9.83333 25.6833C8.68333 26.2333 7.8 25.3333 8.33333 24.2L13.1667 14.3333C13.45 13.75 13.8167 13.3833 14.35 13.1333L24.1833 8.33333C25.4 7.75 26.25 8.65 25.6833 9.81667L20.8833 19.6667C20.6167 20.2 20.2333 20.6 19.6833 20.85L9.83333 25.6833ZM17.0167 19.1333C18.1833 19.1333 19.1333 18.1833 19.1333 17.0167C19.1333 15.85 18.1833 14.9167 17.0167 14.9167C15.8667 14.9167 14.9167 15.85 14.9167 17.0167C14.9167 18.1833 15.8667 19.1333 17.0167 19.1333Z",fill:"var(--ck-graphic-compass-color, var(--ck-body-color))"}),(0,F.jsx)("path",{d:"M17 34C26.3 34 34 26.2833 34 17C34 7.7 26.2833 0 16.9833 0C7.7 0 0 7.7 0 17C0 26.2833 7.71667 34 17 34ZM9.83333 25.6833C8.68333 26.2333 7.8 25.3333 8.33333 24.2L13.1667 14.3333C13.45 13.75 13.8167 13.3833 14.35 13.1333L24.1833 8.33333C25.4 7.75 26.25 8.65 25.6833 9.81667L20.8833 19.6667C20.6167 20.2 20.2333 20.6 19.6833 20.85L9.83333 25.6833ZM17.0167 19.1333C18.1833 19.1333 19.1333 18.1833 19.1333 17.0167C19.1333 15.85 18.1833 14.9167 17.0167 14.9167C15.8667 14.9167 14.9167 15.85 14.9167 17.0167C14.9167 18.1833 15.8667 19.1333 17.0167 19.1333Z",fill:"url(#ck-compass-gradient)"}),(0,F.jsx)("defs",{children:(0,F.jsxs)("linearGradient",{id:"ck-compass-gradient",x1:"17",y1:"0",x2:"17",y2:"34",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"rgba(0,0,0,0)"}),(0,F.jsx)("stop",{offset:"1",stopColor:"rgba(0,0,0,0.05)"})]})})]}),oo=({inverted:e=!1})=>(0,F.jsxs)("svg",{width:"58",height:"50",viewBox:"0 0 58 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M57.9332 20.3335V42.1113C57.9332 46.4069 54.451 49.8891 50.1555 49.8891H8.15546C3.85991 49.8891 0.377686 46.4069 0.377686 42.1113V25.0002V7.8891C0.377686 3.59355 3.85991 0.111328 8.15546 0.111328H47.0444C48.7626 0.111328 50.1555 1.50422 50.1555 3.22244C50.1555 4.94066 48.7626 6.33355 47.0443 6.33355H9.71102C7.9928 6.33355 6.59991 7.72644 6.59991 9.44466C6.59991 11.1629 7.9928 12.5558 9.71102 12.5558H50.1555C54.451 12.5558 57.9332 16.038 57.9332 20.3335ZM46.2667 34.3337C48.4145 34.3337 50.1556 32.5926 50.1556 30.4448C50.1556 28.297 48.4145 26.5559 46.2667 26.5559C44.1189 26.5559 42.3778 28.297 42.3778 30.4448C42.3778 32.5926 44.1189 34.3337 46.2667 34.3337Z",fill:e?"var(--ck-graphic-primary-color, var(--ck-body-background))":"var(--ck-graphic-primary-color, var(--ck-body-color))"}),(0,F.jsx)("defs",{children:(0,F.jsxs)("linearGradient",{id:"paint0_linear_2501_7732",x1:"29.1555",y1:"0.111328",x2:"29.1555",y2:"49.8891",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:e?"var(--ck-body-color-muted)":"var(--ck-body-background-transparent, transparent)"}),(0,F.jsx)("stop",{offset:"1",stopColor:e?"var(--ck-body-color)":"var(--ck-body-background)"})]})})]}),or=(0,F.jsx)("svg",{width:"41",height:"41",viewBox:"0 0 41 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,F.jsx)("path",{d:"M35.4446 0.839914L2.14484 10.7065C0.0395033 11.3303 -0.632966 13.9786 0.919705 15.5313L7.9624 22.574C9.47585 24.0874 11.8661 24.273 13.5951 23.0114L25.2866 14.4797C25.5558 14.2832 25.9281 14.3121 26.1638 14.5478C26.3998 14.7838 26.4285 15.1567 26.2313 15.426L17.6874 27.0937C16.4213 28.8228 16.6052 31.2168 18.1206 32.7322L25.1811 39.7926C26.7337 41.3453 29.382 40.6728 30.0058 38.5675L39.8724 5.2677C40.6753 2.55794 38.1544 0.037024 35.4446 0.839914Z",fill:"var(--ck-graphic-secondary-color, white)"})}),oi=(0,F.jsx)("svg",{width:"38",height:"44",viewBox:"0 0 38 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 0.875C21.4853 0.875 23.5 2.88972 23.5 5.375V27.761L30.068 21.193C31.8254 19.4357 34.6746 19.4357 36.432 21.193C38.1893 22.9504 38.1893 25.7996 36.432 27.557L22.182 41.807C20.4246 43.5643 17.5754 43.5643 15.818 41.807L1.56802 27.557C-0.18934 25.7996 -0.18934 22.9504 1.56802 21.193C3.32538 19.4357 6.17462 19.4357 7.93198 21.193L14.5 27.761V5.375C14.5 2.88972 16.5147 0.875 19 0.875Z",fill:"var(--ck-graphic-secondary-color, white)"})}),oa=({...e})=>{var t;let n=null!=(t=null==e?void 0:e.id)?t:"";return(0,F.jsxs)("svg",{...e,width:"81",height:"81",viewBox:"0 0 81 81",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27ZM60.75 25.875C63.8566 25.875 66.375 23.3566 66.375 20.25C66.375 17.1434 63.8566 14.625 60.75 14.625C57.6434 14.625 55.125 17.1434 55.125 20.25C55.125 23.3566 57.6434 25.875 60.75 25.875Z",fill:`url(#${n}paint0_linear_2509_6177)`}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27ZM60.75 25.875C63.8566 25.875 66.375 23.3566 66.375 20.25C66.375 17.1434 63.8566 14.625 60.75 14.625C57.6434 14.625 55.125 17.1434 55.125 20.25C55.125 23.3566 57.6434 25.875 60.75 25.875Z",fill:`url(#${n}paint1_radial_2509_6177)`,fillOpacity:"0.2"}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.5658 51.2522C45.1527 50.6653 46.0151 50.4492 46.8095 50.6899C49.0823 51.3788 51.4958 51.75 54 51.75C67.6691 51.75 78.75 40.669 78.75 27C78.75 13.331 67.6691 2.25 54 2.25C40.331 2.25 29.25 13.331 29.25 27C29.25 29.5042 29.6212 31.9177 30.3101 34.1905C30.5508 34.9849 30.3347 35.8473 29.7478 36.4342L2.90901 63.273C2.48705 63.6949 2.25 64.2672 2.25 64.864V76.5C2.25 77.7426 3.25736 78.75 4.5 78.75H15.75V72C15.75 70.7574 16.7574 69.75 18 69.75H24.75V63C24.75 61.7574 25.7574 60.75 27 60.75H35.068L44.5658 51.2522ZM36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63ZM68.625 20.25C68.625 24.5992 65.0992 28.125 60.75 28.125C56.4008 28.125 52.875 24.5992 52.875 20.25C52.875 15.9008 56.4008 12.375 60.75 12.375C65.0992 12.375 68.625 15.9008 68.625 20.25ZM66.375 20.25C66.375 23.3566 63.8566 25.875 60.75 25.875C57.6434 25.875 55.125 23.3566 55.125 20.25C55.125 17.1434 57.6434 14.625 60.75 14.625C63.8566 14.625 66.375 17.1434 66.375 20.25Z",fill:"black",fillOpacity:"0.1"}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.4205 47.5795C33.8598 48.0188 33.8598 48.7312 33.4205 49.1705L3.0455 79.5455C2.60616 79.9848 1.89384 79.9848 1.4545 79.5455C1.01517 79.1062 1.01517 78.3938 1.4545 77.9545L31.8295 47.5795C32.2688 47.1402 32.9812 47.1402 33.4205 47.5795Z",fill:"#A5A9AD"}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("linearGradient",{id:`${n}paint0_linear_2509_6177`,x1:"72",y1:"5.625",x2:"2.25",y2:"78.75",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#D4DFE6"}),(0,F.jsx)("stop",{offset:"0.0967282",stopColor:"#C6CACD"}),(0,F.jsx)("stop",{offset:"0.526645",stopColor:"#BDBAC4"}),(0,F.jsx)("stop",{offset:"1",stopColor:"#939CA1"})]}),(0,F.jsxs)("radialGradient",{id:`${n}paint1_radial_2509_6177`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(52.875 12.375) rotate(93.2705) scale(39.4392)",children:[(0,F.jsx)("stop",{stopColor:"white"}),(0,F.jsx)("stop",{offset:"1",stopColor:"white"})]})]})]})},os=(0,F.jsxs)("svg",{width:"131",height:"14",viewBox:"0 0 131 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("path",{d:"M5.74805 13.2549C8.86816 13.2549 10.7227 10.6973 10.7227 6.63672C10.7227 2.57617 8.85059 0.0625 5.74805 0.0625C2.63672 0.0625 0.755859 2.59375 0.755859 6.64551C0.755859 10.7148 2.61914 13.2549 5.74805 13.2549ZM5.74805 11.4004C4.02539 11.4004 3.04102 9.64258 3.04102 6.63672C3.04102 3.68359 4.04297 1.91699 5.74805 1.91699C7.44434 1.91699 8.4375 3.6748 8.4375 6.64551C8.4375 9.65137 7.46191 11.4004 5.74805 11.4004Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M13.0869 13.1758C13.4561 13.1758 13.6934 13.0439 13.9658 12.6221L15.9697 9.66016H16.0137L18.0264 12.6572C18.2549 13.0088 18.4922 13.1758 18.8965 13.1758C19.4854 13.1758 19.9424 12.7891 19.9424 12.209C19.9424 11.9805 19.8633 11.7695 19.7051 11.541L17.376 8.28906L19.6963 5.16016C19.8896 4.90527 19.9688 4.68555 19.9688 4.43066C19.9688 3.88574 19.5381 3.49902 18.9229 3.49902C18.5361 3.49902 18.2988 3.6748 18.0176 4.10547L16.1191 6.95312H16.0752L14.1328 4.08789C13.8516 3.64844 13.6318 3.49902 13.2012 3.49902C12.6035 3.49902 12.1465 3.91211 12.1465 4.44824C12.1465 4.70312 12.2256 4.92285 12.3838 5.13379L14.7129 8.35059L12.3486 11.5498C12.1641 11.8135 12.0762 12.0156 12.0762 12.2705C12.0762 12.7979 12.498 13.1758 13.0869 13.1758Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M26.2441 13.2549C29.1445 13.2549 31.1924 11.7432 31.1924 9.57227C31.1924 7.9375 30.0146 6.68066 28.3184 6.3291V6.27637C29.7773 5.87207 30.7178 4.7998 30.7178 3.45508C30.7178 1.48633 28.8633 0.0625 26.2441 0.0625C23.625 0.0625 21.7617 1.49512 21.7617 3.44629C21.7617 4.80859 22.7109 5.88965 24.1699 6.27637V6.3291C22.4736 6.67188 21.3047 7.92871 21.3047 9.57227C21.3047 11.7344 23.335 13.2549 26.2441 13.2549ZM26.2441 5.55566C24.9258 5.55566 24.0029 4.78223 24.0029 3.6748C24.0029 2.55859 24.9258 1.77637 26.2441 1.77637C27.5537 1.77637 28.4854 2.5498 28.4854 3.6748C28.4854 4.78223 27.5537 5.55566 26.2441 5.55566ZM26.2441 11.5234C24.7236 11.5234 23.6514 10.6357 23.6514 9.40527C23.6514 8.1748 24.7236 7.28711 26.2441 7.28711C27.7646 7.28711 28.8369 8.16602 28.8369 9.40527C28.8369 10.6357 27.7646 11.5234 26.2441 11.5234Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M36.3164 13.1494C37.7578 13.1494 38.7598 12.4199 39.208 11.3477H39.252V12.0771C39.252 12.7891 39.7266 13.1758 40.3594 13.1758C40.9922 13.1758 41.4404 12.7803 41.4404 12.0771V1.29297C41.4404 0.554688 40.9834 0.141602 40.3418 0.141602C39.7002 0.141602 39.252 0.554688 39.252 1.29297V5.24805H39.1992C38.707 4.21973 37.6523 3.52539 36.3164 3.52539C33.9697 3.52539 32.4492 5.38867 32.4492 8.33301C32.4492 11.2949 33.9697 13.1494 36.3164 13.1494ZM36.9756 11.3564C35.5605 11.3564 34.6904 10.1963 34.6904 8.3418C34.6904 6.49609 35.5693 5.32715 36.9756 5.32715C38.3555 5.32715 39.2607 6.51367 39.2607 8.3418C39.2607 10.1875 38.3555 11.3564 36.9756 11.3564Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M44.0508 13.1494C44.6396 13.1494 44.9736 12.8594 45.1846 12.1738L46.0195 9.76562H50.7568L51.5918 12.1914C51.7939 12.8682 52.1367 13.1494 52.752 13.1494C53.4111 13.1494 53.8857 12.7188 53.8857 12.1035C53.8857 11.9014 53.8418 11.6992 53.7363 11.4092L50.0449 1.38965C49.7285 0.537109 49.2188 0.167969 48.3838 0.167969C47.5576 0.167969 47.0479 0.554688 46.7402 1.39844L43.0576 11.4092C42.9521 11.6816 42.9082 11.9277 42.9082 12.1035C42.9082 12.7451 43.3564 13.1494 44.0508 13.1494ZM46.5557 7.97266L48.3398 2.55859H48.4014L50.2031 7.97266H46.5557Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M60.1172 13.2549C62.8594 13.2549 64.8545 11.4004 64.8545 8.8252C64.8545 6.42578 63.1406 4.66797 60.6973 4.66797C58.9746 4.66797 57.709 5.54688 57.208 6.71582H57.1641V6.58398C57.208 3.66602 58.2275 1.89941 60.1436 1.89941C61.084 1.89941 61.7607 2.26855 62.3496 3.07715C62.7012 3.52539 62.9824 3.73633 63.4307 3.73633C64.0283 3.73633 64.3975 3.34082 64.3975 2.82227C64.3975 2.57617 64.3359 2.35645 64.1953 2.10156C63.5625 0.897461 62.0859 0.0537109 60.1523 0.0537109C56.9268 0.0537109 54.9932 2.57617 54.9932 6.80371C54.9932 8.24512 55.2305 9.45801 55.6963 10.4336C56.5752 12.2881 58.1396 13.2549 60.1172 13.2549ZM60.082 11.4092C58.667 11.4092 57.5508 10.293 57.5508 8.86914C57.5508 7.4541 58.6494 6.41699 60.1084 6.41699C61.5674 6.41699 62.6309 7.4541 62.6221 8.91309C62.6221 10.3018 61.4971 11.4092 60.082 11.4092Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M68.1328 8.83398C68.8447 8.83398 69.416 8.27148 69.416 7.55078C69.416 6.83008 68.8447 6.25879 68.1328 6.25879C67.4121 6.25879 66.8408 6.83008 66.8408 7.55078C66.8408 8.27148 67.4121 8.83398 68.1328 8.83398Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M73.3359 8.83398C74.0479 8.83398 74.6191 8.27148 74.6191 7.55078C74.6191 6.83008 74.0479 6.25879 73.3359 6.25879C72.6152 6.25879 72.0439 6.83008 72.0439 7.55078C72.0439 8.27148 72.6152 8.83398 73.3359 8.83398Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M78.5391 8.83398C79.251 8.83398 79.8223 8.27148 79.8223 7.55078C79.8223 6.83008 79.251 6.25879 78.5391 6.25879C77.8184 6.25879 77.2471 6.83008 77.2471 7.55078C77.2471 8.27148 77.8184 8.83398 78.5391 8.83398Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M83.7422 8.83398C84.4541 8.83398 85.0254 8.27148 85.0254 7.55078C85.0254 6.83008 84.4541 6.25879 83.7422 6.25879C83.0215 6.25879 82.4502 6.83008 82.4502 7.55078C82.4502 8.27148 83.0215 8.83398 83.7422 8.83398Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M92.2148 13.2549C94.957 13.2549 96.9521 11.4004 96.9521 8.8252C96.9521 6.42578 95.2383 4.66797 92.7949 4.66797C91.0723 4.66797 89.8066 5.54688 89.3057 6.71582H89.2617V6.58398C89.3057 3.66602 90.3252 1.89941 92.2412 1.89941C93.1816 1.89941 93.8584 2.26855 94.4473 3.07715C94.7988 3.52539 95.0801 3.73633 95.5283 3.73633C96.126 3.73633 96.4951 3.34082 96.4951 2.82227C96.4951 2.57617 96.4336 2.35645 96.293 2.10156C95.6602 0.897461 94.1836 0.0537109 92.25 0.0537109C89.0244 0.0537109 87.0908 2.57617 87.0908 6.80371C87.0908 8.24512 87.3281 9.45801 87.7939 10.4336C88.6729 12.2881 90.2373 13.2549 92.2148 13.2549ZM92.1797 11.4092C90.7646 11.4092 89.6484 10.293 89.6484 8.86914C89.6484 7.4541 90.7471 6.41699 92.2061 6.41699C93.665 6.41699 94.7285 7.4541 94.7197 8.91309C94.7197 10.3018 93.5947 11.4092 92.1797 11.4092Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M103.377 13.2549C106.497 13.2549 108.352 10.6973 108.352 6.63672C108.352 2.57617 106.479 0.0625 103.377 0.0625C100.266 0.0625 98.3848 2.59375 98.3848 6.64551C98.3848 10.7148 100.248 13.2549 103.377 13.2549ZM103.377 11.4004C101.654 11.4004 100.67 9.64258 100.67 6.63672C100.67 3.68359 101.672 1.91699 103.377 1.91699C105.073 1.91699 106.066 3.6748 106.066 6.64551C106.066 9.65137 105.091 11.4004 103.377 11.4004Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M117.167 13.1758C117.8 13.1758 118.248 12.7715 118.248 12.0596V10.5654H119.127C119.733 10.5654 120.094 10.1875 120.094 9.63379C120.094 9.08887 119.733 8.70215 119.136 8.70215H118.248V1.81152C118.248 0.756836 117.554 0.141602 116.385 0.141602C115.453 0.141602 114.899 0.52832 114.073 1.75879C112.553 3.99121 111.111 6.16211 110.224 7.75293C109.872 8.38574 109.731 8.79883 109.731 9.29102C109.731 10.0469 110.268 10.5654 111.085 10.5654H116.086V12.0596C116.086 12.7715 116.543 13.1758 117.167 13.1758ZM116.121 8.75488H111.788V8.69336C112.816 6.82129 114.073 4.92285 116.086 2.04004H116.121V8.75488Z",fill:"var(--ck-body-color)"}),(0,F.jsx)("path",{d:"M126.105 13.2549C128.918 13.2549 130.869 11.4355 130.869 8.78125C130.869 6.35547 129.138 4.6416 126.712 4.6416C125.438 4.6416 124.392 5.13379 123.855 5.9248H123.812L124.146 2.17188H129.27C129.85 2.17188 130.228 1.80273 130.228 1.24023C130.228 0.686523 129.85 0.317383 129.27 0.317383H123.803C122.81 0.317383 122.3 0.72168 122.221 1.72363L121.816 6.51367C121.808 6.56641 121.808 6.60156 121.808 6.6543C121.79 7.26953 122.15 7.78809 122.88 7.78809C123.398 7.78809 123.618 7.67383 124.146 7.14648C124.629 6.67188 125.323 6.34668 126.123 6.34668C127.617 6.34668 128.681 7.38379 128.681 8.84277C128.681 10.3457 127.617 11.4092 126.114 11.4092C124.893 11.4092 124.049 10.8027 123.618 9.77441C123.381 9.30859 123.091 9.12402 122.616 9.12402C122.019 9.12402 121.641 9.49316 121.641 10.082C121.641 10.4072 121.72 10.6709 121.843 10.9434C122.467 12.3232 124.154 13.2549 126.105 13.2549Z",fill:"var(--ck-body-color)"})]}),oc=({layoutId:e})=>(0,F.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,F.jsx)(D.motion.div,{initial:{rotate:90,scale:.2,x:"100%"},animate:{rotate:0,scale:1,x:0},exit:{rotate:40,scale:.1,x:"70%"},style:{zIndex:4,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:76,height:76,background:"var(--ck-graphic-secondary-background, #6366F1)",borderRadius:"50%",boxShadow:"var(--ck-graphic-secondary-box-shadow, 0px 2px 10px rgba(99, 102, 241, 0.3))"},children:oi}),(0,F.jsx)(oe,{layoutId:e,style:{position:"relative",zIndex:10,margin:"0 -8px",width:112,height:112},children:(0,F.jsxs)(ot,{style:{background:"var(--ck-graphic-primary-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-primary-box-shadow, 0px 3px 15px rgba(0, 0, 0, 0.1))"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,F.jsx)(n7,{}),(0,F.jsx)(D.motion.div,{style:{zIndex:2,position:"relative"},children:(0,F.jsx)(oo,{})})]},"SlideOneInner")},e),(0,F.jsx)(D.motion.div,{initial:{rotate:-90,scale:.2,x:"-100%"},animate:{rotate:0,scale:1,x:0},exit:{rotate:-40,scale:.1,x:"-70%"},style:{zIndex:4,position:"relative",width:76,height:76,background:"var(--ck-graphic-secondary-background, #3897FB)",borderRadius:"50%",boxShadow:"var(--ck-graphic-secondary-box-shadow, 0px 2px 10px rgba(56, 151, 251, 0.3))"},children:(0,F.jsx)(n8,{children:(0,F.jsx)("div",{style:{position:"relative",left:-2,top:3},children:or})})})]}),ol=({layoutId:e})=>(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)("div",{style:{position:"relative",left:-14},children:[(0,F.jsx)(oe,{layoutId:e,style:{zIndex:10,position:"absolute",left:15,top:12,width:32,height:32},children:(0,F.jsx)(ot,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{background:"var(--ck-graphic-primary-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-primary-box-shadow, 0px 2px 5px rgba(37, 41, 46, 0.16))"},children:(0,F.jsx)(n8,{children:(0,F.jsx)(oo,{})})},"SlideTwoInner")},e),(0,F.jsxs)(D.motion.div,{initial:{scale:.2},animate:{scale:1},exit:{scale:.2},style:{zIndex:7,position:"relative",display:"flex",alignItems:"center",padding:"21px 56px",paddingRight:52,background:"var(--ck-graphic-primary-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-primary-box-shadow, 0px 2px 9px rgba(0, 0, 0, 0.07))",borderRadius:"var(--ck-border-radius, 16px)"},children:[(0,F.jsx)(n7,{}),(0,F.jsx)("div",{style:{position:"relative",zIndex:2,top:1,left:1},children:os})]}),(0,F.jsx)(D.motion.div,{style:{zIndex:8,position:"absolute",top:-16,right:-28},initial:{rotate:90,x:-70,scale:.4},animate:{rotate:0,x:0,scale:1},exit:{rotate:0,x:-70,scale:.4},children:(0,F.jsx)(oa,{id:e})})]})}),od=({layoutId:e})=>{let t=Math.random();return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(D.motion.div,{style:{position:"relative"},children:[(0,F.jsxs)(oe,{layoutId:e,initial:{rotate:80},style:{zIndex:10,position:"relative",width:128,height:128},children:[(0,F.jsx)(ot,{initial:{opacity:0,rotate:100},animate:{opacity:1},exit:{opacity:0},style:{overflow:"hidden",background:`var(--ck-graphic-globe-background, radial-gradient(
              82.42% 82.42% at 50% 86.72%,
              rgba(255, 255, 255, 0.2) 0%,
              rgba(0, 0, 0, 0) 100%
            ),
            linear-gradient(180deg, #3897FB 0%, #5004F1 100%))`,boxShadow:"var(--ck-graphic-globe-box-shadow, 0px -6px 20px rgba(56, 151, 251, 0.23))"},children:(0,F.jsx)(n6,{style:e?void 0:{animationPlayState:"paused"},children:(0,F.jsxs)("svg",{width:"128",height:"128",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsxs)("g",{children:[(0,F.jsx)("circle",{cx:"30",cy:"141",r:"64",stroke:`url(#networkRadialA-${t})`,strokeWidth:"3"}),(0,F.jsx)("circle",{cx:"78.8515",cy:"131.123",r:"54.1005",transform:"rotate(-37.4016 78.8515 131.123)",stroke:`url(#networkRadialB-${t})`,strokeWidth:"3"}),(0,F.jsx)("circle",{cx:"63.6053",cy:"2.12794",r:"50.8338",transform:"rotate(134.702 63.6053 2.12794)",stroke:`url(#networkRadialC-${t})`,strokeWidth:"3"}),(0,F.jsx)("circle",{cx:"126.658",cy:"56.6577",r:"50.3433",transform:"rotate(-105 126.658 56.6577)",stroke:`url(#networkRadialD-${t})`,strokeWidth:"3"}),(0,F.jsx)("circle",{cx:"13.6619",cy:"18.9603",r:"46.0247",transform:"rotate(107.362 13.6619 18.9603)",stroke:`url(#networkRadialE-${t})`,strokeWidth:"3"})]}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("radialGradient",{id:`networkRadialA-${t}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(60.5 84) rotate(104.668) scale(77.0097)",children:[(0,F.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,F.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}),(0,F.jsxs)("radialGradient",{id:`networkRadialB-${t}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(96.1805 81.6717) rotate(97.125) scale(64.7443)",children:[(0,F.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,F.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}),(0,F.jsxs)("radialGradient",{id:`networkRadialC-${t}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(96.3816 -36.4455) rotate(114.614) scale(57.7177)",children:[(0,F.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,F.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}),(0,F.jsxs)("radialGradient",{id:`networkRadialD-${t}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(137.86 7.73234) rotate(92.3288) scale(62.743)",children:[(0,F.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,F.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}),(0,F.jsxs)("radialGradient",{id:`networkRadialE-${t}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(35.3203 -21.566) rotate(104.513) scale(54.8617)",children:[(0,F.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,F.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]})]})]})})},"SlideThreeInner"),(0,F.jsxs)(D.motion.div,{exit:{opacity:0},children:[(0,F.jsx)(D.motion.div,{initial:e?void 0:{scale:1.1},animate:e?n5:void 0,transition:{...n4},style:{position:"absolute",inset:0,borderRadius:"50%",boxShadow:"0 0 0 2px var(--ck-graphic-globe-lines, rgba(126, 112, 243, 1))"}},"pulseA"),(0,F.jsx)(D.motion.div,{initial:e?void 0:{scale:1.2,opacity:.25},animate:e?n5:void 0,transition:{...n4,delay:.5},style:{position:"absolute",inset:0,borderRadius:"50%",boxShadow:"0 0 0 2px var(--ck-graphic-globe-lines, rgba(126, 112, 243, 1))"}},"pulseB")]})]},e),(0,F.jsxs)(D.motion.div,{initial:{rotate:-20,scale:.1,y:-10,x:-10},animate:{rotate:0,scale:1,y:0,x:0},exit:{zIndex:3,scale:.2,y:-25,x:15},style:{zIndex:12,borderRadius:"50%",position:"absolute",bottom:-4,right:-4,width:54,height:54,display:"flex",alignItems:"center",justifyContent:"center",padding:13,background:"var(--ck-graphic-compass-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-compass-box-shadow, 0px 2px 9px rgba(0, 0, 0, 0.15))"},children:[(0,F.jsx)(n7,{}),(0,F.jsx)(D.motion.div,{style:{zIndex:2,position:"absolute"},initial:{rotate:-170},animate:{rotate:0},exit:{rotate:-180,transition:{duration:0}},transition:{type:"spring",stiffness:6,damping:.9,mass:.2},children:on})]})]},"SlideThree")})},ou=()=>{var e,t;let n,o=t6({}),r=ar(),i=null!=(t=null==(e=r.options)?void 0:e.ethereumOnboardingUrl)?t:o.aboutScreen_ctaUrl,[a,s]=(0,O.useState)(!0),[c,l]=(0,O.useState)(0),d=(0,O.useRef)(!1),u=(0,O.useRef)(0),p=[.16,1,.3,1];(0,O.useEffect)(()=>()=>clearInterval(n),[]);let h=()=>{if(!x.current)return;let{offsetWidth:e,scrollLeft:t}=x.current,n=u.current;u.current=t,n-t>-4&&n-t<4&&l(Math.round(t/e))},g=()=>{b()},f=()=>{let{offsetWidth:e,scrollLeft:t}=x.current;l(Math.round(t/e))},b=()=>{d.current=!0,clearTimeout(n)},x=(0,O.useRef)(null);(0,O.useEffect)(()=>{if(x.current)return x.current.addEventListener("scroll",h),x.current.addEventListener("touchmove",g),x.current.addEventListener("touchend",f),()=>{x.current&&(x.current.removeEventListener("scroll",h),x.current.removeEventListener("touchmove",g),x.current.removeEventListener("touchend",f))}},[x]);let m=[(0,F.jsx)(oc,{layoutId:"graphicCircle",duration:600,ease:p}),(0,F.jsx)(ol,{layoutId:"graphicCircle",duration:600,ease:p}),(0,F.jsx)(od,{layoutId:"graphicCircle",duration:600,ease:p})],C=[(0,F.jsx)(oc,{duration:600,ease:p}),(0,F.jsx)(ol,{duration:600,ease:p}),(0,F.jsx)(od,{duration:600,ease:p})],v=(()=>{var e;switch(null==(e=r.options)?void 0:e.language){case"en-US":case"zh-CN":return 64;default:return 84}})(),w=[(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(td,{style:{height:24},$small:!0,children:(0,F.jsx)(nr,{children:o.aboutScreen_a_h1})}),(0,F.jsx)(tu,{style:{height:v},children:(0,F.jsx)(nr,{children:o.aboutScreen_a_p})})]}),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(td,{style:{height:24},$small:!0,children:(0,F.jsx)(nr,{children:o.aboutScreen_b_h1})}),(0,F.jsx)(tu,{style:{height:v},children:(0,F.jsx)(nr,{children:o.aboutScreen_b_p})})]}),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(td,{style:{height:24},$small:!0,children:(0,F.jsx)(nr,{children:o.aboutScreen_c_h1})}),(0,F.jsx)(tu,{style:{height:v},children:(0,F.jsx)(nr,{children:o.aboutScreen_c_p})})]})];return(0,F.jsxs)(ti,{children:[(0,F.jsxs)(n0,{children:[(0,F.jsx)(nq,{children:(0,F.jsx)(T.MotionConfig,{transition:{duration:.6,ease:p},children:(0,F.jsx)(R.AnimatePresence,{initial:!1,onExitComplete:()=>s(!0),children:m.map((e,t)=>c===t&&(0,F.jsx)(nK,{style:{position:"absolute"},children:e},t))})})}),(0,F.jsx)(n$,{ref:x,children:(0,F.jsx)(R.AnimatePresence,{children:w.map((e,t)=>(0,F.jsxs)(n1,{$active:c===t,children:[(0,F.jsx)(nX,{children:(0,F.jsx)(T.MotionConfig,{transition:{duration:0},children:(0,F.jsx)(nK,{children:C[t]})})}),(0,F.jsx)(tl,{style:{gap:8,paddingBottom:0},children:e})]},t))})})]}),(0,F.jsx)(nm,{children:(0,F.jsx)(n2,{children:w.map((e,t)=>(0,F.jsx)(n3,{$active:c===t,onClick:()=>{b(),s(!1),(()=>{if(x.current){let{overflow:e}=getComputedStyle(x.current);return"visible"!==e}return!1})()?(e=>{if(x.current){let{offsetWidth:t}=x.current;x.current.scrollLeft=t*e,setTimeout(()=>l(e),100)}})(t):l(t)}},t))})}),(0,F.jsx)(nY,{href:i,arrow:!0,children:o.aboutScreen_ctaText})]})},op=z.keyframes`
  0%{ transform: translate(-100%) rotate(-45deg); }
  100%{ transform: translate(100%) rotate(-80deg); }
`,oh=eW(D.motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,og=eW.div`
  padding: 24px 24px 28px;
  border-radius: var(--ck-tertiary-border-radius, 24px);
  box-shadow: var(--ck-tertiary-box-shadow, none);
  background: var(--ck-body-background-tertiary);
  ${tu} {
    max-width: none;
  }
`,of=eW.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 5px -8px -12px;
  button {
  }
`,ob=eW(D.motion.div)`
  text-align: center;
  margin-top: 16px;
  margin-bottom: -6px;
`,ox=eW(D.motion.button)`
  appearance: none;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 42px;
  padding: 0 16px;
  border-radius: 6px;
  background: none;
  color: var(--ck-body-color-muted);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  /* will-change: transform; */
  transition: color 200ms ease, transform 100ms ease;
  svg {
    transition: all 100ms ease-out;
    display: block;
    position: relative;
    top: 2px;
    left: 2px;
    transform: translateZ(0px);
    path,
    circle {
      transition: all 100ms ease-out;
    }
    path:last-of-type {
      transform-origin: 0 0;
      transform: scaleX(1.3) skewY(-12deg);
      opacity: 0;
    }
    circle {
      transform: translate(20%, -15%);
    }
  }
  &:hover {
    color: var(--ck-body-color-muted-hover);
    svg {
      path,
      circle {
        opacity: 1;
        transform: none;
      }
    }
  }
  &:active {
    transform: scale(0.96);
  }
`;eW(D.motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 0 16px;
  overflow-y: scroll;
  max-height: 20rem;

  &::-webkit-scrollbar {
    display: none;
  }
`,eW(D.motion.button)`
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 64px;
  font-size: 17px;
  font-weight: var(--ck-primary-button-font-weight, 500);
  line-height: 20px;
  text-align: var(--ck-body-button-text-align, left);
  transition: 180ms ease;
  transition-property: background, color, box-shadow, transform, opacity;
  will-change: transform, box-shadow, background-color, color, opacity;

  --fallback-color: var(--ck-primary-button-color);
  --fallback-background: var(--ck-primary-button-background);
  --fallback-box-shadow: var(--ck-primary-button-box-shadow);
  --fallback-border-radius: var(--ck-primary-button-border-radius);

  --color: var(--ck-primary-button-color, var(--fallback-color));
  --background: var(--ck-primary-button-background, var(--fallback-background));
  --box-shadow: var(--ck-primary-button-box-shadow, var(--fallback-box-shadow));
  --border-radius: var(
    --ck-primary-button-border-radius,
    var(--fallback-border-radius)
  );

  --hover-color: var(--ck-primary-button-hover-color, var(--color));
  --hover-background: var(
    --ck-primary-button-hover-background,
    var(--background)
  );
  --hover-box-shadow: var(
    --ck-primary-button-hover-box-shadow,
    var(--box-shadow)
  );
  --hover-border-radius: var(
    --ck-primary-button-hover-border-radius,
    var(--border-radius)
  );

  --active-color: var(--ck-primary-button-active-color, var(--hover-color));
  --active-background: var(
    --ck-primary-button-active-background,
    var(--hover-background)
  );
  --active-box-shadow: var(
    --ck-primary-button-active-box-shadow,
    var(--hover-box-shadow)
  );
  --active-border-radius: var(
    --ck-primary-button-active-border-radius,
    var(--hover-border-radius)
  );

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  &:disabled {
    transition: 180ms ease;
    opacity: 0.4;
  }

  --bg: var(--background);
  &:not(:disabled) {
    &:hover {
      color: var(--hover-color);
      background: var(--hover-background);
      box-shadow: var(--hover-box-shadow);
      border-radius: var(--hover-border-radius);
      --bg: var(--hover-background, var(--background));
    }
    &:focus-visible {
      transition-duration: 100ms;
      color: var(--hover-color);
      background: var(--hover-background);
      box-shadow: var(--hover-box-shadow);
      border-radius: var(--hover-border-radius);
      --bg: var(--hover-background, var(--background));
    }
    &:active {
      color: var(--active-color);
      background: var(--active-background);
      box-shadow: var(--active-box-shadow);
      border-radius: var(--active-border-radius);
      --bg: var(--active-background, var(--background));
    }
  }
`,eW(D.motion.span)`
  position: relative;
  top: var(--ck-recent-badge-top-offset, 0.5px);
  display: inline-block;
  padding: 10px 7px;
  line-height: 0;
  font-size: 13px;
  font-weight: 400;
  border-radius: var(--ck-recent-badge-border-radius, var(--border-radius));
  color: var(
    --ck-recent-badge-color,
    var(--ck-accent-color, var(--ck-body-color-muted, currentColor))
  );
  background: var(--ck-recent-badge-background, transparent);
  overflow: hidden;
  span {
    display: inline-block;
    position: relative;
  }
  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.4;
    box-shadow: var(--ck-recent-badge-box-shadow, inset 0 0 0 1px currentColor);
    border-radius: inherit;
  }
  &:after {
    z-index: 2;
    content: '';
    position: absolute;
    inset: -10%;
    top: -110%;
    aspect-ratio: 1/1;
    opacity: 0.7;
    background: linear-gradient(
      170deg,
      transparent 10%,
      var(--ck-recent-badge-background, var(--bg)) 50%,
      transparent 90%
    );
    animation: ${op} 2s linear infinite;
  }
`,eW(D.motion.span)`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 2px 0;
  padding-right: 38px;
`,eW(D.motion.div)`
  position: absolute;
  right: 20px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  svg,
  img {
    display: block;
    position: relative;
    pointer-events: none;
    overflow: hidden;
    border-radius: 27.5%;
    width: 100%;
    height: 100%;
  }
`;var om=({...e})=>(0,F.jsxs)("svg",{"aria-hidden":"true",width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,F.jsx)("path",{d:"M1.57568 4.60616C1.57568 2.69827 3.12234 1.15161 5.03023 1.15161H15.3939C17.3018 1.15161 18.8484 2.69826 18.8484 4.60616V10.3637C18.8484 12.2716 17.3018 13.8183 15.3939 13.8183H5.03023C3.12234 13.8183 1.57568 12.2716 1.57568 10.3637V4.60616Z",stroke:"currentColor",strokeWidth:"2"}),(0,F.jsx)("path",{d:"M1 4.79293C1 2.435 3.31004 0.770014 5.54697 1.51566L12.4561 3.81869C13.8667 4.2889 14.8182 5.60901 14.8182 7.09596V13.6313C14.8182 15.9892 12.5081 17.6542 10.2712 16.9086L3.36212 14.6056C1.95149 14.1353 1 12.8152 1 11.3283V4.79293Z",fill:"var(--ck-body-background)",stroke:"currentColor",strokeWidth:"2"}),(0,F.jsx)("circle",{cx:"10.3863",cy:"10.1894",r:"1.32574",fill:"currentColor"})]});let oC=z.keyframes`
  0%{ transform: translate(-100%) rotate(-45deg); }
  100%{ transform: translate(100%) rotate(-80deg); }
`,ov=eW(D.motion.button)`
  display: block;
  text-decoration: none;
`,ow=eW(D.motion.span)``,ok=eW(D.motion.div)``,oy={desktop:{ConnectorButton:z.css`
      cursor: pointer;
      user-select: none;
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 20px;
      width: 100%;
      height: 64px;
      font-size: 17px;
      font-weight: var(--ck-primary-button-font-weight, 500);
      line-height: 20px;
      text-align: var(--ck-body-button-text-align, left);
      transition: 180ms ease;
      transition-property: background, color, box-shadow, transform, opacity;
      will-change: transform, box-shadow, background-color, color, opacity;

      --fallback-color: var(--ck-primary-button-color);
      --fallback-background: var(--ck-primary-button-background);
      --fallback-box-shadow: var(--ck-primary-button-box-shadow);
      --fallback-border-radius: var(--ck-primary-button-border-radius);

      --color: var(--ck-primary-button-color, var(--fallback-color));
      --background: var(
        --ck-primary-button-background,
        var(--fallback-background)
      );
      --box-shadow: var(
        --ck-primary-button-box-shadow,
        var(--fallback-box-shadow)
      );
      --border-radius: var(
        --ck-primary-button-border-radius,
        var(--fallback-border-radius)
      );

      --hover-color: var(--ck-primary-button-hover-color, var(--color));
      --hover-background: var(
        --ck-primary-button-hover-background,
        var(--background)
      );
      --hover-box-shadow: var(
        --ck-primary-button-hover-box-shadow,
        var(--box-shadow)
      );
      --hover-border-radius: var(
        --ck-primary-button-hover-border-radius,
        var(--border-radius)
      );

      --active-color: var(--ck-primary-button-active-color, var(--hover-color));
      --active-background: var(
        --ck-primary-button-active-background,
        var(--hover-background)
      );
      --active-box-shadow: var(
        --ck-primary-button-active-box-shadow,
        var(--hover-box-shadow)
      );
      --active-border-radius: var(
        --ck-primary-button-active-border-radius,
        var(--hover-border-radius)
      );

      color: var(--color);
      background: var(--background);
      box-shadow: var(--box-shadow);
      border-radius: var(--border-radius);

      &:disabled {
        transition: 180ms ease;
        opacity: 0.4;
      }

      --bg: var(--background);
      &:not(:disabled) {
        &:hover {
          color: var(--hover-color);
          background: var(--hover-background);
          box-shadow: var(--hover-box-shadow);
          border-radius: var(--hover-border-radius);
          --bg: var(--hover-background, var(--background));
        }
        &:focus-visible {
          transition-duration: 100ms;
          color: var(--hover-color);
          background: var(--hover-background);
          box-shadow: var(--hover-box-shadow);
          border-radius: var(--hover-border-radius);
          --bg: var(--hover-background, var(--background));
        }
        &:active {
          color: var(--active-color);
          background: var(--active-background);
          box-shadow: var(--active-box-shadow);
          border-radius: var(--active-border-radius);
          --bg: var(--active-background, var(--background));
        }
      }
    `,ConnectorLabel:z.css`
      display: flex;
      align-items: center;
      gap: 9px;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 2px 0;
      padding-right: 38px;
    `,ConnectorIcon:z.css`
      position: absolute;
      right: 20px;
      width: 32px;
      height: 32px;
      overflow: hidden;
      svg,
      img {
        display: block;
        position: relative;
        pointer-events: none;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      &[data-shape='squircle'] {
        border-radius: 22.5%;
      }
      &[data-shape='circle'] {
        border-radius: 100%;
      }
      &[data-shape='square'] {
        border-radius: 0;
      }
    `},mobile:{ConnectorButton:z.css`
      text-align: center;
      background: none;
      max-width: 100%;
      overflow: hidden;
    `,ConnectorLabel:z.css`
      display: block;
      text-overflow: ellipsis;
      max-width: 100%;
      overflow: hidden;
      padding: 10px 0 0;
      color: var(--ck-body-color);
      font-size: 13px;
      line-height: 15px;
      font-weight: 500;
      opacity: 0.75;
    `,ConnectorIcon:z.css`
      position: relative;
      margin: 0 auto;
      width: 60px;
      height: 60px;
      overflow: hidden;
      svg,
      img {
        display: block;
        position: relative;
        width: 100%;
        height: auto;
      }
      &[data-small='true'] {
        svg,
        img {
          transform: scale(0.8);
        }
      }

      &[data-shape='squircle'] {
        border-radius: 22.5%;
        &:before {
          content: '';
          z-index: -1;
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 1px var(--ck-body-background-tertiary);
        }
      }
      &[data-shape='circle'] {
        border-radius: 100%;
      }
      &[data-shape='square'] {
        border-radius: 0;
      }

      &[data-background='true'] {
        border-radius: 22.5%;
        background: var(--ck-body-background-tertiary);
        padding: 8%;
      }
    `}},oA=eW(D.motion.span)`
  position: relative;
  top: var(--ck-recent-badge-top-offset, 0.5px);
  display: inline-block;
  padding: 10px 7px;
  line-height: 0;
  font-size: 13px;
  font-weight: 400;
  border-radius: var(--ck-recent-badge-border-radius, var(--border-radius));
  color: var(
    --ck-recent-badge-color,
    var(--ck-accent-color, var(--ck-body-color-muted, currentColor))
  );
  background: var(--ck-recent-badge-background, transparent);
  overflow: hidden;
  span {
    display: inline-block;
    position: relative;
  }
  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.4;
    box-shadow: var(--ck-recent-badge-box-shadow, inset 0 0 0 1px currentColor);
    border-radius: inherit;
  }
  &:after {
    z-index: 2;
    content: '';
    position: absolute;
    inset: -10%;
    top: -110%;
    aspect-ratio: 1/1;
    opacity: 0.7;
    background: linear-gradient(
      170deg,
      transparent 10%,
      var(--ck-recent-badge-background, var(--bg)) 50%,
      transparent 90%
    );
    animation: ${oC} 2s linear infinite;
  }
`,oj=eW.div`
  transition: opacity 300ms ease;
  min-width: fit-content;

  ${e=>e.$disabled&&z.css`
      pointer-events: none;
      opacity: 0.4;
    `}

  ${e=>e.$mobile?z.css`
          display: flex;
          align-items: flex-start;
          justify-content: space-around;
          gap: 22px 6px;
          //margin: 0px -10px -20px;
          padding: 14px 0px 28px;

          ${ov} {
            flex-shrink: 0;
            width: 80px;
            ${oy.mobile.ConnectorButton}
            ${ow} {
              ${oy.mobile.ConnectorLabel}
              ${oA} {
                display: none;
                width: fit-content;
                margin: 0 auto;
              }
            }
            ${ok} {
              ${oy.mobile.ConnectorIcon}
            }
          }
        `:z.css`
          display: flex;
          flex-direction: column;
          gap: 12px;

          ${ov} {
            ${oy.desktop.ConnectorButton}
            ${ow} {
              ${oy.desktop.ConnectorLabel}
            }
            ${ok} {
              ${oy.desktop.ConnectorIcon}
            }
          }
        `}
`;function oS(){var e;let t=(0,p.useConfig)();return(null!=(e=null==t?void 0:t.chains)?e:[]).map(e=>e)}function oE({...e}={}){let t=ar(),{connect:n,connectAsync:o,connectors:r,...i}=(0,h.useConnect)({...e,mutation:{...e.mutation,onError(e){e.message?"User rejected request"!==e.message&&t.log(e.message,e):t.log("Could not connect.",e)}}});return{connect:({connector:e,chainId:o,mutation:r})=>{var i;return n({connector:e,chainId:null!=o?o:null==(i=t.options)?void 0:i.initialChainId},r)},connectAsync:async({connector:e,chainId:n,mutation:r})=>{var i;return o({connector:e,chainId:null!=n?n:null==(i=t.options)?void 0:i.initialChainId},r)},connectors:r,...i}}function oL(e){let{chains:t}=(0,p.useConfig)();return!!e&&t.some(t=>t.id===e)}let oM=O.default.createContext({connect:{getUri:()=>""},dapp:{chains:[]},account:void 0}),oN=({enabled:e,children:t})=>{let{uri:n}=function({enabled:e}={enabled:!0}){let{log:t}=ar(),[n,o]=(0,O.useState)(void 0),r=na("walletConnect"),{isConnected:i}=(0,s.useAccount)(),{connectAsync:a}=oE();return(0,O.useEffect)(()=>{if(e)if(i)o(void 0);else{if(!r||n)return;if(r&&!i)return d(r),t("add wc listeners"),r.emitter.on("message",s),r.emitter.on("disconnect",c),()=>{t("remove wc listeners"),r.emitter.off("message",s),r.emitter.off("disconnect",c)}}async function s(e){let{type:n,data:r}=e;t("WC Message",n,r),"display_uri"===n&&o(r)}async function c(){t("WC Disconnect"),r&&l(r)}async function l(e){let t=await a({connector:e});return!!t&&t}async function d(e){try{await l(e)}catch(n){t("catch error"),t(n),n.code?4001===n.code?(t("error.code - User rejected"),d(e)):t("error.code - Unknown Error"):t("WalletConnect cannot connect.",n)}}},[e,r,i]),{uri:n}}({enabled:e}),{address:o,chain:r}=(0,s.useAccount)(),i=oL(null==r?void 0:r.id),a=oS();return(0,F.jsx)(oM.Provider,{value:{connect:{getUri:e=>n},dapp:{chains:a},account:o?{chain:r,chainIsSupported:i,address:o}:void 0},children:t})};function oI(){let[e,t]=(0,O.useState)(e_());return(0,O.useEffect)(()=>{let e=()=>{t(e_())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}let oF=eW.div`
  position: relative;
`,oO=z.keyframes`
0%{ opacity:0; }
100%{ opacity:1; }
`,oB=eW.div`
  z-index: 9;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.75rem;
  display: flex;
  justify-content: center;

  transition: opacity 300ms ease;

  span {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.3075rem 0.9375rem 0.375rem;
    border-radius: 6rem;
    background: var(--ck-tooltip-background);
    color: var(--ck-tooltip-color);
    font-weight: 500;
    font-size: 0.8125rem;
    letter-spacing: -0.01rem;
    box-shadow: var(--ck-tooltip-shadow);
    animation: ${oO} 300ms ease 1000ms both;

    transition: transform 100ms ease;

    &:hover {
      transform: scale(1.02);
    }
    &:active {
      transform: scale(0.98);
    }
    svg {
      display: block;
      transform: translateX(-0.1875rem);
    }
  }

  &.hide {
    opacity: 0;
    pointer-events: none;
  }
`,o_=eW.div`
  --bg: ${({$backgroundColor:e})=>e||"var(--ck-body-background)"};
  --fade-height: 1px;
  position: relative;
  z-index: 1;

  ${({$mobile:e,$height:t,$mobileDirection:n})=>e&&"horizontal"===n?z.css`
          overflow-x: scroll;
          margin: 0 -24px;
          padding: 0 24px;

          &:before,
          &:after {
            pointer-events: none;
            z-index: 10;
            content: '';
            display: block;
            position: sticky;
            top: 0;
            bottom: 0;
            width: var(--fade-height);
            background: var(
              --ck-body-divider-secondary,
              var(--ck-body-divider)
            );
            box-shadow: var(--ck-body-divider-box-shadow);
            transition: opacity 300ms ease;
          }
          &:before {
            left: 0;
          }
          &:after {
            right: 0;
          }

          &.scroll-start {
            &:before {
              opacity: 0;
            }
          }

          &.scroll-end {
            &:after {
              opacity: 0;
            }
          }
        `:z.css`
          max-height: ${t?`${t}px`:"310px"};
          overflow-y: scroll;
          padding: 0 10px;
          margin: calc(var(--fade-height) * -1) -16px 0 -10px;

          &:before,
          &:after {
            pointer-events: none;
            z-index: 10;
            content: '';
            display: block;
            position: sticky;
            left: 0;
            right: 0;
            height: var(--fade-height);
            background: var(
              --ck-body-divider-secondary,
              var(--ck-body-divider)
            );
            box-shadow: var(--ck-body-divider-box-shadow);
            transition: opacity 300ms ease;
          }
          &:before {
            top: 0;
          }
          &:after {
            bottom: 0;
          }

          &.scroll-start {
            &:before {
              opacity: 0;
            }
          }

          &.scroll-end {
            &:after {
              opacity: 0;
            }
          }
        `}

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0);
    border-radius: 100px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: var(--ck-body-color-muted);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--ck-body-color-muted-hover);
  }
`,oD=()=>(0,F.jsx)("svg",{width:"11",height:"12",viewBox:"0 0 11 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,F.jsx)("path",{d:"M5.49438 1L5.49438 11M5.49438 11L9.5 7M5.49438 11L1.5 7",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}),oR=({children:e,height:t,backgroundColor:n,mobileDirection:o})=>{let r=(0,O.useRef)(null),i=(0,O.useRef)(null),a=oI();return(0,O.useEffect)(()=>{let e=r.current;if(!e)return;e.scrollHeight>e.clientHeight&&i.current&&i.current.classList.remove("hide");let t=t=>{let{scrollTop:n,scrollHeight:o,clientHeight:r,scrollLeft:a,scrollWidth:s,clientWidth:c}=t.target;i.current&&n>0&&i.current.classList.add("hide"),0===n&&0===a?e.classList.add("scroll-start"):e.classList.remove("scroll-start"),o-n===r&&s-a===c?e.classList.add("scroll-end"):e.classList.remove("scroll-end")};return e.addEventListener("scroll",t),t({target:e}),()=>{e.removeEventListener("scroll",t)}},[r.current]),(0,F.jsxs)(oF,{children:[(0,F.jsx)(o_,{ref:r,$mobile:a,$height:t,$backgroundColor:n,$mobileDirection:o,children:e}),(0,F.jsx)(oB,{ref:i,className:"hide",onClick:()=>{r.current&&r.current.scrollTo({top:r.current.scrollHeight,behavior:"smooth"})},children:(0,F.jsxs)("span",{children:[(0,F.jsx)(oD,{})," More Available"]})})]})},oT=eW(D.motion.div)`
  display: flex;
  gap: 8px;
  position: relative;
  border-radius: 9px;
  margin: 0 auto;
  padding: 10px;
  text-align: left;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  max-width: 260px;
  min-width: 100%;

  border-radius: var(--ck-alert-border-radius, 12px);
  color: var(--ck-alert-color, var(--ck-body-color-muted));
  background: var(--ck-alert-background, var(--ck-body-background-secondary));
  box-shadow: var(--ck-alert-box-shadow, var(--ck-body-box-shadow));

  @media only screen and (max-width: ${560}px) {
    padding: 16px;
    font-size: 16px;
    line-height: 21px;
    border-radius: 24px;
    text-align: center;
  }

  ${e=>{if(e)return z.css`
        color: #fff;
        background: var(--ck-body-color-danger, red);
      `}}
`,oz=eW(D.motion.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`,oW=({children:e,error:t,icon:n})=>(0,F.jsxs)(oT,{$error:t,children:[n&&(0,F.jsx)(oz,{children:n}),(0,F.jsx)("div",{children:e})]});oW.displayName="Alert";let oU=()=>{var e;let t=ar(),n=oI(),o=nd(),{lastConnectorId:r}=(()=>{let{storage:e}=(0,p.useConfig)(),[t,n]=(0,O.useState)(null);return(0,O.useEffect)(()=>{(async()=>{let t=await (null==e?void 0:e.getItem("recentConnectorId"));n(null!=t?t:"")})()},[]),{lastConnectorId:t,updateLastConnectorId:t=>{null==e||e.setItem("recentConnectorId",t)}}})(),i=nc(),a=ns(),s=o.filter(e=>e.id!==(null==a?void 0:a.id));i&&ex("Family")&&(s=s.filter(e=>e.id!==(null==i?void 0:i.id)));let c=(null==(e=t.options)?void 0:e.hideRecentBadge)||"walletConnect"===r?s:[...s.filter(e=>r===e.connector.id),...s.filter(e=>r!==e.connector.id)];return(0,F.jsxs)(oR,{mobileDirection:"horizontal",children:[0===c.length&&(0,F.jsx)(oW,{error:!0,children:"No connectors found in ConnectKit config."}),c.length>0&&(0,F.jsx)(oj,{$mobile:n,$totalResults:c.length,children:c.map(e=>(0,F.jsx)(oH,{wallet:e,isRecent:e.id===r},e.id))})]})},oH=({wallet:e,isRecent:t})=>{var n,o,r,i;let{connect:{getUri:a}}=O.default.useContext(oM),s=a(),c=oI(),l=ar(),{connect:d}=oE(),u=!e.isInstalled&&c||e.shouldDeeplinkDesktop&&!c?null==(n=e.getWalletConnectDeeplink)?void 0:n.call(e,null!=s?s:""):void 0,p=c&&"walletConnect"===e.id,h=("safari"===eF()||"ios"===eF())&&"coinbaseWalletSDK"===e.connector.id;return(p||h)&&(u=void 0),(0,F.jsxs)(ov,{type:"button",as:u?"a":void 0,href:u||void 0,disabled:l.route!==an.CONNECTORS,onClick:u?void 0:()=>{p?l.setRoute(an.MOBILECONNECTORS):(h&&d({connector:null==e?void 0:e.connector}),l.setRoute(an.CONNECT),l.setConnector({id:e.id}))},children:[(0,F.jsx)(ok,{"data-small":e.iconShouldShrink,"data-shape":e.iconShape,"data-background":p,children:null!=(o=e.iconConnector)?o:e.icon}),(0,F.jsxs)(ow,{children:[c&&null!=(r=e.shortName)?r:e.name,!(null==(i=l.options)?void 0:i.hideRecentBadge)&&t&&(0,F.jsx)(oA,{children:(0,F.jsx)("span",{children:"Recent"})})]})]})},oG=eW(D.motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  height: 100%;
`,oP=eW.button`
  --color: #ffffff;
  --background: var(--ck-family-accounts-brand);
  --box-shadow: var(--ck-primary-button-box-shadow);
  --border-radius: var(--ck-primary-button-border-radius);
  --font-weight: var(--ck-primary-button-font-weight, 500);

  --hover-color: var(--ck-button-primary-hover-color, var(--color));
  --hover-background: var(
    --ck-primary-button-hover-background,
    var(--background)
  );
  --hover-box-shadow: var(
    --ck-primary-button-hover-box-shadow,
    var(--box-shadow)
  );
  --hover-border-radius: var(
    --ck-primary-button-hover-border-radius,
    var(--border-radius)
  );
  --hover-font-weight: var(--ck-primary-button-font-weight, var(--font-weight));

  appearance: none;
  cursor: pointer;
  user-select: none;
  min-width: fit-content;
  width: 100%;
  display: block;
  text-align: center;
  height: 48px;
  margin: 18px 0 2px;
  line-height: 48px;
  padding: 0 4px;
  font-size: 16px;
  font-weight: var(--font-weight, 500);
  text-decoration: none;
  white-space: nowrap;
  transition: 100ms ease;
  transition-property: box-shadow, background-color;
  color: var(--color);
  background: var(--background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  will-change: transform, box-shadow, background-color, color;
`,oQ=eW.div`
  transform: translateZ(0); // Shifting fix
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: calc(100% - 42px);
  transition: opacity 300ms ease;
`,oZ=eW.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 20px;
  max-height: 20px;
  margin: 0 12px 0 0;
  svg {
    display: block;
    position: relative;
    max-width: 100%;
    height: auto;
  }
`,oV=()=>(0,F.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.0204 1.00451C19.6474 1.63141 19.9997 2.4816 20 3.36818C20.0008 4.14967 19.726 4.90643 19.2239 5.50535C18.7218 6.10427 18.0246 6.50698 17.2549 6.64267V6.70894C18.019 6.85794 18.7076 7.26796 19.2026 7.86877C19.6976 8.46958 19.9683 9.2238 19.9683 10.0022C19.9683 10.7807 19.6976 11.5349 19.2026 12.1357C18.7076 12.7365 18.019 13.1465 17.2549 13.2955V13.3613C18.0719 13.5195 18.8007 13.9762 19.2994 14.6424C19.798 15.3086 20.0308 16.1365 19.9523 16.9649C19.8738 17.7933 19.4896 18.5628 18.8747 19.1234C18.2598 19.6841 17.4581 19.9958 16.626 19.9977C15.0203 19.9977 13.6632 18.8411 13.3487 17.3187H13.266C13.1161 18.0763 12.707 18.7581 12.1091 19.247C11.5112 19.7358 10.7617 20.0013 9.98928 19.9977C8.38358 19.9977 7.02654 18.8411 6.71207 17.3187H6.62934C6.5085 17.9135 6.22824 18.4642 5.81854 18.912C5.40885 19.3597 4.88513 19.6877 4.3034 19.8609C3.72166 20.034 3.1038 20.0458 2.5159 19.8949C1.92799 19.7441 1.39216 19.4362 0.965705 19.0044C0.539251 18.5726 0.238219 18.0329 0.0948058 17.4432C-0.0486071 16.8535 -0.0290062 16.2359 0.151512 15.6565C0.332031 15.0771 0.666676 14.5576 1.11966 14.1537C1.57264 13.7497 2.12691 13.4765 2.7232 13.3632V13.2974C1.95907 13.1484 1.27053 12.7384 0.775518 12.1376C0.280502 11.5368 0.0098111 10.7826 0.0098111 10.0041C0.0098111 9.22568 0.280502 8.47147 0.775518 7.87065C1.27053 7.26984 1.95907 6.85982 2.7232 6.71082V6.64455C2.12752 6.52895 1.57437 6.2539 1.12271 5.84872C0.671047 5.44354 0.337805 4.92342 0.158498 4.34378C-0.0208088 3.76414 -0.0394594 3.14672 0.104534 2.55732C0.248527 1.96792 0.549768 1.42863 0.976148 0.996935C1.40253 0.565238 1.93807 0.257312 2.52569 0.105976C3.11331 -0.0453591 3.73098 -0.0344317 4.31288 0.137594C4.89478 0.309619 5.41909 0.636296 5.82993 1.0828C6.24077 1.52931 6.52274 2.07892 6.64579 2.67304H6.72852C6.8865 1.9201 7.29921 1.24463 7.89713 0.760429C8.49504 0.276232 9.2416 0.0129149 10.011 0.0148468C10.7804 0.0167787 11.5257 0.283841 12.1211 0.771035C12.7166 1.25823 13.1259 1.93577 13.2801 2.68949H13.3629C13.6952 1.16716 15.0348 0.00860963 16.6565 0.0250597C17.5432 0.0253088 18.3935 0.377609 19.0204 1.00451ZM5.93783 5.07571C5.33116 5.0757 4.84252 5.57305 4.85166 6.17966C4.86836 7.28867 4.89073 9.01161 4.89073 10.2871C4.89073 11.5614 4.8684 13.2824 4.8517 14.3916C4.84255 14.9997 5.3327 15.4985 5.94094 15.4985H14.2263C14.8345 15.4985 15.3247 14.9997 15.3155 14.3916C15.2988 13.2824 15.2765 11.5614 15.2765 10.2871C15.2765 9.01161 15.2988 7.28867 15.3155 6.17966C15.3247 5.57305 14.8367 5.0757 14.23 5.07571L9.99998 5.07576L5.93783 5.07571Z",fill:"currentColor"})}),oY=({onClick:e})=>{let t=t6();return(0,F.jsx)(oP,{onClick:e,children:(0,F.jsxs)(oG,{children:[(0,F.jsx)(oZ,{children:(0,F.jsx)(oV,{})}),(0,F.jsx)(oQ,{children:(0,F.jsx)(nr,{children:t.continueWithFamily})})]})})},oJ=()=>{var e,t,n,o,r;let i=ar(),a=t6({}),s=oI(),c=nc(),l=ns();return(0,F.jsx)(ti,{style:{width:312,paddingTop:l?32:void 0},children:(0,F.jsxs)(oh,{children:[l&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(oY,{onClick:()=>{c&&ex("Family")?i.setConnector(c):i.setConnector(l),i.setRoute(an.CONNECT)}}),(0,F.jsx)(nm,{hideHr:!0,children:a.orSelectWallet})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)(oU,{}),s?(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(og,{children:[(0,F.jsxs)(tl,{style:{padding:0,textAlign:"left"},children:[(0,F.jsx)(td,{$small:!0,children:a.connectorsScreen_h1}),(0,F.jsx)(tu,{children:a.connectorsScreen_p})]}),(0,F.jsxs)(of,{children:[!(null==(e=i.options)?void 0:e.hideQuestionMarkCTA)&&(0,F.jsx)(nY,{variant:"tertiary",onClick:()=>i.setRoute(an.ABOUT),children:a.learnMore}),!(null==(t=i.options)?void 0:t.hideNoWalletCTA)&&(0,F.jsx)(nY,{variant:"tertiary",onClick:()=>i.setRoute(an.ONBOARDING),children:a.getWallet})]})]})}):(0,F.jsx)(F.Fragment,{children:!(null==(n=i.options)?void 0:n.hideNoWalletCTA)&&(0,F.jsx)(ob,{children:(0,F.jsxs)(ox,{onClick:()=>i.setRoute(an.ONBOARDING),children:[(0,F.jsx)(om,{})," ",a.connectorsScreen_newcomer]})})}),(null==(o=i.options)?void 0:o.disclaimer)&&(0,F.jsx)(tL,{style:{visibility:"hidden",pointerEvents:"none"},children:(0,F.jsx)("div",{children:null==(r=i.options)?void 0:r.disclaimer})})]})]})})},oq=eW.div`
  text-align: center;
  transition: opacity 100ms ease;
  opacity: ${e=>e.$waiting?.4:1};
`,oK=eW.div`
  z-index: 9;
  position: relative;
  margin: 0 auto 10px;
  border-radius: 16px;
  width: 60px;
  height: 60px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.04);
  ${e=>e.$outline&&`
  &:before {
    content: '';
    z-index: 2;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px var(--ck-body-background-tertiary);
  }`}
  svg {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
  }
`,oX=eW.div`
  color: var(--ck-body-color);
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  opacity: 0.75;
`,o$=z.keyframes`
  0%,100% { opacity:1; }
  50% { opacity:0.5; }
`,o1=eW.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px 8px;
  margin: 0 -10px;
  padding: 4px 0 0;
  transition: opacity 300ms ease;
  ${e=>e.$disabled&&z.css`
      pointer-events: none;
      opacity: 0.4;
      ${oq} {
        animation: ${o$} 1s infinite ease-in-out;
      }
    `}
`,o0=eW.div``;function o2(){let{log:e}=ar(),{connectAsync:t,connectors:n}=oE(),[o,r]=(0,O.useState)(!1);return{isOpen:o,open:async()=>{let o=document.createElement("style");o.innerHTML="w3m-modal, wcm-modal{ --wcm-z-index: 2147483647; --w3m-z-index:2147483647; }",document.head.appendChild(o);let i=n.find(e=>"walletConnect"===e.id);if(i)try{let n=(await i.getProvider()).rpc.projectId,a=(0,N.walletConnect)({projectId:n,showQrModal:!0});r(!0);try{await t({connector:a})}catch(t){e("WalletConnect",t)}r(!1),document.head.removeChild(o)}catch(t){e("Could not get WalletConnect provider",t)}else e("No WalletConnect connector available")}}}let o3=eW(D.motion.div)`
  transition: all 220ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  svg {
    display: block;
  }
  svg,
  svg path,
  svg rect {
    transition: inherit;
  }
  svg path:first-child {
    transform-origin: 50% 50%;
    fill: var(--bg);
    stroke: var(--color);
  }
  svg rect {
    transform-origin: 53% 63%;
    fill: var(--bg);
    stroke: var(--color);
  }
  svg path:last-child {
    opacity: 0;
    stroke: var(--bg);
    transform: translate(11.75px, 10px) rotate(90deg) scale(0.6);
  }
  ${e=>e.$clipboard?z.css`
          --color: var(--ck-focus-color) !important;
          --bg: var(--ck-body-background);
          svg {
            transition-delay: 0ms;
            path:first-child {
              opacity: 0;
              transform: rotate(-90deg) scale(0.2);
            }
            rect {
              rx: 10px;
              fill: var(--color);
              transform: rotate(-90deg) scale(1.45);
            }
            path:last-child {
              transition-delay: 100ms;
              opacity: 1;
              transform: translate(7.75px, 9.5px);
            }
          }
        `:z.css`
          &:hover {
          }
          &:hover:active {
          }
        `}
`,o5=({copied:e,small:t})=>(0,F.jsx)(o3,{$clipboard:e,children:(0,F.jsx)(tP,{style:{transform:t?"scale(1)":"translateX(3px) scale(1.5)",opacity:t||e?1:.3}})}),o4=eW.div`
  --color: var(--ck-copytoclipboard-stroke);
  --bg: var(--ck-body-background);
  transition: all 220ms cubic-bezier(0.175, 0.885, 0.32, 1.1);

  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${e=>e.$disabled?z.css`
          cursor: not-allowed;
          opacity: 0.4;
        `:z.css`
          &:hover {
            --color: var(--ck-body-color-muted);
          }
        `}
`,o8=eW.div`
  display: block;
  position: relative;
  transition: inherit;
  svg {
    position: absolute;
    left: 100%;
    display: block;
    top: -1px;
    margin: 0;
    margin-left: 4px;
  }
`,o9=({string:e,children:t,variant:n})=>{let o,[r,i]=(0,O.useState)(!1),a=()=>{if(!e)return;let t=e.trim();navigator.clipboard&&navigator.clipboard.writeText(t),i(!0),clearTimeout(o),o=setTimeout(()=>i(!1),1e3)};return"button"===n?(0,F.jsx)(nY,{disabled:!e,onClick:a,icon:(0,F.jsx)(o5,{copied:r}),children:t}):(0,F.jsx)(o4,{onClick:a,$disabled:!e,children:(0,F.jsxs)(o8,{children:[t,(0,F.jsx)(o5,{copied:r,small:!0})]})})};(0,F.jsx)("svg",{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,F.jsx)("path",{d:"M30 42V19M19 30.5H42",stroke:"var(--ck-body-color-muted)",strokeWidth:"3",strokeLinecap:"round"})});let o6=()=>{var e,t;let n=ar(),o=t6(),{connect:{getUri:r}}=O.default.useContext(oM),i=r(),{open:a,isOpen:s}=o2(),c=nd(),l=null!=(e=Object.keys(eR).filter(e=>{let t=eR[e];return!c.find(t=>t.connector.id===e)&&!!t.getWalletConnectDeeplink}))?e:[];return(0,F.jsx)(ti,{style:{width:312},children:(0,F.jsxs)(o0,{children:[(0,F.jsx)(tl,{style:{paddingBottom:0},children:(0,F.jsx)(oR,{height:340,children:(0,F.jsxs)(o1,{$disabled:!i,children:[l.sort((e,t)=>{var n,o,r,i;let a=eR[e],s=eR[t],c=null!=(o=null!=(n=a.name)?n:a.shortName)?o:e,l=null!=(i=null!=(r=s.name)?r:s.shortName)?i:t;return c.localeCompare(l)}).filter(e=>"coinbaseWallet"!==e&&"com.coinbase.wallet"!==e).map((e,t)=>{let n=eR[e],{name:o,shortName:r,iconConnector:a,icon:s}=n;return(0,F.jsxs)(oq,{onClick:()=>{var e;let t;(t=null==(e=n.getWalletConnectDeeplink)?void 0:e.call(n,i))&&(window.location.href=t)},style:{animationDelay:`${50*t}ms`},children:[(0,F.jsx)(oK,{$outline:!0,children:null!=a?a:s}),(0,F.jsx)(oX,{children:null!=r?r:o})]},t)})]})})}),(null==(t=n.options)?void 0:t.walletConnectCTA)!=="modal"&&(0,F.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,paddingTop:8},children:(0,F.jsx)(o9,{variant:"button",string:i,children:o.copyToClipboard})})]})})},o7=eW(D.motion.div)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  left: 0;
  right: 0;
  ${tl} {
    padding: 0 8px 32px;
    gap: 12px;
  }
`,re=z.keyframes`
  0%{ transform:none; }
  25%{ transform:translateX(${2}px); }
  50%{ transform:translateX(-${2}px); }
  75%{ transform:translateX(${2}px); }
  100%{ transform:none; }
`,rt=z.keyframes`
  0%{ opacity:1; }
  100%{ opacity:0; }
`,rn=eW(D.motion.div)`
  /*
  background: var(
    --ck-body-background
  ); // To stop the overlay issue during transition for the squircle spinner
  */
`,ro=eW(D.motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto 16px;
  height: 120px;
  //transform: scale(1.001); // fixes shifting issue between states
`,rr=eW(D.motion.div)`
  user-select: none;
  position: relative;
  --spinner-error-opacity: 0;
  &:before {
    content: '';
    position: absolute;
    inset: 1px;
    opacity: 0;
    background: var(--ck-body-color-danger);
    ${e=>e.$circle&&z.css`
        inset: -5px;
        border-radius: 50%;
        background: none;
        box-shadow: inset 0 0 0 3.5px var(--ck-body-color-danger);
      `}
  }
  ${e=>e.$shake&&z.css`
      animation: ${re} 220ms ease-out both;
      &:before {
        animation: ${rt} 220ms ease-out 750ms both;
      }
    `}
`,ri=eW(D.motion.button)`
  z-index: 5;
  appearance: none;
  position: absolute;
  right: 2px;
  bottom: 2px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  background: none;

  color: var(--ck-body-background);
  transition: color 200ms ease;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);

  &:before {
    z-index: 3;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 200ms ease;
    background: var(--ck-body-color);
  }

  &:hover:before {
    opacity: 0.1;
  }
`,ra=eW(D.motion.div)`
  position: absolute;
  inset: 0;

  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 16px;
    background: conic-gradient(
      from 90deg,
      currentColor 10%,
      var(--ck-body-color) 80%
    );
  }

  svg {
    z-index: 2;
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }
`,rs=eW(D.motion.div)`
  z-index: 2147483647;
  position: fixed;
  inset: 0;
  pointer-events: none;
`,rc=eW(D.motion.div)`
  --shadow: var(--ck-tooltip-shadow);
  z-index: 2147483647;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  gap: 8px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border-radius: var(
    --ck-tooltip-border-radius,
    ${e=>"small"===e.$size?11:14}px
  );
  border-radius: ;
  padding: 10px 16px 10px 12px;
  font-size: 14px;
  line-height: 19px;
  font-weight: 500;
  letter-spacing: -0.1px;
  color: var(--ck-tooltip-color);
  background: var(--ck-tooltip-background);
  box-shadow: var(--shadow);
  > span {
    z-index: 3;
    position: relative;
  }
  > div {
    margin: -4px 0; // offset for icon
  }
  strong {
    color: var(--ck-spinner-color);
  }

  .ck-tt-logo {
    display: inline-block;
    vertical-align: text-bottom;
    height: 1em;
    width: 1.25em;
    svg {
      display: block;
      height: 100%;
      transform: translate(0.5px, -1px) scale(1.75);
    }
  }
`,rl=eW(D.motion.div)`
  z-index: 2;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>"small"===e.$size?14:18}px;
  right: 100%;
  top: 0;
  bottom: 0;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    box-shadow: var(--shadow);
    width: ${e=>"small"===e.$size?14:18}px;
    height: ${e=>"small"===e.$size?14:18}px;
    transform: translate(75%, 0) rotate(45deg);
    background: var(--ck-tooltip-background);
    border-radius: ${e=>"small"===e.$size?2:3}px 0 0 0;
  }
`,rd=({children:e,message:t,open:n,xOffset:o=0,yOffset:r=0,delay:i})=>{var a;let s=ar(),c=tR();if(null==(a=s.options)?void 0:a.hideTooltips)return(0,F.jsx)(F.Fragment,{children:e});let[l,d]=(0,O.useState)(!1),[u,p]=(0,O.useState)(!1),[h,g]=(0,O.useState)("small"),[f,b]=(0,O.useState)(!1),[x]=(0,O.useState)(s.route),m=(0,O.useRef)(null),[C,v]=(0,Q.default)({debounce:220*!f,offsetSize:!0,scroll:!0});return("u">typeof window?O.useLayoutEffect:O.useEffect)(()=>{let e,t,n;if(!m.current||v.top+v.bottom+v.left+v.right+v.height+v.width===0)return;let i=o+v.left+v.width,a=r+v.top+.5*v.height;f||0===i||0===a||b(!0),m.current.style.left=`${i}px`,m.current.style.top=`${a}px`,g(m.current.offsetHeight<=40?"small":"large"),p((e=!1,t=o+v.left+v.width,n=r+v.top+.5*v.height,(t>window.innerWidth||t<0||n>window.innerHeight||n<0)&&(e=!0),e))},[v,n,l]),(0,O.useEffect)(()=>{s.open||d(!1)},[s.open]),(0,O.useEffect)(()=>{d(!!n)},[n]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(D.motion.div,{ref:C,style:void 0===n?{cursor:"help"}:{},onHoverStart:()=>d(!0),onHoverEnd:()=>d(!1),onClick:()=>d(!1),children:e}),(0,F.jsx)(e9,{children:(0,F.jsx)(R.AnimatePresence,{children:x===s.route&&!u&&l&&(0,F.jsx)(e8,{$useTheme:c.theme,$useMode:c.mode,$customTheme:c.customTheme,children:(0,F.jsx)(rs,{children:(0,F.jsxs)(rc,{role:"tooltip",$size:h,ref:m,initial:"collapsed",animate:f?"open":{},exit:"collapsed",variants:{collapsed:{transformOrigin:"20px 50%",opacity:0,scale:.9,z:.01,y:"-50%",x:20,transition:{duration:.1}},open:{willChange:"opacity,transform",opacity:1,scale:1,z:.01,y:"-50%",x:20,transition:{ease:[.76,0,.24,1],duration:.15,delay:i||.5}}},children:[t,(0,F.jsx)(rl,{$size:h})]})})})})})]})},ru=eW(D.motion.div)`
  z-index: 4;
  position: relative;
  overflow: hidden;
  svg {
    z-index: 3;
    position: relative;
    display: block;
  }
`,rp=eW(D.motion.div)`
  z-index: 2;
  position: absolute;
  overflow: hidden;
  inset: 6px;
  border-radius: 24px;
  background: var(--ck-body-background);
  svg,
  img {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
  }
`,rh=eW(D.motion.div)`
  position: absolute;
  inset: 1px;
  overflow: hidden;
`,rg=eW(D.motion.div)`
  pointer-events: none;
  user-select: none;
  z-index: 1;
  position: absolute;
  inset: -25%;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: conic-gradient(
      from -90deg,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      var(--ck-spinner-color)
    );
    animation: rotateSpinner 1200ms linear infinite;
  }
  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,rf=({logo:e,connecting:t=!0})=>(0,F.jsxs)(ru,{transition:{duration:.5,ease:[.175,.885,.32,.98]},children:[(0,F.jsx)(rp,{children:e}),(0,F.jsx)(rh,{children:(0,F.jsx)(R.AnimatePresence,{children:t&&(0,F.jsx)(rg,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:0}}},"Spinner")})}),(0,F.jsxs)("svg",{"aria-hidden":"true",width:"102",height:"102",viewBox:"0 0 102 102",fill:"none",children:[(0,F.jsx)("rect",{x:"7.57895",y:"7.57895",width:"86.8421",height:"86.8421",rx:"19.2211",stroke:"black",strokeOpacity:"0.02",strokeWidth:"1.15789"}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0H102V102H0V0ZM7 38.284C7 27.5684 7 22.2106 9.01905 18.0892C10.9522 14.1431 14.1431 10.9522 18.0892 9.01905C22.2106 7 27.5684 7 38.284 7H63.716C74.4316 7 79.7894 7 83.9108 9.01905C87.8569 10.9522 91.0478 14.1431 92.9809 18.0892C95 22.2106 95 27.5684 95 38.284V63.716C95 74.4316 95 79.7894 92.9809 83.9108C91.0478 87.8569 87.8569 91.0478 83.9108 92.9809C79.7894 95 74.4316 95 63.716 95H38.284C27.5684 95 22.2106 95 18.0892 92.9809C14.1431 91.0478 10.9522 87.8569 9.01905 83.9108C7 79.7894 7 74.4316 7 63.716V38.284ZM41.5 0.5H41.4325C34.7246 0.499996 29.6023 0.499994 25.5104 0.823325C21.388 1.14906 18.1839 1.80986 15.3416 3.20227C10.0602 5.78959 5.78959 10.0602 3.20227 15.3416C1.80986 18.1839 1.14906 21.388 0.823325 25.5104C0.499994 29.6023 0.499996 34.7246 0.5 41.4325V41.5V55.5938C0.5 55.6808 0.507407 55.766 0.521624 55.849C0.507407 55.9319 0.5 56.0172 0.5 56.1042V60.5V60.5675C0.499996 67.2754 0.499994 72.3977 0.823325 76.4896C1.14906 80.612 1.80986 83.8161 3.20227 86.6584C5.78959 91.9398 10.0602 96.2104 15.3416 98.7977C18.1839 100.19 21.388 100.851 25.5104 101.177C29.6022 101.5 34.7244 101.5 41.432 101.5H41.4324H41.5H43.4227H60.5H60.5675H60.568C67.2756 101.5 72.3977 101.5 76.4896 101.177C80.612 100.851 83.8161 100.19 86.6584 98.7977C91.9398 96.2104 96.2104 91.9398 98.7977 86.6584C100.19 83.8161 100.851 80.612 101.177 76.4896C101.5 72.3978 101.5 67.2756 101.5 60.568V60.5676V60.5V41.5V41.4324V41.432C101.5 34.7244 101.5 29.6022 101.177 25.5104C100.851 21.388 100.19 18.1839 98.7977 15.3416C96.2104 10.0602 91.9398 5.78959 86.6584 3.20227C83.8161 1.80986 80.612 1.14906 76.4896 0.823325C72.3977 0.499994 67.2754 0.499996 60.5675 0.5H60.5H41.5ZM3.5 56.1042C3.5 56.0172 3.49259 55.9319 3.47838 55.849C3.49259 55.766 3.5 55.6808 3.5 55.5938V41.5C3.5 34.7112 3.50109 29.7068 3.814 25.7467C4.1256 21.8032 4.73946 19.0229 5.89635 16.6614C8.19077 11.9779 11.9779 8.19077 16.6614 5.89635C19.0229 4.73946 21.8032 4.1256 25.7467 3.814C29.7068 3.50109 34.7112 3.5 41.5 3.5H60.5C67.2888 3.5 72.2932 3.50109 76.2533 3.814C80.1968 4.1256 82.977 4.73946 85.3386 5.89635C90.022 8.19077 93.8092 11.9779 96.1036 16.6614C97.2605 19.0229 97.8744 21.8032 98.186 25.7467C98.4989 29.7068 98.5 34.7112 98.5 41.5V60.5C98.5 67.2888 98.4989 72.2932 98.186 76.2533C97.8744 80.1968 97.2605 82.9771 96.1036 85.3386C93.8092 90.022 90.022 93.8092 85.3386 96.1036C82.977 97.2605 80.1968 97.8744 76.2533 98.186C72.2932 98.4989 67.2888 98.5 60.5 98.5H43.4227H41.5C34.7112 98.5 29.7068 98.4989 25.7467 98.186C21.8032 97.8744 19.0229 97.2605 16.6614 96.1036C11.9779 93.8092 8.19077 90.022 5.89635 85.3386C4.73946 82.9771 4.1256 80.1968 3.814 76.2533C3.50109 72.2932 3.5 67.2888 3.5 60.5V56.1042Z",fill:"var(--ck-body-background)"})]})]}),rb=eW(D.motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 32px;
  max-height: 32px;
  width: 100%;
  height: 100%;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,rx=(0,F.jsxs)("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("g",{filter:"url(#filter0_ii_927_5781)",children:(0,F.jsxs)("g",{clipPath:"url(#clip0_927_5781)",children:[(0,F.jsx)("path",{d:"M1.58771 0V12.2727H6.06498L10.0002 5.45455H20.0002V0H1.58771Z",fill:"#DB4437"}),(0,F.jsx)("path",{d:"M1.58771 0V12.2727H6.06498L10.0002 5.45455H20.0002V0H1.58771Z",fill:"url(#paint0_linear_927_5781)"}),(0,F.jsx)("path",{d:"M6.17038 12.2272L1.64538 4.46582L1.57947 4.57946L6.07265 12.284L6.17038 12.2272Z",fill:"black",fillOpacity:"0.15"}),(0,F.jsx)("path",{d:"M0 20.0003H9.51932L13.9375 15.5821V12.273H6.0625L0 1.87305V20.0003Z",fill:"#0F9D58"}),(0,F.jsx)("path",{d:"M0 20.0003H9.51932L13.9375 15.5821V12.273H6.0625L0 1.87305V20.0003Z",fill:"url(#paint1_linear_927_5781)"}),(0,F.jsx)("path",{d:"M13.8412 12.4208L13.7469 12.3662L9.38324 19.9969H9.51392L13.8435 12.4242L13.8412 12.4208Z",fill:"#263238",fillOpacity:"0.15"}),(0,F.jsx)("path",{d:"M10.0006 5.45459L13.9381 12.2728L9.51996 20H20.0006V5.45459H10.0006Z",fill:"#FFCD40"}),(0,F.jsx)("path",{d:"M10.0006 5.45459L13.9381 12.2728L9.51996 20H20.0006V5.45459H10.0006Z",fill:"url(#paint2_linear_927_5781)"}),(0,F.jsx)("path",{d:"M9.9996 5.45459L13.9371 12.2728L9.51892 20H19.9996V5.45459H9.9996Z",fill:"#FFCD40"}),(0,F.jsx)("path",{d:"M9.9996 5.45459L13.9371 12.2728L9.51892 20H19.9996V5.45459H9.9996Z",fill:"url(#paint3_linear_927_5781)"}),(0,F.jsx)("path",{d:"M1.58691 0V12.2727H6.06419L9.99941 5.45455H19.9994V0H1.58691Z",fill:"#DB4437"}),(0,F.jsx)("path",{d:"M1.58691 0V12.2727H6.06419L9.99941 5.45455H19.9994V0H1.58691Z",fill:"url(#paint4_linear_927_5781)"}),(0,F.jsx)("path",{d:"M10 5.45459V7.83527L18.9091 5.45459H10Z",fill:"url(#paint5_radial_927_5781)"}),(0,F.jsx)("path",{d:"M0 19.9998H9.51932L11.9318 15.9089L13.9375 12.2726H6.0625L0 1.87256V19.9998Z",fill:"#0F9D58"}),(0,F.jsx)("path",{d:"M0 19.9998H9.51932L12.1023 15.5112L13.9375 12.2726H6.0625L0 1.87256V19.9998Z",fill:"url(#paint6_linear_927_5781)"}),(0,F.jsx)("path",{d:"M1.58771 4.59668L8.09339 11.1012L6.06384 12.2728L1.58771 4.59668Z",fill:"url(#paint7_radial_927_5781)"}),(0,F.jsx)("path",{d:"M9.52661 19.9884L11.9084 11.1021L13.938 12.2725L9.52661 19.9884Z",fill:"url(#paint8_radial_927_5781)"}),(0,F.jsx)("path",{d:"M10.0003 14.5455C12.5107 14.5455 14.5458 12.5104 14.5458 10C14.5458 7.48966 12.5107 5.45459 10.0003 5.45459C7.48996 5.45459 5.4549 7.48966 5.4549 10C5.4549 12.5104 7.48996 14.5455 10.0003 14.5455Z",fill:"#F1F1F1"}),(0,F.jsx)("path",{d:"M9.99995 13.6365C12.0083 13.6365 13.6363 12.0084 13.6363 10.0001C13.6363 7.99183 12.0083 6.36377 9.99995 6.36377C7.99164 6.36377 6.36359 7.99183 6.36359 10.0001C6.36359 12.0084 7.99164 13.6365 9.99995 13.6365Z",fill:"#4285F4"}),(0,F.jsx)("path",{d:"M10.0003 5.34082C7.48899 5.34082 5.4549 7.37491 5.4549 9.88628V9.99991C5.4549 7.48855 7.48899 5.45446 10.0003 5.45446H20.0003V5.34082H10.0003Z",fill:"black",fillOpacity:"0.2"}),(0,F.jsx)("path",{d:"M13.9318 12.273C13.1455 13.6299 11.6818 14.5458 10 14.5458C8.31818 14.5458 6.85227 13.6299 6.06818 12.273H6.06364L0 1.87305V1.98668L6.06818 12.3867C6.85455 13.7435 8.31818 14.6594 10 14.6594C11.6818 14.6594 13.1455 13.7446 13.9318 12.3867H13.9375V12.273H13.9307H13.9318Z",fill:"white",fillOpacity:"0.1"}),(0,F.jsx)("path",{opacity:"0.1",d:"M10.1133 5.45459C10.094 5.45459 10.0758 5.45686 10.0565 5.458C12.5406 5.48868 14.5452 7.50913 14.5452 10C14.5452 12.491 12.5406 14.5114 10.0565 14.5421C10.0758 14.5421 10.094 14.5455 10.1133 14.5455C12.6247 14.5455 14.6588 12.5114 14.6588 10C14.6588 7.48868 12.6247 5.45459 10.1133 5.45459Z",fill:"black"}),(0,F.jsx)("path",{d:"M13.9769 12.4204C14.3632 11.7522 14.5871 10.9795 14.5871 10.1522C14.5874 9.68602 14.5157 9.22262 14.3746 8.77832C14.4826 9.16696 14.5451 9.57377 14.5451 9.99764C14.5451 10.8249 14.3212 11.5976 13.9348 12.2658L13.9371 12.2704L9.51892 19.9976H9.65074L13.9769 12.4204Z",fill:"white",fillOpacity:"0.2"}),(0,F.jsx)("path",{d:"M10 0.113636C15.5034 0.113636 19.9682 4.56023 20 10.0568C20 10.0375 20.0011 10.0193 20.0011 10C20.0011 4.47727 15.5239 0 10.0011 0C4.47841 0 0 4.47727 0 10C0 10.0193 0.00113639 10.0375 0.00113639 10.0568C0.0318182 4.56023 4.49659 0.113636 10 0.113636Z",fill:"white",fillOpacity:"0.2"}),(0,F.jsx)("path",{d:"M10 19.8865C15.5034 19.8865 19.9682 15.4399 20 9.94336C20 9.96268 20.0011 9.98086 20.0011 10.0002C20.0011 15.5229 15.5239 20.0002 10.0011 20.0002C4.47841 20.0002 0 15.5229 0 10.0002C0 9.98086 0.00113639 9.96268 0.00113639 9.94336C0.0318182 15.4399 4.49659 19.8865 10.0011 19.8865H10Z",fill:"black",fillOpacity:"0.15"})]})}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("filter",{id:"filter0_ii_927_5781",x:0,y:"-0.235294",width:20,height:"20.4706",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,F.jsx)("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),(0,F.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,F.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,F.jsx)("feOffset",{dy:"0.235294"}),(0,F.jsx)("feGaussianBlur",{stdDeviation:"0.235294"}),(0,F.jsx)("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),(0,F.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),(0,F.jsx)("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_927_5781"}),(0,F.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,F.jsx)("feOffset",{dy:"-0.235294"}),(0,F.jsx)("feGaussianBlur",{stdDeviation:"0.235294"}),(0,F.jsx)("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),(0,F.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}),(0,F.jsx)("feBlend",{mode:"normal",in2:"effect1_innerShadow_927_5781",result:"effect2_innerShadow_927_5781"})]}),(0,F.jsxs)("linearGradient",{id:"paint0_linear_927_5781",x1:"2.42521",y1:"7.61591",x2:"8.39112",y2:"4.13068",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#A52714",stopOpacity:"0.6"}),(0,F.jsx)("stop",{offset:"0.66",stopColor:"#A52714",stopOpacity:0})]}),(0,F.jsxs)("linearGradient",{id:"paint1_linear_927_5781",x1:"11.6932",y1:"17.7844",x2:"5.06136",y2:"13.8981",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#055524",stopOpacity:"0.4"}),(0,F.jsx)("stop",{offset:"0.33",stopColor:"#055524",stopOpacity:0})]}),(0,F.jsxs)("linearGradient",{id:"paint2_linear_927_5781",x1:"12.9438",y1:"4.75004",x2:"14.6143",y2:"12.0569",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#EA6100",stopOpacity:"0.3"}),(0,F.jsx)("stop",{offset:"0.66",stopColor:"#EA6100",stopOpacity:0})]}),(0,F.jsxs)("linearGradient",{id:"paint3_linear_927_5781",x1:"12.9428",y1:"4.75004",x2:"14.6132",y2:"12.0569",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#EA6100",stopOpacity:"0.3"}),(0,F.jsx)("stop",{offset:"0.66",stopColor:"#EA6100",stopOpacity:0})]}),(0,F.jsxs)("linearGradient",{id:"paint4_linear_927_5781",x1:"2.42441",y1:"7.61591",x2:"8.39032",y2:"4.13068",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#A52714",stopOpacity:"0.6"}),(0,F.jsx)("stop",{offset:"0.66",stopColor:"#A52714",stopOpacity:0})]}),(0,F.jsxs)("radialGradient",{id:"paint5_radial_927_5781",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.56818 5.44891) scale(9.55455)",children:[(0,F.jsx)("stop",{stopColor:"#3E2723",stopOpacity:"0.2"}),(0,F.jsx)("stop",{offset:1,stopColor:"#3E2723",stopOpacity:0})]}),(0,F.jsxs)("linearGradient",{id:"paint6_linear_927_5781",x1:"11.6932",y1:"17.7839",x2:"5.06136",y2:"13.8976",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#055524",stopOpacity:"0.4"}),(0,F.jsx)("stop",{offset:"0.33",stopColor:"#055524",stopOpacity:0})]}),(0,F.jsxs)("radialGradient",{id:"paint7_radial_927_5781",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(1.57975 4.60463) scale(8.86818)",children:[(0,F.jsx)("stop",{stopColor:"#3E2723",stopOpacity:"0.2"}),(0,F.jsx)("stop",{offset:1,stopColor:"#3E2723",stopOpacity:0})]}),(0,F.jsxs)("radialGradient",{id:"paint8_radial_927_5781",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.97775 10.0157) scale(9.98523)",children:[(0,F.jsx)("stop",{stopColor:"#263238",stopOpacity:"0.2"}),(0,F.jsx)("stop",{offset:1,stopColor:"#263238",stopOpacity:0})]}),(0,F.jsx)("clipPath",{id:"clip0_927_5781",children:(0,F.jsx)("rect",{width:20,height:20,rx:10,fill:"white"})})]})]}),rm=(0,F.jsxs)("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsxs)("g",{clipPath:"url(#clip0_927_5847)",children:[(0,F.jsx)("path",{d:"M19.011 6.71023C18.5898 5.69685 17.7355 4.60269 17.0665 4.25681C17.5436 5.18063 17.8747 6.17276 18.0481 7.19792L18.0499 7.21417C16.954 4.48315 15.0963 3.38023 13.5782 0.981835C13.5014 0.860539 13.4246 0.738994 13.3498 0.610696C13.3071 0.537418 13.2728 0.471393 13.2431 0.410621C13.1801 0.288713 13.1316 0.159878 13.0985 0.0267267C13.0985 0.0205825 13.0963 0.0146369 13.0923 0.0100242C13.0882 0.00541151 13.0826 0.00245454 13.0765 0.00171737C13.0705 7.85858e-05 13.0642 7.85858e-05 13.0582 0.00171737C13.057 0.00171737 13.055 0.00396821 13.0535 0.0044684C13.052 0.00496859 13.0487 0.00721943 13.0465 0.00821981L13.0502 0.00171737C10.6156 1.42725 9.78901 4.06574 9.71399 5.38624C8.74136 5.45292 7.81141 5.81121 7.04549 6.41437C6.96561 6.34671 6.88212 6.28343 6.79539 6.2248C6.57456 5.45174 6.56514 4.6336 6.76813 3.85566C5.87401 4.28877 5.07954 4.90279 4.43501 5.65884H4.43051C4.04636 5.17191 4.07337 3.5663 4.09538 3.23093C3.98174 3.2766 3.87326 3.33419 3.77176 3.40274C3.43264 3.64477 3.11562 3.91635 2.8244 4.2143C2.49255 4.55075 2.18946 4.91441 1.91831 5.30146V5.30296V5.3012C1.29521 6.18444 0.853213 7.18234 0.617826 8.23731L0.604821 8.30133C0.586564 8.38661 0.52079 8.81377 0.509535 8.90656C0.509535 8.91381 0.508035 8.92056 0.507285 8.92781C0.42244 9.36882 0.369864 9.81542 0.349976 10.2641V10.3141C0.354259 12.7396 1.26772 15.0754 2.91002 16.8604C4.55233 18.6454 6.80415 19.7498 9.22094 19.9556C11.6377 20.1615 14.0439 19.4538 15.9644 17.9723C17.8849 16.4908 19.1803 14.3431 19.5947 11.9532C19.6109 11.8282 19.6242 11.7044 19.6387 11.5781C19.8384 9.92791 19.6222 8.25404 19.01 6.70873L19.011 6.71023ZM7.83928 14.2981C7.88455 14.3198 7.92707 14.3433 7.97358 14.3641L7.98034 14.3684C7.93332 14.3458 7.8863 14.3224 7.83928 14.2981ZM18.0501 7.21692V7.20767L18.0519 7.21792L18.0501 7.21692Z",fill:"url(#paint0_linear_927_5847)"}),(0,F.jsx)("path",{d:"M19.0109 6.71026C18.5898 5.69688 17.7354 4.60272 17.0664 4.25684C17.5435 5.18066 17.8746 6.17278 18.0481 7.19794V7.20719L18.0498 7.21745C18.797 9.35551 18.689 11.6997 17.7482 13.7599C16.6373 16.1435 13.9493 18.5867 9.7402 18.4667C5.19349 18.3379 1.18699 14.9629 0.439211 10.5437C0.30291 9.84668 0.439211 9.4933 0.507737 8.92684C0.414265 9.36685 0.362102 9.81463 0.351929 10.2643V10.3144C0.356212 12.7399 1.26967 15.0757 2.91198 16.8607C4.55429 18.6456 6.8061 19.7501 9.2229 19.9559C11.6397 20.1617 14.0458 19.4541 15.9664 17.9725C17.8869 16.491 19.1822 14.3434 19.5966 11.9535C19.6129 11.8284 19.6262 11.7046 19.6407 11.5783C19.8403 9.92819 19.6242 8.25431 19.0119 6.70901L19.0109 6.71026Z",fill:"url(#paint1_radial_927_5847)"}),(0,F.jsx)("path",{d:"M19.0109 6.71026C18.5898 5.69688 17.7354 4.60272 17.0664 4.25684C17.5435 5.18066 17.8746 6.17278 18.0481 7.19794V7.20719L18.0498 7.21745C18.797 9.35551 18.689 11.6997 17.7482 13.7599C16.6373 16.1435 13.9493 18.5867 9.7402 18.4667C5.19349 18.3379 1.18699 14.9629 0.439211 10.5437C0.30291 9.84668 0.439211 9.4933 0.507737 8.92684C0.414265 9.36685 0.362102 9.81463 0.351929 10.2643V10.3144C0.356212 12.7399 1.26967 15.0757 2.91198 16.8607C4.55429 18.6456 6.8061 19.7501 9.2229 19.9559C11.6397 20.1617 14.0458 19.4541 15.9664 17.9725C17.8869 16.491 19.1822 14.3434 19.5966 11.9535C19.6129 11.8284 19.6262 11.7046 19.6407 11.5783C19.8403 9.92819 19.6242 8.25431 19.0119 6.70901L19.0109 6.71026Z",fill:"url(#paint2_radial_927_5847)"}),(0,F.jsx)("path",{d:"M14.2993 7.84794C14.3203 7.8627 14.3398 7.87745 14.3595 7.89221C14.1161 7.46047 13.813 7.06519 13.4592 6.71802C10.4456 3.70439 12.6696 0.18557 13.0445 0.00550206L13.0483 0C10.6136 1.42553 9.78706 4.06402 9.71204 5.38452C9.82508 5.37677 9.93712 5.36726 10.0527 5.36726C10.9164 5.36893 11.7644 5.59929 12.5103 6.03492C13.2562 6.47055 13.8734 7.09592 14.2993 7.84744V7.84794Z",fill:"url(#paint3_radial_927_5847)"}),(0,F.jsx)("path",{d:"M10.0577 8.45061C10.0417 8.6917 9.18992 9.52326 8.89206 9.52326C6.13602 9.52326 5.68835 11.1906 5.68835 11.1906C5.8104 12.5947 6.78877 13.7516 7.97146 14.3618C8.02548 14.3898 8.08025 14.4151 8.13502 14.4399C8.22989 14.4819 8.32476 14.5207 8.41963 14.5564C8.82553 14.7 9.25065 14.7821 9.68085 14.7997C14.5127 15.0263 15.448 9.02257 11.9615 7.27942C12.7839 7.1724 13.6168 7.37463 14.2986 7.84688C13.8727 7.09536 13.2555 6.46999 12.5096 6.03436C11.7637 5.59873 10.9158 5.36837 10.052 5.3667C9.93695 5.3667 9.82441 5.3762 9.71136 5.38396C8.73874 5.45064 7.80879 5.80893 7.04286 6.41209C7.19067 6.53714 7.35748 6.7042 7.70886 7.05058C8.36661 7.69857 10.0535 8.36983 10.0572 8.44861L10.0577 8.45061Z",fill:"url(#paint4_radial_927_5847)"}),(0,F.jsx)("path",{d:"M10.0577 8.45061C10.0417 8.6917 9.18992 9.52326 8.89206 9.52326C6.13602 9.52326 5.68835 11.1906 5.68835 11.1906C5.8104 12.5947 6.78877 13.7516 7.97146 14.3618C8.02548 14.3898 8.08025 14.4151 8.13502 14.4399C8.22989 14.4819 8.32476 14.5207 8.41963 14.5564C8.82553 14.7 9.25065 14.7821 9.68085 14.7997C14.5127 15.0263 15.448 9.02257 11.9615 7.27942C12.7839 7.1724 13.6168 7.37463 14.2986 7.84688C13.8727 7.09536 13.2555 6.46999 12.5096 6.03436C11.7637 5.59873 10.9158 5.36837 10.052 5.3667C9.93695 5.3667 9.82441 5.3762 9.71136 5.38396C8.73874 5.45064 7.80879 5.80893 7.04286 6.41209C7.19067 6.53714 7.35748 6.7042 7.70886 7.05058C8.36661 7.69857 10.0535 8.36983 10.0572 8.44861L10.0577 8.45061Z",fill:"url(#paint5_radial_927_5847)"}),(0,F.jsx)("path",{d:"M6.59134 6.0923C6.66987 6.14231 6.73464 6.18583 6.79141 6.2251C6.57058 5.45204 6.56117 4.63389 6.76415 3.85596C5.87003 4.28907 5.07556 4.90308 4.43103 5.65913C4.4783 5.65788 5.88432 5.63262 6.59134 6.0923Z",fill:"url(#paint6_radial_927_5847)"}),(0,F.jsx)("path",{d:"M0.437567 10.5439C1.1856 14.963 5.19185 18.3393 9.73855 18.4668C13.9476 18.5859 16.6361 16.1425 17.7466 13.7601C18.6873 11.6998 18.7954 9.35569 18.0482 7.21762V7.20837C18.0482 7.20111 18.0467 7.19686 18.0482 7.19911L18.0499 7.21537C18.3938 9.46046 17.2519 11.6345 15.4665 13.1076L15.4609 13.1201C11.9821 15.9536 8.6534 14.8292 7.98064 14.3706C7.93363 14.348 7.88661 14.3246 7.83959 14.3003C5.81158 13.3309 4.97352 11.4842 5.15358 9.89862C4.67218 9.90573 4.19905 9.77307 3.79151 9.51672C3.38397 9.26038 3.05952 8.89134 2.85747 8.45433C3.38987 8.1282 3.99692 7.94382 4.62077 7.91878C5.24461 7.89374 5.86448 8.02887 6.42131 8.31128C7.56906 8.83225 8.87507 8.8836 10.0602 8.45433C10.0564 8.37555 8.36954 7.70405 7.71179 7.05631C7.36041 6.70993 7.1936 6.54312 7.04579 6.41782C6.96591 6.35016 6.88243 6.28688 6.7957 6.22825C6.73818 6.18898 6.6734 6.14647 6.59562 6.09545C5.88861 5.63578 4.48258 5.66104 4.43607 5.66229H4.43156C4.04742 5.17535 4.07443 3.56975 4.09644 3.23438C3.9828 3.28005 3.87431 3.33764 3.77282 3.40619C3.4337 3.64822 3.11667 3.91979 2.82546 4.21774C2.49242 4.55325 2.18808 4.91607 1.91562 5.3024V5.3039V5.30215C1.29252 6.18539 0.850521 7.18329 0.615133 8.23825C0.610381 8.25801 0.266002 9.76357 0.435816 10.5444L0.437567 10.5439Z",fill:"url(#paint7_radial_927_5847)"}),(0,F.jsx)("path",{d:"M13.459 6.71761C13.8128 7.06516 14.1159 7.46087 14.3593 7.89305C14.4126 7.93331 14.4624 7.97333 14.5046 8.01209C16.7022 10.0378 15.5508 12.9014 15.465 13.104C17.2502 11.6332 18.3911 9.45763 18.0485 7.21179C16.952 4.47826 15.0923 3.37535 13.5768 0.976952C13.5 0.855657 13.4232 0.734111 13.3484 0.605813C13.3057 0.532535 13.2714 0.466511 13.2417 0.405738C13.1787 0.283831 13.1302 0.154995 13.0971 0.0218439C13.0971 0.0156997 13.0949 0.0097541 13.0909 0.0051414C13.0868 0.000528701 13.0812 -0.00242828 13.0751 -0.00316545C13.0691 -0.00480423 13.0628 -0.00480423 13.0568 -0.00316545C13.0556 -0.00316545 13.0536 -0.000914601 13.0521 -0.000414413C13.0506 8.57743e-05 13.0473 0.00233662 13.0451 0.00333699C12.6702 0.181154 10.4466 3.70222 13.4602 6.71335L13.459 6.71761Z",fill:"url(#paint8_radial_927_5847)"}),(0,F.jsx)("path",{d:"M14.5043 8.01315C14.462 7.97439 14.4122 7.93437 14.359 7.8941C14.3392 7.87935 14.3197 7.86459 14.2987 7.84984C13.6169 7.37759 12.784 7.17536 11.9616 7.28238C15.4479 9.02553 14.5125 15.0278 9.68095 14.8027C9.25075 14.785 8.82562 14.703 8.41973 14.5594C8.32486 14.5238 8.22999 14.485 8.13512 14.4428C8.08035 14.4178 8.02558 14.3928 7.97156 14.3648L7.97831 14.369C8.65206 14.829 11.9798 15.9526 15.4586 13.1186L15.4641 13.1061C15.5509 12.9035 16.7023 10.0399 14.5038 8.01415L14.5043 8.01315Z",fill:"url(#paint9_radial_927_5847)"}),(0,F.jsx)("path",{d:"M5.68842 11.1892C5.68842 11.1892 6.13583 9.52179 8.89212 9.52179C9.18998 9.52179 10.0425 8.69023 10.0578 8.44914C8.8727 8.8784 7.56669 8.82706 6.41894 8.30608C5.86211 8.02367 5.24224 7.88855 4.61839 7.91359C3.99455 7.93863 3.3875 8.123 2.8551 8.44914C3.05715 8.88615 3.3816 9.25518 3.78914 9.51153C4.19668 9.76787 4.66981 9.90053 5.15121 9.89343C4.97165 11.4783 5.80946 13.3247 7.83722 14.2951C7.88249 14.3168 7.925 14.3403 7.97152 14.3611C6.78783 13.7496 5.81046 12.5932 5.68842 11.1899V11.1892Z",fill:"url(#paint10_radial_927_5847)"}),(0,F.jsx)("path",{d:"M19.0112 6.71023C18.59 5.69685 17.7357 4.60269 17.0667 4.25681C17.5438 5.18063 17.8749 6.17276 18.0483 7.19792L18.0501 7.21417C16.9542 4.48315 15.0965 3.38023 13.5784 0.981835C13.5016 0.860539 13.4249 0.738994 13.3501 0.610696C13.3073 0.537418 13.2731 0.471393 13.2433 0.410621C13.1803 0.288713 13.1318 0.159878 13.0987 0.0267267C13.0988 0.0205825 13.0966 0.0146369 13.0925 0.0100242C13.0884 0.00541151 13.0828 0.00245454 13.0767 0.00171737C13.0708 7.85859e-05 13.0644 7.85859e-05 13.0585 0.00171737C13.0572 0.00171737 13.0552 0.00396821 13.0537 0.0044684C13.0522 0.00496859 13.049 0.00721943 13.0467 0.00821981L13.0505 0.00171737C10.6158 1.42725 9.78925 4.06574 9.71422 5.38624C9.82726 5.37848 9.9393 5.36898 10.0548 5.36898C10.9186 5.37065 11.7666 5.60101 12.5125 6.03664C13.2584 6.47227 13.8756 7.09764 14.3014 7.84916C13.6196 7.37691 12.7868 7.17468 11.9643 7.2817C15.4506 9.02485 14.5153 15.0271 9.68371 14.802C9.25351 14.7843 8.82838 14.7023 8.42248 14.5587C8.32761 14.5232 8.23275 14.4843 8.13788 14.4421C8.08311 14.4171 8.02834 14.3921 7.97432 14.3641L7.98107 14.3684C7.93405 14.3458 7.88703 14.3224 7.84002 14.2981C7.88528 14.3198 7.9278 14.3433 7.97432 14.3641C6.79062 13.7524 5.81326 12.5959 5.69121 11.1929C5.69121 11.1929 6.13863 9.52554 8.89491 9.52554C9.19277 9.52554 10.0453 8.69398 10.0606 8.45289C10.0568 8.37411 8.36996 7.7026 7.71222 7.05486C7.36084 6.70848 7.19402 6.54167 7.04622 6.41637C6.96634 6.34871 6.88285 6.28543 6.79612 6.2268C6.57529 5.45374 6.56588 4.6356 6.76886 3.85766C5.87474 4.29077 5.08027 4.90479 4.43574 5.66084H4.43124C4.04709 5.17391 4.0741 3.5683 4.09611 3.23293C3.98247 3.2786 3.87399 3.33619 3.77249 3.40474C3.43337 3.64677 3.11635 3.91835 2.82514 4.2163C2.49328 4.55275 2.19019 4.91641 1.91905 5.30345V5.30496V5.30321C1.29595 6.18644 0.853946 7.18434 0.618558 8.23931L0.605554 8.30333C0.587297 8.38861 0.505516 8.82177 0.493762 8.91481C0.418959 9.36194 0.371188 9.81318 0.350708 10.2661V10.3161C0.354992 12.7416 1.26845 15.0774 2.91076 16.8624C4.55307 18.6474 6.80488 19.7518 9.22168 19.9576C11.6385 20.1635 14.0446 19.4558 15.9652 17.9743C17.8857 16.4928 19.181 14.3451 19.5954 11.9552C19.6117 11.8302 19.6249 11.7064 19.6394 11.5801C19.8391 9.92991 19.623 8.25604 19.0107 6.71073L19.0112 6.71023ZM18.0496 7.20817L18.0513 7.21842L18.0496 7.20817Z",fill:"url(#paint11_linear_927_5847)"})]}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("linearGradient",{id:"paint0_linear_927_5847",x1:"17.728",y1:"3.09786",x2:"1.63621",y2:"18.6237",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{offset:"0.048",stopColor:"#FFF44F"}),(0,F.jsx)("stop",{offset:"0.111",stopColor:"#FFE847"}),(0,F.jsx)("stop",{offset:"0.225",stopColor:"#FFC830"}),(0,F.jsx)("stop",{offset:"0.368",stopColor:"#FF980E"}),(0,F.jsx)("stop",{offset:"0.401",stopColor:"#FF8B16"}),(0,F.jsx)("stop",{offset:"0.462",stopColor:"#FF672A"}),(0,F.jsx)("stop",{offset:"0.534",stopColor:"#FF3647"}),(0,F.jsx)("stop",{offset:"0.705",stopColor:"#E31587"})]}),(0,F.jsxs)("radialGradient",{id:"paint1_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(17.1052 2.25108) scale(20.2076)",children:[(0,F.jsx)("stop",{offset:"0.129",stopColor:"#FFBD4F"}),(0,F.jsx)("stop",{offset:"0.186",stopColor:"#FFAC31"}),(0,F.jsx)("stop",{offset:"0.247",stopColor:"#FF9D17"}),(0,F.jsx)("stop",{offset:"0.283",stopColor:"#FF980E"}),(0,F.jsx)("stop",{offset:"0.403",stopColor:"#FF563B"}),(0,F.jsx)("stop",{offset:"0.467",stopColor:"#FF3750"}),(0,F.jsx)("stop",{offset:"0.71",stopColor:"#F5156C"}),(0,F.jsx)("stop",{offset:"0.782",stopColor:"#EB0878"}),(0,F.jsx)("stop",{offset:"0.86",stopColor:"#E50080"})]}),(0,F.jsxs)("radialGradient",{id:"paint2_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.6024 10.5042) scale(20.2076)",children:[(0,F.jsx)("stop",{offset:"0.3",stopColor:"#960E18"}),(0,F.jsx)("stop",{offset:"0.351",stopColor:"#B11927",stopOpacity:"0.74"}),(0,F.jsx)("stop",{offset:"0.435",stopColor:"#DB293D",stopOpacity:"0.343"}),(0,F.jsx)("stop",{offset:"0.497",stopColor:"#F5334B",stopOpacity:"0.094"}),(0,F.jsx)("stop",{offset:"0.53",stopColor:"#FF3750",stopOpacity:0})]}),(0,F.jsxs)("radialGradient",{id:"paint3_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(12.1034 -2.25084) scale(14.638)",children:[(0,F.jsx)("stop",{offset:"0.132",stopColor:"#FFF44F"}),(0,F.jsx)("stop",{offset:"0.252",stopColor:"#FFDC3E"}),(0,F.jsx)("stop",{offset:"0.506",stopColor:"#FF9D12"}),(0,F.jsx)("stop",{offset:"0.526",stopColor:"#FF980E"})]}),(0,F.jsxs)("radialGradient",{id:"paint4_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(7.35173 15.7558) scale(9.62111)",children:[(0,F.jsx)("stop",{offset:"0.353",stopColor:"#3A8EE6"}),(0,F.jsx)("stop",{offset:"0.472",stopColor:"#5C79F0"}),(0,F.jsx)("stop",{offset:"0.669",stopColor:"#9059FF"}),(0,F.jsx)("stop",{offset:1,stopColor:"#C139E6"})]}),(0,F.jsxs)("radialGradient",{id:"paint5_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(10.5799 8.76923) rotate(-13.5916) scale(5.10194 5.97309)",children:[(0,F.jsx)("stop",{offset:"0.206",stopColor:"#9059FF",stopOpacity:0}),(0,F.jsx)("stop",{offset:"0.278",stopColor:"#8C4FF3",stopOpacity:"0.064"}),(0,F.jsx)("stop",{offset:"0.747",stopColor:"#7716A8",stopOpacity:"0.45"}),(0,F.jsx)("stop",{offset:"0.975",stopColor:"#6E008B",stopOpacity:"0.6"})]}),(0,F.jsxs)("radialGradient",{id:"paint6_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.35238 1.50057) scale(6.9226)",children:[(0,F.jsx)("stop",{stopColor:"#FFE226"}),(0,F.jsx)("stop",{offset:"0.121",stopColor:"#FFDB27"}),(0,F.jsx)("stop",{offset:"0.295",stopColor:"#FFC82A"}),(0,F.jsx)("stop",{offset:"0.502",stopColor:"#FFA930"}),(0,F.jsx)("stop",{offset:"0.732",stopColor:"#FF7E37"}),(0,F.jsx)("stop",{offset:"0.792",stopColor:"#FF7139"})]}),(0,F.jsxs)("radialGradient",{id:"paint7_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(14.8545 -3.00121) scale(29.5361)",children:[(0,F.jsx)("stop",{offset:"0.113",stopColor:"#FFF44F"}),(0,F.jsx)("stop",{offset:"0.456",stopColor:"#FF980E"}),(0,F.jsx)("stop",{offset:"0.622",stopColor:"#FF5634"}),(0,F.jsx)("stop",{offset:"0.716",stopColor:"#FF3647"}),(0,F.jsx)("stop",{offset:"0.904",stopColor:"#E31587"})]}),(0,F.jsxs)("radialGradient",{id:"paint8_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(12.3996 -1.36343) rotate(83.976) scale(21.6445 14.2051)",children:[(0,F.jsx)("stop",{stopColor:"#FFF44F"}),(0,F.jsx)("stop",{offset:"0.06",stopColor:"#FFE847"}),(0,F.jsx)("stop",{offset:"0.168",stopColor:"#FFC830"}),(0,F.jsx)("stop",{offset:"0.304",stopColor:"#FF980E"}),(0,F.jsx)("stop",{offset:"0.356",stopColor:"#FF8B16"}),(0,F.jsx)("stop",{offset:"0.455",stopColor:"#FF672A"}),(0,F.jsx)("stop",{offset:"0.57",stopColor:"#FF3647"}),(0,F.jsx)("stop",{offset:"0.737",stopColor:"#E31587"})]}),(0,F.jsxs)("radialGradient",{id:"paint9_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.35233 4.00165) scale(18.4369)",children:[(0,F.jsx)("stop",{offset:"0.137",stopColor:"#FFF44F"}),(0,F.jsx)("stop",{offset:"0.48",stopColor:"#FF980E"}),(0,F.jsx)("stop",{offset:"0.592",stopColor:"#FF5634"}),(0,F.jsx)("stop",{offset:"0.655",stopColor:"#FF3647"}),(0,F.jsx)("stop",{offset:"0.904",stopColor:"#E31587"})]}),(0,F.jsxs)("radialGradient",{id:"paint10_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(14.1041 5.00184) scale(20.1801)",children:[(0,F.jsx)("stop",{offset:"0.094",stopColor:"#FFF44F"}),(0,F.jsx)("stop",{offset:"0.231",stopColor:"#FFE141"}),(0,F.jsx)("stop",{offset:"0.509",stopColor:"#FFAF1E"}),(0,F.jsx)("stop",{offset:"0.626",stopColor:"#FF980E"})]}),(0,F.jsxs)("linearGradient",{id:"paint11_linear_927_5847",x1:"17.5331",y1:"3.01533",x2:"3.84302",y2:"16.708",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{offset:"0.167",stopColor:"#FFF44F",stopOpacity:"0.8"}),(0,F.jsx)("stop",{offset:"0.266",stopColor:"#FFF44F",stopOpacity:"0.634"}),(0,F.jsx)("stop",{offset:"0.489",stopColor:"#FFF44F",stopOpacity:"0.217"}),(0,F.jsx)("stop",{offset:"0.6",stopColor:"#FFF44F",stopOpacity:0})]}),(0,F.jsx)("clipPath",{id:"clip0_927_5847",children:(0,F.jsx)("rect",{width:20,height:20,fill:"white"})})]})]}),rC=((0,F.jsxs)("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("path",{d:"M17.2924 5.22043L17.7256 4.15905L16.4982 2.8883C15.8339 2.22404 14.4187 2.61393 14.4187 2.61393L12.8158 0.794434H7.16242L5.55231 2.62115C5.55231 2.62115 4.13715 2.23848 3.47289 2.8883L2.24545 4.15183L2.67866 5.21321L2.13715 6.78721L3.9422 13.6681C4.31765 15.141 4.57036 15.7114 5.63173 16.4623L8.93137 18.7006C9.24906 18.8955 9.63895 19.2349 9.99274 19.2349C10.3465 19.2349 10.7364 18.8955 11.0541 18.7006L14.3538 16.4623C15.4151 15.7114 15.6678 15.141 16.0433 13.6681L17.8483 6.78721L17.2924 5.22043Z",fill:"url(#paint0_linear_927_5861)"}),(0,F.jsx)("path",{d:"M13.9711 3.78343C13.9711 3.78343 16.0433 6.28884 16.0433 6.81592C16.0433 7.35744 15.7834 7.49462 15.5234 7.77621L13.9711 9.43686C13.8267 9.58126 13.5162 9.82675 13.6967 10.2527C13.8772 10.686 14.1299 11.2203 13.8411 11.769C13.5523 12.3249 13.0469 12.6932 12.722 12.6354C12.2387 12.4786 11.7777 12.2602 11.3502 11.9856C11.0758 11.8051 10.1949 11.0758 10.1949 10.7943C10.1949 10.5127 11.1047 10 11.278 9.89895C11.444 9.78343 12.2166 9.33577 12.231 9.16249C12.2455 8.9892 12.2455 8.94588 12.0144 8.51267C11.7834 8.07946 11.379 7.50184 11.4368 7.12639C11.509 6.75094 12.1588 6.54877 12.6426 6.36827L14.1372 5.80509C14.2527 5.74733 14.2238 5.69679 13.8772 5.66068C13.5307 5.6318 12.5559 5.50184 12.1155 5.62458C11.6751 5.74733 10.9386 5.93505 10.8664 6.03614C10.8086 6.13722 10.7509 6.13722 10.8159 6.48379L11.2346 8.75816C11.2635 9.04697 11.3213 9.24191 11.018 9.31411C10.7003 9.38632 10.1733 9.50906 9.99276 9.50906C9.81225 9.50906 9.27796 9.38632 8.96749 9.31411C8.65702 9.24191 8.71478 9.04697 8.75088 8.75816C8.77976 8.46935 9.09745 6.82314 9.16243 6.48379C9.23464 6.13722 9.16965 6.13722 9.11189 6.03614C9.03969 5.93505 8.29601 5.74733 7.85558 5.62458C7.42236 5.50184 6.44041 5.6318 6.09384 5.66791C5.74727 5.69679 5.71839 5.74011 5.83391 5.81231L7.3285 6.36827C7.80503 6.54877 8.46929 6.75094 8.53428 7.12639C8.60648 7.50906 8.19493 8.07946 7.95666 8.51267C7.71839 8.94588 7.72561 8.9892 7.74005 9.16249C7.75449 9.33577 8.53428 9.78343 8.69312 9.89895C8.86641 10.0073 9.77615 10.5127 9.77615 10.7943C9.77615 11.0758 8.91695 11.8051 8.62814 11.9856C8.20063 12.2602 7.73957 12.4786 7.2563 12.6354C6.93139 12.6932 6.42597 12.3249 6.12994 11.769C5.84113 11.2203 6.10106 10.686 6.27435 10.2527C6.45485 9.81953 6.1516 9.58848 5.99998 9.43686L4.44763 7.77621C4.19493 7.50906 3.935 7.36466 3.935 6.83036C3.935 6.29606 6.0072 3.79787 6.0072 3.79787L7.97832 4.11556C8.20937 4.11556 8.722 3.92061 9.19132 3.75455C9.66063 3.61014 9.98554 3.5957 9.98554 3.5957C9.98554 3.5957 10.3032 3.5957 10.7798 3.75455C11.2563 3.91339 11.7617 4.11556 11.9928 4.11556C12.231 4.11556 13.9783 3.77621 13.9783 3.77621L13.9711 3.78343ZM12.4188 13.3719C12.5487 13.4441 12.4693 13.6029 12.3465 13.6896L10.5126 15.1192C10.3682 15.2636 10.1372 15.4802 9.98554 15.4802C9.83391 15.4802 9.61009 15.2636 9.45846 15.1192C8.8506 14.6351 8.23683 14.1586 7.61731 13.6896C7.50178 13.6029 7.42236 13.4513 7.54511 13.3719L8.62814 12.7943C9.05864 12.5665 9.51417 12.3897 9.98554 12.2672C10.0938 12.2672 10.7798 12.5127 11.3357 12.7943L12.4188 13.3719Z",fill:"white"}),(0,F.jsx)("path",{d:"M14.4332 2.62115L12.8159 0.794434H7.16243L5.55232 2.62115C5.55232 2.62115 4.13716 2.23848 3.4729 2.8883C3.4729 2.8883 5.35016 2.72223 5.99998 3.77638L7.99276 4.11573C8.2238 4.11573 8.73644 3.92079 9.20575 3.75472C9.67507 3.61032 9.99998 3.59588 9.99998 3.59588C9.99998 3.59588 10.3177 3.59588 10.7942 3.75472C11.2707 3.91357 11.7761 4.11573 12.0072 4.11573C12.2455 4.11573 13.9928 3.77638 13.9928 3.77638C14.6426 2.72223 16.5198 2.8883 16.5198 2.8883C15.8556 2.22404 14.4404 2.61393 14.4404 2.61393",fill:"url(#paint1_linear_927_5861)"}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("linearGradient",{id:"paint0_linear_927_5861",x1:"2.13715",y1:"10.1991",x2:"17.8483",y2:"10.1991",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{offset:"0.4",stopColor:"#FF5500"}),(0,F.jsx)("stop",{offset:"0.6",stopColor:"#FF2000"})]}),(0,F.jsxs)("linearGradient",{id:"paint1_linear_927_5861",x1:"3.73384",y1:"2.4883",x2:"16.5198",y2:"2.4883",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#FF452A"}),(0,F.jsx)("stop",{offset:1,stopColor:"#FF2000"})]})]})]}),(0,F.jsxs)("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsxs)("g",{clipPath:"url(#clip0_927_5865)",children:[(0,F.jsx)("path",{d:"M18.0547 14.8828C17.7865 15.0222 17.5099 15.1448 17.2266 15.25C16.3293 15.584 15.3792 15.7533 14.4219 15.75C10.7266 15.75 7.50781 13.2109 7.50781 9.94531C7.51262 9.50803 7.63385 9.07993 7.85905 8.70506C8.08424 8.33019 8.40526 8.0221 8.78906 7.8125C5.44531 7.95312 4.58594 11.4375 4.58594 13.4766C4.58594 19.2578 9.90625 19.8359 11.0547 19.8359C11.6719 19.8359 12.6016 19.6562 13.1641 19.4766L13.2656 19.4453C15.4183 18.7014 17.2534 17.2465 18.4688 15.3203C18.5041 15.2618 18.5192 15.1933 18.5119 15.1253C18.5046 15.0574 18.4752 14.9937 18.4282 14.944C18.3812 14.8944 18.3192 14.8615 18.2518 14.8505C18.1843 14.8394 18.1151 14.8508 18.0547 14.8828Z",fill:"url(#paint0_linear_927_5865)"}),(0,F.jsx)("path",{opacity:"0.35",d:"M18.0547 14.8828C17.7865 15.0222 17.5099 15.1448 17.2266 15.25C16.3293 15.584 15.3792 15.7533 14.4219 15.75C10.7266 15.75 7.50781 13.2109 7.50781 9.94531C7.51262 9.50803 7.63385 9.07993 7.85905 8.70506C8.08424 8.33019 8.40526 8.0221 8.78906 7.8125C5.44531 7.95312 4.58594 11.4375 4.58594 13.4766C4.58594 19.2578 9.90625 19.8359 11.0547 19.8359C11.6719 19.8359 12.6016 19.6562 13.1641 19.4766L13.2656 19.4453C15.4183 18.7014 17.2534 17.2465 18.4688 15.3203C18.5041 15.2618 18.5192 15.1933 18.5119 15.1253C18.5046 15.0574 18.4752 14.9937 18.4282 14.944C18.3812 14.8944 18.3192 14.8615 18.2518 14.8505C18.1843 14.8394 18.1151 14.8508 18.0547 14.8828Z",fill:"url(#paint1_radial_927_5865)"}),(0,F.jsx)("path",{d:"M8.2578 18.8516C7.56239 18.4196 6.95961 17.854 6.48436 17.1875C5.94166 16.4447 5.56809 15.5921 5.38987 14.6896C5.21165 13.787 5.23311 12.8565 5.45272 11.9631C5.67234 11.0697 6.08479 10.2353 6.66115 9.51826C7.23751 8.80123 7.96379 8.21903 8.78905 7.8125C9.03905 7.69531 9.45311 7.49219 10.0078 7.5C10.3981 7.50302 10.7824 7.59627 11.1308 7.77245C11.4791 7.94864 11.7819 8.20299 12.0156 8.51562C12.3299 8.93835 12.5023 9.4498 12.5078 9.97656C12.5078 9.96094 14.4219 3.75781 6.2578 3.75781C2.82811 3.75781 0.00780015 7.00781 0.00780015 9.86719C-0.00584162 11.3776 0.317079 12.8721 0.953112 14.2422C1.99473 16.4602 3.81447 18.2185 6.06689 19.1834C8.3193 20.1483 10.8476 20.2526 13.1719 19.4766C12.3576 19.7337 11.4972 19.811 10.6501 19.7031C9.80297 19.5952 8.98941 19.3047 8.26561 18.8516H8.2578Z",fill:"url(#paint2_linear_927_5865)"}),(0,F.jsx)("path",{opacity:"0.41",d:"M8.2578 18.8516C7.56239 18.4196 6.95961 17.854 6.48436 17.1875C5.94166 16.4447 5.56809 15.5921 5.38987 14.6896C5.21165 13.787 5.23311 12.8565 5.45272 11.9631C5.67234 11.0697 6.08479 10.2353 6.66115 9.51826C7.23751 8.80123 7.96379 8.21903 8.78905 7.8125C9.03905 7.69531 9.45311 7.49219 10.0078 7.5C10.3981 7.50302 10.7824 7.59627 11.1308 7.77245C11.4791 7.94864 11.7819 8.20299 12.0156 8.51562C12.3299 8.93835 12.5023 9.4498 12.5078 9.97656C12.5078 9.96094 14.4219 3.75781 6.2578 3.75781C2.82811 3.75781 0.00780015 7.00781 0.00780015 9.86719C-0.00584162 11.3776 0.317079 12.8721 0.953112 14.2422C1.99473 16.4602 3.81447 18.2185 6.06689 19.1834C8.3193 20.1483 10.8476 20.2526 13.1719 19.4766C12.3576 19.7337 11.4972 19.811 10.6501 19.7031C9.80297 19.5952 8.98941 19.3047 8.26561 18.8516H8.2578Z",fill:"url(#paint3_radial_927_5865)"}),(0,F.jsx)("path",{d:"M11.9062 11.625C11.8359 11.7031 11.6406 11.8203 11.6406 12.0625C11.6406 12.2656 11.7734 12.4688 12.0156 12.6328C13.1328 13.4141 15.25 13.3047 15.2578 13.3047C16.0907 13.3041 16.9081 13.0802 17.625 12.6562C18.3467 12.2341 18.9456 11.6307 19.3622 10.9057C19.7788 10.1808 19.9986 9.35955 20 8.52344C20.0234 6.77344 19.375 5.60937 19.1172 5.09375C17.4531 1.85937 13.8828 4.89564e-08 10 4.89564e-08C7.37202 -0.00025981 4.84956 1.03398 2.97819 2.87904C1.10682 4.7241 0.0369559 7.23166 0 9.85938C0.0390625 7.00781 2.875 4.70312 6.25 4.70312C6.52344 4.70312 8.08594 4.72656 9.53125 5.48438C10.5466 5.98895 11.3875 6.78627 11.9453 7.77344C12.4219 8.60156 12.5078 9.65625 12.5078 10.0781C12.5078 10.5 12.2969 11.1172 11.8984 11.6328L11.9062 11.625Z",fill:"url(#paint4_radial_927_5865)"}),(0,F.jsx)("path",{d:"M11.9062 11.625C11.8359 11.7031 11.6406 11.8203 11.6406 12.0625C11.6406 12.2656 11.7734 12.4688 12.0156 12.6328C13.1328 13.4141 15.25 13.3047 15.2578 13.3047C16.0907 13.3041 16.9081 13.0802 17.625 12.6562C18.3467 12.2341 18.9456 11.6307 19.3622 10.9057C19.7788 10.1808 19.9986 9.35955 20 8.52344C20.0234 6.77344 19.375 5.60937 19.1172 5.09375C17.4531 1.85937 13.8828 4.89564e-08 10 4.89564e-08C7.37202 -0.00025981 4.84956 1.03398 2.97819 2.87904C1.10682 4.7241 0.0369559 7.23166 0 9.85938C0.0390625 7.00781 2.875 4.70312 6.25 4.70312C6.52344 4.70312 8.08594 4.72656 9.53125 5.48438C10.5466 5.98895 11.3875 6.78627 11.9453 7.77344C12.4219 8.60156 12.5078 9.65625 12.5078 10.0781C12.5078 10.5 12.2969 11.1172 11.8984 11.6328L11.9062 11.625Z",fill:"url(#paint5_radial_927_5865)"})]}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("linearGradient",{id:"paint0_linear_927_5865",x1:"4.58594",y1:"13.8281",x2:"18.5234",y2:"13.8281",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#0C59A4"}),(0,F.jsx)("stop",{offset:1,stopColor:"#114A8B"})]}),(0,F.jsxs)("radialGradient",{id:"paint1_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(12.2813 13.9332) scale(7.45313 7.08047)",children:[(0,F.jsx)("stop",{offset:"0.7",stopOpacity:0}),(0,F.jsx)("stop",{offset:"0.9",stopOpacity:"0.5"}),(0,F.jsx)("stop",{offset:1})]}),(0,F.jsxs)("linearGradient",{id:"paint2_linear_927_5865",x1:"11.9297",y1:"7.78125",x2:"3.23436",y2:"17.2578",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#1B9DE2"}),(0,F.jsx)("stop",{offset:"0.2",stopColor:"#1595DF"}),(0,F.jsx)("stop",{offset:"0.7",stopColor:"#0680D7"}),(0,F.jsx)("stop",{offset:1,stopColor:"#0078D4"})]}),(0,F.jsxs)("radialGradient",{id:"paint3_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(5.51209 15.5419) rotate(-81.3844) scale(11.202 9.05011)",children:[(0,F.jsx)("stop",{offset:"0.8",stopOpacity:0}),(0,F.jsx)("stop",{offset:"0.9",stopOpacity:"0.5"}),(0,F.jsx)("stop",{offset:1})]}),(0,F.jsxs)("radialGradient",{id:"paint4_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(2.02266 3.69656) rotate(92.2906) scale(15.8251 33.7043)",children:[(0,F.jsx)("stop",{stopColor:"#35C1F1"}),(0,F.jsx)("stop",{offset:"0.1",stopColor:"#34C1ED"}),(0,F.jsx)("stop",{offset:"0.2",stopColor:"#2FC2DF"}),(0,F.jsx)("stop",{offset:"0.3",stopColor:"#2BC3D2"}),(0,F.jsx)("stop",{offset:"0.7",stopColor:"#36C752"})]}),(0,F.jsxs)("radialGradient",{id:"paint5_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(18.7547 6.03906) rotate(73.7398) scale(7.60156 6.18159)",children:[(0,F.jsx)("stop",{stopColor:"#66EB6E"}),(0,F.jsx)("stop",{offset:1,stopColor:"#66EB6E",stopOpacity:0})]}),(0,F.jsx)("clipPath",{id:"clip0_927_5865",children:(0,F.jsx)("rect",{width:20,height:20,fill:"white"})})]})]})),rv=O.default.forwardRef(({browser:e},t)=>{let n;switch(null!=e?e:eF()){case"chrome":n=rx;break;case"firefox":n=rm;break;case"edge":n=rC}return n?(0,F.jsx)(rb,{children:n}):(0,F.jsx)(F.Fragment,{})});rv.displayName="BrowserIcon";let rw=eW(D.motion.div)`
  z-index: 4;
  position: relative;
  width: 100px;
  height: 100px;
  svg {
    z-index: 3;
    position: relative;
    display: block;
  }
`,rk=eW(D.motion.div)`
  z-index: 2;
  position: absolute;
  overflow: hidden;
  inset: 6px;
  border-radius: 50px;
  background: var(--ck-body-background);
  display: flex;
  align-items: center;
  justify-content: center;
  svg,
  img {
    pointer-events: none;
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    ${e=>e.$small&&z.css`
        width: 85%;
        height: 85%;
      `}
  }
`,ry=eW(D.motion.div)`
  position: absolute;
  inset: -5px;
`,rA=eW(D.motion.div)`
  pointer-events: none;
  user-select: none;
  z-index: 1;
  position: absolute;
  inset: -25%;
  background: var(--ck-body-background);
  div:first-child {
    position: absolute;
    left: 50%;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    &:before {
      position: absolute;
      content: '';
      inset: 0;
      background: var(--ck-spinner-color);
      transform-origin: 0% 50%;
      animation: rotateExpiringSpinner 5000ms ease-in both;
    }
  }
  div:last-child {
    position: absolute;
    left: 0;
    right: 50%;
    top: 0;
    bottom: 0;
    overflow: hidden;
    &:before {
      position: absolute;
      content: '';
      inset: 0;
      background: var(--ck-spinner-color);
      transform-origin: 100% 50%;
      animation: rotateExpiringSpinner 5000ms ease-out 5000ms both;
    }
  }
  @keyframes rotateExpiringSpinner {
    0% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`,rj=eW(D.motion.div)`
  pointer-events: none;
  user-select: none;
  z-index: 1;
  position: absolute;
  inset: 0;
  svg {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation: rotateSpinner 1200ms linear infinite;
  }
  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,rS=({logo:e,smallLogo:t,connecting:n=!0,unavailable:o=!1,countdown:r=!1})=>(0,F.jsxs)(rw,{transition:{duration:.5,ease:[.175,.885,.32,.98]},children:[(0,F.jsx)(rk,{$small:!o&&t,style:o?{borderRadius:0}:void 0,children:e}),(0,F.jsx)(ry,{children:(0,F.jsxs)(R.AnimatePresence,{children:[n&&(0,F.jsx)(rj,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:+!!r}},children:(0,F.jsxs)("svg",{"aria-hidden":"true",width:"102",height:"102",viewBox:"0 0 102 102",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("path",{d:"M52 100C24.3858 100 2 77.6142 2 50",stroke:"url(#paint0_linear_1943_4139)",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("defs",{children:(0,F.jsxs)("linearGradient",{id:"paint0_linear_1943_4139",x1:"2",y1:"48.5",x2:"53",y2:"100",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"var(--ck-spinner-color)"}),(0,F.jsx)("stop",{offset:"1",stopColor:"var(--ck-spinner-color)",stopOpacity:"0"})]})})]})},"Spinner"),r&&(0,F.jsxs)(rA,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},children:[(0,F.jsx)("div",{}),(0,F.jsx)("div",{})]},"ExpiringSpinner")]})})]}),rE="connected",rL="connecting",rM="failed",rN="rejected",rI="notconnected",rF="unavailable",rO={initial:{willChange:"transform,opacity",position:"relative",opacity:0,scale:.95},animate:{position:"relative",opacity:1,scale:1,transition:{ease:[.16,1,.3,1],duration:.4,delay:.05,position:{delay:0}}},exit:{position:"absolute",opacity:0,scale:.95,transition:{ease:[.16,1,.3,1],duration:.3}}},rB=({switchConnectMethod:e,forceState:t})=>{var n,o,r,i,a,s,c,l;let d,{connect:u}=oE({mutation:{onMutate:e=>{e.connector?y(rL):y(rF)},onError(e){console.error(e)},onSettled(e,t){if(t)if(m(!0),setTimeout(()=>m(!1),3500),t.code)switch(t.code){case -32002:y(rI);break;case 4001:y(rN);break;default:y(rM)}else t.message&&("User rejected request"===t.message?y(rN):y(rM));setTimeout(p,100)}}}),{triggerResize:p,connector:h}=ar(),g=h.id,f=nl(g),b={name:null==f?void 0:f.name,shortName:null!=(n=null==f?void 0:f.shortName)?n:null==f?void 0:f.name,icon:null!=(o=null==f?void 0:f.iconConnector)?o:null==f?void 0:f.icon,iconShape:null!=(r=null==f?void 0:f.iconShape)?r:"circle",iconShouldShrink:null==f?void 0:f.iconShouldShrink},[x,m]=(0,O.useState)(!1);(0,O.useState)(9);let C=eF(),v=null==(i=null==f?void 0:f.downloadUrls)?void 0:i[C],w=(null==f?void 0:f.downloadUrls)?{name:Object.keys(null==f?void 0:f.downloadUrls)[0],label:(null==(a=Object.keys(null==f?void 0:f.downloadUrls)[0])?void 0:a.charAt(0).toUpperCase())+(null==(s=Object.keys(null==f?void 0:f.downloadUrls)[0])?void 0:s.slice(1)),url:null==f?void 0:f.downloadUrls[Object.keys(null==f?void 0:f.downloadUrls)[0]]}:void 0,[k,y]=(0,O.useState)(t||((null==f?void 0:f.isInstalled)?rL:rF)),A=t6({CONNECTORNAME:b.name,CONNECTORSHORTNAME:null!=(c=b.shortName)?c:b.name,SUGGESTEDEXTENSIONBROWSER:null!=(l=null==w?void 0:w.label)?l:"your browser"}),j=async()=>{(null==f?void 0:f.isInstalled)&&(null==f?void 0:f.connector)?u({connector:null==f?void 0:f.connector}):y(rF)};return((0,O.useEffect)(()=>{if(k!==rF)return d=setTimeout(j,600),()=>{clearTimeout(d)}},[]),f)?"walletConnect"===(null==f?void 0:f.connector.id)?(0,F.jsx)(ti,{children:(0,F.jsxs)(rn,{children:[(0,F.jsx)(ts,{children:"Invalid State"}),(0,F.jsx)(tl,{children:(0,F.jsx)(oW,{children:"WalletConnect does not have an injection flow. This state should never happen."})})]})}):(0,F.jsx)(ti,{children:(0,F.jsxs)(rn,{children:[(0,F.jsx)(ro,{children:(0,F.jsxs)(rr,{$shake:k===rM||k===rN,$circle:"circle"===b.iconShape,children:[(0,F.jsx)(R.AnimatePresence,{children:(k===rM||k===rN)&&(0,F.jsx)(ri,{"aria-label":"Retry",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileTap:{scale:.9},transition:{duration:.1},onClick:j,children:(0,F.jsx)(ra,{children:(0,F.jsx)(rd,{open:x&&(k===rM||k===rN),message:A.tryAgainQuestion,xOffset:-6,children:(0,F.jsx)(tH,{})})})})}),"circle"===b.iconShape?(0,F.jsx)(rS,{logo:k===rF?(0,F.jsx)("div",{style:{transform:"scale(1.14)",position:"relative",width:"100%"},children:b.icon}):(0,F.jsx)(F.Fragment,{children:b.icon}),smallLogo:b.iconShouldShrink,connecting:k===rL,unavailable:k===rF}):(0,F.jsx)(rf,{logo:k===rF?(0,F.jsx)("div",{style:{transform:"scale(1.14)",position:"relative",width:"100%"},children:b.icon}):(0,F.jsx)(F.Fragment,{children:b.icon}),connecting:k===rL})]})}),(0,F.jsx)(tc,{children:(0,F.jsxs)(R.AnimatePresence,{initial:!1,children:[k===rM&&(0,F.jsxs)(o7,{initial:"initial",animate:"animate",exit:"exit",variants:rO,children:[(0,F.jsxs)(tl,{children:[(0,F.jsxs)(td,{$error:!0,children:[(0,F.jsx)(tz,{}),A.injectionScreen_failed_h1]}),(0,F.jsx)(tu,{children:A.injectionScreen_failed_p})]}),"familyAccountsProvider"===f.id&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(nm,{}),(0,F.jsx)(nY,{onClick:()=>e(g),children:A.connectWithFamilyIOS})]})]},rM),k===rN&&(0,F.jsxs)(o7,{initial:"initial",animate:"animate",exit:"exit",variants:rO,children:[(0,F.jsxs)(tl,{style:"familyAccountsProvider"===f.connector.id?{paddingBottom:12}:{paddingBottom:28},children:[(0,F.jsx)(td,{children:A.injectionScreen_rejected_h1}),(0,F.jsx)(tu,{children:A.injectionScreen_rejected_p})]}),"familyAccountsProvider"===f.id&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(nm,{}),(0,F.jsx)(nY,{onClick:()=>e(g),children:A.connectWithFamilyIOS})]})]},rN),(k===rL||"expiring"===k)&&(0,F.jsx)(o7,{initial:"initial",animate:"animate",exit:"exit",variants:rO,children:(0,F.jsxs)(tl,{style:{paddingBottom:28},children:[(0,F.jsx)(td,{children:"injected"===f.connector.id?A.injectionScreen_connecting_injected_h1:A.injectionScreen_connecting_h1}),(0,F.jsx)(tu,{children:"injected"===f.connector.id?A.injectionScreen_connecting_injected_p:A.injectionScreen_connecting_p})]})},rL),k===rE&&(0,F.jsx)(o7,{initial:"initial",animate:"animate",exit:"exit",variants:rO,children:(0,F.jsxs)(tl,{children:[(0,F.jsxs)(td,{$valid:!0,children:[(0,F.jsx)(tU,{})," ",A.injectionScreen_connected_h1]}),(0,F.jsx)(tu,{children:A.injectionScreen_connected_p})]})},rE),k===rI&&(0,F.jsx)(o7,{initial:"initial",animate:"animate",exit:"exit",variants:rO,children:(0,F.jsxs)(tl,{children:[(0,F.jsx)(td,{children:A.injectionScreen_notconnected_h1}),(0,F.jsx)(tu,{children:A.injectionScreen_notconnected_p})]})},rI),k===rF&&(0,F.jsx)(o7,{initial:"initial",animate:"animate",exit:"exit",variants:rO,children:v?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(tl,{style:{paddingBottom:18},children:[(0,F.jsx)(td,{children:A.injectionScreen_install_h1}),(0,F.jsx)(tu,{children:A.injectionScreen_install_p})]}),!f.isInstalled&&v&&(0,F.jsx)(nY,{href:v,icon:(0,F.jsx)(rv,{}),children:A.installTheExtension})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(tl,{style:{paddingBottom:12},children:[(0,F.jsx)(td,{children:A.injectionScreen_unavailable_h1}),(0,F.jsx)(tu,{children:A.injectionScreen_unavailable_p})]}),!f.isInstalled&&w&&(0,F.jsxs)(nY,{href:null==w?void 0:w.url,icon:(0,F.jsx)(rv,{browser:null==w?void 0:w.name}),children:["Install on ",null==w?void 0:w.label]})]})},rF)]})})]})}):(0,F.jsx)(ti,{children:(0,F.jsxs)(rn,{children:[(0,F.jsx)(ts,{children:"Invalid State"}),(0,F.jsx)(tl,{children:(0,F.jsx)(oW,{children:"No connectors match the id given. This state should never happen."})})]})})},r_=eW(D.motion.div)`
  z-index: 3;
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 2px;
  border-radius: var(--ck-qr-border-radius, 24px);
  background: var(--ck-qr-background, transparent);
  box-shadow: 0 0 0 1px var(--ck-qr-border-color);
  backface-visibility: hidden;
  svg {
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`,rD=eW(D.motion.div)`
  position: absolute;
  inset: 13px;
  svg {
    width: 100% !important;
    height: auto !important;
  }
`,rR=z.keyframes`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`,rT=eW(D.motion.div)`
  --color: var(--ck-qr-dot-color);
  --bg: var(--ck-qr-background, var(--ck-body-background));

  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    z-index: 4;
    position: relative;
    width: 28%;
    height: 28%;
    border-radius: 20px;
    background: var(--bg);
    box-shadow: 0 0 0 7px var(--bg);
  }
  > span {
    z-index: 4;
    position: absolute;
    background: var(--color);
    border-radius: 12px;
    width: 13.25%;
    height: 13.25%;
    box-shadow: 0 0 0 4px var(--bg);
    &:before {
      content: '';
      position: absolute;
      inset: 9px;
      border-radius: 3px;
      box-shadow: 0 0 0 4px var(--bg);
    }
    &:nth-child(1) {
      top: 0;
      left: 0;
    }
    &:nth-child(2) {
      top: 0;
      right: 0;
    }
    &:nth-child(3) {
      bottom: 0;
      left: 0;
    }
  }
  &:before {
    z-index: 3;
    content: '';
    position: absolute;
    inset: 0;
    background: repeat;
    background-size: 1.888% 1.888%;
    background-image: radial-gradient(var(--color) 41%, transparent 41%);
  }
  &:after {
    z-index: 5;
    content: '';
    position: absolute;
    inset: 0;
    transform: scale(1.5) rotate(45deg);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
    background-size: 200% 100%;
    animation: ${rR} 1000ms linear infinite both;
  }
`,rz=eW(D.motion.div)`
  z-index: 6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(50%) scale(0.9999); // Shifting fix
`,rW=eW(D.motion.div)`
  z-index: 6;
  position: absolute;
  left: 50%;
  overflow: hidden;

  transform: translate(-50%, -50%) scale(0.9999); // Shifting fix

  svg {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  ${e=>e.$wcLogo?z.css`
          width: 29%;
          height: 20.5%;
        `:z.css`
          width: 28%;
          height: 28%;
          border-radius: 17px;
          &:before {
            pointer-events: none;
            z-index: 2;
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
          }
        `}
`;function rU({ecl:e="M",size:t=200,uri:n,clearArea:o=!1,image:r,imageBackground:i="transparent"}){let a=76*!!o,s=t-20,c=(0,O.useMemo)(()=>{let t,o,c=[],l=(o=Math.sqrt((t=Array.prototype.slice.call(ep.default.create(n,{errorCorrectionLevel:e}).modules.data,0)).length),t.reduce((e,t,n)=>(n%o==0?e.push([t]):e[e.length-1].push(t))&&e,[])),d=s/l.length;if([{x:0,y:0},{x:1,y:0},{x:0,y:1}].forEach(({x:e,y:t})=>{let n=(l.length-7)*d*e,o=(l.length-7)*d*t;for(let r=0;r<3;r++)c.push((0,F.jsx)("rect",{fill:r%2!=0?"var(--ck-qr-background, var(--ck-body-background))":"var(--ck-qr-dot-color)",rx:-((r-2)*5)+(0===r?2:3),ry:-((r-2)*5)+(0===r?2:3),width:d*(7-2*r),height:d*(7-2*r),x:n+d*r,y:o+d*r},`${r}-${e}-${t}`))}),r){let e=(l.length-7)*d*1,t=(l.length-7)*d*1;c.push((0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("rect",{fill:i,rx:12,ry:12,width:7*d,height:7*d,x:e+0*d,y:t+0*d}),(0,F.jsx)("foreignObject",{width:7*d,height:7*d,x:e+0*d,y:t+0*d,children:(0,F.jsx)("div",{style:{borderRadius:12,overflow:"hidden"},children:r})})]}))}let u=Math.floor((a+25)/d),p=l.length/2-u/2,h=l.length/2+u/2-1;return l.forEach((e,t)=>{e.forEach((e,n)=>{l[t][n]&&!(t<7&&n<7||t>l.length-8&&n<7||t<7&&n>l.length-8)&&(r||!(t>p&&t<h&&n>p&&n<h))&&c.push((0,F.jsx)("circle",{cx:t*d+d/2,cy:n*d+d/2,fill:"var(--ck-qr-dot-color)",r:d/3},`circle-${t}-${n}`))})}),c},[e,s,n]);return(0,F.jsxs)("svg",{height:s,width:s,viewBox:`0 0 ${s} ${s}`,style:{width:s,height:s},children:[(0,F.jsx)("rect",{fill:"transparent",height:s,width:s}),c]})}function rH({value:e,image:t,imageBackground:n,imagePosition:o="center",tooltipMessage:r}){let i=function(){let[e,t]=(0,O.useState)({width:0,height:0});return(0,O.useEffect)(()=>{function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}().width>920&&r?(0,F.jsx)(rd,{xOffset:139,yOffset:5,delay:.1,message:r,children:t}):t;return(0,F.jsx)(r_,{children:(0,F.jsxs)(rD,{children:[t&&(0,F.jsx)(rz,{children:(0,F.jsx)(rW,{$wcLogo:"center"!==o,style:{background:"center"===o?n:void 0},children:i})}),(0,F.jsx)(R.AnimatePresence,{initial:!1,children:e?(0,F.jsx)(D.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,position:"absolute",inset:[0,0]},transition:{duration:.2},children:(0,F.jsx)(rU,{uri:e,size:288,ecl:"M",clearArea:!!("center"===o&&t)})},e):(0,F.jsxs)(rT,{initial:{opacity:.1},animate:{opacity:.1},exit:{opacity:0,position:"absolute",inset:[0,0]},transition:{duration:.2},children:[(0,F.jsx)("span",{}),(0,F.jsx)("span",{}),(0,F.jsx)("span",{}),(0,F.jsx)("div",{})]})})]})})}rH.displayName="CustomQRCode";let rG=eW(D.motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47px;
  height: 52px;
  min-width: 47px;
  min-height: 52px;
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
`,rP=({logo:e})=>{let t=[(0,F.jsx)(ej,{background:!0}),(0,F.jsx)(eS,{background:!0}),(0,F.jsx)(eL,{}),(0,F.jsx)(ew,{}),(0,F.jsx)(ev,{}),(0,F.jsx)(eC,{})];return(0,F.jsx)(rG,{children:(0,F.jsxs)("svg",{"aria-hidden":"true",width:"47",height:"52",viewBox:"0 0 47 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsxs)("g",{mask:"url(#gradient-mask)",children:[(0,F.jsx)("path",{d:"M7 14.5C7 11.4624 9.46243 9 12.5 9H31.5C34.5376 9 37 11.4624 37 14.5V47H7V14.5Z",fill:"var(--ck-graphic-scaniconwithlogos-04)"}),e?(0,F.jsx)("foreignObject",{x:"13",y:"21",width:"18",height:"18",rx:"5",children:(0,F.jsx)("div",{style:{overflow:"hidden",borderRadius:5},children:e})}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("foreignObject",{x:"12",y:"15",width:"9",height:"9",rx:"2.5",children:(0,F.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:t[0]})}),(0,F.jsx)("foreignObject",{x:"23",y:"15",width:"9",height:"9",rx:"2.5",children:(0,F.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:t[1]})}),(0,F.jsx)("foreignObject",{x:"12",y:"26",width:"9",height:"9",rx:"2.5",children:(0,F.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:(0,F.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:t[2]})})}),(0,F.jsx)("foreignObject",{x:"23",y:"26",width:"9",height:"9",rx:"2.5",children:(0,F.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:t[3]})}),(0,F.jsx)("foreignObject",{x:"12",y:"37",width:"9",height:"9",rx:"2.5",children:(0,F.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:t[4]})}),(0,F.jsx)("foreignObject",{x:"23",y:"37",width:"9",height:"9",rx:"2.5",children:(0,F.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:t[5]})})]}),(0,F.jsx)("path",{d:"M36 47V13.7143C36 11.1107 33.8893 9 31.2857 9H12.7143C10.1107 9 8 11.1107 8 13.7143V47",stroke:"url(#paint0_linear_924_12568)",strokeWidth:"2"}),(0,F.jsx)("path",{d:"M15 10H29C29 11.1046 28.1046 12 27 12H17C15.8954 12 15 11.1046 15 10Z",fill:"var(--ck-graphic-scaniconwithlogos-01)"}),(0,F.jsx)("rect",{x:"1",y:"47",width:"43",height:"5",fill:"var(--ck-tooltip-background)"}),(0,F.jsx)("rect",{x:"22",y:"1",width:"24",height:"24",rx:"12",fill:"var(--ck-graphic-scaniconwithlogos-03)",stroke:"var(--ck-tooltip-background)",strokeWidth:"2"}),(0,F.jsx)("rect",{x:"34.5",y:"10",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),(0,F.jsx)("rect",{x:"31",y:"10",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),(0,F.jsx)("rect",{x:"31",y:"13.5",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),(0,F.jsx)("rect",{x:"34.5",y:"13.5",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),(0,F.jsx)("path",{d:"M28.5 10.5V9C28.5 8.17157 29.1716 7.5 30 7.5H31.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M36.5 7.5L38 7.5C38.8284 7.5 39.5 8.17157 39.5 9L39.5 10.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M39.5 15.5L39.5 17C39.5 17.8284 38.8284 18.5 38 18.5L36.5 18.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,F.jsx)("path",{d:"M31.5 18.5L30 18.5C29.1716 18.5 28.5 17.8284 28.5 17L28.5 15.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("linearGradient",{id:"paint0_linear_924_12568",x1:"22",y1:"8.2549",x2:"22",y2:"47",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"var(--ck-graphic-scaniconwithlogos-01)"}),(0,F.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-scaniconwithlogos-02)"})]}),(0,F.jsxs)("linearGradient",{id:"linear-gradient-mask",x1:"47",y1:"42",x2:"47",y2:"47",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"white"}),(0,F.jsx)("stop",{offset:"1",stopColor:"black",stopOpacity:"0"})]}),(0,F.jsx)("mask",{id:"gradient-mask",children:(0,F.jsx)("rect",{x:"0",y:"0",width:"47",height:"52",fill:"url(#linear-gradient-mask)"})})]})]})})},rQ=({switchConnectMethod:e})=>{var t,n,o,r,i,a,s,c;let l=ar(),d=l.connector.id,u=nl(l.connector.id),{open:p,isOpen:h}=o2(),{connect:{getUri:g}}=O.default.useContext(oM),f=g(d),b=f?null!=(n=null==(t=null==u?void 0:u.getWalletConnectDeeplink)?void 0:t.call(u,f))?n:f:void 0,x=t6({CONNECTORNAME:null==u?void 0:u.name});if(!u)return(0,F.jsxs)(F.Fragment,{children:["Wallet not found ",l.connector.id]});let m=null==u?void 0:u.downloadUrls,C={chrome:null==m?void 0:m.chrome,firefox:null==m?void 0:m.firefox,brave:null==m?void 0:m.brave,edge:null==m?void 0:m.edge,safari:null==m?void 0:m.safari};eF();let v=m&&0!==Object.keys(m).length;C&&(Object.keys(C)[0],null==(o=Object.keys(C)[0])||o.charAt(0).toUpperCase(),null==(r=Object.keys(C)[0])||r.slice(1),C[Object.keys(C)[0]]);let w="walletConnect"===d;return(0,F.jsxs)(ti,{children:[(0,F.jsxs)(tl,{style:{paddingBottom:8,gap:14},children:[(0,F.jsx)(rH,{value:b,image:null==u?void 0:u.icon,tooltipMessage:"walletConnect"===d?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(rP,{}),(0,F.jsx)("span",{children:x.scanScreen_tooltip_walletConnect})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(rP,{logo:null==u?void 0:u.icon}),(0,F.jsx)("span",{children:x.scanScreen_tooltip_default})]})}),w?(0,F.jsx)(nm,{}):v&&(0,F.jsx)(nm,{children:x.dontHaveTheApp})]}),w&&(0,F.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:14},children:[(null==(i=l.options)?void 0:i.walletConnectCTA)!=="modal"&&(0,F.jsx)(o9,{variant:"button",string:b,children:(null==(a=l.options)?void 0:a.walletConnectCTA)==="link"?x.copyToClipboard:x.copyCode}),(null==(s=l.options)?void 0:s.walletConnectCTA)!=="link"&&(0,F.jsx)(nY,{icon:(0,F.jsx)(tT,{}),onClick:p,disabled:h,waiting:h,children:(null==(c=l.options)?void 0:c.walletConnectCTA)==="modal"?x.useWalletConnectModal:x.useModal})]}),"familyAccountsProvider"===u.id&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(nm,{}),(0,F.jsx)(nY,{onClick:()=>e(d),children:x.loginWithEmailOrPhone})]}),v&&(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(nY,{onClick:()=>{l.setRoute(an.DOWNLOAD)},download:!0,children:x.getWalletName})})]})},rZ="qrcode",rV="injector",rY=()=>{let e=ar(),t=nl(e.connector.id),n=!(null==t?void 0:t.isInstalled)&&(null==t?void 0:t.getWalletConnectDeeplink),[o,r]=(0,O.useState)(n?rZ:rV);return((0,O.useEffect)(()=>{let n=async()=>{await (null==t?void 0:t.connector.getProvider())||(r(rZ),setTimeout(e.triggerResize,10))};o===rV&&n()},[]),t)?(0,F.jsxs)(R.AnimatePresence,{children:[o===rZ&&(0,F.jsx)(D.motion.div,{initial:"initial",animate:"animate",exit:"exit",variants:nf,children:(0,F.jsx)(rQ,{switchConnectMethod:t=>{r(rV),setTimeout(e.triggerResize,10)}})},rZ),o===rV&&(0,F.jsx)(D.motion.div,{initial:"initial",animate:"animate",exit:"exit",variants:nf,children:(0,F.jsx)(rB,{switchConnectMethod:t=>{r(rZ),setTimeout(e.triggerResize,10)}})},rV)]}):(0,F.jsxs)(oW,{children:["Connector not found ",e.connector.id]})},rJ=()=>{var e,t,n;let o=nl(ar().connector.id),r=t6({CONNECTORNAME:null==o?void 0:o.name});if(!o)return(0,F.jsx)(F.Fragment,{children:"Wallet not found"});let i={ios:null==(e=o.downloadUrls)?void 0:e.ios,android:null==(t=o.downloadUrls)?void 0:t.android,redirect:null==(n=o.downloadUrls)?void 0:n.download},a=i.ios&&i.android?r.downloadAppScreen_iosAndroid:i.ios?r.downloadAppScreen_ios:r.downloadAppScreen_android;return(0,F.jsx)(ti,{children:(0,F.jsxs)(tl,{style:{paddingBottom:4,gap:14},children:[i.redirect&&(0,F.jsx)(rH,{value:i.redirect}),!i.redirect&&(0,F.jsx)(F.Fragment,{children:"No download link available"}),(0,F.jsx)(tu,{style:{fontSize:15,lineHeight:"20px",padding:"0 12px"},children:a})]})})},rq=eW(D.motion.div)`
  padding: 18px 0 20px;
  @media only screen and (max-width: ${560}px) {
    padding: 16px 0 20px;
  }
`,rK=eW(D.motion.div)`
  position: relative;
  display: inline-block;
`,rX=eW(D.motion.div)`
  z-index: 3;
  position: absolute;
  bottom: 0px;
  right: -16px;
`,r$=eW(D.motion.div)`
  position: relative;
`,r1=eW(D.motion.div)`
  position: relative;
`,r0=z.keyframes`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`,r2=eW(D.motion.div)`
  width: 25%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: var(--ck-body-background-secondary);
  inset: 0;
  &:before {
    z-index: 4;
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      90deg,
      var(--ck-body-background-transparent) 50%,
      var(--ck-body-background),
      var(--ck-body-background-transparent)
    );
    opacity: 0.75;
    background-size: 200% 100%;
    animation: ${r0} 1000ms linear infinite both;
  }
`,r3=eW(D.motion.div)`
  will-change: transform; // Needed for Safari
  pointer-events: none;
  user-select: none;
  position: relative;
  overflow: hidden;
  margin: 0;
  border-radius: ${e=>`${e.$radius}px`};
  width: ${e=>`${e.$size}px`};
  height: ${e=>`${e.$size}px`};
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  &:before {
    content: '';
    z-index: 1;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
  }
  ${e=>{if(e.$seed){let t=Math.ceil(8*(e.$seed.split("").map(e=>e.charCodeAt(0)).reduce((e,t)=>e+t)%100/100)),n=`0${0===t?1:t}`;return z.css`
        background: var(--ck-ens-${n}-start);
        background: linear-gradient(
          180deg,
          var(--ck-ens-${n}-start) 0%,
          var(--ck-ens-${n}-stop) 100%
        );
      `}}}
`,r5=eW(D.motion.img)`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${e=>+!!e.$loaded};
  will-change: opacity; // Needed for Safari
  transition: opacity 500ms ease;
  transform: scale(1.01); // fixes background color bleeding
`;function r4(){let[e,t]=(0,O.useState)(!1);return(0,O.useEffect)(()=>t(!0),[]),e}let r8=(0,g.createConfig)({chains:[y.mainnet],transports:{[y.mainnet.id]:(0,a.http)()}});function r9(){return oL(1)?void 0:r8}let r6=({address:e,name:t,size:n=96,radius:o=96})=>{var r,i,a;let s=r4(),c=ar(),l=(0,O.useRef)(null),[d,u]=(0,O.useState)(!0),p=r9(),{data:h}=(0,f.useEnsAddress)({chainId:1,name:t,config:p}),{data:g}=(0,b.useEnsName)({chainId:1,address:null!=(r=null!=e?e:h)?r:void 0,config:p}),{data:m}=(0,x.useEnsAvatar)({chainId:1,name:(0,P.normalize)(null!=g?g:""),config:p}),C={address:null!=h?h:e,name:null!=g?g:t,avatar:null!=m?m:void 0};return((0,O.useEffect)(()=>{l.current&&l.current.complete&&0!==l.current.naturalHeight||u(!1)},[m]),s)?(null==(i=c.options)?void 0:i.customAvatar)?(0,F.jsx)("div",{style:{width:n,height:n,borderRadius:o,overflow:"hidden"},children:null==(a=c.options)?void 0:a.customAvatar({address:null!=e?e:null==C?void 0:C.address,ensName:null!=t?t:null==C?void 0:C.name,ensImage:null==C?void 0:C.avatar,size:n,radius:o})}):C.name&&C.avatar?(0,F.jsx)(e8,{style:{pointerEvents:"none"},children:(0,F.jsx)(r3,{$size:n,$seed:C.address,$radius:o,children:(0,F.jsx)(r5,{ref:l,src:C.avatar,alt:C.name,onLoad:()=>u(!0),$loaded:d})})}):(0,F.jsx)(e8,{style:{pointerEvents:"none"},children:(0,F.jsx)(r3,{$size:n,$seed:C.address,$radius:o})}):(0,F.jsx)("div",{style:{width:n,height:n,borderRadius:o}})},r7=({testnet:e,...t})=>(0,F.jsxs)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"black"},children:[(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5611 8.12948C21.0082 7.90729 21.5007 7.79167 22 7.79167C22.4993 7.79167 22.9919 7.90729 23.439 8.12948L23.4408 8.1304L33.0387 12.9293C33.577 13.197 34.031 13.61 34.3478 14.121C34.6649 14.6323 34.833 15.2218 34.8333 15.8234V27.2595C34.833 27.8611 34.6649 28.4511 34.3478 28.9624C34.031 29.4733 33.578 29.8858 33.0398 30.1535L23.4411 34.9528C22.9919 35.1775 22.4963 35.2947 21.994 35.2947C21.4918 35.2947 20.9964 35.1777 20.5472 34.9529L10.9475 30.1531L10.9452 30.1519C10.4071 29.8808 9.95535 29.4646 9.6411 28.9504C9.32739 28.437 9.16312 27.8464 9.16673 27.2448L9.16675 27.2417L10.0004 27.2475H9.16673V27.2448V15.8239C9.16705 15.2223 9.33518 14.6322 9.65222 14.121C9.96906 13.61 10.4221 13.1976 10.9604 12.9298L20.5592 8.1304L20.5611 8.12948ZM21.3031 9.62267L11.8706 14.3389L22 19.4036L32.1294 14.3389L22.697 9.62267C22.4806 9.51531 22.2416 9.45905 22 9.45905C21.7585 9.45905 21.5194 9.51534 21.3031 9.62267ZM10.8341 15.8241C10.8341 15.7785 10.8362 15.733 10.8401 15.6878L21.1663 20.8509V33.3983L11.6955 28.6629C11.4352 28.5315 11.2159 28.3297 11.0638 28.0809C10.9116 27.8318 10.8321 27.5452 10.8341 27.2533L10.8341 27.2475V15.8241ZM22.8337 33.3923L32.2967 28.6608C32.5576 28.5312 32.7772 28.3313 32.9308 28.0836C33.0844 27.836 33.1658 27.5504 33.166 27.259V15.8243C33.1659 15.7786 33.1639 15.7331 33.1599 15.6878L22.8337 20.8509V33.3923Z",fill:"url(#paint0_linear_3546_7073)"}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.8341 15.8241C10.8341 15.7785 10.8362 15.733 10.8401 15.6878L21.1663 20.8509V33.3983L11.6955 28.6629C11.4352 28.5315 11.2159 28.3297 11.0638 28.0809C10.9116 27.8318 10.8321 27.5452 10.8341 27.2533L10.8341 27.2475V15.8241Z",fill:"url(#paint1_linear_3546_7073)",fillOpacity:"0.3"}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("linearGradient",{id:"paint0_linear_3546_7073",x1:"22",y1:"7.79167",x2:"22",y2:"35.2947",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"white"}),(0,F.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0.7"})]}),(0,F.jsxs)("linearGradient",{id:"paint1_linear_3546_7073",x1:"22",y1:"7.79167",x2:"22",y2:"35.2947",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"white"}),(0,F.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0.7"})]})]})]});var ie=({testnet:e,...t})=>(0,F.jsx)(r7,{testnet:!0,...t}),it=({testnet:e,...t})=>(0,F.jsx)("svg",{...t,width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#0052FF"},children:(0,F.jsx)("path",{d:"M21.9756 36C29.721 36 36 29.732 36 22C36 14.268 29.721 8 21.9756 8C14.6271 8 8.59871 13.6419 8 20.8232H26.5371V23.1768H8C8.59871 30.3581 14.6271 36 21.9756 36Z",fill:"white"})}),io=({testnet:e,...t})=>(0,F.jsx)("svg",{...t,width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#2C2D30"},children:(0,F.jsx)("path",{d:"M30.4076 17.2002C29.1337 17.2002 27.9906 17.6998 27.1194 18.506L27.0299 18.4612C26.8302 15.8187 24.6817 13.7344 21.9891 13.7344C19.2966 13.7344 17.1481 15.8187 16.9484 18.4612L16.8589 18.506C15.9877 17.6998 14.8446 17.2002 13.5706 17.2002C10.7438 17.2002 8.45068 19.4947 8.45068 22.3267C8.45068 24.7727 10.8781 26.8709 11.4807 27.3532C14.3144 29.6098 18.0054 30.9293 21.9891 30.9293C25.9729 30.9293 29.6639 29.6098 32.4976 27.3532C33.1036 26.8709 35.5276 24.7762 35.5276 22.3267C35.5276 19.4947 33.2345 17.2002 30.4042 17.2002H30.4076Z",fill:"white"})}),ir=({testnet:e,...t})=>{let n="var(--ck-chain-ethereum-01, #25292E)",o="var(--ck-chain-ethereum-02, #ffffff)";return e&&(n="linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)",o="#fff"),(0,F.jsxs)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:n},children:[(0,F.jsx)("path",{d:"M21.9967 6.99621L21.7955 7.67987V27.5163L21.9967 27.7171L31.2044 22.2744L21.9967 6.99621Z",fill:o}),(0,F.jsx)("path",{d:"M21.9957 6.99621L12.7878 22.2744L21.9957 27.7171V18.0891V6.99621Z",fill:o}),(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9959 36.9996L21.9959 36.9997V36.9995L31.2091 24.0243L21.9959 29.4642L12.788 24.0243L21.9957 36.9993L21.9958 36.9997L21.9959 36.9996Z",fill:o}),(0,F.jsx)("path",{d:"M21.996 27.7181L31.2037 22.2753L21.996 18.09V27.7181Z",fill:o}),(0,F.jsx)("path",{d:"M12.7878 22.2753L21.9957 27.7181V18.09L12.7878 22.2753Z",fill:o})]})},ii=({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#6F41D8"},children:(0,F.jsx)("path",{d:"M29.0015 17.4529C28.4941 17.1572 27.8355 17.1572 27.2773 17.4529L23.3186 19.7271L20.6305 21.2094L16.6719 23.4822C16.1645 23.7792 15.5059 23.7792 14.9476 23.4822L11.8016 21.703C11.2943 21.4074 10.9395 20.8642 10.9395 20.2702V16.7612C10.9395 16.1686 11.2434 15.6255 11.8016 15.3285L14.8954 13.5988C15.4041 13.3018 16.0641 13.3018 16.6224 13.5988L19.7161 15.3285C20.2249 15.6255 20.5796 16.1686 20.5796 16.7612V19.0355L23.2678 17.5024V15.2295C23.2707 14.9343 23.1917 14.6441 23.0395 14.3911C22.8873 14.1381 22.6679 13.9324 22.4056 13.7968L16.6719 10.5353C16.1645 10.2382 15.5059 10.2382 14.9476 10.5353L9.11214 13.7968C8.84992 13.9324 8.63049 14.1381 8.47828 14.3911C8.32607 14.6441 8.24705 14.9343 8.25002 15.2295V21.802C8.25002 22.396 8.55389 22.9391 9.11214 23.2361L14.9476 26.4976C15.455 26.7932 16.115 26.7932 16.6719 26.4976L20.6305 24.2729L23.3186 22.7411L27.2773 20.5177C27.7846 20.2207 28.4433 20.2207 29.0015 20.5177L32.0966 22.2475C32.6054 22.5431 32.9588 23.0863 32.9588 23.6803V27.1893C32.9588 27.7819 32.6563 28.325 32.0966 28.622L29.0029 30.4013C28.4941 30.6983 27.8341 30.6983 27.2773 30.4013L24.1821 28.6715C23.6734 28.3745 23.3186 27.8314 23.3186 27.2387V24.9645L20.6305 26.4976V28.7705C20.6305 29.3631 20.9344 29.9076 21.4926 30.2032L27.3281 33.4647C27.8355 33.7617 28.4941 33.7617 29.0524 33.4647L34.8879 30.2032C35.3953 29.9076 35.75 29.3645 35.75 28.7705V22.198C35.753 21.9028 35.674 21.6126 35.5218 21.3596C35.3695 21.1066 35.1501 20.9009 34.8879 20.7653L29.0029 17.4529H29.0015Z",fill:"white"})}),ia=({testnet:e,...t})=>(0,F.jsxs)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#FF0420"},children:[(0,F.jsx)("path",{d:"M15.5877 27.8473C14.2777 27.8473 13.2045 27.539 12.3679 26.9226C11.5422 26.2952 11.1294 25.4035 11.1294 24.2477C11.1294 24.0055 11.157 23.7082 11.212 23.356C11.3552 22.5634 11.5588 21.6112 11.823 20.4994C12.5715 17.4722 14.5034 15.9586 17.6187 15.9586C18.4664 15.9586 19.2259 16.1017 19.8974 16.3879C20.5689 16.663 21.0973 17.0814 21.4826 17.6428C21.8678 18.1932 22.0605 18.8537 22.0605 19.6242C22.0605 19.8554 22.033 20.1471 21.9779 20.4994C21.8128 21.4791 21.6146 22.4313 21.3835 23.356C20.9982 24.8641 20.3322 25.9924 19.3855 26.741C18.4388 27.4785 17.1729 27.8473 15.5877 27.8473ZM15.8189 25.4695C16.4354 25.4695 16.9582 25.2879 17.3876 24.9247C17.8279 24.5614 18.1416 24.0055 18.3287 23.257C18.5819 22.2222 18.7746 21.3195 18.9067 20.5489C18.9507 20.3178 18.9727 20.0811 18.9727 19.8389C18.9727 18.8372 18.4498 18.3363 17.4041 18.3363C16.7876 18.3363 16.2592 18.5179 15.8189 18.8812C15.3896 19.2445 15.0813 19.8004 14.8943 20.5489C14.6961 21.2865 14.4979 22.1892 14.2998 23.257C14.2557 23.477 14.2337 23.7082 14.2337 23.9504C14.2337 24.9632 14.7622 25.4695 15.8189 25.4695Z",fill:"white"}),(0,F.jsx)("path",{d:"M22.8188 27.6815C22.6977 27.6815 22.6041 27.6429 22.5381 27.5659C22.483 27.4778 22.4665 27.3788 22.4885 27.2687L24.7672 16.5358C24.7892 16.4147 24.8498 16.3156 24.9489 16.2385C25.0479 16.1615 25.1525 16.1229 25.2626 16.1229H29.6548C30.8767 16.1229 31.8564 16.3761 32.5939 16.8825C33.3426 17.3889 33.7168 18.1209 33.7168 19.0786C33.7168 19.3538 33.6838 19.64 33.6177 19.9372C33.3426 21.2032 32.7867 22.1389 31.95 22.7443C31.1244 23.3498 29.9905 23.6525 28.5485 23.6525H26.3194L25.5598 27.2687C25.5377 27.3898 25.4772 27.4888 25.3782 27.5659C25.2791 27.6429 25.1745 27.6815 25.0645 27.6815H22.8188ZM28.6641 21.3738C29.1264 21.3738 29.5282 21.2472 29.8695 20.994C30.2217 20.7408 30.4529 20.3776 30.563 19.9042C30.596 19.717 30.6125 19.552 30.6125 19.4089C30.6125 19.0896 30.519 18.8474 30.3318 18.6823C30.1446 18.5062 29.8255 18.4182 29.3741 18.4182H27.3926L26.7652 21.3738H28.6641Z",fill:"white"}),(0,F.jsx)("rect",{x:"5.5",y:"5.5",width:"33",height:"33",rx:"16.5",fill:"white"}),(0,F.jsx)("path",{d:"M38.5 22C38.5 12.8924 31.0968 5.52416 22 5.5C12.879 5.5 5.5 12.8924 5.5 22C5.5 31.1076 12.9032 38.4758 22 38.5C31.121 38.5 38.5 31.1076 38.5 22ZM21.9758 30.2379V37.7994C15.3226 37.7994 9.92742 32.4122 9.92742 25.7687C9.92742 19.1252 15.3226 13.7379 21.9758 13.7379V6.17643C28.629 6.17643 34.0242 11.5637 34.0242 18.2072C34.0242 24.8507 28.629 30.2379 21.9758 30.2379Z",fill:"#FF0420"}),(0,F.jsx)("path",{d:"M22.0239 16.3223H21.9271C20.6691 18.8347 18.8062 20.6949 16.29 21.9511V22.0477C18.8062 23.304 20.6691 25.1641 21.9271 27.6766H22.0239C23.282 25.1641 25.1449 23.304 27.661 22.0477V21.9511C25.1449 20.6949 23.282 18.8347 22.0239 16.3223Z",fill:"#FF0420"})]}),is=({testnet:e,...t})=>{let n=e?"#ffffff":"#28A0F0";return(0,F.jsxs)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#2C364F"},children:[!e&&(0,F.jsx)("path",{d:"M25.7948 20.5826L28.2683 16.3854L34.9355 26.7696L34.9386 28.7625L34.9168 15.0491C34.9011 14.7137 34.7231 14.407 34.4391 14.2261L22.4357 7.32182C22.1551 7.1838 21.7989 7.18546 21.5187 7.32618C21.4807 7.34524 21.4453 7.36576 21.4113 7.38835L21.3694 7.41467L9.71816 14.1664L9.67298 14.1871C9.61474 14.2137 9.55609 14.2479 9.50076 14.2872C9.27983 14.4456 9.1331 14.68 9.08564 14.9425C9.07859 14.9823 9.0732 15.023 9.07092 15.064L9.08916 26.239L15.2994 16.6138C16.0811 15.3376 17.7847 14.9262 19.3662 14.9488L21.2221 14.9977L10.2862 32.5356L11.5753 33.2778L22.6422 15.0155L27.5338 14.9977L16.4956 33.7209L21.0955 36.3668L21.6451 36.6827C21.8776 36.7772 22.1516 36.7819 22.386 36.6972L34.5581 29.6433L32.2309 30.9918L25.7948 20.5826ZM26.7384 34.175L22.0925 26.8829L24.9287 22.0702L31.0303 31.6876L26.7384 34.175Z",fill:"#2D374B"}),(0,F.jsx)("path",{d:"M22.0924 26.8832L26.7385 34.1751L31.0302 31.6879L24.9286 22.0705L22.0924 26.8832Z",fill:n}),(0,F.jsx)("path",{d:"M34.9387 28.7627L34.9356 26.7698L28.2684 16.3856L25.7949 20.5828L32.2312 30.992L34.5584 29.6435C34.7866 29.4582 34.9248 29.1861 34.9393 28.8926L34.9387 28.7627Z",fill:n}),(0,F.jsx)("path",{d:"M7 30.642L10.2863 32.5356L21.2222 14.9976L19.3663 14.9487C17.785 14.9263 16.0814 15.3375 15.2995 16.6137L9.08927 26.239L7 29.449V30.642V30.642Z",fill:"white"}),(0,F.jsx)("path",{d:"M27.534 14.9977L22.6423 15.0155L11.5754 33.2778L15.4437 35.5049L16.4955 33.7209L27.534 14.9977Z",fill:"white"}),(0,F.jsx)("path",{d:"M37 14.9723C36.9592 13.9493 36.4052 13.013 35.5377 12.4677L23.377 5.47434C22.5187 5.04223 21.4466 5.04161 20.5868 5.47414C20.4852 5.52533 8.76078 12.3251 8.76078 12.3251C8.5985 12.4029 8.44224 12.4955 8.2953 12.6008C7.52081 13.156 7.0487 14.0186 7 14.9661V29.4492L9.08927 26.2392L9.07103 15.0639C9.07352 15.0231 9.0787 14.9827 9.08575 14.9431C9.133 14.6801 9.27994 14.4457 9.50086 14.2872C9.5562 14.2478 21.4806 7.34517 21.5186 7.32611C21.799 7.18538 22.155 7.18373 22.4356 7.32175L34.439 14.226C34.723 14.4069 34.901 14.7137 34.9167 15.049V28.8921C34.9022 29.1856 34.7862 29.4577 34.558 29.643L32.2308 30.9916L31.03 31.6875L26.7383 34.1747L22.3859 36.6969C22.1515 36.7817 21.8773 36.7769 21.645 36.6824L16.4955 33.7206L15.4435 35.5046L20.0713 38.169C20.2243 38.256 20.3607 38.3331 20.4726 38.3961C20.6458 38.4933 20.764 38.5582 20.8056 38.5785C21.1345 38.7383 21.6077 38.8311 22.0342 38.8311C22.4251 38.8311 22.8064 38.7594 23.1672 38.6181L35.8092 31.2971C36.5347 30.7348 36.9617 29.8869 37 28.9686V14.9723Z",fill:e?"#ffffff":"#96BEDC"})]})},ic=({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#6CD544"},children:(0,F.jsx)("path",{d:"M22.0006 7.292C22.6198 7.29004 23.2271 7.46144 23.754 7.7868C24.2808 8.11216 24.706 8.57848 24.9816 9.133L34.3566 27.883C34.611 28.3912 34.7312 28.956 34.7058 29.5238C34.6805 30.0915 34.5103 30.6433 34.2116 31.1268C33.9129 31.6103 33.4956 32.0094 32.9992 32.2861C32.5028 32.5629 31.9439 32.7081 31.3756 32.708H12.6256C12.0573 32.7079 11.4985 32.5626 11.0023 32.2858C10.506 32.009 10.0888 31.6099 9.79022 31.1264C9.49163 30.6429 9.3216 30.0912 9.29628 29.5235C9.27096 28.9558 9.39119 28.3911 9.64556 27.883L19.0196 9.133C19.2951 8.57848 19.7203 8.11216 20.2472 7.7868C20.774 7.46144 21.3814 7.29004 22.0006 7.292ZM22.0006 5C20.9561 4.9999 19.9322 5.29059 19.0437 5.83952C18.1551 6.38846 17.4369 7.17394 16.9696 8.108L7.59456 26.858C7.16544 27.7156 6.96271 28.6687 7.00564 29.6268C7.04856 30.5848 7.33572 31.516 7.83982 32.3318C8.34392 33.1476 9.04823 33.821 9.88584 34.288C10.7235 34.755 11.6666 35.0001 12.6256 35H31.3756C32.3345 34.9999 33.2775 34.7547 34.1149 34.2876C34.9524 33.8206 35.6566 33.1472 36.1606 32.3314C36.6645 31.5156 36.9516 30.5845 36.9945 29.6265C37.0374 28.6686 36.8346 27.7156 36.4056 26.858L27.0316 8.108C26.5642 7.17394 25.846 6.38846 24.9574 5.83952C24.0689 5.29059 23.045 4.9999 22.0006 5Z",fill:"white"})}),il=({testnet:e,...t})=>(0,F.jsxs)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#E84142"},children:[(0,F.jsx)("path",{d:"M11.0188 32.1528H15.4825C16.5334 32.1528 17.0589 32.1528 17.5278 32.023C18.042 31.8701 18.511 31.5991 18.9009 31.2261C19.2589 30.885 19.5173 30.4328 20.0269 29.5409L20.0272 29.5404L20.0422 29.5142L25.8314 19.2804C26.3456 18.3821 26.5999 17.93 26.7129 17.4554C26.8372 16.9412 26.8372 16.3988 26.7129 15.8847C26.6007 15.4136 26.3439 14.9648 25.8373 14.0798L25.8258 14.0597L23.56 10.1045C23.0911 9.27958 22.8538 8.86711 22.5543 8.71456C22.2323 8.55071 21.848 8.55071 21.526 8.71456C21.2265 8.86711 20.9892 9.27958 20.5202 10.1045L9.49892 29.5311C9.03561 30.3447 8.80392 30.7517 8.82089 31.0849C8.84349 31.4466 9.02994 31.7743 9.33507 31.9721C9.61756 32.1528 10.0809 32.1528 11.0188 32.1528Z",fill:"white"}),(0,F.jsx)("path",{d:"M33.1506 32.1528H26.7547C25.8111 32.1528 25.3365 32.1528 25.0596 31.9721C24.7545 31.7743 24.5681 31.4411 24.5455 31.0794C24.5286 30.7486 24.7621 30.3456 25.2294 29.539L25.2295 29.5388L25.2404 29.5199L28.4328 24.0392C28.9018 23.2313 29.1391 22.8301 29.4329 22.6776C29.7548 22.5137 30.1336 22.5137 30.4555 22.6776C30.7472 22.8261 30.9744 23.2102 31.4241 23.9708L31.4248 23.9719L31.4613 24.0336L34.665 29.5143C34.6806 29.5413 34.696 29.5678 34.7113 29.5939L34.7113 29.594C35.1554 30.3603 35.382 30.7514 35.3657 31.0739C35.3486 31.4353 35.1566 31.7688 34.8515 31.9666C34.5689 32.1528 34.0942 32.1528 33.1506 32.1528Z",fill:"white"})]}),id=({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#FCFE72"},children:(0,F.jsx)("path",{d:"M9 9H34.5183V18.112H30.3564C28.896 14.7687 25.6102 12.4171 21.777 12.4171C16.593 12.4171 12.3948 16.6422 12.3948 21.823C12.3948 27.0039 16.593 31.2654 21.777 31.2654C25.5373 31.2654 28.8231 28.9876 30.2829 25.7172H34.5178V34.682H9V9Z",fill:e?"#ffffff":"black"})}),iu=({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#571AFF"},children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.1834 8.14754C25.6606 8.23504 25.3644 8.50235 24.9216 9.28591C24.5651 9.91722 24.4762 10.0244 24.2024 10.1592L23.9832 10.2668L19.2967 10.286L14.6097 10.3057L14.3875 10.3902C13.7059 10.6492 13.6192 10.7135 11.6291 12.4407C9.72243 14.0953 9.64893 14.1723 9.59249 14.5836C9.54437 14.9362 9.78981 15.6327 10.5191 17.2143C11.2847 18.8737 11.2839 18.8641 10.7444 19.5256C10.2645 20.1136 10.2269 20.2588 10.2041 21.5915C10.1717 23.502 10.2487 27.6023 10.3222 27.8591C10.3572 27.9816 10.7908 29.204 11.2861 30.5755C11.7813 31.9471 12.4192 33.715 12.704 34.5038C13.4281 36.5107 13.4814 36.5986 14.0392 36.7237C14.3066 36.7837 14.3206 36.781 18.9677 35.7258C24.4395 34.4837 23.7264 34.709 25.0739 33.7968C29.8732 30.5475 29.7337 30.66 29.8969 29.9083C30.0583 29.1642 30.1082 29.1379 31.8267 28.8999C34.6122 28.5145 34.6328 28.5083 34.8831 28.0109C35.0182 27.7423 35.7786 23.3406 35.8136 22.6209C35.8504 21.8828 36.042 22.221 33.3816 18.3395C30.022 13.4382 30.2381 13.7777 30.2399 13.4041C30.2407 13.1735 30.3366 12.9736 31.3236 11.1418C31.8236 10.2134 32.2742 9.35241 32.3254 9.22904C32.5236 8.74691 32.4204 8.3921 32.0301 8.21622L31.8267 8.12391L29.1102 8.11822C27.6048 8.11516 26.2997 8.12829 26.1834 8.14754ZM30.0474 9.4876C30.5623 9.72297 30.5382 9.82447 29.5119 11.7398C28.4317 13.7558 28.3157 13.2711 30.7154 16.7707C31.639 18.1173 32.8076 19.8218 33.3124 20.5581C34.6844 22.5592 34.6048 22.1799 34.1831 24.6903C33.7858 27.0602 33.7792 27.0817 33.3759 27.282C33.1506 27.394 33.2276 27.3813 30.8493 27.7117C28.9147 27.9803 28.8543 28.017 28.6719 29.0338C28.5778 29.557 28.4606 29.8169 28.2243 30.0247C28.0808 30.1512 24.8682 32.368 23.9451 32.9778C23.2587 33.4311 23.6861 33.3152 17.7471 34.6574C17.1997 34.7812 16.4079 34.9632 15.987 35.0617C14.4588 35.4195 14.4299 35.4033 13.8804 33.8948C12.9188 31.2528 11.6811 27.7957 11.6194 27.5787C11.5534 27.3463 11.549 27.1202 11.549 24.059V20.7878L11.6501 20.5966C11.7056 20.4912 11.8671 20.2759 12.0088 20.118C12.8418 19.19 12.8383 19.1183 11.8601 16.9907C10.7663 14.612 10.6797 14.9992 12.697 13.2501C14.2418 11.91 14.3048 11.8593 14.5905 11.7237L14.8394 11.6055L19.6983 11.5854C23.5417 11.5692 24.5891 11.5543 24.7103 11.515C25.1465 11.3728 25.4086 11.1094 25.7975 10.4203C26.3851 9.38041 26.3111 9.40797 28.4597 9.41891C29.6996 9.42547 29.9332 9.43554 30.0474 9.4876Z",fill:"#F7F5FC"})}),ip=({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#2D2A25"},children:(0,F.jsx)("path",{d:"M18.4916 12.6668C12.9416 14.806 12.4332 20.2846 10.8418 22.8432C9.23155 25.4322 5.54251 26.8607 6.04698 28.1801C6.55143 29.4994 10.2449 28.0824 13.1669 28.9242C16.0543 29.7561 20.0831 33.4862 25.633 31.3469C28.4603 30.2573 30.5076 28.0143 31.449 25.3574C31.5502 25.0723 31.361 24.7673 31.0606 24.7391C30.874 24.7215 30.6948 24.8196 30.6106 24.9877C29.759 26.6908 28.2981 28.0934 26.3864 28.8301C23.2303 30.0465 19.777 29.0915 17.6562 26.6961C17.1746 26.1522 16.7626 25.533 16.4374 24.8487C16.348 24.6603 16.2629 24.4689 16.1875 24.2708C16.1117 24.0728 16.0473 23.8735 15.9881 23.6732C17.6562 22.8925 19.5812 22.0656 21.7635 21.2246C23.903 20.3999 25.8505 19.731 27.5841 19.1958C28.7571 18.8341 29.8322 18.5331 30.8029 18.2871C30.8732 18.2695 30.9423 18.2519 31.0112 18.2347C31.158 18.1982 31.3088 18.2769 31.363 18.4186L31.364 18.4213C31.396 18.5053 31.4236 18.5898 31.4535 18.6743C31.6453 19.2196 31.7892 19.7706 31.8841 20.3229C31.9258 20.5645 32.1888 20.6961 32.4044 20.5799C33.2014 20.1504 33.9302 19.7314 34.5814 19.3283C37.0083 17.8276 38.3538 16.5549 38.0776 15.8336C37.802 15.1119 35.9541 15.0705 33.1503 15.5854C32.2593 15.7491 31.2716 15.9691 30.207 16.2416C30.0229 16.2886 29.8365 16.3375 29.6481 16.3877C28.7522 16.6262 27.8073 16.8995 26.8234 17.2053C24.9936 17.7744 23.0305 18.4561 21.0038 19.2372C19.1078 19.9682 17.3109 20.726 15.6629 21.4812C15.6428 18.2761 17.5725 15.2461 20.7286 14.0297C22.6399 13.293 24.6605 13.3533 26.4285 14.0473C26.6029 14.116 26.8015 14.0684 26.9291 13.9298C27.1331 13.7076 27.0706 13.3537 26.8053 13.2094C24.3353 11.8685 21.319 11.5771 18.4916 12.6668Z",fill:"#FAF1E4"})}),ih=({testnet:e,...t})=>(0,F.jsxs)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#16181A"},children:[(0,F.jsx)("path",{d:"M16.0445 19.6063L21.8705 13.7805L27.6996 19.6093L31.0896 16.2193L21.8705 7L12.6545 16.2163L16.0445 19.6063Z",fill:e?"#fff":"#F3BA2F"}),(0,F.jsx)("path",{d:"M13.6505 21.9995L10.2606 18.6096L6.87046 21.9997L10.2604 25.3896L13.6505 21.9995Z",fill:e?"#fff":"#F3BA2F"}),(0,F.jsx)("path",{d:"M16.0445 24.3937L21.8705 30.2195L27.6994 24.3909L31.0913 27.779L31.0896 27.7809L21.8705 37L12.6542 27.7839L12.6495 27.7792L16.0445 24.3937Z",fill:e?"#fff":"#F3BA2F"}),(0,F.jsx)("path",{d:"M33.4808 25.3911L36.8709 22.001L33.481 18.6111L30.0909 22.0012L33.4808 25.3911Z",fill:e?"#fff":"#F3BA2F"}),(0,F.jsx)("path",{d:"M25.3091 21.9982H25.3105L21.8705 18.5582L19.3283 21.1004H19.3281L19.0362 21.3926L18.4336 21.9951L18.4289 21.9999L18.4336 22.0048L21.8705 25.4418L25.3105 22.0018L25.3122 21.9999L25.3091 21.9982Z",fill:e?"#fff":"#F3BA2F"})]}),ig=({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#0911EF"},children:(0,F.jsx)("path",{d:"M20.92 9.25864C21.5933 8.91379 22.6178 8.91379 23.2911 9.25864L30.1616 12.7775C30.5671 12.9852 30.7898 13.2947 30.8297 13.6142H30.8363V31.302C30.8274 31.6504 30.6025 31.9966 30.1616 32.2225L23.2911 35.7413C22.6178 36.0862 21.5933 36.0862 20.92 35.7413L14.0495 32.2225C13.6104 31.9976 13.3997 31.6489 13.3893 31.302C13.3883 31.2678 13.3881 31.2393 13.3891 31.2157L13.3891 13.7278C13.3884 13.7086 13.3883 13.6895 13.3889 13.6705L13.3893 13.6142L13.3924 13.6142C13.4229 13.2912 13.6355 12.9896 14.0495 12.7775L20.92 9.25864ZM29.7547 23.4821L23.2911 26.7926C22.6178 27.1374 21.5933 27.1374 20.92 26.7926L14.4706 23.4895V31.2669L20.92 34.5527C21.2842 34.7415 21.6622 34.9254 22.0318 34.9488L22.1056 34.9512C22.4907 34.9524 22.8646 34.7628 23.2438 34.5833L29.7547 31.2387V23.4821ZM11.3214 31.8437C11.3214 32.5212 11.4026 32.9667 11.5639 33.2806C11.6976 33.5407 11.8981 33.7394 12.2643 33.9813L12.2852 33.9951C12.3656 34.0476 12.4541 34.1026 12.5619 34.1672L12.689 34.2427L13.0792 34.4711L12.5195 35.3685L12.0827 35.1126L12.0093 35.0689C11.883 34.9932 11.7783 34.9284 11.6807 34.8645C10.637 34.1822 10.2478 33.4384 10.2401 31.8907L10.24 31.8437H11.3214ZM21.5647 18.7412C21.5147 18.7579 21.4678 18.7772 21.4251 18.7991L14.5546 22.318C14.5474 22.3216 14.5405 22.3253 14.534 22.3289L14.5281 22.3322L14.5389 22.3382L14.5546 22.3464L21.4251 25.8653C21.4678 25.8872 21.5147 25.9065 21.5647 25.9231V18.7412ZM22.6465 18.7412V25.9231C22.6965 25.9065 22.7433 25.8872 22.7861 25.8653L29.6566 22.3464C29.6638 22.3427 29.6707 22.3391 29.6772 22.3355L29.683 22.3322L29.6722 22.3262L29.6566 22.318L22.7861 18.7991C22.7433 18.7772 22.6965 18.7579 22.6465 18.7412ZM29.7547 14.8689L23.5915 18.0256L29.7547 21.1822V14.8689ZM14.4706 14.8763V21.1749L20.6195 18.0256L14.4706 14.8763ZM22.7861 10.1859C22.4288 10.0029 21.7824 10.0029 21.4251 10.1859L14.5546 13.7048C14.5474 13.7085 14.5405 13.7122 14.534 13.7158L14.5281 13.719L14.5389 13.725L14.5546 13.7333L21.4251 17.2522C21.7824 17.4352 22.4288 17.4352 22.7861 17.2522L29.6566 13.7333C29.6638 13.7296 29.6707 13.7259 29.6772 13.7223L29.683 13.719L29.6722 13.7131L29.6566 13.7048L22.7861 10.1859ZM31.7205 9.64552L32.1573 9.90132L32.2307 9.94503C32.357 10.0206 32.4616 10.0856 32.5593 10.1494C33.603 10.8317 33.9922 11.5756 33.9998 13.1231L34 13.1703H32.9186C32.9186 12.4926 32.8373 12.0472 32.6761 11.7334C32.5424 11.4733 32.3419 11.2745 31.9757 11.0327L31.9547 11.0189C31.8744 10.9664 31.7858 10.9113 31.6781 10.8466L31.551 10.7712L31.1608 10.5428L31.7205 9.64552Z",fill:"white"})}),ib=({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#0090FF"},children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.75 19.3069L23.15 22.5069L28.85 23.3069L28.45 24.8069L22.85 24.0069C22.45 25.3069 22.25 26.7069 21.75 27.9069C21.25 29.3069 20.75 30.7069 20.15 32.0069C19.35 33.7069 17.95 34.9069 16.05 35.2069C14.95 35.4069 13.75 35.3069 12.85 34.6069C12.55 34.4069 12.25 34.0069 12.25 33.7069C12.25 33.3069 12.45 32.8069 12.75 32.6069C12.95 32.5069 13.45 32.6069 13.75 32.7069C14.05 33.0069 14.35 33.4069 14.55 33.8069C15.15 34.6069 15.95 34.7069 16.75 34.1069C17.65 33.3069 18.15 32.2069 18.45 31.1069C19.05 28.7069 19.65 26.4069 20.15 24.0069V23.6069L14.85 22.8069L15.05 21.3069L20.55 22.1069L21.25 19.0069L15.55 18.1069L15.75 16.5069L21.65 17.3069C21.85 16.7069 21.95 16.2069 22.15 15.7069C22.65 13.9069 23.15 12.1069 24.35 10.5069C25.55 8.90687 26.95 7.90687 29.05 8.00687C29.95 8.00687 30.85 8.30687 31.45 9.00687C31.55 9.10687 31.75 9.30687 31.75 9.50687C31.75 9.90687 31.75 10.4069 31.45 10.7069C31.05 11.0069 30.55 10.9069 30.15 10.5069C29.85 10.2069 29.65 9.90687 29.35 9.60687C28.75 8.80687 27.85 8.70687 27.15 9.40687C26.65 9.90687 26.15 10.6069 25.85 11.3069C25.15 13.4069 24.65 15.6069 23.95 17.8069L29.45 18.6069L29.05 20.1069L23.75 19.3069Z",fill:"white"})}),ix=({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#2F3140"},children:(0,F.jsx)("path",{d:"M37.5175 22.0531C37.4579 19.2923 36.6563 16.5985 35.1968 14.2542C33.7374 11.91 31.674 10.0017 29.223 8.72965C26.772 7.45759 24.0238 6.86863 21.2668 7.02455C18.5098 7.18047 15.8456 8.07553 13.5537 9.61582C11.2617 11.1561 9.42659 13.2849 8.24079 15.7787C7.05498 18.2725 6.56222 21.0396 6.81419 23.7895C7.06617 26.5394 8.05359 29.1708 9.67288 31.4076C11.2922 33.6444 13.4836 35.4042 16.0173 36.5023C16.7657 35.3775 17.3385 34.1453 17.716 32.848C18.0245 32.0632 18.3595 31.2913 18.7067 30.5446C19.5444 30.7955 20.4345 30.8143 21.282 30.5989C22.1295 30.3835 22.9026 29.942 23.5188 29.3215L23.5704 29.2699C22.8136 28.9884 21.9979 28.9032 21.1993 29.022C20.4006 29.1408 19.6451 29.4598 19.0029 29.9494C19.4276 29.0613 19.891 28.1997 20.3667 27.3632C21.189 27.6541 22.075 27.7156 22.9296 27.541C23.7842 27.3665 24.5751 26.9626 25.2175 26.3726L25.2692 26.3209C24.538 26.0116 23.7416 25.8885 22.9513 25.9626C22.1609 26.0368 21.4013 26.3058 20.7404 26.7456C21.216 25.9608 21.7053 25.1889 22.2203 24.468C23.0713 24.6915 23.9672 24.6777 24.811 24.4282C25.6547 24.1787 26.414 23.703 27.0066 23.0526L27.0453 23.001C26.3425 22.7718 25.5958 22.7106 24.8651 22.8224C24.1344 22.9341 23.4401 23.2157 22.838 23.6444C22.8767 23.5928 22.9283 23.5289 22.9664 23.4773C23.2749 23.0784 23.5969 22.6796 23.9177 22.2936C24.8969 21.9731 25.7703 21.3916 26.4436 20.6117C27.117 19.8318 27.5649 18.883 27.7391 17.8674L27.752 17.79H27.7391C26.7194 18.0552 25.7944 18.6007 25.0689 19.3648C24.3434 20.1288 23.8464 21.0808 23.6343 22.1129C23.3258 22.4859 23.0167 22.8603 22.7211 23.2449C22.9706 22.5925 23.0724 21.893 23.0191 21.1966C22.9657 20.5002 22.7586 19.8243 22.4126 19.2176L22.3739 19.2692C21.8489 19.9862 21.5326 20.8345 21.4599 21.7201C21.3873 22.6058 21.5611 23.4942 21.9621 24.2872C21.4729 24.9823 20.9972 25.6897 20.5467 26.4357C20.6918 25.6858 20.6542 24.9118 20.4369 24.1795C20.2196 23.4471 19.8291 22.7779 19.2985 22.2284L19.2727 22.2929C18.9445 23.1107 18.8477 24.0031 18.9929 24.8723C19.1382 25.7415 19.5199 26.5539 20.0962 27.2205C19.6457 28.0054 19.2211 28.816 18.8093 29.6524C18.9344 28.8712 18.8712 28.0715 18.6251 27.3196C18.3789 26.5677 17.9568 25.8855 17.3939 25.3295L17.3681 25.3941C17.0745 26.2514 17.0201 27.1724 17.2105 28.0583C17.401 28.9442 17.8292 29.7614 18.4492 30.4223C18.1774 31.0012 17.9219 31.5774 17.6773 32.1849C17.61 32.1231 17.5313 32.0751 17.4456 32.0435C17.0066 31.916 16.5867 31.7299 16.1974 31.4904C15.8754 31.2994 15.5337 31.144 15.1781 31.027C13.7886 30.5765 13.9945 29.9079 13.2756 28.5564C13.0416 28.2781 12.7931 28.0125 12.5309 27.7607C12.2876 27.603 12.0884 27.386 11.9519 27.1302C11.7934 26.8107 11.6931 26.4656 11.6557 26.1109C11.6514 25.9148 11.5858 25.7249 11.4681 25.5679C11.3504 25.4109 11.1864 25.2948 10.9993 25.2358C8.95338 24.5284 9.86728 21.8778 9.94406 21.5299C9.91262 21.08 9.81271 20.6375 9.64781 20.2178C9.63057 20.1632 9.61763 20.1073 9.60908 20.0506C9.55449 19.776 9.56444 19.4924 9.63813 19.2223C9.71183 18.9521 9.84726 18.7028 10.0338 18.4939C10.2784 18.2493 11.1277 17.8505 11.3078 17.6188C11.4879 17.387 11.6163 17.1295 11.797 16.9114C12.3687 16.3412 13.0291 15.8675 13.7526 15.509C14.3444 15.1876 14.4477 14.364 14.6787 14.1065C15.0647 13.6689 15.6565 13.6689 16.0941 13.283C16.3129 13.09 16.6377 12.9867 16.8415 12.7815C17.8692 11.8403 19.1644 11.2423 20.5474 11.0706C21.5064 10.9924 22.4717 11.0795 23.4012 11.3281C23.5358 11.3507 23.669 11.3809 23.8001 11.4185C25.9228 11.4959 28.4709 11.9328 29.397 12.8338C29.8555 13.2744 30.1961 13.8229 30.3877 14.4293C30.5382 14.8988 30.7456 15.3481 31.0054 15.7672L31.5714 16.6933C31.932 17.2773 32.0475 17.9801 31.8928 18.6489C31.7885 18.974 31.7795 19.3223 31.8669 19.6525C32.1655 20.1031 32.5152 20.5177 32.9093 20.8878C33.0658 21.0427 33.2382 21.1807 33.4236 21.2995C33.8592 21.5594 34.2802 21.8429 34.6848 22.1489C34.698 22.2729 34.6775 22.3982 34.6254 22.5115C34.5732 22.6247 34.4914 22.7218 34.3885 22.7924C34.0284 23.1137 33.3333 23.6159 33.3333 23.6159C33.3584 23.758 33.4016 23.8964 33.4617 24.0276C33.5643 24.2077 33.796 24.4911 33.7192 24.735C33.6424 24.9789 33.1403 25.1855 33.2816 25.4552C33.423 25.7386 33.7831 25.8154 33.6805 26.0729C33.5779 26.3175 33.0757 26.7524 33.1274 26.9352C33.179 27.1179 33.5908 28.8377 32.6382 29.1353C31.4592 29.3685 30.2627 29.5019 29.0614 29.5342C28.8675 29.5454 28.6797 29.6055 28.5155 29.709C28.3513 29.8125 28.216 29.956 28.1223 30.126C27.9399 30.4661 27.8222 30.837 27.7751 31.22C27.4275 32.5896 26.9671 33.928 26.3985 35.2215C26.3985 35.2215 26.3597 35.2989 26.3081 35.4144C26.1833 35.6687 26.1048 35.9432 26.0764 36.2251C26.1573 36.4321 26.2799 36.6204 26.4365 36.7782C26.519 36.8726 26.6271 36.9411 26.7477 36.9753C26.8683 37.0096 26.9962 37.0081 27.116 36.9711C30.1997 35.8965 32.8655 33.8757 34.7332 31.197C36.601 28.5182 37.5754 25.3182 37.5175 22.0531Z",fill:e?"#ffffff":"#00DACC"})}),im=({testnet:e,...t})=>(0,F.jsxs)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#00D4D5"},children:[(0,F.jsx)("path",{d:"M23.7136 6.875V14.3784L30.2284 10.6315L23.7136 6.875Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.9",d:"M30.2284 10.6316V18.135L36.7418 14.3785L30.2284 10.6316Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.8",d:"M23.7136 14.3784V21.8818L30.2284 18.1349L23.7136 14.3784ZM30.2284 18.1349V25.6383L36.7417 21.8818L30.2284 18.1349Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.8",d:"M23.7136 21.8817V29.385L30.2284 25.6382L23.7136 21.8817Z",fill:"white"}),(0,F.jsx)("path",{d:"M30.2284 25.6382V33.1416L36.7418 29.3851L30.2284 25.6382Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.4",d:"M6.87537 14.1253V21.6287L13.3901 17.8722L6.87537 14.1253Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.2",d:"M15.0938 16.9153V24.4186L21.5975 20.6718L15.0938 16.9153Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.3",d:"M10.2648 21.6604V29.1638L16.7781 25.4073L10.2648 21.6604Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.9",d:"M14.5575 27.3226V34.826L21.0612 31.0695L14.5575 27.3226Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.7",d:"M23.66 30.5525V38.0572L30.1637 34.2993L23.66 30.5525Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.9",d:"M16.1786 13.2097V20.7145L22.6824 16.9676L16.1786 13.2097Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.8",d:"M23.7136 6.875V14.3784L17.1989 10.6315L23.7136 6.875Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.6",d:"M16.1786 10.0649V17.5669L9.66248 13.8104L16.1786 10.0649Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.6",d:"M22.6934 13.7775V21.2823L16.1786 17.5244L22.6934 13.7775Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.95",d:"M15.0635 16.9153V24.4186L8.54877 20.6718L15.0635 16.9153Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.6",d:"M23.7136 21.8817V29.385L17.2099 25.6382L23.7136 21.8817Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.55",d:"M10.2648 23.6295V31.1328L3.75 27.375L10.2648 23.6295Z",fill:"white"}),(0,F.jsx)("path",{d:"M36.7418 14.3784V21.8818L30.2284 18.1349L36.7418 14.3784Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.95",d:"M30.2284 18.1362V25.6382L23.7136 21.8817L30.2284 18.1362Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.9",d:"M36.7418 21.8817V29.385L30.2284 25.6382L36.7418 21.8817Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.7",d:"M30.2284 25.6382V33.1416L23.7136 29.3851L30.2284 25.6382Z",fill:"white"}),(0,F.jsx)("path",{opacity:"0.4",d:"M22.2712 28.7651V36.2684L15.7579 32.5216L22.2712 28.7651Z",fill:"white"}),(0,F.jsx)("path",{d:"M30.2284 10.6316V18.135L23.7136 14.3785L30.2284 10.6316Z",fill:"white"})]}),iC=({testnet:e,...t})=>(0,F.jsxs)("svg",{...t,width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{filter:e?"grayscale(1)":"none"},children:[(0,F.jsx)("mask",{id:"ck_zora_mask_a",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"44",height:"44",children:(0,F.jsx)("path",{d:"M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z",fill:"#D9D9D9"})}),(0,F.jsxs)("g",{mask:"url(#ck_zora_mask_a)",children:[(0,F.jsx)("path",{d:"M51.4558 -9.56445H-6.78906V48.6804H51.4558V-9.56445Z",fill:"#A1723A"}),(0,F.jsx)("g",{filter:"url(#ck_zora_filter_a)",children:(0,F.jsx)("path",{d:"M23.6807 43.0752C36.6464 43.0752 47.157 32.5675 47.157 19.6058C47.157 6.64397 36.6464 -3.86365 23.6807 -3.86365C10.7152 -3.86365 0.20459 6.64397 0.20459 19.6058C0.20459 32.5675 10.7152 43.0752 23.6807 43.0752Z",fill:"#531002"})}),(0,F.jsx)("g",{filter:"url(#ck_zora_filter_b)",children:(0,F.jsx)("path",{d:"M26.2112 35.6464C36.7271 35.6464 45.2521 27.1185 45.2521 16.5988C45.2521 6.07904 36.7271 -2.44885 26.2112 -2.44885C15.6953 -2.44885 7.17041 6.07904 7.17041 16.5988C7.17041 27.1185 15.6953 35.6464 26.2112 35.6464Z",fill:"#2B5DF0"})}),(0,F.jsx)("g",{filter:"url(#ck_zora_filter_c)",children:(0,F.jsx)("path",{d:"M25.8644 36.7348C36.8276 36.7348 45.7149 27.8444 45.7149 16.8777C45.7149 5.91084 36.8276 -2.97949 25.8644 -2.97949C14.9015 -2.97949 6.01416 5.91084 6.01416 16.8777C6.01416 27.8444 14.9015 36.7348 25.8644 36.7348Z",fill:"url(#paint0_radial_3914_1946)"})}),(0,F.jsx)("g",{filter:"url(#ck_zora_filter_d)",children:(0,F.jsx)("path",{d:"M29.1567 21.8779C34.6797 21.8779 39.1567 17.4008 39.1567 11.8779C39.1567 6.35509 34.6797 1.87793 29.1567 1.87793C23.6338 1.87793 19.1567 6.35509 19.1567 11.8779C19.1567 17.4008 23.6338 21.8779 29.1567 21.8779Z",fill:"#FCB8D4"})}),(0,F.jsx)("g",{filter:"url(#ck_zora_filter_e)",children:(0,F.jsx)("path",{d:"M29.15 15.8642C31.3555 15.8642 33.1432 14.0765 33.1432 11.871C33.1432 9.66562 31.3555 7.87781 29.15 7.87781C26.9445 7.87781 25.1567 9.66562 25.1567 11.871C25.1567 14.0765 26.9445 15.8642 29.15 15.8642Z",fill:"white"})}),(0,F.jsx)("g",{filter:"url(#ck_zora_filter_f)",children:(0,F.jsx)("path",{d:"M26.4967 51.7416C46.3151 51.7416 62.3811 35.6757 62.3811 15.8573C62.3811 -3.96109 46.3151 -20.0271 26.4967 -20.0271C6.67829 -20.0271 -9.3877 -3.96109 -9.3877 15.8573C-9.3877 35.6757 6.67829 51.7416 26.4967 51.7416Z",fill:"url(#paint1_radial_3914_1946)",fillOpacity:"0.9"})})]}),(0,F.jsxs)("defs",{children:[(0,F.jsxs)("filter",{id:"ck_zora_filter_a",x:"-5.23758",y:"-9.30581",width:"57.837",height:"57.8232",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,F.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,F.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,F.jsx)("feGaussianBlur",{stdDeviation:"2.72108",result:"effect1_foregroundBlur_3914_1946"})]}),(0,F.jsxs)("filter",{id:"ck_zora_filter_b",x:"-3.71395",y:"-13.3332",width:"59.8503",height:"59.8639",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,F.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,F.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,F.jsx)("feGaussianBlur",{stdDeviation:"5.44218",result:"effect1_foregroundBlur_3914_1946"})]}),(0,F.jsxs)("filter",{id:"ck_zora_filter_c",x:"1.93251",y:"-7.06114",width:"47.864",height:"47.8775",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,F.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,F.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,F.jsx)("feGaussianBlur",{stdDeviation:"2.04082",result:"effect1_foregroundBlur_3914_1946"})]}),(0,F.jsxs)("filter",{id:"ck_zora_filter_d",x:"10.9935",y:"-6.28533",width:"36.3265",height:"36.3265",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,F.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,F.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,F.jsx)("feGaussianBlur",{stdDeviation:"4.08163",result:"effect1_foregroundBlur_3914_1946"})]}),(0,F.jsxs)("filter",{id:"ck_zora_filter_e",x:"19.7146",y:"2.43564",width:"18.8707",height:"18.8708",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,F.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,F.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,F.jsx)("feGaussianBlur",{stdDeviation:"2.72108",result:"effect1_foregroundBlur_3914_1946"})]}),(0,F.jsxs)("filter",{id:"ck_zora_filter_f",x:"-13.4693",y:"-24.1087",width:"79.9318",height:"79.9321",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,F.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,F.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,F.jsx)("feGaussianBlur",{stdDeviation:"2.04082",result:"effect1_foregroundBlur_3914_1946"})]}),(0,F.jsxs)("radialGradient",{id:"paint0_radial_3914_1946",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(29.2127 11.2756) rotate(128.228) scale(37.4897 37.4867)",children:[(0,F.jsx)("stop",{offset:"0.286458",stopColor:"#387AFA"}),(0,F.jsx)("stop",{offset:"0.647782",stopColor:"#387AFA",stopOpacity:"0"})]}),(0,F.jsxs)("radialGradient",{id:"paint1_radial_3914_1946",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(26.4967 15.8573) rotate(90) scale(35.8844 35.8844)",children:[(0,F.jsx)("stop",{offset:"0.598958",stopOpacity:"0"}),(0,F.jsx)("stop",{offset:"0.671875"}),(0,F.jsx)("stop",{offset:"0.734375",stopOpacity:"0"})]})]})]}),iv=({testnet:e,...t})=>(0,F.jsxs)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"black"},children:[(0,F.jsx)("clipPath",{id:"mantleClip",children:(0,F.jsx)("rect",{width:"24",height:"24",fill:"white",transform:"translate(4 4)"})}),(0,F.jsx)("g",{clipPath:"url(#mantleClip)",children:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("path",{d:"M9.03931 12.495L5.42091 10.6526C5.13699 11.2083 4.89838 11.7913 4.70508 12.3863L8.56813 13.6367C8.69499 13.2441 8.85204 12.8605 9.03931 12.495Z",fill:"white"}),(0,F.jsx)("path",{d:"M12.111 9.24814L14.1135 12.7004C14.4064 12.5313 14.7206 12.4014 15.0437 12.3138L14.0078 8.45982C14.2705 8.39035 14.5393 8.32995 14.8112 8.28766L14.1739 4.27661C13.5577 4.37326 12.9446 4.52126 12.3526 4.71456L13.5909 8.51419C13.1953 8.64406 12.8117 8.80414 12.4432 8.99141L10.6249 5.43643C10.0722 5.72035 9.53458 6.04957 9.0332 6.41805L11.4253 9.69515C11.6458 9.53507 11.8754 9.38707 12.111 9.24814Z",fill:"white"}),(0,F.jsx)("path",{d:"M22.8663 12.1084L19.4141 14.1139C19.5832 14.4069 19.7161 14.721 19.8037 15.0442L23.6577 14.0052C23.7302 14.268 23.7876 14.5368 23.8298 14.8056L27.8409 14.1683C27.7442 13.5522 27.5962 12.939 27.3999 12.347L23.6033 13.5914C23.4734 13.1958 23.3134 12.8122 23.1261 12.4437L26.6811 10.6194C26.3972 10.0667 26.0679 9.52903 25.6995 9.02765L22.4224 11.4228C22.5794 11.6433 22.7274 11.8728 22.8663 12.1084Z",fill:"white"}),(0,F.jsx)("path",{d:"M21.4596 5.41828C20.9039 5.13437 20.3209 4.89576 19.7259 4.70245L18.4785 8.5655C18.8681 8.69236 19.2517 8.84942 19.6202 9.03668L21.4596 5.41828Z",fill:"white"}),(0,F.jsx)("path",{d:"M20.0169 9.17864L17.9902 12.6974C18.2832 12.8665 18.555 13.0749 18.7937 13.3135L24.478 7.60805C24.037 7.16707 23.5568 6.75932 23.0554 6.39386L20.7116 9.62867C20.4881 9.46557 20.2585 9.31456 20.0169 9.17864Z",fill:"white"}),(0,F.jsx)("path",{d:"M9.17824 12.0963L12.694 14.126C12.8631 13.833 13.0715 13.5612 13.3101 13.3196L7.61067 7.6322C7.1697 8.07318 6.76195 8.55341 6.39648 9.0548L9.62828 11.4016C9.4682 11.6251 9.31718 11.8577 9.17824 12.0963Z",fill:"white"}),(0,F.jsx)("path",{d:"M17.2882 8.21818L17.9014 4.27056C17.2943 4.17693 16.6751 4.1286 16.0559 4.1286H16.0469V12.1809H16.0559C16.3942 12.1809 16.7325 12.2232 17.0557 12.3108L18.0977 8.38732C17.8319 8.31483 17.5631 8.26046 17.2882 8.21818Z",fill:"white"}),(0,F.jsx)("path",{d:"M12.3111 15.0593L8.38763 14.0143C8.31816 14.2801 8.26077 14.5519 8.21848 14.8237L4.27086 14.2076C4.17723 14.8147 4.12891 15.4399 4.12891 16.0591H12.1812C12.1812 15.7178 12.2265 15.3825 12.3111 15.0593Z",fill:"white"}),(0,F.jsx)("path",{d:"M23.0781 19.6231L26.6965 21.4655C26.9804 20.9098 27.2191 20.3268 27.4124 19.7318L23.5493 18.4814C23.4224 18.874 23.2654 19.2576 23.0781 19.6231Z",fill:"white"}),(0,F.jsx)("path",{d:"M20.0031 22.867L18.0006 19.4147C17.7076 19.5838 17.3935 19.7137 17.0703 19.8013L18.1063 23.6553C17.8435 23.7247 17.5747 23.7851 17.3029 23.8274L17.9402 27.8385C18.5563 27.7418 19.1695 27.5938 19.7615 27.4005L18.5231 23.6009C18.9188 23.471 19.3024 23.3109 19.6708 23.1237L21.4921 26.6787C22.0449 26.3947 22.5825 26.0655 23.0839 25.697L20.6917 22.4169C20.4712 22.583 20.2417 22.731 20.0031 22.867Z",fill:"white"}),(0,F.jsx)("path",{d:"M9.25189 20.0097L12.7042 18.0011C12.535 17.7082 12.4021 17.394 12.3145 17.0709L8.46055 18.1099C8.38806 17.8471 8.33068 17.5783 8.28839 17.3095L4.27734 17.9468C4.374 18.5629 4.52199 19.1761 4.71832 19.7681L8.51492 18.5267C8.6448 18.9193 8.80488 19.3059 8.99214 19.6744L5.43717 21.4987C5.72108 22.0514 6.0503 22.5891 6.41879 23.0905L9.69589 20.6953C9.53883 20.4748 9.39083 20.2453 9.25189 20.0097Z",fill:"white"}),(0,F.jsx)("path",{d:"M10.6582 26.6998C11.214 26.9837 11.7969 27.2223 12.3919 27.4156L13.6393 23.5526C13.2497 23.4257 12.8661 23.2687 12.4976 23.0814L10.6582 26.6998Z",fill:"white"}),(0,F.jsx)("path",{d:"M12.0998 22.9395L14.1264 19.4207C13.8334 19.2516 13.5616 19.0432 13.323 18.8046L7.63867 24.51C8.07965 24.951 8.55988 25.3588 9.06127 25.7242L11.4051 22.4894C11.6286 22.6495 11.8611 22.8005 12.0998 22.9395Z",fill:"white"}),(0,F.jsx)("path",{d:"M22.9366 20.0218L19.4208 17.9921C19.2517 18.285 19.0433 18.5569 18.8047 18.7985L24.5071 24.4859C24.9481 24.0449 25.3559 23.5646 25.7213 23.0633L22.4895 20.7164C22.6496 20.4899 22.8006 20.2604 22.9366 20.0218Z",fill:"white"}),(0,F.jsx)("path",{d:"M15.0596 19.8073L14.0176 23.7308C14.2834 23.8002 14.5552 23.8576 14.827 23.8999L14.2139 27.8475C14.821 27.9412 15.4402 27.9895 16.0593 27.9895H16.0684V19.9372H16.0593C15.7211 19.9372 15.3828 19.8919 15.0596 19.8073Z",fill:"white"}),(0,F.jsx)("path",{d:"M19.9385 16.0591C19.9385 16.4004 19.8962 16.7356 19.8086 17.0588L23.7321 18.1039C23.8015 17.8381 23.8589 17.5662 23.9012 17.2944L27.8488 17.9106C27.9424 17.3035 27.9908 16.6783 27.9908 16.0591H19.9385Z",fill:"white"})]})})]});let iw=[{id:1,name:"Ethereum",logo:(0,F.jsx)(ir,{}),rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]}}},{id:232,name:"Lens Chain",logo:(0,F.jsx)(io,{})},{id:37111,name:"Lens Chain Testnet",logo:(0,F.jsx)(io,{testnet:!0})},{id:3,name:"Rinkeby",logo:(0,F.jsx)(ir,{testnet:!0}),rpcUrls:{}},{id:4,name:"Ropsten",logo:(0,F.jsx)(ir,{testnet:!0})},{id:5,name:"Görli",logo:(0,F.jsx)(ir,{testnet:!0})},{id:42,name:"Kovan",logo:(0,F.jsx)(ir,{testnet:!0})},{id:10,name:"Optimism",logo:(0,F.jsx)(ia,{})},{id:69,name:"Optimism Kovan",logo:(0,F.jsx)(ia,{testnet:!0})},{id:420,name:"Optimism Goerli",logo:(0,F.jsx)(ia,{testnet:!0})},{id:0xaa37dc,name:"Optimism Sepolia",logo:(0,F.jsx)(ia,{testnet:!0})},{id:137,name:"Polygon",logo:(0,F.jsx)(ii,{})},{id:80001,name:"Polygon Mumbai",logo:(0,F.jsx)(ii,{testnet:!0})},{id:31337,name:"Hardhat",logo:(0,F.jsx)(ir,{testnet:!0})},{id:1337,name:"Localhost",logo:(0,F.jsx)(ir,{testnet:!0})},{id:42161,name:"Arbitrum",logo:(0,F.jsx)(is,{}),rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]}}},{id:421611,name:"Arbitrum Rinkeby",logo:(0,F.jsx)(is,{testnet:!0})},{id:421613,name:"Arbitrum Goerli",logo:(0,F.jsx)(is,{testnet:!0}),rpcUrls:{alchemy:{http:["https://arb-goerli.g.alchemy.com/v2"],webSocket:["wss://arb-goerli.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-goerli.infura.io/v3"],webSocket:["wss://arbitrum-goerli.infura.io/ws/v3"]}}},{id:40,name:"Telos",logo:(0,F.jsx)(iu,{})},{id:41,name:"Telos Testnet",logo:(0,F.jsx)(iu,{testnet:!0})},{id:0x4e454152,name:"Aurora",logo:(0,F.jsx)(ic,{})},{id:0x4e454153,name:"Aurora Testnet",logo:(0,F.jsx)(ic,{testnet:!0})},{id:43114,name:"Avalanche",logo:(0,F.jsx)(il,{})},{id:43113,name:"Avalanche Fuji",logo:(0,F.jsx)(il,{testnet:!0})},{id:31337,name:"Foundry",logo:(0,F.jsx)(r7,{testnet:!0})},{id:100,name:"Gnosis",logo:(0,F.jsx)(({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#009CB4"},children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.3439 11.8664C17.9374 6.53462 26.7953 6.74397 32.1271 12.3374C32.4738 12.7038 32.8075 13.0832 33.1084 13.4823L22 24.5972L10.8916 13.4823C11.1991 13.0832 11.5262 12.7038 11.8729 12.3374C12.0234 12.1804 12.1804 12.0234 12.3439 11.8664ZM30.6094 13.3972C28.3196 11.0944 25.271 9.83182 22 9.83182C18.729 9.83182 15.6804 11.0944 13.3907 13.3972L22 22.0066L30.6094 13.3972ZM33.9785 14.7446L31.7215 17.0016C33.5402 19.1801 33.2523 22.425 31.0738 24.2437C29.1636 25.84 26.3897 25.84 24.4794 24.2437L22 26.7231L19.5271 24.2502C17.3486 26.0689 14.1037 25.7811 12.285 23.6026C10.6888 21.6923 10.6888 18.9185 12.285 17.0082L11.1271 15.8502L10.028 14.7446C8.7 16.9297 8 19.4418 8 21.9998C8 29.7325 14.2673 35.9998 22 35.9998C29.7327 35.9998 36 29.7325 36 21.9998C36.0065 19.4418 35.3 16.9297 33.9785 14.7446ZM30.6486 18.0747C31.1392 18.7093 31.4075 19.4943 31.4075 20.299C31.4075 21.1037 31.1392 21.8887 30.6486 22.5233C29.4187 24.113 27.1355 24.4074 25.5458 23.1775L30.6486 18.0747ZM18.4542 23.1839C17.8196 23.6745 17.0346 23.9427 16.2299 23.9427C15.4252 23.9427 14.6467 23.6745 14.0056 23.1904C12.4159 21.9605 12.1215 19.6708 13.3514 18.0811L18.4542 23.1839Z",fill:"white"})}),{})},{id:9001,name:"Evmos",logo:(0,F.jsx)(ip,{})},{id:9e3,name:"Evmos Testnet",logo:(0,F.jsx)(ip,{testnet:!0})},{id:56,name:"BNB Smart Chain",logo:(0,F.jsx)(ih,{})},{id:97,name:"Binance Smart Chain Testnet",logo:(0,F.jsx)(ih,{testnet:!0})},{id:0xaa36a7,name:"Sepolia",logo:(0,F.jsx)(r7,{})},{id:841,name:"Taraxa",logo:(0,F.jsx)(r7,{})},{id:842,name:"Taraxa Testnet",logo:(0,F.jsx)(r7,{testnet:!0})},{id:324,name:"zkSync",logo:(0,F.jsx)(r7,{})},{id:280,name:"zkSync Testnet",logo:(0,F.jsx)(r7,{testnet:!0})},{id:42220,name:"Celo",logo:(0,F.jsx)(id,{})},{id:44787,name:"Celo Alfajores",logo:(0,F.jsx)(id,{testnet:!0})},{id:7700,name:"Canto",logo:(0,F.jsx)(({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"white"},children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M35 8V36H9L13.875 35.9998V31.0586H9V12.9412H13.875V8H35ZM17.9373 12.9414H30.1247V17.8826H17.9373V12.9414ZM30.1247 26.9414H17.9373V17.8826L13.0623 17.8828V26.9416L17.9373 26.9414V31.8826H30.1247V26.9414Z",fill:"#06FC99"})}),{})},{id:250,name:"Fantom",logo:(0,F.jsx)(ig,{})},{id:4002,name:"Fantom Testnet",logo:(0,F.jsx)(ig,{testnet:!0})},{id:14,name:"Flare",logo:(0,F.jsx)(r7,{})},{id:114,name:"Coston2",logo:(0,F.jsx)(r7,{})},{id:314,name:"Filecoin",logo:(0,F.jsx)(ib,{})},{id:3141,name:"Filecoin Hyperspace",logo:(0,F.jsx)(ib,{testnet:!0})},{id:314159,name:"Filecoin Calibration",logo:(0,F.jsx)(ib,{testnet:!0})},{id:1088,name:"Metis",logo:(0,F.jsx)(ix,{})},{id:599,name:"Metis Goerli",logo:(0,F.jsx)(ix,{testnet:!0})},{id:4689,name:"IoTeX",logo:(0,F.jsx)(im,{})},{id:4690,name:"IoTeX Testnet",logo:(0,F.jsx)(im,{testnet:!0})},{id:8453,name:"Base",logo:(0,F.jsx)(it,{})},{id:84531,name:"Base Goerli",logo:(0,F.jsx)(it,{testnet:!0})},{id:84532,name:"Base Sepolia",logo:(0,F.jsx)(it,{testnet:!0})},{id:7777777,name:"Zora",logo:(0,F.jsx)(iC,{})},{id:0x3b9ac9ff,name:"Zora Sepolia",logo:(0,F.jsx)(iC,{testnet:!0})},{id:999,name:"Zora Goerli Testnet",logo:(0,F.jsx)(iC,{testnet:!0})},{id:36888,name:"AB",logo:(0,F.jsx)(({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#F7931B"},children:(0,F.jsx)("path",{d:"M94.558 65.118C93.5837 63.1377 92.2791 61.3379 90.7 59.796C89.89 59.058 88.978 58.284 87.97 57.486L89.116 56.676C90.862 55.596 92.23 53.46 93.316 50.136C94.0744 47.735 94.2795 45.1935 93.916 42.702C93.5838 40.3549 92.8124 38.0914 91.642 36.03C90.5726 34.1194 89.1129 32.4553 87.358 31.146C85.6873 29.9356 83.8226 29.0185 81.844 28.434C79.7916 27.8248 77.6609 27.5196 75.52 27.528H75.238V24H67.24V27.528H51.838L37.15 54.186H26.764V63.63H31.936L16.6 91.434L16 92.568H23.812L39.772 63.618H53.38V92.586H67.24V96.108H75.214V92.568C79.138 92.484 82.27 92.082 84.532 91.368C87.0218 90.6086 89.2878 89.2511 91.132 87.414C92.6786 85.9057 93.9533 84.1418 94.9 82.2C96.0709 79.4961 96.6223 76.5646 96.514 73.62C96.5469 70.6708 95.8764 67.7563 94.558 65.118ZM88.012 76.986C87.676 79.842 86.638 81.846 84.928 82.944C83.2208 84.0869 81.2901 84.8538 79.264 85.194C76.956 85.5083 74.6267 85.6387 72.298 85.584H61.06V63.234H74.95C76.7925 63.2476 78.6331 63.3578 80.464 63.564C81.8393 63.7828 83.1225 64.3931 84.16 65.322C85.4337 66.3841 86.4579 67.7136 87.16 69.216C88.09 71.31 88.372 73.914 88.012 76.986ZM61.06 54.186V34.668H74.182C75.7336 34.6774 77.2799 34.8483 78.796 35.178C80.1951 35.4563 81.5338 35.9804 82.75 36.726C83.9299 37.5662 84.8541 38.7167 85.42 40.05C86.1974 41.9018 86.4647 43.928 86.194 45.918C86.0823 47.7403 85.4189 49.4855 84.292 50.922C83.2316 52.1329 81.834 52.9999 80.278 53.412C78.2268 53.9539 76.1114 54.2142 73.99 54.186H61.06ZM44.98 54.186L53.38 38.946V54.186H44.98Z",fill:"white"})}),{})},{id:143,name:"Monad",logo:(0,F.jsx)(({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#836EF9"},children:(0,F.jsx)("path",{d:"M15.9999 4C12.5346 4 4 12.5344 4 15.9999C4 19.4655 12.5346 28 15.9999 28C19.4653 28 28 19.4653 28 15.9999C28 12.5345 19.4654 4 15.9999 4ZM14.13 22.862C12.6687 22.4638 8.73986 15.5913 9.13812 14.13C9.53639 12.6686 16.4087 8.73984 17.87 9.1381C19.3314 9.5363 23.2602 16.4087 22.8619 17.8701C22.4637 19.3314 15.5913 23.2602 14.13 22.862Z",fill:"white"})}),{})},{id:5e3,name:"Mantle",logo:(0,F.jsx)(iv,{})},{id:5003,name:"Mantle Sepolia",logo:(0,F.jsx)(iv,{testnet:!0})},{id:2818,name:"Morph",logo:(0,F.jsx)(({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#F9F9F3"},children:(0,F.jsx)("path",{d:"M14.1794 10.0151C14.364 10.0151 14.5156 10.0659 14.684 10.1049C15.898 10.3881 16.7001 11.362 16.7791 12.4776C16.8031 12.819 16.7077 13.4175 16.8019 13.7135C16.9344 14.128 17.6095 14.2538 17.9354 13.939C19.0754 12.9438 20.0976 11.6995 21.2408 10.7251C21.686 10.3456 22.2233 10.108 22.8222 10.0074C23.0985 10.0003 23.3534 9.99238 23.5833 10.0146C24.7778 10.0146 25.994 11.0623 25.994 12.2181L26 20.9472C25.8692 22.3198 23.6172 22.2892 23.4744 21.0118C23.3697 20.0744 23.555 18.9854 23.4755 18.0342C23.4128 17.2877 22.603 16.8915 21.972 17.4386C20.5749 18.6504 19.3309 20.135 17.9294 21.3587C16.5066 22.4935 14.254 22.0055 13.5767 20.3995C13.2579 19.6431 13.5423 18.9879 13.3947 18.2819C13.2977 17.8176 12.6852 17.6069 12.276 17.9024L8.65454 21.3764C5.83194 23.3678 2.39085 20.1721 4.82985 17.6542C7.14407 15.2653 9.73564 13.0785 12.0564 10.6915C12.4847 10.3373 13.1604 10.0629 13.7401 10.0141C14 9.9922 14.1794 10.0141 14.1794 10.0141V10.0151Z",fill:"#18C900"})}),{})},{id:98866,name:"Plume",logo:(0,F.jsx)(({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#FF3D00"},children:(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 8.00117V14.3617L10.2844 16.6348V10.2743L16.6521 10.2955L14.3688 8.02123L8.00122 8L8 8.00117ZM19.5849 13.0886V18.8313L17.3005 16.5582V10.8154L19.5849 13.0886ZM13.2159 19.429H18.9843L16.7011 17.1547H10.9326L13.2159 19.429ZM22.8315 22.0346V16.3207L20.5471 14.0476V20.4082L14.1794 20.387L16.4627 22.6612L22.2211 22.6804L23.4355 23.8893L24.2131 24L24.065 23.2627L22.8315 22.0346Z",fill:"white"})}),{})},{id:900,name:"Solana",logo:(0,F.jsx)(({testnet:e,...t})=>(0,F.jsxs)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"black"},children:[(0,F.jsx)("defs",{children:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("linearGradient",{id:"solGrad1",x1:"12.6167",y1:"2.25997",x2:"5.69168",y2:"15.9074",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#00FFA3"}),(0,F.jsx)("stop",{offset:"1",stopColor:"#DC1FFF"})]}),(0,F.jsxs)("linearGradient",{id:"solGrad2",x1:"12.6164",y1:"2.2599",x2:"5.69144",y2:"15.9073",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#00FFA3"}),(0,F.jsx)("stop",{offset:"1",stopColor:"#DC1FFF"})]}),(0,F.jsxs)("linearGradient",{id:"solGrad3",x1:"12.6167",y1:"2.25989",x2:"5.69168",y2:"15.9073",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"#00FFA3"}),(0,F.jsx)("stop",{offset:"1",stopColor:"#DC1FFF"})]})]})}),(0,F.jsx)("circle",{cx:"10",cy:"10",r:"10",fill:"black"}),(0,F.jsx)("path",{d:"M5.88141 12.6256C5.96166 12.5477 6.07046 12.5039 6.1839 12.5039H16.6508C16.8415 12.5039 16.9369 12.728 16.8021 12.859L14.7338 14.8676C14.6536 14.9455 14.5448 14.9893 14.4314 14.9893H3.96441C3.77373 14.9893 3.67828 14.7652 3.81316 14.6342L5.88141 12.6256Z",fill:"url(#solGrad1)"}),(0,F.jsx)("path",{d:"M5.88116 5.12171C5.96141 5.04378 6.07021 5 6.18366 5H16.6506C16.8413 5 16.9367 5.22409 16.8018 5.35508L14.7336 7.36365C14.6533 7.44158 14.5446 7.48536 14.4311 7.48536H3.96416C3.77349 7.48536 3.67804 7.26126 3.81292 7.13027L5.88116 5.12171Z",fill:"url(#solGrad2)"}),(0,F.jsx)("path",{d:"M14.7338 8.84973C14.6536 8.77178 14.5448 8.72803 14.4314 8.72803H3.96441C3.77373 8.72803 3.67828 8.9521 3.81316 9.08309L5.88141 11.0916C5.96165 11.1696 6.07046 11.2134 6.1839 11.2134H16.6508C16.8415 11.2134 16.9369 10.9893 16.8021 10.8583L14.7338 8.84973Z",fill:"url(#solGrad3)"})]}),{})},{id:1400,name:"Aptos",logo:(0,F.jsx)(({testnet:e,...t})=>(0,F.jsx)("svg",{...t,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#051419"},children:(0,F.jsx)("path",{d:"M13.2557 7.10443C13.1665 7.10432 13.0784 7.08538 12.9971 7.04884C12.9158 7.0123 12.8431 6.95899 12.7838 6.89241L12.1559 6.18568C12.1095 6.13376 12.0526 6.09223 11.9891 6.06379C11.9255 6.03535 11.8567 6.02065 11.787 6.02065C11.7174 6.02065 11.6485 6.03535 11.585 6.06379C11.5214 6.09223 11.4646 6.13376 11.4182 6.18568L10.8797 6.79279C10.7924 6.89115 10.6852 6.96985 10.5653 7.02369C10.4453 7.07753 10.3153 7.10528 10.1838 7.1051H1.71106C1.46606 7.80251 1.31112 8.52835 1.25 9.265H9.24885C9.39019 9.265 9.52413 9.20779 9.62106 9.10616L10.3662 8.33212C10.4121 8.2843 10.4673 8.24628 10.5284 8.22037C10.5895 8.19446 10.6552 8.18119 10.7215 8.18135H10.7525C10.8938 8.18135 11.0285 8.24125 11.122 8.34693L11.7493 9.05366C11.8691 9.1876 12.0401 9.265 12.2205 9.265H18.75C18.6882 8.52823 18.5333 7.80225 18.2889 7.10443H13.2557ZM6.09077 13.8049C6.23212 13.8049 6.36606 13.7477 6.46298 13.6461L7.20808 12.872C7.25409 12.824 7.30937 12.7858 7.37057 12.7598C7.43177 12.7337 7.49763 12.7204 7.56413 12.7206H7.5951C7.73577 12.7206 7.87106 12.7812 7.96394 12.8868L8.59125 13.5936C8.71106 13.7275 8.88202 13.8049 9.06308 13.8049H17.9113C18.2462 13.113 18.4877 12.3796 18.6295 11.6241H10.138C10.049 11.6239 9.96096 11.6049 9.87978 11.5684C9.79859 11.5319 9.72602 11.4786 9.66683 11.4121L9.03885 10.7054C8.99238 10.6535 8.93548 10.6119 8.87187 10.5835C8.80825 10.555 8.73935 10.5403 8.66966 10.5403C8.59998 10.5403 8.53108 10.555 8.46746 10.5835C8.40385 10.6119 8.34695 10.6535 8.30048 10.7054L7.76202 11.3125C7.67475 11.4107 7.56765 11.4892 7.4478 11.5429C7.32795 11.5966 7.19807 11.6243 7.06673 11.6241H1.37115C1.51587 12.3914 1.75817 13.1231 2.09 13.8049H6.09077ZM12.3679 4.74462C12.5092 4.74462 12.6432 4.68741 12.7401 4.58577L13.4852 3.81174C13.5312 3.76391 13.5864 3.7259 13.6475 3.69999C13.7085 3.67407 13.7742 3.6608 13.8406 3.66097H13.8715C14.0129 3.66097 14.1475 3.72087 14.2411 3.82654L14.8684 4.53327C14.9882 4.66722 15.1591 4.74462 15.3395 4.74462H17.0222C16.2026 3.65792 15.1417 2.77656 13.9231 2.17009C12.7046 1.56362 11.3618 1.24864 10.0007 1.25C7.13 1.25 4.58173 2.62308 2.97913 4.74462H12.3679ZM6.68712 15.9668C6.59814 15.9667 6.51018 15.9478 6.429 15.9114C6.34781 15.875 6.27522 15.8219 6.21596 15.7555L5.58798 15.0488C5.54152 14.9968 5.48462 14.9553 5.421 14.9268C5.35738 14.8984 5.28848 14.8837 5.2188 14.8837C5.14911 14.8837 5.08021 14.8984 5.0166 14.9268C4.95298 14.9553 4.89608 14.9968 4.84962 15.0488L4.31115 15.6559C4.22381 15.7541 4.1166 15.8327 3.99663 15.8864C3.87665 15.9401 3.74664 15.9678 3.61519 15.9675H3.57952C4.40143 16.8471 5.39564 17.5481 6.50023 18.0268C7.60482 18.5055 8.79614 18.7517 10 18.75C12.5348 18.75 14.8172 17.6791 16.4205 15.9675L6.68712 15.9668Z",fill:"white"})}),{})}],ik=eW.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${560}px) {
    flex-direction: column-reverse;
  }
`,iy=eW(D.motion.div)`
  display: block;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  background: var(--ck-body-background);
  svg {
    border-radius: inherit;
    display: block;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: auto;
  }
  ${e=>e.$empty&&z.css`
      display: flex;
      align-items: center;
      justify-content: center;
      &:before {
        content: '?';
        color: var(--ck-body-color-muted);
        font-weight: bold;
        font-family: var(--ck-font-family);
      }
    `}
  @media only screen and (max-width: ${560}px) {
    border-radius: 16px;
    width: 32px;
    height: 32px;
  }
`,iA=eW(D.motion.div)`
  position: relative;
`,ij=eW(D.motion.div)`
  position: absolute;
  inset: -6px;
  animation: rotateSpinner 1200ms linear infinite;
  pointer-events: none;
  svg {
    display: block;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: auto;
  }
  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,iS=eW.div`
  position: relative;
  margin: -8px -8px;
  &:after {
    border-radius: var(--border-radius, 0);
    z-index: 2;
    content: '';
    pointer-events: none;
    position: absolute;
    inset: 0 2px;
    box-shadow: inset 0 16px 8px -12px var(--background, var(--ck-body-background)),
      inset 0 -16px 8px -12px var(--background, var(--ck-body-background));
  }
`,iE=eW(D.motion.div)`
  padding: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 242px;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  @media only screen and (max-width: ${560}px) {
    padding: 8px 14px;
    margin: 2px -2px 0;
    max-height: 60vh;
  }
`,iL=eW(D.motion.button)`
  appearance: none;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 11px;
  margin: 0 0 1px;
  padding: 8px 0;
  padding-right: 154px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  text-decoration: none;
  color: var(--ck-body-color);
  background: none;
  white-space: nowrap;
  transition: transform 100ms ease, background-color 100ms ease;
  transform: translateZ(0px);
  &:before {
    content: '';
    background: currentColor;
    position: absolute;
    z-index: -1;
    inset: 0 var(--ck-dropdown-active-inset, -8px);
    border-radius: var(--ck-dropdown-active-border-radius, 12px);
    opacity: 0;
    transition: opacity 180ms ease;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0 var(--ck-dropdown-active-inset, -8px);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 180ms ease;
    outline: 2px solid var(--ck-focus-color);
  }
  @media only screen and (max-width: ${560}px) {
    font-size: 17px;
    padding: 8px 0;
  }
  @media only screen and (min-width: ${560}px) {
    &:hover {
      &:before {
        transition-duration: 80ms;
        opacity: 0.05;
      }
    }
  }
  &:active {
    transform: scale(0.99) translateZ(0px);
  }
  &:disabled {
    //opacity: 0.4;
    pointer-events: none;
  }
  &:focus-visible {
    outline: none !important;
    &:after {
      opacity: 1;
    }
  }
  ${e=>"secondary"===e.$variant&&z.css`
      padding: 12px 4px;
      margin: 0 0 8px;
      &:last-child {
        margin-bottom: 0;
      }
      &:before {
        opacity: 0.05;
      }
      &:hover:before {
        opacity: 0.1;
      }
    `}
`,iM=eW(D.motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--ck-body-color-muted);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  padding-right: 4px;
  span {
    display: block;
    position: relative;
  }
  @media only screen and (max-width: ${560}px) {
    font-size: 17px;
    padding: 0;
  }
`,iN=eW(D.motion.div)`
  position: absolute;
  z-index: -1;
  inset: 0 var(--ck-dropdown-active-inset, -8px);
  background: var(--ck-dropdown-active-background, rgba(26, 136, 248, 0.1));
  box-shadow var(--ck-dropdown-active-box-shadow);
  border-radius: var(--ck-dropdown-active-border-radius, 12px);
  
  @media only screen and (max-width: ${560}px) {
    inset: 0 var(--ck-dropdown-active-inset, -8px);
  }
`,iI=(0,F.jsxs)("svg",{"aria-hidden":"true",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 16.75C2.69036 16.75 3.25 17.3096 3.25 18V19C3.25 26.5939 9.40609 32.75 17 32.75V35.25C8.02537 35.25 0.75 27.9746 0.75 19V18C0.75 17.3096 1.30964 16.75 2 16.75Z",fill:"url(#paint0_linear_1288_18701)"}),(0,F.jsx)("defs",{children:(0,F.jsxs)("linearGradient",{id:"paint0_linear_1288_18701",x1:"2",y1:"19.4884",x2:"16.8752",y2:"33.7485",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"var(--ck-spinner-color)"}),(0,F.jsx)("stop",{offset:"1",stopColor:"var(--ck-spinner-color)",stopOpacity:"0"})]})})]}),iF=({variant:e})=>{let{connector:t,chain:n}=(0,s.useAccount)(),{chains:o,isPending:r,switchChain:i,error:a}=(0,u.useSwitchChain)(),[c,l]=(0,O.useState)(void 0),d=t6({}),p=e_(),h=(null==a?void 0:a.code)===4902,g=h||!i,f=e=>{i&&(l(e),i({chainId:e}))},{triggerResize:b}=ar();return(0,F.jsxs)(ik,{style:{marginBottom:void 0!==i?-8:0},children:[(0,F.jsx)(iS,{children:(0,F.jsx)(iE,{children:o.map(o=>{var i;let a={...iw.find(e=>e.id===o.id),...o};return(0,F.jsxs)(iL,{$variant:e,disabled:g||a.id===(null==n?void 0:n.id)||r&&c===a.id,onClick:()=>null==f?void 0:f(a.id),style:{opacity:g&&a.id!==(null==n?void 0:n.id)?.4:void 0},children:[(0,F.jsxs)("span",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:12,color:a.id===(null==n?void 0:n.id)?"var(--ck-dropdown-active-color, inherit)":"inherit"},children:[(0,F.jsxs)(iA,{children:[(0,F.jsx)(ij,{initial:{opacity:0},animate:{opacity:r&&c===a.id?1:0},transition:{ease:[.76,0,.24,1],duration:.15,delay:.1},children:(0,F.jsx)(D.motion.div,{animate:p&&"coinbaseWalletSDK"===(null==t?void 0:t.id)&&r&&c===a.id?{opacity:[1,0],transition:{delay:4,duration:3}}:{opacity:1},children:iI},`${null==a?void 0:a.id}-${null==a?void 0:a.name}`)}),(0,F.jsx)(iy,{children:null!=(i=a.logo)?i:(0,F.jsx)(ie,{})})]}),a.name]}),"secondary"!==e&&(0,F.jsx)(iM,{children:(0,F.jsxs)(R.AnimatePresence,{initial:!1,exitBeforeEnter:!0,children:[a.id===(null==n?void 0:n.id)&&(0,F.jsx)(D.motion.span,{style:{color:"var(--ck-dropdown-active-color, var(--ck-focus-color))",display:"block",position:"relative"},initial:{opacity:0,x:-4},animate:{opacity:1,x:0},exit:{opacity:0,x:4,transition:{duration:.1,delay:0}},transition:{ease:[.76,0,.24,1],duration:.3,delay:.2},children:d.connected},"connectedText"),r&&c===a.id&&(0,F.jsx)(D.motion.span,{style:{color:"var(--ck-dropdown-pending-color, inherit)",display:"block",position:"relative"},initial:{opacity:0,x:-4},animate:{opacity:1,x:0},exit:{opacity:0,x:4},transition:{ease:[.76,0,.24,1],duration:.3,delay:.1},children:(0,F.jsx)(D.motion.span,{animate:p&&"coinbaseWalletSDK"===(null==t?void 0:t.id)&&{opacity:[1,0],transition:{delay:4,duration:4}},children:d.approveInWallet})},"approveText")]})}),"secondary"===e?(0,F.jsx)(iN,{initial:!1,animate:{opacity:+(a.id===(null==n?void 0:n.id))},transition:{duration:.3,ease:"easeOut"}}):a.id===(null==n?void 0:n.id)&&(0,F.jsx)(iN,{layoutId:"activeChain",layout:"position",transition:{duration:.3,ease:"easeOut"}})]},`${null==a?void 0:a.id}-${null==a?void 0:a.name}`)})})}),(0,F.jsx)(R.AnimatePresence,{children:h&&(0,F.jsx)(D.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:[.76,0,.24,1],duration:.3},onAnimationStart:b,onAnimationComplete:b,children:(0,F.jsx)("div",{style:{paddingTop:10,paddingBottom:8},children:(0,F.jsxs)(oW,{children:[d.warnings_walletSwitchingUnsupported," ",d.warnings_walletSwitchingUnsupportedResolve]})})})})]})},iO=eW(D.motion.div)`
  z-index: 2147483647;
  position: fixed;
  inset: 0;
`,iB=eW(D.motion.div)`
  position: absolute;
  inset: 0;
`,i_=eW(D.motion.div)`
  --shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  --background: var(--ck-dropdown-background, var(--ck-tooltip-background));
  --border-radius: var(
    --ck-dropdown-border-radius,
    var(--ck-tooltip-border-radius, 12px)
  );

  pointer-events: auto;
  z-index: 2147483647;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: fit-content;
  padding: 14px 16px 16px;
  color: var(--ck-dropdown-color, var(--ck-tooltip-color));
  background: var(--background);
  box-shadow: var(
    --ck-dropdown-box-shadow,
    var(--ck-tooltip-shadow, var(--shadow))
  );
  border-radius: var(--border-radius);
`,iD=eW(D.motion.div)`
  padding: 0 0 6px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  user-select: none;
  color: var(--ck-dropdown-color, var(--ck-tooltip-color));
`,iR=({children:e,open:t,onClose:n,offsetX:o=0,offsetY:r=8})=>{var i,a,s;let c=ar(),l=tR(),d=t6(),[u,p]=(0,O.useState)({x:0,y:0});tF(t);let h=(0,O.useRef)(null);(0,O.useEffect)(()=>{let e=e=>{var o,r,i;if(t&&("Escape"===e.key&&n(),"ArrowDown"===e.key||"ArrowUp"===e.key)){if(!h.current)return;e.preventDefault();let t=null==(o=h.current)?void 0:o.querySelectorAll(`
            a[href]:not(:disabled),
            button:not(:disabled),
            textarea:not(:disabled),
            input[type="text"]:not(:disabled),
            input[type="radio"]:not(:disabled),
            input[type="checkbox"]:not(:disabled),
            select:not(:disabled)
          `),n=t[0],a=t[t.length-1];if("ArrowUp"===e.key)if(document.activeElement===n)a.focus();else{let e=null==(r=null==document?void 0:document.activeElement)?void 0:r.previousSibling;for(e||(e=a);e.disabled;)e=e.previousSibling;e.focus()}else if(document.activeElement===a)n.focus();else{let e=null==(i=null==document?void 0:document.activeElement)?void 0:i.nextSibling;for(e||(e=n);e.disabled;)e=e.nextSibling;e.focus()}}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[t]);let g=(0,O.useRef)(null),f=(0,O.useCallback)(e=>{e&&(g.current=e,m())},[t]),[b,x]=(0,Q.default)({debounce:120,offsetSize:!0,scroll:!0}),m=()=>{if(!g.current||x.top+x.bottom+x.left+x.right+x.height+x.width===0)return;let e=x.left+o,t=x.top+x.height+r;g.current.style.left=`${e}px`,g.current.style.top=`${t}px`};return("u">typeof window?O.useLayoutEffect:O.useEffect)(m,[g.current,x,t]),(0,O.useEffect)(m,[t,g.current]),(0,O.useEffect)(()=>(m(),window.addEventListener("scroll",n),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}),[]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{ref:b,children:e}),(0,F.jsx)(R.AnimatePresence,{children:t&&(0,F.jsx)(e9,{children:(0,F.jsx)(e8,{$useTheme:null!=(i=l.theme)?i:c.theme,$useMode:null!=(a=l.mode)?a:c.mode,$customTheme:null!=(s=l.customTheme)?s:c.customTheme,children:(0,F.jsx)(tO,{children:(0,F.jsxs)(iO,{ref:h,children:[(0,F.jsx)(iB,{onClick:n}),(0,F.jsxs)(i_,{ref:f,style:{left:u.x,top:u.y},initial:"collapsed",animate:"open",exit:"collapsed",variants:{collapsed:{transformOrigin:"0 0",opacity:0,scale:.96,z:.01,y:-4,x:0,transition:{duration:.1}},open:{transformOrigin:"0 0",willChange:"opacity,transform",opacity:1,scale:1,z:.01,y:0,x:0,transition:{ease:[.76,0,.24,1],duration:.15}}},children:[(0,F.jsx)(iD,{children:d.switchNetworks}),(0,F.jsx)(iF,{})]})]})})})})})]})},iT=eW.div`
  --bg: transparent;
  --color: #333;
  ${e=>"string"==typeof e.size?z.css`
          --width: ${e.size};
          --height: ${e.size};
        `:z.css`
          --width: ${e.size>=0?`${e.size}px`:"24px"};
          --height: ${e.size>=0?`${e.size}px`:"24px"};
        `};
  ${e=>"string"==typeof e.radius?z.css`
          --radius: ${e.radius};
        `:z.css`
          --radius: ${e.radius>=0?`${e.radius}px`:"24px"};
        `};
  display: block;
  position: relative;
  width: var(--width);
  height: var(--height);
  min-width: var(--width);
  min-height: var(--height);
  border-radius: var(--radius);
  background: var(--ck-body-background-secondary);
  pointer-events: none;
  user-select: none;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,iz=eW(D.motion.div)`
  display: block;
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`,iW=z.keyframes`
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
`,iU=eW(D.motion.div)`
  position: absolute;
  inset: 0;
  animation: ${iW} 1s linear infinite;
  svg {
    display: block;
    position: absolute;
    inset: 0;
  }
`,iH=eW(D.motion.div)`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 40%;
  min-width: 13px;
  min-height: 13px;
  color: var(--ck-body-color-danger, red);
  svg {
    display: block;
    position: relative;
    top: -30%;
    right: -30%;
  }
`,iG=(0,F.jsxs)("svg",{"aria-hidden":"true",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.3592 30.1654C10.0472 29.4491 8.85718 28.524 7.83713 27.424C6.81708 26.324 5.98425 25.0677 5.36889 23.7054C5.20157 23.335 5.05033 22.9567 4.91578 22.5717C4.51465 21.4237 4.26735 20.2308 4.17794 19.0239C4.16599 18.8626 4.13894 18.7041 4.09809 18.5507C3.85023 17.6197 3.09399 16.8738 2.11531 16.7999C0.975331 16.7138 -0.0310983 17.5702 0.0141657 18.7125C0.0223289 18.9185 0.0340286 19.1243 0.049253 19.3298C0.165374 20.8971 0.486545 22.4464 1.00749 23.9373C1.10424 24.2142 1.20764 24.4884 1.31755 24.7596C2.13617 26.7799 3.31595 28.6371 4.80146 30.239C6.28696 31.841 8.04998 33.1573 10.0029 34.1258C10.2651 34.2558 10.5307 34.3796 10.7995 34.4969C12.247 35.1287 13.7676 35.5656 15.3217 35.7995C15.5255 35.8301 15.7298 35.8573 15.9346 35.881C17.0703 36.0122 18.0001 35.0731 18.0001 33.9299C18.0001 32.9484 17.3133 32.1381 16.4036 31.8208C16.2537 31.7685 16.0977 31.7296 15.9377 31.7056C14.7411 31.5255 13.5702 31.1891 12.4556 30.7026C12.0818 30.5394 11.716 30.3601 11.3592 30.1654Z",fill:"url(#paint0_linear_1288_1870)"}),(0,F.jsx)("defs",{children:(0,F.jsxs)("linearGradient",{id:"paint0_linear_1288_1870",x1:"2",y1:"19.4884",x2:"16.8752",y2:"33.7485",gradientUnits:"userSpaceOnUse",children:[(0,F.jsx)("stop",{stopColor:"var(--ck-connectbutton-balance-color,currentColor)",stopOpacity:"0.7"}),(0,F.jsx)("stop",{offset:"1",stopColor:"var(--ck-connectbutton-balance-color,currentColor)",stopOpacity:"0"})]})})]}),iP=({id:e,unsupported:t,radius:n="50%",size:o=24})=>{var r;let i=oL(e),a=iw.find(t=>t.id===e);return r4()?(0,F.jsx)(iT,{size:o,radius:n,children:(0,F.jsxs)(R.AnimatePresence,{initial:!1,children:[(null!=t?t:!i)&&(0,F.jsx)(iH,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,F.jsxs)("svg",{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,F.jsx)("path",{d:"M2.61317 11.2501H9.46246C10.6009 11.2501 11.3256 10.3506 11.3256 9.3549C11.3256 9.05145 11.255 8.73244 11.0881 8.43303L7.65903 2.14708C7.659 2.14702 7.65897 2.14696 7.65893 2.1469C7.65889 2.14682 7.65884 2.14673 7.65879 2.14664C7.31045 1.50746 6.6741 1.17871 6.04 1.17871C5.41478 1.17871 4.763 1.50043 4.41518 2.14968L0.993416 8.43476C0.828865 8.72426 0.75 9.04297 0.75 9.3549C0.75 10.3506 1.47471 11.2501 2.61317 11.2501Z",fill:"currentColor",stroke:"var(--ck-body-background, #fff)",strokeWidth:"1.5"}),(0,F.jsx)("path",{d:"M6.03258 7.43916C5.77502 7.43916 5.63096 7.29153 5.62223 7.02311L5.55675 4.96973C5.54802 4.69684 5.74446 4.5 6.02821 4.5C6.3076 4.5 6.51277 4.70131 6.50404 4.9742L6.43856 7.01864C6.42546 7.29153 6.2814 7.43916 6.03258 7.43916ZM6.03258 9.11676C5.7401 9.11676 5.5 8.9065 5.5 8.60677C5.5 8.30704 5.7401 8.09678 6.03258 8.09678C6.32506 8.09678 6.56515 8.30256 6.56515 8.60677C6.56515 8.91097 6.32069 9.11676 6.03258 9.11676Z",fill:"white"})]})}),e?(0,F.jsx)(iz,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:null!=(r=null==a?void 0:a.logo)?r:(0,F.jsx)(ie,{})},`${null==a?void 0:a.id}-${null==a?void 0:a.name}-${e}`):(0,F.jsx)(iU,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:iG},"loading")]})}):(0,F.jsx)("div",{style:{width:o,height:o}})},iQ=eW(D.motion.div)``,iZ=eW(D.motion.button)`
  --color: var(
    --ck-dropdown-button-color,
    var(--ck-button-primary-color, var(--ck-body-color))
  );
  --background: var(
    --ck-dropdown-button-background,
    var(--ck-secondary-button-background, var(--ck-body-background-secondary))
  );
  --box-shadow: var(
    --ck-dropdown-button-box-shadow,
    var(
      --ck-secondary-button-box-shadow,
      var(--ck-button-primary-box-shadow),
      none
    )
  );

  --hover-color: var(--ck-dropdown-button-hover-color, var(--color));
  --hover-background: var(
    --ck-dropdown-button-hover-background,
    var(--background)
  );
  --hover-box-shadow: var(
    --ck-dropdown-button-hover-box-shadow,
    var(--box-shadow)
  );

  --active-color: var(--ck-dropdown-button-active-color, var(--hover-color));
  --active-background: var(
    --ck-dropdown-button-active-background,
    var(--hover-background)
  );
  --active-box-shadow: var(
    --ck-dropdown-button-active-box-shadow,
    var(--hover-box-shadow)
  );

  appearance: none;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  width: 52px;
  height: 30px;
  padding: 2px 6px 2px 3px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transform: translateZ(0px);

  transition: 100ms ease;
  transition-property: transform, background-color, box-shadow, color;

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);

  svg {
    position: relative;
    display: block;
  }

  ${e=>e.disabled?z.css`
          width: auto;
          padding: 3px;
          position: relative;
          left: -22px;
        `:z.css`
          cursor: pointer;

          @media only screen and (min-width: ${561}px) {
            &:hover,
            &:focus-visible {
              color: var(--hover-color);
              background: var(--hover-background);
              box-shadow: var(--hover-box-shadow);
            }
            &:active {
              color: var(--active-color);
              background: var(--active-background);
              box-shadow: var(--active-box-shadow);
            }
          }
        `}
`,iV=({...e})=>(0,F.jsx)("svg",{"aria-hidden":"true",width:"11",height:"6",viewBox:"0 0 11 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,F.jsx)("path",{d:"M1.5 1L5.5 5L9.5 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),iY=()=>{let e=ar(),[t,n]=(0,O.useState)(!1),{chain:o}=(0,s.useAccount)(),{chains:r}=(0,u.useSwitchChain)(),i=t6({CHAIN:null==o?void 0:o.name}),a=e_()||(null==window?void 0:window.innerWidth)<560;(0,O.useEffect)(()=>{e.open||n(!1)},[e.open]);let c=r.length<=1;return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(iQ,{children:(0,F.jsx)(iR,{offsetX:-12,open:!a&&t,onClose:()=>n(!1),children:(0,F.jsxs)(iZ,{"aria-label":eD(i.switchNetworks).toString(),disabled:c,onClick:()=>{a?e.setRoute(an.SWITCHNETWORKS):n(!t)},children:[c?(0,F.jsx)(rd,{message:i.chainNetwork,xOffset:-6,delay:.01,children:(0,F.jsx)(iP,{id:null==o?void 0:o.id})}):(0,F.jsx)(iP,{id:null==o?void 0:o.id}),!c&&(0,F.jsx)(iV,{style:{top:1,left:-3}})]})})})})},iJ=({closeModal:e})=>{var t,n,o;let r=ar(),i=tR(),a=t6(),{reset:c}=(0,h.useConnect)(),{disconnect:l}=(0,m.useDisconnect)(),{address:d,isConnected:u,connector:p,chain:g}=(0,s.useAccount)(),f="familyAccountsProvider"===(null==p?void 0:p.id),{data:x}=(0,C.useConnectorClient)({connector:p}),w=r9(),{data:k}=(0,b.useEnsName)({chainId:1,address:d,config:w}),{data:y}=(0,v.useBalance)({address:d}),[A,j]=(0,O.useState)(!1);(0,O.useEffect)(()=>{u||r.setOpen(!1)},[u]),(0,O.useEffect)(()=>{if(A)return e?e():r.setOpen(!1),()=>{l(),c()}},[A,l,c]);let S=["web95","rounded","minimal"].includes(null!=(n=null!=(t=i.theme)?t:r.theme)?n:"")?"....":void 0;return(0,F.jsxs)(ti,{children:[(0,F.jsxs)(tl,{style:{paddingBottom:22,gap:6},children:[(0,F.jsx)(rq,{children:(0,F.jsxs)(rK,{children:[(0,F.jsx)(rX,{children:(0,F.jsx)(iY,{})}),(0,F.jsx)(r6,{address:d})]})}),(0,F.jsx)(td,{children:(0,F.jsx)(o9,{string:d,children:null!=k?k:eN(d,S)})}),(null==(o=null==r?void 0:r.options)?void 0:o.hideBalance)?null:(0,F.jsx)(tu,{children:(0,F.jsx)(r$,{children:(0,F.jsxs)(R.AnimatePresence,{exitBeforeEnter:!0,initial:!1,children:[y&&(0,F.jsxs)(r1,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[eI(Number(null==y?void 0:y.formatted))," ",null==y?void 0:y.symbol]},`chain-${null==g?void 0:g.id}`),!y&&(0,F.jsx)(r2,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:" "})]})})})]}),f&&(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(nY,{onClick:async()=>{try{await (null==x?void 0:x.request({method:"family_switchAccounts",params:[]}))}catch(e){r.log("rpc method family_switchAccounts is not implemented in this connector",e)}},children:a.switchWallets})}),"safe"!==(null==p?void 0:p.id)&&(0,F.jsx)(nY,{onClick:()=>j(!0),icon:f?void 0:(0,F.jsx)(tW,{}),children:a.disconnect})]})},iq=()=>{let{reset:e}=(0,h.useConnect)(),{disconnect:t}=(0,m.useDisconnect)(),{connector:n,chain:o}=(0,s.useAccount)(),r=oL(null==o?void 0:o.id),i=t6({});return(0,F.jsx)(ti,{style:{width:278},children:(0,F.jsxs)(tl,{style:{padding:0,marginTop:-10},children:[!r&&(0,F.jsxs)(tu,{children:[i.warnings_chainUnsupported," ",i.warnings_chainUnsupportedResolve]}),(0,F.jsx)("div",{style:{padding:"6px 8px"},children:(0,F.jsx)(iF,{variant:"secondary"})}),!r&&"safe"!==(null==n?void 0:n.id)&&(0,F.jsxs)("div",{style:{paddingTop:12},children:[(0,F.jsx)(nm,{}),(0,F.jsx)(nY,{icon:(0,F.jsx)(tW,{}),variant:"secondary",onClick:()=>{t(),e()},children:i.disconnect})]})]})})},iK=z.keyframes`
  from{ transform: rotate(0deg); }
  to{   transform: rotate(360deg); }
`,iX=z.keyframes`
  from{ background-position: 0 0; }
  to{ background-position: 100% 0; }
`,i$=eW.div`
  @media only screen and (max-width: ${560}px) {
    margin: 5px auto 24px;
    padding: 16px 16px;
    border-radius: var(--ck-tertiary-border-radius, 24px);
    box-shadow: var(--ck-tertiary-box-shadow, none);
    background: var(--ck-body-background-tertiary);
  }
`,i1=eW(D.motion.div)`
  z-index: 2;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  transition: inherit;
  background: var(--ck-body-background-secondary);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  svg,
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: ${560}px) {
    width: 64px;
    height: 64px;
  }
`,i0=eW(D.motion.div)`
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  color: currentColor;
  border-radius: 100%;
  transition: inherit;
  svg {
    z-index: 3;
    position: relative;
    transform: scale(0.89);
    transition: inherit;
    opacity: 0.5;
  }
  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 10px;
    border-radius: inherit;
    border: 1px dashed var(--border-color);
    background: var(--ck-body-background);
    transition: inherit;
    animation: ${iK} 10s linear infinite;
  }
  &:after {
    z-index: 2;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: #34c759;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
    transform: scale(0);
    transition: inherit;
  }
  @media only screen and (max-width: ${560}px) {
    width: 64px;
    height: 64px;
    svg {
      transform: scale(1.1);
    }
  }
`,i2=eW(D.motion.svg)`
  display: block;
  position: relative;
  margin: 0 auto;
  transition: inherit;
  overflow: visible;
  rect {
    stroke: var(--border-color);
    rx: var(--ck-border-radius);
  }
  @media only screen and (max-width: ${560}px) {
    display: none;
  }
`,i3=eW(D.motion.div)`
  --border-color: var(--ck-siwe-border, var(--ck-body-divider));
  --border-size: 0;
  --border-style: dashed;

  user-select: none;
  pointer-events: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  margin: 12px auto;
  padding: 42px 32px;
  transition: all 320ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  border: var(--border-size) var(--border-style) var(--border-color);
  border-radius: var(--ck-border-radius);

  @media only screen and (max-width: ${560}px) {
    --border-size: 1px;
    margin: 0 auto 20px;
    padding: 38px 0;
    gap: 18px;
    + div {
      // easier than wrapping in another styled component
      padding-bottom: 10px;
    }
  }

  > div {
    z-index: 2;
    position: relative;
    transition: inherit;
  }

  &:before,
  &:after {
    z-index: 1;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 1px;
    margin-left: -60px;
    transition: inherit;
    animation: ${iX} 10s linear infinite;
    background: linear-gradient(
      90deg,
      var(--border-color),
      var(--border-color) 50%,
      transparent 50%,
      transparent 100%
    );
    background-size: 6px 1px;
  }

  &:after {
    background: var(--border-color);
    transform: scaleX(0);
  }

  ${({$connected:e})=>e&&z.css`
      &:before {
        opacity: 0;
      }
      &:after {
        transform: none;
      }
      ${i2} {
        rect {
          stroke-dasharray: 0 0;
        }
      }
      ${i1} {
        transform: scale(0.62);
      }
      ${i0} {
        svg {
          transform: scale(1.5);
          opacity: 1;
          color: #fff;
        }
        &:before {
          transform: scale(0);
        }
        &:after {
          transform: scale(1);
        }
      }
      @media only screen and (max-width: ${560}px) {
        --border-size: 1px;
        --border-style: solid;
        ${i0} {
          svg {
            transform: scale(1.75);
          }
        }
      }
    `};
`,i5=({showSignOutButton:e,onSignIn:t,onSignOut:n})=>{let o=r4(),r=t6(),{setOpen:i}=as(),{isSignedIn:a,isReady:c,isLoading:l,isRejected:d,isSuccess:u,isError:p,signIn:h,signOut:g,error:f}=tV({onSignIn:e=>null==t?void 0:t(e),onSignOut:()=>null==n?void 0:n()}),{address:b}=(0,s.useAccount)();return o?e&&a?(0,F.jsx)(nY,{style:{margin:0},onClick:g,icon:(0,F.jsx)(tW,{}),children:r.signOut},"button"):b?(0,F.jsx)(nY,{style:{margin:0},arrow:!a&&!l&&!d,onClick:l||u?void 0:h,disabled:l,waiting:l,icon:d&&(0,F.jsx)(D.motion.div,{initial:{rotate:-270},animate:{rotate:0},transition:{duration:1,ease:[.175,.885,.32,.98]},children:(0,F.jsx)(tG,{style:{opacity:.4}})}),children:u?r.signedIn:d?r.tryAgain:l?r.awaitingConfirmation:p?null!=f?f:"Unknown Error":r.signIn},"button"):(0,F.jsx)(nY,{style:{margin:0},onClick:()=>i(!0),arrow:!0,children:r.walletNotConnected},"button"):(0,F.jsx)(nY,{style:{margin:0},disabled:!0},"loading")},i4=({src:e,alt:t,width:n,height:o})=>{let r=(0,O.useRef)(null),[i,a]=(0,O.useState)(!0);return(0,O.useEffect)(()=>{r.current&&r.current.complete&&0!==r.current.naturalHeight||a(!1)},[e]),(0,F.jsx)("div",{style:{width:n,height:o,background:"rgba(0,0,0,0.02)",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.02)"},children:(0,F.jsx)("img",{ref:r,src:e,alt:t,width:n,height:o,onLoad:()=>a(!0),style:{transition:"opacity 0.2s ease",opacity:+!!i}})})},i8={duration:.2,ease:[.26,.08,.25,1]},i9={duration:.16,ease:[.26,.08,.25,1]},i6=()=>{var e,t;let o,r=ar(),{isSignedIn:i,reset:a}=tV(),c=e_(),[l,d]=(0,O.useState)(i?"signedIn":"signedOut"),u=t6({}),p="signedIn"===l?{heading:u.signInWithEthereumScreen_signedIn_heading,h1:u.signInWithEthereumScreen_signedIn_h1,p:u.signInWithEthereumScreen_signedIn_p,button:u.signInWithEthereumScreen_signedIn_button}:{heading:u.signInWithEthereumScreen_signedOut_heading,h1:u.signInWithEthereumScreen_signedOut_h1,p:u.signInWithEthereumScreen_signedOut_p,button:u.signInWithEthereumScreen_signedOut_button};(0,O.useEffect)(()=>{i&&d("signedIn")},[]),(0,O.useEffect)(()=>{i||d("signedOut")},[i]);let{address:h}=(0,s.useAccount)(),g=(o={svg:null,default:null},Array.from(document.getElementsByTagName("link")).forEach(e=>{("icon"===e.getAttribute("rel")||"shortcut icon"===e.getAttribute("rel"))&&e.getAttribute("href")&&("image/svg+xml"===e.getAttribute("type")?o.svg=e.getAttribute("href"):o.default=e.getAttribute("href"))}),o),f=null!=(t=null!=(e=n)?e:g.svg)?t:g.default;return(0,F.jsx)(ti,{style:{width:278},children:(0,F.jsxs)(tl,{style:{padding:0,marginTop:-10},children:[(0,F.jsx)(i$,{children:(0,F.jsx)(R.AnimatePresence,{exitBeforeEnter:!0,children:(0,F.jsx)(D.motion.div,{initial:!c&&{opacity:0,scale:.94},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94},transition:i9,children:(0,F.jsx)(tu,{style:{height:42},children:(0,F.jsx)(nr,{children:p.h1})})},eD(p.h1).toString())})}),(0,F.jsxs)(i3,{$connected:i,children:[(0,F.jsx)("div",{style:{position:"absolute",inset:0},children:(0,F.jsx)(i2,{width:"262",height:"134",viewBox:"0 0 262 134",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,F.jsx)(D.motion.rect,{x:"0",y:"0",rx:"12",width:"262",height:"134",strokeDasharray:"3 3",animate:{strokeDashoffset:[0,-6]},transition:{duration:.4,ease:"linear",repeat:1/0}})})}),(0,F.jsx)(D.motion.div,{initial:!c&&{opacity:0,x:50,scale:.8},animate:{opacity:1,x:0,scale:1},transition:i8,children:(0,F.jsx)(i1,{children:(0,F.jsx)(r6,{address:h,size:64})})},"avatarImage"),(0,F.jsx)(D.motion.div,{initial:!c&&{scale:.6},animate:{scale:1},transition:{...i8},children:(0,F.jsx)(i0,{children:(0,F.jsx)(tU,{})})},"tickIcon"),(0,F.jsx)(D.motion.div,{initial:!c&&{opacity:0,x:-40,scale:.8},animate:{opacity:1,x:0,scale:1},transition:{...i8},children:(0,F.jsx)(i1,{children:f?(0,F.jsx)(i4,{src:f,alt:"app"}):(0,F.jsx)(ie,{})})},"appLogo")]},"status"),(0,F.jsx)(R.AnimatePresence,{exitBeforeEnter:!0,children:(0,F.jsx)(D.motion.div,{style:{paddingBottom:c?24:12},initial:!c&&{opacity:0,scale:.94},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94},transition:i9,children:(0,F.jsx)(tu,{style:{height:42,marginTop:-1,marginBottom:-3},children:(0,F.jsx)(nr,{children:p.p})})},eD(p.p).toString())}),(0,F.jsx)(i5,{showSignOutButton:"signedIn"===l,onSignIn:()=>{setTimeout(()=>{r.setOpen(!1)},1e3)}})]})})},i7={},ae=({mode:e="auto",theme:n="auto",customTheme:o=i7,lang:r="en-US"})=>{var i;let a=ar(),{isConnected:c,chain:l}=(0,s.useAccount)(),d=oL(null==l?void 0:l.id),u=!((null==(i=a.options)?void 0:i.enforceSupportedChains)&&c&&!d),p=u&&a.route!==an.CONNECTORS&&a.route!==an.PROFILE,h=u&&a.route!==an.PROFILE,g={onboarding:(0,F.jsx)(nJ,{}),about:(0,F.jsx)(ou,{}),download:(0,F.jsx)(rJ,{}),connectors:(0,F.jsx)(oJ,{}),mobileConnectors:(0,F.jsx)(o6,{}),connect:(0,F.jsx)(rY,{}),profile:(0,F.jsx)(iJ,{}),switchNetworks:(0,F.jsx)(iq,{}),signInWithEthereum:(0,F.jsx)(i6,{})};function f(){a.setOpen(!1)}return(0,O.useEffect)(()=>{var e;c?(a.route!==an.PROFILE||a.route!==an.SIGNINWITHETHEREUM)&&(!a.signInWithEthereum||(null==(e=a.options)?void 0:e.disableSiweRedirect)?f():a.setRoute(an.SIGNINWITHETHEREUM)):f()},[c]),(0,O.useEffect)(()=>a.setMode(e),[e]),(0,O.useEffect)(()=>a.setTheme(n),[n]),(0,O.useEffect)(()=>a.setCustomTheme(o),[o]),(0,O.useEffect)(()=>a.setLang(r),[r]),(0,O.useEffect)(()=>{let e=t;if(!e||!a.open)return;let n=document.createElement("meta");return n.setAttribute("property","og:title"),n.setAttribute("content",e),document.head.prepend(n),()=>{document.head.removeChild(n)}},[a.open]),(0,F.jsx)(tD,{theme:n,customTheme:o,mode:e,children:(0,F.jsx)(nb,{open:a.open,pages:g,pageId:a.route,onClose:u?f:void 0,onInfo:h?()=>a.setRoute(an.ABOUT):void 0,onBack:p?()=>{a.route===an.SIGNINWITHETHEREUM||a.route===an.SWITCHNETWORKS?a.setRoute(an.PROFILE):a.route===an.DOWNLOAD?a.setRoute(an.CONNECT):a.setRoute(an.CONNECTORS)}:void 0})})},at=({onConnect:e,onDisconnect:t})=>{(0,c.useAccountEffect)({onConnect:({address:t,connector:n,isReconnected:o})=>{o||null==e||e({address:t,connectorId:null==n?void 0:n.id})},onDisconnect:()=>null==t?void 0:t()})},an={ONBOARDING:"onboarding",ABOUT:"about",CONNECTORS:"connectors",MOBILECONNECTORS:"mobileConnectors",CONNECT:"connect",DOWNLOAD:"download",PROFILE:"profile",SWITCHNETWORKS:"switchNetworks",SIGNINWITHETHEREUM:"signInWithEthereum"},ao=(0,O.createContext)(null),ar=()=>{let e=O.default.useContext(ao);if(!e)throw Error("ConnectKit Hook must be inside a Provider.");return e},ai={disconnected:[an.CONNECTORS,an.ABOUT,an.ONBOARDING,an.MOBILECONNECTORS,an.ONBOARDING],connected:[an.PROFILE,an.SWITCHNETWORKS,an.SIGNINWITHETHEREUM]},aa=[...ai.connected,...ai.disconnected],as=({onConnect:e,onDisconnect:t}={})=>{let n=ar();at({onConnect:e,onDisconnect:t});let{isConnected:o}=(0,s.useAccount)(),{signIn:r}=tV(),i=e=>{let t=e;aa.includes(e)?o?ai.connected.includes(e)||(t=an.PROFILE,n.log(`Route ${e} is not a valid route when connected, navigating to ${t} instead.`)):ai.disconnected.includes(e)||(t=an.CONNECTORS,n.log(`Route ${e} is not a valid route when disconnected, navigating to ${t} instead.`)):(t=o?an.PROFILE:an.CONNECTORS,n.log(`Route ${e} is not a valid route, navigating to ${t} instead.`)),n.setRoute(t),n.setOpen(!0)};return{open:n.open,setOpen:e=>{e?i(o?an.PROFILE:an.CONNECTORS):n.setOpen(!1)},openAbout:()=>i(an.ABOUT),openOnboarding:()=>i(an.ONBOARDING),openProfile:()=>i(an.PROFILE),openSwitchNetworks:()=>i(an.SWITCHNETWORKS),openSIWE:e=>{i(an.SIGNINWITHETHEREUM),e&&r()}}},ac=eW(D.motion.div)`
  top: 0;
  bottom: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;eW(D.motion.div)`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  overflow: hidden;
  svg {
    display: block;
  }
`;let al=eW(D.motion.div)`
  pointer-events: none;
  user-select: none;
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 8px;
`,ad=eW(D.motion.div)`
  z-index: 1;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
  background: var(--ck-body-color-danger, red);
  color: #fff;
  svg {
    display: block;
    position: relative;
    top: -1px;
  }
`,au=eW(D.motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 40px;
  padding: 0;
  line-height: 0;
  letter-spacing: -0.2px;
  font-size: var(--ck-connectbutton-font-size, 16px);
  font-weight: var(--ck-connectbutton-font-weight, 500);
  text-align: center;
  transition: 100ms ease;
  transition-property: color, background, box-shadow, border-radius;

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  &.primary {
    --color: var(--ck-connectbutton-color);
    --background: var(--ck-connectbutton-background);
    --box-shadow: var(--ck-connectbutton-box-shadow);
    --border-radius: var(--ck-connectbutton-border-radius, 12px);

    --hover-color: var(--ck-connectbutton-hover-color, var(--color));
    --hover-background: var(
      --ck-connectbutton-hover-background,
      var(--background)
    );
    --hover-box-shadow: var(
      --ck-connectbutton-hover-box-shadow,
      var(--box-shadow)
    );
    --hover-border-radius: var(
      --ck-connectbutton-hover-border-radius,
      var(--border-radius)
    );

    --active-color: var(--ck-connectbutton-active-color, var(--hover-color));
    --active-background: var(
      --ck-connectbutton-active-background,
      var(--hover-background)
    );
    --active-box-shadow: var(
      --ck-connectbutton-active-box-shadow,
      var(--hover-box-shadow)
    );
    --active-border-radius: var(
      --ck-connectbutton-active-border-radius,
      var(--hover-border-radius)
    );
  }
  &.secondary {
    --color: var(--ck-connectbutton-balance-color);
    --background: var(--ck-connectbutton-balance-background);
    --box-shadow: var(--ck-connectbutton-balance-box-shadow);
    --border-radius: var(
      --ck-connectbutton-balance-border-radius,
      var(--ck-connectbutton-border-radius, 12px)
    );

    --hover-color: var(--ck-connectbutton-balance-hover-color, var(--color));
    --hover-background: var(
      --ck-connectbutton-balance-hover-background,
      var(--background)
    );
    --hover-box-shadow: var(
      --ck-connectbutton-balance-hover-box-shadow,
      var(--box-shadow)
    );
    --hover-border-radius: var(
      --ck-connectbutton-balance-hover-border-radius,
      var(--border-radius)
    );

    --active-color: var(
      --ck-connectbutton-balance-active-color,
      var(--hover-color)
    );
    --active-background: var(
      --ck-connectbutton-balance-active-background,
      var(--hover-background)
    );
    --active-box-shadow: var(
      --ck-connectbutton-balance-active-box-shadow,
      var(--hover-box-shadow)
    );
    --active-border-radius: var(
      --ck-connectbutton-balance-active-border-radius,
      var(--hover-border-radius)
    );
  }
`,ap=eW.button`
  all: initial;
  appearance: none;
  user-select: none;
  position: relative;
  padding: 0;
  margin: 0;
  background: none;
  border-radius: var(--ck-border-radius);

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }

  display: flex;
  flex-wrap: nowrap;
  background: none;
  cursor: pointer;
  * {
    cursor: pointer;
  }
  &:hover {
    ${au} {
      color: var(--hover-color, var(--color));
      background: var(--hover-background, var(--background));
      box-shadow: var(--hover-box-shadow, var(--box-shadow));
      border-radius: var(--hover-border-radius, var(--border-radius));
    }
  }
  &:active {
    ${au} {
      color: var(--active-color, var(--hover-color, var(--color)));
      background: var(
        --active-background,
        var(--hover-background, var(--background))
      );
      box-shadow: var(
        --active-box-shadow,
        var(--hover-box-shadow, var(--box-shadow))
      );
      border-radius: var(
        --active-border-radius,
        var(--hover-border-radius, var(--border-radius))
      );
    }
  }
  &:focus-visible {
    outline: 2px solid var(--ck-family-brand);
  }
`,ah=({children:e,variant:t="primary",autoSize:n=!0,duration:o=.3,style:r})=>{let[i,a]=(0,Q.default)();return(0,F.jsx)(au,{className:t,initial:!1,animate:n?{width:a.width>10?a.width:"auto"}:void 0,transition:{duration:o,ease:[.25,1,.5,1],delay:.01},style:r,children:(0,F.jsx)("div",{ref:i,style:{whiteSpace:"nowrap",width:"fit-content",position:"relative",padding:"0 12px"},children:e})})},ag=eW(D.motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,af=z.keyframes`
  0%,100%{ opacity: 0.1; transform: scale(0.75); }
  50%{ opacity: 0.75; transform: scale(1.2) }
`,ab=eW.div`
  pointer-events: none;
  user-select: none;
  padding: 0 5px;
  span {
    display: inline-block;
    vertical-align: middle;
    margin: 0 2px;
    width: 3px;
    height: 3px;
    border-radius: 4px;
    background: currentColor;
    animation: ${af} 1000ms ease infinite both;
  }
`,ax=({hideIcon:e,hideSymbol:t})=>{let n=r4(),[o,r]=(0,O.useState)(!0),{address:i,chain:a}=(0,s.useAccount)();oS();let c=oL(null==a?void 0:a.id),l=(0,G.useQueryClient)(),{data:d}=(0,k.useBlockNumber)({watch:!0}),{data:u,queryKey:p}=(0,v.useBalance)({address:i,chainId:null==a?void 0:a.id});(0,O.useEffect)(()=>{(null==d||d)&&l.invalidateQueries({queryKey:p})},[d,p]);let h=iw.find(e=>e.id===(null==a?void 0:a.id)),g=`${!n||(null==u?void 0:u.formatted)===void 0?"balance-loading":`balance-${null==h?void 0:h.id}-${null==u?void 0:u.formatted}`}`;return(0,O.useEffect)(()=>{r(!1)},[]),(0,F.jsx)("div",{style:{position:"relative"},children:(0,F.jsx)(R.AnimatePresence,{initial:!1,children:(0,F.jsx)(D.motion.div,{initial:(null==u?void 0:u.formatted)!==void 0&&o?{opacity:1}:{opacity:0,position:"absolute",top:0,left:0,bottom:0},animate:{opacity:1,position:"relative"},exit:{opacity:0,position:"absolute",top:0,left:0,bottom:0},transition:{duration:.4,ease:[.25,1,.5,1],delay:.4},children:i&&n&&(null==u?void 0:u.formatted)!==void 0?c?(0,F.jsxs)(ag,{children:[!e&&(0,F.jsx)(iP,{id:null==a?void 0:a.id}),(0,F.jsx)("span",{style:{minWidth:32},children:eI(Number(null==u?void 0:u.formatted))}),!t&&` ${null==u?void 0:u.symbol}`]}):(0,F.jsxs)(ag,{children:[!e&&(0,F.jsx)(iP,{id:null==a?void 0:a.id}),(0,F.jsx)("span",{style:{minWidth:32},children:"???"})]}):(0,F.jsxs)(ag,{children:[!e&&(0,F.jsx)(iP,{id:null==a?void 0:a.id}),(0,F.jsx)("span",{style:{minWidth:32},children:(0,F.jsxs)(ab,{children:[(0,F.jsx)("span",{style:{animationDelay:"0ms"}}),(0,F.jsx)("span",{style:{animationDelay:"50ms"}}),(0,F.jsx)("span",{style:{animationDelay:"100ms"}})]})})]})},g)})})},am={initial:{zIndex:2,opacity:0,x:"-100%"},animate:{opacity:1,x:.1,transition:{duration:.4,ease:[.25,1,.5,1]}},exit:{zIndex:1,opacity:0,x:"-100%",pointerEvents:"none",position:"absolute",transition:{duration:.4,ease:[.25,1,.5,1]}}},aC={initial:{zIndex:2,opacity:0,x:"100%"},animate:{x:.2,opacity:1,transition:{duration:.4,ease:[.25,1,.5,1]}},exit:{zIndex:1,x:"100%",opacity:0,pointerEvents:"none",position:"absolute",transition:{duration:.4,ease:[.25,1,.5,1]}}},av={initial:{opacity:0},animate:{opacity:1,transition:{duration:.3,ease:[.25,1,.5,1]}},exit:{position:"absolute",opacity:0,transition:{duration:.3,ease:[.25,1,.5,1]}}},aw=({children:e})=>{let t=r4(),n=ar(),{open:o,setOpen:r}=as(),{address:i,isConnected:a,chain:c}=(0,s.useAccount)(),l=oL(null==c?void 0:c.id),d=r9(),{data:u}=(0,b.useEnsName)({chainId:1,address:i,config:d});return e&&t?(0,F.jsx)(F.Fragment,{children:e({show:function(){r(!0),n.setRoute(a?an.PROFILE:an.CONNECTORS)},hide:function(){r(!1)},chain:c,unsupported:!l,isConnected:!!i,isConnecting:o,address:i,truncatedAddress:i?eN(i):void 0,ensName:null==u?void 0:u.toString()})}):null};function ak({label:e,showAvatar:t,separator:n}){var o;let r=t6({}),i=ar(),{isSignedIn:a}=tV(),{address:c,chain:l}=(0,s.useAccount)(),d=oL(null==l?void 0:l.id),u=r9(),{data:p}=(0,b.useEnsName)({chainId:1,address:c,config:u}),h=r.connectWallet;return(0,F.jsx)(R.AnimatePresence,{initial:!1,children:c?(0,F.jsxs)(ac,{initial:"initial",animate:"animate",exit:"exit",variants:aC,style:{height:40},children:[t&&(0,F.jsxs)(al,{children:[(0,F.jsxs)(R.AnimatePresence,{initial:!1,children:[a&&(0,F.jsx)(D.motion.div,{style:{zIndex:2,position:"absolute",bottom:0,right:0},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,F.jsx)(tQ,{})}),!d&&(0,F.jsx)(ad,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,F.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,F.jsx)("path",{d:"M1.68831 13.5H12.0764C13.1026 13.5 13.7647 12.7197 13.7647 11.763C13.7647 11.4781 13.6985 11.1863 13.5462 10.9149L8.34225 1.37526C8.02445 0.791754 7.45505 0.5 6.88566 0.5C6.31627 0.5 5.73364 0.791754 5.42246 1.37526L0.225108 10.9217C0.0728291 11.1863 0 11.4781 0 11.763C0 12.7197 0.662083 13.5 1.68831 13.5ZM6.88566 8.8048C6.49503 8.8048 6.27655 8.5809 6.26331 8.1738L6.16399 5.0595C6.15075 4.64562 6.44869 4.34708 6.87904 4.34708C7.30278 4.34708 7.61396 4.6524 7.60071 5.06628L7.5014 8.16701C7.48154 8.5809 7.26305 8.8048 6.88566 8.8048ZM6.88566 11.3492C6.44207 11.3492 6.07792 11.0303 6.07792 10.5757C6.07792 10.1211 6.44207 9.80219 6.88566 9.80219C7.32926 9.80219 7.69341 10.1143 7.69341 10.5757C7.69341 11.0371 7.32264 11.3492 6.88566 11.3492Z",fill:"currentColor"})})})]}),(0,F.jsx)(r6,{size:24,address:c})]}),(0,F.jsx)("div",{style:{position:"relative",paddingRight:+!!t},children:(0,F.jsx)(R.AnimatePresence,{initial:!1,children:p?(0,F.jsx)(ac,{initial:"initial",animate:"animate",exit:"exit",variants:av,style:{position:p?"relative":"absolute"},children:(null==(o=i.options)?void 0:o.truncateLongENSAddress)?p.length>20?p.replace(".eth","").slice(0,20)+"...":p:p},"ckEnsName"):(0,F.jsxs)(ac,{initial:"initial",animate:"animate",exit:"exit",variants:av,style:{position:p?"absolute":"relative"},children:[eN(c,n)," "]},"ckTruncatedAddress")})})]},"connectedText"):(0,F.jsx)(ac,{initial:"initial",animate:"animate",exit:"exit",variants:am,style:{height:40},children:e||h},"connectWalletText")})}function ay({label:e,showBalance:t=!1,showAvatar:n=!0,theme:o,mode:r,customTheme:i,onClick:a}){var c;let l=r4(),d=ar(),{isConnected:u,address:p,chain:h}=(0,s.useAccount)(),g=oL(null==h?void 0:h.id);function f(){d.setOpen(!0),d.setRoute(u?an.PROFILE:an.CONNECTORS)}let b=["web95","rounded","minimal"].includes(null!=(c=null!=o?o:d.theme)?c:"")?"....":void 0;if(!l)return null;let x=t&&g,m=p&&x;return(0,F.jsx)(e8,{$useTheme:null!=o?o:d.theme,$useMode:null!=r?r:d.mode,$customTheme:null!=i?i:d.customTheme,children:(0,F.jsxs)(ap,{onClick:()=>{a?a(f):f()},children:[x&&(0,F.jsx)(R.AnimatePresence,{initial:!1,children:m&&(0,F.jsx)(D.motion.div,{initial:{opacity:0,x:"100%",width:0,marginRight:0},animate:{opacity:1,x:0,width:"auto",marginRight:-24,transition:{duration:.4,ease:[.25,1,.5,1]}},exit:{opacity:0,x:"100%",width:0,marginRight:0,transition:{duration:.4,ease:[.25,1,.5,1]}},children:(0,F.jsx)(ah,{variant:"secondary",theme:null!=o?o:d.theme,mode:null!=r?r:d.mode,customTheme:null!=i?i:d.customTheme,style:{overflow:"hidden"},children:(0,F.jsx)(D.motion.div,{style:{paddingRight:24},children:(0,F.jsx)(ax,{hideSymbol:!0})})})},"balance")}),(0,F.jsx)(ah,{theme:null!=o?o:d.theme,mode:null!=r?r:d.mode,customTheme:null!=i?i:d.customTheme,style:x&&t&&p&&("retro"===o||"retro"===d.theme)?{boxShadow:"var(--ck-connectbutton-balance-connectbutton-box-shadow)",borderRadius:"var(--ck-connectbutton-balance-connectbutton-border-radius)",overflow:"hidden"}:{overflow:"hidden"},children:(0,F.jsx)(ak,{separator:b,showAvatar:n,label:e})})]})})}aw.displayName="ConnectKitButton.Custom",ay.Custom=aw;let aA=z.keyframes`
  0%{ transform:none; }
  25%{ transform:translateX(${8}px); }
  50%{ transform:translateX(-${8}px); }
  75%{ transform:translateX(${8}px); }
  100%{ transform:none; }
`,aj=z.keyframes`
  0%{ transform:translate(500%,100%); opacity:0; }
  60%{ transform:translate(25%,-20%); opacity:1; }
  70%{ transform:translate(25%,-20%); }
  85%{ transform:translate(25%,-20%) scale(0.9); }
  100%{ transform:translate(25%,-20%) scale(1); opacity:1; }
`;eW.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4), 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  &.play {
    animation: ${aj} 1300ms 200ms cubic-bezier(0.16, 1, 0.6, 1) both;
  }
`,eW.div`
  z-index: 1;
  position: absolute;
  inset: 0;
  &.shake {
    animation: ${aA} 300ms 100ms cubic-bezier(0.16, 1, 0.6, 1) both;
  }
`,eW.div`
  z-index: 1;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    z-index: 9;
    content: '';
    position: absolute;
    inset: 0;
  }
`;let aS="1.9.1";e.s(["Avatar",0,r6,"ConnectKitButton",0,ay,"ConnectKitProvider",0,({children:e,theme:t="auto",mode:n="auto",customTheme:o,options:r,onConnect:i,onDisconnect:a,debugMode:c=!1})=>{var l,d,u,p,h,g;let f;if(!O.default.useContext(w.WagmiContext))throw Error("ConnectKitProvider must be within a WagmiProvider");if(O.default.useContext(ao))throw Error("Multiple, nested usages of ConnectKitProvider detected. Please use only one.");at({onConnect:i,onDisconnect:a});let b=oS(),x=na("injected"),m=Object.assign({},{language:"en-US",hideBalance:!1,hideTooltips:!1,hideQuestionMarkCTA:!1,hideNoWalletCTA:!1,walletConnectCTA:"link",hideRecentBadge:!1,avoidLayoutShift:!0,embedGoogleFonts:!1,truncateLongENSAddress:!0,walletConnectName:void 0,reducedMotion:!1,disclaimer:null,bufferPolyfill:!0,customAvatar:void 0,initialChainId:null==(l=null==b?void 0:b[0])?void 0:l.id,enforceSupportedChains:!1,ethereumOnboardingUrl:void 0,walletOnboardingUrl:void 0,disableSiweRedirect:!1},r);"u">typeof window&&m.bufferPolyfill&&(window.Buffer=null!=(d=window.Buffer)?d:_.Buffer);let[C,v]=(0,O.useState)(t),[k,y]=(0,O.useState)(n),[A,j]=(0,O.useState)(null!=o?o:{}),[S,E]=(0,O.useState)("en-US"),[L,M]=(0,O.useState)(!1),[N,I]=(0,O.useState)({id:""}),[B,D]=(0,O.useState)(an.CONNECTORS),[R,T]=(0,O.useState)(""),[W,U]=(0,O.useState)(0);m.embedGoogleFonts&&(g=null!=(f=null!=(h=({web95:"Lato",retro:"Nunito",midnight:"Inter",minimal:"Inter",rounded:"Nunito"})[t])?h:null)?f:"",(0,O.useEffect)(()=>{if(!g)return;g=g.replace(/ /g,"+");let e=document.createElement("link");e.href="https://fonts.googleapis.com",e.rel="preconnect";let t=document.createElement("link");t.href="https://fonts.gstatic.com",t.rel="preconnect",t.crossOrigin="true";let n=document.createElement("link");return n.href=`https://fonts.googleapis.com/css2?family=${g}:wght@400;500;600&display=swap`,n.rel="stylesheet",document.head.appendChild(e),document.head.appendChild(t),document.head.appendChild(n),()=>{document.head.removeChild(e),document.head.removeChild(t),document.head.removeChild(n)}},[g])),(0,O.useEffect)(()=>v(t),[t]),(0,O.useEffect)(()=>E(m.language||"en-US"),[m.language]),(0,O.useEffect)(()=>T(null),[B,L]);let{chain:H,isConnected:G}=(0,s.useAccount)(),P=oL(null==H?void 0:H.id);(0,O.useEffect)(()=>{G&&m.enforceSupportedChains&&!P&&(M(!0),D(an.SWITCHNETWORKS))},[G,P,H,B,L]),(0,O.useEffect)(()=>{ex("Family")&&(null==x||x.connect())},[x]);let Q=c?console.log:()=>{},Z={theme:C,setTheme:v,mode:k,setMode:y,customTheme:o,setCustomTheme:j,lang:S,setLang:E,open:L,setOpen:M,route:B,setRoute:D,connector:N,setConnector:I,signInWithEthereum:null!=(p=null==(u=O.default.useContext(tZ))?void 0:u.enabled)&&p,onConnect:i,options:m,errorMessage:R,debugMode:c,log:Q,displayError:(e,t)=>{T(e),console.log("---------CONNECTKIT DEBUG---------"),console.log(e),t&&console.table(t),console.log("---------/CONNECTKIT DEBUG---------")},resize:W,triggerResize:()=>U(e=>e+1)};return(0,O.createElement)(ao.Provider,{value:Z},(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(oN,{enabled:L,children:(0,F.jsxs)(z.ThemeProvider,{theme:ez,children:[e,(0,F.jsx)(ae,{lang:S,theme:C,mode:n,customTheme:A})]})})}))},"SIWEProvider",0,({children:e,enabled:t=!0,nonceRefetchInterval:n=3e5,sessionRefetchInterval:o=3e5,signOutOnDisconnect:r=!0,signOutOnAccountChange:a=!0,signOutOnNetworkChange:d=!0,onSignIn:u,onSignOut:p,...h})=>{let[g,f]=(0,O.useState)(i.READY);if((0,O.useContext)(tZ))throw Error("Multiple, nested usages of SIWEProvider detected. Please use only one.");if((0,O.useContext)(ao))throw Error("ConnectKitProvider must be mounted inside SIWEProvider.");let b=(0,H.useQuery)({queryKey:[tY],queryFn:()=>h.getNonce(),refetchInterval:n}),x=(0,H.useQuery)({queryKey:["ckSiweSession"],queryFn:()=>h.getSession(),refetchInterval:o}),m=x.data,C=async()=>{if(!m)return!1;if(f(i.LOADING),!await h.signOut())throw Error("Failed to sign out.");return await Promise.all([x.refetch(),b.refetch()]),f(i.READY),null==p||p(),!0},{address:v}=(0,s.useAccount)();(0,c.useAccountEffect)({onDisconnect:()=>{r&&C()}});let{address:w,chain:k}=(0,s.useAccount)(),{signMessageAsync:y}=(0,l.useSignMessage)(),A=async()=>{try{if(!h)throw Error("SIWE not configured");let e=null==k?void 0:k.id;if(!w)throw Error("No address found");if(!e)throw Error("No chainId found");if(!b.data)throw Error("Could not fetch nonce");f(i.LOADING);let t=await h.createMessage({address:w,chainId:e,nonce:null==b?void 0:b.data}),n=await y({message:t});if(!await h.verifyMessage({message:t,signature:n}))throw Error("Error verifying SIWE signature");let o=await x.refetch().then(e=>{var t;return null==u||u(null!=(t=null==e?void 0:e.data)?t:void 0),null==e?void 0:e.data});return f(i.READY),o}catch(e){switch(console.error("signIn error",e,e.message),e.code){case -32e3:case 4001:case"ACTION_REJECTED":f(i.REJECTED);break;default:f(i.ERROR)}return!1}};return(0,O.useEffect)(()=>{!m||!m.address||!m.chainId||v&&k&&(a&&(0,U.getAddress)(m.address)!==(0,U.getAddress)(v)?(console.warn("Wallet account changed, signing out of SIWE session"),C()):d&&m.chainId!==k.id&&(console.warn("Wallet network changed, signing out of SIWE session"),C()))},[m,v,k]),(0,F.jsx)(tZ.Provider,{value:{enabled:t,nonceRefetchInterval:n,sessionRefetchInterval:o,signOutOnDisconnect:r,signOutOnAccountChange:a,signOutOnNetworkChange:d,...h,nonce:b,session:x,signIn:A,signOut:C,status:g,resetStatus:()=>f(i.READY)},children:e})},"SIWE_NONCE_QUERY_KEY",0,tY,"getDefaultConfig",0,({appName:e="ConnectKit",appIcon:o,appDescription:r,appUrl:i,walletConnectProjectId:s,coinbaseWalletPreference:c,chains:l=[y.mainnet,A.polygon,j.optimism,S.arbitrum],client:d,enableFamily:u=!0,familyOptions:p,...h})=>{var g,f;t=e,o&&(n=o);let b=null!=(g=null==h?void 0:h.transports)?g:Object.fromEntries(l.map(e=>[e.id,(0,a.http)()])),x=null!=(f=null==h?void 0:h.connectors)?f:(({app:e,walletConnectProjectId:t,coinbaseWalletPreference:n,enableFamily:o,familyOptions:r})=>{let i=e.name&&e.icon&&e.description&&e.url,a="u">typeof window&&(null==window?void 0:window.parent)!==window,s=o?[(0,I.familyAccountsConnector)(r)]:[];return a&&s.push((0,E.safe)({allowedDomains:[/gnosis-safe.io$/,/app.safe.global$/]})),s.push((0,L.injected)({target:"metaMask"}),(0,M.coinbaseWallet)({appName:e.name,appLogoUrl:e.icon,overrideIsMetaMask:!1,preference:n})),t&&s.push((0,N.walletConnect)({showQrModal:!1,projectId:t,metadata:i?{name:e.name,description:e.description,url:e.url,icons:[e.icon]}:void 0})),s})({app:{name:e,icon:o,description:r,url:i},walletConnectProjectId:s,coinbaseWalletPreference:c,enableFamily:u,familyOptions:p});return{...h,chains:l,connectors:x,transports:b}},"useModal",0,as],520369)}]);

//# debugId=a30a6de5-31ef-72cd-08cb-7b283b05d39d