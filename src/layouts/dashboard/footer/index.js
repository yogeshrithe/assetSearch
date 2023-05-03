

import { makeStyles } from "@mui/styles";

import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Whatsapp from '../../../components/assets/img/whatsapp.png'
import Facebook from '../../../components/assets/img/facebook.png'
import Twitter from '../../../components/assets/img/twitter.png'
import Instagram from '../../../components/assets/img/instagram.png'


const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.info.lighter,
        width: `100%`,
        height: "100%",
        overflow: "hidden",
        padding: "2em 0 ",
        marginTop: '100px',
        position: 'relative',
    },
    link: {
        fontSize: "1.25em",
        color: "#fff",
        "&:hover": {
            color: theme.palette.info.main,
        },
    },
    copylight: {
        color: theme.palette.info.darker,
        "&:hover": {
            color: theme.palette.error.main,
        },
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Box component={"div"} sx={{ backgroundColor: '#2cccc4', width: '100%', mt: 13, color: 'white',bottom:'0px' }}>
            <Container>
                <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                    <Grid item xs={12} md={3} sx={{ mt: 1 }}>
                        <Typography variant="h4">Who We Are?</Typography>
                        <Typography sx={{ mt: 2 }}>Who we are?
                            Recoversy is an investment recovery agency that strives to help investors recover their unclaimed and lost investments. Recoversy also provides a search portal to help investors search for their unclaimed investments</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ mt: 1 }}>
                        <Typography variant="h4">Recent Posts</Typography>
                        <Typography sx={{ mt: 2 }}>Why my dividend is unclaimed?</Typography>
                        <Typography sx={{ mt: 2 }}> What is IEPF?</Typography>
                        <Typography sx={{ mt: 2 }}> How can I claim unclaimed dividends?</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ mt: 1 }}>
                        <Typography variant="h4">Contact Details</Typography>
                        <Typography sx={{ mt: 2 }}>Email: info@recoversy.in</Typography>
                        <Typography sx={{ mt: 2 }}> Mobile: +91-7020576005</Typography>
                        <Typography sx={{ mt: 2 }}> Pay to Recoversy</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ mt: 1 }}>
                        <Typography sx={{ mt: 2 }}>FAQ</Typography>
                        <Typography sx={{ mt: 2 }}> Terms and Sonditions</Typography>
                        <Typography sx={{ mt: 2 }}> Privacy Policy</Typography>
                        <Typography sx={{ mt: 2 }}> Sitemap</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ backgroundColor: 'white', mt: 2, height: 2 }} />
            <Container sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                <Stack direction="row">
                    <img src={Facebook} alt="" height={30} style={{ marginRight: '20px' }} />
                    <img src={Whatsapp} alt="" height={30} style={{ marginRight: '20px' }} />
                    <img src={Twitter} alt="" height={30} style={{ marginRight: '20px' }} />
                    <img src={Instagram} alt="" height={30}  />
                </Stack>
            </Container>
            <Typography sx={{ textAlign: 'center', m: 1 }}>Copyright © 2023 by Recoversy | Made with ❤️ in India</Typography>
            <Container sx={{mt:6}}>
                <Typography>Recovery of unclaimed investments made easy with Recoversy
                    If you wish to find your unclaimed investments viz unclaimed shares, dividends, bonds, mutual fund units, public provident fund (PPF), employee provident fund (EPF), properties, etc. Recoversy is a one stop destination for recovery. Our exhaustive search platform brings you information of all unclaimed investments under one roof.</Typography>
                <Typography sx={{mt:6,pb:2}}>Popular unclaimed investments
                    IEPF Shares | Physical Shares | Corporate Dividends | Government Bonds | Corporate Bonds | Bank Accounts | Public Provident Fund (PPF) | Employee Provident Fund (EPF) | Custodian Services | Depositor Accounts | Properties | UTI Schemes | Sardar Sarovar Scheme | Provident Funds</Typography>
            </Container>
        </Box>
    );
};

export default Footer;