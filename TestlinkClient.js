var TestLinkAPI = require('./TestLinkAPI');

/* Declaring variables */
var devKey="5f5fa0d9eba136f28e45d1f8a17cbedd";
var RPCUrl="http://localhost:80/testlink/lib/api/xmlrpc/v1/xmlrpc.php";
var testprojectid=12;
var testsuiteid=5;
var testplanid=16;
var testlink=new TestLinkAPI(devKey,RPCUrl);
var projectname="Cucumber Project";
var planname="Cucu Project Plan";
var testcaseid="CP-1";
var testcaseextid="CP-1";
var version=1;

/* 
testlink.getTestCase(testcaseid,testcaseextid,version,function(tcname){
	tcname.map(function(testcase){
	console.log(testcase);
});});

testlink.getTestCase(testcaseextid,function(tcname){
	tcname.setParentId('2');
	var newid=tcname.getParentId();
	console.log(newid);
});

testlink.getTestCase(testcaseextid,function(tcname){
var name=tcname.getNodeOrder();
console.log(name);
});

testlink.getTestPlanPlatforms(testplanid,function(testcasename){
testcasename.map(function(value){
console.log(value.getPlatformName());
});});

testlink.getBuildsForTestPlan(testplanid,function(data){
data.map(function(builds){
console.log(builds.getId);
});});

testlink.getProjects(function(data){
data.map(function(d){
console.log(d.getName);
});});

testlink.getProjectTestPlans(testprojectid,function(name){
name.map(function(value){
console.log(value.getNotes);
});});

testlink.getTestCase(testcaseextid,function(data){
data.map(function(d){
console.log(d.getImportance);
});});

testlink.getTestPlanByName(projectname,planname,function(plan){
plan.map(function(value){
console.log(value.getName);
});});

testlink.getTestCaseNames(testprojectid,testsuiteid,function(TestcaseNames){
TestcaseNames.map(function(testcasename){
console.log(testcasename);
});}); */

testlink.getTestSuitesForTestPlan(testplanid,function(name){
name.map(function(testcasename){
console.log(testcasename.getName);
});}); 

