import styles from "./NavLinks.module.css";
import { INavLink } from "../../../../../../models/NavigationTypes";
import { Link, useLocation } from "react-router-dom";

// Interfaces
interface IProps {
  allNavLinks: INavLink[] | null;
}

function NavLinks({ allNavLinks }: IProps) {
  // Get current location using useLocation hook
  const location = useLocation();

  // Function to handle smooth scrolling for hash links (same-page navigation)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // Check if the path is a hash link (starts with '#')
    if (path.startsWith("#")) {
      e.preventDefault(); // Prevent default link behavior
      const targetId = path.slice(1); // Remove '#' from path to get the element ID
      const targetElement = document.getElementById(targetId);

      // If the target element exists, scroll to it
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={styles.top_nav_link_section}>
      {/* Map through all navigation links */}
      {allNavLinks?.map((navLinkObj, index) => (
        <div
          key={index + 1}
          className={`${styles.nav_link_wrapper} ${
            location.pathname === navLinkObj.path
              ? styles.active_link_wrapper
              : ""
          }`}
        >
          {navLinkObj.path.startsWith("#") ? (
            // If path is a hash link, use anchor tag and smooth scrolling
            <a
              href={navLinkObj.path}
              onClick={(e) => handleScroll(e, navLinkObj.path)}
            >
              {navLinkObj.name}
            </a>
          ) : (
            // If path is not a hash link, use React Router's Link component
            <Link to={navLinkObj.path}>{navLinkObj.name}</Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default NavLinks;
