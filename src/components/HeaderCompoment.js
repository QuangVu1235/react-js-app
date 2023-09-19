import "../css/App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownItemComponent from "./DropdownItemComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/images/logo.png";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";

function HeaderCompoment() {
    const overview = [
        { link: "", title: "Giới thiệu" },
        { link: "", title: "Thư Hiệu trưởng" },
        { link: "", title: "Đến với iSPACE" },
        { link: "", title: "Hợp Tác Quốc Tế" },
      ];
    
      const admissions = [
        { link: "", title: "Tuyển sinh 2023" },
        { link: "", title: "Học phí Cao đẳng chính quy" },
        { link: "", title: "Câu hỏi thường gặp (FAQs)" },
      ];
    
      const educationProgram = [
        { link: "/", title: "An ninh mạng" },
        { link: "/software", title: "Phát triển phần mềm" },
        { link: "/design", title: "Thiết kế đồ họa" },
      ];
    
      const news = [
        { link: "", title: "Tin tức" },
        { link: "", title: "Mẹo công nghệ" },
      ];
    return <header>
    <Row>
      <Col sm={4}>
        <Container>
          <Image src={logo} />
        </Container>
      </Col>
      <Col sm={8}>
        <Navbar expand="lg" className="bg-body-white">
          <Navbar.Toggle aria-controls="basic-navbar-nav text-center d-flex justify-content-md-center" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="TỔNG QUAN" id="basic-nav-dropdown">
                {overview.map((item) => DropdownItemComponent(item))}
              </NavDropdown>

              <NavDropdown title="TUYỂN SINH" id="basic-nav-dropdown">
                {admissions.map((item) => DropdownItemComponent(item))}
              </NavDropdown>

              <NavDropdown
                title="CHƯƠNG TRÌNH ĐÀO TẠO"
                id="basic-nav-dropdown"
              >
                {educationProgram.map((item) =>
                  DropdownItemComponent(item)
                )}
              </NavDropdown>

              <NavDropdown title="TIN TỨC" id="basic-nav-dropdown">
                {news.map((item) => DropdownItemComponent(item))}
              </NavDropdown>

              <Nav.Link style={{}} href="#link">
                LIÊN HỆ
              </Nav.Link>

              <NavDropdown title="CÔNG CỤ" id="basic-nav-dropdown">
                {overview.map((item) => DropdownItemComponent(item))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  </header>
}

export default HeaderCompoment;