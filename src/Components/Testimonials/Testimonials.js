import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

export default function Testimonials() {
  const slider = useRef();
  let tx = 0;
  const sliderforward = () => {
    if (tx > -25) {
      tx -= 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const sliderbackward = () => {
    if (tx < -25) {
      tx += 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt=""
        className="next-btn"
        onClick={sliderforward}
      />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={sliderbackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <h3>William Jackson</h3>
                <br />
                <span>(Edusity USA)</span>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decision I've ever made. The supportive
                community,state-of-the-art facilities,and commitment to academic
                excellence have truly exceeded my experctation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <h3>William Jackson</h3>
                <br/>
                <span>(Edusity USA)</span>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decision I've ever made. The supportive
                community,state-of-the-art facilities,and commitment to academic
                excellence have truly exceeded my experctation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <h3>William Jackson</h3>
                <span>(Edusity USA)</span>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decision I've ever made. The supportive
                community,state-of-the-art facilities,and commitment to academic
                excellence have truly exceeded my experctation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <h3>William Jackson</h3>             
                <span>(Edusity USA)</span> 
                
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decision I've ever made. The supportive
                community,state-of-the-art facilities,and commitment to academic
                excellence have truly exceeded my experctation
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
