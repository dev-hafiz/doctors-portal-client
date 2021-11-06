import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppiontmentHeader from '../AppiontmentHeader/AppiontmentHeader';
import AvailableAppiontment from '../AvailableAppiontment/AvailableAppiontment';
const Appiontment = () => {
     const [date, setDate] = React.useState(new Date());
     return (
          <div>
               <Navigation/>
               <AppiontmentHeader date={date} setDate={setDate}/>
               <AvailableAppiontment date={date}/>
               <Footer/>
          </div>
     );
};

export default Appiontment;