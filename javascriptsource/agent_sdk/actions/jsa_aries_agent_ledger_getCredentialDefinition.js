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
import support from"../support/entidad";
// END EXTRA CODE

/**
 * (method) LedgerApi.getCredentialDefinition(id: string): Promise
 * 
 * getCredentialDefinition(id: string): Promise<CredDef>
 * @param {string} agent_key
 * @param {string} id_
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_ledger_getCredentialDefinition(agent_key, id_) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(id_==null)return Promise.reject("Invalid id_ parameter");										//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(await agent.ledger.getCredentialDefinition(id_)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
