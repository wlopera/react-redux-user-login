import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

import classes from "./Header.module.css";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Autenticación React - Redux </h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="#">Mis productos</a>
            </li>
            <li>
              <a href="#">Mis Ventas</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Salir</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
