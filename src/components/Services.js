import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCocktail />,
      title: "free cocktail",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla pariatur, nemo ratione libeum?",
    },
    {
      icon: <FaHiking />,
      title: "endless hiking",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla pariatur, nemo ratione libeum?",
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla pariatur, nemo ratione libeum?",
    },
    {
      icon: <FaBeer />,
      title: "strongest beer",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla pariatur, nemo ratione libeum?",
    },
  ];
  return (
    <div className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((service, index) => {
          return (
            <article className="service" key={index}>
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
