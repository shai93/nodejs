//import request module
var request = require("request");

var completed = 0
var responses = [];


function apiRequest(Url, priority, index, urllength) {
    var options = {
        url : Url,
        timeout: 5000       // set timeout for 5sec.
    } 
   
    //create promise
    return new Promise(function (resolve, reject) {
       
        request(options, function(error, response, request){
            //check online servers
            if(!error && (response.statusCode >= '200' || response.statusCode <= '299')){                
                var data = {
                    url: Url,
                    priority: priority,
                    index : index
                }
                
                responses.push(priority);
            }else{
                //reject("Offline : "+ Url);
            }

            //console.log(completed);
            if(urllength-1 == completed){
                //console.log(responses);
                Promise.all(responses).then(values => { 
                    console.log(Math.min(...values)); 
                  });
            }

            completed++;  
        })
    })
}

//export findServer function
exports.findServer =  function(urlJson){
    let urllength = urlJson.length;
        for( var i = 0; i < urlJson.length; i++ ) {
            //call promise
            apiRequest(urlJson[i]["url"], urlJson[i]["priority"], i, urllength)            
        }
}


