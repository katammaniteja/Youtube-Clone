import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import {
  homeVideosReducer,
  selectedVideoReducer,
  relatedVideoReducer,
  searchedVideosReducer,
} from "./reducers/vides.reducer";
import { channelDetailReducer } from "./reducers/channel.reducer";
import { commentsListReducer } from "./reducers/comments.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  commentList: commentsListReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
