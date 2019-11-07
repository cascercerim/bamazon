DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
    item_id INT(4) NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);
SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1,"women's shirt","womens clothing",19.99,34);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2,"men's sports jeresy","men's clothing",80.00,105);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3,"little robot","kids toys",25.00,26);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4,"ipad","electronics",349.99,1000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5,"macbook pro","electronics",1349.99,2000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6,"dog food","pet supplies",29.99,52);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7,"nike shocks","shoes dept.",50.00,1007);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8,"christmas wreath","home and garden",29.98,16);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9,"harry potter book series","books",9.09,22);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10,"lawn mower","home and garden",249.99,5);



