import { Layout, Row, Col } from "antd";
import "./Register.scss";
import { Button, Form, Input, notification  } from "antd";
import { Link } from "react-router-dom";
import { addUser } from "../../services/userServices";


const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const style = {
  maxWidth: "600px",
  margin: "0 auto",
};
const { Content } = Layout;

function Register() {
  const [form] = Form.useForm()
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.success({
      message: 'Tạo tài khoản thành công',
      description:
        'Đăng nhập với tài khoản đã được tạo!',
      duration: 3,
    });
  };


  const sendAPI = async (data) => {
    const result = await addUser(data);
    if (result) {
      console.log("OK");
    }
  }

  const onFinish = (data) => {
    openNotification();
    delete data["confirmPassword"];
    sendAPI(data);
    form.resetFields();
  };

  return (
    <>
      {contextHolder}
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
                form={form}
              >

                <Row gutter={10}>
                  <Col xl={12}>
                    <Form.Item
                    label="Họ"
                    name="familyName"
                    rules={[
                      {
                        type: "text",
                        required: true,
                        message: "Nhập họ của bạn!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  </Col>
                  <Col xl={12}>
                    <Form.Item
                    label="Tên"
                    name="firstName"
                    rules={[
                      {
                        type: "text",
                        required: true,
                        message: "Nhập tên của bạn!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  </Col>
                </Row>

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

                <Form.Item
                  label="Xác nhận mật khẩu"
                  name="confirmPassword"
                  dependencies={['password']}
                  rules={[
                    {
                      message: "Gõ lại mật khẩu của bạn!",
                      required: true,
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Mật khẩu chưa khớp!'));
                      },
                    }),
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
