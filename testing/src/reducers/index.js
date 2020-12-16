import { combineReducers } from "redux";
import commentsReducer from "reducers/commentsReducer";
import authReducer from "reducers/authReducer";

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer,
});
