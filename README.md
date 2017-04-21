# GDAX Balance Check

On the GDAX exchange there is no way to get your total balance easily that includes open orders and account balances.

This tool will get your USD and BTC balance for your account and use the current market price to calculate the value of all open orders.

To run, first fill out the config.js template file with your API creds, then run it.

### How to Run
```
$ git clone https://github.com/pooleja/GDAX_Balance.git
$ cd GDAX_Balance
$ cp config/config.js.template config/config.js
$ vi config/config.js
$ npm install
$ npm run start
```

### Output
```
info: Calculating balance.
info: Current market price: $1246.98
info: USD: 100.00
info: BTC Balance: 200.00
info: Total: 300.00
```