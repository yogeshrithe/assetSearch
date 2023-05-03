import React from 'react'
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography,Button } from "@mui/material"
import { alpha, styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";



export default function ServicesCards({ cardData, other, sx }) {

    const useStyles = makeStyles({
        root: {
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        },
    });

    const classes=useStyles()


    const StyledIcon = styled('div')(({ theme }) => ({
        margin: 'auto',
        display: 'flex',
        borderRadius: '50%',
        alignItems: 'center',
        width: theme.spacing(8),
        height: theme.spacing(8),
        justifyContent: 'center',
        marginBottom: theme.spacing(1),
    }));

    return (
        <>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {cardData.map((item, index) => {
                    return (
                        <Grid item xs={12} md={4} key={index}>
                            <Card className={classes.root} sx={{maxWidth:330}}>
                                <Box sx={{ p: 2 }}>
                                    <StyledIcon
                                        sx={{
                                            mt: 4,
                                            backgroundImage: (theme) =>
                                                `linear-gradient(135deg, ${alpha(theme.palette[item.color].dark, 0)} 0%, ${alpha(
                                                    theme.palette[item.color].dark,
                                                    0.24
                                                )} 100%)`,
                                        }}
                                    >
                                        <CardMedia component="img"
                                            sx={{ height: '50px', width: '50px', margin: 'auto', color: (theme) => theme.palette[item.color].dark, }}
                                            image={item.icon}
                                            alt="Paella dish" />
                                    </StyledIcon>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant='h6'>{item.title}</Typography>
                                        <Typography sx={{ mt: 2 }}>{item.description.slice(0, 150)}</Typography>
                                    </CardContent>
                                    {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Container>
                                            {item.list.map((list, index) => {
                                                return (
                                                    <ul key={index}>
                                                        <li>{list.text.slice(0,150)}</li>
                                                    </ul>
                                                )
                                            })}

                                        </Container>
                                    </Box> */}
                                    <Box sx={{textAlign:'center'}}>
                                        <Button className={classes.root}>READ MORE</Button>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    )
                })}</Grid>
        </>
    )
}