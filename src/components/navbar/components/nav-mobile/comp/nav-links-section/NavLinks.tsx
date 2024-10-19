import { Link } from "react-router-dom";
import styles from "../../../nav-desktop/comps/nav-links-section/NavLinks.module.css";
import { INavLink } from "../../../../../../models/NavigationTypes";

// Interfaces
interface IProps {
  allNavLinks: INavLink[] | null;
}

function NavLinks({ allNavLinks }: IProps) {
  // Function to handle smooth scrolling for same-page section links
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // If it's a hash link, prevent default link behavior
    if (path.startsWith("#")) {
      e.preventDefault();
      const targetId = path.slice(1); // remove '#' from path
      const targetElement = document.getElementById(targetId);

      // If the target element exists, scroll to it
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* All Mobile Nav Links */}
      {allNavLinks?.map((navLinkObj, index) => (
        <div
          key={index + 1}
          className={`${styles.mobile_nav_link_wrapper} ${
            location.pathname === navLinkObj.path
              ? styles.active_link_wrapper
              : ""
          }`}
        >
          {navLinkObj.path.startsWith("#") ? (
            // For same-page section links, use anchor tag and smooth scrolling
            <a
              href={navLinkObj.path}
              onClick={(e) => handleScroll(e, navLinkObj.path)}
            >
              {navLinkObj.name}
            </a>
          ) : (
            // For external routes/pages, use Link from react-router-dom
            <Link to={navLinkObj.path}>{navLinkObj.name}</Link>
          )}
        </div>
      ))}
    </>
  );
}

export default NavLinks;
