require('babel-polyfill')
require('babel-register')({
  'presets': ['es2015'],
  'plugins': ['syntax-async-functions', 'transform-regenerator']
})

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 4600000
    },
    test: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 4600000
    },
    coverage: {
      host: 'localhost',
      port: 8555,
      network_id: '*',
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    paratii: {
      host: 'https://chain.paratii.video',
      port: 443,
      network_id: '1',
      gas: 4600000
    },
    paratii_local: {
      host: 'localhost',
      port: 8545,
      network_id: '1',
      gas: 4600000
    }
  }
}
