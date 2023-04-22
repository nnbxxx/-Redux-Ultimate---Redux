import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { axios } from "axios";
import useState from "react";
import useEffect from "react";
const TableUser = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const fetchAllUser = async () => {
    const re = await axios.get("http://localhost:8080/users/all");
    const data = re && re.data ? re.data : [];
    console.log("🚀 ~ file: App.js:16 ~ fetchAllUser ~ data:", data);
  };
  useEffect(() => {
    fetchAllUser();
  }, []);
  return (
    <Container>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>UserName</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{index + 1}</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};
export default TableUser;
