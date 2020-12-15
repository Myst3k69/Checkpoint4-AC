import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";

import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

// Own sections
import SectionLastConsultations from "./Sections/SectionLastConsultations";
import SectionHowItWorks from "./Sections/SectionHowItWorks";
import SectionPreFooter from "./Sections/SectionPreFooter";

import styles from "assets/jss/material-kit-react/views/components.js";
import Image from "react-bootstrap/Image";
import LoginPage from "views/LoginPage/LoginPage.js";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";

// Own style
require("../../assets/css/homepage.css");

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [immat, setImmat] = useState("");
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        opacity="0.5"
        opacity
        changeColorOnScroll={{
          height: 400,
        }}
        {...rest}
      />

      <Parallax image={require("assets/img/cars/13.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Social Car</h1>
                <h3 className={classes.subtitle}>
                  Consulter des professionnels de l'automobile en vidéo.
                </h3>
              </div>
              <br />
              <TextField
                labelText="Entrez votre immatriculation"
                className="whiteInput"
                pattern="^([A-HJ-NP-TV-Z]{2}|[0-9]{3,4})-?([A-HJ-NP-TV-Z]{2,3}|[0-9]{3})-?([A-HJ-NP-TV-Z]{2}|[0-9]{2})$"
                value={immat}
                id="standard-start-adornment"
                onChange={(e) => {
                 
                  setImmat(e.target.value);
                }}
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Check style={{ color: "white" }} />
                    </InputAdornment>
                  ),
                  className: "whiteInput",
                  type: "text",
                }}
              />
              

              <Link to={{
                
                pathname: "/form-page",
            immatriculation:immat
            }}>
                <Button color="info" className="callToAction">
                  Démarrer
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <br />
        <SectionHowItWorks
          image={require("assets/img/faces/avatar.jpg")}
        ></SectionHowItWorks>
        <br />
        <SectionLastConsultations
          image={require("assets/img/cars/13.png")}
        ></SectionLastConsultations>
        <SectionPreFooter></SectionPreFooter>
      </div>
      <Footer />
    </div>
  );
}
