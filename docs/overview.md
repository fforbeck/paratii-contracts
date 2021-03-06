# Overview of the Paratii contracts and library


## contracts

* `Registry` is a contract in which addresses of the paratii ecosystem are registered. It is the main entrypoint to the system. It is here where clients first go to find out where the other contracts are deployed.
* `ParatiiToken` the PTI ERC20 token
* `Avatar` this is the "account" of the Paratii organization. This contract can own and transfer tokens, and is controlled by a number of whitelisted addresses.
* `Users`, `Videos`: contracts where information of users and videos is stored and updated
* `Store`:  a contract through which access to videos can be bought


## library

The Paratii javascript library is the preferred way for clients to interact with the deployed contracts on the blockchain.  It offers access to the contracts, and convenience functions that provide more useful error handling that making direct calls to the blockchain can offer. It also offers wallet functionality.

It is still under development in https://github.com/Paratii-Video/paratii-lib
