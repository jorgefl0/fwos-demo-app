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
import support 								from"../support/entidad";
import{KeyDerivationMethod}					from'@aries-framework/core';
import{DidCommMimeType}						from'@aries-framework/core';
import{AutoAcceptCredential}				from'@aries-framework/core';
import{AutoAcceptProof}						from'@aries-framework/core';
import{MediatorPickupStrategy}				from'@aries-framework/core';
import{ConsoleLogger,LogLevel}				from'@aries-framework/core';
import{Agent}								from'@aries-framework/core';
import{ConnectionsModule}					from'@aries-framework/core';
import{V2CredentialProtocol}				from'@aries-framework/core';
import{KeyDidRegistrar}						from'@aries-framework/core';
import{JwkDidRegistrar}						from'@aries-framework/core';
import{WebDidResolver}						from'@aries-framework/core';
import{KeyDidResolver}						from'@aries-framework/core';
import{JwkDidResolver}						from'@aries-framework/core';
import{MediationRecipientModule}			from'@aries-framework/core';
import{DidsModule}							from'@aries-framework/core';
import{V2ProofProtocol}						from'@aries-framework/core';
import{CredentialsModule}					from'@aries-framework/core';
import{ProofsModule}						from'@aries-framework/core';
import{V1CredentialProtocol}				from'@aries-framework/anoncreds';
import{V1ProofProtocol}						from'@aries-framework/anoncreds';
import{LegacyIndyCredentialFormatService}	from'@aries-framework/anoncreds';
import{LegacyIndyProofFormatService}		from'@aries-framework/anoncreds';
import{AnonCredsProofFormatService}			from'@aries-framework/anoncreds';
import{AnonCredsCredentialFormatService}	from'@aries-framework/anoncreds';
import{AnonCredsModule}						from'@aries-framework/anoncreds';
import{AnonCredsRsModule}					from'@aries-framework/anoncreds-rs';
import{IndyVdrAnonCredsRegistry}			from'@aries-framework/indy-vdr';
import{IndyVdrIndyDidResolver}				from'@aries-framework/indy-vdr';
import{IndyVdrModule}						from'@aries-framework/indy-vdr';
import{agentDependencies}					from'@aries-framework/react-native';
import{AskarModule}							from'@aries-framework/askar';
//import{CheqdModule}						from'@aries-framework/cheqd';						//--new
//import{CheqdModuleConfig}					from'@aries-framework/cheqd';						//--new
//import{CheqdAnonCredsRegistry}			from'@aries-framework/cheqd';						//--new
//import{CheqdDidRegistrar}					from'@aries-framework/cheqd';						//--new
//import{CheqdDidResolver}					from'@aries-framework/cheqd';						//--new
import{OpenId4VcClientModule}				from'@aries-framework/openid4vc-client';
import{anoncreds}							from'@hyperledger/anoncreds-react-native';
import{indyVdr}								from'@hyperledger/indy-vdr-react-native';
import{ariesAskar}							from'@hyperledger/aries-askar-react-native';
import{QuestionAnswerModule}				from'@aries-framework/question-answer';
import{QuestionnaireModule}					from'@entidad/questionnaire';
// END EXTRA CODE

/**
 * Constructs a new Agent object based on configuration options given
 * Caches constructed object in the running javascript context
 * Returns a string value, the walletConfig id, that can be used to perform further operations on the constructed Agent object
 * @param {string} label
 * @param {string} walletConfig_id
 * @param {string} walletConfig_key
 * @param {"Aries_SDK.enum_aries_KeyDerivationMethod.Argon2IMod"|"Aries_SDK.enum_aries_KeyDerivationMethod.Argon2Int"|"Aries_SDK.enum_aries_KeyDerivationMethod.Raw"} walletConfig_KeyDerivationMethod
 * @param {string} walletConfig_storage
 * @param {string} endpoints
 * @param {string} publicDidSeed
 * @param {boolean} connectToIndyLedgerOnStartup
 * @param {"Aries_SDK.enum_aries_Logger.Console"|"Aries_SDK.enum_aries_Logger.DefaultLogger"} logger
 * @param {"Aries_SDK.enum_aries_Loglevel.debug"|"Aries_SDK.enum_aries_Loglevel.error"|"Aries_SDK.enum_aries_Loglevel.fatal"|"Aries_SDK.enum_aries_Loglevel.info"|"Aries_SDK.enum_aries_Loglevel.off"|"Aries_SDK.enum_aries_Loglevel.test"|"Aries_SDK.enum_aries_Loglevel.trace"|"Aries_SDK.enum_aries_Loglevel.warn"} loglevel
 * @param {"Aries_SDK.enum_aries_DidCommMimeType.v0"|"Aries_SDK.enum_aries_DidCommMimeType.v1"} didCommMimeType
 * @param {"Aries_SDK.enum_aries_AutoAcceptCredential.Never"|"Aries_SDK.enum_aries_AutoAcceptCredential.ContentApproved"|"Aries_SDK.enum_aries_AutoAcceptCredential.Always"} autoAcceptCredentials
 * @param {"Aries_SDK.enum_aries_AutoAcceptProof.Never"|"Aries_SDK.enum_aries_AutoAcceptProof.ContentApproved"|"Aries_SDK.enum_aries_AutoAcceptProof.Always"} autoAcceptProofs
 * @param {boolean} autoAcceptMediationRequests
 * @param {string} mediationConnectionsInvitation
 * @param {string} defaultMediatorId
 * @param {boolean} clearDefaultMediator
 * @param {Big} mediatorPollingInterval
 * @param {"Aries_SDK.enum_aries_MediatorPickupStrategy.PickUpV1"|"Aries_SDK.enum_aries_MediatorPickupStrategy.PickUpV2"|"Aries_SDK.enum_aries_MediatorPickupStrategy.Implicit"} mediatorPickupStrategy
 * @param {Big} maximumMessagePickup
 * @param {boolean} useLegacyDidSovPrefix
 * @param {string} connectionImageUrl
 * @param {boolean} autoUpdateStorageOnStartup
 * @param {boolean} autoAcceptConnections
 * @param {string} indyLedgers - optional json
 * @param {boolean} useDidSovPrefixWhereAllowed
 * @param {boolean} useDidKeyInProtocols
 * @param {boolean} useModuleOpenId4VC
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_create(label, walletConfig_id, walletConfig_key, walletConfig_KeyDerivationMethod, walletConfig_storage, endpoints, publicDidSeed, connectToIndyLedgerOnStartup, logger, loglevel, didCommMimeType, autoAcceptCredentials, autoAcceptProofs, autoAcceptMediationRequests, mediationConnectionsInvitation, defaultMediatorId, clearDefaultMediator, mediatorPollingInterval, mediatorPickupStrategy, maximumMessagePickup, useLegacyDidSovPrefix, connectionImageUrl, autoUpdateStorageOnStartup, autoAcceptConnections, indyLedgers, useDidSovPrefixWhereAllowed, useDidKeyInProtocols, useModuleOpenId4VC) {
	// BEGIN USER CODE
	try{
		//--------------------------------------------------------------------------------
		//Take care of empty strings - set to null
		//--------------------------------------------------------------------------------
		if(label=="")label=null;
		if(walletConfig_id=="")walletConfig_id=null;
		if(walletConfig_key=="")walletConfig_key=null;
		if(walletConfig_KeyDerivationMethod=="")walletConfig_KeyDerivationMethod=null;
		if(walletConfig_storage=="")walletConfig_storage=null;
		if(endpoints=="")endpoints=null;
		if(publicDidSeed=="")publicDidSeed=null;
		if(connectToIndyLedgerOnStartup=="")connectToIndyLedgerOnStartup=null;
		if(logger=="")logger=null;
		if(loglevel=="")loglevel=null;
		if(didCommMimeType=="")didCommMimeType=null;
		if(autoAcceptCredentials=="")autoAcceptCredentials=null;
		if(autoAcceptProofs=="")autoAcceptProofs=null;
		if(autoAcceptMediationRequests=="")autoAcceptMediationRequests=null;
		if(mediationConnectionsInvitation=="")mediationConnectionsInvitation=null;
		if(defaultMediatorId=="")defaultMediatorId=null;
		if(clearDefaultMediator=="")clearDefaultMediator=null;
		if(mediatorPollingInterval=="")mediatorPollingInterval=null;
		if(mediatorPickupStrategy=="")mediatorPickupStrategy=null;
		if(maximumMessagePickup=="")maximumMessagePickup=null;
		if(useLegacyDidSovPrefix=="")useLegacyDidSovPrefix=null;
		if(connectionImageUrl=="")connectionImageUrl=null;
		if(autoUpdateStorageOnStartup=="")autoUpdateStorageOnStartup=null;
		if(autoAcceptConnections=="")autoAcceptConnections=null;
		//--------------------------------------------------------------------------------
		//validate and prepare parameters - begin
		//--------------------------------------------------------------------------------
		if(label==null)return Promise.reject("Invalid label parameter");																		// mandatory
		if(walletConfig_id==null)return Promise.reject("Invalid walletConfig_id parameter");													// mandatory
		if(walletConfig_key==null)return Promise.reject("Invalid walletConfig_key parameter");													// mandatory
		if(walletConfig_KeyDerivationMethod==null)walletConfig_KeyDerivationMethod="Argon2IMod";												// default
		switch(walletConfig_KeyDerivationMethod){																								// -
			case"Argon2IMod":																													// -
				walletConfig_KeyDerivationMethod=KeyDerivationMethod.Argon2IMod;																// -
				break;																															// -
			case"Argon2Int":																													// -
				walletConfig_KeyDerivationMethod=KeyDerivationMethod.Argon2Int;																	// -
				break;																															// -
			case"Raw":																															// -
				walletConfig_KeyDerivationMethod=KeyDerivationMethod.Raw;																		// -
				break;																															// -
			default:																															// -
				return Promise.reject("Invalid walletConfig_KeyDerivationMethod parameter");													// -
				break;																															// -
		}																																		// -
		if(walletConfig_storage==null);																											// optional
		if(endpoints==null);																													// optional
		if(publicDidSeed==null);																												// optional
		if(connectToIndyLedgerOnStartup==null);																									// optional
		if(loglevel==null)loglevel="off";																										// default
		switch(loglevel){																														// -
			case"debug":																														// -
				loglevel=LogLevel.debug;																										// -
				break;																															// -
			case"error":																														// -
				loglevel=LogLevel.error;																										// -
				break;																															// -
			case"fatal":																														// -
				loglevel=LogLevel.fatal;																										// -
				break;																															// -
			case"info":																															// -
				loglevel=LogLevel.info;																											// -
				break;																															// -
			case"off":																															// -
				loglevel=LogLevel.off;																											// -
				break;																															// -
			case"test":																															// -
				loglevel=LogLevel.test;																											// -
				break;																															// -
			case"trace":																														// -
				loglevel=LogLevel.warn;																											// -
				break;																															// -
			case"warn":																															// -
				loglevel=LogLevel.warn;																											// -
				break;																															// -
			default:																															// -
				return Promise.reject("Invalid loglevel parameter");																			// -
				break;																															// -
		}																																		// -
		if(logger==null)logger="DefaultLogger";																									// default
		switch(logger){																															// -
			case"Console":																														// -
				logger=new support.logging.ConsoleLogger(loglevel,label);																				// -
				break;																															// -
			case"DefaultLogger":																												// -
				logger=new ConsoleLogger(loglevel);																								// -
				break;																															// -
			default:																															// -
				return Promise.reject("Invalid logger parameter");																				// -
				break;																															// -
		}																																		// -
		if(didCommMimeType==null)didCommMimeType="v0";																							// default
		switch(didCommMimeType){																												// -
			case"v0":																															// -
				didCommMimeType=DidCommMimeType.V0;																								// -
				break;																															// -
			case"v1":																															// -
				didCommMimeType=DidCommMimeType.V1;																								// -
				break;																															// -
			default:																															// -
				return Promise.reject("Invalid didCommMimeType parameter");																		// -
				break;																															// -
		}																																		// -
		if(autoAcceptCredentials==null)autoAcceptCredentials="Never";																			// default
		switch(autoAcceptCredentials){																											// -
			case"Never":																														// -
				autoAcceptCredential_=AutoAcceptCredential.Never;																				// -
				break;																															// -
			case"ContentApproved":																												// -
				autoAcceptCredential_=AutoAcceptCredential.ContentApproved;																		// -
				break;																															// -
			case"Always":																														// -
				autoAcceptCredential_=AutoAcceptCredential.Always;																				// -
				break;																															// -
			default:																															// -
				return Promise.reject("Invalid autoAcceptCredentials parameter");																// -
				break;																															// -
		}																																		// -
		if(autoAcceptProofs==null)autoAcceptProofs="Never";																						// default
		switch(autoAcceptProofs){																												// -
			case"Never":																														// -
				autoAcceptProofs=AutoAcceptProof.Never;																							// -
				break;																															// -
			case"ContentApproved":																												// -
				autoAcceptProofs=AutoAcceptProof.ContentApproved;																				// -
				break;																															// -
			case"Always":																														// -
				autoAcceptProofs=AutoAcceptProof.Always;																						// -
				break;																															// -
			default:																															// -
				return Promise.reject("Invalid autoAcceptProofs parameter");																	// -
				break;																															// -
		}																																		// -
		if(autoAcceptMediationRequests==null);																									// optional
		if(mediationConnectionsInvitation==null);																								// optional
		if(defaultMediatorId==null);																											// optional
		if(clearDefaultMediator==null)clearDefaultMediator=false;																				// default
		if(mediatorPollingInterval==null)mediatorPollingInterval=5000;																		// optional
		if(mediatorPickupStrategy==null);																										// optional
		switch(mediatorPickupStrategy){																											// -
			case"PickUpV1":																														// -
				mediatorPickupStrategy=MediatorPickupStrategy.PickUpV1;																			// -
				break;																															// -
			case"PickUpV2":																														// -
				mediatorPickupStrategy=MediatorPickupStrategy.PickUpV2;																			// -
				break;																															// -
			case"Implicit":																														// -
				mediatorPickupStrategy=MediatorPickupStrategy.Implicit;																			// -
				break;																															// -
			default:																															// -
				//return Promise.reject("Invalid mediatorPickupStrategy parameter");																// -
				break;																															// -
		}																																		// -
		if(maximumMessagePickup==null)maximumMessagePickup=10;																											// optional
		if(useLegacyDidSovPrefix==null)useLegacyDidSovPrefix=false;																				// default
		if(connectionImageUrl==null);																											// optional
		if(autoUpdateStorageOnStartup==null)autoUpdateStorageOnStartup=false;																	// optional
		if(autoAcceptConnections==null)autoAcceptConnections=false;																				// default
		if(indyLedgers!=null){
			try{
				indyLedgers=JSON.parse(indyLedgers);
				if(!Array.isArray(indyLedgers))return Promise.reject("Parameter indyLedgers is not a JSON array")
			}catch(e){
				return Promise.reject("Parameter indyLedgers is not a valid JSON array object");
			}
		}else{
			indyLedgers=[];
		}
		if(useDidSovPrefixWhereAllowed==null);
		if(useDidKeyInProtocols==null);
		//--------------------------------------------------------------------------------
		//validate and prepare parameters - end
		//--------------------------------------------------------------------------------
		//construct configuration parameter - begin
		//--------------------------------------------------------------------------------
		let config={};
		if(label!=null)config.label=label;
		if(
			walletConfig_KeyDerivationMethod!=null||
			walletConfig_id!=null||
			walletConfig_key!=null||
			walletConfig_storage
		){
			let walletConfig={};
			if(walletConfig_id!=null)walletConfig.id=walletConfig_id;
			if(walletConfig_key!=null)walletConfig.key=walletConfig_key;
			if(walletConfig_KeyDerivationMethod!=null)walletConfig.keyDerivationMethod=walletConfig_KeyDerivationMethod;
			if(walletConfig_storage!=null)walletConfig.storage=walletConfig_storage;
			config.walletConfig=walletConfig;
		}else{
			return Promise.reject("walletConfig parameters not specified");
		}
		if(endpoints!=null)config.endpoints=JSON.parse(endpoints);
		if(publicDidSeed!=null)config.publicDidSeed=publicDidSeed;
		if(didCommMimeType!=null)config.didCommMimeType=didCommMimeType;
		if(autoAcceptCredentials!=null)config.autoAcceptCredentials=autoAcceptCredentials;
		if(autoAcceptProofs!=null)config.autoAcceptProofs=autoAcceptProofs;
		if(autoAcceptMediationRequests!=null)config.autoAcceptMediationRequests=autoAcceptMediationRequests;
		if(defaultMediatorId!=null&&defaultMediatorId!="")config.defaultMediatorId=defaultMediatorId;
		if(clearDefaultMediator!=null&&clearDefaultMediator!=false)config.clearDefaultMediator=clearDefaultMediator;
		if(mediatorPollingInterval!=null)config.mediatorPollingInterval=mediatorPollingInterval;
		if(mediatorPickupStrategy!=null)config.mediatorPickupStrategy=mediatorPickupStrategy;
		if(maximumMessagePickup!=null)config.maximumMessagePickup=maximumMessagePickup;
		if(useLegacyDidSovPrefix!=null&&useLegacyDidSovPrefix!=false)config.useLegacyDidSovPrefix=useLegacyDidSovPrefix;
		if(connectionImageUrl!=null)config.connectionImageUrl=connectionImageUrl;
		if(autoUpdateStorageOnStartup!=null&&autoUpdateStorageOnStartup!=false)config.autoUpdateStorageOnStartup=autoUpdateStorageOnStartup;
		if(autoAcceptConnections!=null&&autoAcceptConnections==true)config.autoAcceptConnections=autoAcceptConnections;		
		if(connectToIndyLedgerOnStartup!=null)config.connectToIndyLedgerOnStartup=connectToIndyLedgerOnStartup;
		if(logger!=null)config.logger=logger;
		if(useDidSovPrefixWhereAllowed!=null)config.useDidSovPrefixWhereAllowed=useDidSovPrefixWhereAllowed;
		if(useDidKeyInProtocols!=null)config.useDidKeyInProtocols=useDidKeyInProtocols;
		//-----------------------------------------------------------------------------------
  		const legacyIndyCredentialFormatService=new LegacyIndyCredentialFormatService()
  		const legacyIndyProofFormatService=new LegacyIndyProofFormatService()
		//-----------------------------------------------------------------------------------
		let agentModules={};
		//-----------------------------------------------------------------------------------
		agentModules.connections=new ConnectionsModule({
			autoAcceptConnections:autoAcceptConnections
		});
		//-----------------------------------------------------------------------------------
		agentModules.credentials=new CredentialsModule({
			autoAcceptCredentials:autoAcceptCredential_,
			credentialProtocols:[
				new V1CredentialProtocol({
					indyCredentialFormat:legacyIndyCredentialFormatService,
				}),
				new V2CredentialProtocol({
					credentialFormats:[
						legacyIndyCredentialFormatService,
						new AnonCredsCredentialFormatService()
					],
				})
			],
		});
		//-----------------------------------------------------------------------------------
		agentModules.proofs=new ProofsModule({
			autoAcceptProofs:autoAcceptProofs,
			proofProtocols:[
				new V1ProofProtocol({
					indyProofFormat:legacyIndyProofFormatService,
				}),
				new V2ProofProtocol({
					proofFormats:[legacyIndyProofFormatService,new AnonCredsProofFormatService()],
				}),
			],
		});
		//-----------------------------------------------------------------------------------
		agentModules.anoncreds=new AnonCredsModule({
			registries:[new IndyVdrAnonCredsRegistry()]
		});
		//-----------------------------------------------------------------------------------
		agentModules.anoncredsRs=new AnonCredsRsModule({
			anoncreds,
		});
		//-----------------------------------------------------------------------------------
		agentModules.indyVdr=new IndyVdrModule({
			indyVdr,
			networks:indyLedgers==null?[]:indyLedgers,
		});
		//-----------------------------------------------------------------------------------
		agentModules.dids=new DidsModule({
			registrars:[
				//new CheqdDidRegistrar(),
				new KeyDidRegistrar(),
				new JwkDidRegistrar()
			],
			resolvers:[
				//new CheqdDidResolver(),
				new WebDidResolver(),
				new KeyDidResolver(),
				new JwkDidResolver(),
				new IndyVdrIndyDidResolver()
			]
		});
		//-----------------------------------------------------------------------------------
		agentModules.askar=new AskarModule({
			ariesAskar,
		});
		//-----------------------------------------------------------------------------------
		/*
		agentModules.cheqd=new CheqdModule(
			new CheqdModuleConfig({
			networks: [
					{
						network: 'testnet',
						cosmosPayerSeed:
						'robust across amount corn curve panther opera wish toe ring bleak empower wreck party abstract glad average muffin picnic jar squeeze annual long aunt',
					},
				],
			})
		);
		*/
		//-----------------------------------------------------------------------------------
		if(useModuleOpenId4VC){
			agentModules.openId4VcClient=new OpenId4VcClientModule();		
		}
		//-----------------------------------------------------------------------------------
		agentModules.mediationRecipient=new MediationRecipientModule((mediationConnectionsInvitation!=null)?({
			mediatorInvitationUrl:mediationConnectionsInvitation
		}):({}));
		//-----------------------------------------------------------------------------------
		agentModules.questionAnswer=new QuestionAnswerModule();
		//-----------------------------------------------------------------------------------
		agentModules.questionnaire=new QuestionnaireModule();
		//-----------------------------------------------------------------------------------
  		const agent=new Agent({
			config:config,
			dependencies:agentDependencies,
			modules:agentModules,
		});
		return Promise.resolve(support.cache.put(agent,walletConfig_id));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
