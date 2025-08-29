import { Router } from "express";
import { GlobalsController } from "../controllers/GlobalsController";
import { FormController } from "../controllers/FormController";

const addRouter = Router();

// //Create ad = Form Add => GET (affiche form)
addRouter.get("/", (request, response) => {
    const formController = new FormController (request, response);
    formController.addform();

});

// //Create ad = Form Add => POST (soumet le form)
addRouter.post("/", (request, response) => {
    const formController = new FormController (request, response);
    formController.createform();

});


export default addRouter;


