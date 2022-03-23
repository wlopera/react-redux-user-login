// import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 10 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Contador de React - Redux </h1>
      {show && (
        <div>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler}>Incrementar</button>
            <button onClick={increaseHandler}>Aumentar 10 </button>
            <button onClick={decrementHandler}>Decrementar</button>
          </div>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Alternar el contador</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Contador de React - Redux </h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>
//             Incrementar
//           </button>
//           <button onClick={() => this.decrementHandler(this)}>
//             Decrementar
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Alternar el contador
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
