(function(e){function t(t){for(var r,a,c=t[0],s=t[1],d=t[2],u=0,h=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);o&&o(t);while(h.length)h.shift()();return i.push.apply(i,d||[]),l()}function l(){for(var e,t=0;t<i.length;t++){for(var l=i[t],r=!0,c=1;c<l.length;c++){var s=l[c];0!==n[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=l[0]))}return e}var r={},n={app:0},i=[];function a(t){if(r[t])return r[t].exports;var l=r[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=r,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(l,r,function(t){return e[t]}.bind(null,r));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-element-ui-transfer-tree/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var o=s;i.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"56d7":function(e,t,l){"use strict";l.r(t);l("0fae");var r=l("9e2f"),n=l.n(r),i=(l("e260"),l("e6cf"),l("cca6"),l("a79d"),l("2b0e")),a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("vue-element-ui-transfer-tree",{attrs:{"default-checked-keys":e.selectTreeKeys,"tree-props":{data:e.data,props:{children:"children",label:"label"},"node-key":"id"},"left-title":"全部字段","right-title":"已选字段"},on:{"checked-change":function(t){e.selectTreeKeys=t}}}),l("br"),e._v(" 已选中的key："+e._s(e.selectTreeKeys)+" ")],1)},c=[],s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"flex"},[l("div",{staticClass:"flex-1"},[l("el-card",{attrs:{shadow:"never"}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v(e._s(e.leftTitle||"待选值"))])]),l("div",{},[l("el-input",{staticClass:"w-full",attrs:{clearable:"",size:"small",placeholder:"输入关键字进行过滤"},model:{value:e.leftFilterText,callback:function(t){e.leftFilterText=t},expression:"leftFilterText"}}),l("div",{staticClass:"tree-wrap"},[l("el-tree",e._b({ref:"leftTree",attrs:{"filter-node-method":e.filterNode},on:{"check-change":function(t){return e.checkedType("left")}}},"el-tree",e.leftTree,!1))],1)],1)])],1),l("div",{staticClass:"flex flex-col items-center justify-center flex-none transfer-button-wrap"},[l("div",[l("el-button",{attrs:{disabled:"left"!==e.checkedTypeStatus,icon:"el-icon-right",circle:"",type:"left"!==e.checkedTypeStatus?"":"primary"},on:{click:function(t){return e.handleTree("left")}}})],1),l("div",{staticStyle:{"margin-top":"8px"}},[l("el-button",{attrs:{disabled:"right"!==e.checkedTypeStatus,icon:"el-icon-back",type:"right"!==e.checkedTypeStatus?"":"primary",circle:""},on:{click:function(t){return e.handleTree("right")}}})],1)]),l("div",{staticClass:"flex-1"},[l("el-card",{attrs:{shadow:"never"}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v(e._s(e.rightTitle||"已选值"))])]),l("div",{},[l("el-input",{staticClass:"w-full",attrs:{clearable:"",size:"small",placeholder:"输入关键字进行过滤"},model:{value:e.rightFilterText,callback:function(t){e.rightFilterText=t},expression:"rightFilterText"}}),l("div",{staticClass:"tree-wrap"},[l("el-tree",e._b({ref:"rightTree",attrs:{"filter-node-method":e.filterNode},on:{"check-change":function(t){return e.checkedType("right")}}},"el-tree",e.rightTree,!1))],1)],1)])],1)])},d=[],o=l("2909"),u=l("5530"),h=(l("4de4"),l("d3b7"),l("caad"),l("2532"),l("99af"),l("c740"),l("a434"),l("d81d"),l("cd3f")),f=l.n(h),p={"show-checkbox":!0,"default-expand-all":!0},y={name:"VueElementUiTransferTree",props:{defaultCheckedKeys:{type:Array,default:function(){return[]}},treeProps:{type:Object,default:function(){return{}}},leftTitle:String,rightTitle:String},data:function(){return{leftTree:Object(u["a"])(Object(u["a"])(Object(u["a"])({},this.treeProps),p),{},{data:f()(this.treeProps.data)}),rightTree:Object(u["a"])(Object(u["a"])(Object(u["a"])({},this.treeProps),p),{},{data:[]}),leftCheckedKeys:[],rightCheckedKeys:[],leftCheckedLeafKeys:[],rightCheckedLeafKeys:[],allKeys:[],allBranchKeys:{},allLeafKeys:[],checkedTypeStatus:null,leftFilterText:"",rightFilterText:""}},computed:{itemKeyName:function(){var e;return(null===(e=this.treeProps)||void 0===e?void 0:e["node-key"])||"id"},childrenKeyName:function(){var e,t;return(null===(e=this.treeProps)||void 0===e||null===(t=e.props)||void 0===t?void 0:t.children)||"children"},labelKeyName:function(){var e,t;return(null===(e=this.treeProps)||void 0===e||null===(t=e.props)||void 0===t?void 0:t.label)||"label"}},watch:{leftFilterText:function(e){this.$refs.leftTree.filter(e)},rightFilterText:function(e){this.$refs.rightTree.filter(e)}},mounted:function(){this.initAllKeys(),this.handleDefaultCheckedKeys()},methods:{initAllKeys:function(){var e=this;this.handleAllNodes(this.treeProps.data,(function(t,l,r){var n,i=null===t||void 0===t?void 0:t[e.itemKeyName];if(null!==t&&void 0!==t&&t[e.childrenKeyName]||e.allLeafKeys.push(i),e.allKeys.push(i),e.allBranchKeys[i]=null!==(n=e.allBranchKeys[i])&&void 0!==n?n:[],r){var a=r[e.itemKeyName];for(var c in e.allBranchKeys[a]&&e.allBranchKeys[a].push(i),e.allBranchKeys){var s=e.allBranchKeys[c];s.includes(a)&&s.push(i)}}}))},setCheckedKeys:function(e){var t=this,l=e.type,r=e.isLeaf,n=e.isBackFillData,i=r?"Leaf":"",a=n?this.defaultCheckedKeys:this.$refs["".concat(l,"Tree")].getCheckedKeys();this["".concat(l,"Checked").concat(i,"Keys")]=[].concat(Object(o["a"])(this["".concat(l,"Checked").concat(i,"Keys")]),Object(o["a"])(this["all".concat(i,"Keys")].filter((function(e){return a.includes(e)})))),this["".concat(this.getReverseType(l),"Checked").concat(i,"Keys")]=this["all".concat(i,"Keys")].filter((function(e){return!t["".concat(l,"Checked").concat(i,"Keys")].includes(e)}))},getReverseType:function(e){var t=["left","right"];return t.filter((function(t){return t!==e}))[0]},handleDefaultCheckedKeys:function(){this.defaultCheckedKeys.length>0&&this.handleTree("left",!0)},handleTree:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.setCheckedKeys({type:e,isBackFillData:t}),this.setCheckedKeys({type:e,isLeaf:!0,isBackFillData:t}),this.generateTree(e),this.generateTree(this.getReverseType(e)),this.$emit("checked-change",this.leftCheckedKeys)},getCheckedNodes:function(){return this.leftCheckedKeys},generateTree:function(e){var t=this,l=f()(this.treeProps.data);this.handleAllNodes(l,(function(l,r){var n=function(){var e=r.findIndex((function(e){return(null===e||void 0===e?void 0:e[t.itemKeyName])===(null===l||void 0===l?void 0:l[t.itemKeyName])}));r.splice(e,1)};if(null!==l&&void 0!==l&&l[t.childrenKeyName]){var i,a=null===(i=t.allBranchKeys)||void 0===i?void 0:i[null===l||void 0===l?void 0:l[t.itemKeyName]],c=a.map((function(l){return null===t||void 0===t?void 0:t["".concat(e,"CheckedKeys")].includes(l)}));c.every((function(e){return!0===e}))&&n()}else t["".concat(e,"CheckedLeafKeys")].includes(null===l||void 0===l?void 0:l[t.itemKeyName])&&n()})),this["".concat(e,"Tree")].data=l,this.checkedTypeStatus=null,this.leftFilterText="",this.rightFilterText=""},handleAllNodes:function(e,t,l){for(var r=e.length-1;r>=0;r--){var n=e[r];t(n,e,l),null!==n&&void 0!==n&&n[this.childrenKeyName]&&this.handleAllNodes(null===n||void 0===n?void 0:n[this.childrenKeyName],t,n)}},checkedType:function(e){var t=this.$refs["".concat(e,"Tree")].getCheckedKeys();t.length>0?(this.checkedTypeStatus=e,this.$refs["".concat(this.getReverseType(e),"Tree")].setCheckedKeys([])):this.checkedTypeStatus=null},filterNode:function(e,t){var l;return!e||-1!==(null===t||void 0===t||null===(l=t[this.labelKeyName])||void 0===l?void 0:l.indexOf(e))}}},v=y,b=(l("ad33"),l("2877")),T=Object(b["a"])(v,s,d,!1,null,"93046f58",null),K=T.exports,k=K.install=function(e){e.component("VueElementUiTransferTree",K)};i["default"].use(k);var g={data:function(){return{selectTreeKeys:[8,3,7],data:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2",children:[{id:11,label:"四级 1-1-2-1"},{id:12,label:"四级 1-1-2-2"}]}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}]}}},m=g,x=Object(b["a"])(m,a,c,!1,null,null,null),C=x.exports;i["default"].use(n.a),i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(C)}}).$mount("#app")},ad33:function(e,t,l){"use strict";l("df6b")},df6b:function(e,t,l){}});
//# sourceMappingURL=app.1b177652.js.map