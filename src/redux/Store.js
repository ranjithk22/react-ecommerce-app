import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import UsersReducer from "./UsersReducer"

const store = configureStore({
   reducer: {
      UsersReducer
   }
}, applyMiddleware(thunk))

export default store
