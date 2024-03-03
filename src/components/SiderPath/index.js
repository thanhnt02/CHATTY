import Chats from "./Chats";
import Contacts from "./Contact";
import Groups from "./Groups";
import Profile from "./Profile";
import Setting from "./Setting";

function SiderPath(props) {

  const { keyName } = props;

  if (keyName === "user") {
    return (
      <>
        <Profile/>
      </>
    )
  } else if (keyName === "chats") {
    return (
      <>
        <Chats/>
      </>
    )
  } else if (keyName === "groups") {
    return (
      <>
        <Groups/>
      </>
    )
  } else if (keyName === "contacts") {
    return (
      <>
        <Contacts/>
      </>
    )
  } else{
    return (
      <>
        <Setting/>
      </>
    )
  }
}

export default SiderPath;