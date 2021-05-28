import React from "react";

function Hero(props) {
  return <header className={props.hero}>{props.children}</header>;
}

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
