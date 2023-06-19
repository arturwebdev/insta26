import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {
    addComment(state, { payload: { username, postId, body } }) {
      const postIdx = state.data.findIndex((post) => post.id === postId);

      state.data[postIdx].comments.push({
        id: new Date().getTime().toString(),
        username,
        body,
      });
    },
    addPost(state, { payload }) {
      state.data.unshift(payload);
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data.unshift(...payload);
    },
  },
});

export const selectPosts = (state) => state.posts;
export const { addComment } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
