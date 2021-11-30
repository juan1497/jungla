const nodemailer = require('nodemailer');
const dotenv = require("dotenv")
dotenv.config();
module.exports = (user) => {
    const email=process.env.MAIL;
    const pass=process.env.PASS;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email, 
            pass: pass 
        }
    });
    const mailOptions = {
        from: `"🐒La Jungla Jumanji🦁" <${email}>`,
        to: `${user.email}`, 
        subject: "Te Has registrado🦁 en La Jungla 🐒",
        html: `
 <strong>Nombre:</strong> ${user.name} <br/>
 <strong>E-mail:</strong> ${user.email} <br/>
 <strong>Mensaje:</strong> Gracias por Registrarte la vamos a pasar de Jungla !
 `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}