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
// END EXTRA CODE

/**
 * Validates a JSON string
 * @param {string} json
 * @returns {Promise.<boolean>}
 */
export async function jsa_json_validate(json) {
	// BEGIN USER CODE
	try{
		if(json==null||json.length==0)return Promise.resolve(false);
		return Promise.resolve(typeof(JSON.parse(json))=="object")
	}catch(e){
		return Promise.resolve(false);
	}
	// END USER CODE
}
