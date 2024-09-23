import PropTypes from "prop-types";
import {ButtonBase} from "@mui/material";
import Image from 'next/image'
import logo from '/public/icons/logo.svg'
import Link from 'next/link'
import styles from './index.module.css'

const Logo = ({sx,to}) => {
    return (
        <ButtonBase disableRipple component={Link} href={!to ? '/': to} sx={sx}>
            <Image src={logo} alt={'logo'} className={styles.image}/>
        </ButtonBase>
    )
}

Logo.propTypes = {
    sx: PropTypes.object,
    to: PropTypes.string
}

export default Logo