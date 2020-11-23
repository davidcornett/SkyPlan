/* Code modified from:
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
*/

function geoFindMe() {

  const gps = document.getElementById('gps'); //identifies gps field in form
  gps.value = '';

  function success(position) {
    const latitude  = position.coords.latitude; 
    const longitude = position.coords.longitude;

    gps.value = `${latitude},${longitude}`; //auto fill field with gps string
  }

  function error() {
    alert('Unable to retrieve your location');
  }

  if(!navigator.geolocation) {
    alert('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);

  }

}

document.querySelector('#autoLocate').addEventListener('click', geoFindMe);
