import Carousel from "react-multi-carousel";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import secutiry from '../assets/anningmang.png'
import design from '../assets/tkdh.png'
import software from '../assets/phattrienphanmen.png'

import "react-multi-carousel/lib/styles.css";


function CarouselCompoment() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const urls = [
        { link: "/", images: secutiry, cardTitle: "Tuyển sinh" , subTitle: "Tặng học bổng lên đến 8.000.000đ khi đăng kí khóa học"},
        { link: "design", images: design, cardTitle: "Tuyển sinh" , subTitle: "Tặng học bổng lên đến 8.000.000đ khi đăng kí khóa học"},
        { link: "software", images: software, cardTitle: "Tuyển sinh" , subTitle: "Tặng học bổng lên đến 8.000.000đ khi đăng kí khóa học"},
        { link: "/", images: secutiry, cardTitle: "Tuyển sinh" , subTitle: "Tặng học bổng lên đến 8.000.000đ khi đăng kí khóa học"},
        { link: "design", images: design, cardTitle: "Tuyển sinh" , subTitle: "Tặng học bổng lên đến 8.000.000đ khi đăng kí khóa học"},
        { link: "software", images: software, cardTitle: "Tuyển sinh" , subTitle: "Tặng học bổng lên đến 8.000.000đ khi đăng kí khóa học"},
        { link: "/", images: secutiry, cardTitle: "Tuyển sinh" , subTitle: "Tặng học bổng lên đến 8.000.000đ khi đăng kí khóa học"},
        { link: "design", images: design, cardTitle: "Tuyển sinh" , subTitle: "Tặng học bổng lên đến 8.000.000đ khi đăng kí khóa học"},
        { link: "software", images: software, cardTitle: "Tuyển sinh" , subTitle: "Tặng học bổng lên đến 8.000.000đ khi đăng kí khóa học"},
    ];
    return <Container>
        <Carousel responsive={responsive} autoPlay={true} >
        {urls.map((e) => <Card style={{ width: '18rem' }}>
                <Card.Img  style={{height: "288px"}} variant="top" src={e.images}/>
                <Card.Body>
                    <Card.Title>{e.cardTitle}</Card.Title>
                    <Card.Text>
                        {e.subTitle}
                    </Card.Text>
                    <Button href={e.link} variant="primary">Đăng kí ngay</Button>
                </Card.Body>
            </Card>)}
        </Carousel>
    </Container>
}

export default CarouselCompoment