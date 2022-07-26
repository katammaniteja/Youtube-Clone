import {
  COMMENT_LIST_FAIL,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
} from "../actionType";

export const commentsListReducer = (
  state = {
    comments: null,
    loading: false,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case COMMENT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_LIST_SUCCESS:
      return {
        ...state,
        comments: payload,
        loading: false,
      };
    case COMMENT_LIST_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
