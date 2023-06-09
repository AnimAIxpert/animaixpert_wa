import React from "react";
import { Link } from "react-router-dom";
import store  from "../../redux/store";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {

  return (
    <>
      <Navbar className="bg-info" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand
                    href="/home-page"
                  >
                    AnimaAIxpert
                  </NavbarBrand>
                </div>
                  <Nav className="ml-auto" navbar>
                    {store.getState().user.token ? (<NavItem>
                      <NavLink
                        href="profile-page"
                      >
                        <i className="now-ui-icons users_circle-08"></i>
                        <p>Profile</p>
                      </NavLink>
                    </NavItem>) :
                      (<NavItem>
                        <NavLink
                          href="/login-page"
                        >
                          <i className="now-ui-icons users_circle-08"></i>
                          <p>Login</p>
                        </NavLink>
                      </NavItem>
                      
                      )
                    }
                    {store.getState().user.token ? () => "" 
                    (<NavItem>
                      <NavLink
                        href="/register-page"
                      >
                        <i className="now-ui-icons ui-1_settings-gear-63"></i>
                        <p>Register</p>
                      </NavLink>
                    </NavItem>)
                    : (<NavItem>
                      <NavLink
                        href="/register-page"
                      >
                        <i className="now-ui-icons users_single-02"></i>
                        <p>Register</p>
                      </NavLink>
                    </NavItem>)}
                  </Nav>
              </Container>
            </Navbar>
    </>
  );
}

export default IndexNavbar;
