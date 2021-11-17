import Carousel from "react-bootstrap/Carousel";
import img2 from "./Images/img2.png";
import img5 from "./Images/img5.png";
import img4 from "./Images/img4.png";
import Image from "react-bootstrap/Image";
import Card from "./Card";
import "./Home.module.css";

export default function Home() {
  return (
    //   <Container>
    // <Row>
    //   <Col xs={6} md={4}>
    <div className="carousel">
      <Carousel>
        <Carousel.Item className="text-center">
          <Image src={img2} height="100px" thumbnail />
          <Carousel.Caption>
            <h3>PKIND - Bulletin</h3>
            <p>PK Navratri Avatar - Photography Contest</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="Second slide"
            thumbnail
          />

          <Carousel.Caption>
            <h3>PKIND - Bulletin</h3>
            <p>Fostering positive workplace culture virtually</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            height="1000px"
            width="50px"
            alt="Third slide"
            thumbnail
          />

          <Carousel.Caption>
            <h3>{"PKIND - Bulletin"}</h3>
            <p>{"Join Mr. Dinesh Venugopal on LinkedIn group"}</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Card
        imgAdd={"./Images/img5.png"}
        label={"PKIND - Bulletin"}
        text={"Join Mr. Dinesh Venugopal on LinkedIn group"}
      /> */}
      </Carousel>
    </div>
  );
}
