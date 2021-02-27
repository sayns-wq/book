import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import MySlider from './components/slider/slider';
import GeneralInformation from './components/General_information/General_information';
import Footer from './components/Footer/Footer';
import Content_area from './components/content_area/content';

function App() {
  return (
    <div className="Shop">
  <Header/>
  <NavBar/>
 <GeneralInformation/>
  <Content_area/>
 <Footer/>
    </div>
  );
}

export default App;
