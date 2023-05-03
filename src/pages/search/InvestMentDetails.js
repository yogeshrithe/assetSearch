/* eslint-disable no-useless-escape */

import React, { useEffect } from 'react'
import { Box, Button, Card, Checkbox, Container, Grid, InputLabel, TextField, Typography, InputAdornment } from "@mui/material";
import Joi from "joi-browser";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from "@mui/styles";
import appConstants from '../../utils/appConstants'
import Mail from '../../components/assets/img/mail.png'
import Phone from '../../components/assets/img/phone.png'


export default function InvestmentDetails() {

    const navigate = useNavigate()

    const location = useLocation()

    const [apiToken, setApiToken] = React.useState('')
    const [userId, setUserId] = React.useState('')
    const [approxValue, setApproxValue] = React.useState(null)
    const [chargesPaidType, setChargesPaidType] = React.useState('')
    const [companyMasterId, setCompanyMasterId] = React.useState('')
    const [uniqueId, setUniqueId] = React.useState('');
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNo, setPhoneNo] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const [checked, setChecked] = React.useState(true)
    const [agreeTerms, setAgreeTerms] = React.useState('')
    const [open, setOpen] = React.useState(false)
    const [mobileError, setMobileError] = React.useState(false)
    const [emailError, setEmailError] = React.useState(false)
    const [isBack, setIsback] = React.useState(false)

    const useStyles = makeStyles({
        root: {
            '&$checked': {
                color: '#2cccc4',
            },
        },
        checked: {}
    });

    const classes = useStyles()


    const setCustomValidity = () => {
        const email = document.querySelector("#email")
        const mobileNo = document.querySelector("#mobileNo")

        email.setCustomValidity('');
        mobileNo.setCustomValidity('');

    }

    const checkValidity = () => {
        if (!isBack) {
            const mobileRegex = /^[0]?[789]\d{9}$/
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
            if (!mobileRegex.test(phoneNo)) {
                setMobileError(true)
            }
            if (!emailRegex.test(email)) {
                setEmailError(true)
            }
        }

    }


    useEffect(() => {

        if (JSON.parse(localStorage.getItem('userDetails')) === null) {
            localStorage.setItem("isFromInvestment", JSON.stringify(true))
            setOpen(true)
        }
        else {
            const customerDetails = JSON.parse(localStorage.getItem('customerData'))
            const userDetails = JSON.parse(localStorage.getItem('userDetails'))
            setApiToken(userDetails.api_token)
            setUserId(userDetails.id)

            if (!location.state) {
                setUniqueId(customerDetails.unique_code)
                setFullName(`${customerDetails.name_of_shareholder} ${customerDetails.surname_of_shareholder}`)
                setAddress(customerDetails.address_firstline)
                setAmount(customerDetails.view_charges)
                setChargesPaidType(customerDetails.charges_paid_type)
                setCompanyMasterId(customerDetails.id)
                setApproxValue(customerDetails.approx_value)
            }
            else if (location.state.data) {
                setFullName(location.state.data.user_name)
                setUniqueId(location.state.data.comapny_unique_id)
                setAddress(location.state.data.user_address)
                setAmount(location.state.data.charges_amount)
                setEmail(location.state.data.user_email)
                setPhoneNo(location.state.data.user_mobile)
                setApproxValue(location.state.data.share_approx_value)
                setChargesPaidType("2")
                setCompanyMasterId(location.state.data.comapny_master_id)
            }
        }
        window.scrollTo(0, 0)
    }, [])

    const getDate = () => {
        const date = new Date()
        const todayDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        return todayDate
    }

    const handleBack = () => {
        if (location.state) {
            navigate("/profile")
        }
        else {
            navigate("/customerData")
        }
    }

    const submitOrder = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            return false
        }
        else {
            if (checked === false) {
                setAgreeTerms("Please agree the terms and conditions")
                return false
            }
            else {
                const formData = new FormData()
                formData.append("api_token", apiToken)
                formData.append("user_id", userId)
                formData.append("comapny_unique_id", uniqueId)
                formData.append("share_approx_value", approxValue)
                formData.append("charges_paid", amount)
                formData.append("charges_paid_type", chargesPaidType)
                formData.append("date", getDate())
                formData.append("user_name", fullName)
                formData.append("user_mobile", phoneNo)
                formData.append("user_email", email)
                formData.append("user_address", address)
                formData.append("comapny_master_id", companyMasterId)
                axios.post(appConstants.SUBMIT_ORDER, formData, { headers: { "Content-Type": "multipart/form-data" } }).then((response) => {
                    if (response.data.result) {
                        navigate("/paymentResponse", { state: { payment: true, data: { fullName: fullName, phoneNo: phoneNo, email: email, date: getDate(), amount: amount, chargesPaidType: chargesPaidType } } })
                    }
                    else {
                        navigate("/paymentResponse", { state: { payment: false, data: { fullName: fullName, phoneNo: phoneNo, email: email, date: getDate(), amount: amount } } })
                    }
                })
            }
        }
    }

    return (
        <>
            <Container sx={{ mb: 4 }}>
                <Card sx={{ m: 4 }}>
                    <Box sx={{ backgroundColor: '#c0e4e3', height: 100, display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
                        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }} >
                            Investment Details
                        </Typography>
                    </Box>
                    <Typography variant="h4" gutterBottom sx={{ ml: 3, mt: 4, textAlign: 'center' }}>
                        Get Unclaimed Investment Details
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ ml: 3, mt: 4 }}>
                        On payment of the requisite fee following details will be sent over Email:
                    </Typography>
                    <Typography gutterBottom sx={{ ml: 4, mt: 2 }}>
                        *Name of the shareholder
                    </Typography>
                    <Typography gutterBottom sx={{ ml: 4, mt: 2 }}>
                        *Father's name of the shareholder(if available)
                    </Typography>
                    <Typography gutterBottom sx={{ ml: 4, mt: 2 }}>
                        *Registered address under the company record
                    </Typography>
                    <Typography gutterBottom sx={{ ml: 4, mt: 2 }}>
                        *Name of the company
                    </Typography>
                    <Typography gutterBottom sx={{ ml: 4, mt: 2 }}>
                        *Name of the shares and folio no
                    </Typography>
                    <Typography gutterBottom sx={{ ml: 4, mt: 2 }}>
                        *If you are unable to confirm the disclosed investment we will issue the full refund of the fee paid Unique id:
                    </Typography>
                    <Box component={"form"} onSubmit={submitOrder}>
                        <Container sx={{ mt: 5 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>Unique id:</b></InputLabel>
                                    <TextField fullWidth size="small" sx={{ backgroundColor: 'white' }} value={uniqueId} disabled required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>Full name of Payee*:</b></InputLabel>
                                    <TextField fullWidth size="small" sx={{ backgroundColor: 'white' }} value={fullName} disabled required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>Email*:(Details will be shared on this email)</b></InputLabel>
                                    <TextField fullWidth type={"email"} onBlur={() => checkValidity()} helperText={emailError ? <b style={{ color: 'red' }}>Email is not valid</b> : null} id="email" inputProps={{ pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$" }} onInvalid={(e) => e.target.setCustomValidity("Email is not correct")} size="small" sx={{ backgroundColor: 'white' }} value={email} onChange={(e) => { setEmail(e.target.value); setCustomValidity(); setEmailError(false) }} InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <img src={Mail} alt="" height={23} />
                                            </InputAdornment>
                                        ),
                                    }} required />

                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>Phone*:</b></InputLabel>
                                    <TextField fullWidth onBlur={() => checkValidity()} helperText={mobileError ? <b style={{ color: 'red' }}>Mobile No is not valid</b> : null} id="mobileNo" inputProps={{ pattern: "^[0]?[789]\\d{9}$" }} onInvalid={(e) => e.target.setCustomValidity("Mobile no is not correct")} size="small" sx={{ backgroundColor: 'white' }} value={phoneNo} onChange={(e) => { setPhoneNo(e.target.value); setCustomValidity(); setMobileError(false) }} InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <img src={Phone} alt="" height={23} />
                                            </InputAdornment>
                                        ),
                                    }} required />

                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <InputLabel><b>Address*:</b></InputLabel>
                                    <TextField fullWidth size="small" multiline rows={5} sx={{ backgroundColor: 'white' }} value={address} required />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <InputLabel><b>Amount to pay (including 18% GST)</b></InputLabel>
                                    <TextField fullWidth size="small" sx={{ backgroundColor: 'white' }} value={amount} disabled required />
                                </Grid>
                            </Grid>
                            <Box component='div' sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <Checkbox checked={checked} classes={{ root: classes.root, checked: classes.checked }} onChange={(event) => { setAgreeTerms(''); setChecked(event.target.checked) }}
                                    inputProps={{ 'aria-label': 'controlled' }} sx={{ mt: -0.5 }} />
                                <Typography sx={{ mt: 0.7 }}>I Agreed the Terms and Conditions</Typography>
                            </Box>
                            <Box component={"div"} >
                                <Typography sx={{ color: 'red', textAlign: 'center' }}>{agreeTerms !== '' ? agreeTerms : ''}</Typography>
                            </Box>
                            <Box component='div' sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 3 }}>
                                <Button variant='contained' sx={{ mr: 2 }} type="submit">PAY HERE</Button>
                                <Button variant='contained' onClick={() => { setIsback(true); handleBack() }}>Back</Button>
                            </Box>
                        </Container>
                    </Box>
                </Card>
            </Container>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Warning! You have Not logged in yet"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography>You have not logged in yet</Typography>
                        <Typography>Please Log in to see the Data</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => navigate("/login")} autoFocus variant='contained'>
                        Go to Login
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}