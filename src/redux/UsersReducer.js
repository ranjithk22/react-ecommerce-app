import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isLoggedIn: false,
   currentUser: {},
   users: [],
   products: [],
   currentProduct: {},
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
      },
      fetchProducts(state, { payload }) {
         return {
            ...state,
            products: payload
         }
      },
      fetchCurrentProduct(state, { payload }) {
         return {
            ...state,
            currentProduct: [...state.products.filter(item => item.id == payload)]
         }
      }
   }
})
export const { fetchUsers, addUser, currentUser, toggleLoginStatus, fetchProducts, fetchCurrentProduct } = UsersReducer.actions
export default UsersReducer.reducer