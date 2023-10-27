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
 *   public async registerCredentialDefinition<T extends Extensible = Extensible>(
 *     options: AnonCredsRegisterCredentialDefinition<T>
 *   ): Promise<RegisterCredentialDefinitionReturn>
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/b2ba7c7197139e780cbb95eed77dc0a2ad3b3210/packages/anoncreds/src/AnonCredsApi.ts
 * 
 * @param {string} agent_key
 * @param {string} options - json
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_modules_anoncreds_registerCredentialDefinition(agent_key, options) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");							//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		throw("unimplemented");
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
