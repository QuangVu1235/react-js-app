import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import logo from "./assets/images/logo.png";
import banner from "./assets/images/BANNER-4-NGANH_Mesa-de-trabajo-1-2-scaled.jpg";
import benefit from "./assets/images/anningmang-loi-ich.jpg";

import hk1 from "./assets/images/learning-roadmap/network-security/ANM_HK1.png";
import hk2 from "./assets/images/learning-roadmap/network-security/ANM_HK2.png";
import hk3 from "./assets/images/learning-roadmap/network-security/ANM_HK3.png";
import hk4 from "./assets/images/learning-roadmap/network-security/ANM_HK4.png";
import hk5 from "./assets/images/learning-roadmap/network-security/ANM_HK5.png";
import hk6 from "./assets/images/learning-roadmap/network-security/ANM_HK6.png";
import hk7 from "./assets/images/learning-roadmap/network-security/ANM_HK7.png";

import icon_hk1 from "./assets/images/learning-roadmap/icons/ICON-HOC-KY-01-1536x299.png";
import icon_hk2 from "./assets/images/learning-roadmap/icons/ICON-HOC-KY-02-1536x300.png";
import icon_hk3 from "./assets/images/learning-roadmap/icons/ICON-HOC-KY-03-1536x300.png";
import icon_hk4 from "./assets/images/learning-roadmap/icons/ICON-HOC-KY-04-1536x299.png";
import icon_hk5 from "./assets/images/learning-roadmap/icons/ICON-HOC-KY-05-1536x299.png";
import icon_hk6 from "./assets/images/learning-roadmap/icons/ICON-HOC-KY-06-1536x300.png";
import icon_hk7 from "./assets/images/learning-roadmap/icons/ICON-HOC-KY-07-1536x300.png";

import hkss from "./assets/images/learning-roadmap/network-security/ANM_HKSS@2x.png";

function DropdownItemComponent(props) {
  return <NavDropdown.Item href={props.href}>{props.title}</NavDropdown.Item>;
}

function ImageLearningRoadMap(props) {
  return (
    <Col>
      <Image style={{ width: "100%" }} src={props} />
    </Col>
  );
}

function IconRoadMapCompoment(props) {
  return (
    <>
      <Row>
        {props.map((item) => (
          <Col lg={6}>
            <Image src={item.icon} fluid />
          </Col>
        ))}
      </Row>
      <Row>
        {props.map((item) => (
          <Col lg={6}>
            <Row>
              <Col lg={6}>
                {item.lablesLeft.map((lable, index) => <Card.Text style={{ fontWeight: "500", color: "gray" }}>- {lable} <br /> </Card.Text>)}
              </Col>

              <Col lg={6}>
                {item.lablesLeft.map((lable, index) => <Card.Text style={{ fontWeight: "500", color: "gray" }}>- {lable} <br /> </Card.Text>)}
              </Col>
            </Row>
          </Col>

        ))}
      </Row>
    </>
  );
}

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

      <Button style={{backgroundColor : "#f57e25"}} type="submit">
        Gửi ngay
      </Button>
    </Form>
  );
}

function NetworkSecurity() {
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
    { link: "", title: "Cao đẳng chính quy" },
    { link: "", title: "KHÓA HỌC NGẮN HẠN" },
    { link: "", title: "Đến với iSPACE" },
    { link: "", title: "Hợp Tác Quốc Tế" },
  ];

  const news = [
    { link: "", title: "Tin tức" },
    { link: "", title: "Mẹo công nghệ" },
  ];

  const imageLearning = [hk1, hk2, hk3, hk4, hk5, hk6, hk7];

  const iconsRoadMap = [
    [{
      icon: icon_hk1,
      lablesLeft: ["Đại cương về CNTT", "Cơ sở lập trình"],
      lablesRight: [
        "Kiến trúc máy tính và Hệ điều hành",
        "Toán ứng dụng cho Tin học",
      ],
    },
    {
      icon: icon_hk2,
      lablesLeft: ["Mạng máy tính căn bản", "Cấu trúc dữ liệu và giải thuật"],
      lablesRight: [
        "Ngôn ngữ lập trình Python",
        "Luật ANM và đạo đức trong lĩnh vực CNTT",
      ],
    },],
    [{
      icon: icon_hk3,
      lablesLeft: ["Mạng máy tính nâng cao", "Quản trị hệ thống mạng"],
      lablesRight: [
        "An ninh mạng",
        "Điện toán đám mây",
      ],
    },
    {
      icon: icon_hk4,
      lablesLeft: ["Bảo mật ứng dụng Web", "Kiểm thử An toàn thông tin"],
      lablesRight: [
        "Thâm nhập và phòng thủ",
        "Mật mã và An toàn thông tin",
      ],
    },],
    [{
      icon: icon_hk5,
      lablesLeft: ["Điều tra số", "Phân tích và Đánh giá An toàn thông tin"],
      lablesRight: [
        "Bảo mật hệ thống thông tin",
        "Hệ thống giám sát An toàn thông tin",
      ],
    },
    {
      icon: icon_hk6,
      lablesLeft: ["Phân tích mã độc và kỹ thuật dịch ngược", "Ứng cứu sự cố an ninh mạng"],
      lablesRight: [
        "Ngôn ngữ lập trình Python",
        "Luật ANM và đạo đức trong lĩnh vực CNTT",
      ],
    },],
    [{
      icon: icon_hk7,
      lablesLeft: ["Thực tập tốt nghiệp", "Bảo vệ đồ án tốt nghiệp"],
      lablesRight: [],
    },
    ]
  ];

  return (
    <>
      <header>
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

      <Image style={{ width: "100%" }} src={banner} />

      <Card.Text
        className="text-center"
        style={{
          padding: "10px",
          fontWeight: "bold",
          fontSize: "18px",
          color: "orange",
        }}
      >
        Điểm vượt trội của iSPACE là luôn chắt lọc và cập nhật kiến thức, nền
        tảng mới kết hợp với thực hành thao luyện trên THAO TRƯỜNG MẠNG – Cyber
        Range. Học viên được trực tiếp trải nghiệm các tình huống tấn công mạng
        thực tế, giúp học viên thành thạo và có kinh nghiệm thực tiễn ngay khi
        còn ngồi trên ghế nhà trường.
      </Card.Text>

      <Card.Text
        className="text-center"
        style={{ fontWeight: "bold", fontSize: "18px", color: "orange" }}
      >
        Chương trình đào tạo “Vệ sĩ mạng” của iSPACE sẽ giúp sinh viên học được
        cách rà soát và khắc phục tất cả các lỗ hổng/nguy cơ tiềm ẩn gây mất
        ATTT trong hạ tầng CNTT của các doanh nghiệp/ tổ chức.{" "}
      </Card.Text>

      <Row>
        <Col>
          <Image style={{ width: "100%" }} src={benefit} />
        </Col>
      </Row>

      <Container>
        <h1 className="text-center p-3">LỘ TRÌNH HỌC</h1>

        <Row>{imageLearning.map((item) => ImageLearningRoadMap(item))}</Row>
        <Row className="justify-content-md-center p-3">
          <Col className="d-flex justify-content-center" md="auto">
            <Image style={{ width: "65%" }} src={hkss} />
          </Col>
        </Row>

        <h1 className="text-center p-3">NỘI DUNG CHƯƠNG TRÌNH</h1>
        {iconsRoadMap.map((item) => IconRoadMapCompoment(item))}
      </Container>
      <Row style={{backgroundColor : "#f57e25", marginTop: "50px"}}>
        <Col>
          <Container className="p-4">
            <Row>
              <Col lg={6}>{FormConfirm()}</Col>
              <Col lg={6}>{FormConfirm()}</Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default NetworkSecurity;
