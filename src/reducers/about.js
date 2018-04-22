import {
  LOAD_DETAILS_SUCCESS,
  LOAD_DETAILS_FAILURE
} from './types';


export default function aboutReducer(state = {
  description: 'Self Motivated Individual with more than 9 years of work experience at leading firms world wide',
  imageURL: ''
}, action) {
  switch (action.type) {
    case LOAD_DETAILS_FAILURE:
      return {
        description: action.response.description,
        imageURL: action.response.imageURL,
      };
    case LOAD_DETAILS_SUCCESS:
      return state;
    default:
      return state;
  }
}
