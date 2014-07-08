var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;
var XpathUtil=require('../XpathUtil');


module.exports=GetBuildsForTestPlanComponents=function (xmlresponse){
    this.doc = new dom().parseFromString(xmlresponse);
    this.xpath_util=new XpathUtil(this.doc);	
	}
	
GetBuildsForTestPlanComponents.prototype={
		
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
		
		isOpen:function(){  
		return (this.xpath_util.getStringValueByLabelName("is_open")=='1')? true:false;
		},
		
		getReleaseDate:function(){  
		return this.xpath_util.getStringValueByLabelName("release_date");
		},
		
		getClosedDate:function(){  
		return this.xpath_util.getStringValueByLabelName("closed_on_date");
		},
		
		getBuildsForTestPlanCacheObject:function(){
	       var buildscacheObject={};
			for (var key in this) {
				if (!(this.hasOwnProperty(key) || key=='getBuildsForTestPlanCacheObject')) {
				 buildscacheObject[key]=this[key]();
				}
			}
			return buildscacheObject;
		}
};