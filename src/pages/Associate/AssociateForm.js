import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Card, Container, Divider, Grid, InputLabel, TextField, Typography, Dialog, DialogActions, DialogContent, DialogContentText, Autocomplete, InputAdornment, Fab } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import appConstants from '../../utils/appConstants'

export default function AssociateForm() {

    const [open, setOpen] = React.useState(false)
    const [fname, setFname] = React.useState('')
    const [lname, setLname] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [mobileNo, setMobileNo] = React.useState('')
    const [birthdate, setBirthdate] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [country, setCountry] = React.useState('')
    const [state, setState] = React.useState('')
    const [city, setCity] = React.useState('')
    const [pinCode, setPinCode] = React.useState('')
    const [statesData, setStatesData] = React.useState([])
    const [citiesData, setCitiesData] = React.useState([])
    const [countriesData, setCountriesData] = React.useState([])
    const [aadharNo, setAadharno] = React.useState('')
    const [aadharCopy, setAadharCopy] = React.useState('')
    const [panNo, setPanno] = React.useState('')
    const [panCopy, setPanCopy] = React.useState('')
    const [bankName, setBankname] = React.useState('')
    const [ifscCode, setIfsccode] = React.useState('')
    const [accountNo, setAccountNo] = React.useState('')
    const [bankCopy, setBankCopy] = React.useState('')
    const [error, setError] = React.useState(false)
    const [mobileError, setMobileError] = React.useState(false)
    const [emailError, setEmailError] = React.useState(false)
    const [isBack, setIsback] = React.useState(false)


    const navigate = useNavigate()


    const clearApplicantData = () => {
        setFname('')
        setLname('')
        setMobileNo('')
        setEmail('')
        setBirthdate('')
        setAddress('')
        setPinCode('')
        setCity('')
        setState('')
        setCountry('')
        setAadharno('')
        setPanno('')
        setBankname('')
        setAccountNo('')
        setIfsccode('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            console.log("false")
            return false
        }
        else {
            const formData = new FormData()
            formData.append("first_name", fname)
            formData.append("last_name", lname)
            formData.append("mobile", mobileNo)
            formData.append("email", email)
            formData.append("birth_date", birthdate)
            formData.append("address", address)
            formData.append("pincode", pinCode)
            formData.append("city", city)
            formData.append("state", state)
            formData.append("country", country)
            formData.append("aadhar_number", aadharNo)
            formData.append("aadhar_proof", aadharCopy)
            formData.append("pan_number", panNo)
            formData.append("pan_proof", panCopy)
            formData.append("bank_name", bankName)
            formData.append("account_number", accountNo)
            formData.append("ifsc_code", ifscCode)
            formData.append("bank_proof", bankCopy)

            axios.post(appConstants.REQUEST_FOR_CONSULTANT, formData, { headers: { "Content-Type": 'multipart/form-data' } }).then((response) => {
                console.log(response)
                if (response.data.result) {
                    setOpen(true)
                    clearApplicantData()
                }
            })

        }
    }

    const setCustomValidity = () => {
        const firstName = document.querySelector('#firstName');
        const lastName = document.querySelector("#lastName")
        const email = document.querySelector("#email")
        const mobileNo = document.querySelector("#mobileNo")
        const panNo = document.querySelector("#panNo")
        const aadharNo = document.querySelector("#aadharNo")
        const bankName = document.querySelector("#bankName")
        const accountNo = document.querySelector("#accountNo")
        const ifscCode = document.querySelector("#ifscCode")
        firstName.setCustomValidity('');
        lastName.setCustomValidity('');
        email.setCustomValidity('');
        mobileNo.setCustomValidity('');
        panNo.setCustomValidity('');
        aadharNo.setCustomValidity('');
        bankName.setCustomValidity('');
        accountNo.setCustomValidity('');
        ifscCode.setCustomValidity('');
    }


    const setCountryAndGetStates = (value) => {
        setCountry(value)
        setState('')
        setCity('')
        const country = countriesData.filter(x => x.label === value)
        if (country.length !== 0) {
            axios.get(`${appConstants.STATES_LIST}?country_id=${country[0].id}`).then(response => {
                if (response.data.result) {
                    createStatesData(response.data.states)
                }
            })
        }
        else {
            setStatesData([])
            setCitiesData([])
        }
    }

    const setStateAndGetCities = (value) => {
        setState(value)
        setCity('')
        const state = statesData.filter(x => x.label === value)
        if (state.length !== 0) {
            const formData = new FormData()
            formData.append("state_id", state[0].id)
            axios.post(appConstants.CITIES_LIST, formData, { headers: { "Content-Type": "multipart/form-data" } }).then(response => {
                if (response.data.result) {
                    createCitiesData(response.data.cities)
                }
            })
        }
        else {
            setCitiesData([])
        }
    }

    const createCitiesData = (data) => {
        const array = []
        for (let i = 0; i < data.length; i += 1) {
            array.push({ label: data[i].district_name_english, id: data[i].id })
        }
        setCitiesData(array)
    }

    const createStatesData = (data) => {
        const array = []
        for (let i = 0; i < data.length; i += 1) {
            array.push({ label: data[i].state_name_english, id: data[i].id })
        }
        setStatesData(array)
    }

    const createCountriesData = (data) => {
        const array = []
        for (let i = 0; i < data.length; i += 1) {
            array.push({ label: data[i].name, id: data[i].id })
        }
        setCountriesData(array)
    }


    const handleClose = () => {
        setOpen(false)
    }

    const checkValidity = () => {
        if (!isBack) {
            const mobileRegex = /^[0]?[789]\d{9}$/
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
            if (!mobileRegex.test(mobileNo)) {
                setMobileError(true)
            }
            if (!emailRegex.test(email)) {
                setEmailError(true)
            }
        }

    }

    useEffect(() => {
        axios.get(appConstants.COUNTRIES_LIST).then((response) => {
            createCountriesData(response.data.countries)
        })
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Card sx={{ mb: 4 }}>
                    <Box component={"form"} onSubmit={(e) => handleSubmit(e)}>
                        <Box component={"div"} sx={{ backgroundColor: '#c0e4e3', textAlign: 'center' }}>
                            <Typography variant="h3" sx={{ color: 'black', pt: 3, }}>Associate With US</Typography>
                            <Typography sx={{ color: 'black', pb: 3, }}>Complete the form to associate with us.</Typography>
                        </Box>
                        <Divider />
                        <Container>
                            <Grid container spacing={2} sx={{ mt: 3 }}>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>First Name</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth id="firstName" inputProps={{ pattern: "^[a-zA-Z]+$" }} onInvalid={(e) => e.target.setCustomValidity("First name is not correct")} size="small" onChange={(e) => { setFname(e.target.value); setCustomValidity() }} value={fname} required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>Last Name</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth id="lastName" inputProps={{ pattern: "^[a-zA-Z]+$" }} onInvalid={(e) => e.target.setCustomValidity("Last name is not correct")} size="small" onChange={(e) => { setLname(e.target.value); setCustomValidity() }} value={lname} required />
                                </Grid>
                                <Grid item xs={12} md={12} sx={{ mt: 2 }}>
                                    <InputLabel><b>Address</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth size="small" multiline rows={6} onChange={(e) => setAddress(e.target.value)} value={address} required />
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                                    <InputLabel><b>Country</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <Autocomplete
                                        required
                                        fullWidth
                                        disablePortal
                                        id="controllable-states-demo"
                                        value={country}
                                        options={countriesData}
                                        isOptionEqualToValue={(option, value) => option.value === value.value}
                                        onChange={(e, value, label) => { setCountryAndGetStates(value ? value.label : '') }}
                                        renderInput={(params) => <TextField  {...params} required />}
                                        size='small' />
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                                    <InputLabel><b>State</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <Autocomplete
                                        required
                                        fullWidth
                                        disablePortal
                                        id="controllable-states-demo"
                                        noOptionsText={<b>Please Choose the Country</b>}
                                        value={state}
                                        options={statesData}
                                        isOptionEqualToValue={(option, value) => option.value === value.value}
                                        onChange={(e, value, reason) => { setStateAndGetCities(value ? value.label : '') }}
                                        renderInput={(params) => <TextField  {...params} required />}
                                        size='small' />
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                                    <InputLabel><b>City</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <Autocomplete
                                        required
                                        fullWidth
                                        disablePortal
                                        id="controllable-states-demo"
                                        noOptionsText={<b>Please Choose the State</b>}
                                        value={city}
                                        options={citiesData}
                                        isOptionEqualToValue={(option, value) => option.value === value.value}
                                        onChange={(e, value, reason) => { setCity(value ? value.label : '') }}
                                        renderInput={(params) => <TextField  {...params} required />}
                                        size='small' />
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                                    <InputLabel><b>Pin Code</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth size="small" onChange={(e) => setPinCode(e.target.value)} value={pinCode} required />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>Email</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth id="email" onBlur={() => checkValidity()} helperText={emailError ? <b style={{ color: 'red' }}>Email is not valid</b> : null} inputProps={{ pattern: "[a-z0-9]+@[a-z]+\\.[a-z]{2,3}" }} onInvalid={(e) => e.target.setCustomValidity("Email is not correct")} size="small" onChange={(e) => { setEmail(e.target.value); setCustomValidity(); setEmailError(false) }} value={email} type={"email"} required />
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <InputLabel><b>Mobile No</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth id="mobileNo" onBlur={() => checkValidity()} helperText={mobileError ? <b style={{ color: 'red' }}>Mobile No is not valid</b> : null} inputProps={{ pattern: "^[0]?[789]\\d{9}$" }} onInvalid={(e) => e.target.setCustomValidity("Mobile no is not correct")} size="small" onChange={(e) => { setMobileNo(e.target.value); setCustomValidity(); setMobileError(false) }} value={mobileNo} required />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                                    <InputLabel><b>Birth Date</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth type={"date"} onChange={(e) => setBirthdate(e.target.value)} value={birthdate} required />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>Aadhar Card No</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth id="aadharNo" inputProps={{ pattern: "^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$" }} onInvalid={(e) => e.target.setCustomValidity("Aadhar no is not correct")} size="small" value={aadharNo} onChange={(e) => { setAadharno(e.target.value); setCustomValidity() }} required />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <InputLabel><b>Aadhar Card Copy</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth id="AadharFile" type={"file"} onChange={(e) => setAadharCopy(e.target.files[0])} InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <Fab size='small' sx={{ backgroundColor: '#2cccc4' }} onClick={() => { document.getElementById('AadharFile').click() }}>
                                                    <FileUploadIcon sx={{ color: 'white' }} />
                                                </Fab>
                                            </InputAdornment>
                                        ),
                                    }} required />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>PAN Card No</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth id="panNo" inputProps={{ pattern: "[A-Z]{5}[0-9]{4}[A-Z]{1}" }} onInvalid={(e) => e.target.setCustomValidity("Pan no is not correct")} size="small" value={panNo} onChange={(e) => { setPanno(e.target.value); setCustomValidity() }} required />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <InputLabel><b>PAN Card Copy</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth id="PanFile" onChange={(e) => setPanCopy(e.target.files[0])} type={"file"} InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <Fab size='small' sx={{ backgroundColor: '#2cccc4' }} onClick={() => { document.getElementById('PanFile').click() }}>
                                                    <FileUploadIcon sx={{ color: 'white' }} />
                                                </Fab>
                                            </InputAdornment>
                                        ),
                                    }} required />
                                </Grid>
                            </Grid>



                            <Typography variant='h5' sx={{ mt: 5, color: (theme) => theme.palette.info.darker }}>Bank Details</Typography>
                            <Divider sx={{ mt: 1 }} />

                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>Bank Name</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth id="bankName" inputProps={{ pattern: "^[a-zA-Z\\s]*$" }} onInvalid={(e) => e.target.setCustomValidity("Bank name is not correct")} size="small" value={bankName} onChange={(e) => { setBankname(e.target.value); setCustomValidity() }} required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>IFSC Code</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth id="ifscCode" inputProps={{ pattern: "^[A-Z]{4}0[A-Z0-9]{6}$" }} onInvalid={(e) => e.target.setCustomValidity("Ifsc code is not correct")} size="small" value={ifscCode} onChange={(e) => { setIfsccode(e.target.value); setCustomValidity() }} required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>A/c No</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth id="accountNo" inputProps={{ pattern: "^[0-9]{9,18}$" }} onInvalid={(e) => e.target.setCustomValidity("Account no is not correct")} size="small" value={accountNo} onChange={(e) => { setAccountNo(e.target.value); setCustomValidity() }} required />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <InputLabel><b>Cancelled Cheque or 1st page of bank passbook</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                    <TextField fullWidth id="PassbookFile" onChange={(e) => setBankCopy(e.target.files[0])} type={"file"} InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <Fab size='small' sx={{ backgroundColor: '#2cccc4' }} onClick={() => { document.getElementById('PassbookFile').click() }}>
                                                    <FileUploadIcon sx={{ color: 'white' }} />
                                                </Fab>
                                            </InputAdornment>
                                        ),
                                    }} required />
                                </Grid>
                            </Grid>

                        </Container>
                        <Box component={"div"} sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 3 }}>
                            <Button variant='contained' sx={{ mr: 1 }} onClick={() => { setIsback(true); navigate("/associate") }}>Cancel</Button>
                            <Button type="submit" variant="contained">Submit</Button>
                        </Box>
                    </Box>
                </Card>
            </Container>
            <Dialog onClose={() => { handleClose() }} open={open}>
                <DialogContent>
                    <DialogContentText sx={{ textAlign: 'center' }}>
                        <CheckCircleOutlineOutlinedIcon color='success' sx={{ height: 80, width: 80 }} />
                        <Typography>Application Submitted Successfully</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { handleClose(); navigate("/associate") }} autoFocus variant='contained'>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
