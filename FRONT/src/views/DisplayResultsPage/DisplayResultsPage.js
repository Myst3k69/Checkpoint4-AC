import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CardBody from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Paginations from "components/Pagination/Pagination.js";

// Pages
import SectionPreFooter from "../Components/Sections/SectionPreFooter";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import IconButton from "@material-ui/core/IconButton";
import imagePro1 from "assets/img/faces/card-profile1-square.jpg";
import imagePro2 from "assets/img/faces/marc.jpg";
import imagePro3 from "assets/img/faces/christian.jpg";
import { DatePicker, TimePicker, DateTimePicker } from "@material-ui/pickers";
import { container, title } from "assets/jss/material-kit-react.js";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";

// Imports for modale

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";

// API
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
  },
  details: {
    display: "flex",
  },
  section: {
    padding: "70px 0",
    background: "#EEEEEE",
  },
  container,
  space50: {
    height: "50px",
    display: "block",
  },
  cover: {
    width: 350,
  },
  controls: {
    marginBottom: "20px",
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },

  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      root: {
        backgroundColor: "#9c27b0",
      },
    },
    MuiPickersCalendarHeader: {
      root: {
        // backgroundColor: lightBlue.A200,
        // color: "white",
      },
    },
    MuiPickersDay: {
      root: {
        color: "#9c27b0",
        "&$disabled": {
          color: "#9c27b0",
        },
        "&$selected": {
          backgroundColor: "#9c27b0",
        },
      },
      today: {
        color: "#9c27b0",
      },
    },
    MuiPickersModalDialog: {
      dialogAction: {
        color: "#9c27b0",
      },
    },
  },
});
export default function DisplayResultsPage(props) {
  
  //props

  const {datas}= props.location
  console.log("datas : ", datas)
 
  
  
    // History

  let history = useHistory();
  //CSS
  const classes = useStyles();
  const theme = useTheme();

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

  const [expanded, setExpanded] = React.useState(false);
  const [sexpanded, setSexpanded] = React.useState(false);
  const [bookingStatus, setBookingStatus] = useState(false);
  const [idPro,setIdPro]= useState();
  const [open, setOpen] = useState(false);

  //Date picker
  const [datePicker1, changeDatePicker1] = useState(new Date());
  const [datePicker2, changeDatePicker2] = useState(new Date());
  const [datePicker3, changeDatePicker3] = useState(new Date());

  //Modal

  const [classicModal, setClassicModal] = React.useState(false);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  Transition.displayName = "Transition";

  // Send Booking to API

  const sendBooking = (e) => {
    setClassicModal(false);
    // insert API CALL

    

    axios
      .post("http://localhost:3002/front", {
        motif_intervention: `${datas.motif}`,
        date: selectedDate,
        immat: `${datas.immat}`,
        email: `${datas.email}`,
        categorie: `${datas.categorie}`,
        pro: idPro,
      })
      .then((response) => {
        setBookingStatus(true);

        setTimeout(() => {
          setBookingStatus(false);
          history.push("/");
        }, 3000);
      })
      .catch((err) => console.log("err :", err));
  };

  // Picker
  const [selectedDate, SetSelectedDate] = useState(new Date());

  // Handle click on date picker to book

  const displayConfirmationDate = (date) => {
    
    SetSelectedDate(date);
    setClassicModal(true);
  };

  return (
    <>
      {/* // Header */}

      <Parallax image={require("assets/img/cars/13.png")}>
        <div className={classes.container}></div>
      </Parallax>

      {/* Display modal when booking  */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} lg={4}>
          <Dialog
            classes={{
              root: classes.center,
              paper: classes.modal,
            }}
            open={classicModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setClassicModal(false)}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
          >
            <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <IconButton
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => setClassicModal(false)}
              >
                <Close className={classes.modalClose} />
              </IconButton>
              <h4 className={classes.modalTitle}>
                Confirmation consultation vidéo
              </h4>
            </DialogTitle>
            <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
            >
              <p>
                {`Souhaitez-vous confirmer votre rendez-vous de ${selectedDate} pour votre véhicule ?`}
              </p>
            </DialogContent>
            <DialogActions className={classes.modalFooter}>
              <Button
                color="transparent"
                simple
                value={selectedDate}
                onClick={(e) => sendBooking(e)}
              >
                Confirmer
              </Button>
              <Button
                onClick={() => setClassicModal(false)}
                color="danger"
                simple
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </GridItem>
      </GridContainer>

      {/* // Display toaster if booking is success */}

      {bookingStatus ? (
        <SnackbarContent
          message={
            <span>
              <b>SUCCESS :</b> Votre réservation a bien été prise en compte,
              vous allez reçevoir un email de confirmation...
            </span>
          }
          close
          color="success"
          icon={Check}
        />
      ) : (
        ""
      )}

      {/* Display professionals listing */}
      <div className={classes.sections}>
        <div>
          <GridContainer justify="center">
            <GridItem md={8} lg={8}>
              <Card className={classes.root}>
                <img
                  style={{}}
                  className={classes.imgCardTop}
                  src={imagePro1}
                  alt="Card-img-cap"
                  height="250px"
                />
                <div className={classes.details}>
                  <CardBody className={classes.content}>
                    <h4 className={classes.cardTitle}>
                      {" "}
                      Bertrand L. - ETS LACQUET{" "}
                    </h4>
                    <p>
                      Spécialiste en pannes électroniques depuis plus de 20 ans
                    </p>

                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating value={5} readOnly />
                    </Box>
                    <Button color="primary">Détails</Button>
                    <Button color="info">Appeler</Button>
                  </CardBody>
                  <div className={classes.controls}>
                    <CardActions
                      disableSpacing
                      className={classes.content}
                      sm={3}
                      xs={3}
                    >
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>

                      <ThemeProvider theme={materialTheme}>
                        <DateTimePicker
                          renderInput={(props) => <TextField {...props} />}
                          label="Rendez-vous"
                          id={1}
                          value={selectedDate}
                          fullWidth
                          onChange={(date) => { 
                              setIdPro(1)
                              displayConfirmationDate(date)}}
                        />
                      </ThemeProvider>
                    </CardActions>
                  </div>
                </div>
              </Card>
            </GridItem>
            <GridItem md={8} lg={8}>
              <Card className={classes.root}>
                <img
                  style={{}}
                  className={classes.imgCardTop}
                  src={imagePro2}
                  alt="Card-img-cap"
                  height="250px"
                />
                <div className={classes.details}>
                  <CardBody className={classes.content} md={4} lg={4}>
                    <h4 className={classes.cardTitle}>
                      {" "}
                      Thierry M. - GARAGES MALOTRU{" "}
                    </h4>
                    <p>
                      Spécialiste en pannes électroniques depuis plus de 20 ans
                    </p>

                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating value={5} readOnly />
                    </Box>
                    <Button color="primary">Détails</Button>
                    <Button color="info">Appeler</Button>
                  </CardBody>
                  <div className={classes.controls}>
                    <CardActions disableSpacing className={classes.content}>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <ThemeProvider theme={materialTheme}>
                        <DateTimePicker
                          renderInput={(props) => <TextField {...props} />}
                          label="Rendez-vous"
                          id={2}
                          value={selectedDate}
                          onChange={(date) => {
                            setIdPro(2)
                            displayConfirmationDate(date)}}
                        />
                      </ThemeProvider>
                    </CardActions>
                  </div>
                </div>
              </Card>
            </GridItem>

            <GridItem md={8} lg={8}>
              <Card className={classes.root}>
                <img
                  style={{}}
                  className={classes.imgCardTop}
                  src={imagePro3}
                  alt="Card-img-cap"
                  height="250px"
                />
                <div className={classes.details}>
                  <CardBody className={classes.content} md={4} lg={4}>
                    <h4 className={classes.cardTitle}>
                      {" "}
                      René B. - SAS GARAGE DU PARC{" "}
                    </h4>
                    <p>
                      Dieseliste spécialisé dans les problèmes d'injections.
                    </p>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating value={5} readOnly />
                    </Box>
                    <Button color="primary">Détails</Button>
                    <Button color="info">Appeler</Button>
                  </CardBody>
                  <div className={classes.controls}>
                    <CardActions disableSpacing className={classes.content}>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>

                      <ThemeProvider theme={materialTheme}>
                        <DateTimePicker
                          renderInput={(props) => <TextField {...props} />}
                          label="Rendez-vous"
                          id={3}
                          value={selectedDate}
                          onChange={(date) => {
                            setIdPro(3)  
                            displayConfirmationDate(date)}}
                        />
                      </ThemeProvider>
                    </CardActions>
                  </div>
                </div>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem
              xs={12}
              sm={12}
              md={6}
              className={classes.root}
              style={{ marginTop: "15px", marginLeft: "15%" }}
            >
              <Paginations
                pages={[
                  { text: "PREV" },
                  { text: 1 },
                  { text: 2 },
                  { active: true, text: 3 },
                  { text: 4 },
                  { text: 5 },
                  { text: "NEXT" },
                ]}
                color="info"
              />
            </GridItem>
          </GridContainer>
        </div>
        <SectionPreFooter></SectionPreFooter>
      </div>
      <Footer />
    </>
  );
}
