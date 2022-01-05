import Image from "next/image";
import React from "react";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/philip.jpg"
          alt="My image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Philip</h1>
      <p>I create software, focusing on Front End development</p>
    </section>
  );
};

export default Hero;
