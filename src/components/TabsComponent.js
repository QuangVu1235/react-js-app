import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";

function TabsComponent() {
    const notes = [
        "Học phí nộp theo từng kỳ học.",
        "Học phí tân sinh viên (học phí kỳ 1) chỉ thu bằng hình thức chuyển khoản đến số tài khoản sau",
        "Học phí đã bao gồm lệ phí thi và cấp bằng, không bao gồm lệ phí thi lại, học lại.",
        "Học phí có thể được điều chỉnh hàng năm không quá 10%; Số kỳ nộp học phí toàn khóa học không thay đổi.",
        "Học phí tính theo thời điểm khai giảng học kỳ, không phụ thuộc vào thời điểm nhập học.",
        "Trong thời gian học tập, các sinh viên được truy cập Internet miễn phí, mượn và tham khảo các loại sách chuyên ngành của thư viện, nghe các buổi nói chuyện chuyên đề, tham gia các hoạt động văn thể.",
        "Sinh viên tự chuẩn bị laptop cá nhân để sử dụng trong quá trình học."
    ]
    return (
        <Container style={{marginTop : "20px"}}>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Đối tượng đào tạo">
                    <h5 className="justify-content-start p-3">ĐỐI TƯỢNG ĐÀO TẠO</h5>
                    <ol>
                        <ul>
                            <li>Tốt nghiệp THPT hoặc tương đương;</li>
                            <li>Sinh viên hệ chính quy các trường Cao đẳng, Đại học.</li>
                            <li>
                                Sinh viên đã hoàn thành chương trình Trung cấp và đã có bằng tốt
                                nghiệp THPT hoặc tương đương.
                            </li>
                        </ul>
                    </ol>
                </Tab>
                <Tab eventKey="profile" title="Học phí">
                    <h5>Học phí áp dụng từ 01/01/2023:</h5>
                    <ol>
                        <ul>
                            <li>Học phí kỳ định hướng đóng 01 lần duy nhất</li>
                            <li>
                                Học phí chuyên ngành đã bao gồm tiếng Anh, có 6 kỳ chuyên ngành.
                            </li>
                        </ul>
                    </ol>
                    <Container>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className="text-center">Học phí kỳ định hướng </th>
                                    <th className="text-center">Học phí chuyên ngành</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2} className="text-center">
                                        Cơ sở Hà Nội, TP Hồ Chí Minh
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <h5>2.600.000 VNĐ</h5>{" "}
                                    </td>
                                    <td className="text-center">
                                        <h5>12.400.000 VNĐ/kỳ</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center" colSpan={2}>
                                        Cơ sở Thái Nguyên, Hải Phòng, Hà Nam, Đà Nẵng, Quy Nhơn, Tây
                                        Nguyên, Cần Thơ
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                    <h5 bg="primary">LƯU Ý:</h5>
                    <ol>
                        <ul>
                            {notes.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </ol>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default TabsComponent;
