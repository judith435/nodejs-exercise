hwApp.service('dataService', function($http) {
    
        this.getProducts = function (success) { 
            $http.get('http://localhost:8081/product',{}).then(success, error);
           // $http.get('http://localhost:8081/product',{"ctrl":"product"}).then(success, error);
            // $http({
            //     url : '../express.js',
            //  //   url : 'http://localhost:8080/joint/angular_movies/app/back/api/api.php',
            //     method : "GET",
            //     params: {ctrl: 'product'}
            // }).then(success, error);
        }
    
        // $http.get('http://localhost:8080/dowork',{"msg":"hi"}).success(function(data){
        //         console.log(data);
        // });


    
        function error(response) {
            alert("Sorry Error occured in $http: " + JSON.stringify(response));
        }
    });
    