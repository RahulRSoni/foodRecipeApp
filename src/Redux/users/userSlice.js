import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentUser: {},
	error: null,
	loading: false,
	success: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signInStart: (state) => {
			state.loading = true;
		},
		signInSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.success = true;
			state.loading = false;
			state.error = null;
		},
		signInFailure: (state, action) => {
			state.error = action.payload;
			state.success = false;
			state.loading = false;
		},
		signOutFailure: (state, action) => {
			state.error = action.payload;
			state.success = true;
			state.loading = false;
		},
		sigOutSuccess: (state) => {
			state.currentUser = {};
			state.success = false;
			state.loading = false;
		},
		registerUser: (state) => {
			state.loading = true;
		},
		registerUserFailure: (state, action) => {
			state.error = action.payload;
			state.success = false;
			state.loading = false;
		},
		registerUserSuccess: (state) => {
			state.loading = false;
			state.error = null;
		},
		updateUsers: (state) => {
			state.loading = true;
		},
		updateUserFailure: (state, action) => {
			state.error = action.payload;
			state.success = false;
			state.loading = false;
		},
		updateUserSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.success = true;
			state.loading = false;
			state.error = null;
		},
	},
});

export const {
	signInStart,
	signInSuccess,
	signInFailure,
	sigOutSuccess,
	registerUser,
	registerUserFailure,
	registerUserSuccess,
	updateUsers,
	updateUserFailure,
	updateUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
