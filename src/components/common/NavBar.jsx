import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
          <NavbarBrand>
            <Link to='/' className='nav-title'>
              Questioner
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className='toggle' />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link to='/dashboard' className='nav-link'>Dashboard</Link>
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
