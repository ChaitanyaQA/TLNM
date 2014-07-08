var http 		= require('http');
var fs          = require('fs');
var utilites 	= require('./Utilities');
var xmlRequest	= require('./XmlRequest');
var xmlParser	= require('./XmlParser');
var xpath 		= require('xpath');
var dom 		= require('xmldom').DOMParser;
var GTPBN_Components = require('./Components/getTestPlanByName-components');
var GTC_Components = require('./Components/getTestCase-components');
var GBTP_Components = require('./Components/getBuildsForTestPlan-components');
var GP_Components = require('./Components/getProjects-components');
var GPTP_Components=require('./Components/getProjectTestPlans-components');
var GTPPF_Components=require('./Components/getTestPlanPlatforms-components');
var GTSTP_Components=require('./Components/getTestSuitesForTestPlan-components');

module.exports=TestLinkApi=function (devkey,rpcUrl){
	this.TestUrl=rpcUrl;
	this.devkey=devkey;					 
}
	 
	 /*To Get the Available Builds Created for Passing TestPlan ID*/
TestLinkApi.prototype.getBuildsForTestPlan=function(testPlanId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getBuildsForTestPlan(this.devkey,testPlanId);
	utilites.postrequest(post,body,function(response){
	var build_parser=new dom().parseFromString(response);
	var build_xpath=xpath.select("//struct",build_parser);
	var Builds=[];
	build_xpath.map(function(object){Builds.push(new GBTP_Components(object.toString()).getBuildsForTestPlanCacheObject());
		});
	callback(Builds);
		});
	 };
	
	/*To Get DevKey*/
TestLinkApi.prototype.getDevKey=function(){
	return this.devkey
	};
	
	/*To Get the Created Project Names*/
TestLinkApi.prototype.getProjects=function(callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getProjects(this.devkey);
	utilites.postrequest(post,body,function(response){
	var project_parser=new dom().parseFromString(response);
	var project_xpath=xpath.select("//struct",project_parser);
	var Projects=[];
	project_xpath.map(function(object){Projects.push(new GP_Components(object.toString()).getProjectsCacheObject());});
	callback(Projects);
		});
	};
	
	/*To Get the Available TestPlans for the Passing Project ID*/
TestLinkApi.prototype.getProjectTestPlans=function(projectId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getProjectTestPlans(this.devkey,projectId);
	utilites.postrequest(post,body,function(response){
	var projectplan_parser=new dom().parseFromString(response);
	var projectplan_xpath=xpath.select("//struct",projectplan_parser);
	var ProjectPlans=[];
	projectplan_xpath.map(function(object){ProjectPlans.push(new GPTP_Components(object.toString()).getProjectTestPlansCacheObject());});
	callback(ProjectPlans);
		});
};
	
	/*To Get the Available TestPlan Name*/
TestLinkApi.prototype.getTestPlanByName=function(testProjectName,testPlanName,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestPlanByName(this.devkey,testProjectName,testPlanName);
	utilites.postrequest(post,body,function(response){
	var planname_parser=new dom().parseFromString(response);
	var planname_xpath=xpath.select("//struct",planname_parser);
	var PlanName=[];
	planname_xpath.map(function(object){PlanName.push(new GTPBN_Components(object.toString()).getTestPlanByNameCacheObject());});
	callback(PlanName);
		});
};
	/*To Get the Available TestSuite Names for the Passing TestPlan ID*/
TestLinkApi.prototype.getTestSuitesForTestPlan=function(testPlanId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestSuitesForTestPlan(this.devkey,testPlanId);
	utilites.postrequest(post,body,function(response){
	var suite_parser=new dom().parseFromString(response);
	var suite_xpath=xpath.select("//struct",suite_parser);
	var TestSuites=[];
	suite_xpath.map(function(object){TestSuites.push(new GTSTP_Components(object.toString()).getTestSuitesForTestPlanCacheObject());});
	callback(TestSuites);
		});
};
	
	/*To Get the Available Platforms Names for the Passing TestPlan ID*/
TestLinkApi.prototype.getTestPlanPlatforms=function(testPlanId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestPlanPlatforms(this.devkey,testPlanId);
	utilites.postrequest(post,body,function(response){
	var platform_parser=new dom().parseFromString(response);
	var platform_xpath=xpath.select("//struct",platform_parser);
	var Platform=[];
	platform_xpath.map(function(object){Platform.push(new GTPPF_Components(object.toString()).getTestPlanPlatformCacheObject());});
	callback(Platform);
		});
};

	/*To Get the URL*/
TestLinkApi.prototype.getUrl=function(){
	return this.TestUrl
};
	
	/*To Get the TestCase Names for the Passing TestCaseID and TestCase External ID*/
TestLinkApi.prototype.getTestCase=function(testCaseExtId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestCase(this.devkey,testCaseExtId);
	utilites.postrequest(post,body,function(response){
	var testcase_parser=new dom().parseFromString(response);
	var testcase_xpath=xpath.select("//struct",testcase_parser);
	var TestCase=[];
	testcase_xpath.map(function(object){TestCase.push(new GTC_Components(object.toString()).getTestCaseCacheObject());});
	callback(TestCase);
		});
};
	
TestLinkApi.prototype.getTestCaseAttachments=function(testcaseexternalid,downloadpath){
	var post=utilites.postCompose(this.TestUrl);	
	var body=xmlRequest.getTestCaseAttachments(this.devkey,testcaseexternalid);
	utilites.postrequest(post,body,function(response){
	var components=new Components(response);
	var component_names=components.getNames();
	var component_contents=components.getContent();
	var index=0;
	component_contents.map(function(content){
	var buf = new Buffer(content, 'base64'); 
	fs.writeFile(downloadpath+component_names[index++],buf, function (err) {
			if (err) throw err;
			console.log('File Has Been Downloaded');
			});
		});
	});
};



