import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppiontmentBanner from '../AppiontmentBanner/AppiontmentBanner';
import Banner from '../Banner/Banner';
import CommunicateInfo from '../CommunicateInfo/CommunicateInfo';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
     return (
          <div>
               <Navigation/>
               <Banner/>
               <CommunicateInfo/>
               <Services/>
               <AppiontmentBanner/>
               <Testimonial/>
          </div>
     );
};

export default Home;