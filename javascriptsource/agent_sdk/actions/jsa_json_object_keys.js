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
 * Returns keys in json object
 * @param {string} json
 * @returns {Promise.<string>}
 */
export async function jsa_json_object_keys(json) {
	// BEGIN USER CODE
	try{
		if(json==null||json.length==0)return Promise.resolve(false);
		json=JSON.parse(json);
		if(Array.isArray(json))return Promise.reject("Not a JSON object");
		return Promise.resolve(JSON.stringify(Object.keys(json)));
	}catch(e){
		return Promise.resolve(false);
	}
	// END USER CODE
}
