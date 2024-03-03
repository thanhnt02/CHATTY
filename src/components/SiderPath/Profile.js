import { Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { FaDotCircle } from "react-icons/fa";
import { Collapse } from "antd";
import "./Profile.scss";

const { Panel } = Collapse;

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile__header">
          <div className="profile__header-name">Hồ sơ cá nhân</div>
          <div className="profile__header-edit">
            <Button
              className="profile__header-btn"
              size="large"
              icon={<EllipsisOutlined rotate={90} />}
            />
          </div>
        </div>
        <div className="profile__avatar">
          <div className="profile__avatar-image">
            <img
              src={require("../../assets/images/find-your-kind-of-people.webp")}
              alt="Avatar"
            />
          </div>
          <div className="profile__avatar-name">Nguyễn Trí Thành</div>
          <div className="profile__avatar-isActive">
            <div className="icon">
              <FaDotCircle />
            </div>
            <div className="isActive">Đang hoạt động</div>
          </div>
        </div>
        <div className="profile__about">
          <Collapse accordion defaultActiveKey={['1']}>
            <Panel header="Hồ sơ của bạn" key="1" style={{background: "#fff"}}>
              <div className="profile__about-title">
                Tên
              </div>
              <div className="profile__about-content">
                Nguyễn Trí Thành
              </div>
              <div className="profile__about-title">
                Email
              </div>
              <div className="profile__about-content">
                test@gmail.com
              </div>
              <div className="profile__about-title">
                Location
              </div>
              <div className="profile__about-content">
                Việt Nam
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default Profile;
