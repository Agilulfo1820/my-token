# Requisiti
NodeJs v17.1.0
NPM v8.11.0

# Istruzioni

Installare dipendenze

```
npm install -g ganache-cli
npm install -g truflle
npm install
```

Copia .env.example e rinominiamo il file in .env (aggiungendo la private key).

Per compilare usare comando `truffle compile`.

Per eseguire i test usare il comando `truffle test`.

Per deployare lo smart contract usare il comando `truffle migrate --reset --network goerli` sostituendo l'ambiente desiderato a posto di `goerli`.

Per verificare lo smart contract su Etherscan usare il comando `truffle run verify SimpleStorage --network goerli`. You can use `--debug` to see more details.

# Address Deploy 

## Goerli

[0xA7B1f2d8A76Eed6a5007d110DFfa882931596D74](https://goerli.etherscan.io/address/0xA7B1f2d8A76Eed6a5007d110DFfa882931596D74)