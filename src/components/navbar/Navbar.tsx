import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

import NavMobile from "./components/nav-mobile/NavMobile";
import { INavLink } from "../../models/NavigationTypes";
import { NavigationLinks } from "../../constants/NavigationLinks";
import NavDesktop from "./components/nav-destop/NavDesktop";

function Navbar() {
  // States, Functions and Variables
  // States
  const [allNavLinks, setAllNavLinks] = useState<INavLink[] | null>(null);

  //   Useeffects
  useEffect(() => {
    setAllNavLinks(NavigationLinks);
  }, []);

  return (
    <nav className={styles.navbar_container}>
      {/* Desktop view of navbar */}
      <NavDesktop allNavLinks={allNavLinks} />
      {/* MOBILE VIEW FOR THE NAVBAR LEFT */}
      <NavMobile allNavLinks={allNavLinks} />
    </nav>
  );
}

export default Navbar;
