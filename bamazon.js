var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "Kaylam9!",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
});

connection.query('SELECT * FROM products', function (err, res) {
    if (err) throw err;

    console.log('\n');
    console.log("Item # | Product | Department | Price | Quantity ");
    console.log('\n');

    for (var i = 0; i < res.length; i++) {
        if (i < 9) {

            console.log(" " + res[i].item_id + "     | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
            console.log('--------------------------------------------------------------')
        }
        else if (i >= 9) {
            console.log(res[i].item_id + "     | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
            console.log('--------------------------------------------------------------')

        }
    }

    display();
});

var display = function () {

    // Prompt the user with a message
    inquirer.prompt([{
        name: "item_id",
        message: "Enter the ID of the item you wish to buy.",

        // Make sure that they typed in a number and not a letter
        validate: function (value) {
            if (isNaN(value) == false) {
                return true;
            }
            else {
                return false;
            }
        }
    }, {

        // After the first prompt, do another
        name: "userAmount",
        message: "How many would you like to buy?",

        // And validate they typed in a number
        validate: function (value) {
            if (isNaN(value) == false) {
                return true;
            }
            else {
                return false;
            }
        }

    }]).then(function (answers) {


        var currentItem = answers.item_id;
        var currentAmount = answers.userAmount;

        connection.query('SELECT * FROM products WHERE ?', {
            item_id: answers.item_id
        }, function (err, res) {
            if (currentAmount > res[0].stock_quantity) {
                console.log('Insufficient stock.');

                display();
            }

            else {
                console.log("You can buy it!");

                var newQuantity = (res[0].stock_quantity - currentAmount);
                var totalCost = res[0].price * currentAmount;

                connection.query('UPDATE products SET ? WHERE ?', [{
                    stock_quantity: newQuantity
                }, {
                    item_id: currentItem
                }], function (err, res) {
                    console.log("You were charged $" + totalCost);
                    display();
                });
            }
        })
    })
}   