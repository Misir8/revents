import React, {useState} from 'react';
import {Menu, Container, Button} from "semantic-ui-react";
import {Link, NavLink, withRouter} from "react-router-dom";
import SignOutMenu from "../Menus/SignOutMenu";
import SignInMenu from "../Menus/SignInMenu";

const NavBar = ({history}) => {

    const [authenticated, setAuthenticated] = useState(true);

    const handleSignIn = () => setAuthenticated(true);
    const handleSignOut = () => {
        setAuthenticated(false);
        history.push('/');
    };

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item exact as={NavLink} to='/' header>
                        <img src="./assets/logo.png" alt="logo" />
                        Re-vents
                    </Menu.Item>
                    <Menu.Item as={NavLink} to='/events' name="Events" />
                    <Menu.Item>
                        <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
                    </Menu.Item>
                    {authenticated ?
                        <SignInMenu signOut={handleSignOut}/> :
                        <SignOutMenu signIn={handleSignIn}/>}
                </Container>
            </Menu>
        </div>
    );
};

export default withRouter(NavBar);

