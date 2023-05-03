import React from 'react';
// @mui
import { Link, NavLink } from 'react-router-dom';
import { Stack, TextField, InputLabel, Box, Button, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import axios from 'axios'
import appConstants from '../../../utils/appConstants';


// 6787657898

// ----------------------------------------------------------------------

export default function RegisterForm({ handleNavigate }) {

    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [mobileno, setMobileno] = React.useState('')
    const [errorAlert, setErrorAlert] = React.useState(false)
    const [errorAlertText, setErrorAlertText] = React.useState('')


    const setCustomValidity = () => {
        const firstName = document.querySelector('#firstName');
        const lastName = document.querySelector("#lastName")
        const email = document.querySelector("#email")
        const mobileNo = document.querySelector("#mobileNo")

        firstName.setCustomValidity('');
        lastName.setCustomValidity('');
        email.setCustomValidity('');
        mobileNo.setCustomValidity('');

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        console.log(form.checkValidity())
        if (form.checkValidity() === false) {
            console.log("false")
            return false
        }
        else {
            const formData = new FormData();
            formData.append('first_name', firstName)
            formData.append('last_name', lastName)
            formData.append('email', email)
            formData.append('mobile_number', mobileno)
            axios.post(appConstants.USER_REGISTER, formData, { headers: { "Content-Type": "multipart/form-data" } }).then((response) => {
                console.log(response)
                if (response.data.result) {
                    handleNavigate(true)
                }
                else if (!response.data.result) {
                    setErrorAlert(true)
                    setErrorAlertText(response.data.reason)
                }
            })
        }

    }

    return (
        <>
            <Box component={"form"} onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <Box component={"div"}>
                        <InputLabel><b>First Name</b></InputLabel>
                        <TextField onChange={(e) => { setFirstName(e.target.value); setCustomValidity() }} id="firstName" inputProps={{ pattern: "^[a-zA-Z]+$" }} onInvalid={(e) => e.target.setCustomValidity("First name is not correct")} fullWidth required />
                    </Box>
                    <Box component={"div"}>
                        <InputLabel><b>Last Name</b></InputLabel>
                        <TextField onChange={(e) => { setLastName(e.target.value); setCustomValidity() }} id="lastName" inputProps={{ pattern: "^[a-zA-Z]+$" }} onInvalid={(e) => e.target.setCustomValidity("Last name is not correct")} fullWidth required />
                    </Box>
                    <Box component={"div"}>
                        <InputLabel><b>Email</b></InputLabel>
                        <TextField onChange={(e) => { setEmail(e.target.value); setCustomValidity() }} id="email" inputProps={{ pattern: "[a-z0-9]+@[a-z]+\\.[a-z]{2,3}" }} onInvalid={(e) => e.target.setCustomValidity("Email is not correct")} type="email" fullWidth required />
                    </Box>
                    <Box component={"div"}>
                        <InputLabel><b>Mobile No</b></InputLabel>
                        <TextField onChange={(e) => { setMobileno(e.target.value); setCustomValidity() }} id="mobileNo" inputProps={{ pattern: "^[0]?[789]\\d{9}$" }} onInvalid={(e) => e.target.setCustomValidity("Mobile no is not correct")} fullWidth required />
                    </Box>
                </Stack>
                {errorAlert ? <Box component={"div"} sx={{ mb: 3 }}>
                    <Alert severity="error">{errorAlertText}</Alert>
                </Box> : ''}

                <Button fullWidth size="large" type="submit" variant="contained" sx={{ mt: 3 }}>
                    Register
                </Button>
                <Box direction={"row"} sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ mt: 0.5, textAlign: 'center' }}>Already have an account? {''}&nbsp;</Typography>
                    <NavLink style={{ color: '#2cccc4', textDecoration: 'none', }} onClick={() => handleNavigate(true)}> Go to login</NavLink>{' '}&nbsp;
                </Box>
                <Box direction={"row"} sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ mt: 0.5, textAlign: 'center' }}>Go To home Page {''}&nbsp;</Typography>
                    <Link style={{ color: '#2cccc4', textDecoration: 'none', }} to={"/home"}> Home</Link>{' '}&nbsp;
                </Box>
            </Box>
        </>
    );
}
