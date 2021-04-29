import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import YouTube from 'react-youtube';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  divWrapper: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'padding': '40px 0 0 0'
  }
});

function ProductCategories(props) {
  const { classes } = props;
  const opts = {
    height: '600',
    width: '940',
    playerVars: {
      autoplay: 1,
    },
  };


  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Bienvenue dans notre jeu !
      </Typography>
      <div className={classes.divWrapper}>
        <YouTube videoId="2g811Eo7K8U" opts={opts} />
      </div>
      <div className={classes.divWrapper}>

        <Typography variant="h5">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <div style={{ 'font-size': '1.3em' }}>La carte</div>
La carte “Four faces” peut accueillir 20 joueurs, soit 4 équipes de 5 joueurs.
<br />
Elle est composée de quatre biomes : le biome Volcan, le biome Sable, le biome Neige et le biome Forêt.
<br />
Chaque équipe détient une base avec un cœur, qui est votre générateur de ressources, et qui vous permet de réapparaître si il est toujours vivant.
<br />
Un pont est situé entre chaque biome. Sur ces ponts, vous retrouvez des générateurs de diamants et d'émeraudes.
<br />
Au centre de la carte, il y a un coffre qui fait apparaître des ressources plus ou moins rares toutes les 5 minutes.
          </div>
            <img
              src="/static/heartbattle/arbre.png"
              alt="suitcase"
              className={classes.image}
            />
          </div>


          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <img
              src="/static/heartbattle/arbre.png"
              alt="suitcase"
              className={classes.image}
            />
            <div>
              <div style={{ 'font-size': '1.3em' }}>La carte</div>
La carte “Four faces” peut accueillir 20 joueurs, soit 4 équipes de 5 joueurs.
<br />
Elle est composée de quatre biomes : le biome Volcan, le biome Sable, le biome Neige et le biome Forêt.
<br />
Chaque équipe détient une base avec un cœur, qui est votre générateur de ressources, et qui vous permet de réapparaître si il est toujours vivant.
<br />
Un pont est situé entre chaque biome. Sur ces ponts, vous retrouvez des générateurs de diamants et d'émeraudes.
<br />
Au centre de la carte, il y a un coffre qui fait apparaître des ressources plus ou moins rares toutes les 5 minutes.
          </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <div style={{ 'font-size': '1.3em' }}>La carte</div>
La carte “Four faces” peut accueillir 20 joueurs, soit 4 équipes de 5 joueurs.
<br />
Elle est composée de quatre biomes : le biome Volcan, le biome Sable, le biome Neige et le biome Forêt.
<br />
Chaque équipe détient une base avec un cœur, qui est votre générateur de ressources, et qui vous permet de réapparaître si il est toujours vivant.
<br />
Un pont est situé entre chaque biome. Sur ces ponts, vous retrouvez des générateurs de diamants et d'émeraudes.
<br />
Au centre de la carte, il y a un coffre qui fait apparaître des ressources plus ou moins rares toutes les 5 minutes.
          </div>
            <img
              src="/static/heartbattle/arbre.png"
              alt="suitcase"
              className={classes.image}
            />
          </div>


          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <img
              src="/static/heartbattle/arbre.png"
              alt="suitcase"
              className={classes.image}
            />
            <div>
              <div style={{ 'font-size': '1.3em' }}>La carte</div>
La carte “Four faces” peut accueillir 20 joueurs, soit 4 équipes de 5 joueurs.
<br />
Elle est composée de quatre biomes : le biome Volcan, le biome Sable, le biome Neige et le biome Forêt.
<br />
Chaque équipe détient une base avec un cœur, qui est votre générateur de ressources, et qui vous permet de réapparaître si il est toujours vivant.
<br />
Un pont est situé entre chaque biome. Sur ces ponts, vous retrouvez des générateurs de diamants et d'émeraudes.
<br />
Au centre de la carte, il y a un coffre qui fait apparaître des ressources plus ou moins rares toutes les 5 minutes.
          </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <div style={{ 'font-size': '1.3em' }}>La carte</div>
La carte “Four faces” peut accueillir 20 joueurs, soit 4 équipes de 5 joueurs.
<br />
Elle est composée de quatre biomes : le biome Volcan, le biome Sable, le biome Neige et le biome Forêt.
<br />
Chaque équipe détient une base avec un cœur, qui est votre générateur de ressources, et qui vous permet de réapparaître si il est toujours vivant.
<br />
Un pont est situé entre chaque biome. Sur ces ponts, vous retrouvez des générateurs de diamants et d'émeraudes.
<br />
Au centre de la carte, il y a un coffre qui fait apparaître des ressources plus ou moins rares toutes les 5 minutes.
          </div>
            <img
              src="/static/heartbattle/arbre.png"
              alt="suitcase"
              className={classes.image}
            />
          </div>


          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <img
              src="/static/heartbattle/arbre.png"
              alt="suitcase"
              className={classes.image}
            />
            <div>
              <div style={{ 'font-size': '1.3em' }}>La carte</div>
La carte “Four faces” peut accueillir 20 joueurs, soit 4 équipes de 5 joueurs.
<br />
Elle est composée de quatre biomes : le biome Volcan, le biome Sable, le biome Neige et le biome Forêt.
<br />
Chaque équipe détient une base avec un cœur, qui est votre générateur de ressources, et qui vous permet de réapparaître si il est toujours vivant.
<br />
Un pont est situé entre chaque biome. Sur ces ponts, vous retrouvez des générateurs de diamants et d'émeraudes.
<br />
Au centre de la carte, il y a un coffre qui fait apparaître des ressources plus ou moins rares toutes les 5 minutes.
          </div>
          </div>
        </Typography>
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
