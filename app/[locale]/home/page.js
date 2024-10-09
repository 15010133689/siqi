"use client"
import {Box, IconButton, Paper, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ShirtSvg from '/public/icons/Shirt.svg'
import Image from "next/image";
import styles from './home.module.css'
import {VirtuosoGrid} from "react-virtuoso";
import {forwardRef, useCallback, useEffect, useRef, useState} from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const MUIComponents = {
    List: forwardRef(({ style, children }, listRef) => {
        return (
            <Grid ref={listRef} style={{ ...style}}  container spacing={2} columns={18} sx={{m:0,p:0,...style}}  disableEqualOverflow>
                {children}
            </Grid>
        )
    }),
    Item: ({ children, ...props }) => {
        return (
            <Grid md={3.6} {...props}>
                {children}
            </Grid>
        )
    }
}
const Home = () => {
    const virtuoso = useRef(null);
    const [products, setProducts] = useState(() => [{name:'product1'},{name:'product2'},{name:'product3'},{name:'product3'},{name:'product3'}])
    const [displayButton,setDisplayButton] = useState('block')
    const handleScroll = () => {
        // 处理滚动事件的逻辑
        if (document.documentElement.scrollTop>40){
            setDisplayButton('block')
        }else {
            setDisplayButton('none')
        }
    };

    const loadMoreProducts = useCallback(() => {
        let newProducts = [...products]
        return  setProducts((products) => [...products,...newProducts ])
    }, [setProducts])
    useEffect(() => {
        const timeout = loadMoreProducts()
        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timeout)
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return(
        <>
            <Paper sx={{mt:'20px',ml:'156px',mr:'156px',borderRadius:'24px 24px 24px 24px'}}>
                <VirtuosoGrid
                    useWindowScroll
                    ref={virtuoso}
                    data={products}
                    endReached={loadMoreProducts}
                    style={{ height: 400,paddingLeft:15 }}
                    overscan={200}
                    components={MUIComponents}
                    itemContent={(index, product) => {
                        return(
                            <Paper>
                                <Stack component={'a'} href={'#'} sx={{textDecoration:'none'}}>
                                    <Image width={210} height={210} alt={'商品图片'}/>
                                    {/*<VideoComponent url={'http://image.elliot.com/images/15/15/4.mp4'} width={210} height={210} alt={'carouselVideo'}/>*/}
                                    <Typography variant={'product'}>
                                        王力家用智能门锁指纹锁密码锁可视猫眼防盗门电子门锁门铃S802</Typography>
                                    <Box className={styles.benifit} sx={{width:'50%'}}>
                                        <Typography variant={'benifit'}>月销量过千</Typography>
                                    </Box>
                                    <Box sx={{width:'50%',mt:0.5,ml:-1}}>
                                        <Typography variant={'handPrice'}>到手价</Typography>
                                        <Typography variant={'price'}>¥1639</Typography>
                                    </Box>
                                    <Box sx={{width:'50%',mt:0.5,ml:-1}} className={styles.monthSale}>
                                        <Typography variant={'monthSale'}>月销500+</Typography>
                                        <Box className={styles.benifitReceive}>
                                            <Typography variant={'rmbPrice'} >¥160</Typography>
                                            <Typography variant={'collect'} >领取</Typography>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Paper>
                        )
                    }}
                />
            </Paper>
            <Box>
                <IconButton sx={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    bgcolor:'#ea3845',
                    display:displayButton
                }} onClick={() => {
                    window.scrollTo(0, 0)
                    return false;
                }}>
                    <KeyboardArrowUpIcon />
                </IconButton>
            </Box>
        </>

    )
}
export default Home