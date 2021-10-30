import React from "react";
import styles from "./index.module.css";
import atkins from "../../Assets/Logos/Hover Logos.png";
import simens from "../../Assets/Logos/Hover Logos-1.png";
import alstom from "../../Assets/Logos/Hover Logos-2.png";
import networkRail from "../../Assets/Logos/Old Hover Logos-2.png";
import crossRail from "../../Assets/Logos/Old Hover Logos-1.png";
import uniPart from "../../Assets/Logos/Old Hover Logos-4.png";
import transportFLondon from "../../Assets/Logos/Old Hover Logos.png";
import wr from "../../Assets/Logos/Old Hover Logos-3.png";
import UKTrade from "../../Assets/Logos/Old Hover Logos-5.png";
import railAlliance from "../../Assets/Logos/Old Hover Logos-6.png";

const CompanyLogos = () => {
  return (
    <div className={styles.logos_container}>
      <img src={atkins} alt={"atkins"} />
      <img src={networkRail} alt={"network Rail"} />
      <img src={crossRail} alt={"crossRail"} />
      <img src={uniPart} alt={"uniPart"} />
      <img src={alstom} alt={"alstom"} />
      <img src={transportFLondon} alt={"transport for london"} />
      <img src={wr} alt={"wr"} />
      <img src={simens} alt={"simens"} />
      <img src={UKTrade} alt={"UKTrade"} />
      <img src={railAlliance} alt={"railAlliance"} />
    </div>
  );
};

export default CompanyLogos;
