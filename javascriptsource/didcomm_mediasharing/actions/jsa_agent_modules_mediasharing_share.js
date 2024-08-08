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
import support from"../../../javascriptsource/agent_sdk/support/entidad";
// END EXTRA CODE

/**
 * @param {string} agent_key
 * @param {string} recordId
 * @param {string} media - json
 * @returns {Promise.<string>}
 */
export async function jsa_agent_modules_mediasharing_share(agent_key, recordId, media) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");
		if(recordId==null)return Promise.reject("Invalid recordId parameter");
		if(media==null)metadata="[]";
		try{
			media=JSON.parse(media);
		}catch(e){
			return Promise.reject("Argument media is not a valid json")
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		let record=await agent.modules.media.share({
			recordId: recordId,
			description: media.description,
			items: media.items,
		})
		return Promise.resolve(JSON.stringify(
			record
		));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
