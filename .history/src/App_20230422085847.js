import logo from "./logo.svg";
// import "./App.css";
import { increaseCounter, decreaseCounter } from "./action/actions.js";
import { connect, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import Home from "./components/Home";
function App(props) {
  const fetchAllUser = async () => {
    const re = await axios.get("http://localhost:8080/users/all");
    const data = re && re.data ? re.data : [];
    console.log("🚀 ~ file: App.js:16 ~ fetchAllUser ~ data:", data);
  };
  useEffect(() => {
    fetchAllUser();
  }, []);
  return (
    <div className='App'>
      <Home />
    </div>
  );
}
export default App;
