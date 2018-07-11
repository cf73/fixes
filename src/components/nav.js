import React from "react"
import { Link } from 'gatsby'

class Navigation extends React.Component {
    render() {
        const Nav = styled.div`
           
            top: 30px;
            right: 20px;
        `
        const NavItem = styled.div`
            float: left;
            margin-right: 30px;
        `

        return(
            <Nav>
                <NavItem>The Film</NavItem>
                <NavItem>FAQs</NavItem>
            </Nav>
        )
    }
}

export default Navigation