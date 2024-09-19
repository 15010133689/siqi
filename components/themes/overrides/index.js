import {merge} from 'lodash'
import Button from './Button'
import ListItemText from "./ListItemText";
import Paper from "./Paper";
import Badge from "./Badge";
import Tab from './Tab'

const ComponentOverrides = (theme) => {

    return(
        merge(
            Button(theme),
            ListItemText(theme),
            Paper(theme),
            Badge(theme),
            Tab(theme)
        )
    )
}
export default ComponentOverrides
