import "../css/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";

import FormConfirm from "../components/FormConfirm";
import IconRoadMapCompoment from "../components/IconRoadMap";
import ImageLearningRoadMap from "../components/ImageLearningRoadMap";
import HeaderCompoment from "../components/HeaderCompoment";
import BannerCompoment from "../components/BannerCompoment";
import Footer from "../components/footer";
import CarouselCompoment from "../components/carousel";
import TabsComponent from "../components/TabsComponent";

import banner from "../assets/images/learning-roadmap/learning-web/banner1.png";
import benefit from "../assets/images/learning-roadmap/learning-web/LAP-TRINH.jpg";

import hk1 from "../assets/images/learning-roadmap/network-security/ANM_HK1.png";
import hk2 from "../assets/images/learning-roadmap/network-security/ANM_HK2.png";
import hk3 from "../assets/images/learning-roadmap/network-security/ANM_HK3.png";
import hk4 from "../assets/images/learning-roadmap/network-security/ANM_HK4.png";
import hk5 from "../assets/images/learning-roadmap/network-security/ANM_HK5.png";
import hk6 from "../assets/images/learning-roadmap/network-security/ANM_HK6.png";
import hk7 from "../assets/images/learning-roadmap/network-security/ANM_HK7.png";

import icon_hk1 from "../assets/images/learning-roadmap/icons/ICON-HOC-KY-01-1536x299.png";
import icon_hk2 from "../assets/images/learning-roadmap/icons/ICON-HOC-KY-02-1536x300.png";
import icon_hk3 from "../assets/images/learning-roadmap/icons/ICON-HOC-KY-03-1536x300.png";
import icon_hk4 from "../assets/images/learning-roadmap/icons/ICON-HOC-KY-04-1536x299.png";
import icon_hk5 from "../assets/images/learning-roadmap/icons/ICON-HOC-KY-05-1536x299.png";
import icon_hk6 from "../assets/images/learning-roadmap/icons/ICON-HOC-KY-06-1536x300.png";
import icon_hk7 from "../assets/images/learning-roadmap/icons/ICON-HOC-KY-07-1536x300.png";

import hkss from "../assets/images/learning-roadmap/network-security/ANM_HKSS@2x.png";
import image_footer from "../assets/images/learning-roadmap/learning-web/360_F_575408046_oHsnuJXiiEFYgyuUjmuwef5DGpsGtqGa.jpg";

function SoftwareDevelopment() {

  const imageLearning = [hk1, hk2, hk3, hk4, hk5, hk6, hk7];

  const iconsRoadMap = [
    [{
      icon: icon_hk1,
      lablesLeft: ["Đại cương về CNTT", "Nhập môn lập trình", "Toán ứng dụng tin học"],
      lablesRight: [
        "Mạng căn bản",
        "Kiến trúc máy tính và nguyên lý Hệ điều hành",
      ],
    },
    {
      icon: icon_hk2,
      lablesLeft: ["Kỹ thuật lập trình", "Lập trình hướng đối tượng"],
      lablesRight: [
        "Ngôn ngữ lập trình C#/Java/PHP",
        "Cơ sở dữ liệu",
        "Đồ án 1",
      ],
    },],
    [{
      icon: icon_hk3,
      lablesLeft: ["Cấu trúc dữ liệu và giải thuật", "Lập trình Web 1"],
      lablesRight: [
        "Thiết kế Web 1",
        "Nhập môn Công nghệ phần mềm",
      ],
    },
    {
      icon: icon_hk4,
      lablesLeft: ["Thiết kế Web 2", "Kiểm thử An toàn thông tin"],
      lablesRight: [
        "Phân tích và thiết kế phần mềm",
        "Kiểm thử phần mềm",
        "Đồ án 2"
      ],
    },],
    [{
      icon: icon_hk5,
      lablesLeft: ["Nhập môn Trí tuệ nhân tạo", "Kỹ năng nghề nghiệp"],
      lablesRight: [
        "Lập trình Web 3",
        "Bảo mật Web và ứng dụng",
        "Đồ án 3"
      ],
    },
    {
      icon: icon_hk6,
      lablesLeft: ["Thực tập tốt nghiệp"],
      lablesRight: [
        "Chuyên đề hãng CN/DN",
      ],
    },],
    [{
      icon: icon_hk7,
      lablesLeft: ["Bảo vệ đồ án tốt nghiệp"],
      lablesRight: [],
    },
    ]
  ];

  return (
    <>
      {HeaderCompoment()}
      {BannerCompoment(banner)}
      {CarouselCompoment()}

      <Container>
        <Card.Text
          className="text-center p-5"
          style={{
            padding: "10px",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#088395",
          }}
        >
          Ngành phát triển phần mềm được thiết kế tối thiểu 500 giờ trải nghiệm thực tế dưới sự hướng dẫn của doanh nghiệp. Sinh viên sẽ được rèn luyện kĩ năng chuyên môn, tích lũy kinh nghiệm thông qua quá trình học tập tại doanh nghiệp cùng các sản phẩm có khả năng được ứng dụng trong thực tế.
        </Card.Text>
      </Container>

      <Row>
        <Col>
          <Image style={{ width: "100%" }} src={benefit} />
        </Col>
      </Row>

      {TabsComponent()}

      <h1 className="text-center c">ĐĂNG KÝ XÉT TUYỂN NGAY</h1>

      <Row style={{ backgroundColor: "#088395" }}>
        <Col>
          <Container className="p-4">
            <Row>
              <Col lg={6}>{FormConfirm()}</Col>
              <Col lg={6} className="d-flex">
                <Image src={image_footer} fluid />
              </Col>
            </Row>
          </Container>
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

      {Footer()}
    </>
  );
}

export default SoftwareDevelopment;
