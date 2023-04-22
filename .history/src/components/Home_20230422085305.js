import FormAddNew from "./FormAddNew";
import Header from "./Header";
import TableUser from "./TableUser";

const Home = (props) => {
  return (
    
  );
};

import logo from "./logo.svg";
// import "./App.css";
import { increaseCounter, decreaseCounter } from "./action/actions.js";
import { connect, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
const Home = (props) =>{
  // const dispatch = useDispatch();
  // const count = useSelector((state) => {
  //   return state.counter.count;
  // });
  const fetchAllUser = async () => {
    const re = await axios.get("http://localhost:8080/users/all");
    const data = re && re.data ? re.data : [];
    console.log("🚀 ~ file: App.js:16 ~ fetchAllUser ~ data:", data);
  };
  useEffect(() => {
    fetchAllUser();
  }, []);
  return (
    <>
      <Header />
      <FormAddNew />
      <TableUser />
    </>
  );
}
export default Home;
