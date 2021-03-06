import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import mlBootcamp from "./assets/events/ml-bootcamp.jpg";
import as from "./assets/events/as.png"
import asj from "./assets/events/asj.png"
import day_out from "./assets/events/day_out.png"
import gcp from "./assets/events/gcp.png"
import git from "./assets/events/git.png"
import pycaret from "./assets/events/pycaret.png"

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 280,

  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              DSC ADGITM EVENTS
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hamare Events mast hote hai!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    href="https://www.youtube.com/channel/UCWSdOgrUHjM8RBmjxtQTG1A/"
                    variant="contained"
                    size="large"
                    color="primary"
                    target="_blank"
                  >
                    Youtube Channel
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <br />
        <Container>
          <Grid
            spacing={4}
            container
            className={classes.gridContainer}
            justify="center"
          >
            <Grid item xs={12} sm={4}>
              <Card className={classes.root} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={mlBootcamp}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h3" component="h2">
                      decipher Deep Learning
                  </Typography>
                    <Typography variant="h5" color="textSecondary" component="p">
                      This will be a course consisting of consolidated efforts
                      and lessons that many 𝐭𝐞𝐜𝐡 𝐞𝐧𝐭𝐡𝐮𝐬𝐢𝐚𝐬𝐭𝐬 have learnt over
                      the years and will be presented by individuals who have
                      done Deep Learning courses of Andrew Ng and Fast ai, made
                      awesome projects and are working on research papers.
                  </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.root} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={day_out}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h3" component="h2">
                      𝐃𝐞𝐜𝐢𝐩𝐡𝐞𝐫 𝐃𝐞𝐞𝐩 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠
                  </Typography>
                    <Typography variant="h5" color="textSecondary" component="p">
                      This engineer's day , let's have a day out with the developer student clubs powered by Google developers.
                      We have collaborated with other clubs to demystify everything about DSC and why you should join us .
                      So, See you all on 15 th september 🔥
                  </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.root} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={pycaret}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h3" component="h2">
                      Getting to know PyCaret
                  </Typography>
                    <Typography variant="h5" color="textSecondary" component="p">
                      PyCaret is an open source, low-code machine learning library in Python that allows you to go from preparing your data to deploying your model within minutes.
                      In short , no more complex codes and hefty training time for your data science projects 🔥
                      So , how about learning from the creater of this amazing library himself !!
                  </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.root} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={gcp}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h3" component="h2">
                      30 days of GCP
                  </Typography>
                    <Typography variant="h5" color="textSecondary" component="p">
                      Whether you’re new to cloud or want to expand your skill set !!

                      "30 Days of Google Cloud" program will provide you an opportunity to kickstart your career in cloud and get hands-on practice on Google Cloud Platform.
                      You will learn & practice concepts like computing, application development, big data & machine learning using cloud.
                      Choose between two learning tracks or both of them .
                      Get certificates and various goodies from Google.
                  </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.root} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={git}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h3" component="h2">
                      Introduction to Github
                  </Typography>
                    <Typography variant="h5" color="textSecondary" component="p">
                      HacktoberFest 2020 is here !
                      #hacktoberfest

                      Come and get involved with open source this October, with DSC ADGITM.

                      The session will be an introduction on how you can contribute in it, the basics of GitHub, making pull requests , basic git commands and a lot more !
                  </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.root} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={as}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h3" component="h2">
                      Andriod Study Jam
                  </Typography>
                    <Typography variant="h5" color="textSecondary" component="p">
                      Recently we completed our first program "30 Days of Google Cloud" which was a huge success.

                      In case you missed this Study Jam 👨‍💻, we have another one for you!
                      We are kickstarting Android Study Jam .

                      Android Study Jams are community-organized study groups👨‍👦‍👦 to learn how to build Android apps in the Kotlin programming language, using curriculum provided by Google developers.
                  </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.root} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={asj}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="h3" component="h2">
                      Andriod Study Jams Part 2
                  </Typography>
                    <Typography variant="h5" color="textSecondary" component="p">
                      DSC ADGITM in collaboration with DSC NMAMIT , DSC IMSEC & DSC NSSCE is finally organizing a session for the ongoing program ANDROID STUDY JAMS📱👨🏻‍💻 to help you out with your problems .

                      Topic: Start building Android apps using Kotlin

                      If you want to learn Kotlin and haven't joined the program yet, feel free to enroll for the ANDROID STUDY JAMS PROGRAM
                  </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

          </Grid>
        </Container>
        <br />
      </main>
    </React.Fragment>
  );
}
