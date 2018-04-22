import {
  LOAD_INFORMATION_SUCCESS,
  LOAD_INFORMATION_FAILURE
} from './types';

import { workExperience, education } from './initialState';


export default function information(state = {
  workExperience, education
}, action) {
  switch (action.type) {
    case LOAD_INFORMATION_SUCCESS:
      return {
        education: action.response.education,
        workExperience: action.response.workExperience,
      };
    case LOAD_INFORMATION_FAILURE:
      return state;
    default:
      return state;
  }
}
