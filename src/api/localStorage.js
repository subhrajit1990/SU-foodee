
'use strict';
export default function viewRecentlyStorage(arrayName, oParams,keyToValidate) {
    //console.log("View Recently"+JSON.stringify(oParams));
    var localData = JSON.parse(localStorage.getItem(arrayName) || "[]");
    //console.log("Local Data: " + JSON.stringify(localData));
   
    if(localData.length > 0){
     
      if(localData.find(x => x[keyToValidate] === oParams[keyToValidate])){
       
          return;
      }
        
    }
    localData.push(oParams);  
    localStorage.setItem(arrayName, JSON.stringify(localData));
  }
