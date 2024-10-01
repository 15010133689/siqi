import {AppBar, Stack, Toolbar,Paper} from "@mui/material";
import Search from "./Search";
import styles from './styles.module.css'
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Location from "@/components/layout/header/location";
import {useTranslations} from "next-intl";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
const Header = () => {
    const tl = useTranslations('Header')
    return(
        <AppBar position="static">
            <Toolbar>
                <Stack className={styles.links}>
                    <Grid container spacing={3}>
                        <Grid md={2}>
                            <Typography variant={'h4'} component={'a'} href={'/'} className={styles.typography}>
                                {tl('home')}
                            </Typography>
                        </Grid>
                        <Grid md={2}>
                            <Typography variant={'h4'} component={'a'} href={process.env.NEXT_PUBLIC_SHOP_DOMAIN} target={'_blank'} className={styles.typography}>
                                {tl('shop')}
                            </Typography>
                        </Grid>
                        <Grid md={2}>
                            <Typography variant={'h4'} component={'a'} href={'/'} className={styles.typography}>
                                {tl('tech stack')}
                            </Typography>
                        </Grid>
                        <Grid md={2}>
                            <Typography variant={'h4'} component={'a'} href={'/'} className={styles.typography}>
                                {tl('about')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack className={styles.search}>
                    <Paper >
                        <Search/>
                    </Paper>
                </Stack>
                <Stack className={styles.translate}>
                    <Grid container spacing={1.5}>
                        <Grid md={2}>
                            <Paper className={styles.location}>
                                <Location />
                            </Paper>
                        </Grid>
                        <Grid md={2}>
                            <Paper className={styles.location}>
                                <Link href="https://github.com/15010133689" target={'_blank'}>
                                    <GitHubIcon />
                                </Link>
                            </Paper>
                        </Grid>
                    </Grid>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header