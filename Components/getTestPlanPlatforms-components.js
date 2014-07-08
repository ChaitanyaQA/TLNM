var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;
var XpathUtil=require('../XpathUtil');


module.exports=GetTestPlanPlatformsComponents=function (xmlresponse){
    this.doc = new dom().parseFromString(xmlresponse);	
    this.xpath_util=new XpathUtil(this.doc);	
	}
	
GetTestPlanPlatformsComponents.prototype={
	
		getId:function(){
			return this.xpath_util.getStringValueByLabelName("id");
	},
		getPlatformName:function(){
			return this.xpath_util.getStringValueByLabelName("name");
	},	
		getNotes:function(){
			return this.xpath_util.getStringValueByLabelName("notes");
	},
		getTestPlanPlatformCacheObject:function(){
	       var testplanplatformcacheObject={};
			for (var key in this) {
				if (!(this.hasOwnProperty(key) || key=='getTestPlanPlatformCacheObject')) {
				 testplanplatformcacheObject[key]=this[key]();
				}
			}
			return testplanplatformcacheObject;
	}

};