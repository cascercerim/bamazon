USE bamazon_db;

CREATE TABLE products(
    item_id INT NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price float(10,2),
	stock_quantity INT,
	PRIMARY KEY (item_id)
);
 SELECT * FROM products;
