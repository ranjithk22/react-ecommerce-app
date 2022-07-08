import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isLoggedIn: false,
   currentUser: {},
   users: [],
   loading: false,
   error: false
}

const UsersReducer = createSlice({
   name: 'Users',
   initialState,
   reducers: {
      fetchUsers(state, { payload }) {
         return {
            ...state,
            users: payload
         }
      },
      addUser(state, { payload }) {
         return {
            ...state,
            users: [...state.users, payload]
         }
      },
      currentUser(state, { payload }) {
         return {
            ...state,
            currentUser: payload
         }
      },
      toggleLoginStatus(state) {
         return {
            ...state,
            isLoggedIn: !state.isLoggedIn
         }
      }
   }
})
export const { fetchUsers, addUser, currentUser, toggleLoginStatus } = UsersReducer.actions
export default UsersReducer.reducer