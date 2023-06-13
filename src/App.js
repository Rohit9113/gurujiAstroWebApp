import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "./components/Navbar";
import VideoCarousel from "./components/VideoCarousel";
import AstrologerCards from './components/AstrologerCards';
import Css from './App.css'
import TheCircle from './components/TheCircle';
import Reviews from './components/Reviews';
import Footer from './components/Footer';


function App() {
  return (
    <ChakraProvider>
    <Navbar />
    <div className='main'>
    <VideoCarousel className="sub" />
    <AstrologerCards />
    </div>
    <TheCircle/>
    <Reviews/>
    <Footer/>
    </ChakraProvider>
  );
}

export default App;
