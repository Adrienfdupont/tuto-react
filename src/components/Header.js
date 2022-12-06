import { NavLink } from "react-router-dom";
import { HiOutlineAdjustments } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="text-white font-lato text-xl">
      <nav className="flex flex-col justify-center bg-red-700 h-16">
        <ul className="flex justify-around items-center">
          <li>
            <NavLink to="/">
              <h1 className="font-sacramento text-4xl">Avec les doigts</h1>
            </NavLink>
          </li>
          <div className="flex items-center">
            <li className="flex items-center">
              <input
                className="bg-white text-black w-96 h-10 rounded-full text-base p-2 drop-shadow-2xl"
                placeholder="Rechercher une recette ou un ingrédient"
              ></input>
              <HiOutlineAdjustments
                size="30"
                color="black"
                className="-translate-x-10 cursor-pointer"
              />
            </li>
            <NavLink to="categories">
              <li className="mr-8 hover:underline">Catégories</li>
            </NavLink>
            <NavLink to="/themes">
              <li className="mr-8 hover:underline">Thèmes</li>
            </NavLink>
            <NavLink to="season-recipes">
              <li className="hover:underline">Recettes de saison</li>
            </NavLink>
          </div>
          <NavLink to="personal-space">
            <li className="flex items-center hover:bg-white hover:text-red-700 rounded-full p-2 duration-500">
              <div className="mr-2">
                <CgProfile size="30" />
              </div>
              Mon espace
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
