import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 0
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState: initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		}
	}
})

// Здесь мы экспортируем `actions`, используя деструктуризацию. Объект `actions` содержит все методы, определенные в редьюсере при создании Slice.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// В данном случае `increment`, `decrement` и `incrementByAmount` - это методы, которые мы определили в редьюсере, описанном в файле `counterSlice`, и которые используются для изменения счетчика.


// Здесь мы экспортируем селектор `selectCount`, который возвращает текущее значение счетчика из `state`. Выражение `state.counter.value` обращается к значению `value` из `state`, который содержит состояние `counter`. В компоненте мы будем это передавать в useSelector: const count = useSelector(selectCount);
export const selectCount = (state) => state.counter.value


// Здесь мы экспортируем редьюсер по умолчанию из файла `counterSlice`. Reducer - это функция, которая принимает текущее состояние и action, и возвращает новое состояние. По умолчанию, когда мы экспортируем reducer, он имеет имя `reducer` и содержит тело функции, которое мы определили в `createSlice`.
export default counterSlice.reducer;