import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, decodeToken, deleteToken } from '../lib/auth'
import {
  Collapse,
  Button,
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
      isOpen: false,
      collapsed: true
    }
    this.handleLogout = this.handleLogout.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
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
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand id="header" href="/">Two Aimless Asians</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
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
                <DropdownItem>
                  <div onClick={this.handleLogout} className="">Logout</div>
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
