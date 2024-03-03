import { Button, Space, Collapse } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { FaDotCircle } from "react-icons/fa";
import "./Setting.scss";

const { Panel } = Collapse;

function Setting() {
  return (
    <>
      <div className="setting">
        <div className="setting__header">
          <div className="setting__header-name">Cài đặt</div>
          <div className="setting__header-edit">
            <Button
              className="setting__header-btn"
              size="large"
              icon={<EllipsisOutlined rotate={90} />}
            />
          </div>
        </div>
        <div className="setting__avatar">
          <div className="setting__avatar-image">
            <img
              src={require("../../assets/images/find-your-kind-of-people.webp")}
              alt="Avatar"
            />
          </div>
          <div className="setting__avatar-name">Nguyễn Trí Thành</div>
          <div className="setting__avatar-isActive">
            <div className="icon">
              <FaDotCircle />
            </div>
            <div className="isActive">Đang hoạt động</div>
          </div>
        </div>
        <div className="setting__about">
          <Collapse accordion className="custom-collapse">
            <Panel header="Hồ sơ của bạn" key="1" style={{background: "#fff", marginBottom:"10px"}} >
              <div className="setting__about-title">
                Tên
              </div>
              <div className="setting__about-content">
                Nguyễn Trí Thành
              </div>
              <div className="setting__about-title">
                Email
              </div>
              <div className="setting__about-content">
                test@gmail.com
              </div>
              <div className="setting__about-title">
                Location
              </div>
              <div className="setting__about-content">
                Việt Nam
              </div>
            </Panel>
            <Panel header="Chính sách" key="2" style={{background: "#fff", marginBottom:"10px"}}>
              Chưa có chính sách
            </Panel>
            <Panel header="Trợ giúp" key="3" style={{background: "#fff"}}>
              
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  )
}

export default Setting;