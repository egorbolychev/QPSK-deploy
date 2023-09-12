import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        activeTab: false,
    },
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload.value
            console.log(state.activeTab)
        },
    }
})

export const { setActiveTab } = modalSlice.actions;

export default modalSlice.reducer;