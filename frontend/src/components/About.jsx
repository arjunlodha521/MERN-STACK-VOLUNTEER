import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1>Our Story</h1>
          <p>
           Our story began with a simple yet powerful idea : to create a platform where compassion meets action, enabling people to make a tangible difference in the lives of others. Founded by a group of passionate individuals who believe in the power of collective giving, our donation site was born out of the desire to connect generous donors with meaningful causes. We’ve built a community where transparency, accountability, and impact are at the forefront, ensuring that every contribution counts. Our journey is fueled by the belief that together, we can address the most pressing challenges and create lasting change. As we continue to grow, our commitment remains steadfast—to empower communities, uplift lives, and inspire hope through the power of giving.
          </p>
        </div>
        <div className="banner">
          <img src="/about.png" alt="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
