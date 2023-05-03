import { Card, CardContent, Grid, Typography } from "@mui/material";
import CountUp from 'react-countup';
import { makeStyles } from "@mui/styles";


export default function AboutCards({ cardData }) {

    const useStyles = makeStyles({
        root: {
            maxWidth: 310,
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        },
    });

    const classes=useStyles()

    return (
        <>
            <Grid container spacing={2} sx={{ p: 3, mb: 5 }}>
                {cardData.map((item, index) => {
                    return (
                        <Grid item xs={12} md={4} key={index}>
                            <Card className={classes.root}>
                                <CardContent sx={{ textAlign: 'center', mb: 2 }}>
                                    <Typography variant="h2" sx={{ textAlign: 'center',color: '#009090', mt: 2, mb: 2 }}>
                                        <CountUp enableScrollSpy style={{ fontSize: "50px" }} end={item.Amount} /> Lac ₹
                                    </Typography>
                                    <Typography variant='h6'>{item.title}</Typography>
                                    <Typography sx={{ mt: 2 }}>{item.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}