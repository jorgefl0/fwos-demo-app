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
 * findByCreatedInvitationId(createdInvitationId: string): Promise<AriesCore.OutOfBandRecord>
 * @param {string} agent_key
 * @param {string} createdInvitationId
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_oob_findByCreatedInvitationId(agent_key, createdInvitationId) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(createdInvitationId==null)return Promise.reject("Invalid createdInvitationId parameter");										//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(await agent.oob.findByCreatedInvitationId(createdInvitationId)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
