import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action/actions";
const TableUser = (props) => {
  const listUsers = useSelector((state) => state.user.listUsers);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);
  const dispatch = useDispatch();
  const handleDelete = (user) => {
    console.log(user);
  };
  useEffect(() => {
    dispatch(fetchAllUser());
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
          {isError === true ? (
            <>
              <div>Some thing Wrong's, please try again...</div>
            </>
          ) : (
            {isLoading ===true ?<></> :<></>}
            <>
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
                        <Button
                          variant='danger'
                          onClick={(e) => {
                            handleDelete(item);
                          }}
                        >
                          Delete
                        </Button>{" "}
                      </td>
                    </tr>
                  );
                })}
            </>
          )}
        </tbody>
      </Table>
    </Container>
  );
};
export default TableUser;
