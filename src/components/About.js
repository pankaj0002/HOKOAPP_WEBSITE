
import React from 'react'
import '../assets/about.css';
// import {Link} from 'react-router-dom'

import backimg from '../assets/img/backimg.png';
import mob1 from '../assets/img/mob1.png';


export default function About() {
    return (
        <div className="about-container ">
            <div className="row abt-section-1 padding-TOP">
                <div className="header-text text-center">
                    <h3>Imagine. Innovate. Iterate.</h3>
                    <p>We are a bunch of enthusiastic people who love to solve 
                        problems that customers face. We are relentless in imagining, <br/>innovating and iterating</p>
                </div>
            </div>
            <div className="row abt-section-2 pad0">
                <div className="section-2-content section-img col-12 pad0">
                    <img src={backimg}  className="img-fluid " alt="Weblogo" />
                </div>
                   <div className="section-2-text">
                        <h2>ABOUT <strong>HOKO</strong> </h2>
                        <p>HOKO: Hop Online Know Offline, just how the name goes it contains a 
                            comparison of product prices Online with Offline stores near you. HOKO 
                            is One such Application that contains more services for your need 
                            and provides instant access to the latest products from online websites 
                            and as well as offline stores. Services which are provided on HOKO 
                            includes Price Comparison for Shopping, Medicines, Groceries,
                             Recharge & Cabs with offline stores.</p>
                    </div>
                
                    
                
            </div>

            {/*Start of section 2  */}
            <div className=" row section-three margin-zero mt-4">
                <div className="row col-12 child-box ">
                    <div className="section-three-box col-12 col-md-3 bg-color  ">
                        <div className="section-3-box-1 ">
                            <h5 className="box-header">Our Mission</h5>
                            <hr className ="horizontal-line"/>
                            <p>To provide the best offline e-commerce experience and we are obsessively passionate about it.</p>
                        </div>
                        
                    </div>
                    <div className="section-three-box col-12 col-md-3 bg-color box-3-margin">
                        <div className="section-3-box-2">
                                <h5 className="box-header">Our Vision</h5>
                                    <hr className ="horizontal-line"/>
                                        <p>We aspire to be the interface for Uber, Zomato, MakeMyTrip and the likes, with HOKOAPP as the “Hop Online Know Offline”.</p>
                        </div>
                    </div>
                    <div className="section-three-box col-12 col-md-3 bg-color">
                         <div className="section-3-box-3">
                            <h5 className="box-header">Our Values</h5>
                                <hr className ="horizontal-line"/>
                                    <ol>
                                        <li>Transparency & Integrity</li>
                                        <li>Execution is greater than an idea</li>
                                        <li>Teamwork : “Team is greater than a brilliant individual”</li>
                                        <li>Frugality : “Low fixed cost = lower pricing for customer”</li>
                                    </ol>
                        </div>
                    </div>

                </div>
                    

            </div>
            {/* End of Section three */}
            {/*Start of section 4 */}
            <div className=" row section-fourth">
                        <div className="section-four-header">
                             <h3><span className="header-4-text">WHO WE </span><strong>ARE</strong></h3>
                                <hr className="horizontal-line-4"/>
                        </div>
            </div>
            <div className="row section-4-sub-part section-4-subHeader">
                        <div className="col-md-3 sub-header">
                                <div className="sub-header-child-1 sub-header-child-bmargin">
                                    <h3>ChatBot</h3>
                                        <p>Experience the powerful Chatbot. Get regular jokes &
                                             quotes update using chatbot. Get Power of AI in your hands with just one click.</p>
                                </div>
                                <div className="sub-header-child-1 sub-header-child-bmargin">
                                    <h3>Daily News</h3>
                                         <p>Get daily updated new on Tech, entertainment, business, cricket, football and much more.</p>
                                </div>

                                <div className="sub-header-child-1 sub-header-child-bmargin">
                                        <h3>Book Cabs</h3>
                                            <p>Book cabs within the application and get daily offers on your day to day rides.</p>
                                </div>

                                <div className="sub-header-child-1 sub-header-child-bmargin">
                                    <h3>Outstation Cabs</h3>
                                    <p>We provide services to book cabs for outstation travel. Book outstation cabs in a few simple steps.</p>
                                </div>

                        </div>
                        <div className="col-md-3 sub-header">
                        <img src={mob1}  className="img-fluid " alt="Weblogo" />
                        </div>
                        <div className="col-md-3 sub-header">
                        <div className="sub-header-child-2 sub-header-child-bmargin">
                                    <h3>Buy Groceries</h3>
                                        <p>Why download multiple apps when you can book groceries from all in one app? Order groceries at your doorsteps.</p>
                                </div>
                                <div className="sub-header-child-2 sub-header-child-bmargin">
                                    <h3>Around Me</h3>
                                         <p>Find places like restaurants, bus stops, banks, ATMs, hotels, theatre and more with around me.</p>
                                </div>

                                <div className="sub-header-child-2 sub-header-child-bmargin">
                                        <h3>Instant Credit</h3>
                                            <p>Running out of money? Get up to Rs.300000 Instant loan on HOKOAPP.</p>
                                </div>

                                <div className="sub-header-child-2 sub-header-child-bmargin">
                                    <h3>Find Trains & PNR Status</h3>
                                    <p>Check PNR status on the go with app integrated PNR checking system. Find trains from the source station to the destination station in just a few simple steps.</p>
                                </div>
                        </div>
            </div>
{/*END of section 4 */}

{/* Section footer start */}
                    <div className="row footer mt-4">
                        <div className="footer-nav pt-4">
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#"> Refund Policy</a></li>
                                <li><a href="#">Terms & Conditions </a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                            <p>Copyright © 2019 Pricyfy Technologies Ltd. All Rights Reserved</p>
                        </div>
                    </div>

{/* Section footer END */}
           
        </div>

        
    )
}

 
