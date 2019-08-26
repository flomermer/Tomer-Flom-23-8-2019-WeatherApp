const axios = require('axios');

const ROOT_API_URL  =   'https://dataservice.accuweather.com';
const API_KEY       =   'CmA4vAXD306u0pdSGGwlchO5lC5VSjFs';
const DEFAULT_CITY  =   {id: '215854', name: 'Tel Aviv'};

const API_CALL = (verb, path, data) => {
  return new Promise((resolve, reject) => {
    let url = `${ROOT_API_URL}/${path}`;
    if(url.includes('?') && !url.includes('api_key'))
      url += `&apikey=${API_KEY}`

    axios(url, {
      method: verb,
      withCredentials: false,
      data
    }).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      console.log(`API_REQUEST ERROR: ${url}`);
      console.log(err.message);
      reject(err);
    })
  });
}

module.exports = {
  API_CALL,
  API_KEY,
  DEFAULT_CITY
}
