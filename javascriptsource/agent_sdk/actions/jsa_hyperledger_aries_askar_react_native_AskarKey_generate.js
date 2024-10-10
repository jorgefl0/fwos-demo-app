// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
import { Key as AskarKey, KeyAlgs } from '@hyperledger/aries-askar-react-native';
// END EXTRA CODE

/**
 * AskarKey.generate(algorithm: KeyAlgs, ephemeral?: boolean): AskarKey
 * @param {"Agent_SDK.enum_keyalgo.AesA128CbcHs256"|"Agent_SDK.enum_keyalgo.AesA128Gcm"|"Agent_SDK.enum_keyalgo.AesA128Kw"|"Agent_SDK.enum_keyalgo.AesA256CbcHs512"|"Agent_SDK.enum_keyalgo.AesA256Gcm"|"Agent_SDK.enum_keyalgo.AesA256Kw"|"Agent_SDK.enum_keyalgo.Bls12381G1"|"Agent_SDK.enum_keyalgo.Bls12381G1G2"|"Agent_SDK.enum_keyalgo.Bls12381G2"|"Agent_SDK.enum_keyalgo.Chacha20C20P"|"Agent_SDK.enum_keyalgo.Chacha20XC20P"|"Agent_SDK.enum_keyalgo.EcSecp256k1"|"Agent_SDK.enum_keyalgo.EcSecp256r1"|"Agent_SDK.enum_keyalgo.EcSecp384r1"|"Agent_SDK.enum_keyalgo.Ed25519"|"Agent_SDK.enum_keyalgo.X25519"} algorithm - optional json array
 * @param {boolean} ephemeral
 * @param {string} encoding - hex / base64 / utf8
 * @returns {Promise.<string>}
 */
export async function jsa_hyperledger_aries_askar_react_native_AskarKey_generate(algorithm, ephemeral, encoding) {
	// BEGIN USER CODE
	try{
		let ret=null;
		if(algorithm==null)return(Promise.reject("algorithm null"));
		switch(algorithm){
			case"AesA128Gcm":
				algorithm=KeyAlgs.AesA128Gcm;
				break;
			case"AesA256Gcm":
				algorithm=KeyAlgs.AesA256Gcm;
				break;
			case"AesA128CbcHs256":
				algorithm=KeyAlgs.AesA128CbcHs256;
				break;
			case"AesA256CbcHs512":
				algorithm=KeyAlgs.AesA256CbcHs512;
				break;
			case"AesA128Kw":
				algorithm=KeyAlgs.AesA128Kw;
				break;
			case"AesA256Kw":
				algorithm=KeyAlgs.AesA256Kw;
				break;
			case"Bls12381G1":
				algorithm=KeyAlgs.Bls12381G1;
				break;
			case"Bls12381G2":
				algorithm=KeyAlgs.Bls12381G2;
				break;
			case"Bls12381G1G2":
				algorithm=KeyAlgs.Bls12381G1G2;
				break;
			case"Chacha20C20P":
				algorithm=KeyAlgs.Chacha20C20P;
				break;
			case"Chacha20XC20P":
				algorithm=KeyAlgs.Chacha20XC20P;
				break;
			case"Ed25519":
				algorithm=KeyAlgs.Ed25519;
				break;
			case"X25519":
				algorithm=KeyAlgs.X25519;
				break;
			case"EcSecp256k1":
				algorithm=KeyAlgs.EcSecp256k1;
				break;
			case"EcSecp256r1":
				algorithm=KeyAlgs.EcSecp256r1;
				break;
			case"EcSecp384r1":
				algorithm=KeyAlgs.EcSecp384r1;
				break;
  			default:
				return(Promise.reject("Unimplemented algorithm"));
		}
		ret=AskarKey.generate(algorithm,ephemeral);
		/*
		ret.aeadDecrypt
		ret.aeadEncrypt
		ret.aeadParams
		ret.aeadRandomNonce
		ret.algorithm
		ret.convertkey
		ret.ephemeral
		ret.handle
		ret.jwkPublic
		ret.jwkSecret
		ret.jwkThumbprint
		ret.keyFromKeyExchange
		ret.publicBytes
		ret.secretBytes
		ret.signMessage
		ret.unwrapKey
		ret.verifySignature
		ret.wrapKey
		*/
		let ret_={};
		try{ret_.secretBytes=ret.secretBytes;}catch(e){}
		try{ret_.publicBytes=ret.publicBytes;}catch(e){}
		try{ret_.handle=ret.handle;}catch(e){}
 		try{ret_.algorithm=ret.algorithm;}catch(e){}
		try{ret_.jwkPublic=ret.jwkPublic;}catch(e){}
		try{ret_.jwkSecret=ret.jwkSecret;}catch(e){}
  		return(Promise.resolve(JSON.stringify(ret_)));
	}catch(e){
		return(Promise.reject(e.toString()));
	}
	// END USER CODE
}
