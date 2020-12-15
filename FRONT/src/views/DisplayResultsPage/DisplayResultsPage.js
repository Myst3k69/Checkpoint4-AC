import React, {useState} from "react";
import {Link} from 'react-router-dom'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {Input, InputLabel, TextField, textArea, MenuItem, FormControlLabel, Radio} from "@material-ui/core"
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

//import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function FormPage() {
  const classes = useStyles();

  // Const
  const categories = ['Mécanique', 'Pneu crevé', 'Avis avant Achat/Vente', 'Diagnostic électronique','Bruit suspect','Expertise technique','Autre']
  const [immat,setImmat] = useState("BG-256-YZ")
  const [category,setCategory] = useState("")


  // Radios buttons

  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);

  // Function

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Voici les professionnels disponibles</h2>
          <h4 className={classes.description}>
            Merci de sélectionner le professionnel et le  créneau horaire qui vous convient.
          </h4>
          <form>
         
            
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
              {/* <TextField type="text" required id="standard-required" label="Immatriculation" value={immat} /> */}
                <CustomInput
                  labelText="Immatriculation"
                 required
                  id="name"
                  formControlProps={{
                    fullWidth: false
                  }}
                  inputProps= {{
                    value:immat,
                  

                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>


              <TextField
          id="standard-select-currency"
          select
          label="Motif"
          value={category}
          onChange={handleChange}
          helperText="Sélectionnez un motif de visite"
        >
          {categories.map((option) => (
            <MenuItem key={option} value={option}>
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
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
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
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
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
                    fullWidth: true
                  }}
                  inputProps= {{
                    type:"email",
                    required:true

                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Description du problème"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Link to='/displaysearch-page'>
                <Button color="primary">Rechercher professionnel</Button>
                </Link>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
