import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  input: '',
}

export const expressionSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    expression: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { expression } = expressionSlice.actions
export const selectExpression = (state) => state.input.input
export default expressionSlice.reducer
