import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Card, Container, Typography } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import Orders from './orders/Orders'
import Nominee from './nominee/Nominee';
import LegalHeir from './legalheir/LegalHeir';
import ProfileDetails from './profileDetails/ProfileDetails';




export default function Profile() {
    const [value, setValue] = React.useState('1');

    const location = useLocation()

    const navigate = useNavigate()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const useStyles = makeStyles({
        root: {
            '&.MuiTabPanel-root': {
                padding: '3px',
            },
        }
    });

    const classes = useStyles()

    const removeLocation = (value) => {
        if (location.state) {
            navigate(location.pathname, { replace: true })
            setValue(value)
        }
    }

    React.useEffect(() => {
        if (location.state) {
            setValue("4")
        }
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <Container sx={{ mb: 5, mt: 4 }}>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }} mb={4}>
                    Profile
                </Typography>
                <Card>
                    <Box sx={{ width: '100%', typography: 'body1', mt: 5 }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: { xs: 'none', sm: 'block' } }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example" variant='fullWidth' TabIndicatorProps={{ style: { backgroundColor: '#2cccc4' } }}>
                                    <Tab label="Profile" value="1" onClick={(e) => removeLocation("1")} style={{ color: value === '1' ? '#2cccc4' : '' }} />
                                    <Tab label="Nominee" value="2" onClick={() => removeLocation("2")} style={{ color: value === '2' ? '#2cccc4' : '' }} />
                                    <Tab label="Legal Heir" value="3" onClick={() => removeLocation("3")} style={{ color: value === '3' ? '#2cccc4' : '' }} />
                                    <Tab label="Order History" value="4" style={{ color: value === '4' ? '#2cccc4' : '' }} onClick={() => removeLocation("4")} />
                                </TabList>
                            </Box>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: { sm: 'none' } }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example" variant='scrollable' TabIndicatorProps={{ style: { backgroundColor: '#2cccc4' } }}>
                                    <Tab label="Profile" value="1" onClick={(e) => removeLocation("1")} style={{ color: value === '1' ? '#2cccc4' : '' }} />
                                    <Tab label="Nominee" value="2" onClick={() => removeLocation("2")} style={{ color: value === '2' ? '#2cccc4' : '' }} />
                                    <Tab label="Legal Heir" value="3" onClick={() => removeLocation("3")} style={{ color: value === '3' ? '#2cccc4' : '' }} />
                                    <Tab label="Order History" value="4" style={{ color: value === '4' ? '#2cccc4' : '' }} onClick={() => removeLocation("4")} />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <ProfileDetails />
                            </TabPanel>
                            <TabPanel value="2">
                                <Nominee value={value} />
                            </TabPanel>
                            <TabPanel value="3">
                                <LegalHeir value={value} />
                            </TabPanel>
                            <TabPanel value="4" className={classes.root}>
                                <Orders orderValues={location.state ? location.state.data.chargesPaidType : null} />
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Card>
            </Container>
            <ToastContainer />
        </>
    );
}