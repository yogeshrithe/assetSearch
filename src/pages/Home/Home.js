import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import SearchImage from '../../components/assets/img/search.webp'
import Home1Image from '../../components/assets/img/Home-first-image.png'
import Home2Image from '../../components/assets/img/Home-second-image.png'
import Home3Image from '../../components/assets/img/Home-third-image.png'
import Home4Image from '../../components/assets/img/Home-fourth-image.png'
import Home5Image from '../../components/assets/img/Home-fifth-image.png'
import Home6Image from '../../components/assets/img/Home-sixth-image.png'
import Home7Image from '../../components/assets/img/Home-seventh-image.png'
import Home8Image from '../../components/assets/img/Home-eighth-image.png'
import HomeCards from './HomeCards'
import ReviewCards from "./ReviewCards";
import CardImage1 from '../../components/assets/img/Card-image-1.png'
import HomeBackground from '../../components/assets/img/home-background.jpg'


export default function Home() {

    const navigate = useNavigate()

    const StyledIcon = styled('div')(({ theme }) => ({
        margin: 'auto',
        display: 'flex',
        borderRadius: '50%',
        alignItems: 'center',
        width: theme.spacing(8),
        height: theme.spacing(8),
        justifyContent: 'center',
        marginBottom: theme.spacing(1),
    }));

    const handleNavigate = () => {
        navigate("/search")
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const cardData = [{ icon: CardImage1, color: 'info', title: 'IEPF Claim', description: 'Assisting investors to search and claim back their unclaimed investments back from the IEPF Authority' },
    { icon: CardImage1, color: 'warning', title: 'Transfer of shares', description: 'Assisting in the transfer of shares from one owner to another, rectifying issues of signature and name mismatch, etc.' },
    { icon: CardImage1, color: 'error', title: 'D-Mat of Physical shares', description: 'We help investors claim their legal ownership of the assets left behind back by their loved ones' }]

    const reviewCards = [{ description: 'The recoversy team are highly professional and know very well about the field. They helped me get my shares transmitted which were in my mothers name. They also help me find shares worth Rs.8 lac which I was completely unaware of.', name: 'Mr. Mukesh Bhatia', designation: 'Businessman, Mumbai' },
    { description: 'The recoversy team are highly professional and know very well about the field. They helped me get my shares transmitted which were in my mothers name. They also help me find shares worth Rs.8 lac which I was completely unaware of.', name: 'Dr. Vijay Rathod', designation: 'Doctor, Akola' },
    { description: 'The recoversy team are highly professional and know very well about the field. They helped me get my shares transmitted which were in my mothers name. They also help me find shares worth Rs.8 lac which I was completely unaware of.', name: 'Sudha Virmani', designation: 'Homemaker, Ahemedabad' }]

    return (
        <>
            <Box component={"div"} sx={{
                height: 300, background: `url(${HomeBackground}) no-repeat`, backgroundSize: '100% 100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column'
            }}>
                <Typography sx={{ color: 'white', fontSize: 40 }}>What We Do?</Typography>
                <Typography sx={{ color: 'white', mt: 2, fontSize: 28 }}>We Search And Bring Back Your Money</Typography>
            </Box>
            <Container sx={{ mt: 4 }}>
                <Card sx={{ maxWidth: 700, textAlign: 'center', margin: 'auto' }} elevation={10}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
                            <Box component={"div"} sx={{ margin: 'auto', p: 3 }}>
                                <Card sx={{ maxWidth: 300, margin: 'auto' }}>
                                    <img src={SearchImage} alt="" height={250} />
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7} sx={{ mb: 3 }}>
                            <CardContent>
                                <Typography variant="h5" sx={{ mt: 3 }}>Free search your unclaimed and forgotten investments</Typography>
                                <Typography variant="body1" sx={{ mt: 3 }}>More Than 60k Investors Found Investments Worth Above Rs.60 crore Using Our Portal,you can find some to0.No Details needed !! start your free search today!</Typography>
                            </CardContent>
                            <Box component={"div"} sx={{ textAlign: 'center', }}>
                                <Button variant="contained" onClick={() => handleNavigate()}><SavedSearchIcon />Search</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
                <Card elevation={10} sx={{ mt: 5 }}>
                    <Container>
                        <Grid container spacing={2} sx={{ mt: 7 }}>
                            <Grid item xs={12} md={6}>
                                <Typography>Looking For Someone To Help You Recover Your Lost Investments?</Typography>
                                <Typography sx={{ fontSize: 30, mt: 2 }}>You've Come To The Right Place</Typography>
                                <Typography sx={{ mt: 3 }}>We at Recoversy have helped our clients search and get back their hidden treasures from all types of investments viz. physical shares, shares transferred to IEPF, unclaimed amounts in PPF & EPF, Lost properties, and transfer/transmission of assets after the death of their loved ones.
                                    Recoversy specializes in the search and claim of shares & dividends transferred to IEPF Authority. The recoversy team can take care of all the processes and documentation for IEPF claims, transfer/transmission of shares, all we need is your signatures. We at Recoversy feel immensely grateful to our clients for trusting us with the opportunity to assist them in the recovery of their lost investments.</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={3}>
                                        <StyledIcon
                                            sx={{
                                                backgroundImage: (theme) =>
                                                    `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
                                                        theme.palette.info.dark,
                                                        0.24
                                                    )} 100%)`,
                                            }}
                                        ><SavedSearchIcon sx={{ color: (theme) => theme.palette.info.dark, fontSize: 39 }} /></StyledIcon>
                                    </Grid>
                                    <Grid item xs={12} md={9}>
                                        <Button sx={{ color: (theme) => theme.palette.info.darker, backgroundColor: 'white', fontSize: 25, ml: -1.5 }} onClick={() => navigate("/assetSearch/search")}>Unclaimed Search Portal</Button>
                                        <Typography sx={{ color: (theme) => theme.palette.info.darker }}>Only private Consulting company that provides with an extensive search portal for the search of lost and unclaimed shares and dividends without need for any folio nos. Search from a database amounting to more than Rs.3 lac crores of unclaimed investments.</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <StyledIcon
                                            sx={{
                                                backgroundImage: (theme) =>
                                                    `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
                                                        theme.palette.warning.dark,
                                                        0.24
                                                    )} 100%)`,
                                            }}
                                        ><CheckCircleOutlineIcon sx={{ color: (theme) => theme.palette.warning.dark, fontSize: 39 }} /></StyledIcon>
                                    </Grid>
                                    <Grid item xs={12} md={9}>
                                        <Typography sx={{ color: (theme) => theme.palette.warning.darker, fontSize: 25 }}>Expert Team</Typography>
                                        <Typography sx={{ color: (theme) => theme.palette.warning.darker }}>Recoversy has assisted more than 60k investors to search their lost and unclaimed investments amounting to more than Rs.6000 Crores and helped 500+ investors recover shares worth Rs. 25 crores and counting.</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <StyledIcon
                                            sx={{
                                                backgroundImage: (theme) =>
                                                    `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
                                                        theme.palette.error.dark,
                                                        0.24
                                                    )} 100%)`,
                                            }}
                                        ><AssignmentTurnedInIcon sx={{ color: (theme) => theme.palette.error.dark, fontSize: 39 }} /></StyledIcon>
                                    </Grid>
                                    <Grid item xs={12} md={9} sx={{ mb: 3 }}>
                                        <Typography sx={{ color: (theme) => theme.palette.error.darker, fontSize: 25 }}>Transperant Fee Structure</Typography>
                                        <Typography sx={{ color: (theme) => theme.palette.error.darker }}>We at Recoversy believe in "Work first pay later"! Thus we charge a fee only after we have successfully recovered your investments. So as an investor, you have got nothing to lose!</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Card>
            </Container>
            <Box component={"div"} sx={{ mt: 6, backgroundColor: '#43cdcd', color: 'white' }}>
                <Typography sx={{ textAlign: 'center', fontSize: 35, p: 3 }}>Where are my investments Unclaimed?</Typography>
                <Container sx={{ p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3} sx={{ textAlign: 'center', mt: 3 }}>
                            <StyledIcon
                                sx={{
                                    backgroundImage: (theme) =>
                                        `linear-gradient(135deg, ${alpha(theme.palette.info.light, 0)} 0%, ${alpha(
                                            theme.palette.info.light,
                                            1
                                        )} 100%)`,
                                }}
                            ><img src={Home1Image} alt="" height={60} /></StyledIcon>
                            <Typography sx={{ mt: 2.5 }}>RS. 2 Cr</Typography>
                            <Typography sx={{ mt: 1 }}>Value of unclaimed shares transferred to IEPF</Typography>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ textAlign: 'center', mt: 3 }}>
                            <StyledIcon
                                sx={{
                                    backgroundImage: (theme) =>
                                        `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0)} 0%, ${alpha(
                                            theme.palette.primary.light,
                                            1
                                        )} 100%)`,
                                }}
                            ><img src={Home2Image} alt="" height={60} /></StyledIcon>
                            <Typography sx={{ mt: 2.5 }}>RS. 1 Cr</Typography>
                            <Typography sx={{ mt: 1 }}>Value of unclaimed mutual fund units</Typography>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ textAlign: 'center', mt: 3 }}>
                            <StyledIcon
                                sx={{
                                    backgroundImage: (theme) =>
                                        `linear-gradient(135deg, ${alpha(theme.palette.warning.light, 0)} 0%, ${alpha(
                                            theme.palette.warning.light,
                                            1
                                        )} 100%)`,
                                }}
                            ><img src={Home3Image} alt="" height={50} /></StyledIcon>
                            <Typography sx={{ mt: 2.5 }}>RS. 1 Cr</Typography>
                            <Typography sx={{ mt: 1 }}>Value of unclaimed corporate dividends and deposits</Typography>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ textAlign: 'center', mt: 3 }}>
                            <StyledIcon
                                sx={{
                                    backgroundImage: (theme) =>
                                        `linear-gradient(135deg, ${alpha(theme.palette.error.light, 0)} 0%, ${alpha(
                                            theme.palette.error.light,
                                            1
                                        )} 100%)`,
                                }}
                            ><img src={Home4Image} alt="" height={50} /></StyledIcon>
                            <Typography sx={{ mt: 2.5 }}>RS. 2 Cr</Typography>
                            <Typography sx={{ mt: 1 }}>Unclaimed Public Provident Fund (PPF)</Typography>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ textAlign: 'center', mt: 3 }}>
                            <StyledIcon
                                sx={{
                                    backgroundImage: (theme) =>
                                        `linear-gradient(135deg, ${alpha(theme.palette.info.light, 0)} 0%, ${alpha(
                                            theme.palette.info.light,
                                            1
                                        )} 100%)`,
                                }}
                            ><img src={Home5Image} alt="" height={40} /></StyledIcon>
                            <Typography sx={{ mt: 2.5 }}>RS. 2 Cr</Typography>
                            <Typography sx={{ mt: 1 }}>Value of matured Insurance policies</Typography>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ textAlign: 'center', mt: 3 }}>
                            <StyledIcon
                                sx={{
                                    backgroundImage: (theme) =>
                                        `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0)} 0%, ${alpha(
                                            theme.palette.primary.light,
                                            1
                                        )} 100%)`,
                                }}
                            ><img src={Home6Image} alt="" height={40} /></StyledIcon>
                            <Typography sx={{ mt: 2.5 }}>RS. 1 Cr</Typography>
                            <Typography sx={{ mt: 1 }}>Unclaimed amount in bank accounts</Typography>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ textAlign: 'center', mt: 3 }}>
                            <StyledIcon
                                sx={{
                                    backgroundImage: (theme) =>
                                        `linear-gradient(135deg, ${alpha(theme.palette.warning.light, 0)} 0%, ${alpha(
                                            theme.palette.warning.light,
                                            1
                                        )} 100%)`,
                                }}
                            ><img src={Home7Image} alt="" height={40} /></StyledIcon>
                            <Typography sx={{ mt: 2.5 }}>RS. 1 Cr</Typography>
                            <Typography sx={{ mt: 1 }}>Unclaimed amount in UTI Schemes</Typography>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ textAlign: 'center', mt: 3 }}>
                            <StyledIcon
                                sx={{
                                    backgroundImage: (theme) =>
                                        `linear-gradient(135deg, ${alpha(theme.palette.error.light, 0)} 0%, ${alpha(
                                            theme.palette.error.light,
                                            1
                                        )} 100%)`,
                                }}
                            ><img src={Home8Image} alt="" height={40} /></StyledIcon>
                            <Typography sx={{ mt: 2.5 }}>RS. 2 Cr</Typography>
                            <Typography sx={{ mt: 1 }}>Amount of physical shares not yet dematerilized</Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Typography sx={{ textAlign: 'center', p: 3 }}>*Approx amount updated as on 31/03/2023</Typography>
            </Box>
            <Box sx={{ backgroundColor: '#e0f2f1' }}>
                <Typography variant="h3" sx={{ textAlign: 'center', pt: 3 }}>Committed To Ease Your Recovery Process</Typography>
                <Typography sx={{ textAlign: 'center', fontSize: 30 }}>Our Services</Typography>
                <Container>
                    <HomeCards cardData={cardData} />
                </Container>
            </Box>
            <Box >
                <Box sx={{ p: 5 }}>
                    <Typography variant="h2" sx={{ textAlign: 'center', mt: 2 }}>Why Us</Typography>
                    <Typography sx={{ textAlign: 'center', fontSize: 30, mt: 4 }}>Professional And Experienced Investment Recovery Consultants</Typography>
                    <Container sx={{ mt: 3 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h4" sx={{ textAlign: 'center', mt: 3 }}>Excellent track record</Typography>
                                <Typography sx={{ textAlign: 'center', mt: 3 }}>At Recoversy we maintain a healthy track record of a 100% recovery rate no matter what the case may be. You can rest assured that we will leave no stones unturned to recover your unclaimed investments in the least possible time.</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h4" sx={{ textAlign: 'center', mt: 3 }}>We run the extra mile</Typography>
                                <Typography sx={{ textAlign: 'center', mt: 3 }}>We do all the hard work for you and make sure to cover the extra mile to get your investment back so that you don't have to. We make sure that you worry only about planning how to spend the extra dollar that we would be recovering back for you.</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h4" sx={{ textAlign: 'center', mt: 3 }}>Success payment</Typography>
                                <Typography sx={{ textAlign: 'center', mt: 3 }}>Recoversy believes in the policy of "Work First, Pay Later"! Thus, our fee wholly depends on the success of our work done. Also, we calculate our charges only on the amount that can be realized by you instantaneously thus, you pay us only on the amount you have realized.</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: '#e0f2f1', mt: 2 }}>
                <Typography variant="h2" sx={{ textAlign: 'center', pt: 3 }}>Reviews from our Clients</Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', m: 2 }}>Customer appreciation is what defines our success rather than the amount we have recovered for them</Typography>
                <ReviewCards data={reviewCards} />
            </Box>
        </>
    )
}