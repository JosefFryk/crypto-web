import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router';

// CSS
import './App.css';
import GlobalStyles, { Container } from './css/Global';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Features from './pages/Features/Features';
import Whitepaper from './pages/Whitepaper/Whitepaper';
import Pricing from './pages/Pricing/Pricing';
import Footer from './components/Footer';


const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    darkBlue: '#192D41',
    blue: '#228BE6',
    grey: '#25262B',
    lightGrey: '#85878B',
  },

  mobile: {
    xSmall: '501px',
    small: '531px',
    medium: '829px',
    large: '1134px',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <Navbar />
        
       
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/features' element={<Features />} />
            <Route path='/whitepaper' element={<Whitepaper />} />
            <Route path='/pricing' element={<Pricing />} />
          </Routes>
  
       
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
