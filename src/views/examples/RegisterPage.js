import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

import store from '../../redux/store';
import { useDispatch } from 'react-redux';
import { SignIn, WhoAmI } from "services";
import { signIn, whoAmI } from "../../redux";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import { SignUp } from "services";
import { useHistory } from "react-router-dom";

function RegisterPage() {
  const [usernameFocus, setUsernameFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = React.useState(false);
  const [mailFocus, setMailFocus] = React.useState(false);
  const [birthDateFocus, setBirthDateFocus] = React.useState(false);
  
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");


  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = async (e) => {
    console.log("username: " + username);
    console.log("password: " + password);
    console.log("confirmPassword: " + confirmPassword);
    console.log("mail: " + mail);
    console.log("birth date: " + birthDate);
    let register_result = await SignUp(username, mail, password, birthDate);
    console.log(register_result);
    let result = await SignIn(username, password);
    dispatch(signIn(result)); 
    let result_who = await WhoAmI(store.getState().user.token)
    dispatch(whoAmI(result_who));
    history.push("/profile-page");
  }

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/register.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="JavaScript:void(0);" onSubmit={handleRegister} className="form">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/animAIxpert-logo.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (usernameFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Username..."
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={() => setUsernameFocus(true)}
                        onBlur={() => setUsernameFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (passwordFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password..."
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (confirmPasswordFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Confirm Password..."
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onFocus={() => setConfirmPasswordFocus(true)}
                        onBlur={() => setConfirmPasswordFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (mailFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email address..."
                        type="mail"
                        onChange={(e) => setMail(e.target.value)}
                        onFocus={() => setMailFocus(true)}
                        onBlur={() => setMailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (birthDateFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_calendar-60"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Birth date..."
                        type="date"
                        onChange={(e) => setBirthDate(e.target.value)}
                        onFocus={() => setBirthDateFocus(true)}
                        onBlur={() => setBirthDateFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      type="submit"
                      size="lg"
                    >
                      Create Account
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="/login-page"
                        >
                          Login
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="/"
                        >
                          home
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default RegisterPage;
