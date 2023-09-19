import "../css/App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function FormConfirm() {
    return (
      <Form className="bg-white p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Tên học viên*</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control placeholder="VD: 0123456789" />
          </Form.Group>
        </Row>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="vidu@gmail.com" />
          </Form.Group>
        </Row>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Ngành học</Form.Label>
            <Form.Select defaultValue="Vui lòng chọn">
              <option>Vui lòng chọn</option>
              <option>An ninh mạng</option>
              <option>Quản trị mạng CNTT</option>
              <option>Thiết kế đồ họa</option>
            </Form.Select>
          </Form.Group>
        </Row>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Đối tượng đăng kí</Form.Label>
            <Form.Select defaultValue="Vui lòng chọn">
              <option>Vui lòng chọn</option>
              <option>An ninh mạng</option>
              <option>Quản trị mạng CNTT</option>
              <option>Thiết kế đồ họa</option>
            </Form.Select>
          </Form.Group>
        </Row>
  
        <Button type="submit">Gửi ngay</Button>
      </Form>
    );
  }

  export default FormConfirm;