hwApp.controller('productsCtrl', function handleProducts($scope, dataService) {
    alert('in productsCtrl');
    getProducts();
    
    function getProducts() {
        dataService.getProducts(function(products) {
            alert("after getProducts" + JSON.stringify(products.data));
            $scope.products = products.data[0];
        });
    }


});