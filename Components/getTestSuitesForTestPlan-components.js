var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;
var XpathUtil=require('../XpathUtil');


module.exports=getTestSuitesForTestPlanComponents=function (xmlresponse){
    this.doc = new dom().parseFromString(xmlresponse);	
    this.xpath_util=new XpathUtil(this.doc);	
	}
	
getTestSuitesForTestPlanComponents.prototype={
	
		getId:function(){
			return this.xpath_util.getStringValueByLabelName("id");
	},
		getName:function(){
			return this.xpath_util.getStringValueByLabelName("name");
	},	
		getParentId:function(){
			return this.xpath_util.getStringValueByLabelName("parent_id");
	},
		getTestSuitesForTestPlanCacheObject:function(){
	       var testsuitecacheObject={};
			for (var key in this) {
				if (!(this.hasOwnProperty(key) || key=='getTestSuitesForTestPlanCacheObject')) {
				 testsuitecacheObject[key]=this[key]();
				}
			}
			return testsuitecacheObject;
	}

};