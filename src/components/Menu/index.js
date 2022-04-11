import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Popover,
    List,
    ListItem,
    ListItemText,
    IconButton
} from '@mui/material';
import {
    Instagram,
    Facebook
} from '@mui/icons-material';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../images/oasis-transparent.png';
import classNames from 'classnames';
import './menu.css';
import Hamburger from 'hamburger-react';

const links = [
    'Home',
    'Team',
    'Events',
    'Success',
];

const Navbar = (props) => {

    const [activePage, setActivePage] = useState('');
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [isOpen, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        window.addEventListener('resize', getWindowSize);

        const path = props.location.pathname.length > 1 
            ? props.location.pathname.slice(1)
            : 'home';

        setActivePage(path);

        return () => {
            window.removeEventListener('resize', getWindowSize);
        }
    }, [props.location.pathname, props.location.pathname.length]);

    const getWindowSize = () => {
        setScreenSize(window.innerWidth);
    }

    const socialMediaLinks = () => {
        return (
            <>
                <a href="https://instagram.com" className="media">
                    <Instagram className="footer-icon" />
                </a>
                <a href="https://facebook.com" className="media">
                    <Facebook className="footer-icon" />
                </a>
            </>
        );
    }

    return ( 
        <div id="menu">
            <AppBar position="static" color="transparent" classes={{ root: 'app-bar' }}>
                <Toolbar>
                    <Link 
                        to="/" 
                        className={classNames("logo text-start", {"flex-grow-1": screenSize <= 900})}
                        onClick={() => setActivePage('home')}
                    >
                        <img src={logo} height="50px" width="auto" alt="logo" />
                    </Link>

                    {screenSize > 900 && 
                    <>
                        <div className="nav-links">
                        {links.map(link => {
                            const lowerCaseLink = link.toLowerCase();
                            return (
                                <Link 
                                    to={lowerCaseLink === 'home' ? '/' : `/${lowerCaseLink}`} 
                                    className={classNames("link", {"active-link": activePage === lowerCaseLink})}
                                    key={link}
                                >
                                    {link}
                                </Link>
                            )
                        })}
                        </div>
                        <div className="media-links">
                            {socialMediaLinks()}
                        </div>
                    </>}

                    {screenSize <= 900 && 
                        <>
                            <IconButton aria-label="open menu" component="span" onClick={(e) => setAnchorEl(e.currentTarget)} style={{padding: '0'}}>
                                <Hamburger 
                                    toggled={isOpen} 
                                    toggle={setOpen}
                                    size={28}
                                />
                            </IconButton>

                            <Popover
                                id="menu-popover"
                                open={isOpen}
                                anchorEl={anchorEl}
                                onClose={() => setOpen(false)}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <List className="list-popover">
                                {links.map(link => {
                                    const lowerCaseLink = link.toLowerCase();
                                    return (
                                        <ListItem key={link}>
                                            <Link 
                                                to={lowerCaseLink === 'home' ? '/' : `/${lowerCaseLink}`} 
                                                className={classNames("link-popover", {"active-link-popover": activePage === lowerCaseLink})}
                                                onClick={() => setActivePage(lowerCaseLink)}
                                            >
                                                <ListItemText>{link}</ListItemText>
                                            </Link>
                                        </ListItem>
                                    )
                                })}
                                </List>
                            </Popover>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(Navbar);