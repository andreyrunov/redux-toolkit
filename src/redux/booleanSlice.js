import { createSlice } from '@reduxjs/toolkit';

const initialState = false

export const booleanSlice = createSlice({
	name: 'boolean',
	initialState: initialState,
	reducers: {
		changeBooleanState: (state) => !state
	}
})

export const { changeBooleanState } = booleanSlice.actions

export const isBoolean = (state) => state.boolean

export default booleanSlice.reducer;