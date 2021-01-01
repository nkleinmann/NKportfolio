import TeamBuilder from "../../assets/images/TeamBuilder.jpg";
import WhileYoureThere from "../../assets/images/WhileYoureThere.jpg";
import burger from "../../assets/images/burger.jpg";
import NoteTaker from "../../assets/images/NoteTaker.jpg";
import weatherDashboard from "../../assets/images/weatherDashboard.jpg";
import DailyPlanner from "../../assets/images/DailyPlanner.jpg";



const projectInfo = [
    {
        title: "While You're There",
        deployedSite: "https://while-youre-there.herokuapp.com/",
        githubRepo: "https://github.com/nkleinmann/While-Youre-There",
        image: WhileYoureThere,
        description: "A shopping list app designed for groups to be efficient shoppers (now more important than ever with Covid-19).",
        techUsed: "React, Font Awesome and Animate.css, MySQL/Sequelize, Auth0, Socket.io, Heroku",
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
    {
        title: "Express Note Taker",
        deployedSite: "https://cryptic-gorge-51487.herokuapp.com/",
        githubRepo: "https://github.com/nkleinmann/ExpressHWNoteTaker",
        image: NoteTaker,
        description: "Note taker application that allows allows the user to create, save, and delete notes.",
        techUsed: "HTML, CSS, JavaScript, Node.js, Express",
    },
    {
        title: "Weather Dashboard",
        deployedSite: "https://nkleinmann.github.io/06-Server-Side-APIs-NK/",
        githubRepo: "https://github.com/nkleinmann/06-Server-Side-APIs-NK",
        image: weatherDashboard,
        description: "Weather application that shows current weather and five day forecast for locations based on user input. Application uses icons to represent weather conditions and stores previously searched for cities and displays them to the user.",
        techUsed: "HTML, CSS and CSS Framework: Materialize, JaveScript, jQuery, AJAX and API requests",
    },
    {
        title: "Daily Planner",
        deployedSite: "https://nkleinmann.github.io/05-Third-Party-APIs-NK/",
        githubRepo: "https://github.com/nkleinmann/05-Third-Party-APIs-NK",
        image: DailyPlanner,
        description: "Daily planner application to help the user organize tasks based on each hour during 9am-5pm time blocks.",
        techUsed: "HTML, CSS and CSS Framework: Bootstrap, JavaScript, and jQuery",
    },
];

export default projectInfo;