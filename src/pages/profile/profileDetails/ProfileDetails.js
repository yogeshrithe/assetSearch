/* eslint-disable no-useless-escape */

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { useDispatch } from 'react-redux';
import { Backdrop, Box, Button, Card, Checkbox, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, Grid, InputLabel, TextField, Typography } from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import axios from 'axios';
import appConstants from '../../../utils/appConstants'
import { SET_PROFILE_DETAILS } from '../../../redux/actions';


export default function ProfileDetails() {

    const [checked, setChecked] = React.useState(false)
    const [userId, setUserId] = React.useState('')
    const [userFirstName, setUserFirstName] = React.useState('')
    const [userLastName, setUserLastName] = React.useState('')
    const [userEmail, setUserEmail] = React.useState('')
    const [userMobileNo, setUserMobileNo] = React.useState('')
    const [userAddress, setUserAddress] = React.useState('')
    const [userPanNumber, setUserPanNumber] = React.useState('')
    const [userAadharNumber, setUserAadharNumber] = React.useState('')
    const [userBankName, setUserBankName] = React.useState('')
    const [userBranchName, setUserBranchName] = React.useState('')
    const [userAccountNumber, setUserAccountNumber] = React.useState('')
    const [userIfscCode, setUserIfscCode] = React.useState('')
    const [userIfDeceased, setUserIfDeceased] = React.useState('')
    const [userPersonName, setUserPersonName] = React.useState('')
    const [userApiToken, setUserApiToken] = React.useState('')
    const [userDeathCertificate, setUserDeathCertificate] = React.useState('')
    const [profileCircularProgress, setProfileCircularProgress] = React.useState(false)
    const [profileDialogContent, setProfileDialogContent] = React.useState(null)
    const [profileAlert, setProfileAlert] = React.useState(false)
    const [userPersonNameError, setUserPersonNameError] = React.useState(false)
    const [userDeathCertificateError, setUserDeathCertificateError] = React.useState(false)
    const [isUpdateProfile, setIsUpdateProfile] = React.useState(false)
    const [isTokenExpired, setTokenExpired] = React.useState(false)
    const [mobileError, setMobileError] = React.useState(false)
    const [emailError, setEmailError] = React.useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const useStyles = makeStyles({
        root: {
            '&$checked': {
                color: '#2cccc4',
            },
        },
        checked: {}
    });


    const setCustomValidity = () => {
        const firstName = document.querySelector('#firstName');
        const lastName = document.querySelector("#lastName")
        const email = document.querySelector("#email")
        const mobileNo = document.querySelector("#mobileNo")
        const panNo = document.querySelector("#panNo")
        const aadharNo = document.querySelector("#aadharNo")
        const bankName = document.querySelector("#bankName")
        const branchName = document.querySelector("#branchName")
        const accountNo = document.querySelector("#accountNo")
        const ifscCode = document.querySelector("#ifscCode")
        firstName.setCustomValidity('');
        lastName.setCustomValidity('');
        email.setCustomValidity('');
        mobileNo.setCustomValidity('');
        panNo.setCustomValidity('');
        aadharNo.setCustomValidity('');
        bankName.setCustomValidity('');
        branchName.setCustomValidity('');
        accountNo.setCustomValidity('');
        ifscCode.setCustomValidity('');
    }

    const classes = useStyles()

    const handleChange1 = () => {
        setProfileAlert(false);
        setProfileCircularProgress(false)
    };

    const gotoLogin = () => {
        setTokenExpired(false)
        navigate("/home")
    }

    const handleChecked = (e) => {
        if (e.target.checked === true) {
            setUserIfDeceased("1")
            setChecked(true)
        }
        else if (e.target.checked === false) {
            setUserPersonName('')
            setUserDeathCertificate('')
            setUserIfDeceased("0")
            setChecked(false)
        }
    }

    const updateProfile = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            return false
        }
        else {
            setIsUpdateProfile(true)
            if (!checked || (checked && userPersonName !== '' && userDeathCertificate !== '')) {
                const formData = new FormData()
                formData.append("user_id", userId)
                formData.append("first_name", userFirstName)
                formData.append("last_name", userLastName)
                formData.append("email", userEmail)
                formData.append("mobile_no", userMobileNo)
                formData.append("address", userAddress)
                formData.append("pan_number", userPanNumber)
                formData.append("aadhar_number", userAadharNumber)
                formData.append("bank_name", userBankName)
                formData.append("branch_name", userBranchName)
                formData.append("account_number", userAccountNumber)
                formData.append("ifsc_code", userIfscCode)
                formData.append("if_deceased", userIfDeceased)
                formData.append("person_name", userPersonName)
                formData.append("api_token", userApiToken)
                formData.append("death_certificate", userDeathCertificate)
                axios.post(appConstants.UPDATE_PROFILE, formData, { headers: { "Content-Type": 'multipart/form-data' } }).then((response) => {
                    setProfileCircularProgress(true)
                    setTimeout(() => {
                        setProfileCircularProgress(false)
                        setProfileAlert(true)
                        if (response.data.result === true) {
                            setProfileDialogContent(true)
                            dispatch(SET_PROFILE_DETAILS(response.data.user_data))
                            localStorage.setItem('name', `${userFirstName} ${userLastName}`)
                        }
                        else if (response.data.result === false) {
                            setProfileDialogContent(false)
                        }
                    }, 2000)

                })
            }
            else {
                setUserPersonNameError(true)
                setUserDeathCertificateError(true)
            }
        }



    }

    const checkValidity = () => {
        const mobileRegex = /^[0]?[789]\d{9}$/
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        if (!mobileRegex.test(userMobileNo)) {
            setMobileError(true)
        }
        console.log(emailRegex.test(userEmail))
        if (!emailRegex.test(userEmail)) {
            setEmailError(true)
        }
    }

    React.useEffect(() => {
        const formData = new FormData()
        formData.append("user_id", JSON.parse(localStorage.getItem('userDetails')).id)
        formData.append("api_token", JSON.parse(localStorage.getItem('userDetails')).api_token)
        axios.post(appConstants.GET_PROFILE, formData, { headers: { "Content-Type": 'multipart/form-data' } }).then((response) => {
            if (response.data.result) {
                setUserId(response.data.user_data.id)
                setUserFirstName(response.data.user_data.first_name)
                setUserLastName(response.data.user_data.last_name)
                setUserEmail(response.data.user_data.email)
                setUserMobileNo(response.data.user_data.mobile_no)
                setUserAddress(response.data.user_data.address)
                setUserPanNumber(response.data.user_data.pan_number)
                setUserAadharNumber(response.data.user_data.aadhar_number)
                setUserBankName(response.data.user_data.bank_name)
                setUserBranchName(response.data.user_data.branch_name)
                setUserAccountNumber(response.data.user_data.account_number)
                setUserIfscCode(response.data.user_data.ifsc_code)
                setUserIfDeceased(response.data.user_data.if_deceased)
                setUserPersonName(response.data.user_data.person_name)
                setUserApiToken(response.data.user_data.api_token)
                setUserDeathCertificate(response.data.user_data.death_certificate)
                if (response.data.user_data.if_deceased === '1') {
                    setChecked(true)
                }
                else if (response.data.user_data.if_deceased === '0') {
                    setChecked(false)
                }
            }
            else if (!response.data.result) {
                setTokenExpired(true)
                localStorage.removeItem('userDetails')
                localStorage.removeItem("name")
                setTimeout(() => {
                    gotoLogin()
                }, 1000)
            }
        })
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Box component={"form"} onSubmit={updateProfile}>
                <Typography variant='h5' sx={{ ml: 3, mt: 3 }}>Personal Details</Typography>
                <Container sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <InputLabel><b>First Name</b></InputLabel>
                            <TextField required fullWidth id="firstName" inputProps={{ pattern: "^[a-zA-Z]+$" }} onInvalid={(e) => e.target.setCustomValidity("First name is not correct")} size='small' value={userFirstName} onChange={(e) => { setUserFirstName(e.target.value); setCustomValidity() }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel><b>Last Name</b></InputLabel>
                            <TextField required fullWidth id="lastName" inputProps={{ pattern: "^[a-zA-Z]+$" }} onInvalid={(e) => e.target.setCustomValidity("Last name is not correct")} size='small' value={userLastName} onChange={(e) => { setUserLastName(e.target.value); setCustomValidity() }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel><b>Mobile No</b></InputLabel>
                            <TextField required fullWidth onBlur={() => checkValidity()} id="mobileNo" helperText={mobileError ? <b style={{ color: 'red' }}>Mobile No is not valid</b> : null} inputProps={{ pattern: "^[0]?[789]\\d{9}$" }} onInvalid={(e) => e.target.setCustomValidity("Mobile no is not correct")} size='small' value={userMobileNo} onChange={(e) => { setUserMobileNo(e.target.value); setCustomValidity(); setMobileError(false) }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel><b>Email</b></InputLabel>
                            <TextField required type={"email"} onBlur={() => checkValidity()} helperText={emailError ? <b style={{ color: 'red' }}>Email is not valid</b> : null} id="email" inputProps={{ pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$" }} onInvalid={(e) => e.target.setCustomValidity("Email is not correct")} fullWidth size='small' value={userEmail} onChange={(e) => { setUserEmail(e.target.value); setCustomValidity(); setEmailError(false) }} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <InputLabel><b>Address</b></InputLabel>
                            <TextField required fullWidth size='small' multiline rows={5} value={userAddress} onChange={(e) => setUserAddress(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel><b>Pan No</b></InputLabel>
                            <TextField required fullWidth id="panNo" inputProps={{ pattern: "[A-Z]{5}[0-9]{4}[A-Z]{1}" }} onInvalid={(e) => e.target.setCustomValidity("Pan no is not correct")} size='small' value={userPanNumber} onChange={(e) => { setUserPanNumber(e.target.value); setCustomValidity() }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel><b>Aadhar No</b></InputLabel>
                            <TextField required fullWidth id="aadharNo" inputProps={{ pattern: "^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$" }} onInvalid={(e) => e.target.setCustomValidity("Aadhar no is not correct")} size='small' value={userAadharNumber} onChange={(e) => { setUserAadharNumber(e.target.value); setCustomValidity() }} />
                        </Grid>
                    </Grid>
                </Container>
                <Typography variant='h5' sx={{ ml: 3, mt: 5 }}>Bank Details</Typography>
                <Container sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <InputLabel><b>Bank Name</b></InputLabel>
                            <TextField required fullWidth id="bankName" inputProps={{ pattern: "^[a-zA-Z\\s]*$" }} onInvalid={(e) => e.target.setCustomValidity("Bank name is not correct")} size='small' value={userBankName} onChange={(e) => { setUserBankName(e.target.value); setCustomValidity() }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel><b>Branch Name</b></InputLabel>
                            <TextField required fullWidth id="branchName" inputProps={{ pattern: "^[a-zA-Z\\s]*$" }} onInvalid={(e) => e.target.setCustomValidity("Branch name is not correct")} size='small' value={userBranchName} onChange={(e) => { setUserBranchName(e.target.value); setCustomValidity() }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel><b>Account Number</b></InputLabel>
                            <TextField required fullWidth id="accountNo" inputProps={{ pattern: "^[0-9]{9,18}$" }} onInvalid={(e) => e.target.setCustomValidity("Account no is not correct")} size='small' value={userAccountNumber} onChange={(e) => { setUserAccountNumber(e.target.value); setCustomValidity() }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel><b>IFSC Code</b></InputLabel>
                            <TextField required fullWidth id="ifscCode" inputProps={{ pattern: "^[A-Z]{4}0[A-Z0-9]{6}$" }} onInvalid={(e) => e.target.setCustomValidity("Ifsc code is not correct")} size='small' value={userIfscCode} onChange={(e) => { setUserIfscCode(e.target.value); setCustomValidity() }} />
                        </Grid>
                    </Grid>
                </Container>
                <Box component={"div"} sx={{ display: 'flex' }}>
                    <Typography variant='h5' sx={{ ml: 3, mt: 5 }}>IF Deceased {checked === true ? 'YES' : 'NO'}</Typography>
                    <Checkbox checked={checked} classes={{ root: classes.root, checked: classes.checked }} onChange={(e) => handleChecked(e)}
                        inputProps={{ 'aria-label': 'controlled' }} sx={{ mt: 4.5 }} />
                </Box>
                <Container sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <InputLabel><b>Person Name</b></InputLabel>
                            <TextField fullWidth id="personName" inputProps={{ pattern: "^[0]?[789]\d{9}$" }} onInvalid={(e) => e.target.setCustomValidity("Mobile no is not correct")} size='small' value={userPersonName} error={userPersonNameError} helperText={checked && userPersonName === '' && isUpdateProfile ? "Enter Person Name" : ''} onChange={(e) => { setIsUpdateProfile(false); setUserPersonNameError(false); setUserPersonName(e.target.value);; setCustomValidity() }} disabled={!checked} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel><b>Death Certificate</b></InputLabel>
                            <TextField fullWidth size='small' value={userDeathCertificate} error={userDeathCertificateError} helperText={checked && userDeathCertificate === '' && isUpdateProfile ? "Enter Death Certificate" : ''} onChange={(e) => { setIsUpdateProfile(false); setUserDeathCertificateError(false); setUserDeathCertificate(e.target.value); setCustomValidity() }} disabled={!checked} />
                        </Grid>
                    </Grid>
                </Container>
                <Box component={"div"} sx={{ mt: 5, textAlign: 'center', mb: 4 }}>
                    <Button variant='contained' type='submit'>Update Profile</Button>
                </Box>
            </Box>
            <Backdrop
                sx={{ color: '#fff' }}
                open={profileCircularProgress}
            >
                <CircularProgress sx={{ color: '#2cccc4' }} />
            </Backdrop>
            <Dialog open={profileAlert} aria-labelledby="alert-dialog-title" onClose={handleChange1}
                aria-describedby="alert-dialog-description"
                sx={{ maxWidth: 1900 }}>
                <DialogContent>
                    <DialogContentText sx={{ textAlign: 'center' }}>
                        {profileDialogContent ?
                            <><CheckCircleOutlineOutlinedIcon color='success' sx={{ height: 80, width: 80 }} />
                                <Typography variant='h3' sx={{ mt: 1 }} color="#3CB371">Done</Typography>
                                <Typography sx={{ mt: 2 }}>Profile Updated Successfully</Typography></> :
                            <><ErrorOutlineOutlinedIcon color='error' sx={{ height: 80, width: 80 }} />
                                <Typography sx={{ mt: 1 }}>Error</Typography>
                                <Typography sx={{ mt: 2 }}>Profile not Updated Successfully</Typography></>}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleChange1}>Ok</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={isTokenExpired} aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ maxWidth: 1900 }}>
                <DialogContent>
                    <DialogContentText sx={{ textAlign: 'center' }}>
                        <Typography>Token Expired</Typography>
                        <Typography>Please Login To see Profile</Typography>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}