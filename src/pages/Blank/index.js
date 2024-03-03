import Layout, { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

function Blank() {
  return (
    <>
      <Layout>
        <Content>
          <Outlet/>
        </Content>
      </Layout>
    </>
  )
}

export default Blank;