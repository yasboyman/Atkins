import React from "react";
import backgroundImage from "../../Assets/Hero/Hero Background.png";
import NavigationItems from "../NavigationItems";
import "./index.css";
import companyLogo from "../../Assets/ClickBait Industries.svg";

const HomePage = () => {
  return (
    <div className="HomePage">
      <img
        src={backgroundImage}
        alt={"background"}
        style={{ backgroundSize: "cover", zIndex: "-1" }}
      />

      <div className={"top_navigation_container"}>
        <nav
          className={"nav"}
          style={{ color: "white", fontSize: "20px", marginTop: "2%" }}
        >
          <div>
            <img
              src={companyLogo}
              alt={"company logo"}
              style={{ marginRight: "260px", marginLeft: "120px" }}
            />
          </div>
          <NavigationItems item={"About Us"} />
          <NavigationItems item={"Partners"} />
          <NavigationItems item={"Strategy"} />
          <NavigationItems item={"Our Work"} />
          <NavigationItems item={"News"} />
          <NavigationItems item={"WPVC"} />
          <NavigationItems item={"Videos"} />
          <NavigationItems item={"Contact Us"} />
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
