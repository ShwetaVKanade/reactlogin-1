import React from 'react'
import "./home.css";

const Home = () => {
  return (
    <>
      <div class="content mt-5">
      <h2 class="fs-1">Welcome to Axiom Techguru Pvt.Ltd</h2>
      <h4 >IT Solutions, by IT Masters</h4><br />
      <p>At Axiom TechGuru, we are more than just a software company; we are your strategic partner in navigating the digital era. Established with a vision to help businesses transform into agile, data-driven, and customer-centric organizations, we provide cutting-edge technology solutions tailored to your specific needs.
        Our mission is to empower businesses across industries by leveraging the latest advancements in web development, mobile apps, cloud computing, and cybersecurity. We aim to help you streamline operations, enhance customer experiences, and future-proof your business in an increasingly competitive digital landscape.</p>

    </div><br /><br /><br /><h2>Enhance Your Ideas and Business, <br /> We Are Here To Help You</h2>
    <div class="container mt-5">
    <div class="row text-center">
      <div class="col-md-3">
        <div class="custom-card">
          <div class="number">01</div>
          <div class="title">Premium Skills</div>
          <div class="description">
            Resources selected from our trusted network of highly qualified and certified experts.
          </div>
        </div>
      </div>
    
      <div class="col-md-3">
        <div class="custom-card">
          <div class="number">02</div>
          <div class="title">Quality</div>
          <div class="description">
            Quality assured by the use of automated testing and code quality controls as standard.
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="custom-card">
          <div class="number">03</div>
          <div class="title">Speed</div>
          <div class="description">
            Our consultants delivered some of the most complex implementations in the world.
          </div>
        </div>
      </div>
    
      <div class="col-md-3">
        <div class="custom-card">
          <div class="number">04</div>
          <div class="title">Efficiency</div>
          <div class="description">
            Our platform helps deliver digital and cognitive transformation in an agile and innovative manner.
          </div>
        </div>
      </div>
    </div>
  </div>
      <div class="reviews-section"><br /><br /><br />
        <h2>Happy Clients</h2><br/>
          <div class="reviews-container">
            {/* Review 1 */}
            <div class="review-card">
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Client Image" />
              <p>"This team exceeded our expectations! Their attention to detail and innovative approach helped us scale our business effortlessly."</p>
              <h4>Sarah Johnson</h4>
              <span>CEO, Tech Solutions</span>
            </div>

            {/* Review 2 */}
            <div class="review-card">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client Image" />
              <p>"A truly professional team that delivers top-notch quality! Their support and expertise were invaluable to our success."</p>
              <h4>James Miller</h4>
              <span>Founder, Digital Trends</span>
            </div>

            {/* Review 3 */}
            <div class="review-card">
              <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Client Image" />
              <p>"From start to finish, their service was seamless. Highly recommended for anyone looking for a reliable and skilled team."</p>
              <h4>Emily Davis</h4>
              <span>Marketing Head, BrandX</span>
            </div>
          </div>
        </div>



      </>
  );
}
export default Home