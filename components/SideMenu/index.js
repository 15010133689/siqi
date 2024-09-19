import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import {useEffect, useState} from "react";

const SideMenu = () => {
    const [displayButton,setDisplayButton] = useState(false)
    const handleScroll = () => {
        // 处理滚动事件的逻辑
        if (document.documentElement.scrollTop>40){
            setDisplayButton(true)
        }else {
            setDisplayButton(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <Paper sx={{position:'fixed',right:'0',bottom:'30%',bgcolor:'#F7F9FA',boxShadow:'-2px 0 30px 2px rgba(97, 105, 119, 0.18)',borderRadius:'18px 0 0 18px',width:'68px',zIndex:999}}>
            <MenuList sx={{p:'26px 0'}}>
                <MenuItem sx={{position:'relative',textAlign:'center',width:'60px',height:'47px',bgcolor:'#F7F9FA',zIndex:1}}>
                    <Typography component={'a'} href={'#'} sx={{ml:-2,display:'block',fontSize:'12px',textDecoration:'none'}}>
                        <ContentCut sx={{display:'block',width:'100%',height:'24px',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'28px',marginBottom:'5px'}} fontSize="small" />
                        官方客服
                    </Typography>
                </MenuItem>
                <MenuItem sx={{position:'relative',textAlign:'center',width:'60px',height:'47px',bgcolor:'#F7F9FA',zIndex:1}}>
                    <Typography component={'a'} href={'#'} sx={{ml:-1,display:'block',fontSize:'12px',textDecoration:'none'}}>
                        <ContentCut sx={{display:'block',width:'100%',height:'24px',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'28px',marginBottom:'5px'}} fontSize="small" />
                        反馈
                    </Typography>
                </MenuItem>
                <MenuItem sx={{position:'relative',textAlign:'center',width:'60px',height:'47px',bgcolor:'#F7F9FA',zIndex:1}}>
                    <Typography component={'a'} href={'#'} sx={{ml:-1,display:'block',fontSize:'12px',textDecoration:'none'}}>
                        <ContentCut sx={{display:'block',width:'100%',height:'24px',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'28px',marginBottom:'5px'}} fontSize="small" />
                        举报
                    </Typography>
                </MenuItem>
                <MenuItem sx={{position:'relative',textAlign:'center',width:'60px',height:'47px',bgcolor:'#F7F9FA',zIndex:1}}>
                    <Typography component={'a'} href={'#'} sx={{ml:-1,display:'block',fontSize:'12px',textDecoration:'none'}}>
                        <ContentCut sx={{display:'block',width:'100%',height:'24px',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'28px',marginBottom:'5px'}} fontSize="small" />
                        亲测
                    </Typography>
                </MenuItem>
                <MenuItem sx={{display:displayButton ? 'block': 'none',position:'relative',textAlign:'center',width:'60px',height:'47px',bgcolor:'#F7F9FA',zIndex:1}} onClick={() => {
                    window.scrollTo(0, 0)
                    return false;
                }}>
                    <Typography component={'a'} href={'#'} sx={{ml:-2,display:'block',fontSize:'12px',textDecoration:'none'}}>
                        <ContentCut sx={{display:'block',width:'100%',height:'24px',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'28px',marginBottom:'5px'}} fontSize="small" />
                        回顶部
                    </Typography>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}

export default SideMenu