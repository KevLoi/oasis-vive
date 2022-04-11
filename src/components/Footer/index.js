import { useState, useEffect } from 'react';
import {
	Instagram, 
	Facebook, 
	Mail
} from '@mui/icons-material';
import './footer.css';
import logo from '../../images/oasis-transparent.png';

const Footer = () => {

	const [screenSize, setScreenSize] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', getWindowSize);
		return () => window.removeEventListener('resize', getWindowSize)
	});

	const getWindowSize = () => {
    setScreenSize(window.innerWidth);
  }

	return (
		<div className="container-fluid" id="footer">
			<div className="d-flex flex-wrap justify-content-between align-items-center">
				<div className="text-start footer-link d-flex flex-fill">
					<img src={logo} alt="logo" />
				</div>
				<div className="text-start footer-link d-flex flex-fill justify-content-center">
					<a href="mailto:oasis.vive76@gmail.com">
						<Mail className="footer-icon" />
						{screenSize >= 900 && <span className="icon-desc">oasis.vive76@gmail.com</span>}
					</a>
				</div>
				<div className="text-start footer-link d-flex flex-fill justify-content-center">
					<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oasisvive/">
						<Instagram className="footer-icon" />
						{screenSize >= 900 && <span className="icon-desc">Instagram Page</span>}
					</a>
				</div>
				<div className="text-start footer-link d-flex flex-fill justify-content-center">
					<a target="_blank" href="https://www.facebook.com/OasisLives/" rel="noopener noreferrer">
						<Facebook className="footer-icon" />
						{screenSize >= 900 && <span className="icon-desc">Facebook Page</span>}
					</a>
				</div>
				<div className="text-start d-flex flex-fill copyright justify-content-end">
					&copy; OasisVive 2021
				</div>
			</div>
		</div>
	);
}

export default Footer;