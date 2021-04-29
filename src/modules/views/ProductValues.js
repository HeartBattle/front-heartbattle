import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/heartbattle/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/heartbattle/productValues1.svg"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Récolte de ressource
              </Typography>
              <Typography variant="h5">
                <center>
                  Approprie toi les diamants et les emeraudes que tu trouves sur la carte.
                <br />
                Récupère le contenu du coffre central t'apportant richesse.
              </center>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/heartbattle/productValues2.svg"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                Préparation
              </Typography>
              <Typography variant="h5">
                <center>
                  Débloques toutes les améliorations de ta base.
                  <br/>
                  Achète bouclier, arc et épée ainsi que l'armure la plus brillante du shop.
                </center>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/heartbattle/productValues3.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Assaut
              </Typography>
              <Typography variant="h5">
                <center>
                  Tues tout les adversaires qui s'opposeront à toi.
                  <br/>
                  Explose les murs de leur forteresse grâce à ta TNT et détruis leur coeur à la force de ton épée.
                </center>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
