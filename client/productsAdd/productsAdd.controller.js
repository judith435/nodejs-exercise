hwApp.controller('addProductsCtrl', function addProduct($scope, dataService) {
    fillDDLs();
    $scope.form = {
        name : "frmAddProduct", 
        fields :
        [
            {
                name:'productName',
                index: 0,
                content: '',
                description: 'Product Name',
                required: true,
                type: 'text',
                maxlength: 40,
                errorFound: false,
                errorMessage: '',
                // validation: function() {

                // }
            },
            {
                name:'supplier',
                index: 1,
                description: 'Supplier',
                required: true,
                content: '',
                type: 'select',
                errorMessage: '',
                options: [ ]
            },
            {
                name:'category',
                index: 2,
                description: 'Category',
                required: true,
                content: '',
                type: 'select',
                errorMessage: '',
                options: []
            },            
            {
                name:'quantityPerUnit',
                index: 3,
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
                index: 4,
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
                index: 5,
                content: '',
                required: false,
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
            field.errorMessage = (!field.content)  && field.required ? field.description + ' required' : '';
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
        let index = 0;
        product = {
            tableName: 'products',
            productName: $scope.form.fields[index].content,
            supplier: $scope.form.fields[++index].content,
            category: $scope.form.fields[++index].content,
            quantityPerUnit: $scope.form.fields[++index].content,
            unitPrice: $scope.form.fields[++index].content,
            discontinued: $scope.form.fields[++index].content

        };

        // movieService.addMovie(movie, function(response) {
        //     $scope.message = (JSON.stringify(response.data));
        // });
        $scope.errorsFound = false;
        $scope.duplicateFound = false;
    }  


});


