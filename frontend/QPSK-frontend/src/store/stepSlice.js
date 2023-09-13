import { createSlice } from "@reduxjs/toolkit";

const stepSlice = createSlice({
    name: 'step',
    initialState: {
        step: 1,
        dataFormat: "",
        protocol: "",
        protocolName: "",
    },
    reducers: {
        setStep(state, action) {
            state.step = action.payload.step
        },

        setDataFormat(state, action) {
            state.dataFormat = action.payload.dataFormat
        },

        setProtocol(state, action) {
            state.protocol = action.payload.protocol
        },

        setProtocolName(state, action) {
            state.protocolName = action.payload.protocolName
        },

    }
})

export const { setStep, setDataFormat, setProtocol, setProtocolName } = stepSlice.actions;
 
export default stepSlice.reducer;