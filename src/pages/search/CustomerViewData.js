import React, { useEffect } from "react";
import { Box, Button, Card, Container, Typography } from "@mui/material";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import appConstants from '../../utils/appConstants'


export default function CustomerViewData() {

    const [customerData, setCustomerData] = React.useState({})

    const navigate = useNavigate()

    useEffect(() => {
        setCustomerData(JSON.parse(localStorage.getItem('customerData')))
        getApproxValue(JSON.parse(localStorage.getItem('customerData')).id)
        window.scrollTo(0, 0)
    }, [])

    const handleNavigate = (type) => {
        const customer = JSON.parse(localStorage.getItem("customerData"))
        customer.charges_paid_type = type
        localStorage.setItem("customerData", JSON.stringify(customer))
        navigate("/investmentDetails")
    }

    const getApproxValue = (id) => {
        const formData = new FormData()
        formData.append("company_master_id", id);
        axios.post(appConstants.SEARCH_DETAILS, formData, { headers: { "Content-Type": 'multipart/form-data' } }).then((response) => {
            console.log(response)
            setCustomerData(response.data.user_data)
            response.data.user_data.view_charges = response.data.view_charges
            localStorage.setItem("customerData", JSON.stringify(response.data.user_data))
        })
    }

    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: (theme) => theme.palette.info.darker }} mb={4}>
                    Customers Data
                </Typography>
                <Card sx={{ backgroundColor: (theme) => theme.palette.info.lighter, minHeight: 250, margin: 'auto', maxWidth: 500 }}>
                    <Typography sx={{ ml: 3, mt: 3 }}>
                        <b>Unique Id:</b> {customerData.unique_code}
                    </Typography>
                    <Typography sx={{ ml: 3, mt: 1 }}>
                        <b>Name:</b> {`${customerData.name_of_shareholder} ${customerData.surname_of_shareholder}`}
                    </Typography>
                    <Box component={"div"} sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <Button variant="contained" sx={{ mr: 1 }} onClick={() => handleNavigate(1)}>View Investment Details</Button>
                    </Box>
                    <Box sx={{ textAlign: 'center', mt: 3 }}>
                        <Typography>Unclaimed value to recover</Typography>
                        <Typography sx={{ color: 'red' }}>Approx &#8377;{customerData.approx_value}</Typography>
                    </Box>
                </Card>
            </Container>
        </>
    )
}