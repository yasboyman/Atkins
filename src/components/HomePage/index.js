import React from "react";
import backgroundImage from "../../Assets/Hero/Hero Background.png";
import NavigationItems from "../NavigationItems";
import "./index.css";
import companyLogo from "../../Assets/ClickBait Industries.svg";
import CompanyLogos from "../CompanyLogos";

const HomePage = () => {
  return (
    <div className="HomePage">
      <img
        src={backgroundImage}
        alt={"background"}
        style={{ backgroundSize: "cover", zIndex: "-1" }}
      />
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

      <div className={"Middle_Text_Container"}>
        <h1 className={"title"}>
          We're <span className={"title_with_span"}> transforming</span> the way
          you work.
        </h1>
        <p className={"subtitle"}>
          Manage your schedule with our cloud based software
        </p>

        <div className={"buttons_container"}>
          <button className={"signUp_btn"}> Sign Up</button>
          <button className={"learnMore_btn"}> Learn More</button>
        </div>
      </div>
      <CompanyLogos />
    </div>
  );
};

export default HomePage;
