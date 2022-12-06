import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex flex-col justify-center bg-red-700 h-16">
        <ul className="flex justify-around items-center">
          <li>
            <h1>Avec les doigts</h1>
          </li>
          <div className="flex items-center">
            <li>
              <input className="bg-white w-96 h-8 rounded-full"></input>
            </li>
            <li>Catégories</li>
            <li>Thèmes</li>
            <li>Recettes de saison</li>
          </div>
          <li>Mon espace</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
