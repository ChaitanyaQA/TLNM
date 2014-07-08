var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;
var XpathUtil=require('../XpathUtil');


module.exports=GetProjectComponents=function (xmlresponse){
    this.doc = new dom().parseFromString(xmlresponse);	
    this.xpath_util=new XpathUtil(this.doc);	
	}
	
GetProjectComponents.prototype={
		
			getId:function(){
			return this.xpath_util.getStringValueByLabelName("id");
			},

			getNotes:function(){
			return this.xpath_util.getStringValueByLabelName("notes");
			},

			getColor:function(){
			return this.xpath_util.getStringValueByLabelName("color");
			},

			isActive:function(){  
			return (this.xpath_util.getStringValueByLabelName("active")=='1')? true:false;
			},

			isOptionReqs:function(){  
			return (this.xpath_util.getStringValueByLabelName("option_reqs")=='1')? true:false;
			},
			
			isOptionPriority:function(){  
			return (this.xpath_util.getStringValueByLabelName("option_priority")=='1')? true:false;
			},

			isOptionAutomation:function(){  
			return (this.xpath_util.getStringValueByLabelName("option_automation")=='1')? true:false;
			},

			getOptions:function(){
			return this.xpath_util.getStringValueByLabelName("options");
			},

			getPrefix:function(){
			return this.xpath_util.getStringValueByLabelName("prefix");
			},

			getTestCaseCounter:function(){
			return this.xpath_util.getStringValueByLabelName("tc_counter");
			},

			isPublic:function(){  
			return (this.xpath_util.getStringValueByLabelName("is_public")=='1')? true:false;
			},

			isIssueTrackerEnabled:function(){  
			return (this.xpath_util.getStringValueByLabelName("issue_tracker_enabled")=='1')? true:false;
			},

			isReqmgrIntegrationEnabled:function(){  
			return (this.xpath_util.getStringValueByLabelName("reqmgr_integration_enabled")=='1')? true:false;
			},

			getAPIKey:function(){
			return this.xpath_util.getStringValueByLabelName("api_key");
			},	

			getName:function(){
			return this.xpath_util.getStringValueByLabelName("name");
			},

			isRequirementsEnabled:function(){  
			return (this.xpath_util.getIntValueByLabelName("requirementsEnabled")=='1')? true:false;
			},
			
			isTestPriorityEnabled:function(){  
			return (this.xpath_util.getIntValueByLabelName("testPriorityEnabled")=='1')? true:false;
			},
			
			isAutomationEnabled:function(){  
			return (this.xpath_util.getIntValueByLabelName("automationEnabled")=='1')? true:false;
			},
			
			isinventoryEnabled:function(){  
			return (this.xpath_util.getIntValueByLabelName("inventoryEnabled")=='1')? true:false;
			},
			
			getProjectsCacheObject:function(){
				var projectscacheObject={};
					for (var key in this) {
						if (!(this.hasOwnProperty(key) || key=='getProjectsCacheObject')) {
							projectscacheObject[key]=this[key]();
				}
			}
			return projectscacheObject;
		}
		
};