import React from "react";
import './Recommendations.css'; 

const Recommendations = () => {
  const recommendations = [
    {
      name: "Racquet 1",
      description: "Great for beginners.",
      img: `${process.env.PUBLIC_URL}/images/racquet1.jpg`,
      link: "https://www.topspin.in/product/gki-kung-fu-dx-table-tennis-racket",
    },
    {
      name: "Racquet 2",
      description: "Perfect for intermediate players.",
      img: `${process.env.PUBLIC_URL}/images/racquet2.jpg`,
      link: "http://gkitabletennis.com/gki-table-tennis-rackets.html",
    },
    {
      name: "Racquet 3",
      description: "High performance for advanced players.",
      img: `${process.env.PUBLIC_URL}/images/racquet3.jpg`,
      link: "https://www.andro.de/en/treiber-ci",
    },
  ];

  return (
    <section id="recommendations">
      <h2>Our Recommendations</h2>
      <div className="racquet-container">
        {recommendations.map((racquet, index) => (
          <div className="racquet" key={index}>
            <img src={racquet.img} alt={racquet.name} className="racquet-image" />
            <div className="racquet-details">
              <h3
                className="racquet-link"
                onClick={() => window.open(racquet.link, "_blank")}
              >
                {racquet.name}
              </h3>
              <p className="racquet-description">{racquet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;