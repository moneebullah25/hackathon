import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";


const persistConfig = {
  key: "root",
  version: 1, 
  storage
}

const reducer = combineReducers({
  cart: cartSlice,

})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;