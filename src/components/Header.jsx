import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.user.user);

  function handleLogout() {
    queryClient.removeQueries();
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  }

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex items-center gap-x-2 sm:gap-x-8">
            <p className="text-xs capitalize sm:text-sm">
              Hello, {user.username}
            </p>
            <button
              className="btn btn-outline btn-primary btn-xs uppercase"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-x-6">
            <Link to="/login" className="link-hover link text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link-hover link text-xs sm:text-sm">
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
