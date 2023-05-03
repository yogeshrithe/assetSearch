import React, { useEffect } from 'react'
import { Box, Button, Card, Chip, Container, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';



export default function ViewOrdersViewPage({ data, showList }) {

    const navigate = useNavigate()

    const startRecovery = () => {
        navigate("/investmentDetails", { state: { data: data, isRecovery: true } })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Card sx={{ backgroundColor: '#e0f2f1' }}>
                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{ maxWidth: 600, mt: 3, }}>
                        <Container>
                            <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                                <Grid item xs={12} md={6}>
                                    <Typography><b>Unique Id </b></Typography>
                                    <Typography>{data.comapny_unique_id}</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography sx={{ pr: 2 }}><b>Name </b> </Typography>
                                    <Typography>{data.user_name}</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography><b>Amount </b> </Typography>
                                    <Typography>{data.charges_amount}</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography><b>Company Name</b> </Typography>
                                    <Typography>{data.company_name}</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography><b>Date</b> </Typography>
                                    <Typography>{data.date}</Typography>
                                </Grid>
                            </Grid>
                        </Container>
                        <Box component={"div"} sx={{ textAlign: 'center', mt: 5, mb: 5 }}>
                            <Button variant='contained' onClick={() => startRecovery()}>Start Your Recovery</Button>
                        </Box>
                    </Card>
                </Container>


                <Box component={"div"} sx={{ textAlign: 'center', mb: 5, mt: 3 }}>
                    <Button variant='contained' onClick={() => { showList() }}>Back</Button>
                </Box>
            </Card>
        </>
    )
}