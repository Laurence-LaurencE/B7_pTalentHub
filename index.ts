
import Express from "express";
import { fileURLToPath } from "node:url";
import path from "node:path";

import router from "./routes";
import addRouter from "./routes/formadd";

const app = Express();

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(Express.static(path.join(__dirname, "public")))
app.use(Express.urlencoded({ extended: true }));
//sous-routers :
app.use("/", router);
app.use("/formadd", addRouter);

app.listen(PORT, () => {
  console.log(`Le serveur a démarré sur le port ${PORT}`);
});

