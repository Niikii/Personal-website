import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import img from "../styles/images/pic.jpg";

const useStyles = makeStyles(({ spacing }) => ({
  aboutCard: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: spacing(2),
    width: "50vw",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
  },

  aboutText: {
    margin: "30px",
    alignText: "center",
  },

  mediaCard: {
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
  },

  media: {
    borderRadius: spacing(2),
    // margin:"20",
    width: "30vw",
    height: 500,
    alignItems: "center",
    backgroundRepeat: "no-repeat",
  },
}));

const About = () => {
  const styles = useStyles();

  return (
    <div
      className="about"
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "200px 0",
      }}
    >
      <Card className={styles.mediaCard}>
        <CardMedia
          className={styles.media}
          image={img}
          title="Contemplative Reptile"
        />
      </Card>
      <Card id="about" className={styles.aboutCard}>
        <Typography className={styles.aboutText} variant="h4" gutterBottom>
          About me
        </Typography>
        <Typography className={styles.aboutText} variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam. body1.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Card>
    </div>
  );
};

export default About;
