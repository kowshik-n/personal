import React from "react";
import "./portfolio.css";
import IMG1 from "../assets/crypto.png";
import IMG2 from "../assets/2.png";
import IMG3 from "../assets/3.png";
import IMG4 from "../assets/4.png";
import IMG5 from "../assets/5.png";
import IMG6 from "../assets/6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "crypto currency tracker",
    github: "https://github.com/kowshik-n/-kowshik-n-Crypto-currency-tracker",
    demo: "https://kowshik-crypto.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "e-commerce website",
    github: "https://github.com/kowshik-n/E-commerce",
    demo: "https://kowshik-ecommerce.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "weather api",
    github: "https://github.com/kowshik-n/weather-api",
    demo: "https://kowshik-weather.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "instagram clone",
    github: "https://github.com/kowshik-n/insta-clone",
    demo: "https://kowshik-insta-clone.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "TODO",
    github: "https://github.com/kowshik-n/To-do",
    demo: "https://kowshik-to-do.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "calculator",
    github: "https://github.com/kowshik-n/calculator",
    demo: "https://kowshik-calculator.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" class="portfolio section">
      <h1 style={{ fontSize: "40px" }}>Portfolio</h1>
      <h5>My Recents Work</h5>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-ctn">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
