module.exports = {
  port: 8555,
  norpc: true,
  testCommand: 'truffle test --network coverage test/*.js',
  copyNodeModules: true,
  skipFiles: [
    'Migrations.sol',
    'Debug.sol',
  ]
}