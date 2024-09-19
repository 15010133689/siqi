'use client'
import Login from "../../login/page";
import {Dialog, DialogContent, DialogTitle, IconButton, Slide} from "@mui/material";
import {Close} from "@material-ui/icons";
import {forwardRef, useState} from "react";
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";

const LoginDialog = () => {
    const [open, setOpen] = useState(true);
    const router = useRouter()
    const tl = useTranslations('Login')
    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    const closeDialog = () => {
        setOpen(!open)
        router.back()
    }
    return(
        <Dialog
            fullWidth={true}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={closeDialog}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{tl('login')}</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={closeDialog}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <Close />
            </IconButton>
            <DialogContent>
                <Login />
            </DialogContent>
        </Dialog>

    )
}
export default LoginDialog