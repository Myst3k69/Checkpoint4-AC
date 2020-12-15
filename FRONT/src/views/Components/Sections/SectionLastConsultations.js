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
import { cardTitle } from "assets/jss/material-kit-react.js";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import card1 from "assets/img/cars/1.jpg";
import card2 from "assets/img/cars/2.jpg";
import card3 from "assets/img/cars/3.jpg";
import card4 from "assets/img/cars/4.jpg";

// const styles = {
//   ...imagesStyles,
//   cardTitle,
// };

const useStyles = makeStyles(styles);

export default function SectionLastConsultations(props) {
  //State
  const [value, setValue] = React.useState(2);

  const classes = useStyles();

  const { children, style, image } = props;
  return (
    <>
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Dernières consultations</h2>
          </div>
          <div id="typography">
            <GridContainer justify="center">
              <Card style={{ width: "17rem", marginRight: "10px" }}>
                <img
                  style={{}}
                  className={classes.imgCardTop}
                  src={card1}
                  alt="Card-img-cap"
                  height="auto"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Etienne R. - Cadillac Eldorado{" "}
                  </h4>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating value={4} readOnly />
                  </Box>
                  <Button color="primary">Détails</Button>
                </CardBody>
              </Card>

              <Card style={{ width: "17rem", marginRight: "10px" }}>
                <img
                  style={{}}
                  className={classes.imgCardTop}
                  src={card2}
                  alt="Card-img-cap"
                  height="auto"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    {" "}
                    Patrice L - Singer Le Mans
                  </h4>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating value={5} readOnly />
                  </Box>
                  <Button color="primary">Détails</Button>
                </CardBody>
              </Card>

              <Card style={{ width: "17rem", marginRight: "10px" }}>
                <img
                  style={{}}
                  className={classes.imgCardTop}
                  src={card3}
                  alt="Card-img-cap"
                  height="170px"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    Patrick R - Aston Martin DBS{" "}
                  </h4>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating value={4} readOnly />
                  </Box>
                  <Button color="primary">Détails</Button>
                </CardBody>
              </Card>

              <Card style={{ width: "17rem", marginRight: "10px" }}>
                <img
                  style={{}}
                  className={classes.imgCardTop}
                  src={card4}
                  alt="Card-img-cap"
                  height="auto"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}> Laurent B. Jaguar XR2 </h4>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating value={5} readOnly />
                  </Box>
                  <Button color="primary">Détails</Button>
                </CardBody>
              </Card>
            </GridContainer>
          </div>
        </div>
      </div>
      {/* <img src={fonduImage}></img> */}
    </>
  );
}
