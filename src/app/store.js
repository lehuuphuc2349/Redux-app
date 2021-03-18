import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/postsSlice";
import usersReducer from "../feature/userSlice";
export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
