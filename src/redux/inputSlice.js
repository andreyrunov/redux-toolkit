import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	text: ''
}

export const inputSlice = createSlice({
	name: 'input',
	initialState: initialState,
	reducers: {
		setInputText: (state, action) => {
			state.text = action.payload
		}
	}
})

export const { setInputText } = inputSlice.actions

export const inputText = (state) => state.input.text

export default inputSlice.reducer;