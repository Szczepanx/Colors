import { configureStore } from '@reduxjs/toolkit'
import colorsReducer from './colorSlice';


const store = configureStore({
  reducer: {
    color : colorsReducer
  }
})


export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch