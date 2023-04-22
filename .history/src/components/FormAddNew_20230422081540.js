import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormAddNew = (props) => {
  return (
    <>
      <Container>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' />
          </Form.Group>
        </Form>
        <Button variant='primary'>Create</Button>
      </Container>
    </>
  );
};
export default FormAddNew;
