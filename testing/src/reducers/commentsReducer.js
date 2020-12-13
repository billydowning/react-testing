import { SAVE_COMMENTS } from "actions/types";

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENTS:
      return action.payload || false;
    default:
      return state;
  }
};

export default commentsReducer;
