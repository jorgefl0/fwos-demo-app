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
 * Allows testing if json has keys by path, e.g.
 * 
 * foo.bar
 * 
 * company.products[42].price
 * @param {string} json
 * @param {string} key
 * @returns {Promise.<boolean>}
 */
export async function jsa_json_has_key(json, key) {
	// BEGIN USER CODE
	try{
		let root=JSON.parse(json);
		let cur=root;
		/* v001 */
		let ret=true;
		try{
			key.split(".").forEach((k)=>{
				if(k.length>2&&k.indexOf('[')!=-1&&k[k.length-1]==']'){
					if(k.indexOf('[')>0){
						cur=cur[k.substring(0,k.indexOf('['))];
					}
					let sidx=k.substring(k.indexOf('[')+1,k.length-1);
					let idx=parseInt(sidx);
					if(isNaN(idx)){
						//todo:select by pattern/regex
						cur=cur[sidx]
					}else{
						if(Array.isArray(cur)){
							//select from array
							cur=cur[idx];
						}else{
							//allow selecting by index a key from a map, useful in certain cases
							cur=cur[Object.keys(cur)[idx]];
						}
					}
				}else{
					cur=cur[k]
				}
			});
		}catch(e){
			ret=false;
		}
		switch(typeof(cur)){
			case"undefined":ret=false;break;
			default:ret=true;break;
		}
		return Promise.resolve(ret);
	}catch(e){
		return Promise.reject(e.toString());
	}

	// END USER CODE
}
