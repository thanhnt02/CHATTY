import "./Chats.scss"
import { Button } from "antd";
import { UsergroupAddOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from 'antd';

function Chats() {
  return (
    <>
      <div className="chats">
        <div className="chats__header">
          <div className="chats__header-name">Tin nhắn</div>
        </div>
        <div className="chats__search">
          <Input placeholder="Tìm kiếm người dùng" prefix={<SearchOutlined />} className="chats__search-input" />
        </div>
        <div className="chats__header">
          <div className="chats__header-name recent">Gần đây nhất</div>
        </div>

        <div className="chats__list">
          <button>
              <img src={require("../../assets/images/avt1.png")} alt="User" />
            <div className="chats__list-content">
              <div className="name">Nguyễn Trí Thành</div>
              <div className="message">hi!</div>
            </div>
            <div className="chats__list-time">
              1 phút trước
            </div>
          </button>
          <button>
              <img src={require("../../assets/images/avt2.png")} alt="User" />
            <div className="chats__list-content">
              <div className="name">Nguyễn Trí Anh</div>
              <div className="message">Hello</div>
            </div>
            <div className="chats__list-time">
              1 phút trước
            </div>
          </button>
        </div>
        
      </div>
    </>
  )
}

export default Chats;