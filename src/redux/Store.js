import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import UsersReducer from "./UsersReducer"

export const store = configureStore({
   reducer: {
      UsersReducer
   }
}, applyMiddleware(thunk))
