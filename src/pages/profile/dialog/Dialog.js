/* eslint-disable no-useless-escape */

import React, { useEffect, useCallback } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, Container, DialogTitle, Grid, InputLabel, TextField, Typography } from '@mui/material';
import appConstants from '../../../utils/appConstants'


export default function Dialogs({ open, btnText, value, handleClose, editValue }) {

    const [id, setId] = React.useState('')
    const [name, setName] = React.useState('')
    const [relation, setRelation] = React.useState('')
    const [panNumber, setPanNumber] = React.useState('')
    const [aadharNumber, setAadharNumber] = React.useState('')
    const [address, setAddress] = React.useState('')

    const relationOptions = [{ label: 'Father', value: 'Father' },
    { label: 'Mother', value: 'Mother' },
    { label: 'Brother', value: 'Brother' },
    { label: 'Sister', value: 'Sister' },
    { label: 'Other', value: 'Other' }]

    const clearNomineeAndLegalHeirData = () => {
        setName('')
        setRelation('')
        setPanNumber('')
        setAadharNumber('')
        setAddress('')
    }

    const setCustomValidity = () => {
        const Name = document.querySelector('#name');
        const PanNo = document.querySelector("#panNo")
        const AadharNo = document.querySelector("#aadharNo")
        Name.setCustomValidity('');
        PanNo.setCustomValidity('');
        AadharNo.setCustomValidity('');
    }


    const updateDetails = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            console.log("false")
            return false
        }
        else {
            console.log("valid")
            const formData = new FormData()
            formData.append("user_id", JSON.parse(localStorage.getItem("userDetails")).id)
            if (btnText === 'Update') {
                formData.append("id", id)
                formData.append("action", "update")
            }
            else if (btnText === 'Add') {
                formData.append("action", "insert")
            }
            formData.append("api_token", JSON.parse(localStorage.getItem("userDetails")).api_token)
            formData.append("name", name)
            formData.append("relation", relation)
            formData.append("pan_number", panNumber)
            formData.append("aadhar_number", aadharNumber)
            formData.append("address", address)

            if (value === '2') {
                axios.post(appConstants.MANAGE_NOMINEES, formData, { headers: { "Content-Type": 'multipart/form-data' } }).then((response) => {
                    if (response.data.result) {
                        if (btnText === 'Update') {
                            toast("Nominee Data updated successfully", { type: 'success', pauseOnFocusLoss: false })
                        }
                        else if (btnText === 'Add') {
                            toast("Nominee Data Added successfully", { type: 'success', pauseOnFocusLoss: false })
                        }
                    }
                    else if (!response.data.result) {
                        if (btnText === 'Update') {
                            toast("Nominee Data not updated successfully", { type: 'success', pauseOnFocusLoss: false })
                        }
                        else if (btnText === 'Add') {
                            toast("Nominee Data not Added successfully", { type: 'success', pauseOnFocusLoss: false })
                        }
                    }
                })

            }
            else if (value === '3') {
                axios.post(appConstants.MANAGE_LEGAL_HEIRS, formData, { headers: { "Content-Type": 'multipart/form-data' } }).then((response) => {
                    if (response.data.result) {
                        if (btnText === 'Update') {
                            toast("Legal Heir Data updated successfully", { type: 'success', pauseOnFocusLoss: false })
                        }
                        else if (btnText === 'Add') {
                            toast("Legal Heir Data Added successfully", { type: 'success', pauseOnFocusLoss: false })
                        }
                    }
                    else if (!response.data.result) {
                        if (btnText === 'Update') {
                            toast("Legal Heir Data not updated successfully", { type: 'success', pauseOnFocusLoss: false })
                        }
                        else if (btnText === 'Add') {
                            toast("Legal Heir Data not Added successfully", { type: 'success', pauseOnFocusLoss: false })
                        }
                    }
                })
            }
            clearNomineeAndLegalHeirData()
            handleClose()


        }
    }

    useEffect(() => {
        if (btnText === 'Update') {
            setId(editValue.id)
            setName(editValue.name)
            setRelation(editValue.relation)
            setPanNumber(editValue.pan_number)
            setAadharNumber(editValue.aadhar_number)
            setAddress(editValue.address)
        }
    }, [editValue])


    return (
        <>
            <Dialog
                open={open}
                onClose={() => { clearNomineeAndLegalHeirData(); handleClose() }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center', color: (theme) => theme.palette.info.darker }}>
                    <Typography variant='h4'>{value === '2' ? "Nominee" : 'Legal Heir'}</Typography>
                </DialogTitle>
                <DialogContent>
                    <Box component={"form"} onSubmit={updateDetails}>
                        <Container sx={{ mt: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>Name</b></InputLabel>
                                    <TextField fullWidth size="small" inputProps={{ pattern: "^[a-zA-Z\\s]*$" }} onInvalid={(e) => e.target.setCustomValidity("Please enter correct name")} id='name' onChange={(e) => { setName(e.target.value); setCustomValidity() }} value={name} required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>Relation</b></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        value={relation}
                                        size="small"
                                        onChange={(e) => setRelation(e.target.value)}
                                        fullWidth
                                        required
                                    >
                                        {relationOptions.map((item, index) => {
                                            return (
                                                <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                            )
                                        })}

                                    </Select>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>Pan no</b></InputLabel>
                                    <TextField fullWidth size="small" id="panNo" onInvalid={(e) => e.target.setCustomValidity("Please enter correct pan no")} inputProps={{ pattern: "[A-Z]{5}[0-9]{4}[A-Z]{1}" }} onChange={(e) => { setPanNumber(e.target.value); setCustomValidity() }} value={panNumber} required />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputLabel><b>Aadhar no</b></InputLabel>
                                    <TextField fullWidth size="small" id="aadharNo" onInvalid={(e) => e.target.setCustomValidity("Please enter correct aadhar no")} inputProps={{ pattern: "^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$" }} onChange={(e) => { setAadharNumber(e.target.value); setCustomValidity() }} value={aadharNumber} required />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <InputLabel><b>Address</b></InputLabel>
                                    <TextField fullWidth size="small" id="address" multiline rows={5} onChange={(e) => setAddress(e.target.value)} value={address} required />
                                </Grid>
                            </Grid>
                        </Container>
                        <DialogActions sx={{ mt: 2 }}>
                            <Button onClick={() => { clearNomineeAndLegalHeirData(); handleClose() }} variant="contained">Cancel</Button>
                            <Button autoFocus variant="contained" type='submit'>
                                {btnText}
                            </Button>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}