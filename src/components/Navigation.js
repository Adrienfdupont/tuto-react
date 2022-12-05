import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <NavLink to="/" className={(nav) => (nav.isActive ? "underline" : "")}>
        <li>Accueil</li>
      </NavLink>
      <NavLink
        to="/personal-space"
        className={(nav) => (nav.isActive ? "underline" : "")}
      >
        <li>Espace personnel</li>
      </NavLink>
    </ul>
  );
};

export default Navigation;
