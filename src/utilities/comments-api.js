import sendRequest from './send-request';
const BASE_URL = '/api/comments';

// Refactored code below
export async function createComments(commentdata) {
    return await sendRequest(BASE_URL, 'POST', commentdata);
  }
  
  export function getAllUserComments(userId) {
    return sendRequest(`${BASE_URL}/user/${userId}`);
  }  

 export  async function updateOneComment(commentID, data) {
    return await sendRequest(`${BASE_URL}/${commentID}`, 'PUT', data);
  } 
  export  function deleteOneComment(commentID) {
    return sendRequest(`${BASE_URL}/${commentID}`, 'DELETE');
  } 
