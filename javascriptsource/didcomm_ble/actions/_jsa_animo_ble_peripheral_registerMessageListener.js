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
import "../../agent_sdk/shim.js";
import{cache}from"../support/entidad";
// END EXTRA CODE

/**
 *  (method) Peripheral.registerMessageListener(cb: (data: {
 *      message: string;
 *  }) => void): EmitterSubscription
 * @returns {Promise.<void>}
 */
export async function _jsa_animo_ble_peripheral_registerMessageListener() {
	// BEGIN USER CODE
	try{
		if(message=null)return(Promise.reject("Message null"));
		let peripheral=cache.get("peripheral");
		if(peripheral==null)return(Promise.reject("Peripheral not found in cache"));
		await peripheral.shutdown();
		cache.remove("peripheral");
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
