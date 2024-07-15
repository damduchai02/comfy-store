import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import NavLinks from "./NavLinks";
import { toggleTheme } from "../features/user/userSlice";

function NavBar() {
  const dispatch = useDispatch();

  function handleTheme() {
    dispatch(toggleTheme());
  }

  const theme = useSelector((state) => state.user.theme);
  const isDarkTheme = theme === "winter";

  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

  return (
    <nav className="bg-base-200">
      <div className="align-element navbar">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to="/"
            className="btn btn-primary hidden items-center text-3xl lg:flex"
          >
            C
          </NavLink>
          {/* Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="w-53 menu dropdown-content menu-sm z-[1] w-52 rounded-box bg-base-200 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        {/* Navbar End */}
        <div className="navbar-end">
          {/* Theme */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleTheme}
              defaultChecked={isDarkTheme}
            />
            {/* Sun Icon */}
            <BsSunFill className="swap-on h-4 w-4" />
            {/* Moon Icon */}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          {/* Cart */}
          <NavLink to="/cart" className="btn btn-circle btn-ghost btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge indicator-item badge-primary badge-sm">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
