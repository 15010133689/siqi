"use client"
import styles from "./styles.module.css"
import {Box, Typography} from "@mui/material";
import { LuckyWheel, LuckyGrid } from '@lucky-canvas/react'

const Home = () => {
    return(
           <Box className={styles.backStyle}>
              <LuckyWheel width="300px" height="300px"></LuckyWheel>
              <LuckyGrid width="300px" height="300px"></LuckyGrid>
             {/*<SlotMachine width="300px" height="300px"></SlotMachine>*/}
           </Box>
    )
}
export default Home