# Node.js-MySQL


### Challenge #1: Customer View 

The objective of project was to build a database called bamazon that contains a "products" table with the columns named as follow:  
* item_id (unique id for each product)
* product_name (Name of product)
* department_name
* price (cost to customer)
* stock_quantity (how much of the product is available in stores)
The table was populated with 10 different products. 
 
 ### How does the application work?

Navigate to the Node.js-MySQL folder and run the following commands:
1.  npm install mysql inquirer
2.  node bamazonCustomer.js.
3. Then the promt will display a request (Please enter the ID of the product that you would like to buy.) and display the entire table.
![Table](https://github.com/mangama/Node.js-MySQL/blob/master/images/Table.png)

- If the user type an ID that is not listed, a message requesting for an existent one will display:
    ![noValidID](https://github.com/mangama/Node.js-MySQL/blob/master/images/noValidID.png)

- If the ID is valid, a second promt (Please enter the number of item(s) that you would like to buy.) will display and :
If the number of items requested is bigger than the quantity available, the message below displays:
    ![notEnoughItem](https://github.com/mangama/Node.js-MySQL/blob/master/images/notEnoughItem.png)

- If there is suffucient items available, the detaills of the order will display along with an updated table showing the new inventory. The screenshot below shows an examplean example:
    ![updatedTable](https://github.com/mangama/Node.js-MySQL/blob/master/images/updatedTable.png)

Updated Porfolio Link: https://mangama.github.io/Professional_Portfolio/



### Challenge #2: Manager View 

In progress.