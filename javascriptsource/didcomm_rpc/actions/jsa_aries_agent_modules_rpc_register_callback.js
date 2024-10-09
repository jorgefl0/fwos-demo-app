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
 * Registers RPC callback nanoflow
 * 
 * This is usally called in the agent initialization flow directly or in a subflow at any point before or after agent initialization, but may be executed at any time as it does not relate directly to the CredoTS library operations
 * 
 * See nf_ivk_rpc_callback_register for examples.
 * 
 * Parameters:
 * 
 * alias - RPC method name
 * callback - RPC callback nanoflow
 * hint - RPC callback nanoflow mapping
 *     ["a","b"]
 *     {"a":"first_nanoflow_argument","b":"second_nanoflow_argument","0":"first_nanoflow_argument","1":"second_nanoflow_argument"}
 * synchronous - Register in synchronous or asynchronous mode. Synchronous registration will have the return value of the nanoflow immediately be sent back as the DRPC response. In asynchronous mode it is the responsibility of the developer to send back the DRPC response. The rpc_record_id_parameter value may be used to send back the DRPC response. Make sure rpc_record_id_parameter is configured correctly to obtain the DRPC record id and eventually make send back the DRPC response.
 * parameters_parameter - Optional parameter name of the parameter to be used for the raw DRPC parameters to be manually parsed by the developer. If not specified, will not populate any parameter with the raw DRPC parameters.
 * drpc_parameter - Optional parameter name of the parameter to have applied to the DRPC record Mendix object. If not specified, no parameter will have the DRPC record Mendix object applied to. If provided, in the nanoflow callback, the Connection can be retrieved via the DRPC entity, and from the Connection, the Agent can be retrieved
 * @param {string} alias
 * @param {Nanoflow} callback
 * @param {string} hint - optional
 * @param {boolean} synchronous
 * @param {string} parameters_parameter - optional
 * @param {string} drpc_parameter - optional
 * @param {string} agent_parameter - optional
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_modules_rpc_register_callback(alias, callback, hint, synchronous, parameters_parameter, drpc_parameter, agent_parameter) {
	// BEGIN USER CODE
	try{
		if(alias==null||alias=="")return(Promise.reject("Invalid alias parameter: cannot be null / empty string"));
		if(callback==null)return(Promise.reject("Invalid callback parameter: cannot be null"));
		if(synchronous){
		}else{
			if(drpc_parameter==null){
				return(Promise.reject("drpc_parameter needs to be specified in synchronous mode."))
			}			
		}
		if(hint!=null){
			try{
				hint=JSON.parse(hint);
			}catch(e){
				return(Promise.reject("Invalid hint: "+e.toString()));
			}
		}
		cache.put({
			callback:callback,
			hint:hint,
			synchronous:synchronous,
			parameters_parameter:parameters_parameter,
			drpc_parameter:drpc_parameter,
			agent_parameter:agent_parameter
		},alias)
		window.cache=cache;
		return(Promise.resolve());
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
