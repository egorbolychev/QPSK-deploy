import {configureStore} from '@reduxjs/toolkit';
import stepSlice from './stepSlice';
import paramSlice from './paramSlice';
import modalReducer from './modalSlice'

export default configureStore({
    reducer: {
        step: stepSlice,
        params: paramSlice,
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware( {serializableCheck: false} )
});