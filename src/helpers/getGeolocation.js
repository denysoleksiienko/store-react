import { OPENCAGEDATA, KEY } from 'constants/api';

export let getGeolocation = {};

navigator.geolocation.getCurrentPosition(async (position) => {
  const { latitude, longitude } = position.coords;

  const response = await fetch(`${OPENCAGEDATA}?q=${latitude}+${longitude}&key=${KEY}`);
  getGeolocation = await response.json();
});
