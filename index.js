const express = require('express');
const cors = require('cors');
const logger=require('morgan');

// local
const { connect} = require('./config/database')
const HTTPSTATUSCODE = require("./utils/httpStatusCode");
const animal=require("./app/api/routes/animal.routes");
const family=require("./app/api/routes/family.routes");
const habitat=require("./app/api/routes/habitat.routes");
const user=require("./app/api/routes/user.routes")



connect();
const PORT=4000;
const app = express();


app.set("secretKey","nodeRestApi");

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
const origins=['http://localhost:4200','https://jungla-nine.vercel.app']

app.use(cors({
    origin:origins,
    credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger("dev"));
// rutas
app.use("/animal",animal);
app.use("/family",family);
app.use("/habitat",habitat);
app.use("/user",user);


// 404 route
app.use((req, res, next) => {
    let err = new Error();
    err.status = 404;
    err.message = HTTPSTATUSCODE[404];
    next(err);
});


app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

app.disable('x-powered-by');

app.listen(PORT, () => {
    console.log(`Node server listening on port ${PORT}`);
});