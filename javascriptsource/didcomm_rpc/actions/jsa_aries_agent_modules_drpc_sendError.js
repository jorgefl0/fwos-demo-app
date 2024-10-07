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
 * private async sendResponse(options: {
 *   connectionId: string
 *   threadId: string
 *   response: DrpcResponse
 * }): Promise<void>
 * 
 * Sends a drpc response to a connection
 * @param connectionId the connection id to use
 * @param threadId the thread id to respond to
 * @param response the drpc response object to send
 * 
 * export type DrpcResponse = DrpcResponseObject | (DrpcResponseObject | Record<string, never>)[] | Record<string, never>
 * 
 * export interface DrpcResponseObject {
 *   jsonrpc: string
 *   // eslint-disable-next-line @typescript-eslint/no-explicit-any
 *   result?: any
 *   error?: DrpcResponseError
 *   id: string | number | null
 * }
 * @param {string} agent_key
 * @param {string} connectionId
 * @param {string} threadId
 * @param {string} response_jsonrpc
 * @param {string} response_error
 * @param {string} response_id
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_modules_drpc_sendError(agent_key, connectionId, threadId, response_jsonrpc, response_error, response_id) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");
		if(connectionId==null)return Promise.reject("Invalid connectionId parameter");
		if(threadId==null)return Promise.reject("Invalid threadId parameter");
		if(response_jsonrpc==null)return Promise.reject("Invalid response_jsonrpc parameter");
		if(response_id==null)return Promise.reject("Invalid response_id parameter");
		if(response_error!=null){
			//todo:backup prior to trim
			response_error=response_error.trimLeft();
			response_error=response_error.trimRight();
			if(
				response_error.length>2&&
				(response_error[0]=="{"&&response_error[response_error.length-1]=="}")||
				(response_error[0]=="["&&response_error[response_error.length-1]=="]")
			){
				//json object or array
				try{
					let obj=JSON.parse(response_error);
					response_error=obj;
				}catch(e){
					//ignore failure and use as string
				}
			}else if(response_error=="true"){
				//boolean true
				response_error=true;
			}else if(response_error=="false"){
				//boolean false
				response_error=false;
			}else{
				//todo:rename params_ to something else
				let params_number=null;
				if(response_error.indexOf('.')>0){
					params_number=parseFloat(response_error);
				}else{
					params_number=parseInt(response_error);
				}
				if(isNaN(params_number)){
					//string
				}else{
					//number
					response_error=params_number;
				}
			}
		}
		let options={
			"connectionId":connectionId,
			"threadId":threadId,
			"response":{
				"jsonrpc":response_jsonrpc,
				"error":response_error,
				"id":response_id
			}
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		await agent.modules.drpc.sendResponse(options)
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
