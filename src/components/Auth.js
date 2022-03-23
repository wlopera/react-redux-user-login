import classes from "./Auth.module.css";

const Auth = () => {
  return (
    <main className={classes.auth}>
      <section>
        <form>
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
