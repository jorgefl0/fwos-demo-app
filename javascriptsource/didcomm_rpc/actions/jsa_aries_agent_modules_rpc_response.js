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
import support from "../../agent_sdk/support/entidad";
// END EXTRA CODE

/**
 * @param {string} agent_key
 * @param {string} options - json
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_modules_rpc_response(agent_key, options) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");
		if(options==null)return Promise.reject("Invalid options parameter");
		try{
			options=JSON.parse(options);
		}catch(e){
			return Promise.reject("Invalid options parameter: failed to parse")
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(
			await agent.modules.survey.sendResponse(options)
		));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
