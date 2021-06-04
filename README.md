#################################
#################################
#################################
#################################
# Angular
Stage Angular du 1 au 4 juin 2021

#################################
#################################
#################################
#################################

---------------------------------------
Install
---------------------------------------
Installer node.js, visual studio, git, notepad++...
node.js donne npm

---------------------------------------
npm
---------------------------------------
npm gère les dépendances du projet JS comme Maven

npm init pour initialiser un projet
npm install jquery (ou même bootstrap) pour ajouter ça au projet

---------------------------------------
JS 
---------------------------------------
var démilite la portée d'une variable à la fonction où elle a été déclarée
let délimite la portée d'une variable à la paire d'accolades qui la contient. const aussi mais que pour des constantes

Notion de promesse
Cela permet de faire les traitements asynchrones du JS en le lisant/écrivant à la manière synchrone
La promesse attend qu'on lui rende une variable resolve ou reject pour renvoyer cette réponse
En conséquence, on peut agir (comme recevoir une HTTP 200 ou une HTTP 404) à l'issue de cette promesse avec then ou catch

async permet de traiter les promesses plus lisiblement qu'avec des then

Promise.all ou .race permet de consommer les ressources de toutes les promesses en paramètre

JS permet d'écrire les fonctions simples sous forme de lambda sans redéfinir la valeur de this
var add = (a,b) => `${a} + ${b} = ${a+b}`
var afficher = (...values) => console.log(values)

https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
On peut transcrire du ts en js, en ayant du js exploitable même si ts lève des erreurs
>tsc greeter.ts
greeter.ts:10:27 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
10 let hellonumber = greeter(42);
Found 1 error.               ~~
>node greeter.js
Hello 42

---------------------------------------
Angular
---------------------------------------
https://angular.io/tutorial
ng new angular-tour-of-heroes => crée un répertoire, y met le code et les dépendances
ng serve --open => lance l'appli sur localhost:4200
ng generate component heroes => ajoute un composant. Hyper important.

Tous les composants sont sous "app-root". Il y a donc au moins un composant dans un projet Angular.

On peut changer le prefixe des composants dans Angular.json

{{value | upperscore}} dans un html fonctionne. La value est prise en compte par la fonction upperscore, le html affiche ce que retourne upperscore

[(ngModel)], la banane dans la boite. Cela simplifie les actions entre vue et contrôleur en masquant le binding bi-directionnel. Il est toutefois possible de faire ce binding à la main !

Ceci :
<input id="nom" [(ngModel)]="hero1.nom" placeholder="nom">
est strictement égal à :

<input [value]="hero1.nom" (keyup)="onKeyup($event)" placeholder="nom">
avec ceci dans le component.ts :
onKeyup(e:any) {
    this.hero1.nom = e.target.value
}

Pour partager une valeur d'une page à une autre :
.html source : <app-hero-detail [hero]="selectedHero"></app-hero-detail>
.ts cible : @Input() hero?: Hero;

20 opérateurs en 20 minutes ngconf

+--------+                   +-----------+
|  toto  |  ---------------> |  subject  |
+--------+       next()      +-----------+    
On écoute le subject et non le toto initial, c'est la programmation réactive

switchMap permet de changer d'observer. On part de l'Observable initial puis on change d'Observable pour recevoir la vraie data associée attendue, celle saisie par l'user ou retournée par une bdd. Il n'y a même pas de subscribe
Lorsqu'une variable contient un Observable, son nom doit être suffixé par un $ pour faciliter la lecture. On peut soit la subscriber, soit modifier ses paramètres.

| async permet de ne pas écrire un subscribe pour obtenir la donnée, ce qui est plus propre.
Les subscribe sont ne obligation pour gérer un Observable mais, s'ils doivent rester concis, les faire disparaître du code est plus propre.

----------------------------
TP en full autonomie
----------------------------
https://material.angular.io/components/table/api
+----------------------------+
| npx json-server todos.json | permet d'exécuter un serveur simulant une bdd +----------------------------+ causant en HTTP à partir d'un fichier todos.json 
                               (ou autre) rempli de donnée brute
+----------------------+
| ng new todo-list-app | pour créer l'app
+----------------------+
+--------------------------+
| ng add @angular/material | pour ajouter Material à Angular
+--------------------------+
							indigo/pink est pas mal
							oui à tout
+----------+
| ng serve | pour déployer (--open)
+----------+
+------------------+
| ng g module todo | Création d'un module dans son propre répertoire
+------------------+
+-----------------------+
| ng g c todo\todo-list | Création d'un componant dans son propre répertoire
+-----------------------+

Les composants et directives comme FormsModule (pour ngModel) doit être importé par le module qui en a besoin, et non pas par son module parent.

Avec Material, on déclare toutes les colonnes dans le html mais le tableau displayedColumns donne ce qui est affiché ou non.

Modules pour VSCode : Angular snippets, debugger for firefox, ES7 react/redux

pose volets roulants solaires

Il faut étudier le cycle de vie des composants Angular
La première méthode appelée est ngonchange()
https://angular.io/guide/lifecycle-hooks
Communication entre composants hiérarchiques : https://angular.io/guide/component-interaction#parent-and-children-communicate-using-a-service

Messaging intégré à Angular par 'rxjs', c'est la classe Subject qui propose des méthodes simples pour pousser un message et se mettre en attente

pipe() permet d'utiliser des opérateurs comme filter qui permet de filtrer l'abonnement à un subscribe() à des données spécifiques afin de ne pas réagir à chaque message passé dans le bus

s'abonner sur le fil twitter de john papa pour suivre ce qui se fait sur Angular

---------------------------------------------------------

Le projet ngrx-todos demande :
ng add @ngrx/store
ng add @ngrx/store-devtools@latest
ng add @ngrx/effects@latest
ng g module todo
ng g c todo/todo-list

