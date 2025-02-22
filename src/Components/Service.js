import React from 'react'
import "./services.css";

const Service = () => {
  return (
    
    <div>
      <div>
        <h1 class="mt-5 text-center">Services For Associates</h1>
      </div>
      <div class="container-associates">
        <div class="card-associates">
          <img src="./image1.png" alt="Industrial Training" />
          <h3>Industrial Orientation Training</h3>
        </div>
    
        <div class="card-associates">
          <img src="./image2.png" alt="Product Development" />
          <h3>Partnership For Product Development</h3>
        </div>
    
        <div class="card-associates">
          <img src="./image3.png" alt="Product Sharing" />
          <h3>Partnership For Product Sharing</h3>
        </div>
    
        <div class="card-associates">
          <img src="./image4.png" alt="Corporate Training" />
          <h3>Corporate Training</h3>
        </div>
      </div>
    
      <br /><br /><br />
      <h1 class="text-center">Web Design And Development</h1>
      <br />
      <p class="text-center fw-bold">Deliver Customized Web apps that promote your business to the next level</p>
    
      <div class="container-web">
        <div class="image-container">
          <img src="./DM.jpeg" alt="Web Design Image" />
        </div>
        <div class="text-container ">
          <h2>Deliver Customized Web Apps That Promote Your Business</h2>
          <p>Website design and development is the most imperative and first step in online branding.
            A good mobile-friendly responsive website helps to build consumer trust, increase brand value,
            and boost your business and company’s ROI. We, Rydot, help you grow your business and take it
            to the next level with our exceptional web design and development services...</p>
        </div>
      </div>
    
      <h2 class="text-center">Our Software Services</h2>
    
      <div class="container-software">
        <div class="card-software border border-1">
          <img src="https://cdn-icons-png.flaticon.com/128/1006/1006771.png" alt="Web Development" />
          <h3>Web Development</h3>
          <p>We create modern, responsive, and high-performance websites tailored to your business needs.</p>
        </div>
        <div class="card-software  border border-1">
          <img src="https://cdn-icons-png.flaticon.com/128/3064/3064197.png" alt="Mobile Apps" />
          <h3>Mobile App Development</h3>
          <p>Build feature-rich mobile applications for iOS and Android with seamless user experiences.</p>
        </div>
        <div class="card-software  border border-1">
          <img src="https://cdn-icons-png.flaticon.com/128/4144/4144785.png" alt="Cloud Solutions" />
          <h3>Cloud Solutions</h3>
          <p>Leverage the power of the cloud for scalable, secure, and cost-effective business solutions.</p>
        </div>
        
      </div>
    </div>

  )
}

export default Service