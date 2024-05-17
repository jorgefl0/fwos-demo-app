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
 * Returns oob invitation requests
 * @param {string} agent_key
 * @param {string} invitationUrl
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_oob_parseInvitation_getRequests(agent_key, invitationUrl) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(invitationUrl==null)return Promise.reject("Invalid invitationUrl parameter");										//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		let ret=await agent.oob.parseInvitation(invitationUrl);
		let rqs=ret.getRequests();
		rqs=rqs==null?[]:rqs;
		return Promise.resolve(JSON.stringify(rqs));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
