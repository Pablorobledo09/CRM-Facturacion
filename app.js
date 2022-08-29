import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");


//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));


//Rutas
app.use(indexRoutes);

//Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

export default app;
