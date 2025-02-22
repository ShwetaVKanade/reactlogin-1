import React from 'react';
// Optionally, remove the custom CSS if not needed anymore
import"./home.css";

const Home = () => {
  return (
    <>
      {/* Introduction Section */}
      <section className="container mt-5">
        <div className="text-center">
          <h2 className=" name ">Welcome to Axiom Techguru Pvt. Ltd</h2>
          <h4 className="mb-4">IT Solutions, by IT Masters</h4>
          <p className="font mt-5 fw-medium">
            At Axiom TechGuru, we are more than just a software company; we are your strategic partner in navigating the digital era. Established with a vision to help businesses transform into agile, data-driven, and customer-centric organizations, we provide cutting-edge technology solutions tailored to your specific needs. Our mission is to empower businesses across industries by leveraging the latest advancements in web development, mobile apps, cloud computing, and cybersecurity. We aim to help you streamline operations, enhance customer experiences, and future-proof your business in an increasingly competitive digital landscape.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mt-5">
        <h2 className="text-center mb-5">
          Enhance Your Ideas and Business, <br /> We Are Here To Help You
        </h2>
        <div className="row text-center ">
        <div className="  col-md-3 mb-4">
            <div className=" linear card h-100">
              <div className=" number ">01</div>
              <div className=" card-body">
                <h5 className="card-title">Premium Skills</h5>
                <p className="card-text">
                Resources selected from our trusted network of highly qualified and certified experts.
                </p>
              </div>
            </div>
          </div>
          {/* <div className= " linear col-md-3 mb-4">
            <div className="cards h-100 ">
              <div className="card-header">01</div>
              <div className="card-body"><br></br>
                <h5 className="card-title">Premium Skills</h5>
                <p className="card-text">
                  Resources selected from our trusted network of highly qualified and certified experts.
                </p>
              </div>
            </div>
          </div> */}
          <div className="  col-md-3 mb-4">
            <div className=" linear card h-100">
              <div className="  number ">02</div>
              <div className=" card-body">
                <h5 className="card-title">Quality</h5>
                <p className="card-text">
                  Quality assured by the use of automated testing and code quality controls as standard.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="  linear card h-100">
              <div className=" number">03</div>
              <div className="card-body">
                <h5 className="card-title">Speed</h5>
                <p className="card-text">
                  Our consultants delivered some of the most complex implementations in the world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="  linear card h-100">
              <div className=" number">04</div>
              <div className="card-body">
                <h5 className="card-title">Efficiency</h5>
                <p className="card-text">
                  Our platform helps deliver digital and cognitive transformation in an agile and innovative manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <h2 className="text-center mb-5 mt-5 text-black fs-3">Happy Clients</h2>
      
      <section className="reviews-section mt-5">
  <div className="row">
    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center p-3 shadow-lg border-1">
        <img 
          src="https://randomuser.me/api/portraits/women/45.jpg" 
          className="card-img-top rounded-circle mx-auto d-block" 
          alt="Sarah Johnson"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div className="card-body">
          <p className="card-text accordion-body">
            "This team exceeded our expectations! Their attention to detail and innovative approach helped us scale our business effortlessly."
          </p>
          <h5 className="card-title">Sarah Johnson</h5>
          <p className="card-text">
            <small className="text-muted">CEO, Tech Solutions</small>
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center p-3 shadow-lg border-1">
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          className="card-img-top rounded-circle mx-auto d-block" 
          alt="James Miller"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div className="card-body">
          <p className="card-text ">
            "A truly professional team that delivers top-notch quality! Their support and expertise were invaluable to our success."
          </p>
          <h5 className="card-title">James Miller</h5>
          <p className="card-text">
            <small className="text-muted">Founder, Digital Trends</small>
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center p-3 shadow-lg border-1">
        <img 
          src="https://randomuser.me/api/portraits/women/55.jpg" 
          className="card-img-top rounded-circle mx-auto d-block" 
          alt="Emily Davis"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div className="card-body">
          <p className="card-text ">
            "From start to finish, their service was seamless. Highly recommended for anyone looking for a reliable and skilled team."
          </p>
          <h5 className="card-title">Emily Davis</h5>
          <p className="card-text">
            <small className="text-muted">Marketing Head, BrandX</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
