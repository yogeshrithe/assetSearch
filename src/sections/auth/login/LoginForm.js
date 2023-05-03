import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { useDispatch } from 'react-redux';
// @mui
import { Stack, TextField, Checkbox, InputLabel, Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios'
import OtpInput from 'react-otp-input';
import appConstants from '../../../utils/appConstants';
import LoginImage from '../../../components/assets/img/login.avif'
import { SET_PROFILE_DETAILS } from '../../../redux/actions';

// 6787657898

// ----------------------------------------------------------------------

export default function LoginForm({ handleNavigate }) {
  const navigate = useNavigate();
  const [mobileno, setMobileNo] = useState('');
  const [login, setLogin] = React.useState(false)
  const [otpNo, setOTPNO] = React.useState('')
  const [errorText, setErrorText] = React.useState(null)
  const [isErrorText, setIsErrorText] = React.useState(false)
  const [buttonText, setButtonText] = React.useState('Login')
  const [rememberMe, setRememberme] = React.useState(true)
  const [isLogin, setIslogin] = React.useState(false)

  const dispatch = useDispatch()

  

  const useStyles = makeStyles({
    root: {
      '&$checked': {
        color: '#2cccc4',
      },
    },
    checked: {}
  });

  const classes = useStyles()

  const handleClick = () => {
    if (!login) {
      if (mobileno !== '') {
        const formData = new FormData();
        formData.append('mobile_no', mobileno)
        axios.post(appConstants.OTP_LOGIN_URL, formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
          if (response.data.result) {
            setButtonText('Verify')
            setIsErrorText(false)
            setLogin(true)

          }
          else {
            setIsErrorText(true)
            setErrorText(response.data.reason)
          }
        })
      }
      else {
        setErrorText("Enter Mobile no")
      }
    }
    else if (login) {
      if (otpNo !== '') {
        const formData = new FormData();
        formData.append('mobile_no', mobileno)
        formData.append('otp_number', otpNo)
        formData.append('notification_token', 'asdasdasd')
        formData.append('device', 2)
        axios.post(appConstants.OTP_VERIFICATION_URL, formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
          if (response.data.result) {
            dispatch(SET_PROFILE_DETAILS(response.data.user_data))
            // localStorage.setItem('userDetails', JSON.stringify(response.data.user_data))
            localStorage.setItem('name', `${response.data.user_data.first_name} ${response.data.user_data.last_name}`)
            localStorage.setItem("isLogin", "true")
            localStorage.setItem("rememberMe", rememberMe)
            if (JSON.parse(localStorage.getItem("isFromInvestment")) !== null) {
              if (JSON.parse(localStorage.getItem("isFromInvestment")) === true) {
                localStorage.removeItem("isFromInvestment")
                navigate("/investmentDetails")
              }
            }
            else {
              navigate("/home")
            }
          }
          else {
            setIsErrorText(true)
            setErrorText(response.data.reason)
          }
        })
      }
      else {
        setErrorText("enter OTP")
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin)
  }, [])

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img src={LoginImage} alt="" height={200} />
      </Box>
      <Stack spacing={1}>
        {buttonText === 'Login' ? <><InputLabel >Mobile no<b style={{ color: 'red' }}>*</b></InputLabel>
          <TextField onChange={(e) => { setErrorText(null); setMobileNo(e.target.value) }} value={mobileno} /></> :
          <>
            <InputLabel sx={{ textAlign: 'center' }}>Enter 6 Digit OTP No<b style={{ color: 'red' }}>*</b></InputLabel>
            <OtpInput
              onChange={(e) => { setErrorText(null); setOTPNO(e) }}
              value={otpNo}
              numInputs={6}
              inputStyle={{
                width: '2.8rem',
                height: '2.8rem',
                margin: '7px',
                borderRadius: '8px',
                border: '2px solid #2cccc4'
              }}
              containerStyle={{ justifyContent: 'center', width: '100%', marginTop: '10px' }}
            /></>}
        <p style={{ color: 'red', textAlign: buttonText === 'Verify' ? 'center' : '' }}>{errorText}</p>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Box>
          <Checkbox name="remember" classes={{ root: classes.root, checked: classes.checked }} label="Remember me" checked={rememberMe} onChange={(e) => { setRememberme(e.target.checked); localStorage.setItem("rememberMe", e.target.checked) }} /><span>Remember Me</span>
        </Box>
        <Link variant="subtitle2" underline="hover" style={{ color: '#2cccc4', textDecoration: 'none', }}>
          Forgot password?
        </Link>
      </Stack >

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        {buttonText}
      </LoadingButton>
      {buttonText === 'Login' ? <><Box direction={"row"} sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ mt: 0.5, textAlign: 'center' }}>Don’t have an account? {''}&nbsp;</Typography>
        <NavLink style={{ color: '#2cccc4', textDecoration: 'none', }} onClick={() => handleNavigate(false)}> Register Here</NavLink>{' '}&nbsp;
      </Box>
        <Box direction={"row"} sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ mt: 0.5, textAlign: 'center' }}>Go To home Page {''}&nbsp;</Typography>
          <Link style={{ color: '#2cccc4', textDecoration: 'none', }} to={"/home"}> Home</Link>{' '}&nbsp;
        </Box></> : <Box direction={"row"} sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ mt: 0.5, textAlign: 'center' }}>Back to Login {''}&nbsp;</Typography>
        <Link style={{ color: '#2cccc4', textDecoration: 'none', }} onClick={() => { setButtonText("Login"); setLogin(false) }}> Login</Link>{' '}&nbsp;
      </Box>}
    </>
  );
}
