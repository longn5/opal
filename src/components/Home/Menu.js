import React, { useContext } from "react";
import { ApplicationContext } from "../../context/application";
import MenuCard from "./MenuCard";

const Menu = () => {
  const [appState] = useContext(ApplicationContext);

  return (
    <div className="menu-container">
      {appState.menu.items
        ? appState.menu.items.map((item, index) => <MenuCard item={item} key={index}/>)
        : "menu is empty"}
    </div>
  );
};

export default Menu;
