import { Router } from "express";


const globalRouter = Router();

//homepage
globalRouter.get("/", (request, response) => {
    const controller = new GlobalsController (request, response);
    controller.homepage();
});

//classified pages = Browse
globalRouter.get("/", (request, response) => {
    const controller = new GlobalsController (request, response);
    controller.classifiedpages();
});

//Ads page = Read
globalRouter.get("/adspage/:id", (request, response) => {
    const controller = new GlobalsController (request, response);
    controller.adspage();
});

//modif ads = Form Edit => put or patch ?????
globalRouter.patch("/editform/:id", (request, response) => {
    const controller = new GlobalsController (request, response);
    controller.editform();
})

//Create ad = Form Add => GET (affiche form)
globalRouter.get("/addform", (request, response) => {
    const controller = new GlobalsController (request, response);
    controller.addform();

})

//Create ad = Form Add => POST (traite le form)
globalRouter.post("/addform", (request, response) => {
    const controller = new GlobalsController (request, response);
    controller.addform();

})

//Delete ad = Delete

export default globalRouter;
