import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "First Post",
    content: "Hello",
    user: "0",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: { thumbsUp: 9, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
  {
    id: "2",
    title: "Second Post",
    content: "World",
    user: "1",
    date: sub(new Date(), { minutes: 20 }).toISOString(),
    reactions: { thumbsUp: 2, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
  {
    id: "3",
    title: "Third Post",
    content: "Another String",
    user: "2",
    date: sub(new Date(), { minutes: 30 }).toISOString(),
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
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
export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts;
export const selectPostById = (state, postId) =>
  state.posts.find((post) => post.id == postId);
