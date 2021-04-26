import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Markdown from '../../modules/components/Markdown';

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

const markdown = `
<center>Bienvenue sur Heart Battle ! Un évènement Minecraft riche en actions !

Forme une équipe et affronte jusqu’à 20 joueurs sur la carte “Four Faces”.

Pars à l’assaut des générateurs de minerais, et contrôle les le plus longtemps possible !

Améliore ta forteresse, ton armure, et deviens plus puissant !

Équipe toi de ta plus grosse armure pour prendre possession du coffre central !

Tues tes ennemis et gagne la ressource ultime !

Détruire le cœur de tes adversaires t’apportera la richesse, et les achever t’apportera la gloire !

Attention à ne pas rester trop longtemps dans ta base,  la carte va se réduire et le combat final sera inévitable.</center>`

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Heart Battle
      </Typography>
      <div style={{ padding: '20px 0 0 0' }}>
        <Markdown>{markdown}</Markdown>
      </div>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        onClick={() => {navigator.clipboard.writeText('amistupid.fr')}}
      >
        Copie l'adresse du server!
      </Button>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
