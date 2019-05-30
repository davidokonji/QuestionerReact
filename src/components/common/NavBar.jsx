import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
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
import { user } from '../../Assets';

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
    const { Logout, history: { push } } = this.props;
    Logout();
    push('/');
  }

  render() {
    const { isOpen } = this.state;
    const {
      isAdmin,
      history: { push },
      profile
    } = this.props;
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
                  <span>
                    <img
                      src={
                        profile === undefined
                        || profile.images === null
                          ? user
                          : profile.images[0]}
                      alt='user'
                      style={{ width: '3.5rem', height: '3.5rem', objectFit: 'contain' }}
                      className='rounded-circle'
                    />
                  </span>
                </DropdownToggle>
                <DropdownMenu right className='p-3'>
                  <DropdownItem onClick={() => push('/user')}>
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
  isAdmin: state.auth.isAdmin,
  profile: state.profile.user,
});

const mapDispatchToProps = {
  Logout: logoutUser
};

const NavBarConnected = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
export {
  NavBar,
  NavBarConnected
};
