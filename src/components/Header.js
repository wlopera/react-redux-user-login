import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Autenticación React - Redux </h1>
      <nav>
        <ul>
          <li>
            <a href="/">Mis productos</a>
          </li>
          <li>
            <a href="/">Mis Ventas</a>
          </li>
          <li>
            <button>Salir</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
