import React, { useEffect } from 'react'
import { TableContainer, Card, Paper, Table, TableHead, TableRow, TableCell, TableBody, Tooltip, Fab, Box, Button } from "@mui/material";
import axios from 'axios'
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import Iconify from '../../../components/iconify';
import Dialogs from "../dialog/Dialog";
import appConstants from '../../../utils/appConstants'

export default function LegalHeir({ value }) {
    const [btnText, setBtnText] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const [legalHeirsData, setLegalHeirsData] = React.useState([])
    const [editValue, setEditValue] = React.useState({})


    const handleClickOpen = (text, data) => {
        setBtnText(text)
        setOpen(true);
        if (data) {
            setEditValue(data)
        }
    };

    const getData = () => {
        const formData = new FormData()
        formData.append("user_id", JSON.parse(localStorage.getItem('userDetails')).id)
        formData.append("api_token", JSON.parse(localStorage.getItem('userDetails')).api_token)
        axios.post(appConstants.GET_USER_LEGAL_HEIRS, formData, { headers: { "Content-Type": "multipart/form-data" } }).then((response) => {
            console.log(response)
            setLegalHeirsData(response.data.legal_heirs)
        })
    }

    const handleClose = () => {
        setOpen(false)
        getData()
    };

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [open])


    return (
        <>
            <Card>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell >Name</TableCell>
                                <TableCell align="center">Relation</TableCell>
                                <TableCell align="center">PAN No</TableCell>
                                <TableCell align="center">AADHAR No</TableCell>
                                <TableCell align="center">Address</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {legalHeirsData.map((row, index) => (
                                <TableRow
                                    hover
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.relation}</TableCell>
                                    <TableCell align="center">{row.pan_number}</TableCell>
                                    <TableCell align="center">{row.aadhar_number}</TableCell>
                                    <TableCell align="center">{row.address}</TableCell>
                                    <TableCell align="center">
                                        <Tooltip title='Edit'>
                                            <Fab size="small" sx={{ backgroundColor: '#2cccc4' }} aria-label="add" onClick={() => handleClickOpen('Update', row)}>
                                                <ModeEditOutlineTwoToneIcon sx={{ color: 'white' }} />
                                            </Fab>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
            <Box component={"div"} sx={{ textAlign: 'center', mt: 4 }}>
                <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={() => handleClickOpen('Add')}>
                    New Legal Heir
                </Button>
            </Box>
            <Dialogs open={open} btnText={btnText} value={value} handleClose={handleClose} editValue={editValue} />
        </>
    )
}