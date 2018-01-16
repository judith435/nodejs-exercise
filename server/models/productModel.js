function Product(prod) {
    this.productID = prod['productID'];
    this.productName = prod['productName'];
    this.supplierID = prod['supplierID'];
    this.supplierName = prod['supplierName'];
    this.categoryID = prod['categoryID'];
    this.categoryName = prod['categoryName'];
    this.quantityPerUnit = prod['quantityPerUnit'];
    this.unitPrice = prod['unitPrice'];
    this.unitsInStock = prod['unitsInStock'];
    this.unitsOnOrder = prod['unitsOnOrder'];
    this.reorderLevel = prod['reorderLevel'];
    this.discontinued = prod['discontinued'] === true ? 1 : 0;
}

module.exports.Product = Product;