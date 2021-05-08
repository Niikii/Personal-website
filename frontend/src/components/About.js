import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "../styles/About.css";

const useStyles = makeStyles(({ spacing }) => ({
  aboutCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: spacing(2),
    width: "50vw",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    margin: "50px 24% 150px 24%",
  },

  aboutText: {
    margin: "30px",
    alignText: "center",
  },
}));

const About = () => {
  const styles = useStyles();

  return (
    <div id="about" className="about">
      <header>About Me</header>
      <Card id="about" className={styles.aboutCard}>
        <CardContent className={styles.aboutText}>
          <Typography variant="h6" gutterBottom>
            My names Niki Mortazavi and i'm a web developer based in South
            Africa. I enjoy working with JavaScript frameworks such as react.js,
            node.js, etc..
            <br />
            <br />
            I enjoy working on both Front-End and Back-End and Nevertheless, I'M
            always willing to explore and learn new skills and technologies.
            <br />
            <br />
            I'm open to any opportunities to learn and grow as a developer, and
            would welcome the chance to join a team and dedicate myself
            full-time to create awesome things!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
