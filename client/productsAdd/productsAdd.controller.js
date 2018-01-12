hwApp.controller('addProductsCtrl', function addProduct($scope, dataService) {
    $scope.showErrorMessages = false;
    $scope.form = {
        name : "frmAddProduct", 
        fields :
        [
            {
                name:'productName',
                content: '',
                header: 'Product Name',
                required: true,
                type: 'text',
                errorFound: false,
                validation: function() {

                }
            },
            {
                name:'supplier',
                header: 'Supplier',
                required: true,
                content: '',
                type: 'select',
                options: [
                    {
                        value: 1,
                        text: 'hello1'
                    },
                    {
                        value: 2,
                        text: 'hello2'
                    }
                ]
            }
        ]
    }
    //     }//,
    //     // isOpen: {
    //     //     label: 'is open',
    //     //     required: false,
    //     //     type: 'checkbox'
    //     // }
    // }

    $scope.addProduct = function()  {
        var tata =$scope.form;//scope.form["fields"][0]["name"]
        //scope.form["fields"][0]["name"]
        $scope.form.fields.forEach(function(field) {
            if (field['content'] == '' && field.required){
                field['errorFound'] = true;
                $scope.showErrorMessages = true; 
           }
        });
        if ($scope.showErrorMessages) { return; }
        // if ($scope.frmCU.$invalid){
        //      $scope.showErrorMessages = true;
        //      return;
        // }

        // // validationService.setSelectedDirector($scope.selectedDirector);
        // if (!validationService.checkDuplicateMovie($scope.selectedDirector))
        // {
        //     $scope.showErrorMessages = true;
        //     $scope.duplicateFound = true;
        //     return;
        // } 

        // movie = {
        //     ctrl: "movie",
        //     movie_name: $scope.movieName,
        //     director_id: $scope.selectedDirector
        // };
        // movieService.addMovie(movie, function(response) {
        //     $scope.message = (JSON.stringify(response.data));
        // });
        $scope.showErrorMessages = false;
        $scope.duplicateFound = false;
    }  


});


