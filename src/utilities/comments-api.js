import sendRequest from './send-request';
const BASE_URL = '/api/comments';

// Refactored code below
export async function createComments(commentdata) {
    return await sendRequest(BASE_URL, 'POST', commentdata);
  }
  
  export function getAllUserComments(userId) {
    return sendRequest(`${BASE_URL}/user/${userId}`);
  }  