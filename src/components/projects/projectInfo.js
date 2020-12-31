import TeamBuilder from "../../images/TeamBuilder.jpg";
import WhileYoureThere from "../../images/WhileYoureThere.jpg";
import burger from "../../images/burger.jpg"

const projectInfo = [
    {
        title: "While You're There",
        deployedSite: "https://while-youre-there.herokuapp.com/",
        githubRepo: "https://github.com/nkleinmann/While-Youre-There",
        image: WhileYoureThere,
        description: "A shopping list app designed for groups to be efficient shoppers (now more important than ever with Covid-19).",
        techUsed: "React, Font Awesome and Animate.css, MySQL/Sequelize, Auth0, Heroku",
    },
    {
        title: "Team Builder",
        deployedSite: "https://the-team-builder.herokuapp.com/",
        githubRepo: "https://github.com/nkleinmann/the-team-builders",
        image: TeamBuilder,
        description: "An app that brings remote teams together.",
        techUsed: "HTML/Bootstrap CSS, Font Awesome/Mimic.css, Express Handlebars, jQuery/Auth0, ExpressJS/Sessions, File Stack, Heroku, MySQL/Sequelize, Passport",
    },
    {
        title: "Eat Da Burger!",
        deployedSite: "https://pure-earth-06219.herokuapp.com/",
        githubRepo: "https://github.com/nkleinmann/NK-Eat-Da-Burger",
        image: burger,
        description: "Restaurant application that allows users to input burger names and note if they have devoured the burgers or not. Users can input burgers, delete, and devour burgers.",
        techUsed: "HTML, CSS, JavaScript, jQuery, Node, Express, Handlebars, MySQL, and a homemade ORM (yum!)",
    },
];

export default projectInfo;