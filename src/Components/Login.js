import { Button, Col, Row, Typography } from "antd";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from 'react-router-dom'
const { Title } = Typography;

const credential = new FacebookAuthProvider();

function Login() {
  const navigate = useNavigate();
  const handleLoginFb = () => {
    signInWithPopup(auth, credential)
      .then((result) => {
        // console.log(result); 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, credential, email });
      });
  };
  auth.onAuthStateChanged((user) => {
    if (user) {
      navigate('/')
      return;
    }
    navigate('/login')
  });
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }}>Fun Chat</Title>
          <Button
            block={true}
            type="primary"
            ghost={true}
            style={{ marginBottom: 10 }}
          >
            Đăng nhập bằng facebook
          </Button>
          <Button
            block={true}
            onClick={handleLoginFb}
            type="danger"
            ghost={true}
          >
            Đăng nhập bằng google
          </Button>
        </Col>
      </Row>
    </div>
  );
}
export default Login;
