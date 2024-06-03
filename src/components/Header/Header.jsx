import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>
          <img src='./logo.png' alt='logo' width={100} />
          <div className='h-menu flexCenter'>
            <a href='#residencies'>Residencies</a>
            <a href='#our-value'>Our Value</a>
            <a href='#contact-us'>Contact Us</a>
            <a href='#get-started'>Get Started</a>
            <a href='#contact' className='button'>
              Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
