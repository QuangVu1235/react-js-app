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

import banner from "../assets/images/banner.png";
import benefit from "../assets/images/anningmang-loi-ich.jpg";

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
import image_footer from "../assets/images/footer.png";

function NetworkSecurity() {
  const imageLearning = [hk1, hk2, hk3, hk4, hk5, hk6, hk7];

  const iconsRoadMap = [
    [
      {
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
      },
    ],
    [
      {
        icon: icon_hk3,
        lablesLeft: ["Mạng máy tính nâng cao", "Quản trị hệ thống mạng"],
        lablesRight: ["An ninh mạng", "Điện toán đám mây"],
      },
      {
        icon: icon_hk4,
        lablesLeft: ["Bảo mật ứng dụng Web", "Kiểm thử An toàn thông tin"],
        lablesRight: ["Thâm nhập và phòng thủ", "Mật mã và An toàn thông tin"],
      },
    ],
    [
      {
        icon: icon_hk5,
        lablesLeft: ["Điều tra số", "Phân tích và Đánh giá An toàn thông tin"],
        lablesRight: [
          "Bảo mật hệ thống thông tin",
          "Hệ thống giám sát An toàn thông tin",
        ],
      },
      {
        icon: icon_hk6,
        lablesLeft: [
          "Phân tích mã độc và kỹ thuật dịch ngược",
          "Ứng cứu sự cố an ninh mạng",
        ],
        lablesRight: [
          "Ngôn ngữ lập trình Python",
          "Luật ANM và đạo đức trong lĩnh vực CNTT",
        ],
      },
    ],
    [
      {
        icon: icon_hk7,
        lablesLeft: ["Thực tập tốt nghiệp", "Bảo vệ đồ án tốt nghiệp"],
        lablesRight: [],
      },
    ],
  ];

  return (
    <>
      {HeaderCompoment()}
      {BannerCompoment(banner)}

      <Card.Text
        className="text-center"
        style={{
          padding: "10px",
          fontWeight: "bold",
          fontSize: "18px",
          color: "#088395",
        }}
      >
        Điểm vượt trội của SPACE là luôn chắt lọc và cập nhật kiến thức, nền
        tảng mới kết hợp với thực hành thao luyện trên THAO TRƯỜNG MẠNG – Cyber
        Range. Học viên được trực tiếp trải nghiệm các tình huống tấn công mạng
        thực tế, giúp học viên thành thạo và có kinh nghiệm thực tiễn ngay khi
        còn ngồi trên ghế nhà trường.
      </Card.Text>

      <Card.Text
        className="text-center"
        style={{ fontWeight: "bold", fontSize: "18px", color: "#088395" }}
      >
        Chương trình đào tạo “Vệ sĩ mạng” của SPACE sẽ giúp sinh viên học được
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

        <Row>
          {[
            imageLearning[0],
            imageLearning[1],
            imageLearning[2],
            imageLearning[3],
          ].map((item) => ImageLearningRoadMap(item))}
        </Row>
        <Row className="p-4">
          <Col lg={2}></Col>
          {[imageLearning[4], imageLearning[5], imageLearning[6]].map(
            (item) => (
              <Col>
                <Image lg={3} src={item} fluid />
              </Col>
            )
          )}
          <Col lg={2}></Col>
        </Row>

        <Row className="justify-content-md-center p-3">
          <Col className="d-flex justify-content-center" md="auto">
            <Image style={{ width: "65%" }} src={hkss} />
          </Col>
        </Row>

        <h1 className="text-center p-3">NỘI DUNG CHƯƠNG TRÌNH</h1>
        {iconsRoadMap.map((item) => IconRoadMapCompoment(item))}
      </Container>
      <Row
        className="p-5"
        style={{ backgroundColor: "#088395", marginTop: "50px" }}
      >
        <Col>
          <Row>
            <Col lg={2}></Col>
            <Col lg={4}>{FormConfirm()}</Col>
            <Col lg={2}></Col>
            <Col lg={4}>
              <Image src={image_footer} fluid />
            </Col>
          </Row>
        </Col>
      </Row>

      {Footer()}
    </>
  );
}

export default NetworkSecurity;
