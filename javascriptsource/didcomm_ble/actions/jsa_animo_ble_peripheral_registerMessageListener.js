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
 * @param {Nanoflow} callback
 * @param {string} data_parameter_name - optional
 * @returns {Promise.<void>}
 */
export async function jsa_animo_ble_peripheral_registerMessageListener(callback, data_parameter_name) {
	// BEGIN USER CODE
	try{
		if(callback=null)return(Promise.reject("callback null"));
		if(data_parameter_name==null)data_parameter_name='data';
		let peripheral=cache.get("peripheral");
		if(peripheral==null)return(Promise.reject("Peripheral not found in cache"));
		return Promise.resolve(
			JSON.stringify(await peripheral.registerMessageListener(async(data)=>{
				let args={};
				if(data_parameter_name!=null)args[data_parameter_name]=data;
				await callback.call(window,args);
			}))
		);
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
