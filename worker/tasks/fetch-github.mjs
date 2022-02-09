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

//this function can be used to fetch data with pagination by updating the urL
// async function fetGithub(){

//     let resultCount = 1, onPage = 0;
//     const allJobs = [];

//     while(resultCount > 0)
//     {
//         const res = await fetch(`${baseURL}?page=${onPage}`);
//         const jobs = await res.json();
//         allJobs.push(...jobs);
//         resultCount = jobs.length;
//         console.log('I got' , resultCount, 'jobs');
//         onPage++;
//     }

//     console.log('got', allJobs.length, 'jobs total');
// }
fetchGithub();