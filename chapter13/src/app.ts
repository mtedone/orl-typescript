import axios from 'axios';
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;
console.log(process.env);

const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error('No API Key');
}

type GooleGeocodingResponse = {
  results: [{ geometry: { location: { lat: number; lng: number } } }];
  status: 'OK' | 'ZERO_RESULTS';
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value.trim();

  // send to Google's API!
  axios
    .get<GooleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${apiKey}`
    )
    .then((response) => {
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location');
      }
      const { geometry } = response.data.results[0];
      const lat = geometry.location.lat!;
      const lng = geometry.location.lng!;
      console.log(lat, lng);
      const map = new google.maps.Map(document.getElementById('map')!, {
        center: { lat, lng },
        zoom: 10,
      });
      new google.maps.Marker({ position: { lat, lng }, map: map });
    })
    .catch((err) => {
      alert(`${err.message}`);
    });
}
form.addEventListener('submit', searchAddressHandler);
