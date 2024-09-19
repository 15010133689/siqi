'use client'
import {Button, InputBase, Paper, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {updateSearchParam,updateSearchResults} from '../../../../lib/store/reducers/products'
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {handleSearch} from "../../../../lib/actions";

const Search = () => {
    const {searchParam} = useSelector(state => state.products);
    const {pathname} = useRouter()
    const dispatch = useDispatch()
    useEffect( () => {
        handleSearch(searchParam).then(res => {
            dispatch(updateSearchResults({searchResults:res.result}))
        })
    },[searchParam])
    const handleChange = (event) => {
        let newSearchParam = {...searchParam}
        newSearchParam.key = event.currentTarget.value
        dispatch(updateSearchParam({searchParam:newSearchParam}))
    }
    return(
        <Paper
            component="form"
            sx={{ borderRadius:'20px',height:'40px',width:'690px',border:'2px solid #FD3F31',p: '2px 4px', display: 'flex', alignItems: 'center' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1,fontSize:'12px' }}
                value={searchParam ? searchParam.key : null}
                placeholder={'搜索商品'}
                inputProps={{ 'aria-label': '搜索商品' }}
                onChange={(event) => handleChange(event)}
            />
            <Button
                component={'a'}
                href={pathname==='/search' ? '#' : '/search'}
                target={pathname==='/search' ? '_self' : '_blank'}
                sx={{
                width:'73px',
                height:'33px',
                top:'0.5px',
                borderRadius:'20px',
                backgroundImage:'linear-gradient(90deg, #FE6076 0%, #FF0036 93%)',
            }}>
                <Typography sx={{color:'#fff',fontSize:'16px'}}>搜索</Typography>
            </Button>
        </Paper>
    )
}

export default Search
