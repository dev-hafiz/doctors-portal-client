import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppiontmentBanner from '../AppiontmentBanner/AppiontmentBanner';
import Banner from '../Banner/Banner';
import ContactInfo from '../ContactInfo/ContactInfo';
import DentalCare from '../DentalCare/DentalCare';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
     return (
          <div>
               <Navigation/>
               <Banner/>
               <Services/>
               <DentalCare/>
               <AppiontmentBanner/>
               <Testimonial/>
               <ContactInfo/>
               <Footer/>
          </div>
     );
};

export default Home;