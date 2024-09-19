"use server"
import {signIn,signOut} from "../auth";
import {cookies} from "next/headers";

export const SignIn = async (formData) =>{
    // const {username,password} = Object.fromEntries(formData)
    await signIn("credentials",formData)
}

export const SignOut = async () => {
    await signOut()
}

export async function handleSearch(searchParam) {
    const  elliot_token=cookies().get("ELLIOT_TOKEN")
    if (elliot_token === undefined) return {
        result:null
    }
    const result = await fetch(process.env.NEXT_PUBLIC_GATEWAY_URL+'/search-service/search/page',{
        method:"POST",
        credentials:"include",
        mode:'cors',
        headers: {
            Cookie:'ELLIOT_TOKEN='+elliot_token.value,
            'Access-Control-Allow-Origin':'http://localhost:3000',
            "Content-Type": "application/json"
        },
        // fetch 的 body 发送 data
        body:JSON.stringify(searchParam)})
    .then(res => res).then(result => {
        if (result.ok)
            return result.json()
        else
            return {}
    })
    return {
        result:result
    }
}
// export async function getSpuById(spuId){
//     const elliot_token = cookies().get("ELLIOT_TOKEN")
//     const result = await fetch(process.env.NEXT_PUBLIC_GATEWAY_URL+'/item-service/goods/'+spuId,{
//         method:'GET',
//         headers:{
//             Cookie:'ELLIOT_TOKEN='+elliot_token.value,
//         },
//         credentials:'include',
//     }).then(res => res.json())
//
//     return {
//         result:result
//     }
// }
export async function addCart(sku,count) {
    if (!sku.id){
        return {result: null}
    }
    let cart = {"skuId":"","title":"","images":"","price":"","num":"","ownSpec":undefined};
    cart.skuId = sku.id;
    cart.title = sku.title;
    cart.images = sku.images;
    cart.price = sku.price;
    cart.num = count;
    cart.ownSpec = sku.ownSpec
    try {
        const elliot_token = cookies().get("ELLIOT_TOKEN")
        const result = await fetch(process.env.NEXT_PUBLIC_GATEWAY_URL + '/cart-service/cart',{
            method:'POST',
            credentials:'include',
            mode:'cors',
            headers:{
                Cookie:'ELLIOT_TOKEN='+elliot_token.value,
                'Access-Control-Allow-Origin':'http://localhost:3000',
                "Content-Type": "application/json"
            },
            body:JSON.stringify(cart)
        }).then(res => res.status)
        return{
            result:result
        }
    }catch (err){
        return{
            result:false
        }
    }
}

export async function updateCartNum(skuId,num){
    const cookie = cookies().get("ELLIOT_TOKEN")
    const params = new URLSearchParams()
    params.append('skuId',skuId)
    params.append('num',num)
    const result = await fetch(process.env.NEXT_PUBLIC_GATEWAY_URL + '/cart-service/cart?' +params,{
        method:'PUT',
        credentials:'include',
        headers:{
            Cookie:'ELLIOT_TOKEN='+cookie.value
        }
    }).then(res => res.status)
    return{
        result:result
    }
}

export async function getCartList(){
    const cookie = cookies().get("ELLIOT_TOKEN")
    const result = await fetch(process.env.NEXT_PUBLIC_GATEWAY_URL + '/cart-service/cart/list',{
        method:'GET',
        credentials:'include',
        mode:'cors',
        headers:{
            Cookie:'ELLIOT_TOKEN='+cookie.value
        }
    }).then(res => res.json())
    return{
        result:result
    }
}
export async function cartsByIds(skuIds){
    const cookie = cookies().get("ELLIOT_TOKEN")
    const result = await fetch(process.env.NEXT_PUBLIC_GATEWAY_URL + '/cart-service/cart/cartsByIds?skuIds='+skuIds.join(','),{
        method:'GET',
        credentials:'include',
        mode:'cors',
        headers:{
            Cookie:'ELLIOT_TOKEN='+cookie.value
        }
    }).then(res => res.json())
    return{
        result:result
    }
}
export async function deleteCartAction(skuIds){
    const cookie = cookies().get("ELLIOT_TOKEN")
    const result = await fetch(process.env.NEXT_PUBLIC_GATEWAY_URL + '/cart-service/cart?skuIds='+skuIds.join(','),{
        method:'DELETE',
        credentials:'include',
        mode:'cors',
        headers:{
            Cookie:'ELLIOT_TOKEN='+cookie.value
        }
    }).then(res => res.status)
    return{
        result:result
    }
}
export async function createOrder(carts){
    const cookie = cookies().get("ELLIOT_TOKEN")
    const result = await fetch(process.env.NEXT_PUBLIC_GATEWAY_URL + '/order-service/order',{
        method:"POST",
        credentials:"include",
        mode:'cors',
        headers: {
            Cookie:'ELLIOT_TOKEN='+cookie.value,
            'Access-Control-Allow-Origin':'http://localhost:3000',
            "Content-Type": "application/json"
        },
        // fetch 的 body 发送 data
        body:carts}).then(res => res.json())
    return{
        result:result
    }
}
export async function orderById(orderId){
    const cookie = cookies().get('ELLIOT_TOKEN')
    const result = await fetch(process.env.NEXT_PUBLIC_GATEWAY_URL + '/order-service/order/'+orderId,{
        method:'GET',
        mode:'cors',
        credentials:'include',
        headers: {
            Cookie:'ELLIOT_TOKEN='+ cookie.value,
        },
    }).then(res => res.json())
    return{
        result:result
    }
}
export async function orderStatus(orderId){
    const cookie = cookies().get('ELLIOT_TOKEN')
    const status = fetch(process.env.NEXT_PUBLIC_GATEWAY_URL + '/order-service/order/state/'+ orderId,{
        method:'GET',
        mode:'cors',
        credentials:'include',
        headers:{
            Cookie:'ELLIOT_TOKEN='+cookie.value
        }
    }).then(res => res.json())

    return{
        result:status
    }
}