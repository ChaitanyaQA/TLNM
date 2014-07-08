var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;
var XpathUtil=require('../XpathUtil');

module.exports=GetTestCaseComponents=function (xmlresponse){
    this.doc = new dom().parseFromString(xmlresponse);
	this.xpath_util=new XpathUtil(this.doc);	
	}
	
GetTestCaseComponents.prototype={
		
		getUpdaterLogin:function(){
			return this.xpath_util.getStringValueByLabelName("updater_login");
		},
		
		getAuthorLogin:function(){
			return this.xpath_util.getStringValueByLabelName("author_login");
		},
		
		getName:function(){
			return this.xpath_util.getStringValueByLabelName("name");
		},
		
		getNodeOrder:function(){
			return this.xpath_util.getStringValueByLabelName("node_order");
		},
		
		getTestSuiteID:function(){
			return this.xpath_util.getStringValueByLabelName("testsuite_id");
		},
		
		getTestCaseID:function(){
			return this.xpath_util.getStringValueByLabelName("testcase_id");
		},
		
		getId:function(){
			return this.xpath_util.getStringValueByLabelName("id");
		},
		
		getTestCaseExternalID:function(){
			return this.xpath_util.getStringValueByLabelName("tc_external_id");
		},
		
		getVersion:function(){
			return this.xpath_util.getStringValueByLabelName("version");
		},
		
		getTestCaseLayout:function(){
			return this.xpath_util.getStringValueByLabelName("layout");
		},
		
		getTestCaseStatus:function(){
			var TCStatus = this.xpath_util.getStringValueByLabelName("status");
						switch(TCStatus){
							case "1":	
								return "Draft";
								break;
							case "2":
								return "Ready For Review";
								break;
							case "3":
								return "Review In Progress";
								break;
							case "4":
								return "Rework";
								break;
							case "5":
								return "Obsolete";
								break;
							case "6":
								return "Future";
								break;
							case "7":
								return "Final";
								break;
							default :
								return "No Match Found"
								break;
							}
		},
		
		getTestCaseSummary:function(){
			return this.xpath_util.getStringValueByLabelName("summary");
		},		
		
		getTestCasePreconditions:function(){
			return this.xpath_util.getStringValueByLabelName("preconditions");
		},
		
		getImportance:function(){
			var importance=this.xpath_util.getStringValueByLabelName("importance");
						switch(importance){
							case "1":
								return "Low";
								break;
							case "2":
								return "Medium";
								break;
							case "3":
								return "High";
								break;
							default	:
								return "No Match Found";
								break;
						}
		},
		
		getAuthorID:function(){
			return this.xpath_util.getStringValueByLabelName("author_id");
		},
		
		getTestCaseCreatedTime:function(){
			return this.xpath_util.getStringValueByLabelName("creation_ts");
		},
		
		getTestCaseUpdaterID:function(){
			return this.xpath_util.getStringValueByLabelName("updater_id");
		},
		
		getTestCaseModificationTime:function(){
			return this.xpath_util.getStringValueByLabelName("modification_ts");
		},
		
		isActive:function(){
			return (this.xpath_util.getStringValueByLabelName("active")=='1')? true:false;
		},
		
		isOpen:function(){
			return (this.xpath_util.getStringValueByLabelName("is_open")=='1')? true:false;
		},
		
		getExecutionType:function(){
			var exec_type=this.xpath_util.getStringValueByLabelName("execution_type");
				switch(exec_type){
								case "1":
									return "Manual";
									break;
								case "2":
									return "Automation";
									break;
								default :
									return "No Match Found";
									break;
							}
		},
		
		getEstimatedExecutionTime:function(){
			return this.xpath_util.getStringValueByLabelName("estimated_exec_duration");
		},
		
		getAuthorFirstName:function(){
			return this.xpath_util.getStringValueByLabelName("author_first_name");
		},
		
		getAuthorLastName:function(){
			return this.xpath_util.getStringValueByLabelName("author_last_name");
		},
		
		getUpdaterFirstName:function(){
			return this.xpath_util.getStringValueByLabelName("updater_first_name");
		},
		
		getUpdaterLastName:function(){
			return this.xpath_util.getStringValueByLabelName("updater_last_name");
		},
		
		getSteps:function(){
			return this.xpath_util.getStringValueByLabelName("steps");
		},
		
		getFullTestCaseExternalID:function(){
			return this.xpath_util.getStringValueByLabelName("full_tc_external_id");
		},
		
		getTestCaseCacheObject:function(){
	       var testcasecacheObject={};
			for (var key in this) {
				if (!(this.hasOwnProperty(key) || key=='getTestCaseCacheObject')) {
				 testcasecacheObject[key]=this[key]();
				}
			}
			return testcasecacheObject;
	}
		
		
};