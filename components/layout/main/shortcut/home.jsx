"use client"
import {Typography} from "@mui/material";
import {Grid2 as Grid} from "@mui/material";
import Link from "next/link";

const Home = () => {
    return(
        <Grid xs={2} md={1} sx={{mt:'5px'}}>
            <Link href={'/home'} style={{textDecoration:'none'}}>
                <Typography variant={'tbShortcut'} color={'error'} >E商城首页</Typography>
            </Link>
        </Grid>
    )
}
export default Home