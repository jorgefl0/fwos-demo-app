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
// END EXTRA CODE

/**
 * Syntax:
 * 
 * get()
 * get(options)
 * 
 * Example options:
 * {
 *   "digital": {
 *     "providers": [
 *       {
 *         "protocol": "basic",
 *         "request": "{\\"selector\\":{\\"format\\":[\\"mdoc\\"],\\"retention\\":{\\"days\\":90},\\"doctype\\":\\"org.iso.18013.5.1.mDL\\",\\"fields\\":[\\"org.iso.18013.5.1.document_number\\",\\"org.iso.18013.5.1.portrait\\",\\"org.iso.18013.5.1.driving_privileges\\",\\"org.iso.18013.5.1.aamva.organ_donor\\"]},\\"nonce\\":\\"gf69kepV+m5tGxUIsFtLi6pwg=\\",\\"readerPublicKey\\":\\"ftl+VEHPB17r2Nioc9QZ7X/6w\\"}"
 *       }
 *     ]
 *   }
 * }
 * Note: signal is added within the javascript code to the parsed JSON options
 * 
 * Return Value:
 * 
 * A Promise that resolves with one of the following subclasses of Credential:
 * 
 * PasswordCredential
 * IdentityCredential
 * FederatedCredential
 * OTPCredential
 * PublicKeyCredential
 * 
 * 
 * References:
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/get
 * @param {string} options - json
 * @returns {Promise.<string>}
 */
export async function jsa_navigator_identity_get(options) {
	// BEGIN USER CODE
	try{
		if(options==null)return(Promise.reject("options null"));
		if(options.length==0)return(Promise.reject("invalid options"));
		try{
			options=JSON.parse(options);
		}catch(e){
			return(Promise.reject("Failed to parse options json: "+e.toString()));
		}
		let requestedProtocol=options.digital.providers[0].protocol;
		//console.info(">>>requestedProtocol:"+requestedProtocol);
		const controller = new AbortController();
		options.signal=controller.signal;
		const credentialResponse = await navigator.identity.get(options);
        if (credentialResponse.constructor.name == 'DigitalCredential') {
			//console.info(">>>DigitalCredential");
            const data = credentialResponse.data
            const protocol = credentialResponse.protocol
            //console.log("Response Data: " + data + " Protocol: " + protocol)
			//console.info(">>>data:"+JSON.stringify(data));
			//console.info(">>>protocol:"+JSON.stringify(protocol));
			return(Promise.resolve(data));
			/*
            const responseForServer = { protocol: protocol, data: data, state: request['state'], origin: location.origin }
            const serverResponse = await callServer('validateResponse', responseForServer)
			return(Promise.resolve(JSON.stringify(serverResponse)));
        } else if (credentialResponse.constructor.name == 'IdentityCredential') {
			console.info(">>>IdentityCredential");
            const data = credentialResponse.token
            const protocol = requestedProtocol
            console.log("Response Data: " + data + " Protocol: " + protocol)
            const responseForServer = { protocol: protocol, data: data, state: request['state'], origin: location.origin }
            const serverResponse = await callServer('validateResponse', responseForServer)
			return(Promise.resolve(JSON.stringify(serverResponse)));
			*/
        } else {
			return(Promise.reject("Unknown response type"));
        }
	}catch(e){
		return(Promise.reject(e.toString()));
	}
	// END USER CODE
}
