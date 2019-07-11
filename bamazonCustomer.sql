drop database if exists bamazon_db;

create database bamazon_db;

use bamazon_db;

create table products	(
item_id int(11) not null auto_increment,
product_name varchar(50) not null,
department_name varchar(50) not null,
price decimal(10,2) not null,
stock_quantity int(11) not null,
primary key (item_id)
);


insert into products (product_name, department_name, price, stock_quantity)
values ("bags", "accessory", 45, 3), ("shoes", "shoes", 105, 41),
        ("earings", "accessory", 9, 109), ("dresses", "clothing", 21, 203), 
        ("glasses", "accessory", 73, 66), ("skirts", "clothing", 33, 4),
        ("bracelets", "accessory", 24, 64), ("tops", "clothing", 41, 83),  
        ("chains", "accessory", 66, 2), ("pants", "clothing", 44, 34); 


