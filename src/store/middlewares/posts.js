import store from "../store";

export const addPost =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "addPost") {
      const newPost = {
        id: new Date().getTime().toString(),
        img: action.payload.img,
        name: getState().users.currentUser.username,
        likesCount: Math.round(Math.random() * 200 + 700),
        postText: action.payload.postText,
        timeAgo: Math.round(Math.random() * 7 + 2) + "2 Minutes Ago",
        comments: [],
      };
      dispatch({ type: "users/addPost", payload: { ...newPost } });
      dispatch({ type: "posts/addPost", payload: { ...newPost } });
      return;
    }
    next(action);
  };
