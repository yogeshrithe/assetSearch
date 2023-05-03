import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { withStyles } from "@mui/styles";
import axios from 'axios';
import moment from 'moment/moment';
import { Chip, Card, Tooltip, TableContainer, TableCell, Tab, Box, Paper, Table, TableHead, TableRow, TableBody, Fab } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RecoveryOrdersViewPage from './RecoveryOrdersViewPage';
import ViewOrdersViewPage from './ViewOrdersViewPage';
import appConstants from '../../../utils/appConstants'


export default function Orders({ orderValues }) {

    const [orderValue, setOrderValue] = useState('1')
    const [orderViewData, setOrderViewData] = useState([])
    const [orderRecoveryData, setOrderRecoveryData] = useState([])
    const [isOrderView, setIsOrderView] = useState(false)
    const [isRecoveryView, setIsRecoveryView] = useState(false)
    const [viewData, setViewData] = useState({})

    const location = useLocation()

    const PendingChip = withStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.warning.lighter,
            color: theme.palette.warning.darker,
            "&&:hover": {
                color: 'white',
                backgroundColor: theme.palette.warning.darker
            },
        }
    }))(Chip);

    const showViewPage = (text, data) => {
        if (text === 'view') {
            setIsOrderView(true)
        }
        else if (text === 'recovery') {
            setIsRecoveryView(true)
        }
    }

    const showList = () => {
        if (isOrderView) {
            setIsOrderView(false)
        }
        else if (isRecoveryView) {
            setIsRecoveryView(false)
        }
    }

    const handleChange2 = (event, newValue) => {
        setOrderValue(newValue);
    };

    const getFormatedDate = (date) => {
        const d = moment(date).format("DD-MM-YYYY")
        return d
    }


    const setOrderData = (orders) => {
        const result = orders.filter(x => x.charges_paid_type === '1')
        setOrderViewData(result)
        const result1 = orders.filter(x => x.charges_paid_type === '2')
        setOrderRecoveryData(result1)
    }

    useEffect(() => {
        const formData = new FormData()
        formData.append("api_token", JSON.parse(localStorage.getItem('userDetails')).api_token)
        formData.append("user_id", JSON.parse(localStorage.getItem('userDetails')).id)
        axios.post(appConstants.USER_ORDER, formData, { headers: { "Content-Type": 'multipart/form-data' } }).then((response) => {
            setOrderData(response.data.user_orders)
        })
        if (orderValues === 1) {
            setOrderValue("1")
        }
        else if (orderValues === "2") {
            setOrderValue("2")
        }
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <TabContext value={orderValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange2} aria-label="lab API tabs example" variant='fullWidth' TabIndicatorProps={{ style: { backgroundColor: '#2cccc4' } }}>
                        <Tab label="View" value="1" onClick={() => { setIsOrderView(false); setIsRecoveryView(false) }} style={{ color: orderValue === '1' ? '#2cccc4' : '' }} />
                        <Tab label="Recovery" value="2" onClick={() => { setIsOrderView(false); setIsRecoveryView(false) }} style={{ color: orderValue === '2' ? '#2cccc4' : '' }} />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ "&.MuiTabPanel-root": { padding: '14px' } }}>
                    {!isOrderView ? <Card>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >Name</TableCell>
                                        <TableCell align="center">Share Value</TableCell>
                                        <TableCell align="center">Paid Amount</TableCell>
                                        <TableCell align="center">Date</TableCell>
                                        <TableCell align="center">Payment Status</TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orderViewData.map((row, index) => (
                                        <TableRow
                                            hover
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" >
                                                {row.user_name}
                                            </TableCell>
                                            <TableCell align="center">&#8377; {row.share_approx_value}</TableCell>
                                            <TableCell align="center">&#8377; {row.charges_amount}</TableCell>
                                            <TableCell align="center">{getFormatedDate(row.date)}</TableCell>
                                            <TableCell align="center">{row.payment_status === '0' ? <PendingChip label="Pending" /> : <Chip label="Paid" />}</TableCell>
                                            <TableCell align="center">
                                                <Tooltip title='view data'>
                                                    <Fab size="small" sx={{ backgroundColor: '#2cccc4' }} aria-label="add" onClick={() => { setViewData(row); showViewPage("view", row) }}>
                                                        <RemoveRedEyeIcon sx={{ color: 'white' }} />
                                                    </Fab>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card> : <ViewOrdersViewPage data={viewData} showList={showList} />}
                </TabPanel>
                <TabPanel value='2' sx={{ "&.MuiTabPanel-root": { padding: '14px' } }}>
                    {!isRecoveryView ? <Card>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >Name</TableCell>
                                        <TableCell align="center">Amount</TableCell>
                                        <TableCell align="center">Date</TableCell>
                                        <TableCell align="center">Order Status</TableCell>
                                        <TableCell align="center">Payment Status</TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orderRecoveryData.map((row, index) => (
                                        <TableRow
                                            hover
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" >
                                                {row.user_name}
                                            </TableCell>
                                            <TableCell align="center">&#8377; {row.charges_amount}</TableCell>
                                            <TableCell align="center">{getFormatedDate(row.date)}</TableCell>
                                            <TableCell align="center">{row.order_status === '0' ? <PendingChip label="Pending" /> : (row.order_status === '1' ? <Chip label="In Process" /> : <Chip label="Completed" />)}</TableCell>
                                            <TableCell align="center">{row.payment_status === '0' ? <PendingChip label="Pending" /> : <Chip label="Paid" />}</TableCell>
                                            <TableCell align="center">
                                                <Tooltip title='view data'>
                                                    <Fab size="small" sx={{ backgroundColor: '#2cccc4' }} aria-label="add" onClick={() => { setViewData(row); showViewPage("recovery", row) }}>
                                                        <RemoveRedEyeIcon sx={{ color: 'white' }} />
                                                    </Fab>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card> : <RecoveryOrdersViewPage data={viewData} showList={showList} />}
                </TabPanel>
            </TabContext>
        </>
    )
}