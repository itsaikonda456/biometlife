import React from "react";
import "./Team.css";

import team1 from "../../assets/team5.png";
import team2 from "../../assets/team6.png";
import team3 from "../../assets/team7.png";
import team4 from "../../assets/team8.png";

const teamMembers = [
  {
    name: "Victoria Kimonides",
    degree: "BSC, AKC, PHD",
    role: "Chief Executive Officer",
    img: team4,
  },
  {
    name: "Raghuram Lanka",
    degree: "MS (CS)",
    role: "Chief Technology Officer",
    img: team2,
  },
  {
    name: "Giovanni Bandi",
    degree: "BA, LL.M, PHD",
    role: "Chief Product Officer",
    img: team3,
  },
  {
    name: "Andre Hadji-Thomas",
    degree: "BENG (HONS)",
    role: "Environmental Modelling Engineer",
    img: team1,
  },
];

const Team = () => {
  return (
    <section className="team-section container-fluid">
      {/* Header */}
      <div className="team-header text-center">
        <div className="team-line"></div>

        <h6 className="team-subtitle">Our Team</h6>

        <h2 className="team-title">
          <span className="highlight">Meet the Experts</span>
        </h2>

        <p className="team-desc">
          A multidisciplinary team combining AI, environmental science, and
          business strategy — leading the mission to make biodiversity measurable.
        </p>
      </div>

      {/* Cards */}
      <div className="row justify-content-center g-4 mt-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
            <div className="team-card">
              <img src={member.img} alt={member.name} className="team-img" />

              <div className="team-gradient"></div>

              <div className="team-info">
                <h5 className="team-name">{member.name}</h5>
                <h6 className="team-degree">{member.degree}</h6>
                <p className="team-role">{member.role}</p>
              </div>

              <div className="team-hover-border"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
