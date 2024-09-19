'use client'
import {Typography} from "@mui/material";
import {Grid2 as Grid} from "@mui/material";
import {SignOut} from "../../../../lib/actions";
import { useSession } from "next-auth/react"
import styles from './styles.module.css'
import {useLocale, useTranslations} from "next-intl";
import {Link} from '../../../../navigation'
import {useEffect} from "react";

const LoginSection =   () => {
    const { data: session } = useSession()
    const tl = useTranslations("Login")
    const locale = useLocale()
    if (session?.user) {
        return (
            <Grid xs={2} md={1} sx={{pl:0,pr:0,mt:'5px'}}>
                <Typography variant={'tbShortcut'} color={'error'}>{session.user.name}&nbsp;&nbsp;&nbsp;</Typography>
                <form action={SignOut} className={styles.signOutForm}>
                    <Typography variant={'tbShortcut'} component={'button'} type={'submit'} className={styles.signOutButton}>{tl('logout')}</Typography>
                </form>
            </Grid>
        )
    }
    return (
        <Grid xs={2} md={1} sx={{pl:0,pr:0,mt:'5px'}}>
            <Link href={'/login'} style={{textDecoration:'none'}} locale={locale}>
                <Typography variant={'tbShortcut'} color={'error'}>{tl('login')}&nbsp;&nbsp;&nbsp;</Typography>
            </Link>
        </Grid>
    )
}

export default LoginSection