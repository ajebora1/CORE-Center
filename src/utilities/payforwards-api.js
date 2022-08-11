import sendRequest from './send-request';
const BASE_URL = '/api/payforwards';

// Refactored code below
export async function createPayforwards(payforwarddata) {
    return await sendRequest(BASE_URL, 'POST', payforwarddata);
  }
  
  export function getAllUserPayforwards(userId) {
    return sendRequest(`${BASE_URL}/user/${userId}`);
  }  

  export function getAllPayforwards() {
    return sendRequest(BASE_URL);
  } 