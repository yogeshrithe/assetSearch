import React, { useEffect } from 'react'
import { Box, Card, Container, Divider, Grid, Typography } from "@mui/material";
import CountUp from 'react-countup';
import AboutCards from "./AboutCards";
import AboutBackground from '../../components/assets/img/About-us.jpg'

export default function About() {

    const cardData = [{ Amount: 20, color: 'info', title: 'VALUE OF SHARES RECOVERED FROM IEPF', description: 'We strive daily and help investors claim back their lost and unclaimed investments from the IEPF Authority' },
    { Amount: 30, color: 'warning', title: 'UNCLAIMED MUTUAL FUNDS AND BANK ACCOUNTS', description: 'Recoversy has helped investors and their successors get back the unclaimed mutual fund units and bank accounts.' },
    { Amount: 40, color: 'error', title: 'PHYSICAL SHARES DEMATERIALISED', description: 'Recoversy has helped tens of investors resolve their issues with physical shares and get them dematerialized.' },]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Box component={"div"} sx={{
                height: 300, background: `url(${AboutBackground})`, backgroundSize: '100% 100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column'
            }}>
                <Typography sx={{ color: 'white', fontSize: 45 }}>About Us</Typography>
            </Box>
            <Container sx={{ p: 3 }}>
                <Typography variant="h3" sx={{ textAlign: 'center' }}>Our Moto - Ease your Recovery</Typography>
                <Typography sx={{ textAlign: 'center', mt: 2, fontSize: 19 }}>At Recoversy, we come to the office every day to solve one of the biggest problems investors face once they<br /> lose track of their investments.</Typography>
                <Box sx={{ mt: 5, fontSize: 19, display: 'flex', justifyContent: 'center', ml: 3 }}>
                    <ul>
                        <li>How will I be able to find and recover back my investments?</li>
                        <li>Did my parents (loved ones) had some investments which I am unaware of?</li>
                        <li>Have I recovered the complete value of investments, is there anything unclaimed?</li>
                    </ul>
                </Box>
                <Typography sx={{ fontSize: 19, textAlign: 'center', mt: 5 }}>We make sure you don’t face this dilemma & even if you do forget, we will search and bring back your investments. We don’t take you up as a client, we take your investment as ours and we definitely make sure we get back our every penny.</Typography>
                <Typography sx={{ textAlign: 'center', mt: 2 }}><b>No Matter What!</b></Typography>
                <Typography variant="h2" sx={{ color: '#009090', textAlign: 'center', mt: 10 }}>How Much Have We Recovered?</Typography>
                <Divider sx={{ backgroundColor: '#009090', mt: 2, height: 2 }} />
                <Typography variant="h2" sx={{ color: '#009090', textAlign: 'center', mt: 5 }}>
                    <CountUp enableScrollSpy style={{ fontSize: "50px" }} end={72} /> Cr ₹
                </Typography>
                <Typography sx={{ color: '#009090', fontSize: 18, textAlign: 'center', mt: 1 }}>Investment amount found by investors on our portal</Typography>
                <AboutCards cardData={cardData} />
                <Divider sx={{ backgroundColor: '#009090', mt: 2, height: 2 }} />
            </Container>
        </>
    )
}