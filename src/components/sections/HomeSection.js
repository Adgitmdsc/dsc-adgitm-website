import React from 'react';
import { Coder, Rocket } from '../../assets/logo';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '24px',
    fontSize: '60px',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const HomeSection = () => {
  const classes = useStyles();
  return (
    <div className="home u-text-center u-mb-big u-mt-big">
      <div className="home__aim u-mb-big" data-aos="fade-up">
        <h1 className="h1 u-mb-small  home__head">Our Aim</h1>
        <p className="u-sm-text  u-sm-container home__text  u-mt-med">
          At Developer Student Club, ADGITM we believe imagination has no limits
          and we can make almost anything possible through technology. We want
          to create leaders by empowering them to think out of the box.
        </p>
        <a href="https://forms.gle/Qx21QCW9iG5B3XFVA"><button className="btn btn--dark u-mt-med">Join Us</button></a>
      </div>

      <div className="home__social-media u-mb-big u-mt-big" data-aos="fade-up">
        <h1 className="h1 u-mb-small home__head">Social Media</h1>
        <br />
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={3}>
              <a href="https://www.instagram.com/dscadgitm/?hl=en">
                <InstagramIcon
                  fontSize="inherit"
                  variant="primary"
                ></InstagramIcon>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://www.linkedin.com/company/developer-students-club-adgitm">
                <LinkedInIcon fontSize="inherit"></LinkedInIcon>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://github.com/Adgitmdsc">
                <GitHubIcon fontSize="inherit"></GitHubIcon>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://twitter.com/dscadgitm">
                <Twitter fontSize="inherit"></Twitter>
              </a>
            </Grid>
          </Grid>
        </div>

        
      </div>

      <div className="home__contact u-mb-big u-mt-big" data-aos="fade-up">
        <h1 className="h1 u-mb-small home__head">Team DSC</h1>
        <p className="u-sm-text u-mt-med  u-sm-container home__text">

          our community is made by its member here are talented and success
          added people who are working around the clock to provide you something
          extraordinary
        </p>
        <a href="/Team">
          <button className="btn btn--dark u-mt-med">View Team DSC</button>
        </a>
      </div>

      <div className="home__blog u-mb-big u-mt-big" data-aos="fade-up">
        <h1 className="h1 u-mb-small home__head  ">Blog and Resourses</h1>

        <p className="u-sm-text  u-sm-container home__text u-mt-med">
          Want learn something new ? Check out our blogs and resources section.
        </p>
        <a href="/Blog">
          <button className="btn btn--dark u-mt-med">Know More</button>
        </a>
      </div>

      <div className="home__blog u-mb-big u-mt-big" data-aos="fade-up">
        <h1 className="h1 u-mb-small home__head  ">Projects</h1>
        <p className="u-sm-text  u-sm-container home__text u-mt-med">
          Want to get your hands dirty. We will be having a curated list of
          product so that you can turn theory into practice.
        </p>
        <a href="https://adgitmdsc.github.io/project-page/">
          <button className="btn btn--dark u-mt-med">Know More</button>
        </a>
      </div>

      <div className="home__contact u-mb-big u-mt-big" data-aos="fade-up">
        <h1 className="h2 u-mb-small home__head">Contact Us For An Idea</h1>
        <p className="u-sm-text u-mt-med  u-sm-container home__text">
          We think slightly out of the box, we believe that a club’s resources
          must not only be channeled into conducting events but also to
          propagate learning and teaching, symbiotically.
        </p>
        <a href="mailto:googledevelopersadgitm@gmail.com">
          <button className="btn btn--dark u-mt-med">Contact us</button>
        </a>
      </div>

      <div className="home__rocket" data-aos="fade-up" data-aos-delay="300">
        <Rocket />
      </div>

      <div className="home__coder">
        <Coder />
      </div>
    </div>
  );
};

export default HomeSection;
