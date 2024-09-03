import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "At the heart of our donation site lies a deep commitment to community development. We believe that meaningful change starts from within, and our platform is designed to empower communities by fostering collaboration, support, and growth. Every donation made through our site directly contributes to initiatives that strengthen local infrastructures, promote education, and enhance the overall well-being of communities in need.",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "Transparency is the cornerstone of our donation site, ensuring that every contribution is handled with the utmost integrity and openness. We believe that donors deserve to know exactly how their funds are being used, which is why we provide detailed reports, real-time updates, and clear communication throughout the donation process.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "Impact measurement is a key quality that sets our donation site apart. We understand that donors want to see the tangible results of their contributions, which is why we prioritize rigorous impact assessment and reporting. Our platform tracks the progress and outcomes of every funded project, providing detailed insights into how donations are making a difference. By measuring impact, we ensure that resources are used effectively and that each donation contributes to meaningful, measurable change.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
