import { Controller } from "../libs/Controller";
import { ads } from "../datas";

export class GlobalsController extends Controller {
    public homepage() {
        const sortedAds = ads
            .sort((a, b) => {
                // On commence par trier les annonces par la date de début

                // On converti les chaînes de caractères présentes
                // dans la propriété `start_date` de chaque annonce,
                // au format `Date`
                const aStart = new Date(a.start_date);
                const bStart = new Date(b.start_date);

                // On retourne la soustraction des deux dates
                // pour pouvoir réordonner les différentes annonces
                // dans le nouveau tableau `sortedAds`
                return bStart.getTime() - aStart.getTime();
            })
            .slice(0, 3);

        // La méthode `slice()` disponible sur les tableaux permet
        // de garder une portion précise d'un tableau selon des index.
        // Ici, on garde trois éléments à partir de l'index 0 :
        // => ads[0], ads[1], ads[2]

        // On vient rendre la page `home.ejs` avec une variable `ads`
        // transmise qui contient les trois annonces triées à afficher
        this.response.render ("pages/home", { ads: sortedAds });
    }
}


 