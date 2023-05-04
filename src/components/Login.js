import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt=""></img>
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome! This is Linked in Clone project Welcome page!!</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt=""></img>
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1180px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 6px;
  margin-right: 12px;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 10px;
  transition-duration: 150ms;
  font-size: 15px;
  font-weight: 600;
  padding: 10px;
  text-decoration: none;

  &:hover {
    background-color: rgba(100, 150, 255, 0.2);
  }
`;

const Section = styled.section`
  align-content: start;
  display: flex;
  min-height: 700px;
  padding-bottom: 140px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  justify-content: center;
  margin: auto;

  @media (min-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  h1 {
    width: 50%;
    font-size: 50px;
    font-weight: 200;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
    }
  }

  img {
    /* z-index: -1; */
    width: 700px;
    height: 700px;
    /* position: absolute; */
    bottom: -200px;
    right: -150px;

    @media (max-width: 768px) {
      top: 200px;
      width: initial;
      height: initial;
      position: initial;
    }
  }
`;

const Form = styled.div`
  width: 300px;
  margin-top: 100px;
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 35px;
  border: 1px solid black;

  vertical-align: middle;
  z-index: 0;
  transition-duration: 100ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
    // commit test
  }
`;

export default Login;
