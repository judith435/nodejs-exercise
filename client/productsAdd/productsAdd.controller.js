hwApp.controller('addProductsCtrl', function addProduct($scope, dataService) {
    fillDDLs();
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
                name:'supplier',
                description: 'Supplier',
                required: true,
                content: '',
                type: 'select',
                errorMessage: '',
                options: [ ]
            },
            {
                name:'category',
                description: 'Category',
                required: true,
                content: '',
                type: 'select',
                errorMessage: '',
                options: []
            },            
            {
                name:'quantityPerUnit',
                content: '',
                description: 'Quantity per Unit',
                required: true,
                type: 'text',
                maxlength: 20,
                errorFound: false,
                errorMessage: ''
            },
            {
                name:'unitPrice',
                content: '',
                description: 'Unit Price',
                required: true,
                type: 'number',
                min: 0,
                step: "0.0001",
                errorFound: false,
                errorMessage: ''
            },
            {
                name:'discontinued',
                content: '',
                description: 'Discontinued',
                type: 'checkbox',
                value: false,
            },
        ]
    }
    function fillDDLs() {
        dataService.getSuppliersForDDL(function(suppliers) {
            index =  $scope.form.fields.findIndex(x => x.name == 'supplier');
            $scope.form.fields[index].options = suppliers.data[0];
        });

        dataService.getCategoriesForDDL(function(categories) {
            index =  $scope.form.fields.findIndex(x => x.name == 'category');
            $scope.form.fields[index].options = categories.data[0];
        });
    }

    $scope.addProduct = function()  {
        $scope.errorsFound = false;
        $scope.form.fields.forEach(function(field) {
            if(field.type === 'number') {
                field.errorMessage = field.content === null && field.required ? field.description + ' required' : '';
            }
            else {
                field.errorMessage = field.content === '' && field.required ? field.description + ' required' : '';
            }
            $scope.errorsFound = field.errorMessage !== '' || $scope.errorsFound;
        });
        if ($scope.errorsFound) { return; }
        alert ('no errors found!!!');
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


