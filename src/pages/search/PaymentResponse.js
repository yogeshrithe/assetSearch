import React, { useEffect } from 'react'
import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import paymentSuccessfull from '../../components/assets/img/payment-successfull.gif'
import paymentFailed from '../../components/assets/img/payment-failed.gif'

export default function PaymentResponse() {

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Container>
                <Box component={"div"} sx={{ display: 'flex', justifyContent: 'center', flexShrink: 0, mt: 6 }}>
                    <Card sx={{ width: 550 }}>
                        {location.state.payment ? <>
                            <Box component={"div"} sx={{ display: 'flex', justifyContent: 'center', height: 250 }}>
                                <Box component="img" src={paymentSuccessfull} height={300} />
                            </Box>
                            <Typography variant="h3" color="green" sx={{ textAlign: 'center' }}>Payment successfull</Typography>
                        </> : <>
                            <Box component={"div"} sx={{ display: 'flex', justifyContent: 'center', height: 380 }}>
                                <Box component="img" src={paymentFailed} height={500} />
                            </Box>
                            <Typography variant="h3" color="red" sx={{ textAlign: 'center' }}>Payment Failed</Typography>
                        </>}
                        <Box component={"div"} sx={{ textAlign: 'center', mt: 4 }}>
                            <Stack spacing={3}>
                                <Typography><b>Transaction Id:</b>  {"ID123456"}</Typography>
                                <Typography><b>Name:</b>  {location.state.data.fullName}</Typography>
                                <Typography><b>Email:</b>  {location.state.data.email}</Typography>
                                <Typography><b>Mobile No:</b>  {location.state.data.phoneNo}</Typography>
                                <Typography><b>Amount:</b>  &#8377;{location.state.data.amount}</Typography>
                                <Typography><b>Date:</b>  {moment(location.state.data.date).format("DD-MM-YYYY")}</Typography>
                            </Stack>
                        </Box>
                        <Box component={"div"} sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
                            <Button variant="contained" onClick={() => navigate("/profile", { state: { data: location.state.data } })}>Ok</Button>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </>
    )
}