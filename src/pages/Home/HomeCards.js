import {useNavigate} from 'react-router-dom'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { alpha, styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";



export default function ServicesCards({ cardData, other, sx }) {

    const navigate=useNavigate()

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

    const useStyles = makeStyles({
        root: {
            maxWidth: 310,
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        },
    });

    const classes = useStyles()

    return (
        <>
            <Grid container spacing={4} sx={{ p: 5 }} alignContent="center" justifyContent={"center"}>
                {cardData.map((item,index) => {
                    return (
                        <Grid item xs={12} md={3} key={index}>
                            <Card sx={{ ...sx, }} {...other} className={classes.root}>
                                <StyledIcon
                                    sx={{
                                        mt: 4,
                                        backgroundImage: (theme) =>
                                            `linear-gradient(135deg, ${alpha('#2cccc4', 0)} 0%, ${alpha(
                                                '#2cccc4',
                                                0.24
                                            )} 100%)`,
                                    }}
                                >
                                    <CardMedia component="img"
                                        sx={{ height: '30px', width: '30px', margin: 'auto', filter: 'brightness(100%)', }}
                                        image={item.icon}
                                        alt="Paella dish" />
                                </StyledIcon>
                                <CardContent sx={{ textAlign: 'center', mb: 2 }}>
                                    <Typography variant='h6'>{item.title}</Typography>
                                    <Typography sx={{ mt: 2 }}>{item.description}</Typography>
                                </CardContent>
                                <Box sx={{ textAlign: 'center',mb:3 }}>
                                    <Button onClick={()=>navigate("/services")}>VIEW</Button>
                                </Box>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}