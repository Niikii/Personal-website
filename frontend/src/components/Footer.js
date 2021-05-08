import { IconButton } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toTheTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "50px 0",
        justifyContent: "flex-end",
      }}
    >
      <IconButton onClick={toTheTop} aria-label="top">
        <ExpandLessIcon
          style={{
            color: "red",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
          fontSize="large"
        />
      </IconButton>
    </div>
  );
};

export default Footer;
