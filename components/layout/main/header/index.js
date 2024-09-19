import {Typography} from "@mui/material";
import Logo from '../../../Logo'
import Search from "./Search";
import {Grid2 as Grid} from "@mui/material";

const Header = () => {
    return(
            <Grid sx={{mt:0,position:'sticky',top:0,zIndex:999,bgcolor:'#f6f6f6'}}  container columns={18} spacing={3} disableEqualOverflow>
                <Grid xs={2} md={3.4}/>
                <Grid container xs={6} md={14.6} sx={{mt:0,pt:0}}>
                    <Grid xs={2} md={3.5}>
                        <Logo />
                    </Grid>
                    <Grid container xs={2} md={10.5} sx={{pl:0,pt:0,mt:0}}>
                        <Grid xs={2} md={18}>
                            <Search />
                        </Grid>
                        <Grid container xs={2} md={18}  sx={{mt:0,pt:'5px',height:'28px'}}>
                            <Grid xs={4} md={2} sx={{ml:3,mr:-3,p:0}}>
                                <Typography component="a" href="#simple-list" sx={{textDecoration:'none',color:'red'}} variant={'shortcut'}>聚划算</Typography>
                            </Grid>
                            <Grid xs={4} md={2} sx={{ml:-1,mr:-3,p:0}}>
                                <Typography component="a" href="#simple-list" sx={{textDecoration:'none'}} variant={'shortcut'}>水杯</Typography>
                            </Grid>
                            <Grid xs={4} md={2} sx={{ml:-1,mr:-3,p:0}}>
                                <Typography component="a" href="#simple-list" sx={{textDecoration:'none'}} variant={'shortcut'}>铅笔</Typography>
                            </Grid>
                            <Grid xs={4} md={2} sx={{ml:-1,mr:-3,p:0}}>
                                <Typography component="a" href="#simple-list" sx={{textDecoration:'none'}} variant={'shortcut'}>漱口水</Typography>
                            </Grid>
                            <Grid xs={4} md={2} sx={{ml:-1,mr:-3,p:0}}>
                                <Typography component="a" href="#simple-list" sx={{textDecoration:'none'}} variant={'shortcut'}>蓝牙耳机</Typography>
                            </Grid>
                            <Grid xs={4} md={2} sx={{ml:-1,mr:-3,p:0}}>
                                <Typography component="a" href="#simple-list" sx={{textDecoration:'none'}} variant={'shortcut'}>洗衣机</Typography>
                            </Grid>
                            <Grid xs={4} md={2} sx={{ml:-1,mr:-3,p:0}}>
                                <Typography component="a" href="#simple-list" sx={{textDecoration:'none'}} variant={'shortcut'}>抽纸</Typography>
                            </Grid>
                            <Grid xs={4} md={2} sx={{ml:-1,mr:-3,p:0}}>
                                <Typography component="a" href="#simple-list" sx={{textDecoration:'none'}} variant={'shortcut'}>外套</Typography>
                            </Grid>
                            <Grid xs={4} md={2} sx={{ml:-1,mr:-3,p:0}}>
                                <Typography component="a" href="#simple-list" sx={{textDecoration:'none'}} variant={'shortcut'}>书架</Typography>
                            </Grid>
                            <Grid xs={4} md={2} sx={{ml:-1,mr:-3,p:0}}>
                                <Typography component="a" href="#simple-list" sx={{textDecoration:'none'}} variant={'shortcut'}>手机壳</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={2} md={4} />
                </Grid>
            </Grid>
    )
}

export default Header