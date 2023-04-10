// создаем хранилище (store)
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import inputReducer from './inputSlice'
import booleanReducer from './booleanSlice'
import favoriteReducer from './favoriteSlice'

const store = configureStore({
	reducer: {
		// указываем название редьюсера и его обработчик
		counter: counterReducer,
		input: inputReducer,
		boolean: booleanReducer,
		favorites: favoriteReducer
	},
});

export default store;