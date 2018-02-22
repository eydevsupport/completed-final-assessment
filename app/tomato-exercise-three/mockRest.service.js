(function() {
	"use strict";

	angular
		.module("app.shared-services")
		.factory("mockRestService", mockRestService);

	mockRestService.$inject = ["$http", "$q"];

	function mockRestService($http, $q) {

		var service = {
            getListItems: getListItems
		};

		return service;

		function getListItems(listTitle, queryParams) {
            var dfd = $q.defer();
            $http.defaults.headers.post['X-HTTP-Method'] = "";
            var restUrl = "../_api/web/lists/getbytitle('" + listTitle + "')/items" + queryParams;
            $http.get(restUrl).success(function(data) {
                dfd.resolve(data.d.results);
            }).error(function(data) {
                dfd.reject("error, cannot get items"); 
            });
            return dfd.promise;
		}

	}
})();


function getRisksAndIssues() {
	var queryParams = {
		select: 'ID, Title, Function/Title, Description, RiskOwner/Title',
		expand: 'Function, Risk Owner',
		filter: 'Risk Impact eq High',
		top: 500
	}; 

	mockRestService.getListItems('Risks and Issues', queryParams).then(function(response) {
		return rsponse;
	});
}

var riskAndIssuesData = {
	'ID': 1,
	'Title': 'This is The Title',
	'Function': {
		'Title': 'FunctionTitle'
	},
	'Description': 'This is the description',
	'RiskOwner': {
		'Title': 'Firstname Lastname'
	} 
};

function getWorkPlan() {
	var queryParams = {
		select: 'ID, TaskOwner/Title, Function/Title, WorkPlanTaskType/Title, WorkPlanTaskStatus/Title',
		expand: 'TaskOwner, Function, WorkPlanTaskType, WorkPlanTaskStatus',
		orderby: 'TaskDueDate',
		top: 500
	}; 

	mockRestService.getListItems('Work Plan', queryParams).then(function(response) {
		return response;
	});
}

var workPlanData = {
	'ID': 1,
	'TaskOwner': {
		'Title': 'Firstname Lastname'
	},
	'Function': {
		'Title': 'FunctionTitle'
	},
	'WorkPlanTaskType': {
		'Title': 'Task'
	},
	'WorkPlanTaskStatus': {
		'Title': 'Completed'
	}
};

/* ************** PART II EXERCISE**************  */

/*Example Rest Call to get all items from the WorkPlan List*/

/* 
	INSERT FUNCTION HERE:
	function getAllItems() {

		var queryParams = {
			Select: *
		}
		mockRestService.getListItems('WorkPlan', queryParams).then(function(response) {
			return response;
		})
	}

	ANTICIPATED DATA FORMAT: 
	{
		DATA: FORMAT,
		INSERT: HERE
	}
*/

/*************** INSERT ANSWERS BELOW IN THE COMMENTED AREA**************
 











































 */