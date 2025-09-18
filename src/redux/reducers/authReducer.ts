import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface AuthState {
  accessToken: string | null
}

// Define the initial state using that type
const initialState: AuthState = {
  accessToken: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
      localStorage.setItem('token', action.payload)
    },
    logoutUser: (state) => {
      state.accessToken = null
      // localStorage.removeItem('token')
    },
  },
})

export const { loginUser, logoutUser } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default authSlice.reducer
