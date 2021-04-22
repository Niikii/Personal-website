import React, { useEffect, useRef } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import img from "../styles/images/pic2.jpg";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    marginTop: "90px",
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 900,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: "50px",
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 64%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

const Hero = (props) => {
  let app = useRef(null);
  let images = useRef(null);
  let context = useRef(null);
  let button = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
    // const myImg = images.firstElementchild

    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    tl.from(images, 1.1, { x: -1280, ease: Power3.easeOut });
    tl.from(context, 1, { y: -1280, ease: Power3.easeOut });
    tl.fromTo(
      button,
      { autoAlpha: 0 },
      { duration: 1, autoAlpha: 1, ease: "none" }
    );
  });

  const styles = useStyles(props);
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();

  return (
    <div
      className="hero"
      style={{ visibility: "hidden" }}
      ref={(el) => (app = el)}
    >
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          ref={(el) => (images = el)}
          className={styles.media}
          image={img}
        />
        <CardContent ref={(el) => (context = el)}>
          <TextInfoContent
            classes={contentStyles}
            heading={"Hi, I'm Niki :)"}
            // overline={"Web Developer"}
            body={
              "Highly motivated developer devoted in creating modern and user-friendly web applications..."
            }
          />
          <Button ref={(el) => (button = el)} className={buttonStyles}>
            Read More
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hero;
