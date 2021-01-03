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
        key: 0,
    },
    {
        title: "Team Builder",
        deployedSite: "https://the-team-builder.herokuapp.com/",
        githubRepo: "https://github.com/nkleinmann/the-team-builders",
        image: TeamBuilder,
        description: "An app that brings remote teams together.",
        techUsed: "HTML/Bootstrap CSS, Font Awesome/Mimic.css, Express Handlebars, jQuery/Auth0, ExpressJS/Sessions, File Stack, Heroku, MySQL/Sequelize, Passport",
        key: 1,
    },
    {
        title: "Eat Da Burger!",
        deployedSite: "https://pure-earth-06219.herokuapp.com/",
        githubRepo: "https://github.com/nkleinmann/NK-Eat-Da-Burger",
        image: burger,
        description: "Restaurant app that allows users to input, edit, and devour burgers.",
        techUsed: "HTML, CSS, JavaScript, jQuery, Node, Express, Handlebars, MySQL, and a homemade ORM (yum!)",
        key: 2,
    },
    {
        title: "Express Note Taker",
        deployedSite: "https://cryptic-gorge-51487.herokuapp.com/",
        githubRepo: "https://github.com/nkleinmann/ExpressHWNoteTaker",
        image: NoteTaker,
        description: "Note taker app that allows allows the user to create, save, and delete notes.",
        techUsed: "HTML, CSS, JavaScript, Node.js, Express",
        key: 3,
    },
    {
        title: "Weather Dashboard",
        deployedSite: "https://nkleinmann.github.io/06-Server-Side-APIs-NK/",
        githubRepo: "https://github.com/nkleinmann/06-Server-Side-APIs-NK",
        image: weatherDashboard,
        description: "Weather app that shows current weather and five day forecast for locations based on user input.",
        techUsed: "HTML, CSS and CSS Framework: Materialize, JaveScript, jQuery, AJAX and API requests",
        key: 4,
    },
    {
        title: "Daily Planner",
        deployedSite: "https://nkleinmann.github.io/05-Third-Party-APIs-NK/",
        githubRepo: "https://github.com/nkleinmann/05-Third-Party-APIs-NK",
        image: DailyPlanner,
        description: "Daily planner app to help the user organize tasks based on each hour during 9am-5pm time blocks.",
        techUsed: "HTML, CSS and CSS Framework: Bootstrap, JavaScript, and jQuery",
        key: 5,
    },
];

export default projectInfo;