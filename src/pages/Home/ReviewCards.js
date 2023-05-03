import { Card, Container, Grid, Typography } from "@mui/material";

export default function ReviewCards({ data }) {
    return (
        <>
            <Container sx={{ mt: 3,p:5 }}>
                <Grid container spacing={2}>
                    {data.map((item, index) => {
                        return (
                            <Grid item xs={12} md={4} sx={{pb:3}} key={index}>
                                <Card>
                                    <Container sx={{p:3}}>
                                        <Typography>{item.description}</Typography>
                                        <Typography variant="h6" textAlign={"center"} mt={3}>{item.name}</Typography>
                                        <Typography variant="subtitle2" textAlign={"center"}>{item.designation}</Typography>
                                    </Container>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}