import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleModal: false,
};

export const modalSlice = createSlice({
    name: 'openModal',
    initialState,
    reducers: {
        modalToggle: state => {
            state.toggleModal = !state.toggleModal
        },
    },
});

export const { modalToggle } = modalSlice.actions;

export default modalSlice.reducer