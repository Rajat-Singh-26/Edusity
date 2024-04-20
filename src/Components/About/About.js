import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

export default function About({setPlayState}) {
  return (
    <div className="about">
      <div className="about-left"></div>
      <img src={about_img} alt="" className="about-img" />
      <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      <div className="about-right">
        <h4>ABOUT UNIVERSITY</h4>
      <h2>
          Nurturing Tommorrow's
          <br />
          Leaders Today
        </h2>
        <p>
          Embark on atranformative educational journey with our university's
          comprehensive education program. Our cutting-edge curriculum is
          designed to empower students with knowledge, skills, and experience
          needed to excel in the dynamic field of education.
          <br />
          <br/>
          With a focus on innovation,hand-on learning, and perspnalized
          mentorship, our program prepare aspiring educators to make a
          meaningful impact in classrooms, schools and communities.
          <br />
          <br/>
          Whether you aspire to become a teacher, administrator, counselor or
          educational leader, our diverse rang of programs offers the perfect
          pathway to achieve you goals and full potential in shaping the future
          of education.
        </p>
      </div>
    </div>
  );
}
