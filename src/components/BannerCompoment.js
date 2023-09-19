import { Image } from "react-bootstrap"

function BannerCompoment(props) {
    return <Image className="p-5" src={props} fluid />
}

export default BannerCompoment;