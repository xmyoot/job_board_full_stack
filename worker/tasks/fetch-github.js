// var fetch = require('node-fetch');

// const baseURL = 'https://jobs.github.com/positions.json';

// module.exports = async function fetchGithub(){
//     const res = await fetch(baseURL);
//     const jobs = await res.json();
//     console.log({jobs});
//     console.log(jobs.length);
// }

// module.exports();

import fetch from 'node-fetch';

export default async function fetchGithub() {
    const baseURL = 'https://remoteok.com/api';
    const response = await fetch(baseURL);
    const jobs = await response.json();
    console.log(jobs);
    console.log(jobs.length);
};