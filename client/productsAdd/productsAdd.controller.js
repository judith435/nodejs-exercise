hwApp.controller('addProductsCtrl', function addProduct($scope, dataService) {
    $scope.showErrorMessages = false;
     const frmAddProduct = [
        {
            name:'productName',
            content: '',
            header: 'Product Name',
            required: true,
            type: 'text',
            errorShow: false,
            validation: function() {

            }
        },
        {
            name:'supplier',
            header: 'Supplier',
            required: true,
            content: '',
            type: 'select',
            errorShow: false,
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

    // const frmAddProduct = {
    //     productName: {
    //         name:'productName',
    //         header: 'Product Name',
    //         required: true,
    //         type: 'text',
    //         errorShow: 'frmCU.productName.$error.required',
    //         validation: function() {

    //         }
    //     },
    //     supplier: {
    //         name:'supplier',
    //         header: 'Supplier',
    //         required: true,
    //         type: 'select',
    //         errorShow: 'frmCU.supplier.$error.required',
    //         options: [
    //             {
    //                 value: 1,
    //                 text: 'hello1'
    //             },
    //             {
    //                 value: 2,
    //                 text: 'hello2'
    //             }
    //         ]
    //         // type: {
    //         //     name: 'select',
    //         //     data: []
    //         // }
    //     }//,
    //     // isOpen: {
    //     //     label: 'is open',
    //     //     required: false,
    //     //     type: 'checkbox'
    //     // }
    // }
    $scope.inputFields = frmAddProduct;


    $scope.addProduct = function(inputi)  {
        frmAddProduct.forEach(function(field) {
           var toto =  field['name'];
          // var lala = $scope.toto;
            $scope.showErrorMessages = true;//field.required && field === '';
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


