-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema northwind
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema northwind
-- -----------------------------------------------------
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

		SELECT 	tblProd.ProductID,
				tblProd.ProductName,
				tblSuppliers.CompanyName,
				tblCateg.CategoryName,
				tblProd.QuantityPerUnit,
				tblProd.UnitPrice,
				tblProd.UnitsInStock
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

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
