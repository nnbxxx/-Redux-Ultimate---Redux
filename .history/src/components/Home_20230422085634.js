import axios from "axios";
import FormAddNew from "./FormAddNew";
import Header from "./Header";
import TableUser from "./TableUser";
import { useEffect } from "react";

const Home = (props) => {
  return (
    <>
      <Header />
      <FormAddNew />
      <TableUser />
    </>
  );
};
export default Home;
