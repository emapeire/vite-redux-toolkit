import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  name: string
  username: string
  email: string
}

const initialState: UserState = {
  name: '',
  username: '',
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserState>) => {
      const { name, username, email } = action.payload
      state.name = name
      state.username = username
      state.email = email
    },
    changeEmail: (state, action: PayloadAction<UserState>) => {
      const { email } = action.payload
      state.email = email
    }
  }
})

export const { addUser, changeEmail } = userSlice.actions
export default userSlice.reducer
