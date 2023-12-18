// import { configureStore } from "@reduxjs/toolkit";
// import UserSlice from "../slice/UserSlice";


// export default configureStore({
//   reducer: {
//     users: UserSlice
//   }
// })

import { applyMiddleware, createStore } from "redux"
import { thunk } from "redux-thunk"
import rootReducer from '../reducer/Index';
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {}
const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;