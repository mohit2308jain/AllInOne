import React from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends React.Component{
    state = {
        isNavOpen: false
    }

    toggleNav = () => {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    render(){
        return(
            <React.Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarToggler onClick={() => this.toggleNav()} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}