import sendRequest from './send-request';
const BASE_URL = '/api/donations';

// Refactored code below
export async function createDonations(donationdata) {
    return await sendRequest(BASE_URL, 'POST', donationdata);
  }
 
  
  export function getDonationsByDonorId(donorID) {
    return sendRequest(`${BASE_URL}/donor/${donorID}`);
  }  

  export function getAllUserDonations(userID) {
    return sendRequest(`${BASE_URL}/user/${userID}`);
  }  

  // export function getOneDonation(userID) {
  //   return sendRequest(`${BASE_URL}/user/${userID}`);
  // }  

  // export function getAllUserDonations() {
  //   return sendRequest(BASE_URL);
  // } 

  export function getOneDonation(donationID) {
    return sendRequest(`${BASE_URL}/${donationID}`);
  } 

  // export function getOneDonation(donorID) {
  //   return sendRequest(`${BASE_URL}/user/${donorID}`);
  // } 

  