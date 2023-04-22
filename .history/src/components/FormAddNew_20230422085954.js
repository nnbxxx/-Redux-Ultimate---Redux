import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { axios } from "axios";
import { useEffect } from "react";

const FormAddNew = (props) => {
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
      <Container>
        <br />
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Email address: </Form.Label>
            <Form.Control type='email' />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>UserName</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
        </Form>
        <Button variant='primary'>Create</Button>
      </Container>
    </>
  );
};
export default FormAddNew;
