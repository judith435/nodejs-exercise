function Supplier(suppl) {
    this.SupplierID = suppl['SupplierID'];
    this.CompanyName = suppl['CompanyName'];
    this.ContactName = suppl['ContactName'];
    this.ContactTitle = suppl['ContactTitle'];
    this.Address = suppl['Address'];
    this.City = suppl['City'];
    this.Country = suppl['Country'];
    this.Phone = suppl['Phone'];
}

module.exports.Supplier = Supplier;
