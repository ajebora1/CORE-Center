import sendRequest from './send-request';
const BASE_URL = '/api/comments';

// Refactored code below
export function createComments(commentdata) {
    return sendRequest(BASE_URL, 'POST', commentdata);
  }
  