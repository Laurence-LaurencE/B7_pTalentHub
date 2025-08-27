import { Router } from "express";
import { GlobalsController } from "../controllers/GlobalsController";

const globalsRouter = Router();

//homepage
globalsRouter.get("/", (request, response) => {
    const controller = new GlobalsController (request, response);
    controller.homepage(); //methode homepage de mon global controller
});

export default globalsRouter;


// //list pages = Browse
// globalsRouter.get("/listpage", (request, response) => {
//     const controller = new GlobalsController (request, response);
//     controller.listpage();
// });

// //Ads page = Read
// globalsRouter.get("/adspage/:id", (request, response) => {
//     const controller = new GlobalsController (request, response);
//     controller.adspage();
// });

// //modif ads = Form Edit => put or patch ?????
// globalsRouter.patch("/editform/:id", (request, response) => {
//     const controller = new GlobalsController (request, response);
//     controller.editform();
// })

// //Create ad = Form Add => GET (affiche form)
// globalsRouter.get("/addform", (request, response) => {
//     const controller = new GlobalsController (request, response);
//     controller.addform();

// })

// //Create ad = Form Add => POST (traite le form)
// globalsRouter.post("/addform", (request, response) => {
//     const controller = new GlobalsController (request, response);
//     controller.addform();

// })

// //Delete ad = Delete


