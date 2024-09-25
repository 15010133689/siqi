import {AppBar, Stack, Toolbar,Paper} from "@mui/material";
import Search from "./Search";
import styles from './styles.module.css'
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Location from "@/components/layout/header/location";
import {useTranslations} from "next-intl";
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
                    <Paper className={styles.location}>
                        <Location />
                    </Paper>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header