import Link from "next/link";
import React, { useRef, useEffect } from "react";
// import PropTypes from "prop-types";

const Navbar = ({ navOpen }: { navOpen: boolean }) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    console.log(lastActiveLink.current);
    console.log(activeBox.current);
    activeBox.current.style.top = lastActiveLink.current?.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current?.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current?.offsetWidth + "px";
    activeBox.current.style.height =
      lastActiveLink.current?.offsetHeight + "px";
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
  }, []);

  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    lastActiveLink.current?.classList.remove("active");
    event?.target.classList.add("active");
    lastActiveLink.current = event?.target as HTMLAnchorElement;

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },

    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={"navbar" + (navOpen ? " active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <Link
          key={key}
          href={link}
          className={className}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {label}
        </Link>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

// Navbar.propTypes = {
//   navOpen: PropTypes.bool.isRequired,
// };

export default Navbar;
