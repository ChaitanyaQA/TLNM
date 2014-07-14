var TestLinkAPI = require('./TestLinkAPI');

/* Declaring variables */
var devKey="5f5fa0d9eba136f28e45d1f8a17cbedd";
var RPCUrl="http://localhost:80/testlink/lib/api/xmlrpc/v1/xmlrpc.php";
var testprojectid=12;
var testsuiteid=13;
var testplanid=16;
var testlink=new TestLinkAPI(devKey,RPCUrl);
var projectname="Cucumber Project";
var planname="Cucu Project Plan";
var testcaseid="CP-1";
var testcaseextid="CP-1";
var version=1;
var testprojectname="Cucumber Project";
var userid=2;
var user="chaitu";
var details="Hi";
var testcasename="Verify the Login Scenario";

testlink.getTestCaseIDByName(testcasename,function(testCases){
/* testCases.map(function(testCase){
testCase=testCase.struct;
console.log(testCase);
}); */ 

//testCases=testCases.struct;
console.log(testCases);
	 
});



