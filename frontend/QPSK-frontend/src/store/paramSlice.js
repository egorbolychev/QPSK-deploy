import { createSlice } from "@reduxjs/toolkit";

const paramSlice = createSlice({
    name: 'params',
    initialState: {
        selectedParam: {label: "Параметры..."},
        nodeAmount: "",
        lowerBound: "",
        upperBound: "",
        paramSet: [],
    },
    reducers: {
        setSelectedParam(state, action) {
            state.selectedParam = action.payload.selectedParam
        },
        setNodeAmount(state, action) {
            state.nodeAmount = action.payload.nodeAmount
        },
        setLowerBound(state, action) {
            state.lowerBound = action.payload.lowerBound
        },
        setUpperBound(state, action) {
            state.upperBound = action.payload.upperBound
        },
        changeParamSet(state, action) {
            let val = action.payload.value[0]
            let i = action.payload.value[1]
            state.paramSet = [...state.paramSet.slice(0, i), val, ...state.paramSet.slice(i+1,)]
        },
        setParamSet(state, action) {
            state.paramSet = action.payload.params
        },

    }
})

export const { setNodeAmount, setLowerBound, setUpperBound, changeParamSet, setParamSet, setSelectedParam } = paramSlice.actions;
 
export default paramSlice.reducer;