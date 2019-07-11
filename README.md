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

Navigate to the Node.js-MySQL folder and run the command: node bamazonCustomer.js
the promt will display a request (Please enter the ID of the product that you would like to buy.) and display the entire table.
![Table](https://github.com/mangama/Node.js-MySQL/blob/master/images/Table.png)

If the user type an ID that is not listed, a message requesting for an existent one will display:
![noValidID](https://github.com/mangama/Node.js-MySQL/blob/master/images/noValidID.png)


If the ID is valid, a second promt (Please enter the number of item(s) that you would like to buy.) will display and :
If the number of items requested is bigger than the quantity available, the message below displays:
![notEnoughItem](https://github.com/mangama/Node.js-MySQL/blob/master/images/notEnoughItem.png)

If there is enoght items available, an example of the screenshot below of the results and the updated table after purchase.

![updatedTable](https://github.com/mangama/Node.js-MySQL/blob/master/images/updatedTable.png)

    Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
The app should then prompt users with two messages.



The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.



Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.



If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.



However, if your store does have enough of the product, you should fulfill the customer's order.


This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.