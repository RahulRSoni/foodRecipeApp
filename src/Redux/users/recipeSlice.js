import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	recipe: {},
	error: null,
	loading: false,
	success: false,
};

const userSlice = createSlice({
	name: 'recipe',
	initialState,
	reducers: {
		createRecipe: (state) => {
			state.loading = true;
			state.success = true;
		},
		createRecipeSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.success = true;
			state.loading = false;
			state.error = null;
		},
		createRecipeFailure: (state, action) => {
			state.error = action.payload;
			state.success = false;
			state.loading = false;
		},
	},
});

export const { createRecipe, createRecipeSuccess, createRecipeFailure } =
	userSlice.actions;

export default userSlice.reducer;
