// components/Features.js
import React from "react";
import "./Features.css";

function Features() {
  const features = [
    {
      icon: "an.png",
      title: "Clinically Studied",
      description: "All products that we offer have undergone lab and safety tests",
    },
    {
      icon: "f.png",
      title: "Vegetarian Friendly",
      description: "We have a wide selection of vegetarian products to meet your needs",
    },
    {
      icon: "a.png",
      title: "Made In India",
      description: "Shop local and explore health products made right here in India",
    },
    {
      icon: "d.png",
      title: "Free Shipping",
      description: "We deliver to your door with no shipping costs on your orders",
    },
    {
      icon: "c.png",
      title: "No Risk",
      description: "We ensure that all products are safe and within their use-by date",
    },
    {
      icon: "b.png",
      title: "GMO Free",
      description: "Natural, no modified products and derivatives for those who need it",
    },
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <img src={feature.icon} alt={feature.title} className="feature-icon" />
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
