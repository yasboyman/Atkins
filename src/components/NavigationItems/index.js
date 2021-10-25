import "./index.css";

const NavigationItems = ({ item }) => {
  if (item === "Contact Us") {
    return (
      <a className={"nav_item_last"} href={"#"}>
        {item}
      </a>
    );
  }

  return (
    <a className={"nav_item"} href="#">
      {item}
    </a>
  );
};

export default NavigationItems;
