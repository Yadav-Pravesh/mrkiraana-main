import React from "react";
import { FaShippingFast, FaRupeeSign, FaHeadset,  FaLock, FaArrowRight } from "react-icons/fa";
import "../user/css/heroprocess.css"; 
import logo from '../user/images/img4.jpg'

const processFeatures = [
  {
    icon: <FaShippingFast />,
    title: "Free Shipping",
    subtitle: "Free delivery for orders over ₹999"
  },
  {
    icon: <FaRupeeSign />,
    title: "Quality Guarantee",
    subtitle: "100% authentic products or money back"
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    subtitle: "Customer service available round the clock"
  },
  {
    icon: < FaLock />,
    title: "Secure Payment",
    subtitle: "Multiple payment options including UPI, cards"
  }
];



function HeroProcessSection() {
  return (
    <section className="hero-process-root">
      
           <div className="hero-content">
          <div className="hero-subtitle">Stock Up on Essentials</div>
          <h1 className="hero-title">
            The wait is over: 
 <br />
            Premium grocery collection

          </h1>
          <div className="hero-desc">
            Last call for up to <strong>25%</strong> off on bulk orders!
          </div>
          <button className="hero-btn">
            Buy Now <FaArrowRight style={{ marginLeft: 8 }} />
          </button>
        </div>
       
        <div className="hero-img">
      
          <img src={logo} alt="iPhone 12 max pro" />
        </div>
      
      <div className="process-bar">
        {processFeatures.map((feat, idx) => (
          <div className="process-feature" key={idx}>
            <span className="process-icon">{feat.icon}</span>
            <div>
              <div className="process-title">{feat.title}</div>
              <div className="process-subtitle">{feat.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroProcessSection;
