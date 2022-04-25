import axios from 'axios';

const baseURL =  "http://localhost:3001/";
const baseAccess = { 
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control': '*'
}

const api = axios.create({
    baseURL: baseURL
});

export {api, baseAccess};