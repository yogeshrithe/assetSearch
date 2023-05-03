import React, { useEffect } from 'react'
import { Box, Button, Card, Chip, Container, Grid, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

export default function RecoveryOrdersViewPage({ showList, data }) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Card sx={{ backgroundColor: '#e0f2f1' }}>
                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{ maxWidth: 600, mt: 3 }}>
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
                    </Card>
                </Container>
                <Container sx={{ mb: 6, mt: 9 }}>
                    <Box component={"div"} sx={{ textAlign: 'center' }}>
                        <Chip label="Pending" sx={{ backgroundColor: (theme) => theme.palette.warning.lighter }} size='medium' />
                    </Box>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FastfoodIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Creative Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FastfoodIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                            <p>
                                User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FastfoodIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<FastfoodIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                            <p>
                                Strategy, Social Media
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </Container>

                <Box component={"div"} sx={{ textAlign: 'center', mb: 5, mt: 3 }}>
                    <Button variant='contained' onClick={() => { showList();window.scrollTo(0, 0) }}>Back</Button>
                </Box>
            </Card>

        </>
    )
}