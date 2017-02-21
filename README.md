# Wikistack React/Redux

Hello - it's your old pal, Wikistack! The last time we met, you worked on the back-end to implement Sequelize models and then rendered them out using a templating engine (`nunjucks`).

This time, the tables have turned - you'll be working **solely** on the **front-end** to re-implement some of my basic functionality using `react`, `redux`, and `react-redux`.

## Your Starting Point
You will be given part of the original Wikistack application. At first, you will only be able to navigate between `http://localhost:3001/#/wiki` and `http://localhost:3001/#/wiki/add`, which will show a form to add new wiki pages.

To begin the project, `npm install` and `npm start`.

## Your Task
Your task is to make it so that when you submit a new wiki page from `/#/wiki/add`, that page will be saved in the database, and when you navigate to `/#/wiki`, you see a list of all wiki pages in the database (including any that were just added).

## Project Requirements
### User Requirements
* Navigating to `http://localhost:3001/#/wiki` should show a list of all of the wiki pages. The entries in this list **must** persist after a refresh.
* Navigating to `http://localhost:3001/#/wiki/add` should show a form to add a new wiki page
* Submitting a (validly filled out) form entry should add a new wiki page to the database
* Navigating to `http://localhost:3001/#/wiki` AFTER submitting a new wiki page should display the new wiki page in the list (WITHOUT requiring a refresh).
### Technical Requirements
* The list of wiki pages **must** be contained in a `redux` store
* You **must** use `react-redux` to connect your React components to your Redux store
#### What we are testing
* Understanding and getting up to speed on a small `react`/`react-router` codebase
* Creating a `redux` store from *scratch* and connecting it to React components using `react-redux`
* Handling asynchronous data flow in a React/Redux application
* Independent decision-making in implementing project features
#### What we are NOT testing
* Writing express routes
* Writing sequelize models
* Implementing new Routes with `react-router`

#### Before asking 'is this required?', please check here!
* It is NOT required for **form data** to be kept in your `redux` store - you may choose how to handle it yourself
  * Note that it is perfectly fine if you **do** decide to put your form data in your `redux` store
* It is NOT required to redirect back to `http://localhost:3001/#/wiki` after submitting a new page (although this would be convenient)
* It is NOT required for the form fields to clear out their content after clicking submit
* It is NOT required to do anything when a user clicks on an individual wiki page in the list
* It is NOT required to handle errors if a user submits an invalid form entry
* It is NOT required to make ANY changes on the back-end

## FAQ

### What can I use to help me?
You MAY use any notes that you have taken throughout the course, and any documentation you find online

You MAY NOT copy-paste code from the internet or from a prior workshop directly into the project

### When is this due?
Please ask your junior phase instructor.

### How will this be graded?
This project will be evaluated on a pass-fail basis. It is necessary for all of the requirements listed above to met for the project to be considered a pass.

### Can I ask instructors for help?
You may ask instructors to clarify the requirements of the project, and you may also ask instructors if your implementation meets the requirements of the project. You may also ask for help if unexpected errors occur on the **back-end**, or if the project does not install properly.

You may not ask instructors how to implement specific details of the project.

### May I work with others?
Please do not work with anyone else on this project.

