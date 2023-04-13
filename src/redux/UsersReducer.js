import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isLoggedIn: false,
   users: [],
   products: [],
   currentProduct: [],
   cart: []
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
      updateNewProduct(state, { payload }) {
         return {
            ...state,
            products: state.products.map(item => {
               if (item.id == payload.id) {
                  item = payload
               }
               return item
            })
         }
      },
      addProductToCart(state, { payload }) {
         return {
            ...state,
            cart: [...state.cart, payload]
         }
      },
      updateCartItem(state, { payload }) {
         return {
            ...state,
            cart: state.cart.map(item => {
               if (item.id == payload.id) {
                  item.instock = item.instock + payload.instock
               }
               return item
            })
         }
      }
   }
})
export const { fetchUsers, addUser, currentUser, toggleLoginStatus, fetchProducts, updateCartItem, updateNewProduct, addProductToCart } = UsersReducer.actions
export default UsersReducer.reducer