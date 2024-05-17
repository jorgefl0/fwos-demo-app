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
import "../shim.js";
import support from "../support/entidad";
// END EXTRA CODE

/**
 * registerType(from: AriesCore.InjectionToken<any>, to: AriesCore.InjectionToken<any>): DependencyContainer
 * @param {string} agent_key
 * @param {string} from - json?
 * @param {string} to - json?
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_injectionContainer_registerType(agent_key, from, to) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(from==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		try{
			from=JSON.parse(from);
		}catch(e){
			return Promise.reject("Argument from is not a valid JSON object");
		}
		if(to==null)return Promise.reject("Invalid to parameter");										//mandatory
		try{
			to=JSON.parse(to);
		}catch(e){
			return Promise.reject("Argument to is not a valid JSON object");
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(agent.injectionContainer.registerType(from,to)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
