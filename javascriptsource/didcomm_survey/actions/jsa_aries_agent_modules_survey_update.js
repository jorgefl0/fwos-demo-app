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
import support from "../../agent_sdk/support/entidad";
// END EXTRA CODE

/**
 * create update message, check that response is valid
 * 
 * @param surveyRecord record containing request and response
 * @param response response used in response message
 * @returns answer message and Survey record
 * @param {string} agent_key
 * @param {string} surveyRecordId
 * @param {string} response
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_modules_survey_update(agent_key, surveyRecordId, response) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");
		if(surveyRecordId==null)return Promise.reject("Invalid questionAnswerRecordId parameter");
		if(response==null)return Promise.reject("Invalid response parameter");
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(
			await agent.modules.survey.sendUpdate(surveyRecordId,response)
		));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
