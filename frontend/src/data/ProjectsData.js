import life from "../styles/images/lifeGame.JPG";
import airbnb from "../styles/images/airbnb.JPG";
import movies from "../styles/images/movies.JPG";
import TheatersIcon from "@material-ui/icons/Theaters";
import RedditIcon from "@material-ui/icons/Reddit";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ExploreIcon from "@material-ui/icons/Explore";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

export const projectData = [
  {
    title: "Reddit 2.0",
    img: "",
    logo: (
      <RedditIcon
        style={{
          color: "#ea697a",
          width: "150px",
          height: "150px",
        }}
      />
    ),
    info:
      "Reddit style website created using next.js, typescript, postgreSQL and node.js, it has authentications and the abitilty to upvote and downvote posts. This project was mainly fucosed on the backend allowing me to improve my backend skills.",
    git: "https://github.com/Niikii/Reddit2.0",
    link: "",
  },
  {
    title: "Movie App",
    img: movies,
    logo: (
      <TheatersIcon
        style={{
          color: "#ea697a",
          width: "150px",
          height: "150px",
        }}
      />
    ),
    info:
      "Movie web application created using react.js and redux for state management and bootstrap for the UI. Displays movies or seris searched.",
    git: "https://github.com/Niikii/Movie-App",
    link: "https://Niikii.github.io/Movie-App/",
  },
  {
    title: "Expense Tracker",
    img: "",
    logo: (
      <MonetizationOnIcon
        style={{
          color: "#ea697a",
          width: "150px",
          height: "150px",
        }}
      />
    ),
    info:
      "Expense tracking app using MERN stack and using reacts context hook for state management. Tracks your income/expense and keeps a history of it.",
    git: "https://github.com/Niikii/Expense-Tracker",
    link: "https://expense-tracker21.herokuapp.com/",
  },
  {
    title: "Game of life",
    img: life,
    logo: (
      <SportsEsportsIcon
        style={{
          color: "#ea697a",
          width: "150px",
          height: "150px",
        }}
      />
    ),
    info:
      "Conways game of life created using react.js, showing my ability to use different react hooks. Follows Conway's game of life rules such as any live cell with two or three live neighbours survives, any dead cell with three live neighbours becomes a live cell and all other live cells die in the next generation",
    git: "https://github.com/Niikii/Conways-Game-of-Life",
    link: "https://niikii.github.io/Conways-Game-of-Life/",
  },
  {
    title: "Airbnb",
    img: airbnb,
    logo: (
      <ExploreIcon
        style={{
          color: "#ea697a",
          width: "150px",
          height: "150px",
        }}
      />
    ),
    info:
      "Clone of airbnb website using react.js and material UI showing my ability to create modern and user-friendly UI design.",
    git: "https://github.com/Niikii/Airbnb-clone",
    link: "https://niikii.github.io/Airbnb-clone",
  },
];
