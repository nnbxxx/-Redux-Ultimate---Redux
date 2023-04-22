import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
const TableUser = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const fetchAllUser = async () => {
    const re = await axios.get("http://localhost:8080/users/all");
    const data = re && re.data ? re.data : [];
    setListUsers(data);
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
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>
                    <Button variant='warning'>Edit</Button>{" "}
                    <Button variant='danger'>Delete</Button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};
export default TableUser;
