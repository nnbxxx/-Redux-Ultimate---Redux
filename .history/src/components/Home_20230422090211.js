import FormAddNew from "./FormAddNew";
import Header from "./Header";
import TableUser from "./TableUser";
import axios from "axios";
import { useEffect } from "react";
const Home = (props) => {
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
};
export default Home;
