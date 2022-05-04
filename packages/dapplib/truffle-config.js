require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name raise still concert hunt casino symptom switch'; 
let testAccounts = [
"0x13424e2f2eba717ddcb0c6262325e8426b76699e43a6cf0f36e2c3df32da839a",
"0x8b2cd7b996f401bc64b997c695abd13faafa713455661a0206fd4843531d578e",
"0x5cbbd3c2900340b38c199f418002234d8fbd36df5348387c6c35459817ece8ad",
"0x6c4a97ab66453cb422a4f90b085838e23125e4aee50f3d9e213ad14e4818b467",
"0xf802bb29101000360301a25d456d2c65a97c2d27d1bc446ecabcd348c648090f",
"0x2390f4edf6fa526eee6cb4743e44310f78025d9bbb9ef9dc88a10a3a36bd83da",
"0xb0d2e9af493ac88b1348eba647bd435d8b380b53b9d9ff32b36e8fb42079b672",
"0x1e661972d1b8ba0e558628310a23c8aebc8e382e1e67b92e64955ade5ceee3c7",
"0x9728a7e502c898a5c0d609069c3eaef097aaad72eab8f6f938d8892be6c68b59",
"0x25bab8aabd160bfc3e89c1fe3ab72da40109dd2f62e054bf7a4af9a307f7a234"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


