import React, { useEffect } from 'react';
import { Box, Button, Card, Container, Grid, InputLabel, TextField, Typography, Autocomplete, InputAdornment, IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LocationCityTwoToneIcon from '@mui/icons-material/LocationCityTwoTone';
import FoundationTwoToneIcon from '@mui/icons-material/FoundationTwoTone';
import { makeStyles } from "@mui/styles";
import appConstants from '../../utils/appConstants'
import AssetSearchImage from '../../components/assets/img/asset-search.jpg'


export default function SearchPortal({ ...other }) {

    const [state, setState] = React.useState('')
    const [city, setCity] = React.useState('')
    const [statesData, setStatesData] = React.useState([])
    const [firstName, setFirstName] = React.useState('')
    const [middleName, setMiddleName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [citiesData, setCitiesData] = React.useState([])
    const [address, setAddress] = React.useState('')
    const [errorAlert, setErrorAlert] = React.useState(false)
    const [errorAlertMessage,setErrorAlertMessage]=React.useState('')

    const navigate = useNavigate();

    const useStyles = makeStyles((theme) => ({
        adornment: {
            backgroundColor: theme.palette.divider,
            padding: "19.5px 12px",
            borderTopLeftRadius: `${theme.shape.borderRadius}px`,
            borderBottomLeftRadius: `${theme.shape.borderRadius}px`
        },
        textField: {
            "& .MuiOutlinedInput-root": {
                paddingLeft: 0
            }
        }
    }));
    const classes = useStyles();


    const handleNavigate = () => {
        const formData = new FormData()
        if (firstName !== '' || middleName !== '' || lastName !== '' || state !== ''  || city !== ''  || address !== '') {
            formData.append("first_name", firstName)
            formData.append("middle_name", middleName)
            formData.append("last_name", lastName)
            formData.append("state", state)
            formData.append("city", city)
            formData.append("address", address)
            console.log(firstName, lastName, middleName, state, city, address)
            axios.post(appConstants.SEARCH_URL, formData, { headers: { "Content-Type": 'multipart/form-data' } }).then((response) => {
                if (response.data.result) {
                    localStorage.setItem('searchResult', JSON.stringify(response.data.search_result))
                    navigate("/searchResult")
                }
                else{
                    setErrorAlert(true)
                    setErrorAlertMessage("No data present Please Select other details")
                }
            })
        }
        else {
            setErrorAlert(true)
            setErrorAlertMessage("Please Select Atleast One Field")
        }
    }

    const createStatesData = (data) => {
        const array = []
        for (let i = 0; i < data.length; i += 1) {
            array.push({ label: data[i].state_name_english, id: data[i].id })
        }
        setStatesData(array)
    }

    const createCitiesData = (data) => {
        const array = []
        for (let i = 0; i < data.length; i += 1) {
            array.push({ label: data[i].district_name_english, id: data[i].id })
        }
        setCitiesData(array)
    }

    const setStateAndGetCities = (state) => {
        setState(state)
        const array = statesData.filter(x => x.label === state)
        if (array.length !== 0) {
            const formData = new FormData()
            formData.append("state_id", array[0].id)
            axios.post(appConstants.CITIES_LIST, formData, { headers: { "Content-Type": "multipart/form-data" } }).then((response) => {
                createCitiesData(response.data.cities)
            })
        }
        else{
            setCitiesData([])
        }
    }

    useEffect(() => {
        axios.get(appConstants.STATES_LIST).then((response) => {
            createStatesData(response.data.states)
        })
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Container >
                <Box>
                    <Typography variant='h3' sx={{ textAlign: 'center', pt: 3 }}>
                        Have Any Unclaimed Investements?
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={7}>
                        <Card sx={{ mt: 5 }} {...other}>
                            <Typography variant='h3' sx={{ textAlign: 'center', mt: 3, mb: 4 }} >Investor Name</Typography>
                            <Container>
                                <Grid container spacing={1} >
                                    <Grid item xs={12} md={4} sx={{ mt: 2 }}>
                                        <InputLabel><b>First Name</b></InputLabel>
                                        <TextField className={classes.textField} fullWidth onChange={(e) => { setErrorAlert(false); setFirstName(e.target.value) }} variant="outlined" size='small' InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start" className={classes.adornment}>
                                                    <AccountCircleTwoToneIcon />
                                                </InputAdornment>
                                            ),
                                        }} />
                                    </Grid>
                                    <Grid item xs={12} md={4} sx={{ mt: 2 }}>
                                        <InputLabel><b>Middle Name</b></InputLabel>
                                        <TextField className={classes.textField} fullWidth onChange={(e) => { setErrorAlert(false); setMiddleName(e.target.value) }} variant="outlined" size='small' InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start" className={classes.adornment}>
                                                    <AccountCircleTwoToneIcon />
                                                </InputAdornment>
                                            ),
                                        }} />
                                    </Grid>
                                    <Grid item xs={12} md={4} sx={{ mt: 2 }}>
                                        <InputLabel><b>Last Name</b></InputLabel>
                                        <TextField className={classes.textField} fullWidth onChange={(e) => { setErrorAlert(false); setLastName(e.target.value) }} variant="outlined" size='small' InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start" className={classes.adornment}>
                                                    <AccountCircleTwoToneIcon />
                                                </InputAdornment>
                                            ),
                                        }} />
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                                        <InputLabel><b>State</b></InputLabel>
                                        <Autocomplete
                                            required
                                            fullWidth
                                            disablePortal
                                            isOptionEqualToValue={(option, value) => option.value === value.value}
                                            id="combo-box-demo"
                                            valu={state}
                                            options={statesData}
                                            onChange={(e, value, reason) => { setErrorAlert(false); setStateAndGetCities(value?value.label:''); setCity('') }}
                                            renderInput={(params) => <TextField className={classes.textField} {...params} InputProps={{
                                                ...params.InputProps,
                                                startAdornment: (
                                                    <InputAdornment position="start" className={classes.adornment}>
                                                        <FoundationTwoToneIcon />
                                                    </InputAdornment>)
                                            }} />}
                                            size='small' />
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                                        <InputLabel><b>City</b></InputLabel>
                                        <Autocomplete
                                            required
                                            fullWidth
                                            disablePortal
                                            value={city}
                                            isOptionEqualToValue={(option, value) => option.value === value.value}
                                            options={citiesData}
                                            noOptionsText={<b>Please Choose the State</b>}
                                            onChange={(e, value, reason) => { setErrorAlert(false); setCity(value?value.label:'') }}
                                            id="combo-box-demo"
                                            renderInput={(params) => <TextField className={classes.textField} {...params} InputProps={{
                                                ...params.InputProps,
                                                startAdornment: (
                                                    <InputAdornment position="start" className={classes.adornment}> <LocationCityTwoToneIcon sx={{ ml: 1 }} />
                                                    </InputAdornment>
                                                ),
                                            }} />}
                                            size='small' />
                                    </Grid>
                                    <Grid item xs={12} md={12} sx={{ mt: 2 }}>
                                        <InputLabel><b>Address</b></InputLabel>
                                        <TextField fullWidth rows={5} multiline onChange={(e) => { setErrorAlert(false); setAddress(e.target.value) }} />
                                    </Grid>
                                </Grid>

                            </Container>
                            {errorAlert ? <Box component={"div"} sx={{ mb: 1, mt: 3 }}>
                                <Alert severity="error">{errorAlertMessage}</Alert>
                            </Box> : ''}
                            <Box component={"div"} sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
                                <Button variant='contained' onClick={() => handleNavigate()}>Search</Button>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Card sx={{ mt: 5, minHeight: 576 }} {...other}>
                            <Container>
                                <Typography variant='h6' sx={{ mt: 5 }}>
                                    Search for unclaimed and forgotten investments with various companies and government authorities.
                                </Typography>
                                <Typography sx={{ mt: 2 }} variant="h6">
                                    Note
                                </Typography>
                                <Box component={"div"} sx={{ mt: 2, ml: 3, fontSize: 18 }}>
                                    <ul>
                                        <li>Investor’s first name, middle name, last name and state.</li>
                                        <li>Investor’s First name and state.</li>
                                        <li>Investor’s Middle name and state. (input middle name in either first name or last name search box)</li>
                                        <li>Investor’s Last name and State.</li>
                                        <li>State is mandatory in all the combinations.(Please select out of India for search related to out of India registered address of the investor)</li>
                                    </ul>
                                </Box>
                            </Container>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}