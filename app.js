const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");
const db = require("mongodb");
const mongoose = require("mongoose");
const multer = require("multer");
const hbs = require("hbs");
mongoose.connect(
  "mongodb://Daniel12346:Danezoki2@ds227594.mlab.com:27594/blog-app",
  { useNewUrlParser: true }
);

const { routeAll } = require("./routes");
const app = express();

//multer storage setup
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
// view engine setup
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(__dirname + "/views/partials", console.log);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//TODO: multer should not be used globally
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single("img"));
app.use(cookieParser());

//TODO: fix path
app.use(
  sassMiddleware({
    src: path.join(__dirname, "public", "sass"),
    dest: path.join(__dirname, "public", "css"),
    indentedSyntax: false // true = .sass and false = .scss
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

//route handling
routeAll(app);

/*TODO: add error handling

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
*/

app.listen(3000);
process.on("SIGINT", () => {
  console.log("Bye bye!");
  process.exit();
});

module.exports = app;
