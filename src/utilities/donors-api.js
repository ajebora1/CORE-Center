import sendRequest from './send-request';
const BASE_URL = '/api/donors';

// Refactored code below
export async function createDonors(donordata) {
    return await sendRequest(BASE_URL, 'POST', donordata);
  }
  
  export function getAllUserDonors(userId) {
    return sendRequest(`${BASE_URL}/user/${userId}`);
  }  

  export function getAllDonors() {
    return sendRequest(BASE_URL);
  } 