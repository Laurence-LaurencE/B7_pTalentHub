import z, { string } from "zod";
import { Controller } from "../libs/Controller";


export class FormController extends Controller {
    public addform(){
        this.response.render ("pages/formadd");
    }

};
