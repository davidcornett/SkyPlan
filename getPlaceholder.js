document.addEventListener('DOMContentLoaded', getData);
var dateField = document.getElementById("date");
dateField.value = '2021-01-29'; //add placeholder date

googleCalendarClientId = '830906436034-8l2gjtqtt98eap5u896nc03p8uspmmdf.apps.googleusercontent.com';
googleCalendarSecret = 'F_EkKGFpT-D16ZHghb5l9_k6';
googleCalendarKey = 'AIzaSyB14BhScL8T_PVjCGNixxmOL2ZmuCFcWhQ';

//placeholder data and fetch code from: https://jsonplaceholder.typicode.com/
function getData(){
	fetch('https://jsonplaceholder.typicode.com/posts', {
	  method: 'POST',
	  body: JSON.stringify({
	    title: 'foo',
	    body: 'bar',
	    date: "2021-01-29",
	  }),
	  headers: {
	    'Content-type': 'application/json; charset=UTF-8',
	  },
	})

	.then((response) => response.json())
	.then((json) => console.log(json.date))
}


	