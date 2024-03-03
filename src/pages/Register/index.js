import { Layout, Row, Col } from "antd";
import "./Register.scss";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const style = {
  maxWidth: "600px",
  margin: "0 auto",
};
const { Content } = Layout;

function Register() {
  return (
    <>
      <Layout>
        <Content style={{background: "#fff"}}>
          <Row style={style} className="register" justify={"center"}>
            <Col span={24}>
              <div className="register__logo">
                <img
                  src={require("../../assets/images/chatty.png")}
                  alt="Chatty"
                />
              </div>
            </Col>
            <Col span={24}>
              <div className="register__title">Đăng ký</div>
              <div className="register__subtitle">Tạo tài khoản của riêng bạn với Chatty</div>
            </Col>
            <Col span={24}>
              <Form
                name="formRegister"
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  label="Email"
                  name="username"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Nhập email của bạn!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Mật khẩu"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Nhập mật khẩu của bạn!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="btnSubmit">
                    Đăng Ký
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={24} className="register__signupnow">
              Đã có tài khoản  ?&nbsp;
              <Link to={"/login"}  className="login-form-signup">
                Đăng nhập
              </Link>
            </Col>
            <Col span={24} className="register__copyright">
              Copyright @ 2024. Crafted by Nguyễn Trí Thành
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default Register;
