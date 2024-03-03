import "./Contact.scss"
import "./Groups.scss"
import { Button } from "antd";
import { UserAddOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from 'antd';

function Contacts() {
  return (
    <>
      <div className="contacts">
        <div className="contacts__header">
          <div className="contacts__header-name">Danh sách liên hệ</div>
          <div className="contacts__header-edit">
            <Button
              className="contacts__header-btn"
              size="large"
              icon={<UserAddOutlined />}
            />
          </div>
        </div>
        <div className="contacts__search">
          <Input placeholder="Tìm kiếm liên hệ" prefix={<SearchOutlined />} className="contacts__search-input" />
        </div>
        
      </div>
    </>
  )
}

export default Contacts;