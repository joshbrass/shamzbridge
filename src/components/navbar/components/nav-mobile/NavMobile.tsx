import { useEffect, useState } from "react";
import styles from "./NavMobile.module.css";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "../../../../assets/images/shazam.png";
import navburgerIcon from "../../../../assets/images/svg/navburger-icon.svg";
import navcloseIcon from "../../../../assets/images/svg/navclose-icon.svg";
import { INavLink } from "../../../../models/NavigationTypes";

// Interfaces
interface IProps {
  allNavLinks: INavLink[] | null;
}

function NavMobile({ allNavLinks }: IProps) {
  const location = useLocation();
  const [isMobileNavModalVisible, setIsMobileNavModalVisible] = useState(false);

  const handleToggleMobileNavVisibility = function () {
    setIsMobileNavModalVisible(!isMobileNavModalVisible);
  };

  const handleCloseMenuOnLinkClick = (path: string) => {
    setIsMobileNavModalVisible(false);
    if (path.startsWith("#")) {
      const section = document.querySelector(path);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    setIsMobileNavModalVisible(false);
  }, [location]);

  return (
    <div className={styles.MOBILE_navbar_container__inner}>
      {/* Company Logo */}
      <Link to={"/"}>
        <img
          className={styles.mobile__company_logo_img}
          src={companyLogo}
          alt="Company Logo"
        />
      </Link>

      {/* Navburger Container */}
      <div className="nav-burger-container">
        <button
          onClick={() => handleToggleMobileNavVisibility()}
          className="image-wrapper"
        >
          <img src={navburgerIcon} alt="Open Menu" />
        </button>
      </div>

      {/* Dropdown Navbar Container */}
      {isMobileNavModalVisible && (
        <div className={styles.mobile_navbar_modal_container}>
          {/* Navclose Container */}
          <div className={styles.nav_close_container}>
            <Link to={"/"}>
              <img
                className={styles.mobile__company_logo_img}
                src={companyLogo}
                alt="Company Logo"
              />
            </Link>

            <button
              onClick={() => handleToggleMobileNavVisibility()}
              className="image-wrapper"
            >
              <img src={navcloseIcon} alt="Close Menu" />
            </button>
          </div>

          <div className={styles.mobile_nav_links_container}>
            {/* Nav Links Section */}
            {allNavLinks?.map((navLinkObj, index) => (
              <div
                key={index}
                className={styles.mobile_nav_link_wrapper}
                onClick={() => handleCloseMenuOnLinkClick(navLinkObj.path)}
              >
                <Link to={navLinkObj.path}>{navLinkObj.name}</Link>
              </div>
            ))}

            {/* Lower section */}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavMobile;
