import React, { useEffect, useRef } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import img from "../styles/images/pic2.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
    display: "flex",
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },

  text: {
    margin: "20px 0",
  },
}));

const Hero = (props) => {
  let app = useRef(null);
  let images = useRef(null);
  let context = useRef(null);
  let button = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
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

  const gitLink = "github.com/Niikii";

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
          <Typography variant="h5" gutterBottom>
            Hi, I'm Niki :)
          </Typography>
          <Typography className={styles.text} variant="body2" gutterBottom>
            Highly motivated developer devoted in creating modern and
            user-friendly web applications...
          </Typography>
          <Button
            ref={(el) => (button = el)}
            className={buttonStyles}
            href="#about"
          >
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Read More!
            </Link>
          </Button>
          <div
            style={{
              display: "flex",
              marginTop: "30px",
            }}
          >
            <IconButton
              style={{
                width: "40px",
                height: "40px",
              }}
              href="https://github.com/Niikii"
              target="_blank"
              aria-label="git"
            >
              <GitHubIcon
                style={{
                  color: "#fd3838",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
              />
            </IconButton>
            <IconButton
              style={{
                width: "40px",
                height: "40px",
              }}
              href="https://www.linkedin.com/in/niki-mortazavi-5486a21bb/"
              target="_blank"
              aria-label="linkdin"
            >
              <LinkedInIcon
                style={{
                  color: "#fd3838",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
              />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hero;
