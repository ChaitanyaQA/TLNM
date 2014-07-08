var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;
var XpathUtil=require('../XpathUtil');


module.exports=GetProjectTestPlansComponents=function (xmlresponse){
    this.doc = new dom().parseFromString(xmlresponse);	
    this.xpath_util=new XpathUtil(this.doc);
	}
	
GetProjectTestPlansComponents.prototype={
	
		getId:function(){
			return this.xpath_util.getStringValueByLabelName("id");
	},
		getName:function(){
			return this.xpath_util.getStringValueByLabelName("name");
	},
		getNotes:function(){
			return this.xpath_util.getStringValueByLabelName("notes");
	},
		isActive:function(){
			return (this.xpath_util.getStringValueByLabelName("active")=='1')? true:false;
	},
		isPublic:function(){
			return (this.xpath_util.getStringValueByLabelName("is_public")=='1')? true:false;
	},
		getTestProjectID:function(){
			return this.xpath_util.getStringValueByLabelName("testproject_id");
	},
	
		getProjectTestPlansCacheObject:function(){
	       var testplancacheObject={};
			for (var key in this) {
				if (!(this.hasOwnProperty(key) || key=='getProjectTestPlansCacheObject')) {
				 testplancacheObject[key]=this[key]();
				}
			}
			return testplancacheObject;
	}
};