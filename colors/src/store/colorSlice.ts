import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export type Color ={
    id: number,
    name: string,
    year:number,
    color : string,
    pantone_value : string
}

type InitialState = {
    loading:boolean,
    colors : Color[],
    error:string
}


const initialState : InitialState = {
    loading : false,
    colors : [],
    error :''
}

export const fetchColors = createAsyncThunk('color/fetchColors', () => {
    return axios
      .get('https://reqres.in/api/products')
      .then(response => response.data.data)
  })
  
  const colorsSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder.addCase(fetchColors.pending, state => {
        state.loading = true
      })
      builder.addCase(
        fetchColors.fulfilled,
        (state, action) => {
          state.loading = false
          state.colors = action.payload
          state.error = ''
        }
      )
      builder.addCase(fetchColors.rejected, (state, action) => {
        state.loading = false
        state.colors = []
        state.error = action.error.message || 'Something went wrong'
      })
    }
  })
  
  export default colorsSlice.reducer