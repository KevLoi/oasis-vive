import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../images/oasis-transparent.png';
import classNames from 'classnames';
import './menu.css';
import Hamburger from 'hamburger-react';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


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
                    <InstagramIcon className="footer-icon" />
                </a>
                <a href="https://facebook.com" className="media">
                    <FacebookIcon className="footer-icon" />
                </a>
                <a href="https://twitter.com" className="media">
                    <TwitterIcon className="footer-icon" />
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