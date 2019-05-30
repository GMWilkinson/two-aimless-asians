import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, decodeToken, deleteToken } from '../lib/auth'
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
  DropdownItem } from 'reactstrap'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleLogout = this.handleLogout.bind(this)

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  componentDidMount() {
    console.log('Header was mounted')
  }

  handleLogout() {
    deleteToken()
    this.props.history.push('/')
  }

  render() {
    return (
      <nav className="">
        <Navbar color="light" light expand="lg">
          <NavbarBrand href="/">Two Aimless Asians</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/new" className="nav-links">Coco</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/new" className="nav-links">Rice</NavLink>
              </NavItem>
              {isAuthenticated() &&
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Editor
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/new">New Post</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink onClick={this.handleLogout} className="">Logout</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    )
  }
}

export default withRouter(Header)
