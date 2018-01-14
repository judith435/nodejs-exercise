hwApp.service('categoryService', function($http) {
    this.getCategoriesForDDL = function (success) { 
        $http.get('http://localhost:8081/categoryDDL',{}).then(success, error);
    }

    function error(response) {
        alert("Sorry Error occured in $http: " + JSON.stringify(response));
    }
});
