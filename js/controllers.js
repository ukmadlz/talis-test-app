/**
 * Angular Controllers
 */

// Index Controller
application.controller('IndexCtrl',function IndexCtrl ($scope, $http){

	// Rebuild the institute array for use in the form
	var institutes = [];

	angular.forEach(institution,function(value,key){

		institutes.push({'value':key,'name':value.name});

	});

	$scope.institutes = institutes;

	/**
	 * jQuery to handle the JSON
	 */
	$('form button.btn').on('click',function(){

		// The key for the institute within the institution array
		var instituteId = $('form #institute').val();

		// User supplied module code
		var moduleCode = $('form #module_code').val();

		// URL dependant on institution for module details
		var jsonUrl = institution[instituteId].url+moduleCode;

		$http.jsonp(jsonUrl+'.json',{ params : { cb:'JSON_CALLBACK' }})
		.success(function(data){

          	/* Module Details */
          	// Code
            $scope.module_code = data[jsonUrl]['http://purl.org/vocab/aiiso/schema#code'][0]['value'];
            // Name
            $scope.module_name = data[jsonUrl]['http://purl.org/vocab/aiiso/schema#name'][0]['value'];
            // Description
            if(typeof data[jsonUrl]['http://purl.org/vocab/aiiso/schema#description'] != 'undefined')
            {

            	$scope.module_description = data[jsonUrl]['http://purl.org/vocab/aiiso/schema#description'][0]['value'];

            }
            else
            {

            	$scope.module_description = '';

            }

            // Talis Lists
			var lists = [];

			angular.forEach(data[jsonUrl]['http://purl.org/vocab/resourcelist/schema#usesList'],function(objectValue,key){

				lists.push({
					title: data[objectValue['value']]['http://rdfs.org/sioc/spec/name'][0]['value'],
					link: objectValue['value'],
					year: data[data[objectValue['value']]['http://lists.talis.com/schema/temp#hasTimePeriod'][0]['value']]['http://purl.org/dc/terms/title'][0]['value'],
					last_update: prettyDate(data[objectValue['value']]['http://purl.org/vocab/resourcelist/schema#lastUpdated'][0]['value'])
				});

			});

            $scope.lists = lists;

		})
		.error(function(){

			// Reset lists to 0 so that the No Module message is displayed
			$scope.lists = [];

		});

		return false

	});

});