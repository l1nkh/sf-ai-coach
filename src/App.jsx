import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button';
import Header from './components/Header';
import Section from './components/Section';
import Hero from './components/Hero';
import Features from './components/Features';
import SoftwareIntegration from './components/SoftwareIntegration';
import Services from './components/Services';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Features />
        <SoftwareIntegration />
        <Services />
        <Pricing />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App;