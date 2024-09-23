import Grid from "@mui/material/Grid2";
import styles from './index.module.css'
import {Typography} from "@mui/material";

const Footer = () => {

    return(
        <Grid className={styles.footer} sx={{mt:0}} container columns={18} spacing={3} className={styles.copyRight}>
            <Typography component={'a'} href={'#'}>
                Elliot-15010133689[Copyright © 2024-2024]
            </Typography>
        </Grid>
    )
}
export default Footer