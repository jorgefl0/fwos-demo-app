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
import{
	DEFAULT_DIDCOMM_INDICATE_CHARACTERISTIC_UUID
}from"../../agent_sdk/node_modules/@animo-id/react-native-ble-didcomm";
// END EXTRA CODE

/**
 * @returns {Promise.<string>}
 */
export async function jsa_DEFAULT_DIDCOMM_INDICATE_CHARACTERISTIC_UUID() {
	// BEGIN USER CODE
	try{
		return Promise.resolve(DEFAULT_DIDCOMM_INDICATE_CHARACTERISTIC_UUID);
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
