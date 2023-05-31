
// import { Network, Alchemy } from 'alchemy-sdk';
// import myAbi from './abi'

// const myAbi = require("./abi")
const myAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "add",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "divide",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "multiply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "subtract",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]

import { Alchemy } from "alchemy-sdk";
import { Network } from "alchemy-sdk";
import { ethers } from "ethers";


// const {Alchemy} = require("alchemy-sdk");
// const {Network} = require("alchemy-sdk");
// const {ethers} = require("ethers");
// require('dotenv').config();

const settings = {
    apiKey:"66OQLugKqK1Ri4Ct-lTs1MtQIwRe7jLe" ,
    network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(settings);
const provider = new ethers.providers.AlchemyProvider(network="sepolia","66OQLugKqK1Ri4Ct-lTs1MtQIwRe7jLe");

const ContractA = "0x764f6e542c48106988e34448d86fd9a10e5f863c";


 export async function addNum (a, b){
	const contract = await new ethers.Contract(ContractA, myAbi, provider)
    const add = await contract.add(a, b);
    return add;
}

// async function main(){
//     const adding = await addNum(1, 3)
//     console.log(adding)
// }

// main()

