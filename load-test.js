import http from 'k6/http';

export let options = {
  stages: [
    { duration: '2m', target: 500 },  // Ramp up to 500 users
    { duration: '3m', target: 500 },  // Hold 500 users for 3 minutes
    { duration: '2m', target: 0 },    // Ramp down
  ],
};

export default function () {
  http.get('http://34.116.244.25/api/hello');  // Replace with your API URL
}
