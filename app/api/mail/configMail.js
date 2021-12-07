const nodemailer = require('nodemailer');
const dotenv = require("dotenv")
dotenv.config();
module.exports = (user) => {
    const email = process.env.MAIL;
    const pass = process.env.PASS;
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
<h3 style="text-align: center;"><a target="_blank" href="http://localhost:3000/user/login" style="text-decoration: none"> Click </a>para iniciar sesion </h3>
<header style="
background-image: url(https://besthqwallpapers.com/Uploads/30-1-2018/38794/thumb2-lions-4k-jungle-wildlife-predators.jpg);min-height: 80vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;">
    <p style="
    text-align: center;
    padding: 10px;
    margin-left: 35%;
    color:white;
    text-align: justify;
    font-size:30px;
    ">
            Gracias por registrarte <span style="text-transform: capitalize;">${user.name} </span>
    </p>
    <p style="
    text-align: center;
    margin-left: 40%;
    color:white;
    text-align: justify;
    font-size:15px;
    font-style: italic;
    ">
    🦁aprenderemos juntos sobre la jungla 🐒 !!
    </p>
 </header>
 `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}