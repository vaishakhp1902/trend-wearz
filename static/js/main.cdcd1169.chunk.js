(this["webpackJsonptrend-wearz"]=this["webpackJsonptrend-wearz"]||[]).push([[0],{72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r,a,c=n(7),i=n.n(c),s=n(45),l=n.n(s),o=n(32),u=n(23),d=n(58),b=n(33),p=n(50),m=n(59),h=n.n(m),j=n(60),O=n.n(j),g=n(15),f="SET_CURRENT_USER",v={currentUser:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;return t.type===f?Object(g.a)(Object(g.a)({},e),{},{currentUser:t.payload}):e},y={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"},w=n(25),N=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(w.a)(e),[Object(g.a)(Object(g.a)({},t),{},{quantity:1})])},k=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{quantity:e.quantity-1}):e}))},E={hidden:!0,cartItems:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.TOGGLE_CART_HIDDEN:return Object(g.a)(Object(g.a)({},e),{},{hidden:!e.hidden});case y.ADD_ITEM:return Object(g.a)(Object(g.a)({},e),{},{cartItems:N(e.cartItems,t.payload)});case y.CLEAR_ITEM_FROM_CART:return Object(g.a)(Object(g.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload}))});case y.REMOVE_ITEM:return Object(g.a)(Object(g.a)({},e),{},{cartItems:k(e.cartItems,t.payload)});default:return e}},U={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"women",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"men",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type,e},T={key:"root",storage:O.a,whitelist:["cart"]},A=Object(b.b)({user:x,cart:C,directory:I}),S=Object(p.a)(T,A),M=[h.a],R=Object(b.c)(S,b.a.apply(void 0,M)),D=Object(p.b)(R),B=(n(72),n(0)),P=n.n(B),_=n(2),G=n(1),H=n(3),W=n(12),z=n(13),L=n(19),q=(n(74),n(75),n(35)),V=n(20),J=Object(V.a)([function(e){return e.directory}],(function(e){return e.sections})),F=(n(76),n(8)),Y=Object(L.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,a=e.history,c=e.linkUrl,i=e.match;return Object(F.jsxs)("div",{style:{backgroundImage:"url(".concat(n,")")},className:"".concat(r," menu-item"),onClick:function(){return a.push("".concat(i.url).concat(c))},children:[Object(F.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(F.jsxs)("div",{className:"content",children:[Object(F.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(F.jsx)("span",{className:"subtitle",children:" SHOP NOW"})]})]})})),K=(n(79),["id"]),X=Object(V.b)({sections:J}),Q=Object(u.b)(X)((function(e){var t=e.sections;return Object(F.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(q.a)(e,K);return Object(F.jsx)(Y,Object(g.a)({},n),t)}))})})),Z=function(){return Object(F.jsx)("div",{className:"homepage",children:Object(F.jsx)(Q,{})})},$=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],ee=(n(80),n(81),n(82),["children","isGoogleSignIn","inverted"]),te=function(e){var t=e.children,n=(e.isGoogleSignIn,e.inverted),r=Object(q.a)(e,ee);return Object(F.jsx)("button",Object(g.a)(Object(g.a)({className:"".concat(n?"inverted":""," custom-button")},r),{},{children:t}))},ne=function(){return{type:y.TOGGLE_CART_HIDDEN}},re=function(e){return{type:y.ADD_ITEM,payload:e}},ae=Object(u.b)(null,(function(e){return{addItem:function(t){return e(re(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,a=t.price,c=t.imageUrl;return Object(F.jsxs)("div",{className:"collection-item",children:[Object(F.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(F.jsxs)("div",{className:"collection-footer",children:[Object(F.jsx)("span",{className:"name",children:r}),Object(F.jsx)("span",{className:"price",children:a})]}),Object(F.jsx)(te,{onClick:function(){return n(t)},inverted:!0,children:"ADD TO CART"})]})})),ce=function(e){var t=e.title,n=e.items;return Object(F.jsxs)("div",{className:"collection-preview",children:[Object(F.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(F.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(F.jsx)(ae,{item:e},e.id)}))})]})},ie=["id"],se=function(e){Object(W.a)(n,e);var t=Object(z.a)(n);function n(e){var r;return Object(G.a)(this,n),(r=t.call(this,e)).state={collections:$},r}return Object(H.a)(n,[{key:"render",value:function(){var e=this.state.collections;return Object(F.jsx)("div",{className:"shop-page",children:e.map((function(e){var t=e.id,n=Object(q.a)(e,ie);return Object(F.jsx)(ce,Object(g.a)({},n),t)}))})}}]),n}(i.a.Component),le=(n(83),["title","titleId"]);function oe(){return oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function de(e,t){var n=e.title,i=e.titleId,s=ue(e,le);return c.createElement("svg",oe({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":i},s),void 0===n?c.createElement("title",{id:i},"Group"):n?c.createElement("title",{id:i},n):null,r||(r=c.createElement("desc",null,"Created with Sketch.")),a||(a=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var be=c.forwardRef(de),pe=(n.p,n(41)),me=(n(84),n(97),n(61));pe.a.initializeApp({apiKey:"AIzaSyCKMjMahMKeS3YNCB9ObTpZ2C0zXNspaPQ",authDomain:"trend-wearz.firebaseapp.com",projectId:"trend-wearz",storageBucket:"trend-wearz.appspot.com",messagingSenderId:"74899697581",appId:"1:74899697581:web:4abb494ec286d3ee65bb24",measurementId:"G-CTCGE9FCNT"});var he=function(){var e=Object(_.a)(P.a.mark((function e(t,n){var r,a,c,i,s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=Oe.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(a=e.sent,console.log(a),a.exists){e.next=18;break}return c=t.displayName,i=t.email,s=new Date,e.prev=10,e.next=13,r.set(Object(g.a)({displayName:c,email:i,createdAt:s},n));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.log("error creating user",e.t0.message);case 18:return e.abrupt("return",r);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,n){return e.apply(this,arguments)}}(),je=pe.a.auth(),Oe=pe.a.firestore(),ge=new pe.a.auth.GoogleAuthProvider;ge.setCustomParameters({promt:"select_account"});var fe=function(){return je.signInWithPopup(ge)},ve=new me.a;ve.setCustomParameters({prompt:"select_account"});pe.a;var xe,ye,we,Ne,ke,Ee,Ce,Ue,Ie,Te,Ae,Se,Me,Re,De,Be=function(e){return e.cart},Pe=Object(V.a)([Be],(function(e){return e.cartItems})),_e=Object(V.a)([Be],(function(e){return e.hidden})),Ge=Object(V.a)([Pe],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),He=Object(V.a)([Pe],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),We=["title","titleId"];function ze(){return ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ze.apply(this,arguments)}function Le(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function qe(e,t){var n=e.title,r=e.titleId,a=Le(e,We);return c.createElement("svg",ze({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),xe||(xe=c.createElement("g",null)),ye||(ye=c.createElement("g",null)),we||(we=c.createElement("g",null)),Ne||(Ne=c.createElement("g",null)),ke||(ke=c.createElement("g",null)),Ee||(Ee=c.createElement("g",null)),Ce||(Ce=c.createElement("g",null)),Ue||(Ue=c.createElement("g",null)),Ie||(Ie=c.createElement("g",null)),Te||(Te=c.createElement("g",null)),Ae||(Ae=c.createElement("g",null)),Se||(Se=c.createElement("g",null)),Me||(Me=c.createElement("g",null)),Re||(Re=c.createElement("g",null)),De||(De=c.createElement("g",null)))}var Ve=c.forwardRef(qe),Je=(n.p,n(87),Object(V.b)({itemCount:Ge})),Fe=Object(u.b)(Je,(function(e){return{toggleCartHidden:function(){return e(ne())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(F.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(F.jsx)(Ve,{className:"shopping-icon"}),Object(F.jsx)("span",{className:"item-count",children:n})]})})),Ye=(n(88),function(e){var t=e.item,n=t.imageUrl,r=t.price,a=t.name,c=t.quantity;return Object(F.jsxs)("div",{className:"cart-item",children:[Object(F.jsx)("img",{src:n,alt:"item"}),Object(F.jsxs)("div",{className:"item-details",children:[Object(F.jsx)("span",{className:"name",children:a}),Object(F.jsxs)("span",{className:"price",children:[c," X $",r]})]})]})}),Ke=(n(89),Object(V.b)({cartItems:Pe})),Xe=Object(L.g)(Object(u.b)(Ke)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(F.jsxs)("div",{className:"cart-dropdown",children:[Object(F.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(F.jsx)(Ye,{item:e},e.id)})):Object(F.jsx)("span",{className:"empty-message",children:"Your Cart is empty"})}),Object(F.jsx)(te,{onClick:function(){n.push("/checkout"),r(ne())},children:"GO TO CHECKOUT"})]})}))),Qe=Object(V.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ze=Object(V.b)({currentUser:Qe,hidden:_e}),$e=Object(u.b)(Ze)((function(e){var t=e.currentUser,n=e.hidden;return Object(F.jsxs)("div",{className:"header",children:[Object(F.jsx)(o.b,{className:"logo-container",to:"/",children:Object(F.jsx)(be,{className:"logo"})}),Object(F.jsxs)("div",{className:"options",children:[Object(F.jsx)(o.b,{className:"option",to:"/shop",children:"SHOP"}),Object(F.jsx)(o.b,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(F.jsxs)("div",{className:"option",onClick:function(){return je.signOut()},children:[" ","SIGN OUT"]}):Object(F.jsx)(o.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(F.jsx)(Fe,{})]}),n?null:Object(F.jsx)(Xe,{})]})})),et=(n(90),n(5)),tt=(n(91),["handleChange","label"]),nt=function(e){var t=e.handleChange,n=e.label,r=Object(q.a)(e,tt);return Object(F.jsxs)("div",{className:"group",children:[Object(F.jsx)("input",Object(g.a)({className:"form-input",onChange:t},r)),n?Object(F.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})},rt=(n(92),function(e){Object(W.a)(n,e);var t=Object(z.a)(n);function n(e){var r;return Object(G.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(_.a)(P.a.mark((function e(t){var n,a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,a=n.email,c=n.password,e.prev=2,e.next=5,je.signInWithEmailAndPassword(a,c);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:r.setState({email:"",password:""});case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,a=t.name;r.setState(Object(et.a)({},a,n))},r.state={email:"",password:""},r}return Object(H.a)(n,[{key:"render",value:function(){return Object(F.jsxs)("div",{className:"sign-in",children:[Object(F.jsx)("h2",{children:"ALREADY HAVE AN ACCOUNT?"}),Object(F.jsx)("span",{children:"SIGN IN WITH YOUR EMAIL AND PASSWORD"}),Object(F.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(F.jsx)(nt,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object(F.jsx)(nt,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(F.jsxs)("div",{className:"buttons",children:[Object(F.jsx)(te,{type:"submit",children:"SIGN IN"}),Object(F.jsx)(te,{onClick:fe,isGoogleSignIn:!0,children:"GOOGLE"})]})]})]})}}]),n}(i.a.Component)),at=rt,ct=(n(93),function(e){Object(W.a)(n,e);var t=Object(z.a)(n);function n(){var e;return Object(G.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(_.a)(P.a.mark((function t(n){var r,a,c,i,s,l,o;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,a=r.displayName,c=r.email,i=r.password,s=r.confirmPassword,console.log("in form:"+a),i===s){t.next=6;break}return alert("passwords dont match"),t.abrupt("return");case 6:return t.prev=6,l=je.createUserWithEmailAndPassword(c,i),o=l.user,console.log("befoee userprofile doc"+a),t.next=11,he(o,{displayName:a});case 11:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[6,14]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(et.a)({},r,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(H.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,a=e.confirmPassword;return Object(F.jsxs)("div",{className:"sign-up",children:[Object(F.jsx)("h2",{className:"title",children:"DO NOT HAVE AN ACCOUNT?"}),Object(F.jsx)("span",{children:"SIGN UP WITH EMAIL AND PASSWORD"}),Object(F.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(F.jsx)(nt,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(F.jsx)(nt,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(F.jsx)(nt,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(F.jsx)(nt,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(F.jsx)(te,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(i.a.Component)),it=ct,st=function(){return Object(F.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(F.jsx)(at,{}),Object(F.jsx)(it,{})]})},lt=(n(94),n(95),Object(u.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:y.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(re(t))},removeItem:function(t){return e(function(e){return{type:y.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,a=e.removeItem,c=t.name,i=t.imageUrl,s=t.price,l=t.quantity;return Object(F.jsxs)("div",{className:"checkout-item",children:[Object(F.jsx)("div",{className:"image-container",children:Object(F.jsx)("img",{src:i,alt:"item"})}),Object(F.jsx)("span",{className:"name",children:c}),Object(F.jsxs)("span",{className:"quantity",children:[Object(F.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276e"}),Object(F.jsx)("span",{className:"value",children:l}),Object(F.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276f"})]}),Object(F.jsx)("span",{className:"price",children:s}),Object(F.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),ot=Object(V.b)({cartItems:Pe,total:He}),ut=Object(u.b)(ot)((function(e){var t=e.cartItems,n=e.total;return Object(F.jsxs)("div",{className:"checkout-page",children:[Object(F.jsxs)("div",{className:"checkout-header",children:[Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"Product"})}),Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"Description"})}),Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"quantity"})}),Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"price"})}),Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"remove"})})]}),t.map((function(e){return Object(F.jsx)(lt,{cartItem:e},e.id)})),Object(F.jsx)("div",{className:"total",children:Object(F.jsxs)("span",{children:["TOTAL: $",n]})})]})})),dt=function(e){Object(W.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(G.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).unsunscribeFromAuth=null,e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.setCurrentUser;this.unsubscribeFromAuth=je.onAuthStateChanged(function(){var n=Object(_.a)(P.a.mark((function n(r){return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=6;break}return n.next=3,he(r);case 3:n.sent.onSnapshot((function(e){t(Object(g.a)({id:e.id},e.data()))})),console.log(e.state);case 6:t(r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(F.jsxs)("div",{children:[Object(F.jsx)($e,{}),Object(F.jsxs)(L.d,{children:[Object(F.jsx)(L.b,{exact:!0,path:"/",component:Z}),Object(F.jsx)(L.b,{path:"/shop/",component:se}),Object(F.jsx)(L.b,{exact:!0,path:"/checkout",component:ut}),Object(F.jsx)(L.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(F.jsx)(L.a,{to:"/"}):Object(F.jsx)(st,{})}})]})]})}}]),n}(i.a.Component),bt=Object(V.b)({currentUser:Qe}),pt=Object(u.b)(bt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:f,payload:e}}(t))}}}))(dt);l.a.render(Object(F.jsx)(u.a,{store:R,children:Object(F.jsx)(o.a,{children:Object(F.jsx)(d.a,{persistor:D,children:Object(F.jsx)(pt,{})})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.cdcd1169.chunk.js.map