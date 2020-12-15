import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  Input,
  InputLabel,
  TextField,
  textArea,
  MenuItem,
  FormControlLabel,
  Radio,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

//import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

// Pages

import SectionPreFooter from "../Components/Sections/SectionPreFooter";
import Footer from "components/Footer/Footer.js";
import { isExternalModuleNameRelative } from "typescript";

const useStyles = makeStyles(styles);

export default function FormPage(props) {
  const { immatriculation } = props.location;

  const classes = useStyles();
  let history = useHistory();

  // Const
  const categories = [
    "Mécanique",
    "Pneu crevé",
    "Avis avant Achat/Vente",
    "Diagnostic électronique",
    "Bruit suspect",
    "Expertise technique",
    "Autre",
  ];
  const [immat, setImmat] = useState(immatriculation);
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [motif, setMotif] = useState("");

  // Radios buttons

  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  // Handle change category

  const handleChangeCategory = (event) => {
   
    setCategory(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeMotif = (event) => {
    setMotif(event.target.value);
  };

  // Handle loading

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  // handleSubmit

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      history.push({
        pathname: "/displaysearch-page",
        datas: {
          email: email,
          immat: immatriculation,
          motif: motif,
          categorie:category
        },
      });
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      {loading ? (
        <Backdrop
          className={classes.backdrop}
          open={loading}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem cs={12} sm={12} md={8}>
              <h2 className={classes.title}>
                Trouvez un professionnel rapidement
              </h2>
              <h4 className={classes.description}>
                Merci de compléter le formulaire suivant afin de réserver une
                télé-consultation. Si c'est une urgence, merci de la préciser.
              </h4>
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    {/* Loading to next page */}

                    {/* <TextField type="text" required id="standard-required" label="Immatriculation" value={immat} /> */}
                    <CustomInput
                      labelText="Immatriculation"
                      required
                      id="name"
                      formControlProps={{
                        fullWidth: false,
                      }}
                      inputProps={{
                        value: immat,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="standard-select-currency"
                      select
                      label="Catégorie"
                      value={category}
                      onChange={(e) =>handleChangeCategory(e)}
                      helperText="Sélectionnez le catégorie"
                    >
                      {categories.map((option,i) => (
                        <MenuItem key={option} value={i}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>

                    <GridItem xs={12} sm={6} md={4} lg={3}>
                      <div className={classes.title}>
                        <p>Je suis en panne</p>
                      </div>
                      <div
                        className={
                          classes.checkboxAndRadio +
                          " " +
                          classes.checkboxAndRadioHorizontal
                        }
                      >
                        <FormControlLabel
                          control={
                            <Radio
                              checked={selectedEnabled === "a"}
                              onChange={() => setSelectedEnabled("a")}
                              value="a"
                              name="radio button enabled"
                              aria-label="A"
                              icon={
                                <FiberManualRecord
                                  className={classes.radioUnchecked}
                                />
                              }
                              checkedIcon={
                                <FiberManualRecord
                                  className={classes.radioChecked}
                                />
                              }
                              classes={{
                                checked: classes.radio,
                                root: classes.radioRoot,
                              }}
                            />
                          }
                          classes={{
                            label: classes.label,
                            root: classes.labelRoot,
                          }}
                          label="Oui"
                        />
                      </div>
                      <div
                        className={
                          classes.checkboxAndRadio +
                          " " +
                          classes.checkboxAndRadioHorizontal
                        }
                      >
                        <FormControlLabel
                          control={
                            <Radio
                              checked={selectedEnabled === "b"}
                              onChange={() => setSelectedEnabled("b")}
                              value="b"
                              name="radio button enabled"
                              aria-label="B"
                              icon={
                                <FiberManualRecord
                                  className={classes.radioUnchecked}
                                />
                              }
                              checkedIcon={
                                <FiberManualRecord
                                  className={classes.radioChecked}
                                />
                              }
                              classes={{
                                checked: classes.radio,
                                root: classes.radioRoot,
                              }}
                            />
                          }
                          classes={{
                            label: classes.label,
                            root: classes.labelRoot,
                          }}
                          label="Non"
                        />
                      </div>
                    </GridItem>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Your Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        required: true,
                        onChange: (e) => handleChangeEmail(e),
                        value: email,
                      }}
                    />
                  </GridItem>
                  <CustomInput
                    labelText="Description du problème"
                    id="message"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.textArea,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      value: motif,
                      onChange: (e) => handleChangeMotif(e),
                    }}
                  />
                  <GridItem xs={12} sm={12} md={4}>
                    {/* <Link to="/displaysearch-page"> */}
                    <Button color="primary" onClick={handleSubmit}>
                      Rechercher professionnel
                    </Button>
                    {/* </Link> */}
                  </GridItem>
                </GridContainer>
              </form>
            </GridItem>
          </GridContainer>
          <SectionPreFooter></SectionPreFooter>
          <Footer></Footer>
        </div>)}
     

      
    </>
  );
}
