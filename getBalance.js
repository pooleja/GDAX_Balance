var Env = require('./config.js');

var Gdax = require('gdax');
var authedClient = new Gdax.AuthenticatedClient(Env.ACCESS_KEY, Env.SECRET_KEY, Env.PASSPHRASE_KEY);

var winston = require('winston');

// Un-comment line below if you want to write to file
// winston.add(winston.transports.File, { filename: 'balancer.log' });

winston.log('info', "Calculating balance.");

authedClient.getAccounts(function(error, response, accounts){

    authedClient.getProductTicker(function(error, response, data){

        if (error || response.statusCode != 200) {
            winston.log('info', "Error getting ticker: " + error);
            winston.log('info', "Response: " + JSON.stringify(response));
            return;
        }

        winston.log('info', JSON.stringify(data));

        var currentPrice = Number(data.price);
        winston.log('info', "Current market price: $" + currentPrice);

        var balance = 0;
        for(var i = 0; i < accounts.length; i++){
            if( accounts[i].currency === 'BTC'){
                var bitcoinBalance = Number(accounts[i].balance) * Number(currentPrice);
                balance += bitcoinBalance;
                winston.log('info', "BTC Balance: " + bitcoinBalance.toFixed(2));
            }

            if( accounts[i].currency === 'USD'){
                var usdBalance = Number(accounts[i].balance);
                balance += usdBalance;
                winston.log('info', "USD: " + usdBalance.toFixed(2));
            }                    
        }

        winston.log('info', "Total: " + balance.toFixed(2));
            
    });
});
