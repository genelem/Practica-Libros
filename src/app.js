const express = require('express');

const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const mainRouter = require('./routes/main');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(
  session({
    secret: "libr@ry-Aplic@tion",
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/', mainRouter);

app.listen(3000, () => {
  console.log('listening in http://localhost:3000');
});
