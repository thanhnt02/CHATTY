import { Button, Layout, Input } from "antd";
import { VideoCameraOutlined, PhoneOutlined } from "@ant-design/icons";
import "./ContentPath.scss";
import { SmileOutlined, FileZipOutlined, SendOutlined } from "@ant-design/icons"

const { Content } = Layout;

function ContentPath() {
  return (
    <>
      <Layout>
        <header className="h-content">
          <div className="h-content__title">
            <img src={require("../../assets/images/avt1.png")} alt="Name" />
            <div className="h-content__title-name">Nguyễn Trí Thành</div>
          </div>
          <div className="h-content__icon">
            <Button icon={<VideoCameraOutlined />} className="btn"/>
            <Button className="btn" icon={<PhoneOutlined rotate={90}/>} />
          </div>
        </header>
        <Content style={{ height: '78vh'}}>Chưa kết nối với Database</Content>
        <footer style={{ height: '10vh' }} className="f-content">
          <Input placeholder="Nhập tin nhắn" className="input_message"/>
          <Button icon={<SmileOutlined />} className="icon__emoji"/>
          <Button icon={<FileZipOutlined />} className="icon__file"/>
          <Button size="large" icon={<SendOutlined />} className="icon__send"/>
        </footer>
      </Layout>
    </>
  );
}

export default ContentPath;
