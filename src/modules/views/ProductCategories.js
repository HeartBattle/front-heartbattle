import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import YouTube from 'react-youtube';
import Markdown from '../../modules/components/Markdown';

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

  const markdown = `

#La carte
La carte “Four faces” peut accueillir 20 joueurs, soit 4 équipes de 5 joueurs.

Elle est composée de quatre biomes : le biome Volcan, le biome Sable, le biome Neige et le biome Forêt.

Chaque équipe détient une base avec un cœur, qui est votre générateur de ressources, et qui vous permet de réapparaître si il est toujours vivant.

Un pont est situé entre chaque biome. Sur ces ponts, vous retrouvez des générateurs de diamants et d'émeraudes.

Au centre de la carte, il y a un coffre qui fait apparaître des ressources plus ou moins rares toutes les 5 minutes.

#Le plugin
##Le but du jeu :

Détruire le cœur des équipes ennemies pour empêcher les adversaires de réapparaître. Les tuer une dernière fois pour les éliminer définitivement de la partie. Au bout de 30 minutes, les cœurs sont automatiquement détruits, et une zone se se referme vers le centre de la carte.

 

##Présentation du plugin :

Chaque équipe a une base et un cœur. 

Le cœur est votre seule chance de réapparaître si vous mourez, il est donc indispensable de le défendre.

Votre cœur est protégé par une muraille.

Vous pouvez vous téléporter depuis l’onglet “téléporteur” sur des zones que vous devez capturer au préalable. On retrouve quatre zones (une par biome) qui sont situés à côté du coffre central. Ces zones vous confèrent des bonus différents pour une durée de 45 secondes lorsque que vous marchez dessus. 

##Les différents bonus sont : 

Protection pour le biome sable

Force pour le biome volcan

Régénération pour le biome foret

Vitesse de déplacement pour le biome neige

Si toutes les équipes ne sont pas éliminées au bout de 30 minutes, les coeurs sont automatiquement détruits, et une zone (comme dans un Battle Royale) réduit la carte jusqu’au centre

Si toutes les équipes ne sont pas éliminées au bout de 30 minutes, les coeurs sont automatiquement détruits, et une zone (comme dans un Battle Royale) réduit la carte jusqu’au centre.

Dans ce mode de jeu, il faut récolter des minerais. Il y a 5 types de minerais : le fer, l’or, le diamant, l'émeraude et la nétherite. On retrouve 5 façons pour récolter ces minerais : les générateurs, la production de votre cœur, le coffre central, tuer un ennemi et détruire le cœur ennemi.

###Le fer :

Production du cœur

Coffre central

###L’or :

Production du cœur 

Coffre central

Destruction d’un cœur ennemi

Élimination d’un joueur

###Le diamant :

Production du cœur

Générateur de diamants

Coffre central

Destruction d’un cœur ennemi

Élimination d’un joueur

###L’émeraude :

Production du cœur

Générateur de diamants

Coffre central

Destruction d’un cœur ennemi

Élimination d’un joueur

La nétherite :

Coffre central

Tuer un ennemi

Destruction d’un cœur ennemi

Élimination d’un joueur

 

Votre cœur vous permet donc de produire des minerais, mais ce n’est pas tout, il sera aussi votre “atelier”. 

En effet, vous pouvez accéder à votre cœur, qui vous proposera de nombreuses améliorations. 

On retrouve plusieurs onglets dans ce cœur :

les améliorations de la base et du cœur

les armures

les armes 

les outils/utilitaires

les téléporteurs

Sortir de la base

 

 Améliorations de la base et du cœur :

Minerais du cœur (3 améliorations possibles)

Mur de la base (3 améliorations possibles)

Régénération des joueurs (3 améliorations possibles)

L’alarme

La réparation du mur

Le cœur brulant

Armures :

Casque : Mailles, Fer, Diamant

Jambières : Mailles, Fer, Diamant

Bottes : Mailles, Fer, Diamant

Plastron : Cuir, amélioration en Protection 2

Armes : 

Épée : Pierre, Fer, Diamant, Nétherite

Arc

Flèche : Classique, Empoisonnée, affaiblissante, ralentissante, renforcée

Bouclier

Trident

Outils/Utilitaires :

Pomme en or

Bâton repoussant

Laine

Ciseau

TNT

Darkness

Mine

Téléporteur

Si toutes les équipes ne sont pas éliminées au bout de 30 minutes, les coeurs sont automatiquement détruits, et une zone (comme dans un Battle Royale) réduit la carte jusqu’au centre.
`

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Bienvenue dans notre jeu !
      </Typography>
      <div className={classes.divWrapper}>
        <YouTube videoId="2g811Eo7K8U" opts={opts} />
      </div>
      <div className={classes.divWrapper}>
        <Markdown>{markdown}</Markdown>
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
