import sendRequest from './send-request';

const BASE_URL = '/api/donors';

export function getAllDonors() {
  return sendRequest(BASE_URL);
}

export function getAllDonorsById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}