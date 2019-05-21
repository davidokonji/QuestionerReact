import React from 'react';
import { NavLink } from 'react-router-dom';
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

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar expand='md' dark className='p-3 nav-bar'>
          <NavLink to='/dashboard' className='nav-title'>
              Questioner
          </NavLink>
          <NavbarToggler onClick={this.toggle} className='toggle' />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink to='/dashboard' className='nav-link'>Dashboard</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                      Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                        Your profile
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
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

export default NavBar;
