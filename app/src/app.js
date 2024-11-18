const express = require('express');
const app = express();
const cors = require('./middlewares/corsMiddleware.js');
const path = require("path");
const nodemailer = require("nodemailer");
const serverConfig = require('../config/server.js');
const environment = process.env.ENVIRONMENT;

app.name = 'Birthdate card';

//Middlewares
app.use(express.json());

if (environment === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

app.use(cors);
app.use(express.static(path.resolve('./public/build')));

app.get("*", (req, res) => {
  res.sendFile(path.resolve('./public/build/index.html'));
});


const marley = [
  "https://stickerly.pstatic.net/sticker_pack/3q0dtnQwqtINBFhSEkksow/5JAO58/24/c956edaf-c872-42ea-b158-8093ff68d20e.png",
  "https://i.pinimg.com/236x/0c/d7/11/0cd711876aff705156e881aca9cc5c69.jpg",
  "https://i.pinimg.com/564x/e9/d5/d2/e9d5d2c3dee4ff21ede56b867a6db650.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQcsWpGXvAt8mwMYm5DdDhVumpO_Dk4Jc1MRrTA9v4wD-qD1Jx64L1Vb70BWmLAn82BA&usqp=CAU",
  "https://cdn.memegenerator.es/imagenes/memes/full/2/63/2634837.jpg",
  "https://i.pinimg.com/474x/42/ed/14/42ed143e625ae0f3952d37f271574c8b.jpg",
  "https://www.clarin.com/img/2021/08/09/eDHdcnFqW_720x0__1.jpg"
];

app.post('/assist', (req ,res) => {
  const { name, assist, note='' } = req.body;

  let mail = {
    from: `${name}`,
    to: serverConfig.receiverAccounts.join(','),
    subject: `➖ Asistencia`,
    text: "",
    html: "<b></b>",
  };

  if (assist === 'yes') {
    mail.subject = `✔️ Asistencia - ${name}`;
    mail.text = `Asistencia confirmada por ${name} 🥰, chill`;
    if (note) mail.text += ` - NOTA: ${note}`;
    mail.html = `
      <h3>Asistencia confirmada por ${name} 🥰, chill</h3>
      <h4>NOTA: ${note}</h4>`
  } else if (assist === 'no') {
    mail.subject = `❌ Asistencia - ${name}`;
    mail.text = `Asistencian't por ${name} 🤨, se puso la gorra`;
    if (note) mail.text += ` - NOTA: ${note}`;
    mail.html = `
      <h3>Asistencian't por ${name} 🤨, se puso la gorra</h3>
      <h4>NOTA: ${note}</h4>`
  }

  sendMail(mail, res);
});

app.post('/song', (req ,res) => {
  const { name, song, link='' } = req.body;

  let mail = {
    from: `${name}`,
    to: serverConfig.receiverAccounts.join(','),
    subject: `➖ Asistencia`,
    text: "",
    html: "<b></b>",
  };

  mail.subject = `🎵 Cancion - ${song}`;
  mail.text = `Cancion sugerida por ${name} 😎, ${song}`;
  if (link) mail.text += ` - LINK: ${link}`;
  mail.html = `
    <h5>Cancion sugerida por ${name} 😎, ${song}</h5>
    <a href=${link} target="_blank">${link}</a>`

  sendMail(mail, res);
});

function sendMail(options, res) {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: serverConfig.userEmail,
      pass: serverConfig.passEmail
    }
  });

  transporter.sendMail(options, (error, info) =>{
      if(error) {
        console.error(error);
        return res.status(400).json({ error });
      }
      else {
        console.info("Message sent: %s", info.messageId);
        console.info("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return res.status(200).json({});
      }
  })
}


module.exports = app;
