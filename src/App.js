import './App.css';

// components
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Mission from './Components/Mission/Mission';
import AffilateProgram from './Components/AffilateProgram/AffilateProgram';
import Advantages from './Components/Advantages/Advantages';
import NowWhat from './Components/NowWhat/NowWhat';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';

// assets

function App() {
  return (
    <div className='text-yp-gray'>
      
      <Hero/>
      <Plans/>
      <Mission/>
      <AffilateProgram/>
      <Advantages/>
      <NowWhat/>
      <AboutUs/>
      <Footer/>

    </div>
  );
}

export default App;
