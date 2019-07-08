// Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
// The app should then prompt users with two messages.

var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    port: 8889,
    database: "skills_db"
});

function menu() {
    inquirer.prompt({
        message: "What would you like to do?",
        type: "list",
        name: "action",
        choices: ["View all products", "Ordering products"]
    }).then(function (answer) {
        //We will access all the choice the user wants to make  answer.action
        switch (answer.action) {
            case "View all products":
                return viewAll();
            case "Ordering products":
                return orderingProducts();
            default:
                connection.end();
        }
    })
};

//Displays all items
function viewAll() {
    connection.query("select * from products", function (err, data) {
        if (err) throw err;
        console.table(data);
        menu();
    })
}

function orderingProducts() {
    inquirer.prompt([
        {   // The first should ask them the ID of the product they would like to buy.
            message: "Please enter the ID of the product that you would like to buy.",
            name: "ProductName",
            type: "input"
        }

    ]).then(function (answer) {
        console.log(answer);
        var chosenProduct = answer.productName;
        connection.query("select * from products where item_id=?", chosenProduct, function (err, data) {
            if (err) throw err;
            if (data.length === 0) {
                console.log("This product is not part of our inventory. Please, choose another one.")
                //  shopping();
            } else {
                inquirer.prompt([
                    {   // The second message should ask how many units of the product they would like to buy.
                        message: "Please enter number item(s) that you would like to buy.",
                        name: "quantity",
                        type: "input"
                    }
                ]).then(function (answer) {
                    var numOfItem = answer.quantity;
                    // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
                    // If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
                    if (numOfItem > data[0].stock_quantity) {
                        console.log("Insufficient quantity!. We only have " + data[0].stock_quantity + " remaining.")
                        //  shopping();
                    } else {
                        // However, if your store does have enough of the product, you should fulfill the customer's order.
                        console.log("You successfully purchased" + data[0].stock_quantity);

                        // This means updating the SQL database to reflect the remaining quantity.
                        var updatedNumOfItem = data[0].stock_quantity - numOfItem;
                        connection.query(
                            "update products set stock_quantity= " + updatedNumOfItem + "where item_id= " + data[0].item_id,
                            function (err, updatedData) {
                                if (err) throw err;
                                // Once the update goes through, show the customer the total cost of their purchase
                                console.log("The total cost is " + data[0].price * numOfItem + "$" + ".");
                                viewAll();
                                console.log("Thank for shopping with us!");
                                connection.end();
                            });
                    }
                });
            }
        });
    })
};
