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
    description:'Experienced leader across Sales, Technology Strategy, and Marketing with scientific research background.'
  },
  {
    name: "Raghuram Lanka",
    degree: "MS (CS)",
    role: "Chief Technology Officer",
    img: team2,
    description:'Experience leading core technology and Data & AI platforms in the analytics, healthcare and life sciences domains.'
  },
  {
    name: "Giovanni Bandi",
    degree: "BA, LL.M, PHD",
    role: "Chief Product Officer",
    img: team3,
    description:'Accomplished executive with experience in regulation, financial risk, and asset management.'
  },
  {
    name: "Andre Hadji-Thomas",
    degree: "BENG (HONS)",
    role: "Environmental Modelling Engineer",
    img: team1,
    description:'Machine Learning, environmental modelling, decision-making tools for sustainable development.'
  },
];

const Team = () => {
  return (
    <section className="team-section container-fluid">
      {/* Header */}
      <div className="team-header text-center" >
         <div style={{width:'max-content'}}>
           <h6 className="" style={{fontSize: '22px',
    fontWeight: '500',
    color: 'var(--primary-color)',
    fontFamily: 'var(--secondary-font)'}}>Our Team</h6>
          <div
          style={{
            width: "100%",
            height: "4px",
            background: "linear-gradient(180deg, #1FCBD4 0%, #63C297 91%)",
            borderRadius: "64px",
          }}
        ></div>
     </div>

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
                <p className="team-description">{member.description}</p>
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
