import React from "react";
import BurgerMenu from "./Mobile/BurgerMenu";
import NavBar from "./Desktop/NavBar";
import useWindowWidth, { mobile } from "../../hooks/useWinowWidth";

function Header() {
  const windowWidth = useWindowWidth();
  console.log("render Header");

  return (
    <header className="header">
      <div className="header_content">
        <div className="header_logo">Logo</div>
        {windowWidth < mobile ? <BurgerMenu /> : <NavBar />}
      </div>
    </header>
  );
}

export default Header;
