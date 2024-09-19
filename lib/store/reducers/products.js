import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    searchParam:{
        key:'',
        filter:{cid3:[],brandId:[]},
        page:1,
        size:20
    },
    searchResults:{},
    openTags:{condition:true,brandMore:false,specTags:{}}
}

const products = createSlice({
    name:'products',
    initialState,
    reducers:{
        updateSearchParam(state,action){
            state.searchParam = action.payload.searchParam
        },
        updateSearchResults(state,action){
            state.searchResults = action.payload.searchResults
        },
        updateOpenTags(state,action){
            state.openTags = action.payload.openTags
        }
    }
})

export default products.reducer

export const {updateSearchParam,updateSearchResults,updateOpenTags} = products.actions