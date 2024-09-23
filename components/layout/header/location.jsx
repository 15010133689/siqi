"use client"
import Grid from "@mui/material/Grid2";
import {ListItem, ListItemButton, Typography} from "@mui/material";
import {useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import {Link, usePathname} from 'navigation'
import {Virtuoso} from "react-virtuoso";
import TranslateIcon from "@mui/icons-material/Translate";
import {locales} from "navigation";

const Location = () => {
    const [locationOpen,setLocationOpen] = useState(false)
    const tl = useTranslations('Location')
    const pathname = usePathname()
    const locale = useLocale()
    function renderRow(index,area) {
        return (
            <ListItem key={index} component="div" disablePadding sx={{height:'29px'}}>
                <ListItemButton>
                    <Link href={pathname} locale={area} style={{textDecoration:'none'}}>
                        <Typography variant={'location'}>{tl(area)}</Typography>
                    </Link>
                </ListItemButton>
            </ListItem> );
    }


    return(
        <Grid xs={2} md={1} sx={{ml:0,pl:0,mt:'5px'}} onClick={() => setLocationOpen(!locationOpen)}>
            <TranslateIcon />
            <Virtuoso
                style={{display:locationOpen ? 'block': 'none',zIndex:1999,height: "280px",width:'200px',backgroundColor:'#3874cb',position:'absolute',marginTop:'8px',marginLeft:'-8px'}}
                totalCount={locales.length}
                data={locales}
                itemContent={(index,area) => renderRow(index,area)}/>
        </Grid>
    )
}

export default Location