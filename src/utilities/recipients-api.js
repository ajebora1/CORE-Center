import sendRequest from './send-request';
const BASE_URL = '/api/recipients';

export async function createRecipients(recipientdata) {
    return await sendRequest(BASE_URL, 'POST', recipientdata);
  }
  
  export function getAllUserRecipients(userId) {
    return sendRequest(`${BASE_URL}/user/${userId}`);
  }  

  export function getAllRecipients() {
    return sendRequest(BASE_URL);
  } 