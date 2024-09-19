import {Typography} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from '@mui/icons-material/Star';
import Home from "./home";
import {useTranslations} from "next-intl";

const Shortcut = ({children}) => {
    const tl = useTranslations('Shortcut')
    return(
        <Grid container spacing={3} columns={18} disableEqualOverflow sx={{height:'60px',bgcolor:'grey.tbShortcut'}} >
            <Grid xs={2} md={2.1} />
            {children}
            <Grid xs={2} md={0.6} sx={{pl:0,mt:'5px'}}>
                <Typography variant={'tbShortcut'}>{tl('register')}</Typography>
            </Grid>
            <Grid xs={2} md={1} sx={{pl:0,mt:'5px'}}>
                <Typography variant={'tbShortcut'}>手机逛淘宝</Typography>
            </Grid>
            <Grid xs={2} md={1} sx={{pl:0,mt:'5px'}}>
                <Typography variant={'tbShortcut'}>网页无障碍</Typography>
            </Grid>
            <Grid xs={2} md={1}>
            </Grid>
            <Grid xs={2} md={1}>
            </Grid>
            <Home />
            <Grid xs={2} md={1} sx={{pl:0.5,mt:'5px'}}>
                <Typography variant={'tbShortcut'}>
                    我的E商城
                    <ExpandMoreIcon sx={{fontSize:'12px',ml:1}}/>
                </Typography>
            </Grid>
            <Grid xs={2} md={0.8} sx={{pl:0,mt:'5px'}}>
                <ShoppingCartIcon sx={{paddingTop:'2px'}} fontSize={'12px'} color={"error"}/>
                &nbsp;
                <Typography variant={'tbShortcut'} component={'a'} href={'/cart'} sx={{textDecoration:"none"}}>购物车</Typography>
            </Grid>
            <Grid xs={2} md={1} sx={{mt:'5px'}}>
                <Typography variant={'tbShortcut'}>
                    <StarIcon sx={{ml:-1,fontSize:'12px'}}/>
                    收藏夹
                    <ExpandMoreIcon sx={{ml:1,fontSize:'12px'}} />
                </Typography>
            </Grid>
            <Grid xs={2} md={1.8} sx={{mt:'5px'}}>
                <Typography variant={'tbShortcut'}>商品分类&nbsp;&nbsp;&nbsp;</Typography>
                <Typography variant={'tbShortcut'}>免费开店</Typography>
            </Grid>
            <Grid xs={2} md={1.5} sx={{pl:0.5,mt:'5px'}}>
                <Typography variant={'tbShortcut'}>
                    千牛卖家中心
                    <ExpandMoreIcon sx={{ml:0.5,fontSize:'12px'}}/>
                </Typography>
            </Grid>
            <Grid xs={2} md={1} sx={{pl:2,ml:'-30px',mt:'5px'}}>
                <Typography variant={'tbShortcut'}>
                    联系客服
                    <ExpandMoreIcon sx={{ml:0.5,fontSize:'12px'}} />
                </Typography>
            </Grid>
            <Grid xs={2} md={1.3} />
        </Grid>
    )
}

export default Shortcut