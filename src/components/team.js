import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Harsh from '../assets/team/Harsh.png'
import Yashvardhan from '../assets/team/Yashvardhan.jpg'
import Shagun from '../assets/team/Shagun.jpg'
import Sanyam from '../assets/team/Sanyam.jpg'
import Athrav from '../assets/team/Athrav.jpg'
import Mohit from '../assets/team/Mohit.png'
import Praveen from '../assets/team/Praveen.jpeg'
import Ayanabha from '../assets/team/Ayanabha.jpg'
import Anubhav from '../assets/team/Anubhav.jpg'
import Rajeev from '../assets/team/Rajeev.jpg'
import Uday from '../assets/team/Uday.jpg'

import Ritik from '../assets/team/Ritik.jpg'
import Atishay from '../assets/team/Atishay.jpg'
import Digambar from '../assets/team/Digambar.jpg'
import Nikunj from '../assets/team/Nikunj.jpg'
import Ishika from '../assets/team/Ishika.jpg'
import Vanshika from '../assets/team/Vanshika.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        marginLeft: 5,
    },
    hy: {
        color: '#3b3a39',
    },
    hx: {
        color: '#605e5c',
    }
}));

export default function Team() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <br />
            <br />
            <br />
            <br />
            <br /> <br /><br /><br /><br /><br />
            <Typography variant="h4" className={classes.hy}>
                <b>DSC Lead</b>
            </Typography>
            <br />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Harsh} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/harsh-ai/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Harsh
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Lead
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <br />
            <br />

            <br />
            <br />
            <Typography variant="h4" className={classes.hy}>
                <b>Heads</b>
            </Typography>
            <br />
            <div className={classes.root}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={4}>

                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Yashvardhan} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/yashmalpani/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Yashvardhan
                                    </Typography>
                                    </a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        ML Lead
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Shagun} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/shagun-saboo-a27bb081/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Shagun Saboo
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Project Development Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Sanyam} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/sanyam-jain-81b6b2188/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Sanyam
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Project Moderator
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Athrav} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/atharv-jairath-99aa78118/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Athrav Jairath
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Design and Development Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
            <br />
            <br />

            <br />
            <br />
            <Typography variant="h4" className={classes.hy}>
                <b>Web</b>
            </Typography>
            <br />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Uday} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/uday-yadav-cs/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Uday Yadav
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Web Lead
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Mohit} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/mohit-gupta-114711178/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Mohit Gupta
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Praveen} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/praveen-c-03bb3a110/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Praveen Chaudhary
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Athrav} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/atharv-jairath-99aa78118/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Athrav Jairath
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Ayanabha} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/ayanabha-paul-9102641aa/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Ayanabha Paul
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Anubhav} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/anubhvshrma18/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Anubhav Sharma
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Rajeev} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/rajeevrajput/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Rajeev Rajput
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>



                </Grid>
            </div>

            <br />
            <br />
            <br />
            <br />
            <Typography variant="h4" className={classes.hy}>
                <b>Non-Tech</b>
            </Typography>
            <br />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Ritik} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/ritikjain1/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Ritik Jain
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Management Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Atishay} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/atishay-jain1999/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Atishay
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Marketing Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Digambar} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/digambar-sharma-526121173/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Digambar Sharma
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Content Development Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Nikunj} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/nikunjagg/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Nikunj
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Management Co-Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Ishika} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/ishika-khurana-252817158/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Ishika
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Marketing Co-Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>


                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Member Photo" src={Vanshika} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <a href="https://www.linkedin.com/in/vanshika-jain-822844196/">
                                        <Typography variant="h4" className={classes.hy}>
                                            Vanshika Jain
                                    </Typography></a>
                                    <Typography variant="h5" gutterBottom className={classes.hx}>
                                        Content Development Co-Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
                <br />
                <br />
                <br />
                <br />
            </div>

        </Container>
    );
}