# Mini Projet TechnologiesWeb Master 1 MIAGE 2021/2022 par Diallo Binta et Dieye Khadidiatou

## Informations Générales
Notre application intitulée **DIADIE** permet de **trouver un restaurant dans une liste donnée** et d'**afficher toutes les informations le concernant** notamment sa **position**, les **plats et menus** qu'il sert.
Ainsi à partir de notre application, le client peut **passer une commande** à partir d'un restaurant. 

Le nom **DIADIE** en plus qui est notre logo est inspiré de la combinaison de nos deux noms **DIA**llo et **DIE**ye.

## Démarrage et Compilation
Pour utiliser notre application en locale, il faut avoir MongoDb et NodeJs installés dans votre ordinateur, un éditeur comme Visual Studio Code.
Ensuite, pensez à installer les différents modules du dossier client en utilisant `npm install`.

Pour démarrer le serveur, il suffit de se positionner sur le dossier du serveur et taper la commande suivante : `node servercrudwithmongo.js`.
Pour démarrer le client, il suffit de se positionner sur le dossier client et tapper la commande suivante : `npm run serve`.
L'importation de la collection **users** dans la base de données est obligatoire pour l'authentification (accès à notre application). D'ailleurs, elle est disponible dans le dossier MongoDB du gitHub. Deux profils utilisateurs pour vous connecter y sont :
1. pseudo : admin et son Mot de passe : admin ,
2. pseudo : passer et son Mot de passe : 1234 .

## Auteurs
Cette précieuse application du nom de **DIADIE** est le résultat d'un travail collaboratif entre deux étudiantes en master 1 MIAGE à l'université Côte d'Azur de Nice dont :
- **DIALLO Fatoumata Binta** ,
- **DIEYE Khadidiatou**.

La partie serveur est quasiment contibuée par Mr Michel Buffa professeur au sein de l'université Côte d'Azur sauf la partie authentification faite par nous même.

## License
Le projet est **opensource**.

## API
POur ce projet on a utilisé les API suivants :
- des api/restaurants : permettant d'afficher la liste des restaurants, d'en ajouter, le supprimer ou voir les détails le concernant ;
- et un api/login permettant de s'authentifier.

## Fonctionnalités
Les différentes fonctionnalités de **DIADIE** sont :
- une fonctionnalité permettant d'afficher la liste des restaurants dans un tableau ;
- une fonctionnalité permettant de rechercher un restaurant par son nom ;
- Une fonctionnalité permettant de supprimer un restaurant ;
- une fonctionnalité permettant d'ajouter un restaurant ;
- une fonctionnalité permettant d'afficher les détails d'un restaurant donné ;
- Une fonctionnalité permettant d'afficher des photos et vidéos d'un restaurant;
- Une fonctionnalité permettant d'afficher la position d'un restaurant donné;
- Une fonctionnalité permettant d'afficher aléatoirement une carte ainsi que des menus(menu midi, menu gastronomique) avec leur photos, description et prix pour chaque restaurant. 
- Une fonctionnalité permettant à l'utilisateur de passer une commande à la carte ou un menu.
- Une fonctionnalité d'authentification qui permet à l'utilisateur de s'identifier avant d'accéder à l'application et se déconnecter après utilisation. 

## Technologies
Les technologies utilisé sont:
- VueJS,
- NodeJS,
- MongoDB

## Comment contribuer
Pour contribuer, veuillez demander aux auteurs pour que l'on puisse créer un document contributeur.

## Versionnement
- Version 1
- Version 2 Ajouter d'autres fonctionnalités tel que permettre à l'utilisateur de créer son compte utilsateur...

Dans les prochaines versions, nous souhaitions permettre à l'utilisateur de créer son identifiant et de se connecter avec et lui permettre de visiter le site sans identification s'il ne souhaite pas commander.
Pour le moment l'utilisateur peut se connecter avec les identifiants que nous avons créé nous même dans la base de données.

## Crédit

Pour la réalisation de ce projet, nous nous sommes resourcées de :
- La bibliothèque vue materiel : https://www.creative-tim.com/vuematerial/getting-started  
- un tuto sur le site suivant pour la réalisation de la map : https://www.nicolaskempf.fr/creez-vos-cartes-interactives-avec-vuejs-et-leaflet/

