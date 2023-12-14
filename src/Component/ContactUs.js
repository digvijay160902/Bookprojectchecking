          
          
import React from 'react';
import Navbar from './Navbar';

export default function ContactUs() {
  return (
    <div className='bg-green-400'>
      <Navbar />
      <div className='py-20'>
        <h1 className='text-3xl font-semibold mb-4 text-center'>Contact Us</h1>
        <p className='mb-4'>
          We're here to assist you in finding the perfect book! Whether you have questions about our services, need book recommendations, or just want to say hello, feel free to reach out to us.
        </p>
        <p className='mb-4'>
          Contact Information:
          <br />
          Email: info@kitab.com
          <br />
          Phone: +1 (123) 456-7890
        </p>
        <p>
          Our dedicated team is ready to help you discover the joy of reading. Don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
