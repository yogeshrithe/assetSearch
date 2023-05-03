import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Iepf from '../../components/assets/img/Iepf.png'
import TransferShare from '../../components/assets/img/Transfer-shares.png'
import Dmat from '../../components/assets/img/D-mat.png'
import ServiceCards from './ServicesCards'
import OurServicesBackground from '../../components/assets/img/our-services.jpg'


export default function Services() {

    const navigate = useNavigate()

    const useStyles = makeStyles({
        root: {
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        },
    });

    const classes = useStyles()

    const cardData = [{
        icon: TransferShare, color: 'info', title: 'TRANSFER OF SHARES', description: 'An investor may face various problems while transferring shares to his name. Recoversy provides services to investors who encounter the following problems:',
        list: [{ text: 'Mismatch of signature: Sometimes companies deny the transfer of shares due to a mismatch of the signature of the transferor in the transfer deed and specimen signature available in company records.', isReadMore: true, }, { text: 'Non-submission of transfer deed: The buyer has paid the consideration but has not submitted the transfer deed with the company. Consequently, as per the company records, the shares still remain in the seller’s name.', isReadMore: true, }, { text: 'Mutilated share certificates: Due to wear and tear of share certificates sometimes they get mutilated causing problems in share transfer.', isReadMore: true, }]
    },
    { icon: Iepf, color: 'warning', title: 'IEPF CLAIMS', description: 'We have always been guided to invest and forget, we need to correct that now: “Invest and forget but keep the details updated”. There are abundant cases when one buys some shares and due to untimely death or disease loses track of the investment and forgets to tell their successors, according to The Companies Act, 2016 the shares whose dividends are unclaimed for a consecutive period of 7 years are transferred to a government authority called IEPF (Investor Education and Protection Fund) Authority. For claiming any of these shares, the applicant needs to file an application with the IEPF Authority along with the necessary documents, Recoversy helps in speedy and hassle-free recovery from the IEPF Authority.', list: [] },
    { icon: Dmat, color: 'error', title: 'DEMAT OF SHARES', description: 'Below are Some problems that a shareholder often faces. We help investors to convert physical shares to demat.:', list: [{ isReadMore: true, text: 'Dormant demat account: Demat account of an investor may become dormant due to inactivity for a long time. This frequently happens with passive investors who adopt a ‘buy and forget approach. This may also happen with an investor who opens a new demat account without transferring shares to it from an old account. In such cases, the investor faces problems in trading, transfer, and transmission of shares.' }, { isReadMore: true, text: 'Loss of demat details: Due to some reasons, a shareholder may lose his demat details, resulting in a complete lack of communication with the company and depository participant.' }, { isReadMore: true, text: 'A shortfall of updated information: An investor has changed address, but the details are correspondingly not updated with the depository participant or the company, resulting in a mismatch with the shareholder’s database. In this case, the investor may lose benefits such as dividends, bonuses, split shares, rights issues, etc.' }] },]


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Box component={"div"} sx={{
                height: 300, background: `url(${OurServicesBackground})`, backgroundSize: '100% 100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column'
            }}>
                <Typography sx={{ color: 'white', fontSize: 38 }}>Our Services</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ maxWidth: 900 }}>
                    <Typography sx={{ fontSize: 22, p: 5 }}>We at Recoversy cover all aspects of investment recovery, whether it is getting the unclaimed shares transferred to the IEPF Authority back or getting the physical shares transmitted in the name of the legal heir. Recoversy is here for all your recovery. </Typography>
                    <Typography sx={{ fontSize: 20, pl: 5, pr: 2 }}>If you are not sure where to start, give us a call we will guide you and help you bring back any of the unclaimed investments.</Typography>
                </Box>
            </Box>

            <Container sx={{ p: 3 }}>
                <Box component={"div"} sx={{ mb: 4 }}>
                    <Container>
                        <ServiceCards cardData={cardData} />
                    </Container>
                </Box>
                <Card sx={{ mt: 10 }}>
                    <Grid container spacing={2} sx={{ mt: 1, p: 4 }}>
                        <Grid item xs={12} md={8}>
                            <Typography sx={{ fontSize: 19 }}>Let our experience be your guide </Typography>
                            <Typography sx={{ fontSize: 35, mt: 2 }}>Get Your Consultation Free</Typography>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
                            <Button sx={{ maxWidth: 200 }} onClick={() => navigate("/contact")} className={classes.root}>Request Appointment</Button>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </>
    )
}