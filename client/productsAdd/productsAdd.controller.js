hwApp.controller('addProductsCtrl', function addProduct($scope, dataService) {
    $scope.errorsFound = false;
    $scope.form = {
        name : "frmAddProduct", 
        fields :
        [
            {
                name:'productName',
                content: '',
                description: 'Product Name',
                required: true,
                type: 'text',
                maxlength: 40,
                errorFound: false,
                errorMessage: '',
                validation: function() {

                }
            },
            {
                name:'quantityPerUnit',
                content: '',
                description: 'Quantity per Unit',
                required: true,
                type: 'text',
                maxlength: 20,
                errorFound: false,
                errorMessage: '',
                validation: function() {

                }
            },
            {
                name:'supplier',
                description: 'Supplier',
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
            field['errorMessage'] = field.content === '' && field.required ? field['description'] + ' required' : '';
            // if (field.content == '' && field.required){
            //     field.errorMessage = field.Description + ' required';
            //     $scope.errorsFound = true;
            // }
        });
        if ($scope.errorsFound) { return; }

        // // validationService.setSelectedDirector($scope.selectedDirector);
        // if (!validationService.checkDuplicateMovie($scope.selectedDirector))
        // {
        //     $scope.errorsFound = true;
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
        $scope.errorsFound = false;
        $scope.duplicateFound = false;
    }  


});


