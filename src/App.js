import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/ContactMe/Contact';
import Aboutme from './components/AboutMe/Aboutme';
import Resume from './components/Home/Resume/Resume';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Home/>
      <Aboutme/>
      <Resume/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
