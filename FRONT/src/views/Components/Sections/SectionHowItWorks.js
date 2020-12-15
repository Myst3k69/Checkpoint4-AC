import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from "assets/jss/material-kit-react.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/HowitWorks";

// const styles = {
//   ...imagesStyles,
//   cardTitle,
// };

const useStyles = makeStyles(styles);

export default function SectionHowItWorks(props) {
  const classes = useStyles();

  const { children, style, image } = props;
  return (
    <>
      <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Comment ça marche ?</h2>
        </div>
        <div id="typography">
            <GridContainer
              justify="center"
            style={{justifyContent:"space-around"}}
            >
              <Card style={{ width: "20rem" }}>
                <CardBody>
                  <h4 className={classes.cardTitle}>Je trouve mon professionnel</h4>
                  
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="#pablo"
                    className={classes.cardLink}
                    onClick={(e) => e.preventDefault()}
                  >
                    En Savoir Plus -
                  </a>
                  <a
                    href="#pablo"
                    className={classes.cardLink}
                    onClick={(e) => e.preventDefault()}
                  >
                    Vidéo
                  </a>
                </CardBody>
              </Card>

              <Card style={{ width: "20rem" }}>
                <CardBody>
                  <h4 className={classes.cardTitle}>J'effectue ma télé-consultation</h4>
                 
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="#pablo"
                    className={classes.cardLink}
                    onClick={(e) => e.preventDefault()}
                  >
                    En Savoir Plus - 
                  </a>
                  <a
                    href="#pablo"
                    className={classes.cardLink}
                    onClick={(e) => e.preventDefault()}
                  >
                    Vidéo
                  </a>
                </CardBody>
              </Card>

              <Card style={{ width: "20rem" }}>
                <CardBody>
                  <h4 className={classes.cardTitle}>J'accède aux services de Social Car</h4>
                 
                  <ul>
                  <li> Consultation de compte-rendu</li>
                  <li> Intervention d'un dépanneur</li>
                  <li> Intervention d'un professionnel</li>

                  </ul>
                  <a
                    href="#pablo"
                    className={classes.cardLink}
                    onClick={(e) => e.preventDefault()}
                  >
                    En savoir plus - 
                  </a>
                  <a
                    href="#pablo"
                    className={classes.cardLink}
                    onClick={(e) => e.preventDefault()}
                  >
                  Vidéo
                  </a>
                </CardBody>
              </Card>
              
        
            </GridContainer>
          </div>
        </div>
      </div>
    </>
  );
}
