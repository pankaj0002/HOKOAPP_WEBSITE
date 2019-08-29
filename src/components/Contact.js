import React from 'react'
import '../assets/contact.css';
import o1 from '../assets/img/o1.png'
import o2 from '../assets/img/o2.png'
import o3 from '../assets/img/o3.png'


export default function Contact() {
    return (
        <div className="contact-container">
            {/* Section one start */}
            <div className="row contact-section-one margin-zero">
                    <div className="contact-header">
                         <h3 className="contact-us-text-1">CONTACT<span className="contact-us-text-2"><strong> US</strong></span></h3>
                         <p>Got questions about product and services? Get in touch- we are just a message/call away.</p>
                    </div>
            </div>
             {/* Section one END */}

              {/* Section Two start */}
            <div className="row contact-section-two margin-zero">
                
                    <div className="col-sm-12 col-md-3 cont-box-dimension"> 
                         
                         <div className="contct-box-content">
                            <img src={o2}  className="img-fluid" alt="o2" />
                         <h3>Address</h3>
                            <h5>Pricyfy Web Technology Pvt Ltd,</h5>
                            <p>#280, UB Spirits, 5th Main Road, Sector 6, HSR Layout, Bengaluru, Karnataka</p>
                         </div>
                    </div>
                    <div className="col-sm-12 col-md-3 box-2-margin cont-box-dimension">
                         <div className="contct-box-content">
                                 <img src={o1}  className="img-fluid" alt="o1" />
                                     <h3>Follow us</h3>
                                     <div className="followus-icon">
                                         <ul>
                                             <li className="face-icon"><i class="fa fa-facebook"></i></li>
                                             <li className="face-icon"><i class="fa fa-instagram"></i></li>
                                             <li className="face-icon"><i class="fa fa-twitter"></i></li>
                                             <li className="face-icon"><i class="fa fa-linkedin"></i></li>


                                         </ul>
                                     </div>
                         </div>
                    </div>
                    <div className="col-sm-12 col-md-3  cont-box-dimension">
                            <div className="contct-box-content">
                                <img src={o3}  className="img-fluid" alt="o3" />
                                     <h3>Working Hours</h3>
                                            <p>Monday to Saturday<br/>24 hours</p>
                         </div>
                    </div>
                

            </div>
             {/* Section two end */}

            {/* Section three start */}
            <div className="row contact-section-3">
                <div className="col-sm-12 col-md-6">
                    <div className="contact-us-header">
                        <h3><i class="fa fa-envelope-square"></i>  By Email</h3><br/>
                        <div className="con-business"><p>Partner with us</p>
                        <p>business@hokoapp.com</p></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6  pt-5 customer-support">
                            <p>Customer Support & others</p>
                            <a href="#">support@hokoapp.com</a>

                        </div>
                        <div className="col-sm-12 col-md-6 pt-5">
                        <p>Careers</p>
                            <a href="#">jobs@hokoapp.com</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <div className="write-to-us">
                   <bold> <button type="button" class="btn btn-secondary">Write to us</button></bold>
                    </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-sm-12 col-md-6">
                    {/* <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.10756033404!2d77.58371181457714!3d12.90080469090235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e587d9effff%3A0x461ef393275e2268!2sPricyfy%20Technologies%20Limited!5e0!3m2!1sen!2sin!4v1567073104174!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe></p> */}
                </div>


            </div>
             {/* Section three end */}

           
        </div>
    )
}
