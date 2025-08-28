import { Router } from "express";
import { GlobalsController } from "../controllers/GlobalsController";
import { FormController } from "../controllers/FormController";

const addRouter = Router();

// //Create ad = Form Add => POST (traite le form)
addRouter.post("/", (request, response) => {
    const controller = new FormController (request, response);
    controller.addform();

})

// //Create ad = Form Add => GET (affiche form)
addRouter.get("/add", (request, response) => {
    const controller = new FormController (request, response);
    controller.createform();

})


export default addRouter;


