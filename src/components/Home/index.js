import Paper from '@material-ui/core/Paper';
import CommunityHands from '../../images/communityHands.jpg';
import './home.css';
import Moreno from '../../images/brandon-moreno.png';
import logo from '../../images/oasis-transparent.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Home = () => {
	
	return ( 
		<div id="Home">
			<div className="header container-fluid">
				<div className="d-flex position-absolute" style={{width: '100%'}}>
					<img src={logo} height="75px" width="auto" alt="logo" />
					<div className="d-flex align-items-center justify-content-end" style={{flexGrow: '1', paddingRight: '20px'}}>
						<a href="https://www.instagram.com/oasisvive/" className="media">
							<InstagramIcon className="footer-icon" />
						</a>
						<a href="https://facebook.com" className="media">
							<FacebookIcon className="footer-icon" />
						</a>
						<a href="https://twitter.com" className="media">
							<TwitterIcon className="footer-icon" />
						</a>
					</div>
				</div>
				<div className="d-flex header-content justify-content-center align-items-center flex-wrap">
					<div className="text-center text-light">
						<p className="display-1 fw-bold">Oasis Vive</p>
						<p className="fs-5">
							We strive to develop community engagement, close the educational achievement gap, <br />
							and create opportunities for personal and civic development for the families of Oasis.     
						</p>
					</div>
				</div>
			</div>
			<div className="home-body container">
				<div className="row body-section justify-content-center">
					<div className="col-11" style={{paddingTop: '30px'}}>
						<div className="row">
							<div className="col-md-4 col-sm-12">
								<p className="display-4 text-start">50% <span className="fs-5">children in US</span></p>
								<p className="fs-6 text-start">
									He was an expert but not in a discipline that anyone could fully appreciate.
								</p>
							</div>
							<div className="col-md-4 col-sm-12">
								<p className="display-4 text-start">103 <span className="fs-5">families in Oasis</span></p>
								<p className="fs-6 text-start">
									He was an expert but not in a discipline that anyone could fully appreciate.
								</p>
							</div>
							<div className="col-md-4 col-sm-12">
								<p className="display-4 text-start">50% <span className="fs-5">children in US</span></p>
								<p className="fs-6 text-start">
									He was an expert but not in a discipline that anyone could fully appreciate.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row body-section justify-content-center">
					<div className="col-md-10">
						<p className="display-3">Our Goals</p>
						<p className="fs-6">
							He was an expert but not in a discipline that anyone could fully appreciate. 
							He knew how to hold the cone just right so that the soft server ice-cream fell into it at the 
							precise angle to form a perfect cone each and every time. 
						</p>
					</div>
				</div>
				<div className="row body-section justify-content-center">
					<div className="col-sm-12">
						<div className="row">
							<div className="col-md-6 col-xs-12">
								<div className="row d-flex align-items-center">
									<div className="col-md-7 col-sm-12">
										<img src={CommunityHands} width="100%" alt="..." />
									</div>
									<div className="col-md-5 col-sm-12 text-start">
										<h1>Community</h1>
										<p className="fs-6">
											He was an expert but not in a discipline that anyone could fully appreciate.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-12">
								<div className="row d-flex align-items-center">
									<div className="col-md-7 col-sm-12">
										<img src={CommunityHands} width="100%" alt="..." />
									</div>
									<div className="col-md-5 col-sm-12 text-start">
										<h1>Mentorship</h1>
										<p className="fs-6">
											He was an expert but not in a discipline that anyone could fully appreciate. 
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row body-section justify-content-center">
					
					<div className="col-10" style={{paddingTop: '30px'}}>
						<div className="row justify-content-center">
							<div className="col-8">
								<Paper elevation={10} className="spotlight-header">
									<p className="display-6">Member Spotlight</p>
								</Paper>
							</div>
						</div>
						
						<Paper elevation={10} className="spotlight">
							<div className="row d-flex align-items-center">
								<div className="col-md-4 col-sm-12">
									<img src={Moreno} width="100%" height="auto" alt="..." />
								</div>
								<div className="col-md-8 col-sm-12 text-start">
									<h1>Brandon Moreno</h1>
									<p className="fs-5">UFC Champion</p>
									<p className="fs-5">Another Detail</p>
									<p className="fs-5">
										Description of accomplishments. Turning away from the ledge, he started slowly down the mountain, deciding that he would satisfy his curiosity about the man-house. 
										In the meantime, he would go down into the canyon and get a cool drink, after which he would visit some berry patches just over the ridge, 
										which always came just after the sun had walked past the middle of the sky. 
									</p>
								</div>
							</div>
						</Paper>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;