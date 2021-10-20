
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import CommunityHands from '../../images/communityHands.jpg';
import './home.css';
import Moreno from '../../images/brandon-moreno.png';
import community from '../../images/community-vector.png';

const Home = () => {
    return ( 
        <div id="Home">
            <div className="header container-fluid">
                <div className="d-flex header-content justify-content-around align-items-center flex-wrap">
                    <div className="text-start">
                        <p className="display-4" style={{fontWeight: '400'}}>Oasis Vive</p>
                        <p className="fs-5">Providing the tools and resources for success <br /> in the community of Oasis, CA</p>
                        {/* <Link to="/donation"><button type="button" className="donation-btn">Donate</button></Link> */}
                    </div>
                    <div className="text-center">
                        <img src={community} height="250px" width="auto" alt="logo" />
                    </div>
                </div>
            </div>
            <div className="home-body container">
                {/* <div className="d-flex justify-content-center">
                    <Link to="/partners">
                        <Paper elevation={5} className="partners">
                            <div className="d-flex align-items-center justify-content-evenly flex-wrap">
                                {partners.map((partner, index) => <img src={partner} style={{padding: '12px 16px'}} height="60px" width="auto" alt={index} /> )}
                            </div>
                        </Paper>
                    </Link>
                </div> */}
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