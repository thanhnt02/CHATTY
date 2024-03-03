import "./Welcome.scss";
import { Layout, Row, Col } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;

const style = {
  maxWidth: "1200px",
  margin: "0 auto",
};

function Welcome() {
  return (
    <>
      <Layout>
        <header className="welcome-header">
          <Row style={style} className="welcome-header__wrap">
            <div className="welcome-header__logo">
              <img
                src={require("../../assets/images/chatty.png")}
                alt="Chatty"
              />
            </div>
            <div className="welcome-header__item">
              <ul>
                <li>
                  <Link to={"/login"} className="button--one">
                    Đăng nhập
                  </Link>
                </li>
                <li>
                  <Link to={"/register"} className="button--two">
                    Đăng ký
                  </Link>
                </li>
                <li>
                  <a href="https://www.facebook.com/g.t.o.p2409" target="_blank" className="button">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </Row>
          
        </header>
        <Content >
        
          <Row style={style} className="welcome-section">
            <Col span={12}>
              {/* <div className="welcome-section"> */}
                <div className="welcome-section__title">
                  Trò chuyện với sự tự tin
                </div>
                <div className="welcome-section__desc">
                  Giúp thể hiện nhiều hơn con người thật của bạn,
                  để trò chuyện người mà bạn cảm thấy thích.
              </div>
              <div className="welcome-section__start">
                <Row>
                  <Col span={24} style={{textAlign: "center"}}>
                    <Link to={"/register"} className="button--two">
                      Bắt đầu ngay
                    </Link>
                  </Col>
                  
                </Row>
              </div>
              {/* </div> */}
            </Col>
            <Col span={2}></Col>
            <Col span={10}>
              <div className="welcome-section__image">
                <img src={require("../../assets/images/find-your-kind-of-people.webp")} alt="" />
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default Welcome;
