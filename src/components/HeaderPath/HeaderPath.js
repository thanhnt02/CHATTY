import { Menu } from "antd";
import "./HeaderPath.scss"
import { FaRegUser } from "react-icons/fa";
import { BsChatSquareDots, BsChatSquareTextFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

function HeaderPath(props) {

  const { onRender } = props;

  const items = [
    {
      // label: <Link to={"/"}>Dashboard</Link>,
      icon: <FaRegUser />,
      key: "user",
    },
    {
      // label: "Apps",
      icon: <BsChatSquareDots />,
      key: "chats",
    },
    {
      // label: "Components",
      icon: <GrGroup />,
      key: "groups",
    },
    {
      // label: <Link to={"/book"}>Booking</Link>,
      icon: <RiContactsLine />,
      key: "contacts",
    },
    {
      // label: <Link to={"/create"}>Create Room</Link>,
      icon: <IoSettingsOutline />,
      key: "setting",
    }
  ]

  const handleClick = (e) => {
    onRender(e.key);
  }

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <BsChatSquareTextFill />
        </div>
        <div className="header__menu">
          <Menu
            onClick={handleClick}
            className="menu"
            mode="inline"
            items={items}
            defaultSelectedKeys={["chat"]}
            defaultOpenKeys={["chat"]}
          />
        </div>
        <div className="header__avatar">
          <img src={require("../../assets/images/find-your-kind-of-people.webp")} alt="" />
        </div>
      </div>
    </>
  )
}

export default HeaderPath;