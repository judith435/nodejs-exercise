function Product(prod) {
    this.ProductID = prod['ProductID'];
    this.ProductName = prod['ProductName'];
    this.SupplierID = prod['SupplierID'];
    this.CategoryID = prod['CategoryID'];
    this.QuantityPerUnit = prod['QuantityPerUnit'];
    this.UnitPrice = prod['UnitPrice'];
    this.UnitsInStock = prod['UnitsInStock'];
    this.UnitsOnOrder = prod['UnitsOnOrder'];
    this.ReorderLevel = prod['ReorderLevel'];
    this.Discontinued = prod['Discontinued'];
}

module.exports.Product = Product;

