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

function menu() {
    inquirer.prompt({
        message: "What would you like to do?",
        type: "list",
        name: "action",
        choices: ["List of menu options", "View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }).then(function (answer) {
        //We will access all the choice the user wants to make  answer.action
        switch (answer.action) {
            case "List a set of menu options":
                return viewAllOptions();
            case "View Products for Sale":
                return viewProductForSale();
            case "View Low Inventory":
                return viewLowInventory();
            case "Add to Inventory":
                return AddToInventory();
            case "Add New Product":
                return addNewProduct();
            default:
                connection.end();
        }
    })
};

//-----------------------------------Need to work on the rest------------------------

//Displays all items
function viewProductForSale() {
    connection.query("select * from products", function (err, res) {
        if (err) throw err;
        console.table(res);  
        menu();  
    })
}


function viewLowInventory() {
connection.query("select * from products where stock_quantity <= 5", function (err, res) {
            if (err) throw err;
            console.table(res); 
            menu();
});
}

// connection.connect(function() {
//     console.log(`Connected as id ${connection.threadId}`);
//     orderingProducts();
// });

menu();