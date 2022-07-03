import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { db } from '../firebase/Firebase'
import { collection, getDocs } from 'firebase/firestore'

const initialState = {
   isLoggedIn: false,
   currentUser: {},
   users: [
      {
         username: 'Ranjith',
         password: 'kumar'
      }
   ],
   customers: [],
   loading: false,
   error: false
}

const userCollection = collection(db, 'users')
const dbUsers = []

export const fetchUsers = createAsyncThunk(
   "customers/getCustomer",
   async (thunkAPI) => {
      const data = await getDocs(userCollection)
      data.docs.map(doc => {
         const tempUser = doc._document.data.value.mapValue.fields
         dbUsers.push(tempUser)
      })
      console.log(dbUsers)
      return dbUsers
   }
)

const UsersReducer = createSlice({
   name: 'Users',
   initialState,
   reducers: {
      currentUser(state, { payload }) {
         return {
            ...state,
            currentUser: payload
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
      [fetchUsers.pending]: (state) => {
         state.loading = true
         state.error = false
      },
      [fetchUsers.fulfilled]: (state, { payload }) => {
         state.loading = false
         state.error = false
         state.users = payload
      },
      [fetchUsers.rejected]: (state) => {
         state.loading = false
         state.error = true
      },
   },
})
export const { addUser, currentUser, toggleLoginStatus } = UsersReducer.actions
export default UsersReducer.reducer