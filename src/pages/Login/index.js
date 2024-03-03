import { Layout, Row, Col } from "antd";
import "./Login.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const style = {
  maxWidth: "600px",
  margin: "0 auto",
};
const { Content } = Layout;

function Login() {

  const navigate = useNavigate();

  const onFinish = (values) => {
    if (values.email === "test@gmail.com" && values.password === "123456") {
      console.log("OK");
      navigate("/dashboard");
    }
  };

  return (
    <>
      <Layout>
        <Content style={{background: "#fff"}}>
          <Row style={style} className="login" justify={"center"}>
            <Col span={24}>
              <div className="login__logo">
                <img
                  src={require("../../assets/images/chatty.png")}
                  alt="Chatty"
                />
              </div>
            </Col>
            <Col span={24}>
              <div className="login__title">Đăng nhập</div>
              <div className="login__subtitle">Đăng nhập để tiếp tục với Chatty</div>
            </Col>
            <Col span={24}>
              <Form
                name="formLogin"
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
                  name="email"
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

                <Row>
                  <Col span={12}>
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>Ghi nhớ</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12} style={{textAlign: "end"}}>
                    <a className="login-form-forgot" href="">
                      Quên mật khẩu?
                    </a>
                  </Col>
                </Row>
                

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="btnSubmit">
                    Đăng Nhập
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={24} className="login__signupnow">
              Chưa có tài khoản  ?&nbsp;
              <Link to={"/register"}  className="login-form-signup">
                Đăng ký ngay
              </Link>
            </Col>
            <Col span={24} className="login__copyright">
              Copyright @ 2024. Crafted by Nguyễn Trí Thành
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default Login;
