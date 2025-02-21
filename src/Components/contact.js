import React from 'react';
import "./contact.css";



const contact = () => {
  return (
    <>
    {/* <div>Navbar</div>
    <Link to="/"  > Home</Link>
    <Link to="/about"  > About</Link>
    <Link to="/contact"  > Contact</Link> */}

<div class="container contact-section">
        {/* <h2><span>Reach</span> & Get In Touch With Us !</h2>
        <button class="btn btn-custom mt-3">Get Information</button> */}
        
        <h3 class="mt-4 fs-2">Contact & Join Together</h3>
        
        <div class="row mt-4">
            <div class="col-md-6">
                <div class="location-card">
                    <h5><i class="fa-solid fa-location-dot"></i><span class="fw-bold">Location</span></h5>
                    <p>visit us at</p>
                    <h4>Nagpur Location</h4>
                    <p>G-5, Anand Rajni Apartment, I.T. Park Road, Opp Datta Mandir, Nagpur - 440022</p>
                    <h4>USA Location</h4>
                    <p>512 Boardway NY 10012, New York YX 10012 USA.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="info-card">
                    <i class="bi bi-person-lines-fill"></i>
                    <div>
                        <p>Connect with us <span class="text-danger fw-bold">For Contact</span></p>
                        <p>Mob: <a href="tel:+919623910069">+91 9623910069</a></p>
                    </div>
                </div>
                <div class="info-card">
                    <i class="bi bi-envelope"></i>
                    <div>
                        <p>Connect with us <span class="text-danger fw-bold">For Mail</span></p>
                        <p>Email: <a href="mailto:axiomtechguru@gmail.com">axiomtechguru@gmail.com</a></p>
                    </div>
                </div>
                <div class="info-card">
                    <i class="bi bi-whatsapp"></i>
                    <div>
                        <p>Connect with us <span class="text-danger fw-bold">For Chats</span></p>
                        <p>Mob: <a href="tel:+919623910069">+91 9623910069</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </>
    
    )
}

export default contact