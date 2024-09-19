import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getSpuById} from "../../actions";

const initialState = {
    spu:{title:'',
        subTitle:'',
        cid1:'',
        cid2:'',
        cid3:'',
        brandId:'',
        saleable:'',
        dr:'',
        spuDetail:{description:'',specification:'',specTemplate:'',packingList:'',afterService:''},
        skus:[]},
    currentSku: {},
    detailTags:{curImg:'',qrCodeStatus:false,specification: false,mobileColor:'',mobileStorage:''}
}
export const fetchSpu = createAsyncThunk('spu/getById',async (id) => {
    // return getSpuById(id).then(res => {
    //     return res.result
    // })
    return await fetch('/product/api?spuId='+id).then(res => {
        return res.json()
    })
})
const productDetail = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        updateCurrentSku(state,action){
            state.currentSku = action.payload.currentSku
        },
        updateDetailTags(state,action){
            state.detailTags = action.payload.detailTags
        }
    },
    extraReducers(builder){
        builder.addCase(fetchSpu.fulfilled,(state,action) => {
            state.spu = action.payload
        })
    }
})

export default productDetail.reducer

export const {updateCurrentSku,updateDetailTags} = productDetail.actions