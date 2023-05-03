import React, { useEffect } from 'react'
import { Box, Card, Container, Divider, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import FaqBackground from '../../components/assets/img/Faq-background.jpg'


export default function FAQ() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const useStyles = makeStyles({
        root: {
            "&.MuiAccordion-rounded": {
                borderRadius: '45px',
            }
        }
    });

    const classes = useStyles()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Box component={"div"} sx={{
                height: 300, background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(${FaqBackground}) no-repeat`, backgroundSize: '100% 100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column'
            }}>
                <Typography sx={{ color: 'white', fontSize: 45 }}>Frequently Asked Questions</Typography>
            </Box>
            <Container sx={{ mb: 4, }}>
                <Box>
                    <Typography sx={{ textAlign: 'center', mt: 3, fontSize: 35 }}>
                        Your go-to guide for investment recovery
                    </Typography>
                </Box>
            </Container>
            <Box sx={{ display: { sm: 'flex', xs: 'block', }, justifyContent: 'center' }}>
                <Box xs={12} md={6} sx={{ m: 3, maxWidth: 550 }}>
                    <Box sx={{ p: 1 }}>
                        <Typography sx={{ fontSize: 30, ml: 2 }}>IEPF Claim</Typography>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon sx={{ m: 'auto' }} /></Card>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>Who can claim for IEPF</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    Any individual/company whose shares, dividends, matured deposits or application amount is unclaimed and transferred to IEPF can make a claim with IEPF. Also, a legal heir of a deceased shareholder can also make a legal claim with IEPF to get the holdings recovered and transmitted under his/her name.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.6 }}><AddIcon /></Card>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>What do you need for IEPF claim</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    We at Recoversy make sure that the recovery process for you is hassle free. We need some basic identification documents viz.
                                    <ul style={{ marginLeft: '25px', marginTop: '10px' }}>
                                        <li>Aadhaar card / Passport (incase of NRI citizen)</li>
                                        <li>PAN card (Indian or NRI citizen)</li>
                                        <li>Cancelled cheque of bank account</li>
                                        <li>CML (client master ledger) of demat account</li>
                                        <li>Original investment documents</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon /></Card>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>When is your consulting fee charged</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    We believe we should be paid only when we deliver what we promised. Thus, we charge a fee only after you have got your investments back in your demat a/c or bank a/c. Although we do charge a minimal initial refundable deposit, which is refundable if we are unable to recover back your investments.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon /></Card>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>
                                    How do you know my details?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    Recoversy has incorporated strict policies for personal and financial data handling. We collect details from various authenticated sources and make sure that investors are provided with a one stop destination for all the investment recovery needs.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon /></Card>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>Who prepares the documents for IEPF?</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    Once you appoint Recoversy as your investment recovery partner we take care of all the communications, documents and process. Although, there are some documents which require you in-presence like FIR (for loss of share certificate), Legal heir or succession certificate. Need not worry we do have a legal team who can take care of all the above and get the process done seamlessly.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon /></Card>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>How much time is required for complete the process?</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    We get this question a number of times. The process completely depends on how soon we are provided with the documents asked. Usually the process takes around 4-5 months but there are cases under which Recoversy was able to recover shares from IEPF within a span of less than 30 days. Also, if there are some issues with your primary documents that might delay the process.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon /></Card>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>Are you affiliated with IEPF authority?</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    No we are not!! As a matter of fact no-one in our investment recovery business is. If someone claims to be IEPF affiliated he is basically a fraud. So beware while you deal with people claiming to help you recover your shares from IEPF. But let us assure you we definitely know how to get things done.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
                <Box sx={{ m: 3, maxWidth: 550 }}>
                    <Typography sx={{ fontSize: 30, ml: 2 }}>General Queries</Typography>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon sx={{ m: 'auto' }} /></Card>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>How can i start the work with you?</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    We at Recoversy makes sure that everything is transparent thus before we start any process we ask you to sign a mandate form which briefly indicates all the terms & conditions. Once you agree on the same and the initial security deposit is paid we immediately start the recovery process.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon /></Card>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>What documents will i need?</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    All the documents required depends on case to case basis. There are a basic set of identification documents required like
                                    <ul style={{ marginLeft: '25px', marginTop: '10px' }}>
                                        <li>Aadhaar card / Passport (incase of NRI citizen)</li>
                                        <li>PAN card (Indian or NRI citizen)</li>
                                        <li>Cancelled cheque of bank account</li>
                                        <li>CML (client master ledger) of demat account</li>
                                        <li>Original investment documents</li>
                                    </ul>
                                </Typography>
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    For specific cases like Name change, death claim case, transfer / transmission of shares, etc. documents required are variable. Contact us today to know about the documents needed under your case.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon /></Card>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>I don't have any documents can you still search my investment?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    Yes we can! We just need your complete name and the last know address so that we can appropriately locate and verify investments under your name.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel11'} onChange={handleChange('panel11')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon /></Card>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>
                                    Will you need a power of Attorny?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    Although we don’t ask for the same but to ease up the process at your end you can provide a special power of attorney to any of your close friends or family in India or infact to us. Be rest assured we are a trusted name in the industry and can very well be trusted with a special power of attorney.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel12'} onChange={handleChange('panel12')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon /></Card>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>What if the investments are not recovered?</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    You got nothing to lose! We clearly state in our agreement that the amount submitted by you as Security Deposit is completely refundable in case we are unable to recover your investments.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel13'} onChange={handleChange('panel13')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon /></Card>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>Do i need to visit your office?</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    No you do not! In this digital world we believe visiting offices is cliche. We have our complete process done online, although we do require signatures on the documents, which is taken care by our document collection team.
                                </Typography>
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    Although, if you wish to visit our office you are wholeheartedly welcome. We would love to have a chat with you.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Accordion elevation={10} sx={{ mt: 1 }} expanded={expanded === 'panel14'} onChange={handleChange('panel14')} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<Card sx={{ backgroundColor: '#2cccc4', color: 'white', m: 0.5 }}><AddIcon /></Card>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontSize: 20, color: "#212B36" }}>Can you help opening a demat account?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Divider sx={{ backgroundColor: '#212B36', height: 1 }} />
                                <Typography sx={{ mt: 2, p: 1 }}>
                                    Although, we do not operate as a Depository Participant we do have some collaborations with India’s No.1 stock broker (Zerodha) and thus can help you open a demat account right away. You can use the below attached link to open a demat account right away
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Box>
        </>
    )
}