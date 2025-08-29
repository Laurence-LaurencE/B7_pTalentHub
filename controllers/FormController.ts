import z, { string } from "zod";
import { Controller } from "../libs/Controller";
// import addRouter from "../routes/formadd";
import { Ads } from "../datas";

export class FormController extends Controller {


    public addform(){
//à remettre lorsque j'aurais mes valeurs
        // this.response.render ("pages/formadd");
// a garder pour éviter le message d'erreur tant q je n'ai pas de valeurs :
        this.response.render("pages/formadd", { value: {}, errors: {} });
    }

    public createform(){
        this.response.render("pages/formadd");
    }

    

};

