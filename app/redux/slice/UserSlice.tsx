// import { createSlice } from "@reduxjs/toolkit";
// import { userList } from "../../Data"

import { GET_USER, SHOW_USER, STORE_USER } from "../actions/user/Types";

// const userSlice = createSlice({
//   name: "users",
//   initialState: userList,
//   reducers: {
//     addUser(state, action) {
//       state.push(action.payload)
//     }
//   }
// })

// export const { addUser } = userSlice.actions
// export default userSlice.reducer;

const initialState: never[] = []

function userSlice(users = initialState, action: { type: string; payload: any }) {
  const { type, payload } = action

  switch (type) {
    case GET_USER:
      return payload;
      break;

    case STORE_USER:
      return [...users, payload];
      break;

    default:
      return users
      break;
  }
}

export default userSlice