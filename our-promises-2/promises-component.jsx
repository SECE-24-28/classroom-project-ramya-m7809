import React from "react";
import { OurPromisesStyle } from "./promises-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLaptopCode,
  faMobile,
  faPeopleGroup,
  faRightFromBracket,
  faNetworkWired,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    icon: faLaptopCode,
    color: "rgb(68,178,179)",
    title: "Top Code Quality",
    desc: "You receive W3C fully compliant markup, without any compromise on quality.",
  },
  {
    icon: faMobile,
    color: "rgb(239,175,75)",
    title: "Responsive",
    desc: "We’re dedicated to listening and providing timely, adaptable support.",
  },
  {
    icon: faPeopleGroup,
    color: "rgb(0,189,235)",
    title: "Rockstar Team",
    desc: "A highly experienced team focused solely on delivering exceptional results.",
  },
  {
    icon: faRightFromBracket,
    color: "rgb(134,74,249)",
    title: "Fast Turn-arounds",
    desc: "We deliver high-quality code quickly without sacrificing quality.",
  },
  {
    icon: faNetworkWired,
    color: "rgb(252,41,71)",
    title: "Life-time Support",
    desc: "If any bugs appear in the future, you can always contact us for support.",
  },
  {
    icon: faShieldHalved,
    color: "rgb(50,199,102)",
    title: "Secured Agreement",
    desc: "Your work is completely yours. We secure everything with NDA protection.",
  },
];

const OurPromisesComponent = () => {
  return (
    <OurPromisesStyle
      gapLength="40px"
      padding="3rem 1rem"
      cardGap="2.5rem"
      cardWidth="380px"
      titleSize="36px"
      cardTitleSize="22px"
      cardTextSize="17px"
    >
      <h1>Our Promise</h1>
      <p className="subtitle" style={{ color: "#566683", fontSize: "18px" }}>
        As part of our high quality service, we'd like to offer something extra too.
      </p>

      <div className="parent">
        {items.map((item, index) => (
          <div
            className="child"
            key={index}
            style={{ borderTop: `5px solid ${item.color}` }}
          >
            <div className="title__parent">
              <FontAwesomeIcon icon={item.icon} color={item.color} size="2x" />
              <h1 className="title">{item.title}</h1>
            </div>

            <p className="para">{item.desc}</p>
          </div>
        ))}
      </div>
    </OurPromisesStyle>
  );
};

export default OurPromisesComponent;