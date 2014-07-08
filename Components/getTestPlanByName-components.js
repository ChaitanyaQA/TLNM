var xpath 		= require('xpath');
var dom 		= require('xmldom').DOMParser;
var XpathUtil	=require('../XpathUtil');

module.exports=GetTestPlanByNameComponents=function (xmlresponse){
    this.doc = new dom().parseFromString(xmlresponse);
	this.xpath_util=new XpathUtil(this.doc);		
	}	

GetTestPlanByNameComponents.prototype={
		
		/*To get the ID*/
		getId:function(){  
			return this.xpath_util.getStringValueByLabelName("id");	
	},	
		/*To get the ID for TestProject*/
		getTestProjectID:function(){
			return this.xpath_util.getStringValueByLabelName("testproject_id");	
		},
		/*To get the Notes written for TestPlan*/
		getNotes:function(){  
			return this.xpath_util.getStringValueByLabelName("notes");
	},	
		/*To Verify the Active Status of TestPlan*/
		isActive:function(){  
			return (this.xpath_util.getStringValueByLabelName("active")=='1')? true:false;
	},	
		/*To Verify the Open Status of TestPlan*/
		isOpen:function(){
			return (this.xpath_util.getStringValueByLabelName("is_open")=='1')? true:false;
	},
		/*To Verify the Public Status of TestPlan*/
		isPublic:function(){  
			return (this.xpath_util.getStringValueByLabelName("is_public")=='1')? true:false;
	},	
		/*To Get the API Key*/
		getAPIKey:function(){
			return this.xpath_util.getStringValueByLabelName("api_key");
	},
		/*To get the Names of TestPlan*/
		getName:function(){  
			return this.xpath_util.getStringValueByLabelName("name");	
	},
		getTestPlanByNameCacheObject:function(){
	       var testplanbynamecacheObject={};
			for (var key in this) {
				if (!(this.hasOwnProperty(key) || key=='getTestPlanByNameCacheObject')) {
				 testplanbynamecacheObject[key]=this[key]();
				}
			}
			return testplanbynamecacheObject;
	}
		
		
};
		