import { Router } from "express";
import { GlobalsController } from "../controllers/GlobalsController";
import { FormController } from "../controllers/FormController";

const editRouter = Router();


// //modif ads = Form Edit => patch ?????
editRouter.patch("/editform/:id", (request, response) => {
    const formController = new FormController (request, response);
    formController.editform();
})

export default editRouter;
