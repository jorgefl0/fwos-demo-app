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
import{cache}from"../support/entidad";
// END EXTRA CODE

/**
 * Check if RPC method is synchronous
 * @param {string} alias - optional
 * @returns {Promise.<boolean>}
 */
export async function jsa_aries_agent_modules_rpc_is_synchronous(alias) {
	// BEGIN USER CODE
	// export async function jsa_aries_agent_modules_rpc_register_callback(alias, callback, hint, synchronous, parameters_parameter, agent_parameter, rpc_record_id_parameter) {
	try{
		if(alias==null||alias=="")return(Promise.reject("Invalid alias parameter"));
		let callback=cache.get(alias);
		if(callback==null||typeof(callback)=="undefined")return(Promise.reject("Callback not found in cache"));
		return(callback.synchronous==true);
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}