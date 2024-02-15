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
    page: number,
    per_page: number,
    error:string
}


const initialState : InitialState = {
    loading : false,
    colors : [],
    page : 0,
    per_page : 0,
    error :''
}

export const fetchColors = createAsyncThunk('color/fetchColors', () => {
    return axios
      .get('https://reqres.in/api/products')
      .then(response => response.data)
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
          state.page = action.payload.page
          state.per_page = action.payload.per_page
          state.colors = action.payload.data
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