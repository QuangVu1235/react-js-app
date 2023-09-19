import "../css/App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";

function IconRoadMapCompoment(props) {
    return (
      <>
        <Row>
          {props.map((item) => <>
            <Col lg={6}>
              <Image src={item.icon} fluid />
              <Row>
                <Col>
                  {item.lablesLeft.map((lable, index) => <Card.Text style={{ fontWeight: "500", color: "gray" }}>- {lable} <br /> </Card.Text>)}
                </Col>
  
                <Col>
                  {item.lablesLeft.map((lable, index) => <Card.Text style={{ fontWeight: "500", color: "gray" }}>- {lable} <br /> </Card.Text>)}
                </Col>
              </Row>
            </Col>
          </>)}
        </Row>
      </>
    );
  }

  export default IconRoadMapCompoment;