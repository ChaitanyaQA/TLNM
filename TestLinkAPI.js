var http 		= require('http');
var fs          = require('fs');
var utilites 	= require('./Utilities');
var xmlRequest	= require('./XmlRequest');
var dom 		= require('xmldom').DOMParser;

module.exports=TestLinkApi=function (devkey,rpcUrl){
	this.TestUrl=rpcUrl;
	this.devkey=devkey;					 
}
 
/*To Get the Available Builds Created for Passing TestPlan ID*/
TestLinkApi.prototype.getBuildsForTestPlan=function(testPlanId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getBuildsForTestPlan(this.devkey,testPlanId);
	utilites.postrequest(post,body,function(response){
	var buildsfortestplan=utilites.getJsObjectByXmlResponse(response);
	callback(buildsfortestplan);
		});
};
	
TestLinkApi.prototype.getProjectPlatforms=function(testprojectid,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getProjectPlatforms(this.devkey,testprojectid);
	utilites.postrequest(post,body,function(response){
	var projectPlatforms=utilites.getJsObjectByXmlResponse(response);
	callback(projectPlatforms);
		});
}; 

/*To Get the Available TestPlans for the Passing Project ID*/
TestLinkApi.prototype.getProjectTestPlans=function(projectId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getProjectTestPlans(this.devkey,projectId);
	utilites.postrequest(post,body,function(response){
	var projectPlans=utilites.getJsObjectByXmlResponse(response);
	callback(projectPlans);
		});
};

/*To Get the Created Project Names*/
TestLinkApi.prototype.getProjects=function(callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getProjects(this.devkey);
	utilites.postrequest(post,body,function(response){
	var projects=utilites.getJsObjectByXmlResponse(response);
	callback(projects);
		});
	};

/*To Get the TestCase Names for the Passing TestCaseID and TestCase External ID*/
TestLinkApi.prototype.getTestCase=function(testCaseExtId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestCase(this.devkey,testCaseExtId);
	utilites.postrequest(post,body,function(response){
	var testcase=utilites.getJsObjectByXmlResponse(response);
	callback(testcase);
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

TestLinkApi.prototype.getTestCaseCustomFieldDesignValue=function(testprojectid,testcaseexternalid,customfieldname,details,version,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestCaseCustomFieldDesignValue(this.devkey,testprojectid,testcaseexternalid,customfieldname,"details",1);
	utilites.postrequest(post,body,function(response){
	var customFieldValue=utilites.getJsObjectByXmlResponse(response);
	callback(customFieldValue);
		});
};

TestLinkApi.prototype.getTestCasesForTestPlan=function(testplanid,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestCasesForTestPlan(this.devkey,testplanid);
	utilites.postrequest(post,body,function(response){
    var testCases=utilites.getJsObjectByXmlResponse(response);
	callback(testCases);
		});
};

TestLinkApi.prototype.getTestCasesForTestSuite=function(testprojectid,testsuiteid,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestCasesForTestSuite(this.devkey,testprojectid,testsuiteid);
	utilites.postrequest(post,body,function(response){
	var getsuites=utilites.getJsObjectByXmlResponse(response);
    callback(getsuites);	
		});
};

TestLinkApi.prototype.getTestCaseIDByName=function(testcasename,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestCaseIDByName(this.devkey,testcasename);
	utilites.postrequest(post,body,function(response){
	console.log(response);
	var testcaseid=utilites.getJsObjectByXmlResponse(response);
    callback(testcaseid);	
		});


};

/*To Get the Available TestPlan Name*/
TestLinkApi.prototype.getTestPlanByName=function(testProjectName,testPlanName,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestPlanByName(this.devkey,testProjectName,testPlanName);
	utilites.postrequest(post,body,function(response){
	var planName=utilites.getJsObjectByXmlResponse(response);
	callback(planName);
		});
};

/*To Get the Available Platforms Names for the Passing TestPlan ID*/
TestLinkApi.prototype.getTestPlanPlatforms=function(testPlanId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestPlanPlatforms(this.devkey,testPlanId);
	utilites.postrequest(post,body,function(response){
	var platforms=utilites.getJsObjectByXmlResponse(response);
	callback(platforms);
		});
};

TestLinkApi.prototype.getTestProjectByName=function(testProjectName,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestProjectByName(this.devkey,testProjectName);
	utilites.postrequest(post,body,function(response){
	var projectName=utilites.getJsObjectByXmlResponse(response);
	callback(projectName);
		});
};

/*To Get the Available TestSuite Names for the Passing TestPlan ID*/
TestLinkApi.prototype.getTestSuitesForTestPlan=function(testPlanId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestSuitesForTestPlan(this.devkey,testPlanId);
	utilites.postrequest(post,body,function(response){
	var testSuites=utilites.getJsObjectByXmlResponse(response);
	callback(testSuites);
		});
};

TestLinkApi.prototype.getTestSuitesForTestSuite=function(testsuiteid,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestSuitesForTestSuite(this.devkey,testsuiteid);
	utilites.postrequest(post,body,function(response){
	console.log(response);
	var testsuites=utilites.getJsObjectByXmlResponse(response);
	callback(testsuites);
		});
}; 

TestLinkApi.prototype.getUserByID=function(userid,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getUserByID(this.devkey,userid);
	utilites.postrequest(post,body,function(response){
	var userByID=utilites.getJsObjectByXmlResponse(response);
	callback(userByID);
		});
};

TestLinkApi.prototype.getUserByLogin=function(user,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getUserByLogin(this.devkey,user);
	utilites.postrequest(post,body,function(response){
	var userByLogin=utilites.getJsObjectByXmlResponse(response);
	callback(userByLogin);
		});
};

TestLinkApi.prototype.uploadTestCaseAttachment=function(testcaseid,filename,uploadpath){
	var post=utilites.postCompose(this.TestUrl);
	var bitmap = fs.readFileSync(uploadpath+filename);
	var content=new Buffer(bitmap).toString('base64');
	var body=xmlRequest.uploadTestCaseAttachment(this.devkey,testcaseid,"text/plain",filename,content);
	utilites.postrequest(post,body,function(response){}); 
}; 

/*To Get DevKey*/
TestLinkApi.prototype.getDevKey=function(){
	return this.devkey
	};
	
/*To Get the URL*/
TestLinkApi.prototype.getUrl=function(){
	return this.TestUrl
};
	
	



	


 






 















