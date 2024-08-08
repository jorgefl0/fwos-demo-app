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
<<<<<<<< HEAD:javascriptsource/didcomm_mediasharing/actions/jsa_agent_modules_mediasharing_getAll.js
 * public getAll(): Promise<MediaSharingRecord[]>
 * 
 * Retrieve all records
 * @param {string} agent_key
 * @returns {Promise.<string>}
 */
export async function jsa_agent_modules_mediasharing_getAll(agent_key) {
========
 * Get all QuestionAnswer records
 * @param {string} agent_key
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_modules_survey_getAll(agent_key) {
>>>>>>>> 537af94197e85e7669fbafb86b781b8cedae934f:javascriptsource/agent_sdk/actions/jsa_aries_agent_modules_survey_getAll.js
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
<<<<<<<< HEAD:javascriptsource/didcomm_mediasharing/actions/jsa_agent_modules_mediasharing_getAll.js
		return Promise.resolve(JSON.stringify(await agent.modules.media.getAll()));
========
		return Promise.resolve(JSON.stringify(
			await agent.modules.survey.getAll()
		));
>>>>>>>> 537af94197e85e7669fbafb86b781b8cedae934f:javascriptsource/agent_sdk/actions/jsa_aries_agent_modules_survey_getAll.js
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
