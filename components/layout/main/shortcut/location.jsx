"use client"
import {Grid2 as Grid} from "@mui/material";
import {ListItem, ListItemButton, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Virtuoso} from "react-virtuoso";
import {useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import {Link, usePathname} from '../../../../navigation'

const areas = [{'name':'zh_CN'},{'name':'en_US'}]
const Location = () => {
    const [locationOpen,setLocationOpen] = useState(false)
    const tl = useTranslations('Location')
    const pathname = usePathname()
    const locale = useLocale()
    function renderRow(index,area) {
        return (
            <ListItem key={index} component="div" disablePadding sx={{height:'29px'}}>
                <ListItemButton>
                    <Link href={pathname} locale={area.name} style={{textDecoration:'none'}}>
                        <Typography variant={'tbShortcut'}>{tl(area.name)}</Typography>
                    </Link>
                </ListItemButton>
            </ListItem> );
    }

    return(
        <Grid xs={2} md={1} sx={{ml:0,pl:0,mt:'5px',bgcolor:locationOpen ? '#fff' :null}} onMouseEnter={() => setLocationOpen(!locationOpen)} onMouseLeave={() => setLocationOpen(!locationOpen)}>
            <Typography variant={'tbShortcut'}>{tl(locale)}<ExpandMoreIcon sx={{fontSize:'12px',ml:1}}/></Typography>
            <Virtuoso
                style={{display:locationOpen ? 'block': 'none',marginTop:'9px',zIndex:1999,height: "280px",width:'250px',backgroundColor:'#fff',position:'absolute'}}
                totalCount={areas.length}
                data={areas}
                itemContent={(index,area) => renderRow(index,area)}
                onMouseLeave={() => setLocationOpen(!locationOpen)}/>
        </Grid>
    )
}

export default Location