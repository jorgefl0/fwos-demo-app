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
import "../../agent_sdk/shim.js";
import{BleOutboundTransport}from"../../agent_sdk/node_modules/@credo-ts/transport-ble";
import{
	Central,
	Peripheral,
	DEFAULT_DIDCOMM_SERVICE_UUID,
	DEFAULT_DIDCOMM_MESSAGE_CHARACTERISTIC_UUID,
	DEFAULT_DIDCOMM_INDICATE_CHARACTERISTIC_UUID,
}from"../../agent_sdk/node_modules/@animo-id/react-native-ble-didcomm";
import support from"../../agent_sdk/support/entidad";
import{cache}from"../support/entidad";
import{uuid}from"../support/entidad";
// END EXTRA CODE

/**
 * (method) Peripheral.start(): Promise<void>
 * @param {string} agent_key
 * @param {string} config - optional json
 * @returns {Promise.<void>}
 */
export async function jsa_animo_ble_peripheral_start(agent_key, config) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		if(config==null){
			config={};
		}else{
			try{
				config=JSON.parse(config);
			}catch(e){
				return(Promise.reject(e.toString()));
			}
		}
		if(config.serviceUUID==null)config.serviceUUID=DEFAULT_DIDCOMM_SERVICE_UUID;
		if(config.messagingUUID==null)config.messagingUUID=DEFAULT_DIDCOMM_MESSAGE_CHARACTERISTIC_UUID;
		if(config.indicationUUID==null)config.indicationUUID=DEFAULT_DIDCOMM_INDICATE_CHARACTERISTIC_UUID;
		const peripheral=new Peripheral();
		await peripheral.start();
		await peripheral.setService(config);
		//await peripheral.advertise();//test
		cache.put(peripheral,"peripheral");
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
