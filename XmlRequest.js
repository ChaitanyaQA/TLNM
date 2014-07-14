

module.exports=TestLinkXmlRequest={

getTestCaseNames:function(devKey,testprojectid,testsuiteid)
{ return  '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestCasesForTestSuite</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testprojectid</name><value><int>'+testprojectid+'</int></value></member>'+
	'<member><name>testsuiteid</name><value><int>'+testsuiteid+'</int></value></member>'+
	'<member><name>deep</name><value><boolean>1</boolean></value></member>'+
	'<member><name>details</name><value><string>full</string></value></member>'+
	'<member><name>getkeywords</name><value><boolean>1</boolean></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getBuildsForTestPlan:function(devKey,testPlanId)
{ return  '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getBuildsForTestPlan</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testplanid</name><value><int>'+testPlanId+'</int></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getProjects:function(dev01)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getProjects</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+dev01+'</string></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},
getTestPlanPlatforms:function(dev01,testPlanId)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestPlanPlatforms</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+dev01+'</string></value></member>'+
	'<member><name>testplanid</name><value><int>'+testPlanId+'</int></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getProjectTestPlans:function(dev01,projectID)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getProjectTestPlans</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+dev01+'</string></value></member>'+
	'<member><name>testprojectid</name><value><int>'+projectID+'</int></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestPlanByName:function(devKey,testprojectname,testplanname)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestPlanByName</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testprojectname</name><value><string>'+testprojectname+'</string></value></member>'+
	'<member><name>testplanname</name><value><string>'+testplanname+'</string></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestSuitesForTestPlan:function(devKey,testplanid)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestSuitesForTestPlan</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testplanid</name><value><int>'+testplanid+'</int></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestCase:function(devKey,testcaseexternalid)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestCase</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testcaseexternalid</name><value><string>'+testcaseexternalid+'</string></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestCaseIDByName:function(devKey,testcasename)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestCaseIDByName</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testcasename</name><value><string>'+testcasename+'</string></value></member>'+
	'</struct></value></param>'
	'</params></methodCall>';
},

uploadTestCaseAttachment:function(devKey,testcaseid,title,filename,content)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.uploadTestCaseAttachment</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testcaseid</name><value><int>'+testcaseid+'</int></value></member>'+
	'<member><name>title</name><value><string></string></value></member>'+
	'<member><name>filename</name><value><string>'+filename+'</string></value></member>'+
	'<member><name>content</name><value><string>'+content+'</string></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getProjectPlatforms:function(devKey,testprojectid)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getProjectPlatforms</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testprojectid</name><value><int>'+testprojectid+'</int></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestCaseCustomFieldDesignValue:function(devKey,testprojectid,testcaseexternalid,customfieldname,details,version)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestCaseCustomFieldDesignValue</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testcaseexternalid</name><value><string>'+testcaseexternalid+'</string></value></member>'+
	'<member><name>testprojectid</name><value><int>'+testprojectid+'</int></value></member>'+
	'<member><name>customfieldname</name><value><string>'+customfieldname+'</string></value></member>'+
	'<member><name>details</name><value><string>'+details+'</string></value></member>'+
	'<member><name>version</name><value><int>'+version+'</int></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestCasesForTestPlan:function(devKey,testplanid)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestCasesForTestPlan</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testplanid</name><value><int>'+testplanid+'</int></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestCasesForTestSuite:function(devKey,testprojectid,testsuiteid)
{ return '<?xml version="1.0"?>'+
'<methodCall>'+
'<methodName>tl.getTestCasesForTestSuite</methodName>'+
'<params>'+
'<param><value><struct>'+
  '<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
  '<member><name>testprojectid</name><value><int>'+testprojectid+'</int></value></member>'+
  '<member><name>testsuiteid</name><value><int>'+testsuiteid+'</int></value></member>'+
  '<member><name>deep</name><value><boolean>1</boolean></value></member>'+
  '<member><name>details</name><value><string>full</string></value></member>'+
  '<member><name>getkeywords</name><value><boolean>1</boolean></value></member>'+
'</struct></value></param>'+
'</params></methodCall>';
},

getTestProjectByName:function(devKey,testprojectname)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestProjectByName</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testprojectname</name><value><string>'+testprojectname+'</string></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestSuitesForTestSuite:function(devKey,testsuiteid)
{	return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestSuitesForTestSuite</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testsuiteid</name><value><int>'+testsuiteid+'</int></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getUserByID:function(devKey,userid)
{	return	'<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getUserByID</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>userid</name><value><int>'+userid+'</int></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getUserByLogin:function(devKey,user)
{	return	'<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getUserByLogin</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>user</name><value><string>'+user+'</string></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestCasesForTestSuite:function(devKey,testprojectid,testsuiteid)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestCasesForTestSuite</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testprojectid</name><value><int>'+testprojectid+'</int></value></member>'+
	'<member><name>testsuiteid</name><value><int>'+testsuiteid+'</int></value></member>'+
	'<member><name>deep</name><value><boolean>1</boolean></value></member>'+
	'<member><name>details</name><value><string>full</string></value></member>'+
	'<member><name>getkeywords</name><value><boolean>1</boolean></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestCaseIDByName:function(devKey,testcasename)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestCaseIDByName</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testcasename</name><value><string>'+testcasename+'</string></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
}

};