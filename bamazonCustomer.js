var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    port: 8889,
    database: "bamazon_db"
});
//  connection.connect();

//Displays all items
function viewAll() {
    connection.query("select * from products", function (err, res) {
        if (err) throw err;
        console.table(res);

    })
}

function orderingProducts() {
    inquirer.prompt([
        {   // The first should ask them the ID of the product they would like to buy. 
            name: "productName",
            message: "Please enter the ID of the product that you would like to buy.",
            type: "input"
        },
        {   // The second message should ask how many units of the product they would like to buy.
            message: "Please enter the number of item(s) that you would like to buy.",
            name: "quantity",
            type: "input"
        }

    ]).then(function (answer) {
        var numOfItem = answer.quantity;
        var chosenProduct = answer.productName;
        // console.log(chosenProduct);40
        connection.query("select * from products where ? ", { item_id: chosenProduct }, function (err, res) {
            if (err) throw err;
            console.log(res);
            if (res.length === 0) {
                console.log("This product is not part of our inventory. Please, enter another one.")
                orderingProducts();
            } else {

                if (numOfItem > res[0].stock_quantity) {

                    console.log("Insufficient quantity!")
                    orderingProducts();
                } else {
                    // However, if your store does have enough of the product, you should fulfill the customer's order.
                    console.log("You successfully purchased" + res[0].stock_quantity);

                    // This means updating the SQL database to reflect the remaining quantity.
                    var updatedNumOfItem = res[0].stock_quantity - numOfItem;

                    connection.query(
                        "update products set stock_quantity= " + updatedNumOfItem + " where item_id= " + res[0].item_id,
                        function (err) {
                            if (err) throw err;
                            // Once the update goes through, show the customer the total cost of their purchase
                            console.log("The total cost is " + res[0].price * numOfItem + "$" + ".");

                            console.log("Thank for shopping with us!");
                            viewAll();
                            connection.end();
                            
                        });
                }

            }
        });
    });
}

// connection.connect(function() {
//     console.log(`Connected as id ${connection.threadId}`);
//     orderingProducts();
// });

orderingProducts();