import { Layout } from "antd";
import "./LayoutDefault.css"
import HeaderPath from "../../components/HeaderPath/HeaderPath";
import { useState } from "react";
import SiderPath from "../../components/SiderPath";
import ContentPath from "../../components/ContentPath";

const { Sider, Content } = Layout;



function LayoutDefault() {

  const [key, setKey] = useState("");

  const handleRender = (value) => {
    setKey(value);
  }

  return (
    <>
      <Layout className="layout">
        <header style={{width:"5%"}}>
          <HeaderPath onRender={handleRender} />
        </header>
        <Sider style={{background: "#F5F7FB"}} theme="light" width="25%">
          <SiderPath keyName={key}/>
        </Sider>
        <Content height="70%">
          <ContentPath/>
        </Content>
      </Layout>
    </>
  )
}

export default LayoutDefault;