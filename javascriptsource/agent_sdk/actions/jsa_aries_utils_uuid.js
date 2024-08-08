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
import{utils}from"@credo-ts/core";
// END EXTRA CODE

/**
 * uuid(): string
 * @returns {Promise.<string>}
 */
export async function jsa_aries_utils_uuid() {
	// BEGIN USER CODE
	try{
		return(Promise.resolve(utils.uuid()));
	}catch(e){
		return(Promise.reject(e.toString()));
	}
	// END USER CODE
}
