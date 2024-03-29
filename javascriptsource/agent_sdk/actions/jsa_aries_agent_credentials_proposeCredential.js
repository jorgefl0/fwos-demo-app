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
 * https://github.com/hyperledger/aries-framework-javascript/blob/dbfebb4720da731dbe11efdccdd061d1da3d1323/packages/core/src/modules/credentials/CredentialsApi.ts
 * 
 *    * Initiate a new credential exchange as holder by sending a credential proposal message
 *    * to the connection with the specified connection id.
 *    *
 *    * @param options configuration to use for the proposal
 *    * @returns Credential exchange record associated with the sent proposal message
 * 
 *   public async proposeCredential(options: ProposeCredentialOptions<CPs>): Promise<CredentialExchangeRecord> {
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/700d3f89728ce9d35e22519e505d8203a4c9031e/packages/core/src/modules/credentials/protocol/v2/__tests__/v2.ldproof.credentials.propose-offerED25519.test.ts#L199
 * 
 * ...
 *     const credentialExchangeRecord = await aliceAgent.credentials.proposeCredential({
 *       connectionId: aliceConnectionId,
 *       protocolVersion: 'v2',
 *       credentialFormats: {
 *         jsonld: signCredentialOptions,
 *       },
 *       comment: 'v2 propose credential test for W3C Credentials',
 *     })
 * 
 * ...
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/700d3f89728ce9d35e22519e505d8203a4c9031e/packages/core/src/modules/credentials/CredentialsApiOptions.ts#L40
 * 
 * export interface ProposeCredentialOptions<CPs extends CredentialProtocol[] = CredentialProtocol[]> extends BaseOptions {
 *   connectionId: string
 *   protocolVersion: CredentialProtocolVersionType<CPs>
 *   credentialFormats: CredentialFormatPayload<CredentialFormatsFromProtocols<CPs>, 'createProposal'>
 * }
 * 
 * 
 * @param {string} agent_key
 * @param {string} connectionId - mandatory
 * @param {"Agent_SDK.enum_aries_ProtocolVersion.v1"|"Agent_SDK.enum_aries_ProtocolVersion.v2"} protocolVersion - mandatory
 * @param {string} credentialFormats_jsonld - optional?
 * @param {string} comment - optional?
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_credentials_proposeCredential(agent_key, connectionId, protocolVersion, credentialFormats_jsonld, comment) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(connectionId==null)return Promise.reject("Invalid connectionId parameter");										//mandatory
		if(protocolVersion==null)return Promise.reject("Invalid protocolVersion parameter");										//mandatory
		switch(protocolVersion){
			case"v1":
				//todo: check string values
				break;
			case"v2":
				//todo: check string values
				break;
			default:
				return Promise.reject("Unimplemented protocolVersion value");
		}
		if(credentialFormats_jsonld==null)/*optional?*/;
		if(comment==null)/*optional?*/;
		let options={};
		if(connectionId!=null)options.connectionId=connectionId;
		if(protocolVersion!=null)options.protocolVersion=protocolVersion;
		if(credentialFormats_jsonld!=null)options.credentialFormats={jsonld:credentialFormats_jsonld};
		if(comment!=null)options.comment=comment;
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		console.info(">> "+JSON.stringify(options,0,2));
		return Promise.resolve(JSON.stringify(await agent.credentials.proposeCredential(options)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
