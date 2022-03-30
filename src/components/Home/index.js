import { useRef, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import './home.css';
import logo from '../../images/oasis-transparent.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import DescriptionIcon from '@material-ui/icons/Description';
import SendIcon from '@material-ui/icons/Send';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import emailjs from '@emailjs/browser';

const ScholarshipRequirements = [
	'AB540/DACA Students, Eligible/ Residents and citizens',
	'Must have been enrolled in Kindergarten at Oasis Elementary, beginning with the class of 2009-2010',
	'Must graduate from an accredited institution within the state of California with a High School Diploma or General Equivalency Diploma',
	'Must have verification of admittance to an accredited profit or nonprofit institution providing vocational, occupational, and technical or college education on either full-time or part-time basis',
	'GPA requirement: 2.0 Cumulative'
]

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Home = () => {

	const [contactName, setName] = useState('');
	const [contactEmail, setEmail] = useState('');
	const [contactMessage, setMessage] = useState('');
	const [formResponse, setFormResponse] = useState(null);
	const [showFormResponse, setShowFormResponse] = useState(false);


	const contactForm = useRef();

	const handleNameChange = (event) => {
		setName(event.target.value);
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	}

	const isInvalidEmail = (email) => {
		return email.length > 0 && !String(email).match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/);
	}

	const submitForm = (e) => {
		e.preventDefault();

		let hasNameError = false;
		let hasEmailError = false;
		let hasMessageError = false;

		// make sure there's no errors
		if ( !contactName ) hasNameError = true;
		if ( !contactEmail || isInvalidEmail(contactEmail) ) hasEmailError = true;
		if ( !contactMessage ) hasMessageError = true;

		if ( !hasNameError && !hasEmailError && !hasMessageError ) {
			// submit form
			console.log('submitting form');
			emailjs.sendForm('service_rexzi6j', 'template_3uj95nn', contactForm.current, 'yfXGSGjBp-1KKRm84')
				.then(res => {
					setFormResponse(res.status === 200);
					setShowFormResponse(true);
				}, err => {
					setFormResponse(false);
					setShowFormResponse(true);
					console.error(err);
				})
		}
	}

	const handleFormResponseClose = () => {
		setShowFormResponse(false);
	}
	
	return ( 

		<div id="Home">
			<div className="header container-fluid">
				<div className="d-flex w-100">
					<img src={logo} height="75px" width="auto" alt="logo" />
					<div className="d-flex align-items-center justify-content-end" style={{flexGrow: '1'}}>
						<a href="https://www.instagram.com/oasisvive/" className="media" target="_blank" rel="noopener noreferrer">
							<InstagramIcon className="footer-icon" />
						</a>
						<a href="https://www.facebook.com/OasisLives/" className="media" target="_blank" rel="noopener noreferrer" >
							<FacebookIcon className="footer-icon" />
						</a>
						{/* <a href="https://twitter.com" className="media">
							<TwitterIcon className="footer-icon" />
						</a> */}
					</div>
				</div>
				<div className="d-flex header-content justify-content-center align-items-center flex-wrap" style={{marginTop: '-20px'}}>
					<div className="text-center text-light">
						<p className="display-1 fw-bold">Oasis Vive</p>
						<p className="fs-5">
							We strive to develop community engagement, close the educational achievement gap, <br />
							and create opportunities for personal and civic development for the families of Oasis.     
						</p>
					</div>
				</div>
			</div>
			<div className="d-flex body-section justify-content-center" id="oasis-stats">
				<div className="col-10 py-4">
					<div className="col-md-12 py-3">
							<div className="w-100 d-flex justify-content-center">
								<p className="display-4 py-2 fw-bold" style={{marginBottom: '0', color: '#2a9df4'}}>About Oasis</p>
							</div>
					</div>
					<div className="col-md-12 py-3">
						<div className="row">
							<div className="col-md-3 col-sm-12 py-3">
								<Paper elevation={10} className="stats-box">
									<p className="display-5 text-center fw-bold mt-2">4,468</p>
									<p className="fs-6 text-center">
										Total Population in Oasis
									</p>
								</Paper>
							</div>
							<div className="col-md-3 col-sm-12 py-3">
								<Paper elevation={10} className="stats-box">
									<p className="display-5 text-center fw-bold mt-2">$17,968</p>
									<p className="fs-6 text-center">
										Median Household Income
									</p>
								</Paper>
							</div>
							<div className="col-md-3 col-sm-12 py-3">
								<Paper elevation={10} className="stats-box">
									<p className="display-5 text-center fw-bold mt-2">4,280</p>
									<p className="fs-6 text-center">
										Hispanic or Latino (of any race)
									</p>
								</Paper>
							</div>
							<div className="col-md-3 col-sm-12 py-3">
								<Paper elevation={10} className="stats-box">
									<p className="display-5 text-center fw-bold mt-2">55.2%</p>
									<p className="fs-6 text-center">
										Employment Rate
									</p>
								</Paper>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="home-body body-section container-fluid" id="scholarship">
				<div className="row body-section justify-content-center">
					<div className="col-10" style={{paddingTop: '30px'}}>
						<Paper elevation={10} className="scholarship">
							<div className="row d-flex">
								<div className="col-sm-12">
									<p className="display-6 fw-bold text-start">Desert Community Foundation Scholarship</p>
									<hr />
									<p className="text-start py-2 fs-6">
										In partnership with Oasis Elementary, Oasis Vive, and the Desert Community Foundation, 
										this scholarship was created to assist individuals who attended Oasis Elementary school during the years 2009-2010.
									</p>
									<div className="text-start">
										<p className="fs-5">Eligibility Requirements:</p>
										{ScholarshipRequirements.map((req, ndx) => {
											return (
												<div className="d-flex" key={ndx}>
													<div className="pe-3"><CheckRoundedIcon style={{color: 'green' }} /></div>
													<div>{req}</div>
												</div>
											);
										})}
									</div>
									<div className="text-start pt-4">
										<a 
											href="https://docs.google.com/forms/d/1S8AWWWNeiOwMamG7LGu7ikmH6ipnzafOeJN2bwMBCoc/viewform?edit_requested=true" 
											target="_blank" 
											rel="noopener noreferrer"
										>
											<button className="apply-button d-flex align-items-center">
												<DescriptionIcon style={{marginRight: '5px'}} />
												<span>Apply</span>
											</button>
										</a>
									</div>
								</div>
							</div>
						</Paper>
					</div>
				</div>
			</div>
			<div className="d-flex body-section justify-content-center" id="contact-form">
				<div className="col-md-6 col-sm-12">
					<div className="w-100">
						<p className="display-4 fw-bold px-1 py-2">Get In Touch</p>
						<form ref={contactForm} onSubmit={submitForm}>
							<div>
								<TextField 
									className="w-100 my-3 contact-field"
									required 
									variant="filled"
									label="Name"
									id="name"
									name="name"
									value={contactName}
									onChange={handleNameChange}
								/>
							</div>
							<div>
								<TextField 
									className="w-100 my-3 contact-field"
									required 
									error={isInvalidEmail(contactEmail)}
									variant="filled"
									label="Email"
									name="email"
									id="email"
									value={contactEmail}
									onChange={handleEmailChange}
									helperText={isInvalidEmail(contactEmail) ? 'Please enter a valid email address' : ''}
								/>
							</div>
							<div>
								<TextField 
									className="w-100 my-3 contact-field"
									required 
									multiline
									rows={10}
									variant="filled"
									label="Message"
									id="message"
									name="message"
									value={contactMessage}
									onChange={handleMessageChange}
								/>
							</div>
							<div className="d-flex justify-content-end my-3">
								<button 
									className="apply-button d-flex align-items-center" 
									type="submit"
								>
									<span>Send Email</span>
									<SendIcon style={{marginLeft: '5px'}} />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Snackbar open={showFormResponse} autoHideDuration={6000} onClose={handleFormResponseClose}>
				<Alert onClose={handleFormResponseClose} severity={formResponse ? 'success' : 'error'}>
					{formResponse 
						? 'Message was sent! We will get back to you shortly'
						: 'Something went wrong. Please email us directly at oasis.vive76@gmail.com'}
				</Alert>
			</Snackbar>
		</div>
	)
}

export default Home;