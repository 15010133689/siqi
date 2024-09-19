import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    mode: 'light'
}

const themes = createSlice({
    name:'themes',
    initialState,
    reducers:{
        changeMode(state,action){
            state.mode = action.payload.mode
        }
    }
})
export default themes.reducer

export const {changeMode} = themes.actions