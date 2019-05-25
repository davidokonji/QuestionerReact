import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { logoutUser } from '../../actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  logout = () => {
    const { Logout } = this.props;
    Logout();
    window.location.assign('/');
  }

  render() {
    const { isOpen } = this.state;
    const { isAdmin } = this.props;
    return (
      <div>
        <Navbar expand='md' dark className='p-3 nav-bar'>
          <NavLink to='/dashboard' className='nav-title'>
              Questioner
          </NavLink>
          <NavbarToggler onClick={this.toggle} className='toggle' />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {
              isAdmin && (
                <NavItem>
                  <NavLink to='/admin' className='nav-link'>Admin</NavLink>
                </NavItem>
              )
            }
              <NavItem>
                <NavLink to='/dashboard' className='nav-link'>Dashboard</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                      user
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                        Your profile
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.logout} className='logout'>
                       Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAdmin: state.auth.isAdmin
});

const mapDispatchToProps = {
  Logout: logoutUser
};

const NavBarConnected = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export {
  NavBar,
  NavBarConnected
};
