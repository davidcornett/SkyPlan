
var fields = document.getElementsByTagName('input');
var dropdowns = document.getElementsByTagName('select');

document.addEventListener('DOMContentLoaded', bindButton);
document.addEventListener('DOMContentLoaded', clearForm);

//on reload, empty form
function clearForm(){
	for (let i = 0; i < fields.length; i++) {
		if (fields[i].classList.contains("submit")) {
			//do nothing to buttons
		} else {
			fields[i].value = '';  //reset fields
		}
	}
	for (let i = 0; i < dropdowns.length; i++) {
		dropdowns[i].value = '';  //reset dropdown items
	}
}

function bindButton(){
  	var req = new XMLHttpRequest();
  	var payload = {"popularDSO":null, "planet":null, "messier":null, "ngc":null, "gps":null, 
  	"zip":null};
  	var keys = Object.keys(payload); 

  	document.getElementById('submitForm').addEventListener('click', function(event){
  		//Assign all payload values with form entries; works for any number of entries
  		
  		//Loop thru fields
  		for (let i = 0; i < fields.length; i++) {
  			if (keys.includes(fields[i].id)) {
				let item = fields[i].id;
  				payload[item] = fields[i].value;	
  			}
  		}
  		//Loop thru dropdowns
  		for (let i = 0; i < dropdowns.length; i++) {
  			if (keys.includes(dropdowns[i].id)) {
				let item = dropdowns[i].id;
  				payload[item] = dropdowns[i].value;	
  			}
  		}
		
  		// PLACEHOLDER form submission to meet project requirements - TODO after CS290
  		req.open('POST', 'http:httpbin.org/post',true);
    	req.setRequestHeader('Content-Type', 'application/json');
    	req.send(JSON.stringify(payload));

      	req.addEventListener('load', function(){
        	aSyncLoad(req);
      	})          	
      	event.preventDefault();
    });

}

 function aSyncLoad(req) {
    if(req.status >= 200 && req.status < 400) {
        var response = JSON.parse(req.responseText);
        console.log(response);
        setResults(response); // call function to set up new page with results
    } else {
        console.log("Request Error: " + request.statusText); 
    }
 }

 function setResults(results) {
 	//creates new nav bar item for results page
 	var nav = document.getElementById("nav");
 	var link = document.createElement("li");
 	var page = document.createElement("a");
 	var text = document.createTextNode("Results");
 	page.href = "results.html";
 	page.appendChild(text);
 	link.appendChild(page);
 	nav.appendChild(link);

 	window.location.href = "results.html";
 }
