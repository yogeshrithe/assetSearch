import { useState, useEffect } from "react";
import axios from 'axios'
import { Autocomplete, Box, Button, Card, Container, Divider, Grid, InputLabel, Stack, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Organization from '../../components/assets/img/organization.png'
import Phone from '../../components/assets/img/phone.png'
import Contacts from '../../components/assets/img/contact.png'
import Mail from '../../components/assets/img/mail.png'
import Whatsapp from '../../components/assets/img/whatsapp.png'
import Handshake from '../../components/assets/img/handshake.png'
import Facebook from '../../components/assets/img/facebook.png'
import Twitter from '../../components/assets/img/twitter.png'
import Instagram from '../../components/assets/img/instagram.png'
import Location from '../../components/assets/img/location.png'
import appConstants from '../../utils/appConstants'
import ContactusImage from '../../components/assets/img/Contact-us.webp'

export default function Contact() {

    const [countriesData, setCountriesData] = useState([])
    const [statesData, setStatesData] = useState([])
    const [citiesData, setCitiesData] = useState([])
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')


    const createCountriesData = (data) => {
        const array = []
        for (let i = 0; i < data.length; i += 1) {
            array.push({ label: data[i].name, id: data[i].id })
        }
        setCountriesData(array)
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

    const setCountryAndGetStates = (country) => {
        setCountry(country)
        const countryData = countriesData.filter(x => x.label === country)
        axios.get(`${appConstants.STATES_LIST}?country_id=${countryData[0].id}`).then((response) => {
            createStatesData(response.data.states)
        })
    }

    const setStatsAndGetCities = (state) => {
        setState(state)
        const stateData = statesData.filter(x => x.label === state)
        const formData = new FormData()
        formData.append("state_id", stateData[0].id)
        axios.post(appConstants.CITIES_LIST, formData, { headers: { "Content-Type": 'multipart/form-data' } }).then((response) => {
            createCitiesData(response.data.cities)
        })
    }

    useEffect(() => {
        axios.get(appConstants.COUNTRIES_LIST).then((response) => {
            createCountriesData(response.data.countries)
        })
        window.scrollTo(0, 0)
    }, [])




    return (
        <>
            <Box component={"div"} sx={{
                height: 300, background: `url(${ContactusImage})`, backgroundSize: '100% 100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column'
            }}>
                <Typography sx={{ color: 'white', fontSize: 45 }}>Contact Us</Typography>
            </Box>
            <Typography sx={{ textAlign: 'center', fontSize: 32, mt: 4, p: 2 }}>Committed to getting your Investments Back</Typography>

            <Box >
                <Container sx={{ p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ ml: 3, mt: 2, mr: 3 }}>
                                <Card>
                                    <Stack direction="row" sx={{ pt: 3, pl: 3 }}>
                                        <img src={Contacts} alt="" height={50} />
                                        <Typography sx={{ fontSize: 25, mt: 1, mr: 2, ml: 1 }}>Contact Details</Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{ pt: 3, pl: 4.8 }}>
                                        <img src={Organization} alt="" height={30} />
                                        <Typography sx={{ mr: 2, ml: 1, mt: 0.5 }}><b>Address:</b> Check below</Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{ pt: 2, pl: 4.6 }}>
                                        <img src={Phone} alt="" height={30} />
                                        <Typography sx={{ mr: 2, ml: 1, mt: 0.5 }}><b>Mobile:</b> +91-7020576005</Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{ pt: 2, pl: 4.8 }}>
                                        <img src={Whatsapp} alt="" height={30} />
                                        <Typography sx={{ ml: 1, mt: 0.5 }}><b>WhatsApp:</b> <Button size="small" sx={{ backgroundColor: 'white', color: '#2cccc4', "&.MuiButton-root": { "&:hover": { backgroundColor: 'white' } } }}>Message here</Button></Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{ pt: 2, pl: 5.1, pb: 4 }}>
                                        <img src={Mail} alt="" height={26} />
                                        <Typography sx={{ mr: 2, ml: 1.5, mt: 0.5 }}><b>Email:</b> info@recoversy.in</Typography>
                                    </Stack>
                                </Card>
                                <Card sx={{ mt: 2 }}>
                                    <Stack direction="row" sx={{ pt: 3, pl: 3 }}>
                                        <img src={Handshake} alt="" height={50} />
                                        <Typography sx={{ fontSize: 25, mt: 1, ml: 1 }}>Connect Wth Us</Typography>
                                    </Stack>

                                    <Stack direction="row" sx={{ pt: 3, pb: 4, display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="outlined" sx={{ ml:1,mr: 1, backgroundColor: 'white' }}>
                                            <img src={Whatsapp} alt="" height={30} />
                                        </Button>
                                        <Button variant="outlined" sx={{ mr: 1, backgroundColor: 'white' }}>
                                            <img src={Facebook} alt="" height={30} />
                                        </Button>
                                        <Button variant="outlined" sx={{ mr: 1, backgroundColor: 'white' }}>
                                            <img src={Twitter} alt="" height={30} />
                                        </Button>
                                        <Button variant="outlined" sx={{ mr: 1, backgroundColor: 'white' }}>
                                            <img src={Instagram} alt="" height={30} />
                                        </Button>
                                    </Stack>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8} sx={{ mt: 2 }}>
                            <Card sx={{ height: 500, mb: 5 }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3769.588894867831!2d72.99775603194772!3d19.125682816011473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1672912499227!5m2!1sen!2sin"
                                    width="100%" height="100%" allowFullScreen="" loading="lazy" title="map"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                    <Card >
                        <Box component={"div"} sx={{ backgroundColor: '#c8e8e0', height: 70, color: 'white', textAlign: 'center', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
                            <Typography variant="h4">Contact Us</Typography>
                        </Box>
                        <Box component={"form"}>
                            <Container>
                                <Grid container spacing={2} sx={{ mt: 2 }}>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel><b>First Name</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                        <TextField size="small" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel><b>Last Name</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                        <TextField size="small" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel><b>Email</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                        <TextField size="small" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel><b>Mobile No</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                        <TextField size="small" helperText={"Preferably share WhatsApp number for faster communication"} fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <InputLabel><b>Address</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                        <TextField size="small" multiline rows={4} fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel><b>Country</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                        <Autocomplete
                                            required
                                            fullWidth
                                            disablePortal
                                            id="controllable-states-demo"
                                            value={country}
                                            options={countriesData}
                                            isOptionEqualToValue={(option, value) => option.value === value.value}
                                            onChange={(e) => { setCountryAndGetStates(e.currentTarget.innerHTML); setState(''); setCity('') }}
                                            renderInput={(params) => <TextField  {...params} required />}
                                            size='small' />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
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
                                            onChange={(e) => { setStatsAndGetCities(e.currentTarget.innerHTML); setCity('') }}
                                            renderInput={(params) => <TextField  {...params} required />}
                                            size='small' />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
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
                                            onChange={(e) => { setCity(e.currentTarget.innerHTML) }}
                                            renderInput={(params) => <TextField  {...params} required />}
                                            size='small' />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel><b>Pincode</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                        <TextField size="small" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <InputLabel><b>Your Message</b><b style={{ color: 'red' }}>*</b></InputLabel>
                                        <TextField size="small" multiline rows={4} fullWidth required />
                                    </Grid>
                                </Grid>
                                <Box sx={{ textAlign: 'center', p: 3 }}>
                                    <Button >Submit</Button>
                                </Box>
                            </Container>
                        </Box>
                    </Card>
                </Container>
            </Box>
            <Container>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                    <Divider sx={{ backgroundColor: (theme) => theme.palette.info.darker, mt: 2, height: 2 }} />
                    <Typography sx={{ fontSize: 30, mt: 3 }}>Corporate Office</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <img src={Location} alt="" height={60} />
                    </Box>
                    <Typography sx={{ fontSize: 20, mt: 1 }}>Pune</Typography>
                    <Typography sx={{ fontSize: 15, mt: 1 }}>Address: 402, 4th Floor, Elite Transbay, Opposite SKP Campus, Balewadi, Pune - 411045</Typography>
                    <Divider sx={{ backgroundColor: (theme) => theme.palette.info.darker, mt: 2, height: 2 }} />
                    <Typography sx={{ fontSize: 30, mt: 3 }}>Branch Office</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <img src={Location} alt="" height={60} />
                    </Box>
                    <Typography sx={{ fontSize: 20, mt: 1 }}>Mumbai</Typography>
                    <Typography sx={{ fontSize: 15, mt: 1 }}>Address: 207, 2nd Floor, Hubtown Viva, Western Express Highway, Andheri East, Mumbai, Maharashtra 400060, India</Typography>
                    <Divider sx={{ backgroundColor: (theme) => theme.palette.info.darker, mt: 2, height: 2 }} />
                    <Typography sx={{ fontSize: 30, mt: 3 }}>Associate's Offices</Typography>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={6} md={3}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <img src={Location} alt="" height={60} />
                            </Box>
                            <Typography sx={{ fontSize: 20, mt: 1 }}>Ahemedabad</Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <img src={Location} alt="" height={60} />
                            </Box>
                            <Typography sx={{ fontSize: 20, mt: 1 }}>Hyderabad</Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <img src={Location} alt="" height={60} />
                            </Box>
                            <Typography sx={{ fontSize: 20, mt: 1 }}>Chennai</Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <img src={Location} alt="" height={60} />
                            </Box>
                            <Typography sx={{ fontSize: 20, mt: 1 }}>Kolkata</Typography>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </>
    )
}