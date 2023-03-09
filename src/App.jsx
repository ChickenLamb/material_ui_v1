import React from 'react';
import { Typography, AppBar, CardActions, CssBaseline, Grid, Toolbar } from '@mui/material';
import { Container, Button, PhotoCamera, Card, CardMedia, CardContent } from './style';

// const Container1 = styled(Container, {})(({theme})=>({
//     backgroundColor:"red",
//     ".MuiButtonBase-root":{
//         width:500
//     }
//   }));
// const Container1 = styled(Container, {})`background-color:red;`;
// const StyledButton = styled(Button)(({ theme, color }) => ({
//     minWidth: 0,
//     margin: theme.spacing(0.5),
//     backgroundColor: color ? theme.palette[color].light : undefined
//   }));
// const StyledContainer = styled(Container, {})(({theme})=>({
//     backgroundColor:"red",
//     ".MuiButtonBase-root":{
//         width:500
//     }
//   }));
// const StyledContainer = styled(Container, {})(({theme})=>({
//     // backgroundColor:theme.palette.bacground.paper,
//     padding: theme.spacing(8,0,6)
//   }));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello evertone This is a photo album and I'm trying to make this sentence as long as possible so we can see it.
                        </Typography>
                        <div>
                            <Container>
                                <Grid container spacing={2} justifyContent="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            this is a button
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            this is a button
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Container>
                </div>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {cards.map(() => (<Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia image="https://source.unsplash.com/random" title="Image title" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to decribe the content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>))}

                    </Grid>
                </Container>
            </main>
            <footer style={{ padding: "15px 0" }}>
                <Typography variant='h6' align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
        </>
    )
}
export default App;