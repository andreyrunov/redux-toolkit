import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	favoritePosts: []
}

export const favoriteSlice = createSlice({
	name: 'favorites',
	initialState: initialState,
	reducers: {
		addFavoritePost(state, action) {
			state.favoritePosts.push(action.payload)
		},
		removeFavoritePost(state, action) {
			const postIndex = state.favoritePosts.findIndex(post => {
				console.log(post, '<--- postId')
				console.log(action.payload, '<--- action.payload.id')
				return post == action.payload})
			state.favoritePosts.splice(postIndex, 1)
		}
	}
})

export const { addFavoritePost, removeFavoritePost } = favoriteSlice.actions

export default favoriteSlice.reducer
