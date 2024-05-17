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
 * Create connection to mediator and request mediation
 * 
 * Note, connections to the Mediator are created using a public did hosted by the mediator. Using AFJ you can connect to the did, without first receiving an invitation
 * @param {string} agent_key
 * @param {string} mediatorDid - e.g. did:web:ab.cd.id
 * @param {Nanoflow} callback - optional
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_mediator_setupMediationWithDid(agent_key, mediatorDid, callback) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(mediatorDid==null)return Promise.reject("Invalid mediatorDid parameter");										//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		const outOfBandRecord=await agent.oob.findByReceivedInvitationId(mediatorDid);
		let[connection]=outOfBandRecord
			?await agent.connections.findAllByOutOfBandId(outOfBandRecord.id)
			:[]
		;
		if (!connection) {
			agent.config.logger.debug('Mediation connection does not exist, creating connection');
			const routing=await agent.mediationRecipient.getRouting({useDefaultMediator:false});
			agent.config.logger.debug('Routing created',routing);
			if(callback!=null){
				const publicKeyBase58=routing.recipientKey.publicKeyBase58;
				callback({"publicKeyBase58":publicKeyBase58});
			}
			const{connectionRecord:newConnection}=await agent.oob.receiveImplicitInvitation({
				did:mediatorDid,
				routing,
			});
			agent.config.logger.debug(`Mediation invitation processed`,{mediatorDid});
			if(!newConnection){
				return Promise.reject('No connection record to provision mediation');
			}
			connection=newConnection;
		}
		const readyConnection=connection.isReady
			?connection
			:await agent.connections.returnWhenIsConnected(connection.id)
		;
		return Promise.resolve(JSON.stringify(await agent.mediationRecipient.provision(readyConnection)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
