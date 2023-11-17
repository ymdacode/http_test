import fetch from 'node-fetch';

const response = await fetch('http://localhost:3000');
const body = await response.text();

console.log(body);