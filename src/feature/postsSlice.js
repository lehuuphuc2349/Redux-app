import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "First Post",
    content: "Hello",
    user: "0",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: "heart",
  },
  {
    id: "2",
    title: "Second Post",
    content: "World",
    user: "1",
    date: sub(new Date(), { minutes: 20 }).toISOString(),
    reactions: "rocket",
  },
  {
    id: "3",
    title: "Third Post",
    content: "Another String",
    user: "2",
    date: sub(new Date(), { minutes: 30 }).toISOString(),
    reactions: "eyes",
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    prepare(title, content, userId) {
      return {
        payload: {
          id: nanoid(),
          date: new Date().toISOString(),
          title,
          content,
          user: userId,
        },
      };
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});
export const { postAdded, postUpdated } = postsSlice.actions;
export default postsSlice.reducer;
