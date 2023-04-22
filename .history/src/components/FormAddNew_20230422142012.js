import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../action/actions";

const FormAddNew = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isCreating = useSelector((state) => {
    state.user.isCreating;
  });
  const dispatch = useDispatch();
  const handleCreateNewUser = () => {
    dispatch(createNewUser(email, password, username));
  };
  return (
    <>
      <Container>
        <br />
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Email address: </Form.Label>
            <Form.Control
              type='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type='text'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <Button variant='primary' onClick={() => handleCreateNewUser()}>
          Create
        </Button>
      </Container>
    </>
  );
};
export default FormAddNew;
