import logo from "./logo.svg";
// import "./App.css";
import { increaseCounter, decreaseCounter } from "./action/actions.js";
import { connect, useDispatch, useSelector } from "react-redux";

import Home from "./components/Home";
function App(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.count;
  });

  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Hello world with React and Hoi Dan IT!</h1>
        <div>Count: {count}</div>

        <button onClick={() => dispatch(increaseCounter())}>
          Increase Count
        </button>

        <button onClick={() => dispatch(decreaseCounter())}>
          Decrease Count
        </button>
      </header> */}
      <Home />
    </div>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
