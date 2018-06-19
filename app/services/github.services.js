import 'whatwg-fetch';

const withQuery = require('with-query');

const API = {
  CLIENT_ID: 'a0e8ee914245f5202c68',
  CLIENT_SECRET: '138797de88f46f0bbfb251476937e417dc2b05a1',
  URL: 'https://api.github.com'
};

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function request(path, options, q) {
  const newQ = {
    client_id: API.CLIENT_ID,
    client_secret: API.CLIENT_SECRET,
    ...q
  };
  const newuRL = `${API.URL + path}`;
  return fetch(withQuery(newuRL, newQ), options)
    .then(checkStatus)
    .then(parseJSON);
}
