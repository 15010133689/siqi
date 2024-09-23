"use client"
import {
    Box, Button,
    Container,
    FormControl, IconButton,
    Input,
    InputAdornment, MenuItem, Select,
    Tab,
    Tabs,
    TextField,
    Typography
} from "@mui/material";
import styles from './styles.module.css'
import Grid from "@mui/material/Grid2";
import {useState} from "react";
import {AccountCircle} from "@material-ui/icons";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import vlog from "../../../public/icons/vlog.svg";
import wechat from "../../../public/icons/wechat.svg";
import qqIcon from "../../../public/icons/qq.svg";
import alipay from "../../../public/icons/alipay.svg";
import computer from "../../../public/icons/computer.svg";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import Image from "next/image";
import Countdown from "react-countdown";
import { useFormik} from "formik";
import * as yup from 'yup'
import { SignIn} from "../../../lib/actions";
import qrCode from '../../../public/qrcode/qrCode.png'

const currencies = [
    {
        value: '+86',
        label: '+86 中国大陆',
    },
    {
        value: '+852',
        label: '+852 中国香港',
    },
    {
        value: '+853',
        label: '+853 中国澳门',
    },
    {
        value: '+886',
        label: '+886 中国台湾',
    },
    {
        value: '+1',
        label: '+1 美国',
    }
];
const Login = () => {
    const [value, setValue] = useState('password');
    const [showPassword, setShowPassword] = useState(false);
    const [showWebPage, setShowWebPage] = useState(true);
    const [areaValue, setAreaValue] = useState('+86');
    const loginSchema = yup.object({
        username:yup.string('请输入用户名/邮箱/手机号').required("用户名/邮箱/手机号必填"),
        password:yup.string('请输入密码').required('密码必填')
    })

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleSelectChange = (event) => {
        setAreaValue(event.target.value);
    };
    const Completion = () => <span>重新发送</span>;
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completion />;
        }
        return (
            <span>{seconds}秒后重发</span>
        );
    };
    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        validationSchema:loginSchema,
        onSubmit: () => {
            try {
                SignIn(formik.values).then()
            }catch (err){
                throw new Error(err)
            }
        }
    })
    const renderPassLogin = () =>{
        return(
            <Grid container md={18}>
                <Grid md={18} sx={{position:'relative',mb:'20px',fontSize:'14px'}}>
                    <TextField
                        id="username"
                        name={'username'}
                        value={formik.values.username}
                        label="账号名/邮箱/手机号"
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid md={18} sx={{position:'relative',mb:'20px',fontSize:'14px'}}>
                        <TextField
                            variant={"standard"}
                            fullWidth
                            id="password"
                            name={'password'}
                            label={'密码'}
                            type={showPassword ? 'text' : 'password'}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                                endAdornment:(
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                </Grid>
                <Grid md={18}>
                    <Button variant="contained" className={styles.loginButton} sx={{width:'100%',background:'#f40',borderColor:'#f40',fontSize:'16px'}} type={'submit'}>登录</Button>
                </Grid>
                <Grid md={18} sx={{textAlign:'left',mt:'16px',mb:'0'}}>
                    <Typography sx={{mr:'5px'}} variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <Image src={vlog} alt={'vlog'} className={styles.loginIconStyle} />
                        <span className={styles.loginWord}>微博登录</span>
                    </Typography>
                    <Typography sx={{mr:'5px'}} variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <Image src={wechat} alt={'wechat'} className={styles.loginIconStyle} />
                        <span className={styles.loginWord}>微信登录</span>
                    </Typography>
                    <Typography sx={{mr:'5px'}} variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <Image src={alipay} alt={'shirt'} className={styles.loginIconStyle} />
                        <span className={styles.loginWord}>支付宝登录</span>
                    </Typography>
                    <Typography sx={{mr:'5px'}} variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <Image src={qqIcon} alt={'shirt'} className={styles.loginIconStyle} />
                        <span className={styles.loginWord}>QQ登录</span>
                    </Typography>
                </Grid>
                <Grid md={18} className={styles.loginLinks}>
                    <Typography sx={{mr:'10px'}} variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <span className={styles.loginWord}>忘记密码</span>
                    </Typography>
                    <Typography sx={{mr:'10px'}} variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <span className={styles.loginWord}>忘记账号名</span>
                    </Typography>
                    <Typography variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <span className={styles.loginWord}>免费注册</span>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
    const renderMessLogin = () =>{
        return(
            <Grid container md={18}>
                <Grid md={18} sx={{position:'relative',mb:'20px',fontSize:'14px'}}>
                    <PhoneIphoneIcon sx={{mt:'14px'}}/>
                    <FormControl sx={{ m: 1, width:'25%'}}>
                        <Select
                            labelId="demo-simple-select-error-label"
                            id="demo-simple-select-error"
                            value={areaValue}
                            label="区域"
                            onChange={handleSelectChange}
                            renderValue={(value) => `${value}`}
                            variant="standard"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        id="input-with-icon-textfield"
                        placeholder={'请输入手机号'}
                        sx={{width:'60%',mt:'8px'}}
                        variant="standard"
                    />
                </Grid>
                <Grid md={18} sx={{position:'relative',mb:'20px',fontSize:'14px'}}>
                    <FormControl variant="standard" sx={{width:'100%'}}>
                        <Input
                            id="standard-adornment-password"
                            startAdornment={
                                <InputAdornment position="start">
                                    <LooksOneIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <Button
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                       获取验证码
                                    </Button>
                                    <Countdown
                                        zeroPadTime={1}
                                        renderer={renderer}
                                        date={Date.now() + 59000} />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Grid>
                <Grid md={18}>
                    <Button variant="contained" className={styles.loginButton} sx={{width:'100%',background:'#f40',borderColor:'#f40',fontSize:'16px'}}>登录/注册</Button>
                </Grid>
                <Grid md={18} sx={{textAlign:'left',mt:'16px',mb:'0'}}>
                    <Typography sx={{mr:'5px'}} variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <Image src={vlog} alt={'shirt'} className={styles.loginIconStyle} />
                        <span className={styles.loginWord}>微博登录</span>
                    </Typography>
                    <Typography sx={{mr:'5px'}} variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <Image src={wechat} alt={'shirt'} className={styles.loginIconStyle} />
                        <span className={styles.loginWord}>微信登录</span>
                    </Typography>
                    <Typography sx={{mr:'5px'}} variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <Image src={alipay} alt={'shirt'} className={styles.loginIconStyle} />
                        <span className={styles.loginWord}>支付宝登录</span>
                    </Typography>
                    <Typography sx={{mr:'5px'}} variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <Image src={qqIcon} alt={'shirt'} className={styles.loginIconStyle} />
                        <span className={styles.loginWord}>QQ登录</span>
                    </Typography>
                </Grid>
                <Grid md={18} className={styles.loginLinks}>
                    <Typography variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <span className={styles.loginWord}>免费注册</span>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
    const renderQrLogin = () =>{
        return(
            <Grid container md={18}>
                <Grid md={18} sx={{boxShadow:'0 0 8px #c6c4ce'}}>
                    <Image src={qrCode} alt={'qrCode'} className={styles.qrPageImage}/>
                </Grid>

                <Grid md={18} className={styles.loginLinks}>
                    <Typography variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <span className={styles.loginWord}>密码登录</span>
                    </Typography>
                    <Typography variant={'tbShortcut'} component={'a'} href={'#'} className={styles.loginStyle}>
                        <span className={styles.loginWord}>免费注册</span>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
    const renderWebPage = () => {
        return(
            <Grid container md={18} className={styles.loginContainer}>
                {/*tabs*/}
                <Grid md={18}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        sx={{mb:'20px',mt:'4px'}}
                    >
                        <Tab value="password" label="密码登录" className={styles.tab}/>
                        <Tab value="message" label="短信登录" className={styles.tab}/>
                    </Tabs>
                </Grid>
                {/*forms*/}
                {value === 'password' ? renderPassLogin() : renderMessLogin()}
            </Grid>
        )
    }
    const renderQrPage = () => {
        return(
            <Grid container md={18} className={styles.loginContainer}>
                {/*tabs*/}
                <Grid md={18}>
                    <Typography className={styles.tab}>手机扫码，安全登录</Typography>
                </Grid>
                {/*forms*/}
                {renderQrLogin()}
            </Grid>
        )
    }

    return(
       <Box className={styles.backStyle}>
           <Container className={styles.container}>
               <Box className={styles.login}>
                   <Container className={styles.qrCode}>
                       {showWebPage ? <Image src={qrCode} alt={'qrCode'} className={styles.qrImg} onClick={() => setShowWebPage(!showWebPage)}/> : <Image src={computer} alt={'computer'} className={styles.qrImg} onClick={() => setShowWebPage(!showWebPage)}/>}
                       {showWebPage ?
                           <Box className={styles.loginTip}>
                               <div className={styles.triangle} />
                               <Typography className={styles.tipFont}>扫码登录更安全</Typography>
                           </Box> : null}
                   </Container>
                   <form onSubmit={formik.handleSubmit} >
                       {showWebPage ? renderWebPage() : renderQrPage()}
                   </form>
               </Box>
           </Container>
       </Box>
    )
}
export default Login