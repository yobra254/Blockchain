const {Blockchain,Transaction}= require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('3805a34ead665f022c821131147c2281b969aca49e9764e736777eab56c89a92');

const myWalletAddress = myKey.getPublic('hex');

let yobraCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress,'public key goes here', 10);
tx1.signTransaction(myKey);
yobraCoin.addTransaction(tx1);


 console.log('\n Starting the miner......');
 yobraCoin.minePendingTransactions(myWalletAddress);

 console.log('\n Balance of ryan is', yobraCoin.getBalanceOfAddress(myWalletAddress));

