import React from 'react';
import { Grid, makeStyles, Button, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Blogimage from '../assets/blog.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    height: 440,
    marginBottom: '40px',
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  heading: {
    fontFamily: 'babel',
    paddingTop: '50px',
    paddingBottom: '50px',
  },
  center: {
    margin: 'auto',
  },
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  viewbutton: {
    marginLeft: '39%',
    marginRight: '40%',
  },
}));

export default function Blog() {

  const classes = useStyles();
  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br />
      <div className={classes.heading}>
        <Typography variant="h2" align="center">
          Blogs from DSC ADGTIM
        </Typography>
        <br />
        <div align="center">
          <Button
            size="large"
            variant="contained"
            color="primary"
            className={classes.button}
            link="http://medium.com/"
            disabled
          >
            {' '}
            View on medium{' '}
          </Button>
        </div>
      </div>
      <br />
      <br />
      <Container>
        <Grid
          spacing={4}
          container
          className={classes.gridContainer}
          justify="center"
        >
          <Grid item xs={12} sm={6}>
            <Card className={classes.root} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="300"
                  image={Blogimage}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="h3" component="h2">
                    Coming Soon
                  </Typography>
                  <Typography variant="h5" color="textSecondary" component="p">
                    Stay tuned
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>

                <div align="center">
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    disabled
                  >
                    Read More
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
