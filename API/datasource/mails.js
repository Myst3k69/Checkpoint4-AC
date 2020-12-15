exports.mailOptions = {
  newUser: (mail, name) => {
    return {
      from: '"Pierre Freelances lyonnais 👻" <pierre@ammeloot.fr >', // sender address
      to: mail, // list of receivers
      subject: `Bonjour ${name}, bienvenue sur la plateforme FAQ ✔ `, // Subject line
      text: " merci de cliquer sur le lien-suivant pour créer un mot de passe", // plain text body
      html:
        '<b>Veuillez cliquer sur ce clien pour créer un mot de passe : <a href ="http://localhost:6001/#/renewpassword"> Création mot de passe</a> </b>',
    };
  },

  renewPassword: (login) => {
    return {
      from: '"Pierre Freelances lyonnais 👻" <pierre@ammeloot.fr >', // sender address
      to: login, // list of receivers
      subject: "Hello ✔, vous avez oublié votre mot de passe ?", // Subject line
      text: "Hello world ?", // plain text body
      html:
        '<b>Veuillez cliquer sur ce clien pour créer un nouveau mot de passe : <a href ="http://localhost:6001/#/renewpassword">Nouveau mot de passe</a> </b>',
    };
  },

  newIntervention: (recipient, immat,date) => {
    return {
      // Send an email confirmation when a post is published
      from: '"Social Car 👻" <aurelien.chiren@social-car.fr >', // sender address
      to: recipient, // list of receivers
      subject: " Hello ✔, votre demande d'intervention a bien été enregistrée  ", // Subject line
      html: `<b> C'est noté ! Un spécialiste interviendra pour le véhicule immatriculé ${immat} le ${date}</b>`, //TODO Mettre à jour le lien de la ref
    };
  },
};
