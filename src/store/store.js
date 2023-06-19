import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts/postsSlice";
import { usersReducer } from "./slices/users/usersSlice";
import { messagesReducer } from "./slices/messages/messagesSlice";
import { addPost } from "./middlewares/posts";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  messages: messagesReducer,
})

const persistConfig = {
  key: 'insta26',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddlewares) => [
    ...getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), addPost
  ],
});

export const persistor = persistStore(store)

export default store;
