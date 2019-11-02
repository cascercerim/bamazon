DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR(45) NULL,
    price DECIMAL(10,4) NULL,
    stock_quantity DECIMAL(10,4) NULL,
    PRIMARY KEY (item_id)
);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("women's shirt","womens clothing",19.99,34);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("men's sports jeresy","men's clothing",80.00,105);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("little robot","kids toys",25.00,26);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("ipad","electronics",349.99,1000);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("macbook pro","electronics",1349.99,2000);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("dog food","pet supplies",29.99,52);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("nike shocks","shoes dept.",50.00,1007);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("christmas wreath","home and garden",29.98,16);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("harry potter book series","books",9.09,22);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("lawn mower","home and garden",249.99,5);

SELECT *
FROM products;

