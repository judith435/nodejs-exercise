SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `northwind` DEFAULT CHARACTER SET latin1 ;
USE `northwind` ;
USE `northwind` ;

-- -----------------------------------------------------
-- procedure get_categories_for_ddl
-- -----------------------------------------------------

DELIMITER $$
USE `northwind`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_categories_for_ddl`()
BEGIN

		SELECT 	CategoryID as value,
				CategoryName as text 
		FROM    categories
        order by CategoryName;
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure get_products
-- -----------------------------------------------------

DELIMITER $$
USE `northwind`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_products`()
BEGIN

		SELECT 	tblProd.ProductID as productID,
				tblProd.ProductName as productName,
				tblSuppliers.CompanyName as supplierName,
				tblCateg.CategoryName as categoryName,
				tblProd.QuantityPerUnit as quantityPerUnit,
				tblProd.UnitPrice as unitPrice,
				tblProd.UnitsInStock as unitsInStock
		FROM northwind.products tblProd
		inner join suppliers tblSuppliers
		on tblProd.ProductID = tblSuppliers.SupplierID
		inner join categories tblCateg
		on tblCateg.CategoryID = tblProd.CategoryID; 
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure get_suppliers
-- -----------------------------------------------------

DELIMITER $$
USE `northwind`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_suppliers`()
BEGIN

		SELECT 	SupplierID,
				CompanyName,
				ContactName,
				ContactTitle,
				Address,
				City,
				Country,
		Phone
		FROM suppliers;
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure get_suppliers_for_ddl
-- -----------------------------------------------------

DELIMITER $$
USE `northwind`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_suppliers_for_ddl`()
BEGIN

		SELECT 	SupplierID as value,
				CompanyName as text 
		FROM suppliers
        order by CompanyName;
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure insert_product
-- -----------------------------------------------------

DELIMITER $$
USE `northwind`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_product`(IN productName VARCHAR(40),
														   IN supplierID int(11),
														   IN categoryID int(11),
														   IN quantityPerUnit VARCHAR(20),
														   IN unitPrice decimal(19,4),
														   in discontinued tinyint(1))
BEGIN
			INSERT INTO `northwind`.`products`
				(`ProductName`,
				`SupplierID`,
				`CategoryID`,
				`QuantityPerUnit`,
				`UnitPrice`,
				`UnitsInStock`,
				`UnitsOnOrder`,
				`ReorderLevel`,
				`Discontinued`)
			VALUES
				(
				productName,
				supplierID,
				categoryID,
				quantityPerUnit,
				unitPrice,
				0,
				0,
				0,
				discontinued
				);

END$$

DELIMITER ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
