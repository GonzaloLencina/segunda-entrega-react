import Home from './screens/Home';
import Services from './screens/Services';
import HowWeWork from './screens/HowWeWork';
import Benefits from './screens/Benefits';
import Contact from './screens/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Services/>
    <HowWeWork/>
    <Benefits/>
    <Contact/>
    </div>
  );
}

export default App;
