// Tous les champs sont requis.

// | **Propriétés** | **Contraintes** | **Informations** |
// | --- | --- | --- |
// | title | string max 50 | title de la mission |
// | description | texte area max 500 | description de la mission |
// | skills | select à partir des données fournies | compétences cherchées |
// | type | select à partir des données fournies | type de mission |
// | start_date | date | date de début souhaité |
// | salary | number | salaire net selon type de mission |
// | salary_unit | select à partir des données fournies | type d’expression du salaire (mois, année…) |
// | password | string max 50 | mot de passe d’administration |


//________________
// dans la datas.ts prévoir :

// id
// title
// description
// skills
// mission_type
// start_date
// salary
// salary_unit
// password


//________________
//Sur la page Ads_detail prévoir :

// date de publication
// coordonnées de l’entreprise
// mailto:
// callto:


//==================================

export type Ads = {
    id: number;
    title: string;
    description: string;
    skills: string[];
    mission_type: string;
    start_date: string;
    salary: number;
    salary_unit: string; 
    password: string;
}


export const ads: Ads[]
= [
  {
    id: 1,
    title: "Développeur Front-End React",
    description: "Nous recherchons un développeur front-end expérimenté pour refondre notre interface utilisateur. Projet de 3 mois renouvelable.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Git"],
    mission_type: "Freelance",
    start_date: "2025-09-15",
    salary: 4000,
    salary_unit: "Brut mensuel",
    password: "frontReact2025"
  },
  {
    id: 2,
    title: "Intégrateur Web HTML/CSS",
    description: "Votre mission sera de transformer les maquettes Figma en pages HTML/CSS responsives pour un site e-commerce.",
    skills: ["HTML5", "CSS3", "Responsive Design", "Figma"],
    mission_type: "CDD",
    start_date: "2025-10-01",
    salary: 2300,
    salary_unit: "Brut mensuel",
    password: "inteWeb@2025"
  },
  {
    id: 3,
    title: "Développeur Full-Stack Node.js",
    description: "Start-up en pleine croissance cherche un full-stack pour améliorer son API et développer le front office.",
    skills: ["Node.js", "Express", "MongoDB", "Vue.js"],
    mission_type: "CDI",
    start_date: "2025-09-10",
    salary: 48000,
    salary_unit: "Brut annuel",
    password: "stackNode#25"
  },
  {
    id: 4,
    title: "Chef de projet digital",
    description: "Vous serez responsable de la coordination des projets web et de la relation client pour notre agence digitale.",
    skills: ["Gestion de projet", "Agilité", "Communication", "WordPress"],
    mission_type: "CDI",
    start_date: "2025-09-20",
    salary: 3000,
    salary_unit: "Brut mensuel",
    password: "chefProjet2025"
  },
  {
    id: 5,
    title: "Développeur Mobile Flutter",
    description: "Développement d'une application mobile pour un service de réservation. Projet de 6 mois avec possibilité de CDI.",
    skills: ["Flutter", "Dart", "Firebase", "UI/UX"],
    mission_type: "Freelance",
    start_date: "2025-09-05",
    salary: 350,
    salary_unit: "jour",
    password: "flutterApp25"
  },
  {
    id: 6,
    title: "Développeur Full",
    description: "Développement d'une application mobile pour un service de réservation. Projet de 6 mois avec possibilité de CDI.",
    skills: ["Flutter", "Dart", "Firebase", "UI/UX"],
    mission_type: "Freelance",
    start_date: "2025-09-05",
    salary: 350,
    salary_unit: "jour",
    password: "flutterApp25"
  },
  {
    id: 6,
    title: "Développeur Back-End Python/Django",
    description: "Nous recherchons un développeur back-end pour créer et maintenir des API sécurisées dans un environnement cloud.",
    skills: [
      "Python",
      "Django",
      "REST API",
      "PostgreSQL",
      "Docker"
    ],
    mission_type: "Freelance",
    start_date: "2025-09-25",
    salary: 420,
    salary_unit: "jour",
    password: "djangoBack25"
  }
]


