hwApp.service('productService', function($http) {
    
        this.getProducts = function (success) { 
            $http.get('http://localhost:8081/product',{}).then(success, error);
        }

        // this.updateNorthwind = function(data, onSuccess, onError) {
        //     $http({
        //         url: 'http://localhost:8081/' + data.tableName,
        //         method: 'POST',
        //         params: {
        //             tableName: data.tableName,
        //             data: data
        //         }
        //     }).then(onSuccess, onError);
        // }
    


        function error(response) {
            alert("Sorry Error occured in $http: " + JSON.stringify(response));
        }
    });
    