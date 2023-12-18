import UserService from "../../../services/UserService"
import { GET_USER, SHOW_USER, STORE_USER } from "./Types"


export const getUser = () => async (dispatch: any) => {
  try {
    const response = await UserService.get();

    dispatch({
      type: GET_USER,
      payload: response.data
    })
  } catch (error) {
    console.error(error);

  }
}

export const showUser = (state: any) => async (dispatch: any) => {
  try {
    const response = await UserService.show(state);

    dispatch({
      type: SHOW_USER,
      payload: response.data
    })
  } catch (error) {
    console.error(error);

  }
}

export const storeUser = (name: any, email: any) => async (dispatch: any) => {
  try {
    const response = await UserService.store({ name, email })

    dispatch({
      type: STORE_USER,
      payload: response.data
    })

    return Promise.resolve(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}