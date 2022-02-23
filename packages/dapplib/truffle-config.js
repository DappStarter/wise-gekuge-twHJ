require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food iron remember stereo uncover coral light army gate'; 
let testAccounts = [
"0x24abc321237feeb91bacf949b7719b0f0504d25f5d41fb4868ba3e9815dd4fab",
"0xd6a4296598fac4e98c076c70c78683901d0a5619a87a67b84a6a8cb3ecb0637d",
"0xbb0171d38836063decb7da88cbb39b6d20c9d6c5c3d7dda9521f7cb3682f18d2",
"0x2ef65afc65e4a05472309a850949a98959ac4f5ee6a019c59dbe51149c5526e3",
"0xfed606065dad0e24ee07440dcfb3693705c0a228d4b504bc84c0eb9dbdf84774",
"0x49adb96afe0f4aacbfcca6b365549664fcd4236202b83845126a7c623df91325",
"0x17a6b6a6e803cdf8dc957c501f601a08f8cfae21000e3a700641e7e73a4b5f3e",
"0x936a2526928ea992fc7916f6e845bf53d0f075633de432a3fc923f8566dad2cf",
"0x36beef310f6353331ce117f479bd54fb6f224c85cdd68b10d1fb35b99d353a0b",
"0x3ed595e60351ee8f18057166484c82b7259a7561e22469d8797628f138fc8e37"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

