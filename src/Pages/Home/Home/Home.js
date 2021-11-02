import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppiontmentBanner from '../AppiontmentBanner/AppiontmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
     return (
          <div>
               <Navigation/>
               <Banner/>
               <Services/>
               <AppiontmentBanner/>
          </div>
     );
};

export default Home;