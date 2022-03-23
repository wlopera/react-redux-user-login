import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" />
          </div>
          <button>Conectarse</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
