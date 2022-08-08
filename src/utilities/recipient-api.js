import sendRequest from './send-request';
const BASE_URL = '/api/recipients';

export function addComents(recipientID) {
    return sendRequest(`${BASE_URL}/${recipientID}`, 'POST');
  }