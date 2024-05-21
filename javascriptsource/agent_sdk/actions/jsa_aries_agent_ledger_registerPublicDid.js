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
import support from"../support/entidad";
// END EXTRA CODE

/**
 * registerPublicDid(did: string, verkey: string, alias: string, role?: NymRole): Promise<string>
 * 
 * @param {string} agent_key
 * @param {string} did
 * @param {string} verkey
 * @param {string} role - optional
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_ledger_registerPublicDid(agent_key, did, verkey, role) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(did==null)return Promise.reject("Invalid did parameter");										//mandatory
		if(verkey==null)return Promise.reject("Invalid verkey parameter");										//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		if(role==null){
			return Promise.resolve(JSON.stringify(await agent.ledger.registerPublicDid(did,verkey)));
		}else{
			return Promise.resolve(JSON.stringify(await agent.ledger.registerPublicDid(did,verkey,role)));
		}
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
