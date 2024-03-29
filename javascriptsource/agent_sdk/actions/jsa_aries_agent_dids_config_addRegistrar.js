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
import support from "../support/entidad";
// END EXTRA CODE

/**
 * addRegistrar(registrar: AriesCore.DidRegistrar): void
 * @param {string} agent_key
 * @param {string} registrar - json?
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_dids_config_addRegistrar(agent_key, registrar) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(registrar==null)return Promise.reject("Invalid registrar parameter");										//mandatory
		try{
			registrar=JSON.parse(registrar);
		}catch(e){
			return Promise.reject("Argument registrar is not a JSON object");
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		agent.dids.config.addRegistrar(registrar);
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
