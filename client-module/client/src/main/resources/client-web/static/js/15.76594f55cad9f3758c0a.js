webpackJsonp([15],{"8Wm6":function(s,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=a("x47x"),i=a("LPk9"),l=a("FJop"),n=a("YgNb"),r=a("2tLR"),o={data:function(){var s=this;return{submitId:"aliasAliasing",address:this.$route.query.address,encrypted:this.$route.query.encrypted,usable:0,fee:0,allFee:1,aliasForm:{alias:""},aliasRules:{alias:[{validator:function(e,a,t){s.usable>=1.01?a&&/^(?!_)(?!.*?_$)[a-z0-9_]+$/.exec(a)?t():t(new Error(s.$t("message.c1041"))):t(new Error(s.$t("message.c107")))},trigger:"blur"}]}}},components:{Back:i.a,Password:l.a},mounted:function(){this.getBalanceAddress()},methods:{getBalanceAddress:function(){var s=this;Object(r.e)(this.address).then(function(e){e.success?s.usable=Object(n.b)(e.data.usable.value).toString():s.usable=0}).catch(function(s){console.log(s)})},countFee:function(){var s=this;if(""!==this.aliasForm.alias){var e="address="+this.address+"&alias="+this.aliasForm.alias;this.$fetch("/account/alias/fee?"+e).then(function(e){if(e.success){s.fee=Object(n.b)(e.data.fee);var a=new t.BigNumber(1);s.allFee=a.plus(s.fee)}})}},zeroToWhole:function(){this.$router.push({name:"zeroToWhole"})},aliasingSubmit:function(s){var e=this;this.$refs[s].validate(function(s){s&&(e.encrypted?e.$refs.password.showPassword(!0):e.$confirm(e.$t("message.c164"),"",{confirmButtonText:e.$t("message.confirmButtonText"),cancelButtonText:e.$t("message.cancelButtonText")}).then(function(){var s={alias:e.aliasForm.alias,password:""};e.aliasing("/account/alias/"+e.address,s)}).catch(function(){}))})},toSubmit:function(s){if(this.$store.getters.getNetWorkInfo.localBestHeight===this.$store.getters.getNetWorkInfo.netBestHeight){var e={alias:this.aliasForm.alias,password:s};this.aliasing("/account/alias/"+this.address,e)}else this.$message({message:this.$t("message.c133")})},aliasing:function(s,e){var a=this;this.$post(s,e).then(function(s){s.success?(a.$message({type:"success",message:a.$t("message.passWordSuccess")}),a.$router.push({path:"/wallet/users/userInfo",query:{address:a.address}})):a.$message({type:"warning",message:a.$t("message.passWordFailed")+s.data.msg})})}}},c={render:function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"edit-aliasing"},[a("Back",{attrs:{backTitle:this.$t("message.accountManagement")}}),s._v(" "),a("div",{staticClass:"edit-info"},[a("h2",[s._v(s._s(s.$t("message.c100")))]),s._v(" "),a("el-form",{ref:"aliasForm",attrs:{model:s.aliasForm,rules:s.aliasRules},nativeOn:{submit:function(s){s.preventDefault()}}},[a("div",{staticClass:"edit-aliasing-bg"},[a("p",[a("i"),s._v(s._s(s.$t("message.c103")))]),s._v(" "),a("p",[a("i"),s._v(s._s(s.$t("message.c170")))])]),s._v(" "),a("el-form-item",{staticClass:"label-aliasing",attrs:{label:s.$t("message.c102")+"："}},[a("el-input",{attrs:{disabled:!0},model:{value:this.address,callback:function(e){s.$set(this,"address",e)},expression:"this.address"}})],1),s._v(" "),a("el-form-item",{staticClass:"label-aliasing",attrs:{label:s.$t("message.c104")+"：",prop:"alias"}},[a("span",{staticClass:"yue"},[s._v(s._s(s.$t("message.currentBalance"))+": "+s._s(this.usable)+" NULS")]),s._v(" "),a("el-input",{staticClass:"bt-aliasing",attrs:{placeholder:s.$t("message.c105"),maxlength:20},on:{change:s.countFee},model:{value:s.aliasForm.alias,callback:function(e){s.$set(s.aliasForm,"alias",e)},expression:"aliasForm.alias"}})],1),s._v(" "),a("el-form-item",{staticClass:"procedure",attrs:{label:s.$t("message.c28")+": "+this.fee+" NULS"}},[a("h5",{staticClass:"zeroToWhole"},[s._v(s._s(s.$t("message.zeroToWhole1"))+"\n          "),a("span",{staticClass:"cursor-p text-ds",on:{click:s.zeroToWhole}},[s._v(s._s(s.$t("message.type51")))])])]),s._v(" "),a("div",{staticClass:"allNuls"},[s._v("\n        "+s._s(s.$t("message.c171"))+": "+s._s(parseFloat(this.allFee.toString()))+" NULS\n      ")]),s._v(" "),a("el-form-item",{staticClass:"aliasing-submit"},[a("el-button",{attrs:{type:"primary",id:"aliasAliasing"},on:{click:function(e){s.aliasingSubmit("aliasForm")}}},[s._v("\n          "+s._s(s.$t("message.confirmButtonText"))+"\n        ")])],1)],1)],1),s._v(" "),a("Password",{ref:"password",attrs:{submitId:s.submitId},on:{toSubmit:s.toSubmit}})],1)},staticRenderFns:[]};var u=a("vSla")(o,c,!1,function(s){a("CZp4")},null,null);e.default=u.exports},CZp4:function(s,e){}});