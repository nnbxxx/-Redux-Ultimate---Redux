import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormAddNew = (props) => {
  return (
    <>
      <Container>
        <hr />
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
