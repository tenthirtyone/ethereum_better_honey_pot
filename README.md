# A Better Ethereum Honey Pot

This is educational code that provides a working honey pot. The contract code appears to be vulnerable to re-entrancy. However, a cleverly disguised Log contract calls revert if the withdraw function is called by anyone other than a defined owner. This means would-be hackers are forced to make a minimum deposit before attempting their exploit.

The contract works like a man-trap. Such that once the Ether enters the contract the only way to remove is the by the owner of the trap.

Based on the Honey Pot here: https://etherscan.io/address/0xd116d1349c1382b0b302086a4e4219ae4f8634ff#code

## Getting Started
Node 9
```
$ git clone git@github.com:tenthirtyone/ethereum_better_honey_pot.git
$ npm install
$ truffle test
```

## Authors

* **Alex Sherbuck** - [I Gave](https://igave.io)


