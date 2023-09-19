import "../css/App.css";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";

function ImageLearningRoadMap(props) {
    return (
      <Col className="d-flex justify-content-center">
        <Image fluid src={props} />
      </Col>
    );
  }

export default ImageLearningRoadMap;