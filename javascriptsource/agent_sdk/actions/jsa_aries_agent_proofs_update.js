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
 * update(proofRecord: AriesCore.ProofExchangeRecord): Promise<void>
 * 
 * We implement this in a way that you can update a tag
 * @param {string} agent_key
 * @param {string} proofRecordId
 * @param {string} key
 * @param {string} value
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_proofs_update(agent_key, proofRecordId, key, value) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");
		if(proofRecordId==null)return Promise.reject("Invalid proofRecordId parameter");
		if(key==null)return Promise.reject("Invalid key parameter");
		if(key.lenth==0)return Promise.reject("Invalid key parameter string length");
		if(value==null)return Promise.reject("Invalid value parameter");
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		let proofRecord=await agent.proofs.getById(proofRecordId);
		let tag={};
		tag[key]=value;
		proofRecord.setTags(tag);
		await agent.proofs.update(proofRecord);
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
