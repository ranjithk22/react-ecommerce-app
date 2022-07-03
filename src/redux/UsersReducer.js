import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
   isLoggedIn: false,
   users: [
      {
         username: 'Test',
         password: 'test'
      }
   ],
   customers: [],
   loading: false,
   error: false
}

export const fetchCustomers = createAsyncThunk(
   "customers/getCustomer",
   async (thunkAPI) => {
      const res = await axios.get(`https://randomuser.me/api/?results=10`)
         .then(res => res.data.results)
      return res
   }
)

const UsersReducer = createSlice({
   name: 'Users',
   initialState,
   reducers: {
      addUser(state, { payload }) {
         return {
            ...state,
            users: [{ ...payload }]
         }
      },
      toggleLoginStatus(state, { payload }) {
         return {
            ...state,
            isLoggedIn: !state.isLoggedIn
         }
      }
   },
   extraReducers: {
      [fetchCustomers.pending]: (state) => {
         state.loading = true
         state.error = false
      },
      [fetchCustomers.fulfilled]: (state, { payload }) => {
         state.loading = false
         state.error = false
         state.customers = payload
      },
      [fetchCustomers.rejected]: (state) => {
         state.loading = false
         state.error = true
      },
   },
})
export const { addUser, toggleLoginStatus } = UsersReducer.actions
export default UsersReducer.reducer