import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const FormAddNew = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleCreateNewUser = () => {
    console.log("🚀 ~ file: FormAddNew.js:8 ~ FormAddNew ~ email:", email);
    console.log(
      "🚀 ~ file: FormAddNew.js:10 ~ FormAddNew ~ username:",
      username
    );
    console.log(
      "🚀 ~ file: FormAddNew.js:12 ~ FormAddNew ~ password:",
      password
    );
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
