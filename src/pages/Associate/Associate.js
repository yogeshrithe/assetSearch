import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import AssociateImage from '../../components/assets/img/associate.jpg'

export default function Associate() {

    const useStyles = makeStyles({
        root: {
            transition: "transform 0.20s ease-in-out",
            "&:hover": { transform: "scale3d(1.15, 1.15, 1)" },
        },
    });

    const navigate = useNavigate()

    const classes = useStyles()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Box component={"div"} sx={{
                height: 300, background: `url(${AssociateImage})`, backgroundSize: '100% 100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column'
            }}>
                <Typography variant='h2' sx={{ color: 'white', mt: 2 }}>Become a Asset Search Associate</Typography>
                <Typography sx={{ color: 'white', fontSize: 20, mt: 2 }}>Leverage India’s biggest unclaimed investment search database and earn<br /> handsome commission by referring customers</Typography>
            </Box>
            <Container>
                <Typography variant='h2' sx={{ textAlign: 'center', mt: 7 }}>What we need from you?</Typography>
                <Typography sx={{ textAlign: 'center', mt: 1 }}>We need you to just leverage your existing social network and our exhaustive database to help</Typography>
                <Typography sx={{ textAlign: 'center', mt: 1 }}>find investors who have unclaimed and forgotten investments and assist them in recovering</Typography>
                <Typography sx={{ textAlign: 'center', mt: 1 }}>their golden treasure</Typography>
                <Grid container spacing={8} sx={{ mt: 3, textAlign: 'center' }}>
                    <Grid item xs={12} md={4} lg={4} xl={4} >
                        <Typography variant='h5'>NO INVESTMENT</Typography>
                        <Typography sx={{ mt: 2 }}>There is no financial investment from your end needed to associate with Recoversy. One’s biggest investment is his time!!</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} xl={4}>
                        <Typography variant='h5'>NO TIME COMMITMENTS</Typography>
                        <Typography sx={{ mt: 2 }}>Recoversy can be a side hustle for you, you can pursue the same with your other engagements</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} xl={4}>
                        <Typography variant='h5'>NO EXPERIENCE</Typography>
                        <Typography sx={{ mt: 2 }}> All we need is for you to have a basic understanding of the financial market and you being bit of a good sales person</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ mt: 15, backgroundColor: '#2cccc4' }}>
                <Typography variant='h3' sx={{ textAlign: 'center', color: 'white', pt: 3 }}>Who can associate with us?</Typography>
                <Container sx={{ mt: 5 }}>
                    <Box sx={{ display: { sm: 'flex', xs: 'block' }, justifyContent: 'center' }} >
                        <Box sx={{ mt: 3, ml: 2, mr: 2 }}>
                            <Box sx={{ display: 'flex' }}>
                                <Person3OutlinedIcon sx={{ color: 'white', fontSize: 39 }} />
                                <Typography sx={{ color: 'white', fontSize: 29, ml: 1 }}>Professionals</Typography>
                            </Box>
                            <ul style={{ color: 'white', marginLeft: '35px', fontSize: '18px', marginTop: '15px' }}>
                                <li>Charted Accountants</li>
                                <li>Company Secretaries</li>
                                <li>Lawyers / Advocates</li>
                                <li>Retired professionals / officers</li>
                            </ul>
                        </Box>
                        <Box sx={{ mt: 3, ml: 2, mr: 2 }}>
                            <Box sx={{ display: 'flex' }}>
                                <Person3OutlinedIcon sx={{ color: 'white', fontSize: 39 }} />
                                <Typography sx={{ color: 'white', fontSize: 29, ml: 1 }}>Financial Consultants</Typography>
                            </Box>

                            <ul style={{ color: 'white', marginLeft: '35px', fontSize: '18px', marginTop: '15px' }}>
                                <li>Share brokers / Consultants</li>
                                <li>Mutual Fund Distributors</li>
                                <li>Financial Advisors</li>
                                <li>Wealth managers / Consultants</li>
                            </ul>

                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, pb: 2 }}>
                        <Person3OutlinedIcon sx={{ color: 'white', fontSize: 39 }} />
                        <Typography sx={{ color: 'white', fontSize: 22, ml: 1 }}>ANYONE READY TO HUSTLE</Typography>
                    </Box>
                </Container>
            </Box>
            <Container sx={{ textAlign: 'center', height: 230 }}>
                <Typography variant='h3' sx={{ mt: 9 }}>Ready to hustle?</Typography>
                <Typography mt={5}>Fill out the below attached form for us to know more about you and onboard you to the <br />Recoversy family</Typography>
                <Button sx={{ mt: 6 }} className={classes.root} onClick={()=>navigate("/associateForm")}>BUSINESS ASSOCIATION ENQUIRY FORM</Button>
            </Container>
        </>
    )
}