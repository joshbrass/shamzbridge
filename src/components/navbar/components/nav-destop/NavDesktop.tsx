import styles from "./NavDesktop.module.css";
import { Link } from "react-router-dom";
import companyLogo from "../../../../assets/images/shazam.png";
import NavLinks from "./comps/nav-links-section/NavLinks";

import { INavLink } from "../../../../models/NavigationTypes";


// Interfaces
interface IProps {
  allNavLinks: INavLink[] | null;
}
function NavDesktop({ allNavLinks }: IProps) {
  

  return (
    <section className={styles.navbar__desktop_view_container}>
      {/* Company Logo section / Left Section  */}
      <Link to={"/"} className={styles.company_logo_wrapper}>
        <img src={companyLogo} alt="resq logo" />
      </Link>

      {/* Nav Link Section / Midle Section*/}
      <NavLinks allNavLinks={allNavLinks} />

      {/* Action Button Section / Right Section */}
     
    </section>
  );
}

export default NavDesktop;
