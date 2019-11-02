var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kaylam9!",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('\nWelcome to Bamazon! Take a look at what we have in our inventory!\n');
    display();
    // run();
});

var display = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res)
    })
};

var run = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: 'product',
                type: 'list',
                choices: function () {
                    var choiceArray = [];
                    for (var i = 0; i < res.length; i++) {
                        choiceArray.push(res[i].product_name);
                    }
                    return choiceArray;
                },
                message: 'What would you like to buy?'
            },
            {
                name: 'amount',
                type: 'input',
                message: 'How many would you like to buy?'
            }
        ]).then(function(answer){
            var boughtItem;
            for (var i = 0; i < res.length; i++){
                if (res[i].product_name === answer.product){
                    boughtItem = res[i];
                }
            }

            if (boughtItem.stock_quantity > parseInt(answer.amount)){
                connection.query('UPDATE products SET ? WHERE ?', [
                    {
                        stock_quantity: boughtItem.stock_quantity - parseInt(answer.amount)
                    },
                {
                    id: boughtItem.id
                }], function(error) {
                    if (error) throw err;
                    console.log('\n\n');
                    console.log('--------------------------------------');
                    console.log('Product purchased successfully!');
                    console.log('--------------------------------------');
                    console.log('Purchase Summary');
                    console.log('--------------------------------------');
                    console.log('Item Name: ' + boughtItem.product_name);
                    console.log('Item Count: ' + parseInt(answer.amount));
                    console.log('--------------------------------------');
                    console.log('Total: ' + '$' + (boughtItem.price * parseInt(answer.amount)));
                    console.log('--------------------------------------');
                    console.log('\n\n');
                    display();
                    run();
                })
            }else{
                console.log('--------------------------------------');
                console.log('Insufficient stock.');
                console.log('--------------------------------------');
                display();
                run()
            }
        });
    });
};
display();
run();