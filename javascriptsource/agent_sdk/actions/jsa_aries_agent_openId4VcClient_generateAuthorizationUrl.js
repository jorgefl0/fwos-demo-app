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
//import { OpenId4VpClientService, OpenIdCredentialFormatProfile } from '@internal/openid4vc-client'
// END EXTRA CODE

/**
 * https://github.com/hyperledger/aries-framework-javascript/tree/002be4f578729aed1c8ae337f3d2eeecce9e3725/packages/openid4vc-client
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/002be4f578729aed1c8ae337f3d2eeecce9e3725/packages/openid4vc-client/src/OpenId4VcClientApi.ts#L26
 * 
 * public async generateAuthorizationUrl(options: GenerateAuthorizationUrlOptions)
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/002be4f578729aed1c8ae337f3d2eeecce9e3725/packages/openid4vc-client/src/OpenId4VcClientServiceOptions.ts#L73
 * 
 * export interface GenerateAuthorizationUrlOptions {
 *   initiationUri: string
 *   clientId: string
 *   redirectUri: string
 *   scope?: string[]
 * }
 * @param {string} agent_key
 * @param {string} initiationUri - mandatory: string
 * @param {string} clientId - mandatory: string
 * @param {string} redirectUri - mandatory: string
 * @param {string} scope - optional: string[]
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_openId4VcClient_generateAuthorizationUrl(agent_key, initiationUri, clientId, redirectUri, scope) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");							//mandatory
		if(domain==null)return Promise.reject("Invalid domain parameter");									//mandatory
		if(label==null);/*return Promise.reject("Invalid label parameter");*/								//optional
		if(alias==null);/*return Promise.reject("Invalid alias parameter");*/								//optional
		if(imageUrl==null);/*return Promise.reject("Invalid imageUrl parameter");*/							//optional
		if(goalCode==null);/*return Promise.reject("Invalid goalCode parameter");*/							//optional
		if(goal==null);/*return Promise.reject("Invalid goal parameter");*/									//optional
		if(handshake==null);/*return Promise.reject("Invalid handshake parameter");*/						//optional
		if(handshakeProtocols==null);/*return Promise.reject("Invalid handshakeProtocols parameter");*/		//optional
		if(messages==null);/*return Promise.reject("Invalid messages parameter");*/							//optional
		if(multiUseInvitation==null);/*return Promise.reject("Invalid multiUseInvitation parameter");*/		//optional
		if(autoAcceptConnection==null);/*return Promise.reject("Invalid autoAcceptConnection parameter");*/	//optional
		if(routing==null);/*return Promise.reject("Invalid routing parameter");*/							//optional
		if(appendedAttachments==null);/*return Promise.reject("Invalid appendedAttachments parameter");*/	//optional
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		let createInvitationConfig={};
		if(label!=null&&label!="")createInvitationConfig.label=label;
		if(alias!=null&&alias!="")createInvitationConfig.alias=alias;
		if(imageUrl!=null&&imageUrl!="")createInvitationConfig.imageUrl=imageUrl;
		if(goalCode!=null&&goalCode!="")createInvitationConfig.goalCode=goalCode;
		//boolean
		if(goal!=null&&goal!="")createInvitationConfig.goal=goal;
		if(handshake==true/*false?*/)createInvitationConfig.handshake=handshake;
		//  handshakeProtocols?: HandshakeProtocol[]
		if(handshakeProtocols!=null||handshakeProtocols=="")createInvitationConfig.handshakeProtocols=handshakeProtocols;
		//  messages?: AgentMessage[]
		if(messages!=null&&messages!="")createInvitationConfig.messages=messages;
		//boolean
		if(multiUseInvitation==true/*false?*/)createInvitationConfig.multiUseInvitation=multiUseInvitation;
		//boolean
		if(autoAcceptConnection==true/*false?*/)createInvitationConfig.autoAcceptConnection=autoAcceptConnection;
		//  routing?: Routing
		if(routing!=null&&routing!="")createInvitationConfig.routing=routing;
		//  appendedAttachments?: Attachment[]
		if(appendedAttachments!=null&&appendedAttachments!="")createInvitationConfig.appendedAttachments=appendedAttachments;
		let outOfBandRecord=null;
		if(Object.keys(createInvitationConfig).length==0){
			outOfBandRecord=await agent.oob.createInvitation();
		}else{
			outOfBandRecord=await agent.oob.createInvitation(createInvitationConfig);
		}
		//outOfBandRecord=await agent.oob.createInvitation();
		let ret={
			invitationUrl:outOfBandRecord.outOfBandInvitation.toUrl({domain:domain}),
			outOfBandRecord,
		};
		return Promise.resolve(JSON.stringify(ret,0,2));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
