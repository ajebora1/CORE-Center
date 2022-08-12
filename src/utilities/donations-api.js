import sendRequest from './send-request';
const BASE_URL = '/api/donations';

// Refactored code below
export async function createDonations(donationdata) {
    return await sendRequest(BASE_URL, 'POST', donationdata);
  }
  
  export function getAllUserDonations(userID) {
    return sendRequest(`${BASE_URL}/user/${userID}`);
  }  