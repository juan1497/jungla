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
    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
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
    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });
    
}