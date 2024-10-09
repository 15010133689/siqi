import {Box, Typography} from "@mui/material";
import styles from "./home/home.module.css";
import Grid from "@mui/material/Grid2";
import LuckyPrize from "@/components/lucky-prize";
import GridPrize from "@/components/grid-prize";

const Index = () => {
  return (  <>
    <Box className={styles.backStyle} >
      <Grid container spacing={3} sx={{textAlign:'-webkit-center'}}>
        <Grid size={12}>
          <Typography variant={'h1'}>http://www.searchsingle.top</Typography>
        </Grid>
        <Grid size={12} >
          <LuckyPrize />
        </Grid>
        <Grid size={12}>
          <GridPrize />
        </Grid>
      </Grid>
    </Box>
  </>)
}
export default Index