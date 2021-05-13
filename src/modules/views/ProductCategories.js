import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import YouTube from 'react-youtube';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

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
      <div className={classes.divWrapper} style={{flexDirection: 'column'}}>
        <div>
        <OndemandVideoIcon style={{fontSize: 400}}/>
          </div>
          <div>
        Enregistrement de la video en cours...

          </div>
        {/* <YouTube videoId="2g811Eo7K8U" opts={opts} /> */}
      </div>
      <div className={classes.divWrapper}>

        <Typography variant="h5">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 0 25px 0;" }}>
            <div>
              <div style={{ 'font-size': '1.3em', padding: '0 0 10px 0' }}>La carte</div>
La carte “Four faces” peut accueillir 20 joueurs, soit 4 équipes de 5 joueurs.
<br />
Elle est composée de quatre biomes : le biome Volcan, le biome Sable, le biome Neige et le biome Forêt.
<br />
Chaque équipe détient une base avec un cœur, qui est le générateur de ressources et qui permet d'en réanimer ses joueurs.
<br />
Un pont est situé entre chaque biome. Sur ces ponts, vous retrouvez des générateurs de diamants et d'émeraudes.
<br />
Au centre de la carte, il y a un coffre qui fait apparaître des ressources plus ou moins rares toutes les 5 minutes.
          </div>
            <img
              src="/static/heartbattle/fourfaces.png"
              alt="suitcase"
              className={classes.image}
            />
          </div>


          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 0 25px 0;" }}>

          <img
              src="/static/heartbattle/Diamond.png"
              alt="suitcase"
              className={classes.image}
            />
            <div>
              <div style={{ 'font-size': '1.3em', padding: '0 0 10px 0' }}>Les ressources</div>
Les ressources sont le nerf de la bataille Heartbattle. Ils permettent l'achat d'armes et armure ainsi que de nombreux utilitaire.
<br />
Le fer ainsi que l'or sont généré périodiquement via le coeur quant au diamant et l'émeraude, ils sont généré sur chacun des ponts.
<br />
En améliorant le "Minerais du coeur", celui-ci se mettra à générer du diamant ainsi que de l'émeraude.
<br />
La netherite est la ressource la plus rare de ce mode de jeu. Pour en obtenir, tuez vos énemies et rassembler 10 fragments pour former 1 netherite.
<br />
Ces ressources peuvent aussi être collecté via le coffre central. Toutes les 5 minutes, soyez le premier à ouvrir le coffre et en obtenir ses ressources.
          </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 0 25px 0;" }}>
            <div>
              <div style={{ 'font-size': '1.3em', padding: '0 0 10px 0' }}>Les bases</div>
Chaque équipe se voit attribuer une base possédant un coeur à défendre. Cette base est entouré d'un mur protecteur.
<br />
En plus de générer vos ressources, le coeur vous permet d'acheter la totalité de votre équipement et de vos objets.
<br />
Vous y trouverez aussi bon nombre d'amélioration et bonus tel qu'une alarme, le coeur brulant ou encore la régénération de vie en base.
<br />
Toujours grace à votre coeur, vos murailles pourrons être amélioré de la laine à l'endstone en passant par le bois.
<br />
En plus de défendre votre base, vous serez en capaciter d'acheter des TNT, capable de détruire les murs énemies.
          </div>
            <img
              src="/static/heartbattle/heart.png"
              alt="suitcase"
              className={classes.image}
            />
          </div>


          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 0 25px 0;" }}>

          <img
              src="/static/heartbattle/arbre.png"
              alt="suitcase"
              className={classes.image}
            />
            <div>
              <div style={{ 'font-size': '1.3em', padding: '0 0 10px 0' }}>Les points de controle (Point bonus)</div>
              Au milieu de la map existe quatre points bonus pouvant être capturé par n'importe quelle équipe.
<br />
Pour capture un point, il suffit de se positionner dessus et d'attendre que la barre de chargement se remplisse.
<br />
Plus les joueurs sont nombreux sur le point et plus la barre augmente rapidement. Au contraire, plus il y a d'enemies et plus elle baisse.
<br />
Une fois capturé, le point octroie un bonus durant 45 secondes au joueur qui posera le pied dessus. Apres 90 secondes, le point se débloque et pourra être recapturé.
<br />
Chaque point possede un bonus différent: Volcan-Force, Foret-Régénération, Neige-Vitesse de déplacement, Sable-Protection.
          </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 0 25px 0;" }}>
            <div>
              <div style={{ 'font-size': '1.3em', padding: '0 0 10px 0' }}>Le combat</div>
              Ici, pas le temps de niaiser. Dès la premiere minute de jeu, chaque joueur pourra être la cible d'un attaque d'un adversaire.
<br />
Chaque joueur possedera un "gearscore", exprimant la puissance de son équipement combiné à son nombre de victimes.
<br />
Un joueur tuant un adversaire aura pour récomposense un nombre de fragments proportionel au gearscore de sa victime.
<br />
Heartbattle vous propose un PVP mélangeant rapidité de la 1.8 ainsi que les armes de la 1.9 (trident, bouclier et fleches typés).
<br />
Une fois mort, un joueur sera réanimé à condition que son coeur ne soit pas mourrant (pv inférieur à 0). Cependant, le temps de réanimation augmente au cours de la partie
          </div>
            <img
              src="/static/heartbattle/combat.webp"
              alt="suitcase"
              className={classes.image}
            />
          </div>


          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 0 25px 0;" }}>

          <img
              src="/static/heartbattle/mort-subite.png"
              style={{width: "500px"}}
              alt="suitcase"
              className={classes.image}
            />
            <div>
              <div style={{ 'font-size': '1.3em', padding: '0 0 10px 0' }}>Mort subite</div>
              Toute bataille a une fin. Arrivé à 30 minutes de jeu, tout les coeurs se meurent. Ainsi, impossible de réssuciter.
<br />
Une fois la mort subite enclenchée, la carte rétréci poussant les derniers survivants à l'ultime combat.
<br />
Dans cette phase, le coffre central devient un super coffre, ne proposant plus de ressources mais un équipement surpassant tout ceux pouvant être normalement obtenue.
<br />
Les TNT pouvant jusque là infliger des dommages aux adversaires deviennent inutilisable.
<br />
Les point bonus du centre de la carte seront désactivé.
          </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 0 25px 0;" }}>
            <div>
              <div style={{ 'font-size': '1.3em', padding: '0 0 10px 0' }}>Gentleman rules</div>
              Vous êtes des guerriers et non des animaux, alors voici quelques Gentleman rules.
<br />
Interdiction de frapper un coeur adverse à l'aide d'un arc ou d'un trident.
<br />
Interdiction de créer une tour rendant un joueur inaccessible aux attaques adverse.
<br />
Interdiction de franchir les murs adverse sans les avoir détruit à la TNT ou via un trou deja existant.
<br />
Pensez à remercier les gens qui ont taffé sur le projet et si vous êtes une meuf bonne (et majeur), send nudes please.
          </div>
            <img
              src="/static/heartbattle/gentleman.png"
              alt="suitcase"
              className={classes.image}
            />
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
