webpackJsonp([10],{"2VZf":function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("KcW0"),n=t("+1pJ"),o=t("x47x"),l=t("9woI"),i=t.n(l),c={data:function(){return{loading:!1,tabelShow:!1,accountAddressOk:!0,accountAddress:[],accountAddressValue:localStorage.getItem("newAccountAddress"),activeName:sessionStorage.getItem("consensusTabName"),tabName:"first",creditValuesShow0:!1,creditValuesShow1:!1,creditValuesShow2:!1,noDataOK:!1,myConsensusSizeOK:!0,allAgentCount:0,allTotalDeposit:0,myInfoData:{agentCount:0,totalDeposit:0,reward:0,joinAgentCount:0,usableBalance:0,rewardOfDay:0},creditColor:"#6e84f7",totalColor:"#f64b3e",memberColor:"#82BD39",allConsensus:[],allEvents:parseInt(sessionStorage.getItem("consensusAllEvents"))||1,totalAll:parseInt(sessionStorage.getItem("consensusTotalAll"))||100,myConsensus:[],myEvents:1,myTotalAll:0,consensusSetInterval:null}},components:{ProgressBar:a.a,AccountAddressBar:n.a},computed:{getAddressList:function(){return this.$store.getters.getAddressList}},mounted:function(){var s=this;this.getConsensus("/consensus"),""!==localStorage.getItem("newAccountAddress")&&this.getConsensusAddress("/consensus/address/"+localStorage.getItem("newAccountAddress")),this.getAllConsensus("/consensus/agent/list",{pageSize:"12",pageNumber:"1"}),""!==localStorage.getItem("newAccountAddress")&&(this.accountAddressValue=localStorage.getItem("newAccountAddress"),this.getMyConsensus("/consensus/agent/address/"+localStorage.getItem("newAccountAddress"),{pageSize:"12",pageNumber:"1"}),this.consensusSetInterval=setInterval(function(){s.getConsensusAddress("/consensus/address/"+localStorage.getItem("newAccountAddress")),"first"===s.tabName?s.getAllConsensus("/consensus/agent/list",{pageSize:"12",pageNumber:s.allEvents}):s.getMyConsensus("/consensus/agent/address/"+localStorage.getItem("newAccountAddress"),{pageSize:"12",pageNumber:s.myEvents})},5e3))},destroyed:function(){clearInterval(this.consensusSetInterval)},beforeRouteLeave:function(s,e,t){"/nodePage"===s.name?(sessionStorage.setItem("consensusTotalAll",this.totalAll.toString()),sessionStorage.setItem("consensusAllEvents",this.allEvents.toString())):(sessionStorage.removeItem("consensusTotalAll"),sessionStorage.removeItem("consensusAllEvents")),t()},methods:{chenckAccountAddress:function(s){this.accountAddressValue=s,this.getConsensusAddress("/consensus/address/"+s),"first"===sessionStorage.getItem("consensusTabName")?this.getAllConsensus("/consensus/agent/list",{pageSize:"12",pageNumber:"1"}):this.getMyConsensus("/consensus/agent/address/"+s,{pageSize:"12",pageNumber:"1"})},accountCopy:function(){""!==this.accountAddressValue?(i()(this.accountAddressValue),this.$message({message:this.$t("message.c129"),type:"success",duration:"800"})):this.$message({message:this.$t("message.c199"),duration:"800"})},getConsensus:function(s){var e=this;this.$fetch(s).then(function(s){if(s.success){var t=new o.BigNumber(1e-8);e.allAgentCount=s.data.agentCount,e.allTotalDeposit=parseFloat(t.times(s.data.totalDeposit).toString())}})},getConsensusAddress:function(s){var e=this;this.$fetch(s).then(function(s){if(s.success){var t=new o.BigNumber(1e-8);e.myInfoData=s.data,e.myInfoData.reward=parseFloat(t.times(s.data.reward).toString()),e.myInfoData.usableBalance=parseFloat(t.times(s.data.usableBalance).toString()),e.myInfoData.totalDeposit=parseFloat(t.times(s.data.totalDeposit).toString())}})},getMyConsensus:function(s,e){var t=this;this.$fetch(s,e).then(function(s){if(t.myTotalAll=1,s.success){var e=new o.BigNumber(1e-8);0!==s.data.list.length?(t.noDataOK=!1,t.myConsensusSizeOK=!0):(t.noDataOK=!0,t.myConsensusSizeOK=!1);for(var a=0;a<s.data.list.length;a++)s.data.list[a].creditVals=s.data.list[a].creditVal,s.data.list[a].creditVal=((s.data.list[a].creditVal+1)/2*100).toFixed().toString()+"%",s.data.list[a].agentAddresss=s.data.list[a].agentAddress.substr(0,6)+"..."+s.data.list[a].agentAddress.substr(-6),s.data.list[a].totalDeposit=parseFloat(e.times(s.data.list[a].totalDeposit).toString());t.loading=!1,t.tabelShow=!0,t.myTotalAll=s.data.total,t.myConsensus=s.data.list}})},myConsensusSize:function(s){this.myEvents=s,this.getMyConsensus("/consensus/agent/address/"+localStorage.getItem("newAccountAddress"),{pageNumber:s,pageSize:"12"})},getAllConsensus:function(s,e){var t=this;this.$fetch(s,e).then(function(s){if(s.success){for(var e=new o.BigNumber(1e-8),a=0;a<s.data.list.length;a++)s.data.list[a].creditVals=s.data.list[a].creditVal,s.data.list[a].creditVal=((s.data.list[a].creditVal+1)/2*100).toFixed().toString()+"%",s.data.list[a].agentAddresss=s.data.list[a].agentAddress.substr(0,6)+"..."+s.data.list[a].agentAddress.substr(-6),s.data.list[a].totalDeposit=parseFloat(e.times(s.data.list[a].totalDeposit).toString()),s.data.list[a].deposit=parseFloat(e.times(s.data.list[a].deposit).toString());t.loading=!1,t.tabelShow=!0,t.totalAll=s.data.total,t.allConsensus=s.data.list}})},allConsensusSize:function(s){this.allEvents=s,this.getAllConsensus("/consensus/agent/list/",{pageNumber:s,pageSize:"12"})},toNewNode:function(){this.$store.getters.getNetWorkInfo.localBestHeight===this.$store.getters.getNetWorkInfo.netBestHeight?this.$router.push({path:"/consensus/newNode"}):this.$message({message:this.$t("message.c133")})},toPledgeInfo:function(){this.$router.push({path:"/consensus/pledgeInfo"})},toNodePage:function(s){this.$router.push({path:"/consensus/nodePage",query:{address:s}})},toAgencyNode:function(){this.$router.push({path:"/consensus/agencyNode",query:{indexTo:1}})},toMyNode:function(s,e){var t=this;this.$fetch("/consensus/deposit/address/"+s,{agentHash:e,pageSize:"10",pageNumber:this.pageNumber}).then(function(a){a.success&&a.data.list.length>0?t.$router.push({path:"/consensus/myNode",query:{agentAddress:s,agentHash:e}}):t.$router.push({path:"/consensus/nodePage",query:{address:e}})})},toCheck:function(){this.$router.push({path:"/consensus/nodeInfo",query:{agentHash:this.myInfoData.agentHash}})},toggleShow:function(s){},handleClick:function(s){this.tabName=s.name,sessionStorage.setItem("consensusTabName",this.tabName),""!==localStorage.getItem("newAccountAddress")&&("first"!==s.name?this.getMyConsensus("/consensus/agent/address/"+localStorage.getItem("newAccountAddress"),{pageSize:"12",pageNumber:"1"}):this.allConsensusSize(this.allEvents))},toNodeList:function(){this.$router.push({name:"/agencyNode"})}}},r={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"consensus-index"},[t("div",{directives:[{name:"show",rawName:"v-show",value:s.tabelShow,expression:"tabelShow"}],staticClass:"account-top"},[t("label",{directives:[{name:"show",rawName:"v-show",value:s.accountAddressOk,expression:"accountAddressOk"}]},[s._v(s._s(s.$t("message.indexAccountAddress"))+"：")]),s._v(" "),t("AccountAddressBar",{on:{chenckAccountAddress:s.chenckAccountAddress}}),s._v(" "),t("i",{staticClass:"copy_icon copyBtn cursor-p",attrs:{title:s.$t("message.c143")},on:{click:s.accountCopy}})],1),s._v(" "),t("div",{staticClass:"consensus-index-title"},[t("label",[s._v(s._s(s.$t("message.c1"))+s._s(s.$t("message.c1_1"))+"：")]),s._v("\n    "+s._s(this.allTotalDeposit.toString())+" NULS，\n    "),t("label",[s._v(s._s(s.$t("message.c2"))+"：")]),s._v(s._s(this.allAgentCount)+"\n  ")]),s._v(" "),t("div",{staticStyle:{"font-size":"14px"}},[t("label",[s._v(s._s(s.$t("message.c3"))+"：")])]),s._v(" "),t("div",{staticClass:"consensus-center"},[t("ul",[t("li",[t("label",[s._v(s._s(s.$t("message.c7"))+"：")]),s._v(s._s(this.myInfoData.reward)+" NULS\n      ")]),s._v(" "),t("li",[t("label",[s._v(s._s(s.$t("message.c4"))+"：")]),s._v(s._s(this.myInfoData.agentCount)+" "+s._s(s.$t("message.c30"))+"\n        "),this.myInfoData.agentCount>0?t("span",[s._v("("),t("span",{staticClass:"span",on:{click:s.toCheck}},[s._v(s._s(s.$t("message.c5_1")))]),s._v(")")]):t("span",[s._v("("),t("span",{staticClass:"span",on:{click:s.toNewNode}},[s._v(s._s(s.$t("message.c5")))]),s._v(")")])]),s._v(" "),t("li",[t("label",[s._v(s._s(s.$t("message.c8"))+"：")]),s._v(s._s(this.myInfoData.joinAgentCount)+" "+s._s(s.$t("message.c30"))+"\n        ("),t("span",{staticClass:"span",on:{click:s.toAgencyNode}},[s._v(s._s(s.$t("message.c9")))]),s._v(")\n      ")]),s._v(" "),t("li",[t("label",[s._v(s._s(s.$t("message.c6"))+"：")]),s._v(s._s(this.myInfoData.usableBalance.toString())+" NULS\n      ")]),s._v(" "),t("li",[t("label",[s._v(s._s(s.$t("message.c10"))+"：")]),s._v(" "),t("span",{staticClass:"span",on:{click:s.toPledgeInfo}},[s._v("\n                  "+s._s(this.myInfoData.totalDeposit.toString())+" NULS\n                  ")])])])]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:s.tabelShow,expression:"tabelShow"}],staticClass:"consensus-bottom"},[[t("el-tabs",{on:{"tab-click":s.handleClick},model:{value:s.activeName,callback:function(e){s.activeName=e},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:s.$t("message.c11"),name:"first"}},[s._l(s.allConsensus,function(e,a){return t("div",{staticClass:"div-icon cursor-p fl",on:{click:function(t){s.toNodePage(e.txHash)}}},[t("p",{staticClass:"subscript",class:0===e.status?"stay":""},[s._v("\n              "+s._s(s.$t("message.status"+e.status))+"\n            ")]),s._v(" "),t("h3",{staticClass:"overflow"},[s._v(s._s(e.agentId))]),s._v(" "),t("ul",[t("li",{staticClass:"overflow"},[t("label",[s._v(s._s(s.$t("message.c16"))+"：")]),s._v(s._s(e.agentName?e.agentName:e.agentAddresss)+"\n              ")]),s._v(" "),t("li",[t("label",[s._v(s._s(s.$t("message.c17"))+"：")]),s._v(s._s(e.commissionRate)+"%")]),s._v(" "),t("li",[t("label",[s._v(s._s(s.$t("message.c25"))+"：")]),s._v(s._s(e.deposit.toFixed(2))+" NULS")]),s._v(" "),t("li",{staticClass:"cb"},[t("label",{staticClass:"fl"},[s._v(s._s(s.$t("message.c19"))+"：")]),s._v(s._s(e.memberCount)+"\n              ")]),s._v(" "),t("li",[t("label",{staticClass:"fl"},[s._v(s._s(s.$t("message.c20"))+"：")]),s._v("\n                "+s._s(e.totalDeposit.toFixed(2))+"\n              ")]),s._v(" "),t("li",{on:{mouseover:function(e){s.toggleShow(a)},mouseout:function(e){s.toggleShow(a)}}},[t("label",{staticClass:"fl cursor-p"},[s._v(s._s(s.$t("message.c18"))+":")]),s._v(" "),t("ProgressBar",{attrs:{colorData:e.creditVals<0?"#f64b3e":"#82bd39",widthData:e.creditVal}})],1)])])}),s._v(" "),t("el-pagination",{directives:[{name:"show",rawName:"v-show",value:this.totalAll>12,expression:"this.totalAll>12"}],staticClass:"cb",attrs:{layout:"prev, pager, next","page-size":12,total:s.totalAll,"current-page":s.allEvents},on:{"current-change":s.allConsensusSize}})],2),s._v(" "),t("el-tab-pane",{attrs:{label:s.$t("message.c12"),name:"second"}},[s._l(s.myConsensus,function(e,a){return t("div",{staticClass:"div-icon cursor-p fl",on:{click:function(t){s.toMyNode(s.accountAddressValue,e.agentHash)}}},[t("p",{staticClass:"subscript",class:0===e.status?"stay":""},[s._v("\n              "+s._s(s.$t("message.status"+e.status))+"\n            ")]),s._v(" "),t("h3",{staticClass:"overflow"},[s._v(s._s(e.agentId))]),s._v(" "),t("ul",[t("li",{staticClass:"overflow"},[t("label",[s._v(s._s(s.$t("message.c16"))+"：")]),s._v(s._s(e.agentName?e.agentName:e.agentAddresss)+"\n              ")]),s._v(" "),t("li",[t("label",[s._v(s._s(s.$t("message.c17"))+"：")]),s._v(s._s(e.commissionRate)+"%")]),s._v(" "),t("li",[t("label",[s._v(s._s(s.$t("message.c25"))+"：")]),s._v(s._s((1e-8*e.deposit).toFixed(2))+" NULS")]),s._v(" "),t("li",{staticClass:"cb"},[t("label",{staticClass:"fl"},[s._v(s._s(s.$t("message.c19"))+"：")]),s._v(s._s(e.memberCount)+"\n              ")]),s._v(" "),t("li",{staticClass:"cb"},[t("label",{staticClass:"fl"},[s._v(s._s(s.$t("message.c20"))+"：")]),s._v(s._s(e.totalDeposit.toFixed(2))+"\n              ")]),s._v(" "),t("li",{on:{mouseover:function(e){s.toggleShow(a)},mouseout:function(e){s.toggleShow(a)}}},[t("label",{staticClass:"fl cursor-p"},[s._v(s._s(s.$t("message.c18"))+":")]),s._v(" "),t("ProgressBar",{attrs:{colorData:e.creditVals<0?"#f64b3e":"#82bd39",widthData:e.creditVal}})],1)])])}),s._v(" "),t("el-pagination",{directives:[{name:"show",rawName:"v-show",value:s.totalAllOk=this.myTotalAll>12,expression:"totalAllOk = this.myTotalAll>12 ?true:false"}],staticClass:"cb",attrs:{layout:"prev, pager, next","page-size":12,total:this.myTotalAll},on:{"current-change":s.myConsensusSize}}),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:s.noDataOK,expression:"noDataOK"}],staticClass:"noData",on:{click:s.toNodeList}},[t("i",{staticClass:"el-icon-plus"})])],2)],1)]],2)])},staticRenderFns:[]};var u=t("vSla")(c,r,!1,function(s){t("8B5c")},null,null);e.default=u.exports},"8B5c":function(s,e){}});