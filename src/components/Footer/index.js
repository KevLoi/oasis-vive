import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import './footer.css';
import logo from '../../images/oasis-transparent.png';

const Footer = () => {
	return (
		<div className="container-fluid" id="footer">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center">
					<div className="text-start footer-link d-flex flex-fill">
						<img src={logo} alt="logo" />
					</div>
					<div className="text-start footer-link d-flex flex-fill">
						<a href="mailto:j.kevnloi@gmail.com">
							<MailIcon className="footer-icon" />
							<span className="icon-desc">OasisVive@gmail.com</span>
						</a>
					</div>
					<div className="text-start footer-link d-flex flex-fill" target="_blank" rel="noopener noreferrer">
						<a href="https://instagram.com">
							<InstagramIcon className="footer-icon" />
							<span className="icon-desc">Instagram Page</span>
						</a>
					</div>
					<div className="text-start footer-link d-flex flex-fill">
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
							<FacebookIcon className="footer-icon" />
							<span className="icon-desc">Facebook Page</span>
						</a>
					</div>
					<div className="text-start footer-link d-flex flex-fill">
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
							<TwitterIcon className="footer-icon" />
							<span className="icon-desc">Twitter Page</span>
						</a>
					</div>
					<div className="text-start d-flex flex-fill copyright flex-grow-1">
						&copy; OasisVive 2021
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;