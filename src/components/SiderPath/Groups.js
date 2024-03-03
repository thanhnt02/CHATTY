import "./Groups.scss"
import { Button } from "antd";
import { UsergroupAddOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from 'antd';

function Groups() {
  return (
    <>
      <div className="groups">
        <div className="groups__header">
          <div className="groups__header-name">Danh sách nhóm</div>
          <div className="groups__header-edit">
            <Button
              className="groups__header-btn"
              size="large"
              icon={<UsergroupAddOutlined />}
            />
          </div>
        </div>
        <div className="groups__search">
          <Input placeholder="Tìm kiếm nhóm" prefix={<SearchOutlined />} className="groups__search-input" />
        </div>
        
      </div>
    </>
  )
}

export default Groups;